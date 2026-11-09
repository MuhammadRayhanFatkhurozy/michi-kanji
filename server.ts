import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';
import { generateSenseiResponse, cleanTextFormatting } from './src/services/senseiKnowledgeEngine.ts';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.use(express.json());

// Initialize GoogleGenAI client with required aistudio-build user agent header
const apiKey = process.env.GEMINI_API_KEY || '';
const ai = apiKey
  ? new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    })
  : null;

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


// Endpoint for AI Sensei chat
app.post('/api/chat', async (req, res) => {
  try {
    const { message, history } = req.body;

    if (!message || typeof message !== 'string') {
      return res.status(400).json({ error: 'Pesan tidak boleh kosong.' });
    }

    // Try Gemini API if API key is configured with a strict 3.5s timeout
    if (ai) {
      try {
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
          return res.json({ reply, source: 'gemini' });
        }
      } catch (geminiError: any) {
        console.warn('Gemini API warning or timeout (switching to fast Sensei engine):', geminiError?.message || geminiError);
      }
    }

    // High quality instant contextual response engine (<5ms)
    const reply = generateSenseiResponse(message);
    return res.json({ reply, source: 'sensei_engine' });
  } catch (error: any) {
    console.error('AI chat endpoint error:', error);
    const reply = generateSenseiResponse(req.body?.message || '');
    return res.json({ reply, source: 'sensei_engine_recovered' });
  }
});

// Production static file serving or development Vite middleware mounting
const isProduction = process.env.NODE_ENV === 'production';

async function startServer() {
  // Serve public static assets
  app.use(express.static(path.resolve(__dirname, 'public')));

  if (isProduction) {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  } else {
    const { createServer } = await import('vite');
    const vite = await createServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Kanji Michi Full-Stack Server listening on http://0.0.0.0:${PORT}`);
  });
}

startServer();
