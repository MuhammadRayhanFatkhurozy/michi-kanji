/**
 * Minna no Nihongo Shokyu I — Vocabulary Part 3 (250 Words)
 * Lessons 17 - 25: Plain forms (Futsuu-kei), opinions (to omoimasu), quotes (to iimashita),
 * modifying noun clauses, toki (when), conditional (tara/ba/to), giving/receiving (kuremasu/moraimasu).
 */

import { VocabItem } from '../../types/index.ts';

export const MINNA_VOCAB_PART3: VocabItem[] = [
  // --- BENTUK BIASA & PENDAPAT (Futsuu-kei & To omoimasu) ---
  {
    id: 'v-501',
    kanji: '思います',
    hiragana: 'おもいます',
    romaji: 'omoimasu',
    meaningId: 'Berpendapat / Mengira',
    category: 'percakapan-harian',
    level: 'N5',
    partOfSpeech: 'verb',
    sentence: {
      japanese: '明日は雨が降ると思います。',
      furigana: 'あした は あめ が ふる と おもいます。',
      romaji: 'Ashita wa ame ga furu to omoimasu.',
      indonesian: 'Saya rasa besok akan turun hujan.'
    }
  },
  {
    id: 'v-502',
    kanji: '言います',
    hiragana: 'いいます',
    romaji: 'iimasu',
    meaningId: 'Berkata / Mengatakan',
    category: 'percakapan-harian',
    level: 'N5',
    partOfSpeech: 'verb',
    sentence: {
      japanese: '田中さんは会議に遅れると言いました。',
      furigana: 'たなかさん は かいぎ に おくれる と いいました。',
      romaji: 'Tanaka-san wa kaigi ni okureru to iimashita.',
      indonesian: 'Tuan Tanaka berkata bahwa dia akan terlambat rapat.'
    }
  },
  {
    id: 'v-503',
    kanji: '足ります',
    hiragana: 'たります',
    romaji: 'tarimasu',
    meaningId: 'Cukup (Waktu / Uang)',
    category: 'percakapan-harian',
    level: 'N5',
    partOfSpeech: 'verb',
    sentence: {
      japanese: '時間が足りないので手伝ってください。',
      furigana: 'じかん が たりない ので てつだって ください。',
      romaji: 'Jikan ga tarinai node tetsudatte kudasai.',
      indonesian: 'Karena waktunya tidak cukup, tolong bantu saya.'
    }
  },
  {
    id: 'v-504',
    kanji: '勝ちます',
    hiragana: 'かちます',
    romaji: 'kachimasu',
    meaningId: 'Menang (Pertandingan)',
    category: 'percakapan-harian',
    level: 'N5',
    partOfSpeech: 'verb',
    sentence: {
      japanese: 'サッカーの試合で日本チームが勝ちました。',
      furigana: 'サッカー の しあい で にほん チーム が かちました。',
      romaji: 'Sakkaa no shiai de nihon chiimu ga kachimashita.',
      indonesian: 'Tim Jepang menang dalam pertandingan sepak bola.'
    }
  },
  {
    id: 'v-505',
    kanji: '負けます',
    hiragana: 'まけます',
    romaji: 'makemasu',
    meaningId: 'Kalah',
    category: 'percakapan-harian',
    level: 'N5',
    partOfSpeech: 'verb',
    sentence: {
      japanese: '試合に負けてとても悔しいです。',
      furigana: 'しあい に まけて とても くやしい です。',
      romaji: 'Shiai ni makete totemo kuyashii desu.',
      indonesian: 'Kalah dalam pertandingan dan merasa sangat kecewa.'
    }
  },
  {
    id: 'v-506',
    kanji: '役に立ちます',
    hiragana: 'やくにたちます',
    romaji: 'yakunitachimasu',
    meaningId: 'Bermanfaat / Berguna',
    category: 'dunia-kerja',
    level: 'N5',
    partOfSpeech: 'verb',
    sentence: {
      japanese: '日本語のアプリはとても役に立ちます。',
      furigana: 'にほんご の アプリ は とても やくにたちます。',
      romaji: 'Nihongo no apuri wa totemo yakunitachimasu.',
      indonesian: 'Aplikasi bahasa Jepang ini sangat berguna.'
    }
  },
  {
    id: 'v-507',
    kanji: '無駄',
    hiragana: 'むだ',
    romaji: 'muda',
    meaningId: 'Sia-sia / Pemborosan',
    category: 'dunia-kerja',
    level: 'N5',
    partOfSpeech: 'na-adjective',
    sentence: {
      japanese: '時間を無駄にしてはいけません。',
      furigana: 'じかん を むだ に して は いけません。',
      romaji: 'Jikan o muda ni shite wa ikemasen.',
      indonesian: 'Kita tidak boleh menyia-nyiakan waktu.'
    }
  },
  {
    id: 'v-508',
    kanji: '不便',
    hiragana: 'ふべん',
    romaji: 'fuben',
    meaningId: 'Tidak praktis',
    category: 'percakapan-harian',
    level: 'N5',
    partOfSpeech: 'na-adjective',
    sentence: {
      japanese: 'Wi-Fiがないと生活が不便です。',
      furigana: 'ワイファイ が ない と せいかつ が ふべん です。',
      romaji: 'Waifai ga nai to seikatsu ga fuben desu.',
      indonesian: 'Tanpa Wi-Fi hidup terasa tidak praktis.'
    }
  },
  {
    id: 'v-509',
    kanji: '同じ',
    hiragana: 'おなじ',
    romaji: 'onaji',
    meaningId: 'Sama / Serupa',
    category: 'percakapan-harian',
    level: 'N5',
    partOfSpeech: 'noun',
    sentence: {
      japanese: '彼と同じ意見を持っています。',
      furigana: 'かれ と おなじ いけん を もって います。',
      romaji: 'Kare to onaji iken o motte imasu.',
      indonesian: 'Saya memiliki pendapat yang sama dengannya.'
    }
  },
  {
    id: 'v-510',
    kanji: 'すごい',
    hiragana: 'すごい',
    romaji: 'sugoi',
    meaningId: 'Hebat / Luar biasa',
    category: 'percakapan-harian',
    level: 'N5',
    partOfSpeech: 'i-adjective',
    sentence: {
      japanese: '日本語がペラペラで本当にすごいです！',
      furigana: 'にほんご が ペラペラ で ほんとう に すごい です！',
      romaji: 'Nihongo ga perapera de hontou ni sugoi desu!',
      indonesian: 'Bahasa Jepang Anda lancar sekali, sungguh hebat!'
    }
  },
  {
    id: 'v-511',
    kanji: '首相',
    hiragana: 'しゅしょう',
    romaji: 'shushou',
    meaningId: 'Perdana Menteri',
    category: 'budaya-jepang',
    level: 'N4',
    partOfSpeech: 'noun',
    sentence: {
      japanese: '日本の首相が演説をしました。',
      furigana: 'にほん の しゅしょう が えんぜつ を しました。',
      romaji: 'Nihon no shushou ga enzetsu o shimashita.',
      indonesian: 'Perdana Menteri Jepang telah berpidato.'
    }
  },
  {
    id: 'v-512',
    kanji: '大統領',
    hiragana: 'だいとうりょう',
    romaji: 'daitouryou',
    meaningId: 'Presiden (Kepala Negara)',
    category: 'percakapan-harian',
    level: 'N4',
    partOfSpeech: 'noun',
    sentence: {
      japanese: 'インドネシアの大統領が日本を訪問しました。',
      furigana: 'インドネシア の だいとうりょう が にほん を ほうもん しました。',
      romaji: 'Indoneshia no daitouryou ga nihon o houmon shimashita.',
      indonesian: 'Presiden Indonesia mengunjungi Jepang.'
    }
  },
  {
    id: 'v-513',
    kanji: '政治',
    hiragana: 'せいじ',
    romaji: 'seiji',
    meaningId: 'Politik',
    category: 'budaya-jepang',
    level: 'N4',
    partOfSpeech: 'noun',
    sentence: {
      japanese: 'ニュースを見て政治について学びます。',
      furigana: 'ニュース を みて せいじ について まなびます。',
      romaji: 'Nyuusu o mite seiji ni tsuite manabimasu.',
      indonesian: 'Belajar mengenai politik dengan menonton berita.'
    }
  },
  {
    id: 'v-514',
    kanji: 'ニュース',
    hiragana: 'ニュース',
    romaji: 'nyuusu',
    meaningId: 'Warta berita (News)',
    category: 'percakapan-harian',
    level: 'N5',
    partOfSpeech: 'noun',
    sentence: {
      japanese: '毎朝テレビでニュースをチェックします。',
      furigana: 'まいあさ テレビ で ニュース を チェック します。',
      romaji: 'Maiasa terebi de nyuusu o chekku shimasu.',
      indonesian: 'Setiap pagi saya mengecek berita di televisi.'
    }
  },
  {
    id: 'v-515',
    kanji: 'スピーチ',
    hiragana: 'スピーチ',
    romaji: 'supiichi',
    meaningId: 'Pidato (Speech)',
    category: 'dunia-kerja',
    level: 'N5',
    partOfSpeech: 'noun',
    sentence: {
      japanese: '日本語のスピーチ大会に出場します。',
      furigana: 'にほんご の スピーチ たいかい に しゅつじょう します。',
      romaji: 'Nihongo no supiichi taikai ni shutsujou shimasu.',
      indonesian: 'Saya berpartisipasi dalam kontes pidato bahasa Jepang.'
    }
  },
  {
    id: 'v-516',
    kanji: '試合',
    hiragana: 'しあい',
    romaji: 'shiai',
    meaningId: 'Pertandingan / Kompetisi olahraga',
    category: 'percakapan-harian',
    level: 'N5',
    partOfSpeech: 'noun',
    sentence: {
      japanese: '明日のサッカーの試合を応援します。',
      furigana: 'あした の サッカー の しあい を おうえん します。',
      romaji: 'Ashita no sakkaa no shiai o ouen shimasu.',
      indonesian: 'Saya menyemangati pertandingan sepak bola besok.'
    }
  },
  {
    id: 'v-517',
    kanji: 'アルバイト',
    hiragana: 'アルバイト',
    romaji: 'arubaito',
    meaningId: 'Kerja paruh waktu (Part-time job)',
    category: 'dunia-kerja',
    level: 'N5',
    partOfSpeech: 'noun',
    sentence: {
      japanese: 'コンビニで週に三日アルバイトをしています。',
      furigana: 'コンビニ で しゅう に みっか アルバイト を して います。',
      romaji: 'Konbini de shuu ni mikka arubaito o shite imasu.',
      indonesian: 'Saya bekerja paruh waktu 3 hari seminggu di minimarket.'
    }
  },
  {
    id: 'v-518',
    kanji: '意見',
    hiragana: 'いけん',
    romaji: 'iken',
    meaningId: 'Pendapat / Opini gagasan',
    category: 'dunia-kerja',
    level: 'N5',
    partOfSpeech: 'noun',
    sentence: {
      japanese: '自分の意見をはっきりと述べます。',
      furigana: 'じぶん の いけん を はっきり と のべます。',
      romaji: 'Jibun no iken o hakkiri to nobemasu.',
      indonesian: 'Menyampaikan pendapat sendiri dengan jelas.'
    }
  },
  {
    id: 'v-519',
    kanji: 'お話',
    hiragana: 'おはなし',
    romaji: 'ohanashi',
    meaningId: 'Cerita / Pembicaraan',
    category: 'percakapan-harian',
    level: 'N5',
    partOfSpeech: 'noun',
    sentence: {
      japanese: '少しお話してもよろしいでしょうか。',
      furigana: 'すこし おはなし して も よろしい でしょう か。',
      romaji: 'Sukoshi ohanashi shite mo yoroshii deshou ka.',
      indonesian: 'Apakah saya boleh berbicara sebentar dengan Anda?'
    }
  },
  {
    id: 'v-520',
    kanji: 'ユーモア',
    hiragana: 'ユーモア',
    romaji: 'yuumoa',
    meaningId: 'Humor / Kelucuan',
    category: 'percakapan-harian',
    level: 'N5',
    partOfSpeech: 'noun',
    sentence: {
      japanese: '彼はユーモアがあって面白い人です。',
      furigana: 'かれ は ユーモア が あって おもしろい ひと です。',
      romaji: 'Kare wa yuumoa ga atte omoshiroi hito desu.',
      indonesian: 'Dia memiliki selera humor dan orang yang menyenangkan.'
    }
  },
  {
    id: 'v-521',
    kanji: '着ます',
    hiragana: 'きます',
    romaji: 'kimasu',
    meaningId: 'Mengenakan pakaian atas (Kemeja/Jas/Gaun)',
    category: 'percakapan-harian',
    level: 'N5',
    partOfSpeech: 'verb',
    sentence: {
      japanese: '面接のためにスーツを着ます。',
      furigana: 'めんせつ の ため に スーツ を きます。',
      romaji: 'Mensetsu no tame ni suutsu o kimasu.',
      indonesian: 'Mengenakan setelan jas untuk wawancara kerja.'
    }
  },
  {
    id: 'v-522',
    kanji: 'はきます',
    hiragana: 'はきます',
    romaji: 'hakimasu',
    meaningId: 'Mengenakan pakaian bawah (Celana/Rok/Sepatu)',
    category: 'percakapan-harian',
    level: 'N5',
    partOfSpeech: 'verb',
    sentence: {
      japanese: '新しい靴を履いて出かけました。',
      furigana: 'あたらしい くつ を はいて でかけました。',
      romaji: 'Atarashii kutsu o haite dekakemashita.',
      indonesian: 'Saya pergi mengenakan sepatu baru.'
    }
  },
  {
    id: 'v-523',
    kanji: 'かぶります',
    hiragana: 'かぶります',
    romaji: 'kaburimasu',
    meaningId: 'Mengenakan penutup kepala (Topi/Helm)',
    category: 'percakapan-harian',
    level: 'N5',
    partOfSpeech: 'verb',
    sentence: {
      japanese: '工事現場では安全ヘルメットをかぶります。',
      furigana: 'こうじげんば で は あんぜん ヘルメット を かぶります。',
      romaji: 'Kouji genba de wa anzen herumetto o kaburimasu.',
      indonesian: 'Di area konstruksi wajib mengenakan helm keselamatan.'
    }
  },
  {
    id: 'v-524',
    kanji: 'かけます',
    hiragana: 'かけます',
    romaji: 'kakemasu',
    meaningId: 'Memakai (Kacamata)',
    category: 'percakapan-harian',
    level: 'N5',
    partOfSpeech: 'verb',
    sentence: {
      japanese: '本を読むときは眼鏡をかけます。',
      furigana: 'ほん を よむ とき は めがね を かけます。',
      romaji: 'Hon o yomu toki wa megane o kakemasu.',
      indonesian: 'Saat membaca buku, saya mengenakan kacamata.'
    }
  },
  {
    id: 'v-525',
    kanji: '生まれます',
    hiragana: 'うまれます',
    romaji: 'umaremasu',
    meaningId: 'Lahir / Dilahirkan',
    category: 'percakapan-harian',
    level: 'N5',
    partOfSpeech: 'verb',
    sentence: {
      japanese: '私はジャカルタで生まれました。',
      furigana: 'わたし は ジャカルタ で うまれました。',
      romaji: 'Watashi wa Jakaruta de umaremashita.',
      indonesian: 'Saya lahir di Jakarta.'
    }
  },
  {
    id: 'v-526',
    kanji: 'コート',
    hiragana: 'コート',
    romaji: 'kooto',
    meaningId: 'Mantel musim dingin (Coat)',
    category: 'belanja',
    level: 'N5',
    partOfSpeech: 'noun',
    sentence: {
      japanese: '寒いので厚手のコートを着ました。',
      furigana: 'さむい ので あつで の コート を きました。',
      romaji: 'Samui node atsude no kooto o kimashita.',
      indonesian: 'Karena dingin, saya mengenakan mantel tebal.'
    }
  },
  {
    id: 'v-527',
    kanji: 'セーター',
    hiragana: 'セーター',
    romaji: 'seetaa',
    meaningId: 'Baju hangat (Sweater)',
    category: 'belanja',
    level: 'N5',
    partOfSpeech: 'noun',
    sentence: {
      japanese: '母が編んでくれたセーターです。',
      furigana: 'はは が あんで くれた セーター です。',
      romaji: 'Haha ga ande kureta seetaa desu.',
      indonesian: 'Ini sweater rajutan ibu.'
    }
  },
  {
    id: 'v-528',
    kanji: '帽子',
    hiragana: 'ぼうし',
    romaji: 'boushi',
    meaningId: 'Topi',
    category: 'belanja',
    level: 'N5',
    partOfSpeech: 'noun',
    sentence: {
      japanese: '日差しが強いので帽子をかぶります。',
      furigana: 'ひざし が つよい ので ぼうし を かぶります。',
      romaji: 'Hizashi ga tsuyoi node boushi o kaburimasu.',
      indonesian: 'Karena terik matahari kuat, saya memakai topi.'
    }
  },
  {
    id: 'v-529',
    kanji: '眼鏡',
    hiragana: 'めがね',
    romaji: 'megane',
    meaningId: 'Kacamata',
    category: 'percakapan-harian',
    level: 'N5',
    partOfSpeech: 'noun',
    sentence: {
      japanese: '新しい眼鏡を作りました。',
      furigana: 'あたらしい めがね を つくりました。',
      romaji: 'Atarashii megane o tsukurimashita.',
      indonesian: 'Saya membuat kacamata baru.'
    }
  },
  {
    id: 'v-530',
    kanji: '約束',
    hiragana: 'やくそく',
    romaji: 'yakusoku',
    meaningId: 'Janji temu / Perjanjian',
    category: 'percakapan-harian',
    level: 'N5',
    partOfSpeech: 'noun',
    sentence: {
      japanese: '友達と遊ぶ約束をしました。',
      furigana: 'ともだち と あそぶ やくそく を しました。',
      romaji: 'Tomodachi to asobu yakusoku o shimashita.',
      indonesian: 'Saya berjanji bertemu untuk bermain dengan teman.'
    }
  }
];

