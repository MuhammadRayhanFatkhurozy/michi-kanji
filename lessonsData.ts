/**
 * Lessons Database for Kanji Michi
 * Includes two harmonized curriculum tracks based on the official guidelines:
 * 1. Minna no Nihongo Shokyu I (Lessons 1 - 25 structured progression)
 * 2. Irodori Practical Japanese (A1 Starter, A2 Elementary 1-2, A2/B1 Pre-Intermediate)
 */

import { LessonItem } from '../types';

export const LESSONS_DATA: LessonItem[] = [
  // --- Minna Track ---
  {
    id: 'minna-1',
    track: 'minna',
    lessonNumber: 1,
    level: 'N5 / Shokyu I',
    title: 'Pelajaran 1: Perkenalan Diri & Topik Kalimat',
    titleJp: '第１課：自己紹介と文の形',
    descriptionId: 'Fondasi utama bahasa Jepang: penggunaan partikel は (wa), です (desu), dan perkenalan identitas.',
    canDoObjective: 'Mampu memperkenalkan nama, kewarganegaraan, dan profesi diri sendiri serta bertanya kepada orang lain dengan sopan.',
    vocabIds: ['v-watashi', 'v-genki'],
    grammarIds: ['g-wa-desu'],
    dialogue: [
      {
        speaker: 'Budi',
        japanese: '初めまして。ブディです。インドネシアから来ました。',
        furigana: 'はじめまして。ブディ です。インドネシア から きました。',
        romaji: 'Hajimemashite. Budi desu. Indoneshia kara kimashita.',
        indonesian: 'Perkenalkan. Saya Budi. Saya datang dari Indonesia.'
      },
      {
        speaker: 'Tanaka',
        japanese: '田中です。どうぞよろしくお願いします。',
        furigana: 'たなか です。どうぞ よろしく おねがい します。',
        romaji: 'Tanaka desu. Douzo yoroshiku onegai shimasu.',
        indonesian: 'Saya Tanaka. Senang berkenalan dengan Anda.'
      },
      {
        speaker: 'Budi',
        japanese: 'こちらこそ、よろしくお願いします。',
        furigana: 'こちら こそ、よろしく おねがい します。',
        romaji: 'Kochira koso, yoroshiku onegai shimasu.',
        indonesian: 'Sama-sama, saya juga senang berkenalan dengan Anda.'
      }
    ],
    culturalNote: 'Di Jepang, saat membungkuk (ojigi) untuk pertama kali, jaga pandangan mata tetap ke arah lantai dan bungkukkan badan sekitar 15–30 derajat.',
    quiz: [
      {
        question: 'Bagaimana cara mengatakan "Senang berkenalan dengan Anda" pertama kali?',
        options: ['ありがとうございます', '初めまして (Hajimemashite)', 'お疲れ様でした', 'ごめんなさい'],
        answerIndex: 1,
        explanation: 'Hajimemashite digunakan sebagai salam pembuka perkenalan pertama kali.'
      }
    ]
  },
  {
    id: 'minna-2',
    track: 'minna',
    lessonNumber: 2,
    level: 'N5 / Shokyu I',
    title: 'Pelajaran 2: Menunjuk Benda & Kepemilikan',
    titleJp: '第２課：物の名前と持ち主',
    descriptionId: 'Menguasai kata tunjuk benda (kore, sore, are) dan kepemilikan partikel の (no).',
    canDoObjective: 'Mampu menanyakan kepemilikan benda dan menyebutkan nama barang perlengkapan kantor atau rumah.',
    vocabIds: ['v-shigoto'],
    grammarIds: ['g-kore-sore-are'],
    dialogue: [
      {
        speaker: 'Budi',
        japanese: 'すみません、これは誰の手帳ですか。',
        furigana: 'すみません、これ は だれ の てちょう です か。',
        romaji: 'Sumimasen, kore wa dare no techou desu ka.',
        indonesian: 'Permisi, ini buku agenda milik siapa?'
      },
      {
        speaker: 'Yamada',
        japanese: 'あ、それは私の手帳です。ありがとうございます！',
        furigana: 'あ、それ は わたし の てちょう です。ありがとうございます！',
        romaji: 'A, sore wa watashi no techou desu. Arigatou gozaimasu!',
        indonesian: 'Ah, itu buku agenda saya. Terima kasih banyak!'
      }
    ],
    quiz: [
      {
        question: 'Benda berada di tangan lawan bicara. Kata tunjuk yang tepat digunakan pembicara adalah...',
        options: ['これ (kore)', 'それ (sore)', 'あれ (are)', 'どれ (dore)'],
        answerIndex: 1,
        explanation: 'それ (sore) digunakan untuk benda yang dekat dengan lawan bicara.'
      }
    ]
  },
  {
    id: 'minna-14',
    track: 'minna',
    lessonNumber: 14,
    level: 'N5 / Shokyu I',
    title: 'Pelajaran 14: Permintaan Sopan & Bentuk Te (~て)',
    titleJp: '第１４課：指示と依頼（〜てください）',
    descriptionId: 'Penguasaan bentuk ~te (Te-form) untuk instruksi kerja, permohonan sopan, dan bantuan.',
    canDoObjective: 'Mampu memahami dan memberikan instruksi kerja harian yang sopan menggunakan ~te kudasai.',
    vocabIds: ['v-houkoku'],
    grammarIds: ['g-te-kudasai'],
    dialogue: [
      {
        speaker: 'Leader',
        japanese: 'ブディさん、この書類を五部コピーしてください。',
        furigana: 'ブディさん、この しょるい を ごぶ コピー して ください。',
        romaji: 'Budi-san, kono shorui o gobu kopii shite kudasai.',
        indonesian: 'Budi-san, tolong fotokopi dokumen ini sebanyak lima rangkap.'
      },
      {
        speaker: 'Budi',
        japanese: 'はい、わかりました。すぐやります。',
        furigana: 'はい、わかりました。すぐ やります。',
        romaji: 'Hai, wakarimashita. Sugu yarimasu.',
        indonesian: 'Baik, saya mengerti. Segera saya kerjakan.'
      }
    ],
    culturalNote: 'Menjawab instruksi atasan di Jepang selalu diawali dengan tegas: "Hai, wakarimashita" (Baik, saya mengerti).',
    quiz: [
      {
        question: 'Respon profesional dan sopan ketika menerima arahan kerja di Jepang adalah...',
        options: ['うん、いいよ', 'はい、かしこまりました / わかりました', 'あとでね', 'ちょっと待って'],
        answerIndex: 1,
        explanation: '"Hai, wakarimashita" atau "Hai, kashikomarimashita" adalah respon standar kepatuhan profesional di tempat kerja Jepang.'
      }
    ]
  },

  // --- Irodori Track ---
  {
    id: 'irodori-starter-1',
    track: 'irodori',
    lessonNumber: 1,
    level: 'Starter (A1)',
    title: 'Irodori 1: Salam & Perkenalan di Tempat Kerja',
    titleJp: '彩り第１課：職場での挨拶',
    descriptionId: 'Fokus komunikasi praktis kehidupan dan kerja di Jepang berdasarkan target Can-do nyata.',
    canDoObjective: 'Can-Do 1: Mampu menyapa rekan kerja pada pagi, siang, dan saat pulang kerja dengan intonasi alami.',
    vocabIds: ['v-ohayou', 'v-otsukaresama'],
    grammarIds: ['g-wa-desu'],
    dialogue: [
      {
        speaker: 'Kato',
        japanese: 'おはようございます！今日もよろしくお願いします。',
        furigana: 'おはようございます！きょう も よろしく おねがい します。',
        romaji: 'Ohayou gozaimasu! Kyou mo yoroshiku onegai shimasu.',
        indonesian: 'Selamat pagi! Mohon bantuannya lagi untuk hari ini.'
      },
      {
        speaker: 'Dewi',
        japanese: 'おはようございます、加藤さん。頑張りましょう！',
        furigana: 'おはようございます、かとうさん。がんばりましょう！',
        romaji: 'Ohayou gozaimasu, Katou-san. Ganbarimashou!',
        indonesian: 'Selamat pagi, Kato-san. Mari kita semangat bekerja!'
      }
    ],
    culturalNote: 'Di tempat kerja Jepang, salam pagi "Ohayou gozaimasu" diucapkan dengan ceria dan suara yang terdengar jelas oleh rekan kerja satu tim.',
    quiz: [
      {
        question: 'Ucapan apa yang paling umum saat jam kerja berakhir dan kita meninggalkan kantor?',
        options: ['さようなら', 'お疲れ様でした (Otsukaresama deshita)', 'じゃあね', 'また明日'],
        answerIndex: 1,
        explanation: 'Otsukaresama deshita adalah ungkapan resmi apresiasi kerja keras untuk rekan kerja saat selesai bertugas.'
      }
    ]
  },
  {
    id: 'irodori-elem-1',
    track: 'irodori',
    lessonNumber: 4,
    level: 'Elementary 1 (A2)',
    title: 'Irodori 4: Di Restoran & Memesan Makanan',
    titleJp: '彩り第４課：レストランで注文する',
    descriptionId: 'Latihan situasi nyata memesan makanan, meminta rekomendasi menu, dan membayar di kasir.',
    canDoObjective: 'Can-Do 7: Mampu memesan menu, meminta porsi tertentu, dan menanyakan total harga tanpa rasa canggung.',
    vocabIds: ['v-chuumon', 'v-oishii'],
    grammarIds: ['g-verb-masu'],
    dialogue: [
      {
        speaker: 'Ten-in',
        japanese: 'いらっしゃいませ！ご注文はお決まりですか。',
        furigana: 'いらっしゃいませ！ごちゅうもん は おきまり です か。',
        romaji: 'Irasshaimase! Gochuumon wa okimari desu ka.',
        indonesian: 'Selamat datang! Apakah pesanannya sudah ditentukan?'
      },
      {
        speaker: 'Pelanggan',
        japanese: '醤油ラーメンを一つとお水をください。',
        furigana: 'しょうゆ ラーメン を ひとつ と おみず を ください。',
        romaji: 'Shouyu raamen o hitotsu to omizu o kudasai.',
        indonesian: 'Tolong satu ramen shoyu dan segelas air.'
      }
    ],
    culturalNote: 'Banyak restoran di Jepang menyediakan air putih dingin (ohiya) secara gratis segera setelah tamu duduk di meja.',
    quiz: [
      {
        question: 'Bagaimana cara meminta satu porsi ramen?',
        options: ['ラーメンを一回', 'ラーメンを一つ (hitotsu)', 'ラーメンを一人', 'ラーメンを一本'],
        answerIndex: 1,
        explanation: 'Untuk menghitung porsi pesanan umum, gunakan hitotsu (1), futatsu (2), mittsu (3).'
      }
    ]
  },
  {
    id: 'irodori-kaigo-1',
    track: 'irodori',
    lessonNumber: 12,
    level: 'Elementary 2 (A2)',
    title: 'Irodori 12: Komunikasi Kaigo (Caregiver Lansia)',
    titleJp: '彩り第１２課：介護の現場と声かけ',
    descriptionId: 'Panduan berbicara sopan, lembut, dan jelas kepada para lansia di panti jompo Jepang.',
    canDoObjective: 'Can-Do 15: Mampu menyapa lansia dengan lembut sebelum mendampingi mereka berdiri atau berpindah kursi roda.',
    vocabIds: ['v-kaigo-1', 'v-riyuusha', 'v-kurumaisu'],
    grammarIds: ['g-te-kudasai'],
    dialogue: [
      {
        speaker: 'Staff Kaigo',
        japanese: '山田様、お茶の時間ですよ。食堂へ行きましょうか。',
        furigana: 'やまださま、おちゃ の じかん です よ。しょくどう へ いきましょう か。',
        romaji: 'Yamada-sama, ocha no jikan desu yo. Shokudou e ikimashou ka.',
        indonesian: 'Tuan Yamada, sudah waktunya minum teh. Apakah kita pergi ke ruang makan bersama?'
      },
      {
        speaker: 'Yamada-sama',
        japanese: 'ありがとう。ゆっくり立つから待ってね。',
        furigana: 'ありがとう。ゆっくり たつ から まって ね。',
        romaji: 'Arigatou. Yukkuri tatsu kara matte ne.',
        indonesian: 'Terima kasih. Aku berdiri pelan-pelan, jadi tolong tunggu ya.'
      },
      {
        speaker: 'Staff Kaigo',
        japanese: 'はい、急がなくて大丈夫ですよ。ゆっくり行きましょう。',
        furigana: 'はい、いそがなくて だいじょうぶ です よ。ゆっくり いきましょう。',
        romaji: 'Hai, isoganakute daijoubu desu yo. Yukkuri ikimashou.',
        indonesian: 'Baik, tidak perlu buru-buru. Mari kita jalan perlahan-lahan.'
      }
    ],
    culturalNote: 'Dalam etika kaigo, selalu sebut nama lansia dengan akhiran penghormatan "-sama" dan lakukan kontak mata setara (tidak berdiri menatap dari atas).',
    quiz: [
      {
        question: 'Prinsip utama komunikasi caregiver dengan lansia adalah...',
        options: ['Berbicara secepat mungkin', 'Menyapa lembut dengan kontak mata yang setara', 'Memerintah dengan keras', 'Mengabaikan respon mereka'],
        answerIndex: 1,
        explanation: 'Kelembutan, senyum, kontak mata setara dan kata-kata penenang (koe-kake) adalah kunci caregiver profesional di Jepang.'
      }
    ]
  }
];
