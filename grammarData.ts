/**
 * Structured Grammar (Bunpou) Database for Kanji Michi
 * Aligned with Minna no Nihongo Shokyu I (25 Lessons) & JLPT N5, N4, N3
 * Includes sentence formulas, positive/negative/question patterns,
 * Indonesian explanations, common pitfalls, and interactive quizzes.
 */

import { GrammarPoint } from '../types';

export const GRAMMAR_DATA: GrammarPoint[] = [
  // --- Minna Lesson 1 / JLPT N5 ---
  {
    id: 'g-wa-desu',
    title: 'KB1 は KB2 です (A adalah B)',
    pattern: 'KB1 は KB2 です / じゃありません / ですか',
    level: 'N5',
    minnaLesson: 1,
    meaningId: 'Menyatakan identitas, profesi, kewarganegaraan, atau topik utama.',
    explanationId:
      'Partikel は (dibaca "wa") adalah penanda topik kalimat. です (desu) diletakkan di akhir kalimat predikat nomina/adjektiva untuk memberikan nuansa kesopanan kepada lawan bicara.',
    whenToUse:
      'Gunakan saat memperkenalkan diri, menyebutkan profesi, nama orang, status, atau kewarganegaraan.',
    structure: [
      'Positif: [Subjek/Topik] は [Kata Benda] です',
      'Negatif (Santai sopan): [Subjek/Topik] は [Kata Benda] じゃありません (atau ではありません)',
      'Tanya (Interogatif): [Subjek/Topik] は [Kata Benda] ですか'
    ],
    examples: [
      {
        japanese: '私はインドネシア人です。',
        furigana: 'わたし は インドネシアじん です。',
        romaji: 'Watashi wa Indoneshia-jin desu.',
        indonesian: 'Saya adalah orang Indonesia.',
        type: 'positive'
      },
      {
        japanese: 'サントスさんは医者じゃありません。',
        furigana: 'サントスさん は いしゃ じゃありません。',
        romaji: 'Santosu-san wa isha ja arimasen.',
        indonesian: 'Pak Santos bukan seorang dokter.',
        type: 'negative'
      },
      {
        japanese: 'ミラさんは学生ですか。はい、学生です。',
        furigana: 'ミラさん は がくせい です か。はい、がくせい です。',
        romaji: 'Mira-san wa gakusei desu ka. Hai, gakusei desu.',
        indonesian: 'Apakah Miller seorang mahasiswa? Ya, benar mahasiswa.',
        type: 'question'
      }
    ],
    commonMistakes:
      '1. Menulis partikel topik dengan huruf わ (wa). Selalu tulis dengan huruf は (ha).\n2. Memakai です (desu) langsung setelah kata kerja bentuk kamus (misal: "taberu desu" adalah salah; gunakan tabemasu).',
    exercises: [
      {
        question: 'Pilih partikel yang tepat untuk kalimat: わたし（　）アリです。',
        options: ['わ', 'は', 'が', 'を'],
        answerIndex: 1,
        explanation: 'Partikel penanda topik kalimat ditulis menggunakan huruf hiragana は (dibaca wa).'
      },
      {
        question: 'Bentuk negatif sopan dari "先生です" adalah...',
        options: ['先生じゃない', '先生でした', '先生じゃありません', '先生ですありません'],
        answerIndex: 2,
        explanation: 'Bentuk negatif sopan dari desu adalah "ja arimasen" atau "dewa arimasen".'
      }
    ]
  },

  // --- Minna Lesson 2 / JLPT N5 ---
  {
    id: 'g-kore-sore-are',
    title: 'これ / それ / あれ / この / その / あの (Kata Tunjuk Benda)',
    pattern: 'これ / それ / あれ は [KB] です',
    level: 'N5',
    minnaLesson: 2,
    meaningId: 'Kata tunjuk benda berdasarkan jarak dari pembicara dan lawan bicara.',
    explanationId:
      'これ (kore) = dekat pembicara. それ (sore) = dekat lawan bicara. あれ (are) = jauh dari kedua pembicara. どれ (dore) = kata tanya (yang mana). Jika diikuti kata benda secara langsung, gunakan この (kono), その (sono), あの (ano) + [Kata Benda].',
    whenToUse:
      'Gunakan saat menunjuk barang belanjaan, benda di meja kerja, atau menanyakan kepemilikan benda.',
    structure: [
      'Pola 1: これ / それ / あれ は [Kata Benda] です',
      'Pola 2: この / その / あの + [Kata Benda] は [Predikat] です',
      'Kepemilikan: [KB1] の [KB2] (KB2 kepunyaan KB1)'
    ],
    examples: [
      {
        japanese: 'これは日本の辞書です。',
        furigana: 'これ は にほん の じしょ です。',
        romaji: 'Kore wa Nihon no jisho desu.',
        indonesian: 'Ini adalah kamus bahasa Jepang.',
        type: 'positive'
      },
      {
        japanese: 'この傘は私のではありません。',
        furigana: 'この かさ は わたし の で は ありません。',
        romaji: 'Kono kasa wa watashi no de wa arimasen.',
        indonesian: 'Payung ini bukan milik saya.',
        type: 'negative'
      },
      {
        japanese: 'あれは誰のパソコンですか。',
        furigana: 'あれ は だれ の パソコン です か。',
        romaji: 'Are wa dare no pasokon desu ka.',
        indonesian: 'Itu (yang jauh di sana) laptop milik siapa?',
        type: 'question'
      }
    ],
    commonMistakes:
      'Menggunakan "kore" langsung di depan kata benda (misal: "kore hon" adalah salah; yang benar adalah "kono hon" atau "kore wa hon desu").',
    exercises: [
      {
        question: 'Lengkapi kalimat: （　）本は先生のものです。 (menunjuk buku di tangan lawan bicara)',
        options: ['それ', 'その', 'これ', 'あれ'],
        answerIndex: 1,
        explanation: 'Karena langsung menempel pada kata benda "本 (hon)" dan berada di dekat lawan bicara, gunakan "その (sono)".'
      }
    ]
  },

  // --- Minna Lesson 4 & 5 / JLPT N5 ---
  {
    id: 'g-verb-masu',
    title: 'Kata Kerja Bentuk ~ます (~masu) & Waktu / Arah',
    pattern: 'V-ます / V-ません / V-ました / V-ませんでした',
    level: 'N5',
    minnaLesson: 4,
    meaningId: 'Menyatakan perbuatan rutin masa kini, masa depan, dan masa lampau secara sopan.',
    explanationId:
      'Konjugasi dasar kata kerja sopan dalam bahasa Jepang. Dilengkapi dengan partikel に (ni) untuk waktu spesifik bertanggal/berjam, dan partikel へ (e) untuk arah tempat tujuan.',
    whenToUse:
      'Gunakan saat menceritakan jadwal harian, jam masuk kerja, waktu bangun tidur, dan tujuan bepergian.',
    structure: [
      'Positif Kini/Akan datang: V-ます (Contoh: 行きます - pergi)',
      'Negatif Kini/Akan datang: V-ません (Contoh: 行きません - tidak pergi)',
      'Positif Lampau: V-ました (Contoh: 行きました - sudah pergi)',
      'Negatif Lampau: V-ませんでした (Contoh: 行きませんでした - tidak pergi / belum pernah pergi)',
      'Arah Tujuan: [Tempat] へ 行きます / 来ます / 帰ります'
    ],
    examples: [
      {
        japanese: '毎朝七時に起きます。',
        furigana: 'まいあさ しちじ に おきます。',
        romaji: 'Maiasa shichiji ni okimasu.',
        indonesian: 'Setiap pagi saya bangun pada pukul tujuh.',
        type: 'positive'
      },
      {
        japanese: '昨日はどこへも行きませんでした。',
        furigana: 'きのう は どこ へ も いきませんでした。',
        romaji: 'Kinou wa doko e mo ikimasendeshita.',
        indonesian: 'Kemarin saya tidak pergi ke mana pun.',
        type: 'negative'
      },
      {
        japanese: '何時に会社へ来ましたか。',
        furigana: 'なんじ に かいしゃ へ きました か。',
        romaji: 'Nanji ni kaisha e kimashita ka.',
        indonesian: 'Pukul berapa kamu tiba di kantor?',
        type: 'question'
      }
    ],
    commonMistakes:
      'Memakai partikel に pada penunjuk waktu relatif yang tidak ada angka pastinya seperti 今日 (kyou), 明日 (ashita), 毎日 (mainichi). Kata-kata ini TIDAK menggunakan partikel に.',
    exercises: [
      {
        question: 'Pilihlah kalimat yang benar untuk: "Besok saya tidak masuk kerja."',
        options: ['明日に働きません', '明日は働きません', '明日は働きませんでした', '明日に働きます'],
        answerIndex: 1,
        explanation: 'Kata "明日 (ashita)" adalah waktu relatif tanpa angka pasti, jadi tidak memakai partikel に. Bentuk negatif masa depan adalah 働きません.'
      }
    ]
  },

  // --- Minna Lesson 14 / JLPT N5 ---
  {
    id: 'g-te-kudasai',
    title: 'V-て ください (Tolong / Silakan lakukan)',
    pattern: 'Kata Kerja Bentuk Te + ください',
    level: 'N5',
    minnaLesson: 14,
    meaningId: 'Meminta tolong, instruksi kerja, atau mempersilakan seseorang melakukan sesuatu.',
    explanationId:
      'Salah satu bentuk paling penting dalam percakapan kerja dan kehidupan sehari-hari di Jepang. Dibentuk dari perubahan bentuk ~te (Te-form) + ください (kudasai).',
    whenToUse:
      'Gunakan saat meminta rekan kerja memeriksa dokumen, meminta petunjuk arah, atau instruksi sopan.',
    structure: [
      'Grup 1 (u, tsu, ru -> tte | mu, bu, nu -> nde | ku -> ite | gu -> ide | su -> shite) + ください',
      'Grup 2 (buang -ru -> tambahkan -te) + ください',
      'Grup 3: して ください (shite kudasai) / きて ください (kite kudasai)'
    ],
    examples: [
      {
        japanese: 'ここに名前と住所を書いてください。',
        furigana: 'ここ に なまえ と じゅうしょ を かいて ください。',
        romaji: 'Koko ni namae to juusho o kaite kudasai.',
        indonesian: 'Tolong tulis nama dan alamat di sini.',
        type: 'positive'
      },
      {
        japanese: 'もう一度ゆっくり言ってください。',
        furigana: 'もう いちど ゆっくり いって ください。',
        romaji: 'Mou ichido yukkuri itte kudasai.',
        indonesian: 'Tolong katakan sekali lagi secara perlahan.',
        type: 'positive'
      },
      {
        japanese: 'ちょっと待ってください。',
        furigana: 'ちょっと まって ください。',
        romaji: 'Chotto matte kudasai.',
        indonesian: 'Tolong tunggu sebentar.',
        type: 'positive'
      }
    ],
    commonMistakes:
      'Jangan gunakan ungkapan "~te kudasai" kepada atasan/bos besar (shachou) untuk memerintah mereka. Kepada atasan, gunakan bentuk yang lebih tinggi seperti "~te itadakemasen ka".',
    exercises: [
      {
        question: 'Bentuk te-kudasai dari kata kerja "読みます (yomimasu = membaca)" adalah...',
        options: ['よみて ください', 'よんで ください', 'よって ください', 'よみてください'],
        answerIndex: 1,
        explanation: 'Kata kerja berakhiran -mi berubah menjadi -nde dalam bentuk te (yomimasu -> yonde kudasai).'
      }
    ]
  },

  // --- JLPT N4 ---
  {
    id: 'g-tara-condition',
    title: '~たら (~tara: Kalau / Jika / Setelah)',
    pattern: 'Bentuk Lampau Biasa (Ta-form) + ら',
    level: 'N4',
    meaningId: 'Menyatakan pengandaian (jika) atau kepastian urutan waktu (setelah/bila sudah terlaksana).',
    explanationId:
      'Kondisional yang paling fleksibel dan paling sering digunakan dalam bahasa Jepang lisan. Bisa memuat ajakan, perintah, atau harapan di kalimat pokoknya.',
    whenToUse:
      'Gunakan saat menjelaskan SOP kerja: "Kalau sudah selesai, silakan lapor", atau "Kalau besok hujan, tidak usah pergi".',
    structure: [
      'Kata Kerja: V-た + ら (Contoh: 終わったら - kalau/setelah selesai)',
      'Kata Sifat-i: ~かった + ら (Contoh: 安かったら - kalau murah)',
      'Kata Benda / Sifat-na: だったら (Contoh: 暇だったら - kalau ada waktu luang)'
    ],
    examples: [
      {
        japanese: '仕事が終わったら、連絡してください。',
        furigana: 'しごと が おわったら、れんらく して ください。',
        romaji: 'Shigoto ga owattara, renraku shite kudasai.',
        indonesian: 'Kalau pekerjaan sudah selesai, tolong hubungi saya.',
        type: 'positive'
      },
      {
        japanese: '薬を飲んだら、熱が下がりました。',
        furigana: 'くすり を のんだら、ねつ が さがりました。',
        romaji: 'Kusuri o nondara, netsu ga sagarimashita.',
        indonesian: 'Setelah minum obat, demamnya turun.',
        type: 'positive'
      }
    ],
    commonMistakes:
      'Tertukar dengan ~ba atau ~to. Ingat bahwa ~tara adalah bentuk paling alami untuk kalimat penutup berupa permohonan atau instruksi (~te kudasai).',
    exercises: [
      {
        question: 'Ubah kalimat ini ke bentuk tara: "雨が降ります (hujan turun) -> Kalau hujan turun..."',
        options: ['雨が降るなら', '雨が降ったら', '雨が降れば', '雨が降ると'],
        answerIndex: 1,
        explanation: 'Furimasu (Ta-form: futta) + ra = futtara.'
      }
    ]
  },

  // --- JLPT N3 ---
  {
    id: 'g-n3-wake-dewa-nai',
    title: '~わけではない (Bukan berarti / Tidak selalu)',
    pattern: 'Bentuk Biasa (Futsuukei) + わけではない',
    level: 'N3',
    meaningId: 'Menolak kesimpulan mutlak; menyangkal sebagian (bukan berarti sepenuhnya begitu).',
    explanationId:
      'Digunakan untuk meluruskan asumsi atau prasangka lawan bicara secara halus dan diplomatis, sangat krusial dalam komunikasi kerja dan JLPT N3 Dokkai/Choukai.',
    whenToUse:
      'Gunakan saat ingin mengatakan: "Bukan berarti saya tidak suka, hanya saja sedang diet" atau "Bukan berarti semua orang Jepang makan natto".',
    structure: [
      'Kata Kerja / Sifat-i: Bentuk Biasa + わけではない',
      'Kata Sifat-na: [Kata Sifat-na] な + わけではない',
      'Kata Benda: [Kata Benda] (という / の) わけではない'
    ],
    examples: [
      {
        japanese: '日本料理が嫌いなわけではありませんが、辛いものが好きです。',
        furigana: 'にほん りょうり が きらいな わけ で は ありません が、からい もの が すき です。',
        romaji: 'Nihon ryouri ga kirai na wake de wa arimasen ga, karai mono ga suki desu.',
        indonesian: 'Bukan berarti saya benci masakan Jepang, tapi saya lebih menyukai makanan pedas.',
        type: 'negative'
      },
      {
        japanese: '日本語が全く話せないわけではありません。日常会話ならできます。',
        furigana: 'にほんご が まったく はなせない わけ で は ありません。にちじょう かいわ なら できます。',
        romaji: 'Nihongo ga mattaku hanasenai wake de wa arimasen. Nichijou kaiwa nara dekimasu.',
        indonesian: 'Bukan berarti saya sama sekali tidak bisa bahasa Jepang. Kalau percakapan harian, saya bisa.',
        type: 'negative'
      }
    ],
    commonMistakes:
      'Tertukar dengan ~wake ga nai (mustahil/sama sekali tidak mungkin). ~wake dewa nai adalah sangkalan parsial yang jauh lebih lembut.',
    exercises: [
      {
        question: 'Pilihlah bentuk yang tepat: "暇な（　）、手伝うことができません。"',
        options: ['わけではないが', 'わけがないから', 'わけだから', 'わけにして'],
        answerIndex: 0,
        explanation: 'Untuk kata sifat-na, gabungkan dengan "な わけではないが" (Bukan berarti saya ada waktu luang, tapi...).'
      }
    ]
  }
];
