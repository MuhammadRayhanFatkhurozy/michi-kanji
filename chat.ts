import { GoogleGenAI } from '@google/genai';
import { generateSenseiResponse } from '../src/services/senseiKnowledgeEngine.ts';

const SENSEI_SYSTEM_INSTRUCTION = `Anda adalah "Sensei Kanji Michi" (先生), tutor AI bahasa Jepang yang ramah, hangat, dan sangat berpengetahuan untuk pembelajar asal Indonesia.
Anda membimbing siswa mulai dari dasar aksara (Hiragana & Katakana), tata bahasa kurikulum Minna no Nihongo (Bab 1–25), komunikasi situasi nyata Irodori Can-Do, hingga persiapan kerja di Jepang (Tokutei Ginou Kaigo / SSW) dan kelulusan JLPT N5, N4, serta N3.

Panduan menjawab (SANGAT PENTING):
1. JANGAN PERNAH menggunakan tanda bintang (*) atau simbol markdown berlebihan seperti **teks tebal** atau *miring*. Hindari tanda bintang (*) sepenuhnya agar teks bersih dan rapi.
2. Jika ingin menegaskan istilah atau contoh, gunakan huruf kapital, tanda kurung ( ), atau tanda petik ("...").
3. Respon dalam bahasa Indonesia yang santun, ramah, jelas, dan akurat.
4. Selalu sertakan aksara Jepang asli (Kanji/Kana), cara baca romaji, dan artinya dalam bahasa Indonesia.
5. Berikan contoh kalimat atau rumus praktis yang langsung bisa dipakai.
6. Jawab dengan cepat, terstruktur rapi (gunakan penomoran angka 1, 2 atau strip - untuk daftar).
7. Jangan bertele-tele, prioritaskan kejelasan dan keakuratan.`;

function cleanTextFormatting(text: string): string {
  if (!text) return '';
  return text
    .replace(/\*\*(.*?)\*\*/g, '$1')
    .replace(/\*(.*?)\*/g, '$1')
    .replace(/^\s*\*\s+/gm, '- ')
    .replace(/\*/g, '')
    .trim();
}

export default async function handler(req: any, res: any) {
  // Handle CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { message, history } = req.body || {};

    if (!message || typeof message !== 'string') {
      return res.status(400).json({ error: 'Pesan tidak boleh kosong.' });
    }

    const apiKey = process.env.GEMINI_API_KEY || '';
    if (apiKey) {
      try {
        const ai = new GoogleGenAI({
          apiKey,
          httpOptions: {
            headers: {
              'User-Agent': 'aistudio-build',
            },
          },
        });

        const contents: any[] = [];
        if (Array.isArray(history)) {
          for (const item of history.slice(-6)) {
            if (item && item.text) {
              contents.push({
                role: item.role === 'user' ? 'user' : 'model',
                parts: [{ text: item.text }],
              });
            }
          }
        }

        contents.push({
          role: 'user',
          parts: [{ text: message }],
        });

        const geminiPromise = ai.models.generateContent({
          model: 'gemini-3.8-flash',
          contents,
          config: {
            systemInstruction: SENSEI_SYSTEM_INSTRUCTION,
          },
        });

        const timeoutPromise = new Promise<never>((_, reject) =>
          setTimeout(() => reject(new Error('Gemini API timeout')), 3500)
        );

        const response: any = await Promise.race([geminiPromise, timeoutPromise]);
        const rawReply = response.text || '';
        if (rawReply.trim()) {
          const reply = cleanTextFormatting(rawReply);
          return res.status(200).json({ reply, source: 'gemini' });
        }
      } catch (geminiError: any) {
        console.warn('Gemini API call warning or timeout:', geminiError?.message || geminiError);
      }
    }

    // Contextual fallback engine (<5ms)
    const reply = cleanTextFormatting(generateSenseiResponse(message));
    return res.status(200).json({ reply, source: 'sensei_engine' });
  } catch (error: any) {
    console.error('API chat error:', error);
    const reply = cleanTextFormatting(generateSenseiResponse(req.body?.message || ''));
    return res.status(200).json({ reply, source: 'sensei_engine_recovered' });
  }
}
