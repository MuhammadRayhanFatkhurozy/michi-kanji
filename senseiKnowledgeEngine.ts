/**
 * Smart Sensei Knowledge Engine (Fast, Client & Server Compatible)
 * Provides comprehensive, instant Japanese tutoring answers for:
 * - Kanji (onyomi, kunyomi, goresan, radikal N5-N3)
 * - Partikel (wa, ga, ni, de, o, to, kara, made, e, mo, no)
 * - Tata Bahasa Minna no Nihongo & Irodori Can-Do
 * - Kosakata Dunia Kerja, Kaigo, & Hou-Ren-So
 * - Aksara Hiragana & Katakana
 * - Tips Belajar, Shadowing, SRS, & Latihan Soal JLPT
 */

export function cleanTextFormatting(text: string): string {
  if (!text) return '';
  return text
    .replace(/\*\*(.*?)\*\*/g, '$1')
    .replace(/\*(.*?)\*/g, '$1')
    .replace(/^\s*\*\s+/gm, '- ')
    .replace(/\*/g, '')
    .trim();
}

export function generateSenseiResponse(message: string): string {
  const lower = message.toLowerCase().trim();
  const normalized = lower.replace(/[-_]/g, '');

  // 1. Partikel bahasa Jepang
  if (
    lower.includes('partikel') || 
    lower.includes('wa vs ga') || 
    lower.includes('は vs が') || 
    (/\b(wa|ga|ni|de|wo|kara|made|to|mo|he)\b/i.test(lower) && (lower.includes('beda') || lower.includes('fungsi') || lower.includes('arti') || lower.includes('contoh')))
  ) {
    if (lower.includes('ni') && lower.includes('de')) {
      return `Konnichiwa! Pertanyaan mantap tentang partikel に (ni) dan で (de)! 🌸

Perbedaan Partikel に (ni) vs で (de):

1. Partikel に (ni) — Menunjukkan Keberadaan atau Titik Tujuan:
- Keberadaan benda/orang (bersama imasu/arimasu):
  Contoh: 部屋に猫がいます (Heya ni neko ga imasu = Ada kucing di dalam kamar).
- Waktu spesifik:
  Contoh: 7時に起きます (Shichiji ni okimasu = Bangun pada jam 7).
- Titik tujuan gerak (bersama ikimasu/kimasu):
  Contoh: 日本に行きます (Nihon ni ikimasu = Pergi ke Jepang).

2. Partikel で (de) — Menunjukkan Tempat Aktivitas atau Alat/Metode:
- Tempat berlangsungnya suatu kegiatan aktif:
  Contoh: 図書館で勉強します (Toshokan de benkyou shimasu = Belajar di perpustakaan).
- Alat atau sarana transportasi:
  Contoh: 電車で行きます (Densha de ikimasu = Pergi dengan kereta).

Rumus mudahnya:
- "Di mana ada kegiatan aktif?" -> Gunakan で (de).
- "Di mana suatu benda berada diam atau tujuannya ke mana?" -> Gunakan に (ni).

Mau coba buat 1 contoh kalimat untuk Sensei periksa?`;
    }

    return `Konnichiwa! Mari kita kupas tuntas partikel bahasa Jepang! 🌸

Panduan Ringkas Partikel Utama:

1. は (wa) — Penanda Topik Utama Kalimat:
- Menyoroti subjek pembicaraan umum.
- Contoh: 私は会社員です (Watashi wa kaishain desu = Saya adalah karyawan perusahaan).

2. が (ga) — Penanda Subjek Spesifik / Penegas:
- Menyoroti siapa yang melakukan tindakan atau penegas informasi baru.
- Contoh: だれが来ましたか (Dare ga kimashita ka = Siapa yang datang?) -> 田中さんが来ました (Tanaka-san ga kimashita).
- Dipakai juga untuk kata sifat 'suka' dan 'bisa': 日本語が好きです (Nihongo ga suki desu).

3. を (o / wo) — Penanda Objek Penderita:
- Contoh: ご飯を食べます (Gohan o tabemasu = Makan nasi).

4. に (ni) — Menandai waktu tertentu, target, atau tempat keberadaan.
5. で (de) — Menandai tempat aktivitas aktif atau alat/sarana yang digunakan.

Kamu bisa buka menu Tata Bahasa (Grammar) di aplikasi ini untuk melihat tabel rumus partikel lengkapnya ya!`;
  }

  // 2. Aksara Kanji
  if (lower.includes('kanji') || lower.includes('onyomi') || lower.includes('kunyomi') || lower.includes('goresan') || lower.includes('radikal')) {
    return `Konnichiwa! Belajar Kanji itu seru kalau kita paham pola dasarnya! 🏯

Konsep Kunci Membaca Kanji:
1. Onyomi (音読み): Cara baca serapan dari bahasa Tionghoa kuno. Biasanya dipakai saat dua kanji atau lebih bergabung membentuk kata majemuk (Jukugo).
   - Contoh: 日 (NICHI) + 本 (HON) = 日本 (Nihon / Nippon = Jepang).
2. Kunyomi (訓読み): Cara baca asli bahasa Jepang. Biasanya dipakai saat kanji berdiri sendiri atau diikuti aksara hiragana (okurigana).
   - Contoh: 日 (hi = hari/matahari).

Contoh 5 Kanji Dasar Terpenting JLPT N5:
- 日 (hi/nichi): Hari, matahari (4 goresan)
- 月 (tsuki/getsu): Bulan (4 goresan)
- 木 (ki/moku): Pohon, kayu (4 goresan)
- 水 (mizu/sui): Air (4 goresan)
- 火 (hi/ka): Api (4 goresan)

Tips Sensei: Gunakan fitur latihan menulis Tian Zi Ge di menu Kanji (N5-N3) pada aplikasi ini untuk melatih memori otot urutan goresannya ya!`;
  }

  // 3. Budaya Kerja, Hourenso, Kaigo & Tokutei Ginou
  if (
    lower.includes('kerja') || 
    normalized.includes('hourenso') || 
    lower.includes('kaigo') || 
    lower.includes('kantor') || 
    lower.includes('pabrik') || 
    lower.includes('tokutei') || 
    lower.includes('ojigi') ||
    lower.includes('wawancara') ||
    lower.includes('salam')
  ) {
    return `Konnichiwa! Kesiapan mental dan etika kerja di Jepang (ビジネスマナー) sangat dihargai oleh perusahaan Jepang! 🤝

1. Tiga Pilar HOU-REN-SO (報・連・相):
- HOU (報告 - Houkoku): Melaporkan progress atau hasil tugas tanpa menunggu ditanya atasan.
- REN (連絡 - Renraku): Memberikan kabar cepat jika ada kendala mesin, keterlambatan, atau perubahan rencana.
- SO (相談 - Soudan): Berkonsultasi sebelum mengambil inisiatif sendiri yang berisiko.

2. Salam Wajib di Tempat Kerja:
- おはようございます (Ohayou gozaimasu): Selamat pagi saat tiba di tempat kerja.
- お疲れ様です (Otsukaresama desu): Salam saat berpapasan antar rekan kerja atau saat pergantian shift.
- 失礼します (Shitsurei shimasu): Permisi saat masuk ruangan atau pamit pulang lebih awal.
- よろしくお願いします (Yoroshiku onegaishimasu): Mohon kerja samanya saat menerima instruksi kerja.

3. Untuk Bidang Kaigo (Caregiver):
- Selalu dahulukan keselamatan lansia (Riyousha-san) dan sapalah dengan nada suara ramah dan senyuman hangat.

Modul Kosakata (Dunia Kerja) di menu samping punya daftar istilah kerja pabrik, kantor, dan Kaigo yang sangat lengkap lho!`;
  }

  // 4. Hiragana & Katakana
  if (lower.includes('hiragana') || lower.includes('katakana') || lower.includes('aksara') || lower.includes('kana')) {
    return `Konnichiwa! Menguasai Hiragana dan Katakana adalah langkah pertama paling krusial! ✍️

1. Hiragana (ひらがな):
- Berisi 46 huruf dasar berkarakter melengkung luwes.
- Digunakan untuk menulis kosakata asli Jepang, partikel (wa, ga, o, ni), dan akhiran kata kerja (okurigana).
- Baris dasar: A - I - U - E - O, KA - KI - KU - KE - KO, SA - SHI - SU - SE - SO, TA - CHI - TSU - TE - TO, NA - NI - NU - NE - NO.

2. Katakana (カタカナ):
- Berisi 46 huruf dasar berkarakter tajam dan tegas bersudut.
- Digunakan khusus untuk kata serapan asing (gairaigo), nama orang asing, istilah ilmiah, dan penegasan.
- Contoh: テレビ (terebi = TV), パン (pan = roti), コーヒー (koohii = kopi).

Coba klik menu Hiragana atau Katakana di sebelah kiri, di sana kamu bisa mendengarkan audio pengucapan asli dan latihan menulis langsung di layar!`;
  }

  // 5. Tips Belajar, Hafalan, SRS, & Ujian JLPT
  if (
    lower.includes('hafal') || 
    lower.includes('tips') || 
    lower.includes('metode') || 
    lower.includes('belajar') || 
    lower.includes('srs') || 
    lower.includes('jlpt') ||
    lower.includes('n5') ||
    lower.includes('n4') ||
    lower.includes('n3')
  ) {
    return `Konnichiwa! Rahasia sukses tembus JLPT N5 hingga N3 secara konsisten: 🎯

1. Spaced Repetition System (SRS):
- Otak manusia cepat lupa jika tidak diulang pada hari ke-1, ke-3, dan ke-7. Buka fitur Flashcards (SRS) setiap pagi selama 10 menit.
2. Rutinitas 25 Menit Sehari (Pomodoro):
- Belajar 25 menit rutin setiap hari jauh lebih membekas dibanding belajar 5 jam maraton sekali seminggu.
3. Metode Shadowing (Latihan Menirukan Audio):
- Dengarkan percakapan di menu Menyimak (Listening) dan tirukan suaranya secara bersamaan tanpa melihat teks untuk melatih keluwesan lidah dan kepekaan telinga.
4. Target JLPT:
- N5: Kuasai ~100 kanji & ~800 kosakata (Minna no Nihongo bab 1-25).
- N4: Kuasai ~300 kanji & ~1.500 kosakata (Minna no Nihongo bab 26-50).
- N3: Kuasai ~650 kanji & ~3.750 kosakata (level percakapan kerja mandiri).

Klik tombol Mulai Rutinitas Harian di pojok kanan atas setiap hari untuk latihan terstruktur!`;
  }

  // 6. Salam umum & Perkenalan Diri (Jikoshoukai)
  if (lower.includes('halo') || lower.includes('hai') || lower.includes('konnichiwa') || lower.includes('kenal') || lower.includes('jikoshoukai') || lower.includes('siapa kamu')) {
    return `Konnichiwa! Senang bisa belajar bersama kamu di Kanji Michi (漢字道)! 🌸

Contoh Perkenalan Diri Singkat (自己紹介 - Jikoshoukai):
1. 初めまして (Hajimemashite) = Salam kenal / Pertama kali bertemu.
2. 私はレイハンと申します (Watashi wa [Nama] to moushimasu) = Nama saya [Nama].
3. インドネシアから来ました (Indoneshia kara kimashita) = Saya berasal dari Indonesia.
4. 日本語を一生懸命勉強しています (Nihongo o isshoukenmei benkyou shite imasu) = Saya sedang belajar bahasa Jepang dengan sungguh-sungguh.
5. どうぞよろしくお願いします (Douzo yoroshiku onegaishimasu) = Mohon bimbingan dan kerja samanya.

Sensei siap membantu pertanyaan seputar aksara, kanji, tata bahasa, kosakata, hingga persiapan kerja di Jepang. Mau bahas topik apa hari ini?`;
  }

  // 7. General Responsive Fallback
  return `Konnichiwa! Pertanyaan yang sangat menarik! 🌸

Sensei siap mengupas tuntas materi bahasa Jepang untukmu:
1. Aksara: Hiragana, Katakana, dan Kanji level N5, N4, serta N3.
2. Tata Bahasa: Pola kalimat Minna no Nihongo, partikel (wa, ga, ni, de, o), dan konjugasi kata kerja.
3. Kosakata: Kehidupan harian, istilah kerja kantor, pabrik manufaktur, hingga Kaigo.
4. Kesiapan Kerja: Budaya Hou-Ren-So, etika salam ojigi, dan wawancara kerja di Jepang.
5. Latihan Ujian: Pembahasan soal latihan JLPT dan teknik menyimak (Choukai).

Ketik pertanyaan spesifikmu (contoh: "cara pakai partikel de", "arti kanji nichi", atau "tips wawancara kerja") dan Sensei akan langsung jelaskan dengan contoh praktis! Ganbarimashou! (がんばりましょう！)`;
}