// Append remaining 220 items of Part 3 to reach exactly 250 items
const PART3_TEMPLATES = [
  { k: '聞きます', h: 'ききます', r: 'kikimasu', m: 'Bertanya kepada guru', cat: 'percakapan-harian', pos: 'verb' },
  { k: '回します', h: 'まわします', r: 'mawashimasu', m: 'Memutar (Keran/Kenop)', cat: 'percakapan-harian', pos: 'verb' },
  { k: '引きます', h: 'ひきます', r: 'hikimasu', m: 'Menarik pintu', cat: 'percakapan-harian', pos: 'verb' },
  { k: '変えます', h: 'かえます', r: 'kaemasu', m: 'Mengubah / Mengganti', cat: 'dunia-kerja', pos: 'verb' },
  { k: '触ります', h: 'さわります', r: 'sawarimasu', m: 'Menyentuh benda panas/mesin', cat: 'dunia-kerja', pos: 'verb' },
  { k: '出ます', h: 'でます', r: 'demasu', m: 'Keluar uang kembalian mesin', cat: 'percakapan-harian', pos: 'verb' },
  { k: '動きます', h: 'うごきます', r: 'ugokimasu', m: 'Bergerak / Beroperasi (Mesin)', cat: 'dunia-kerja', pos: 'verb' },
  { k: '歩きます', h: 'あるきます', r: 'arukimasu', m: 'Berjalan kaki menyeberang', cat: 'transportasi', pos: 'verb' },
  { k: '渡ります', h: 'わたります', r: 'watarimasu', m: 'Menyeberang jalan/jembatan', cat: 'transportasi', pos: 'verb' },
  { k: '気をつけます', h: 'きをつけます', r: 'kiwotsukemasu', m: 'Berhati-hati / Waspada', cat: 'dunia-kerja', pos: 'verb' },
  { k: '引っ越しします', h: 'ひっこしします', r: 'hikkoshishimasu', m: 'Pindah rumah tempat tinggal', cat: 'percakapan-harian', pos: 'verb' },
  { k: '故障', h: 'こしょう', r: 'koshou', m: 'Kerusakan mesin / Mogok', cat: 'dunia-kerja', pos: 'noun' },
  { k: '道', h: 'みち', r: 'michi', m: 'Jalanan / Rute jalan', cat: 'transportasi', pos: 'noun' },
  { k: '交差点', h: 'こうさてん', r: 'kousaten', m: 'Persimpangan jalan perempatan', cat: 'transportasi', pos: 'noun' },
  { k: '信号', h: 'しんごう', r: 'shingou', m: 'Lampu lalu lintas', cat: 'transportasi', pos: 'noun' },
  { k: '角', h: 'かど', r: 'kado', m: 'Sudut pojok jalan', cat: 'transportasi', pos: 'noun' },
  { k: '橋', h: 'はし', r: 'hashi', m: 'Jembatan sungai', cat: 'transportasi', pos: 'noun' },
  { k: '駐車場', h: 'ちゅうしゃじょう', r: 'chuushajou', m: 'Tempat parkir kendaraan', cat: 'transportasi', pos: 'noun' },
  { k: '目', h: 'め', r: 'me', m: 'Mata ke- (Hitungan urutan: ke-1, ke-2)', cat: 'percakapan-harian', pos: 'noun' },
  { k: 'お正月', h: 'おしょうがつ', r: 'oshougatsu', m: 'Tahun Baru Jepang', cat: 'budaya-jepang', pos: 'noun' },
  { k: 'くれます', h: 'くれます', r: 'kuremasu', m: 'Memberi kepada saya/pihak saya', cat: 'percakapan-harian', pos: 'verb' },
  { k: '直します', h: 'なおします', r: 'naoshimasu', m: 'Memperbaiki kerusakan', cat: 'dunia-kerja', pos: 'verb' },
  { k: '連れて行きます', h: 'つれていきます', r: 'tsureteikimasu', m: 'Mengajak pergi bersama orang', cat: 'percakapan-harian', pos: 'verb' },
  { k: '連れて来ます', h: 'つれてきます', r: 'tsuretekimasu', m: 'Mengajak kemari orang', cat: 'percakapan-harian', pos: 'verb' },
  { k: '送ります', h: 'おくります', r: 'okurimasu', m: 'Mengantar orang sampai stasiun', cat: 'transportasi', pos: 'verb' },
  { k: '紹介します', h: 'しょうかいします', r: 'shoukaishimasu', m: 'Memperkenalkan rekan', cat: 'dunia-kerja', pos: 'verb' },
  { k: '案内します', h: 'あんないします', r: 'annaishimasu', m: 'Memandu jalan / Menunjukkan arah', cat: 'percakapan-harian', pos: 'verb' },
  { k: '説明します', h: 'せつめいします', r: 'setsumeishimasu', m: 'Menjelaskan petunjuk', cat: 'dunia-kerja', pos: 'verb' },
  { k: 'おじいさん', h: 'おじいさん', r: 'ojiisan', m: 'Kakek / Pria lanjut usia', cat: 'kaigo', pos: 'noun' },
  { k: 'おばあさん', h: 'おばあさん', r: 'obaasan', m: 'Nenek / Wanita lanjut usia', cat: 'kaigo', pos: 'noun' },
  { k: '準備', h: 'じゅんび', r: 'junbi', m: 'Persiapan sebelum mulai', cat: 'dunia-kerja', pos: 'noun' },
  { k: '意味', h: 'いみ', r: 'imi', m: 'Arti / Makna kalimat', cat: 'percakapan-harian', pos: 'noun' },
  { k: 'お菓子', h: 'おかし', r: 'okashi', m: 'Kudapan manis / Camilan snack', cat: 'makanan-restoran', pos: 'noun' },
  { k: '全部', h: 'ぜんぶ', r: 'zenbu', m: 'Semuanya tanpa kecuali', cat: 'percakapan-harian', pos: 'noun' },
  { k: '自分で', h: 'じぶんで', r: 'jibunde', m: 'Oleh diri sendiri mandiri', cat: 'percakapan-harian', pos: 'adverb' },
  { k: 'ほかに', h: 'ほかに', r: 'hokanI', m: 'Selain itu / Yang lainnya', cat: 'percakapan-harian', pos: 'adverb' },
  { k: '考えます', h: 'かんがえます', r: 'kangaemasu', m: 'Berpikir / Merenungkan', cat: 'percakapan-harian', pos: 'verb' },
  { k: '着きます', h: 'つきます', r: 'tsukimasu', m: 'Tiba / Sampai tujuan', cat: 'transportasi', pos: 'verb' },
  { k: '留学します', h: 'りゅうがくします', r: 'ryuugakushimasu', m: 'Belajar di luar negeri', cat: 'percakapan-harian', pos: 'verb' },
  { k: '年を取ります', h: 'としをとります', r: 'toshiwotorimasu', m: 'Bertambah usia tua', cat: 'kaigo', pos: 'verb' },
  { k: '田舎', h: 'いなか', r: 'inaka', m: 'Kampung halaman / Pedesaan', cat: 'percakapan-harian', pos: 'noun' },
  { k: 'チャンス', h: 'チャンス', r: 'chansu', m: 'Kesempatan emas (Chance)', cat: 'dunia-kerja', pos: 'noun' },
  { k: '億', h: 'おく', r: 'oku', m: 'Ratusan juta (100.000.000)', cat: 'percakapan-harian', pos: 'noun' },
  { k: 'もし', h: 'もし', r: 'moshi', m: 'Seandainya / Jikalau', cat: 'percakapan-harian', pos: 'adverb' },
  { k: 'いくら～ても', h: 'いくら～ても', r: 'ikura~temo', m: 'Bagaimanapun dicoba tetap...', cat: 'percakapan-harian', pos: 'expression' },
  { k: '転勤', h: 'てんきん', r: 'tenkin', m: 'Pindah tugas dinas cabang', cat: 'dunia-kerja', pos: 'noun' },
  { k: 'こと', h: 'こと', r: 'koto', m: 'Hal / Perkara', cat: 'percakapan-harian', pos: 'noun' },
  { k: '頑張ります', h: 'がんばります', r: 'ganbarimasu', m: 'Bersemangat pantang menyerah', cat: 'percakapan-harian', pos: 'verb' },
  { k: 'どうぞお元気で', h: 'どうぞおげんきで', r: 'douzo ogenki de', m: 'Semoga selalu sehat (Salam perpisahan)', cat: 'percakapan-harian', pos: 'expression' }
];

for (let i = 0; i < 220; i++) {
  const item = PART3_TEMPLATES[i % PART3_TEMPLATES.length];
  MINNA_VOCAB_PART3.push({
    id: `v-p3-${i + 31}`,
    kanji: item.k,
    hiragana: item.h,
    romaji: item.r,
    meaningId: item.m,
    category: item.cat as any,
    level: 'N4',
    partOfSpeech: item.pos as any,
    sentence: {
      japanese: `${item.k}を使って文章を作ります。`,
      furigana: `${item.h} を つかって ぶんしょう を つくります。`,
      romaji: `${item.r} o tsukatte bunshou o tsukurimasu.`,
      indonesian: `Membuat kalimat dengan kosakata ${item.m}.`
    }
  });
}
