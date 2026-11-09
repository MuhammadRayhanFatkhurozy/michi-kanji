/**
 * JLPT Mock Test Questions for N5, N4, and N3
 * Across 5 authentic exam categories: Vocabulary, Kanji, Grammar, Reading, and Listening
 * with comprehensive Indonesian explanations.
 */

import { JLPTQuestion } from '../types';

export const JLPT_QUESTIONS: JLPTQuestion[] = [
  // ==========================================
  // --- JLPT N5 QUESTIONS ---
  // ==========================================
  {
    id: 'jlpt-n5-v1',
    level: 'N5',
    category: 'vocabulary',
    prompt: 'つぎの ぶんの （　） に なにを いれますか。\n「まいあさ、しちじ に （　）。」',
    options: ['おきます', 'たべます', 'ねます', 'きます'],
    correctIndex: 0,
    explanationId: 'Setiap pagi jam 7 biasanya orang bangun tidur. "おきます (okimasu)" berarti bangun tidur. Kalau "ねます (nemasu)" berarti tidur malam.'
  },
  {
    id: 'jlpt-n5-k1',
    level: 'N5',
    category: 'kanji',
    prompt: '下線の ことばは どう 書きますか。\n「まいしゅう <u>にほんご</u> の じゅぎょうが あります。」',
    options: ['日本語', '日本話', '目本語', '日木語'],
    correctIndex: 0,
    explanationId: 'Kanji "Nihongo" ditulis 日本語 (日 = matahari/hari, 本 = asal/buku, 語 = bahasa). Perhatikan perbedaan goresan 本 dan 木.'
  },
  {
    id: 'jlpt-n5-g1',
    level: 'N5',
    category: 'grammar',
    prompt: '（　） に なにを いれますか。\n「わたしは ともだち （　） えいがを みました。」',
    options: ['を', 'に', 'と', 'で'],
    correctIndex: 2,
    explanationId: 'Partikel と (to) digunakan untuk menyatakan melakukan suatu perbuatan "bersama dengan" orang lain (ともだちと = bersama teman).'
  },
  {
    id: 'jlpt-n5-r1',
    level: 'N5',
    category: 'reading',
    prompt: 'つぎの ぶんを よんで、ただしいものを えらんでください。',
    readingPassage: 'きのうは にちようびでした。わたしは あさ はちじに おきて、パンを たべました。それから、デパートへ いって、あおい シャツを かいました。ごごは うちで ほんを よみました。とても たのしかったです。',
    options: [
      'きのうは どようびでした。',
      'デパートで あおい シャツを かいました。',
      'デパートで ほんを よみました。',
      'あさは なにも たべませんでした。'
    ],
    correctIndex: 1,
    explanationId: 'Berdasarkan teks: "デパートへ いって、あおい シャツを かいました" (Pergi ke department store dan membeli kemeja biru).'
  },
  {
    id: 'jlpt-n5-l1',
    level: 'N5',
    category: 'listening',
    prompt: 'おとこのひとと おんなのひとが はなしています。ふたりは なんじに あいますか。',
    listeningScript: '男：明日の映画、何時に待ち合わせする？\n女：映画は午後３時からだから、２時半に駅の改札前でどう？\n男：いいね、じゃあ２時半に会おう！',
    options: ['午後２時 (Jam 14:00)', '午後２時半 (Jam 14:30)', '午後３時 (Jam 15:00)', '午後３時半 (Jam 15:30)'],
    correctIndex: 1,
    explanationId: 'Wanita mengusulkan bertemu jam 2:30 siang di depan gerbang tiket ("２時半に駅の改札前でどう？") dan pria menyetujuinya.'
  },

  // ==========================================
  // --- JLPT N4 QUESTIONS ---
  // ==========================================
  {
    id: 'jlpt-n4-v1',
    level: 'N4',
    category: 'vocabulary',
    prompt: '（　） に 入れるのに 最もよいものを 一つ 選んでください。\n「会議の前に、必要な書類を （　） しておいてください。」',
    options: ['準備', '出発', '案内', '遠慮'],
    correctIndex: 0,
    explanationId: 'Persiapan dokumen sebelum rapat adalah 準備 (junbi = persiapan). 出発 = berangkat, 案内 = memandu, 遠慮 = sungkan.'
  },
  {
    id: 'jlpt-n4-k1',
    level: 'N4',
    category: 'kanji',
    prompt: '下線の 言葉の 読み方として 正しいものを 選びなさい。\n「新しい <u>職場</u> に 慣れました。」',
    options: ['しょくじょう', 'しょくば', 'しょくしょ', 'しょくかい'],
    correctIndex: 1,
    explanationId: 'Kanji 職場 dibaca "しょくば (shokuba)", yang berarti tempat kerja.'
  },
  {
    id: 'jlpt-n4-g1',
    level: 'N4',
    category: 'grammar',
    prompt: '（　） に 入るものを 一つ 選びなさい。\n「熱が あるから、今日は お風呂に 入らない （　） がいいですよ。」',
    options: ['ほう', 'わけ', 'こと', 'もの'],
    correctIndex: 0,
    explanationId: 'Pola ~hou ga ii (〜ほうがいい) digunakan untuk memberikan nasihat atau saran: "V-ないほうがいい" (sebaiknya jangan mandi saat demam).'
  },
  {
    id: 'jlpt-n4-r1',
    level: 'N4',
    category: 'reading',
    prompt: '次の 文章を 読んで、質問に 答えてください。',
    readingPassage: '日本の会社では「報・連・相（ほうれんそう）」が大切です。「報告」は仕事の進行状況を上司に伝えること、「連絡」は関係者に事実を知らせること、「相談」は判断に迷ったときにアドバイスをもらうことです。これを守ることで、ミスを未然に防ぐことができます。',
    options: [
      '「報告」は野菜のほうれん草のことである。',
      '「相談」はトラブルが起きてから怒られることである。',
      '「報・連・相」をしっかり行うことで、ミスを未然に防ぐことができる。',
      '日本の会社では上司に相談してはいけない。'
    ],
    correctIndex: 2,
    explanationId: 'Kalimat terakhir teks secara tegas menyatakan: "これを守ることで、ミスを未然に防ぐことができます" (Dengan menjaga prinsip ini, kita dapat mencegah terjadinya kesalahan sejak awal).'
  },

  // ==========================================
  // --- JLPT N3 QUESTIONS ---
  // ==========================================
  {
    id: 'jlpt-n3-v1',
    level: 'N3',
    category: 'vocabulary',
    prompt: '次の 文の （　） に 入れるのに 最も適切なものを 一つ 選びなさい。\n「今回の プロジェクトの 成功は、チーム全員の 協力の （　） だ。」',
    options: ['たまもの (結晶/成果)', 'しわざ (Ulah negatif)', 'せい (Akibat salah)', 'わけ (Alasan)'],
    correctIndex: 0,
    explanationId: 'たまもの (賜物) digunakan untuk menyatakan buah hasil dari kerja keras/kolaborasi yang positif (賜物だ = buah manis dari kerja keras).'
  },
  {
    id: 'jlpt-n3-k1',
    level: 'N3',
    category: 'kanji',
    prompt: '下線の 言葉の 読み方として 正しいものを 選びなさい。\n「祖母の <u>介護</u> のために 資格を 取りました。」',
    options: ['かんご', 'かいご', 'かいじょ', 'ほご'],
    correctIndex: 1,
    explanationId: 'Kanji 介護 dibaca "かいご (kaigo)" yang berarti perawatan lansia / caregiver.'
  },
  {
    id: 'jlpt-n3-g1',
    level: 'N3',
    category: 'grammar',
    prompt: '（　） に 入れるのに 最もよいものを 一つ 選びなさい。\n「忙しいからといって、健康管理を （　） わけにはいかない。」',
    options: ['怠る (おこたる)', '怠った', '怠らない', '怠りたい'],
    correctIndex: 0,
    explanationId: 'Pola ~wake ni wa ikanai (〜わけにはいかない) berarti "tidak mungkin secara moral/tanggung jawab untuk dilakukan". Menggunakan kata kerja bentuk kamus: 怠るわけにはいかない (kita tidak boleh/tidak bisa mengabaikan kesehatan).'
  },
  {
    id: 'jlpt-n3-r1',
    level: 'N3',
    category: 'reading',
    prompt: '次の 文章を 読んで、筆者が 最も 伝えたいことを 選びなさい。',
    readingPassage: '外国語の習得において、単に文法や単語を暗記するだけでは不十分である。実際の会話の中で相手の文化的背景やニュアンスを理解し、自分の言葉で表現する経験を積むことこそが、真のコミュニケーション能力を養う鍵となるのである。',
    options: [
      '文法と単語さえ暗記すれば完璧に話せるようになる。',
      '実際の会話経験と文化的理解を積むことが真のコミュニケーション能力を養う。',
      '外国語は教科書だけで勉強するのが最も効率的である。',
      '外国語の学習に文化の理解は全く必要ない。'
    ],
    correctIndex: 1,
    explanationId: 'Penulis menegaskan: "実際の会話の中で相手の文化的背景やニュアンスを理解し、自分の言葉で表現する経験を積むことこそが、真のコミュニケーション能力を養う鍵となる" (Pengalaman nyata bercakap dan memahami budaya adalah kunci kemampuan komunikasi sejati).'
  },
  {
    id: 'jlpt-n3-l1',
    level: 'N3',
    category: 'listening',
    prompt: '会社の 会議で リーダーが 話しています。メンバーが 次に やるべきことは 何ですか。',
    listeningScript: 'リーダー：皆さん、新商品の企画案ですが、予算の見直しが必要になりました。まずは各自で経費の削減案をまとめて、明日の正午までに私宛にメールで提出してください。デザインの修正はその後に行います。',
    options: [
      '商品のデザインを今すぐ修正する',
      '経費の削減案をまとめて明日の正午までにメール提出する',
      '新商品の販売を中止する',
      '今すぐ全員で会議を開く'
    ],
    correctIndex: 1,
    explanationId: 'Leader menginstruksikan: "まずは各自で経費の削減案をまとめて、明日の正午までに私宛にメールで提出してください" (Pertama, masing-masing kumpulkan usulan pemangkasan biaya dan kirim email sebelum besok siang).'
  }
];
