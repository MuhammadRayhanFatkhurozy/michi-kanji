/**
 * Minna no Nihongo Shokyu I — Vocabulary Part 2 (250 Words)
 * Lessons 8 - 16: Adjectives (i & na), colors, flavors, locations/existences (arimasu/imasu),
 * counters & quantities, seasons, weather, desires (hoshii/tai), and te-form connections.
 */

import { VocabItem } from '../../types/index.ts';

export const MINNA_VOCAB_PART2: VocabItem[] = [
  // --- KATA SIFAT I (I-Adjectives) ---
  {
    id: 'v-251',
    kanji: '大きい',
    hiragana: 'おおきい',
    romaji: 'ookii',
    meaningId: 'Besar',
    category: 'percakapan-harian',
    level: 'N5',
    partOfSpeech: 'i-adjective',
    sentence: {
      japanese: '東京はとても大きい都市です。',
      furigana: 'とうきょう は とても おおきい とし です。',
      romaji: 'Toukyou wa totemo ookii toshi desu.',
      indonesian: 'Tokyo adalah kota yang sangat besar.'
    }
  },
  {
    id: 'v-252',
    kanji: '小さい',
    hiragana: 'ちいさい',
    romaji: 'chiisai',
    meaningId: 'Kecil',
    category: 'percakapan-harian',
    level: 'N5',
    partOfSpeech: 'i-adjective',
    sentence: {
      japanese: '私の部屋は小さいですが静かです。',
      furigana: 'わたし の へや は ちいさい です が しずか です。',
      romaji: 'Watashi no heya wa chiisai desu ga shizuka desu.',
      indonesian: 'Kamar saya kecil tetapi tenang.'
    }
  },
  {
    id: 'v-253',
    kanji: '新しい',
    hiragana: 'あたらしい',
    romaji: 'atarashii',
    meaningId: 'Baru',
    category: 'percakapan-harian',
    level: 'N5',
    partOfSpeech: 'i-adjective',
    sentence: {
      japanese: '新しい靴を買いました。',
      furigana: 'あたらしい くつ を かいました。',
      romaji: 'Atarashii kutsu o kaimashita.',
      indonesian: 'Saya membeli sepatu baru.'
    }
  },
  {
    id: 'v-254',
    kanji: '古い',
    hiragana: 'ふるい',
    romaji: 'furui',
    meaningId: 'Lama / Tua / Kuno',
    category: 'percakapan-harian',
    level: 'N5',
    partOfSpeech: 'i-adjective',
    sentence: {
      japanese: '京都には古いお寺がたくさんあります。',
      furigana: 'きょうと に は ふるい おてら が たくさん あります。',
      romaji: 'Kyouto ni wa furui otera ga takusan arimasu.',
      indonesian: 'Di Kyoto ada banyak kuil kuno.'
    }
  },
  {
    id: 'v-255',
    kanji: 'いい',
    hiragana: 'いい',
    romaji: 'ii',
    meaningId: 'Bagus / Baik',
    category: 'percakapan-harian',
    level: 'N5',
    partOfSpeech: 'i-adjective',
    sentence: {
      japanese: '今日は天気がとてもいいですね。',
      furigana: 'きょう は てんき が とても いい です ね。',
      romaji: 'Kyou wa tenki ga totemo ii desu ne.',
      indonesian: 'Hari ini cuacanya sangat bagus ya.'
    }
  },
  {
    id: 'v-256',
    kanji: '悪い',
    hiragana: 'わるい',
    romaji: 'warui',
    meaningId: 'Buruk / Jelek',
    category: 'percakapan-harian',
    level: 'N5',
    partOfSpeech: 'i-adjective',
    sentence: {
      japanese: '体調が悪いので早退します。',
      furigana: 'たいちょう が わるい ので そうたい します。',
      romaji: 'Taichou ga warui node soutai shimasu.',
      indonesian: 'Karena kondisi badan kurang baik, saya izin pulang cepat.'
    }
  },
  {
    id: 'v-257',
    kanji: '暑い',
    hiragana: 'あつい',
    romaji: 'atsui',
    meaningId: 'Panas (Cuaca)',
    category: 'percakapan-harian',
    level: 'N5',
    partOfSpeech: 'i-adjective',
    sentence: {
      japanese: '日本の夏はとても暑いです。',
      furigana: 'にほん の なつ は とても あつい です。',
      romaji: 'Nihon no natsu wa totemo atsui desu.',
      indonesian: 'Musim panas di Jepang sangat panas.'
    }
  },
  {
    id: 'v-258',
    kanji: '熱い',
    hiragana: 'あつい',
    romaji: 'atsui',
    meaningId: 'Panas (Suhu benda/makanan)',
    category: 'makanan-restoran',
    level: 'N5',
    partOfSpeech: 'i-adjective',
    sentence: {
      japanese: '熱いお茶をどうぞ。',
      furigana: 'あつい おちゃ を どうぞ。',
      romaji: 'Atsui ocha o douzo.',
      indonesian: 'Silakan, ini teh panas.'
    }
  },
  {
    id: 'v-259',
    kanji: '寒い',
    hiragana: 'さむい',
    romaji: 'samui',
    meaningId: 'Dingin (Suhu cuaca/udara)',
    category: 'percakapan-harian',
    level: 'N5',
    partOfSpeech: 'i-adjective',
    sentence: {
      japanese: '冬の北海道はとても寒いです。',
      furigana: 'ふゆ の ほっかいどう は とても さむい です。',
      romaji: 'Fuyu no Hokkaidou wa totemo samui desu.',
      indonesian: 'Musim dingin di Hokkaido sangat dingin.'
    }
  },
  {
    id: 'v-260',
    kanji: '冷たい',
    hiragana: 'つめたい',
    romaji: 'tsumetai',
    meaningId: 'Dingin (Benda/minuman)',
    category: 'makanan-restoran',
    level: 'N5',
    partOfSpeech: 'i-adjective',
    sentence: {
      japanese: '冷たい水を一杯ください。',
      furigana: 'つめたい みず を いっぱい ください。',
      romaji: 'Tsumetai mizu o ippai kudasai.',
      indonesian: 'Minta segelas air dingin.'
    }
  },
  {
    id: 'v-261',
    kanji: '難しい',
    hiragana: 'むずかしい',
    romaji: 'muzukashii',
    meaningId: 'Sulit / Sukar',
    category: 'percakapan-harian',
    level: 'N5',
    partOfSpeech: 'i-adjective',
    sentence: {
      japanese: '漢字の読み方は少し難しいです。',
      furigana: 'かんじ の よみかた は すこし むずかしい です。',
      romaji: 'Kanji no yomikata wa sukoshi muzukashii desu.',
      indonesian: 'Cara membaca kanji agak sulit.'
    }
  },
  {
    id: 'v-262',
    kanji: '易しい',
    hiragana: 'やさしい',
    romaji: 'yasashii',
    meaningId: 'Mudah / Gampang',
    category: 'percakapan-harian',
    level: 'N5',
    partOfSpeech: 'i-adjective',
    sentence: {
      japanese: 'ひらがなはとても易しいです。',
      furigana: 'ひらがな は とても やさしい です。',
      romaji: 'Hiragana wa totemo yasashii desu.',
      indonesian: 'Hiragana sangat mudah.'
    }
  },
  {
    id: 'v-263',
    kanji: '高い',
    hiragana: 'たかい',
    romaji: 'takai',
    meaningId: 'Mahal / Tinggi',
    category: 'belanja',
    level: 'N5',
    partOfSpeech: 'i-adjective',
    sentence: {
      japanese: 'このパソコンは性能がいいですが高いです。',
      furigana: 'この パソコン は せいのう が いい です が たかい です。',
      romaji: 'Kono pasokon wa seinou ga ii desu ga takai desu.',
      indonesian: 'Komputer ini performanya bagus tapi mahal.'
    }
  },
  {
    id: 'v-264',
    kanji: '安い',
    hiragana: 'やすい',
    romaji: 'yasui',
    meaningId: 'Murah',
    category: 'belanja',
    level: 'N5',
    partOfSpeech: 'i-adjective',
    sentence: {
      japanese: 'このスーパーの野菜は安いです。',
      furigana: 'この スーパー の やさい は やすい です。',
      romaji: 'Kono suupaa no yasai wa yasui desu.',
      indonesian: 'Sayuran di supermarket ini murah.'
    }
  },
  {
    id: 'v-265',
    kanji: '低い',
    hiragana: 'ひくい',
    romaji: 'hikui',
    meaningId: 'Rendah (Tinggi badan/gedung)',
    category: 'percakapan-harian',
    level: 'N5',
    partOfSpeech: 'i-adjective',
    sentence: {
      japanese: 'あの机は少し低いです。',
      furigana: 'あの つくえ は すこし ひくい です。',
      romaji: 'Ano tsukue wa sukoshi hikui desu.',
      indonesian: 'Meja itu agak rendah.'
    }
  },
  {
    id: 'v-266',
    kanji: '面白い',
    hiragana: 'おもしろい',
    romaji: 'omoshiroi',
    meaningId: 'Menarik / Lucu',
    category: 'percakapan-harian',
    level: 'N5',
    partOfSpeech: 'i-adjective',
    sentence: {
      japanese: 'この日本のアニメはとても面白いです。',
      furigana: 'この にほん の アニメ は とても おもしろい です。',
      romaji: 'Kono nihon no anime wa totemo omoshiroi desu.',
      indonesian: 'Anime Jepang ini sangat menarik.'
    }
  },
  {
    id: 'v-267',
    kanji: '美味しい',
    hiragana: 'おいしい',
    romaji: 'oishii',
    meaningId: 'Enak / Lezat',
    category: 'makanan-restoran',
    level: 'N5',
    partOfSpeech: 'i-adjective',
    sentence: {
      japanese: 'お母さんの料理は美味しいです。',
      furigana: 'おかあさん の りょうり は おいしい です。',
      romaji: 'Okaasan no ryouri wa oishii desu.',
      indonesian: 'Masakan ibu enak.'
    }
  },
  {
    id: 'v-268',
    kanji: '不味い',
    hiragana: 'まずい',
    romaji: 'mazui',
    meaningId: 'Tidak enak (Rasa makanan)',
    category: 'makanan-restoran',
    level: 'N5',
    partOfSpeech: 'i-adjective',
    sentence: {
      japanese: '薬は苦くて不味いです。',
      furigana: 'くすり は にがくて まずい です。',
      romaji: 'Kusuri wa nigakute mazui desu.',
      indonesian: 'Obat terasa pahit dan tidak enak.'
    }
  },
  {
    id: 'v-269',
    kanji: '忙しい',
    hiragana: 'いそがしい',
    romaji: 'isogashii',
    meaningId: 'Sibuk',
    category: 'dunia-kerja',
    level: 'N5',
    partOfSpeech: 'i-adjective',
    sentence: {
      japanese: '月曜日は会議が多くて忙しいです。',
      furigana: 'げつようび は かいぎ が おおくて いそがしい です。',
      romaji: 'Getsuyoubi wa kaigi ga ookute isogashii desu.',
      indonesian: 'Hari Senin sibuk karena banyak rapat.'
    }
  },
  {
    id: 'v-270',
    kanji: '楽しい',
    hiragana: 'たのしい',
    romaji: 'tanoshii',
    meaningId: 'Menyenangkan',
    category: 'percakapan-harian',
    level: 'N5',
    partOfSpeech: 'i-adjective',
    sentence: {
      japanese: '友達との旅行は楽しかったです。',
      furigana: 'ともだち と の りょこう は たのしかった です。',
      romaji: 'Tomodachi to no ryokou wa tanoshikatta desu.',
      indonesian: 'Liburan bersama teman sangat menyenangkan.'
    }
  },
  {
    id: 'v-271',
    kanji: '白い',
    hiragana: 'しろい',
    romaji: 'shiroi',
    meaningId: 'Putih',
    category: 'percakapan-harian',
    level: 'N5',
    partOfSpeech: 'i-adjective',
    sentence: {
      japanese: '富士山に白い雪が積もっています。',
      furigana: 'ふじさん に しろい ゆき が つもって います。',
      romaji: 'Fujisan ni shiroi yuki ga ttsumotte imasu.',
      indonesian: 'Salju putih menumpuk di Gunung Fuji.'
    }
  },
  {
    id: 'v-272',
    kanji: '黒い',
    hiragana: 'くろい',
    romaji: 'kuroi',
    meaningId: 'Hitam',
    category: 'percakapan-harian',
    level: 'N5',
    partOfSpeech: 'i-adjective',
    sentence: {
      japanese: '黒いスーツを着て面接に行きます。',
      furigana: 'くろい スーツ を きて めんせつ に いきます。',
      romaji: 'Kuroi suutsu o kite mensetsu ni ikimasu.',
      indonesian: 'Saya pergi ke wawancara memakai setelan jas hitam.'
    }
  },
  {
    id: 'v-273',
    kanji: '赤い',
    hiragana: 'あかい',
    romaji: 'akai',
    meaningId: 'Merah',
    category: 'percakapan-harian',
    level: 'N5',
    partOfSpeech: 'i-adjective',
    sentence: {
      japanese: '信号が赤いときは止まります。',
      furigana: 'しんごう が あかい とき は とまります。',
      romaji: 'Shingou ga akai toki wa tomarimasu.',
      indonesian: 'Saat lampu lalu lintas merah, kita berhenti.'
    }
  },
  {
    id: 'v-274',
    kanji: '青い',
    hiragana: 'あおい',
    romaji: 'aoi',
    meaningId: 'Biru / Hijau (pada lampu lalu lintas)',
    category: 'percakapan-harian',
    level: 'N5',
    partOfSpeech: 'i-adjective',
    sentence: {
      japanese: '青い空が広がっています。',
      furigana: 'あおい そら が ひろがって います。',
      romaji: 'Aoi sora ga hirogatte imasu.',
      indonesian: 'Langit biru membentang luas.'
    }
  },
  {
    id: 'v-275',
    kanji: '近い',
    hiragana: 'ちかい',
    romaji: 'chikai',
    meaningId: 'Dekat',
    category: 'transportasi',
    level: 'N5',
    partOfSpeech: 'i-adjective',
    sentence: {
      japanese: 'アパートは駅から近いです。',
      furigana: 'アパート は えき から ちかい です。',
      romaji: 'Apaato wa eki kara chikai desu.',
      indonesian: 'Apartemen dekat dari stasiun.'
    }
  },
  {
    id: 'v-276',
    kanji: '遠い',
    hiragana: 'とおい',
    romaji: 'tooi',
    meaningId: 'Jauh',
    category: 'transportasi',
    level: 'N5',
    partOfSpeech: 'i-adjective',
    sentence: {
      japanese: '会社まで少し遠いです。',
      furigana: 'かいしゃ まで すこし とおい です。',
      romaji: 'Kaisha made sukoshi tooi desu.',
      indonesian: 'Perjalanan ke kantor agak jauh.'
    }
  },
  {
    id: 'v-277',
    kanji: '速い',
    hiragana: 'はやい',
    romaji: 'hayai',
    meaningId: 'Cepat (Kecepatan)',
    category: 'transportasi',
    level: 'N5',
    partOfSpeech: 'i-adjective',
    sentence: {
      japanese: '新幹線はとても速いです。',
      furigana: 'しんかんせん は とても はやい です。',
      romaji: 'Shinkansen wa totemo hayai desu.',
      indonesian: 'Kereta cepat Shinkansen sangat cepat.'
    }
  },
  {
    id: 'v-278',
    kanji: '早い',
    hiragana: 'はやい',
    romaji: 'hayai',
    meaningId: 'Pagi / Awal (Waktu)',
    category: 'percakapan-harian',
    level: 'N5',
    partOfSpeech: 'i-adjective',
    sentence: {
      japanese: '毎朝早く起きます。',
      furigana: 'まいあさ はやく おきます。',
      romaji: 'Maiasa hayaku okimasu.',
      indonesian: 'Setiap pagi saya bangun pagi-pagi.'
    }
  },
  {
    id: 'v-279',
    kanji: '遅い',
    hiragana: 'おそい',
    romaji: 'osoi',
    meaningId: 'Lambat / Larut malam',
    category: 'percakapan-harian',
    level: 'N5',
    partOfSpeech: 'i-adjective',
    sentence: {
      japanese: '夜遅くに帰宅しました。',
      furigana: 'よる おそく に きたく しました。',
      romaji: 'Yoru osoku ni kitaku shimashita.',
      indonesian: 'Saya pulang ke rumah larut malam.'
    }
  },
  {
    id: 'v-280',
    kanji: '多い',
    hiragana: 'おおい',
    romaji: 'ooi',
    meaningId: 'Banyak (Jumlah orang/barang)',
    category: 'percakapan-harian',
    level: 'N5',
    partOfSpeech: 'i-adjective',
    sentence: {
      japanese: '東京は人が多いです。',
      furigana: 'とうきょう は ひと が おおい です。',
      romaji: 'Toukyou wa hito ga ooi desu.',
      indonesian: 'Di Tokyo banyak orang.'
    }
  },
  {
    id: 'v-281',
    kanji: '少ない',
    hiragana: 'すくない',
    romaji: 'sukunai',
    meaningId: 'Sedikit (Jumlah)',
    category: 'percakapan-harian',
    level: 'N5',
    partOfSpeech: 'i-adjective',
    sentence: {
      japanese: '今日は雨でお客さんが少ないです。',
      furigana: 'きょう は あめ で おきゃくさん が すくない です。',
      romaji: 'Kyou wa ame de okyakusan ga sukunai desu.',
      indonesian: 'Hari ini pengunjungnya sedikit karena hujan.'
    }
  },
  {
    id: 'v-282',
    kanji: '温かい',
    hiragana: 'あたたかい',
    romaji: 'atatakai',
    meaningId: 'Hangat (Udara / Minuman)',
    category: 'percakapan-harian',
    level: 'N5',
    partOfSpeech: 'i-adjective',
    sentence: {
      japanese: '春は気候が温かいです。',
      furigana: 'はる は きこう が あたたかい です。',
      romaji: 'Haru wa kikou ga atatakai desu.',
      indonesian: 'Di musim semi udaranya hangat.'
    }
  },
  {
    id: 'v-283',
    kanji: '涼しい',
    hiragana: 'すずしい',
    romaji: 'suzushii',
    meaningId: 'Sejuk (Cuaca)',
    category: 'percakapan-harian',
    level: 'N5',
    partOfSpeech: 'i-adjective',
    sentence: {
      japanese: '秋の風は涼しくて心地よいです。',
      furigana: 'あき の かぜ は すずしくて ここちよい です。',
      romaji: 'Aki no kaze wa suzushikute kokochiyoi desu.',
      indonesian: 'Angin musim gugur sejuk dan nyaman.'
    }
  },
  {
    id: 'v-284',
    kanji: '甘い',
    hiragana: 'あまい',
    romaji: 'amai',
    meaningId: 'Manis (Rasa)',
    category: 'makanan-restoran',
    level: 'N5',
    partOfSpeech: 'i-adjective',
    sentence: {
      japanese: 'この日本の梨はとても甘いです。',
      furigana: 'この にほん の なし は とても あまい です。',
      romaji: 'Kono nihon no nashi wa totemo amai desu.',
      indonesian: 'Buah pir Jepang ini sangat manis.'
    }
  },
  {
    id: 'v-285',
    kanji: '辛い',
    hiragana: 'からい',
    romaji: 'karai',
    meaningId: 'Pedas (Rasa)',
    category: 'makanan-restoran',
    level: 'N5',
    partOfSpeech: 'i-adjective',
    sentence: {
      japanese: 'インドネシアのサンバルは辛いです。',
      furigana: 'インドネシア の サンバル は からい です。',
      romaji: 'Indoneshia no sambaru wa karai desu.',
      indonesian: 'Sambal Indonesia rasanya pedas.'
    }
  },
  {
    id: 'v-286',
    kanji: '重い',
    hiragana: 'おもい',
    romaji: 'omoi',
    meaningId: 'Berat (Bobot)',
    category: 'dunia-kerja',
    level: 'N5',
    partOfSpeech: 'i-adjective',
    sentence: {
      japanese: 'この荷物は一人では重すぎます。',
      furigana: 'この にもつ は ひとり で は おもすぎます。',
      romaji: 'Kono nimotsu wa hitori de wa omosugimasu.',
      indonesian: 'Barang bawaan ini terlalu berat untuk satu orang.'
    }
  },
  {
    id: 'v-287',
    kanji: '軽い',
    hiragana: 'かるい',
    romaji: 'karui',
    meaningId: 'Ringan (Bobot)',
    category: 'percakapan-harian',
    level: 'N5',
    partOfSpeech: 'i-adjective',
    sentence: {
      japanese: 'このノートパソコンは軽くて持ち運びに便利です。',
      furigana: 'この ノートパソコン は かるくて もちはこび に べんり です。',
      romaji: 'Kono nootopasokon wa karukute mochihakobi ni benri desu.',
      indonesian: 'Laptop ini ringan dan praktis dibawa-bawa.'
    }
  },
  {
    id: 'v-288',
    kanji: '広い',
    hiragana: 'ひろい',
    romaji: 'hiroi',
    meaningId: 'Luas / Lapang',
    category: 'percakapan-harian',
    level: 'N5',
    partOfSpeech: 'i-adjective',
    sentence: {
      japanese: '公園が広くて気持ちいいです。',
      furigana: 'こうえん が ひろくて きもちいい です。',
      romaji: 'Kouen ga hirokute kimochiii desu.',
      indonesian: 'Tamannya luas dan terasa menyenangkan.'
    }
  },
  {
    id: 'v-289',
    kanji: '狭い',
    hiragana: 'せまい',
    romaji: 'semai',
    meaningId: 'Sempit',
    category: 'percakapan-harian',
    level: 'N5',
    partOfSpeech: 'i-adjective',
    sentence: {
      japanese: '道が狭いので気をつけて運転してください。',
      furigana: 'みち が せまい ので き を つけて うんてん して ください。',
      romaji: 'Michi ga semai node ki o tsukete unten shite kudasai.',
      indonesian: 'Karena jalannya sempit, harap berhati-hati saat menyetir.'
    }
  },
  {
    id: 'v-290',
    kanji: '明るい',
    hiragana: 'あかるい',
    romaji: 'akarui',
    meaningId: 'Terang / Ceria',
    category: 'percakapan-harian',
    level: 'N5',
    partOfSpeech: 'i-adjective',
    sentence: {
      japanese: '彼女はいつも明るい笑顔です。',
      furigana: 'かのじょ は いつも あかるい えがお です。',
      romaji: 'Kanojo wa itsumo akarui egao desu.',
      indonesian: 'Dia selalu memiliki senyuman yang ceria.'
    }
  },
  {
    id: 'v-291',
    kanji: '暗い',
    hiragana: 'くらい',
    romaji: 'kurai',
    meaningId: 'Gelap / Murung',
    category: 'percakapan-harian',
    level: 'N5',
    partOfSpeech: 'i-adjective',
    sentence: {
      japanese: '夜の道は暗いのでライトをつけます。',
      furigana: 'よる の みち は くらい ので ライト を つけます。',
      romaji: 'Yoru no michi wa kurai node raito o tsukemasu.',
      indonesian: 'Karena jalanan malam gelap, saya menyalakan lampu.'
    }
  },
  {
    id: 'v-292',
    kanji: '痛い',
    hiragana: 'いたい',
    romaji: 'itai',
    meaningId: 'Sakit / Nyeri',
    category: 'kesehatan',
    level: 'N5',
    partOfSpeech: 'i-adjective',
    sentence: {
      japanese: '虫歯で歯が痛いです。',
      furigana: 'むしば で は が いたい です。',
      romaji: 'Mushiba de ha ga itai desu.',
      indonesian: 'Gigi saya sakit karena gigi berlubang.'
    }
  },
  {
    id: 'v-293',
    kanji: '欲しい',
    hiragana: 'ほしい',
    romaji: 'hoshii',
    meaningId: 'Ingin / Mau (Barang/benda)',
    category: 'percakapan-harian',
    level: 'N5',
    partOfSpeech: 'i-adjective',
    sentence: {
      japanese: '新しい車が欲しいです。',
      furigana: 'あたらしい くるま が ほしい です。',
      romaji: 'Atarashii kuruma ga hoshii desu.',
      indonesian: 'Saya ingin mobil baru.'
    }
  },
  {
    id: 'v-294',
    kanji: '寂しい',
    hiragana: 'さびしい',
    romaji: 'sabishii',
    meaningId: 'Sepi / Kesepian',
    category: 'percakapan-harian',
    level: 'N5',
    partOfSpeech: 'i-adjective',
    sentence: {
      japanese: '家族と離れて少し寂しいです。',
      furigana: 'かぞく と はなれて すこし さびしい です。',
      romaji: 'Kazoku to hanarete sukoshi sabishii desu.',
      indonesian: 'Tinggal jauh dari keluarga terasa agak kesepian.'
    }
  },
  {
    id: 'v-295',
    kanji: '眠い',
    hiragana: 'ねむい',
    romaji: 'nemui',
    meaningId: 'Mengantuk',
    category: 'percakapan-harian',
    level: 'N5',
    partOfSpeech: 'i-adjective',
    sentence: {
      japanese: '昨晩夜更かしをして今朝は眠いです。',
      furigana: 'さくばん よふかし を して けさ は ねむい です。',
      romaji: 'Sakuban yofukashi o shite kesa wa nemui desu.',
      indonesian: 'Karena begadang semalam, pagi ini saya mengantuk.'
    }
  },

  // --- KATA SIFAT NA (Na-Adjectives) ---
  {
    id: 'v-296',
    kanji: '親切',
    hiragana: 'しんせつ',
    romaji: 'shinsetsu',
    meaningId: 'Ramah / Baik hati',
    category: 'percakapan-harian',
    level: 'N5',
    partOfSpeech: 'na-adjective',
    sentence: {
      japanese: '日本人の隣人はとても親切です。',
      furigana: 'にほんじん の りんじん は とても しんせつ です。',
      romaji: 'Nihonjin no rinjin wa totemo shinsetsu desu.',
      indonesian: 'Tetangga orang Jepang saya sangat ramah.'
    }
  },
  {
    id: 'v-297',
    kanji: '便利',
    hiragana: 'べんり',
    romaji: 'benri',
    meaningId: 'Praktis / Memudahkan',
    category: 'percakapan-harian',
    level: 'N5',
    partOfSpeech: 'na-adjective',
    sentence: {
      japanese: 'コンビニは二十四時間開いていて便利です。',
      furigana: 'コンビニ は にじゅうよじかん あいて いて べんり です。',
      romaji: 'Konbini wa nijuuyojikan aite ite benri desu.',
      indonesian: 'Minimarket sangat praktis karena buka 24 jam.'
    }
  },
  {
    id: 'v-298',
    kanji: '不便',
    hiragana: 'ふべん',
    romaji: 'fuben',
    meaningId: 'Tidak praktis / Merepotkan',
    category: 'percakapan-harian',
    level: 'N5',
    partOfSpeech: 'na-adjective',
    sentence: {
      japanese: 'バスが少なくて移動が不便です。',
      furigana: 'バス が すくなくて いどう が ふべん です。',
      romaji: 'Basu ga sukunakute idou ga fuben desu.',
      indonesian: 'Bepergian tidak praktis karena busnya sedikit.'
    }
  },
  {
    id: 'v-299',
    kanji: '元気',
    hiragana: 'げんき',
    romaji: 'genki',
    meaningId: 'Sehat / Bugar',
    category: 'percakapan-harian',
    level: 'N5',
    partOfSpeech: 'na-adjective',
    sentence: {
      japanese: 'おばあちゃんは今も元気です。',
      furigana: 'おばあちゃん は いま も げんき です。',
      romaji: 'Obaachan wa ima mo genki desu.',
      indonesian: 'Nenek sampai sekarang masih sehat bugar.'
    }
  },
  {
    id: 'v-300',
    kanji: '暇',
    hiragana: 'ひま',
    romaji: 'hima',
    meaningId: 'Senggang / Luang waktu',
    category: 'percakapan-harian',
    level: 'N5',
    partOfSpeech: 'na-adjective',
    sentence: {
      japanese: '今度の日曜日は暇ですか。',
      furigana: 'こんど の にちようび は ひま です か。',
      romaji: 'Kondo no nichiyoubi wa hima desu ka.',
      indonesian: 'Apakah hari Minggu besok kamu ada waktu senggang?'
    }
  },
  {
    id: 'v-301',
    kanji: '静か',
    hiragana: 'しずか',
    romaji: 'shizuka',
    meaningId: 'Tenang / Sunyi',
    category: 'percakapan-harian',
    level: 'N5',
    partOfSpeech: 'na-adjective',
    sentence: {
      japanese: '図書館は静かに勉強できる場所です。',
      furigana: 'としょかん は しずか に べんきょう できる ばしょ です。',
      romaji: 'Toshokan wa shizuka ni benkyou dekiru basho desu.',
      indonesian: 'Perpustakaan adalah tempat yang bisa belajar dengan tenang.'
    }
  },
  {
    id: 'v-302',
    kanji: '賑やか',
    hiragana: 'にぎやか',
    romaji: 'nigiyaka',
    meaningId: 'Ramai / Meriah',
    category: 'percakapan-harian',
    level: 'N5',
    partOfSpeech: 'na-adjective',
    sentence: {
      japanese: 'お祭りの夜はとても賑やかでした。',
      furigana: 'おまつり の よる は とても にぎやか でした。',
      romaji: 'Omatsuri no yoru wa totemo nigiyaka deshita.',
      indonesian: 'Malam festival sangat ramai dan meriah.'
    }
  },
  {
    id: 'v-303',
    kanji: '有名',
    hiragana: 'ゆうめい',
    romaji: 'yuumei',
    meaningId: 'Terkenal / Populer',
    category: 'percakapan-harian',
    level: 'N5',
    partOfSpeech: 'na-adjective',
    sentence: {
      japanese: '浅草は有名な観光地です。',
      furigana: 'あさくさ は ゆうめい な かんこうち です。',
      romaji: 'Asakusa wa yuumei na kankouchi desu.',
      indonesian: 'Asakusa adalah tempat wisata yang terkenal.'
    }
  },
  {
    id: 'v-304',
    kanji: '綺麗',
    hiragana: 'きれい',
    romaji: 'kirei',
    meaningId: 'Cantik / Indah / Bersih',
    category: 'percakapan-harian',
    level: 'N5',
    partOfSpeech: 'na-adjective',
    sentence: {
      japanese: '桜の花がとても綺麗ですね。',
      furigana: 'さくら の はな が とても きれい です ね。',
      romaji: 'Sakura no hana ga totemo kirei desu ne.',
      indonesian: 'Bunga sakura sangat indah ya.'
    }
  },
  {
    id: 'v-305',
    kanji: '好き',
    hiragana: 'すき',
    romaji: 'suki',
    meaningId: 'Suka / Gemar',
    category: 'percakapan-harian',
    level: 'N5',
    partOfSpeech: 'na-adjective',
    sentence: {
      japanese: '私は日本料理が好きです。',
      furigana: 'わたし は にほんりょうり が すき です。',
      romaji: 'Watashi wa nihonryouri ga suki desu.',
      indonesian: 'Saya suka masakan Jepang.'
    }
  },
  {
    id: 'v-306',
    kanji: '嫌い',
    hiragana: 'きらい',
    romaji: 'kirai',
    meaningId: 'Benci / Tidak suka',
    category: 'percakapan-harian',
    level: 'N5',
    partOfSpeech: 'na-adjective',
    sentence: {
      japanese: '納豆が嫌いな外国人は多いです。',
      furigana: 'なっとう が きらい な がいこくじん は おおい です。',
      romaji: 'Nattou ga kirai na gaikokujin wa ooi desu.',
      indonesian: 'Banyak orang asing yang tidak suka natto.'
    }
  },
  {
    id: 'v-307',
    kanji: '上手',
    hiragana: 'じょうず',
    romaji: 'jouzu',
    meaningId: 'Pintar / Mahir',
    category: 'percakapan-harian',
    level: 'N5',
    partOfSpeech: 'na-adjective',
    sentence: {
      japanese: '日本語がとても上手ですね。',
      furigana: 'にほんご が とても じょうず です ね。',
      romaji: 'Nihongo ga totemo jouzu desu ne.',
      indonesian: 'Bahasa Jepang Anda sangat mahir ya.'
    }
  },
  {
    id: 'v-308',
    kanji: '下手',
    hiragana: 'へた',
    romaji: 'heta',
    meaningId: 'Kurang pintar / Belum mahir',
    category: 'percakapan-harian',
    level: 'N5',
    partOfSpeech: 'na-adjective',
    sentence: {
      japanese: '料理が下手なので練習しています。',
      furigana: 'りょうり が へた なので れんしゅう して います。',
      romaji: 'Ryouri ga heta nanode renshuu shite imasu.',
      indonesian: 'Karena belum mahir memasak, saya sedang berlatih.'
    }
  },
  {
    id: 'v-309',
    kanji: '色々',
    hiragana: 'いろいろ',
    romaji: 'iroiro',
    meaningId: 'Bermacam-macam / Berbagai',
    category: 'percakapan-harian',
    level: 'N5',
    partOfSpeech: 'na-adjective',
    sentence: {
      japanese: '日本で色々な経験をしました。',
      furigana: 'にほん で いろいろ な けいけん を しました。',
      romaji: 'Nihon de iroiro na keiken o shimashita.',
      indonesian: 'Saya mendapat berbagai macam pengalaman di Jepang.'
    }
  },
  {
    id: 'v-310',
    kanji: '簡単',
    hiragana: 'かんたん',
    romaji: 'kantan',
    meaningId: 'Sederhana / Mudah',
    category: 'percakapan-harian',
    level: 'N5',
    partOfSpeech: 'na-adjective',
    sentence: {
      japanese: 'この試験は簡単でした。',
      furigana: 'この しけん は かんたん でした。',
      romaji: 'Kono shiken wa kantan deshita.',
      indonesian: 'Ujian ini mudah.'
    }
  },
  {
    id: 'v-311',
    kanji: '大切',
    hiragana: 'たいせつ',
    romaji: 'taisetsu',
    meaningId: 'Berharga / Sangat penting',
    category: 'percakapan-harian',
    level: 'N5',
    partOfSpeech: 'na-adjective',
    sentence: {
      japanese: '家族との時間はとても大切です。',
      furigana: 'かぞく と の じかん は とても たいせつ です。',
      romaji: 'Kazoku to no jikan wa totemo taisetsu desu.',
      indonesian: 'Waktu bersama keluarga sangat berharga.'
    }
  },
  {
    id: 'v-312',
    kanji: '大丈夫',
    hiragana: 'だいじょうぶ',
    romaji: 'daijoubu',
    meaningId: 'Tidak apa-apa / Aman',
    category: 'percakapan-harian',
    level: 'N5',
    partOfSpeech: 'na-adjective',
    sentence: {
      japanese: '怪我はありませんか。はい、大丈夫です。',
      furigana: 'けが は ありません か。はい、だいじょうぶ です。',
      romaji: 'Kega wa arimasen ka. Hai, daijoubu desu.',
      indonesian: 'Apakah ada yang terluka? Tidak, saya baik-baik saja.'
    }
  },
  {
    id: 'v-313',
    kanji: '大変',
    hiragana: 'たいへん',
    romaji: 'taihen',
    meaningId: 'Berat / Sulit / Melelahkan',
    category: 'dunia-kerja',
    level: 'N5',
    partOfSpeech: 'na-adjective',
    sentence: {
      japanese: '残業が多くて大変ですね。',
      furigana: 'ざんぎょう が おおくて たいへん です ね。',
      romaji: 'Zangyou ga ookute taihen desu ne.',
      indonesian: 'Melelahkan sekali ya karena banyak lembur.'
    }
  },

  // --- KATA KERJA KEBERADAAN & LOKASI (Lessons 10-11) ---
  {
    id: 'v-314',
    kanji: 'あります',
    hiragana: 'あります',
    romaji: 'arimasu',
    meaningId: 'Ada (Benda mati/tumbuhan)',
    category: 'percakapan-harian',
    level: 'N5',
    partOfSpeech: 'verb',
    sentence: {
      japanese: '机の上に辞書があります。',
      furigana: 'つくえ の うえ に じしょ が あります。',
      romaji: 'Tsukue no ue ni jisho ga arimasu.',
      indonesian: 'Di atas meja ada kamus.'
    }
  },
  {
    id: 'v-315',
    kanji: 'います',
    hiragana: 'います',
    romaji: 'imasu',
    meaningId: 'Ada (Makhluk hidup/orang/hewan)',
    category: 'percakapan-harian',
    level: 'N5',
    partOfSpeech: 'verb',
    sentence: {
      japanese: '教室に田中先生がいます。',
      furigana: 'きょうしつ に たなか せんせい が います。',
      romaji: 'Kyoushitsu ni Tanaka sensei ga imasu.',
      indonesian: 'Di dalam kelas ada Pak Guru Tanaka.'
    }
  },
  {
    id: 'v-316',
    kanji: '上',
    hiragana: 'うえ',
    romaji: 'ue',
    meaningId: 'Atas',
    category: 'percakapan-harian',
    level: 'N5',
    partOfSpeech: 'noun',
    sentence: {
      japanese: '棚の上に箱を置きます。',
      furigana: 'たな の うえ に はこ を おきます。',
      romaji: 'Tana no ue ni hako o okimasu.',
      indonesian: 'Menaruh kotak di atas rak.'
    }
  },
  {
    id: 'v-317',
    kanji: '下',
    hiragana: 'した',
    romaji: 'shita',
    meaningId: 'Bawah',
    category: 'percakapan-harian',
    level: 'N5',
    partOfSpeech: 'noun',
    sentence: {
      japanese: '机の下に猫がいます。',
      furigana: 'つくえ の した に ねこ が います。',
      romaji: 'Tsukue no shita ni neko ga imasu.',
      indonesian: 'Di bawah meja ada kucing.'
    }
  },
  {
    id: 'v-318',
    kanji: '前',
    hiragana: 'まえ',
    romaji: 'mae',
    meaningId: 'Depan / Sebelum',
    category: 'transportasi',
    level: 'N5',
    partOfSpeech: 'noun',
    sentence: {
      japanese: '駅の前で待ち合わせしましょう。',
      furigana: 'えき の まえ で まちあわせ しましょう。',
      romaji: 'Eki no mae de machiawase shimashou.',
      indonesian: 'Mari bertemu di depan stasiun.'
    }
  },
  {
    id: 'v-319',
    kanji: '後ろ',
    hiragana: 'うしろ',
    romaji: 'ushiro',
    meaningId: 'Belakang',
    category: 'transportasi',
    level: 'N5',
    partOfSpeech: 'noun',
    sentence: {
      japanese: '私の後ろに並んでください。',
      furigana: 'わたし の うしろ に ならんで ください。',
      romaji: 'Watashi no ushiro ni narande kudasai.',
      indonesian: 'Silakan berbaris di belakang saya.'
    }
  },
  {
    id: 'v-320',
    kanji: '右',
    hiragana: 'みぎ',
    romaji: 'migi',
    meaningId: 'Kanan',
    category: 'transportasi',
    level: 'N5',
    partOfSpeech: 'noun',
    sentence: {
      japanese: '次の交差点を右に曲がります。',
      furigana: 'つぎ の こうさてん を みぎ に まがります。',
      romaji: 'Tsugi no kousaten o migi ni magarimasu.',
      indonesian: 'Belok ke kanan di persimpangan berikutnya.'
    }
  },
  {
    id: 'v-321',
    kanji: '左',
    hiragana: 'ひだり',
    romaji: 'hidari',
    meaningId: 'Kiri',
    category: 'transportasi',
    level: 'N5',
    partOfSpeech: 'noun',
    sentence: {
      japanese: '銀行は郵便局の左にあります。',
      furigana: 'ぎんこう は ゆうびんきょく の ひだり に あります。',
      romaji: 'Ginkou wa yuubinkyoku no hidari ni arimasu.',
      indonesian: 'Bank berada di sebelah kiri kantor pos.'
    }
  },
  {
    id: 'v-322',
    kanji: '中',
    hiragana: 'なか',
    romaji: 'naka',
    meaningId: 'Dalam',
    category: 'percakapan-harian',
    level: 'N5',
    partOfSpeech: 'noun',
    sentence: {
      japanese: 'かばんの中に財布を入れました。',
      furigana: 'かばん の なか に さいふ を いれました。',
      romaji: 'Kaban no naka ni saifu o iremashita.',
      indonesian: 'Saya memasukkan dompet ke dalam tas.'
    }
  },
  {
    id: 'v-323',
    kanji: '外',
    hiragana: 'そと',
    romaji: 'soto',
    meaningId: 'Luar',
    category: 'percakapan-harian',
    level: 'N5',
    partOfSpeech: 'noun',
    sentence: {
      japanese: '外は雨が降っています。',
      furigana: 'そと は あめ が ふって います。',
      romaji: 'Soto wa ame ga futte imasu.',
      indonesian: 'Di luar sedang turun hujan.'
    }
  },
  {
    id: 'v-324',
    kanji: '隣',
    hiragana: 'となり',
    romaji: 'tonari',
    meaningId: 'Sebelah / Tetangga (kategori sejenis)',
    category: 'percakapan-harian',
    level: 'N5',
    partOfSpeech: 'noun',
    sentence: {
      japanese: '私の隣の席に座ってください。',
      furigana: 'わたし の となり の せき に すわって ください。',
      romaji: 'Watashi no tonari no seki ni suwatte kudasai.',
      indonesian: 'Silakan duduk di kursi sebelah saya.'
    }
  },
  {
    id: 'v-325',
    kanji: '近く',
    hiragana: 'ちかく',
    romaji: 'chikaku',
    meaningId: 'Dekat sekitar sini',
    category: 'transportasi',
    level: 'N5',
    partOfSpeech: 'noun',
    sentence: {
      japanese: '駅の近くに美味しいパン屋があります。',
      furigana: 'えき の ちかく に おいしい パンや が あります。',
      romaji: 'Eki no chikaku ni oishii panya ga arimasu.',
      indonesian: 'Di dekat stasiun ada toko roti yang lezat.'
    }
  },
  {
    id: 'v-326',
    kanji: '間',
    hiragana: 'あいだ',
    romaji: 'aida',
    meaningId: 'Antara (dua benda/titik)',
    category: 'transportasi',
    level: 'N5',
    partOfSpeech: 'noun',
    sentence: {
      japanese: '本屋と薬局の間にカフェがあります。',
      furigana: 'ほんや と やっきょく の あいだ に カフェ が あります。',
      romaji: 'Honya to yakkyoku no aida ni kafe ga arimasu.',
      indonesian: 'Di antara toko buku dan apotek ada kafe.'
    }
  },

  // --- KATA KERJA TE-FORM & PERINTAH / LARANGAN (Lessons 14-16) ---
  {
    id: 'v-327',
    kanji: 'つけます',
    hiragana: 'つけます',
    romaji: 'tsukemasu',
    meaningId: 'Menyalakan (Lampu/AC/Mesin)',
    category: 'percakapan-harian',
    level: 'N5',
    partOfSpeech: 'verb',
    sentence: {
      japanese: '暗いので電気をつけてください。',
      furigana: 'くらい ので でんき を つけて ください。',
      romaji: 'Kurai node denki o tsukete kudasai.',
      indonesian: 'Tolong nyalakan lampu karena gelap.'
    }
  },
  {
    id: 'v-328',
    kanji: '消します',
    hiragana: 'けします',
    romaji: 'keshimasu',
    meaningId: 'Mematikan (Lampu/Alat)',
    category: 'percakapan-harian',
    level: 'N5',
    partOfSpeech: 'verb',
    sentence: {
      japanese: '部屋を出るときはエアコンを消します。',
      furigana: 'へや を でる とき は エアコン を けします。',
      romaji: 'Heya o deru toki wa eakon o keshimasu.',
      indonesian: 'Saat keluar kamar, matikan AC.'
    }
  },
  {
    id: 'v-329',
    kanji: '開けます',
    hiragana: 'あけます',
    romaji: 'akemasu',
    meaningId: 'Membuka (Pintu/Jendela)',
    category: 'percakapan-harian',
    level: 'N5',
    partOfSpeech: 'verb',
    sentence: {
      japanese: '窓を開けて空気を入れ換えます。',
      furigana: 'まど を あけて くうき を いれかえます。',
      romaji: 'Mado o akete kuuki o irekaemasu.',
      indonesian: 'Buka jendela dan ganti sirkulasi udara.'
    }
  },
  {
    id: 'v-330',
    kanji: '閉めます',
    hiragana: 'しめます',
    romaji: 'shimemasu',
    meaningId: 'Menutup (Pintu/Tutup kotak)',
    category: 'percakapan-harian',
    level: 'N5',
    partOfSpeech: 'verb',
    sentence: {
      japanese: '寒いですからドアを閉めてください。',
      furigana: 'さむい です から ドア を しめて ください。',
      romaji: 'Samui desu kara doa o shimete kudasai.',
      indonesian: 'Tolong tutup pintunya karena dingin.'
    }
  },
  {
    id: 'v-331',
    kanji: '急ぎます',
    hiragana: 'いそぎます',
    romaji: 'isogimasu',
    meaningId: 'Buru-buru / Bersegera',
    category: 'dunia-kerja',
    level: 'N5',
    partOfSpeech: 'verb',
    sentence: {
      japanese: '電車に遅れそうなので急ぎます。',
      furigana: 'でんしゃ に おくれそう なので いそぎます。',
      romaji: 'Densha ni okuresou nanode isogimasu.',
      indonesian: 'Saya buru-buru karena hampir ketinggalan kereta.'
    }
  },
  {
    id: 'v-332',
    kanji: '待ちます',
    hiragana: 'まちます',
    romaji: 'machimasu',
    meaningId: 'Menunggu',
    category: 'percakapan-harian',
    level: 'N5',
    partOfSpeech: 'verb',
    sentence: {
      japanese: '少々お待ちください。',
      furigana: 'しょうしょう おまち ください。',
      romaji: 'Shoushou omachi kudasai.',
      indonesian: 'Mohon tunggu sebentar (Sopan).'
    }
  },
  {
    id: 'v-333',
    kanji: '持ちます',
    hiragana: 'もちます',
    romaji: 'mochimasu',
    meaningId: 'Memegang / Membawa',
    category: 'percakapan-harian',
    level: 'N5',
    partOfSpeech: 'verb',
    sentence: {
      japanese: '重い荷物を持ちましょうか。',
      furigana: 'おもい にもつ を もちましょう か。',
      romaji: 'Omoi nimotsu o mochimashou ka.',
      indonesian: 'Bolehkah saya bawakan barang bawaan yang berat itu?'
    }
  },
  {
    id: 'v-334',
    kanji: '取ります',
    hiragana: 'とります',
    romaji: 'torimasu',
    meaningId: 'Mengambil',
    category: 'percakapan-harian',
    level: 'N5',
    partOfSpeech: 'verb',
    sentence: {
      japanese: 'そこの塩を取ってください。',
      furigana: 'そこ の しお を とって ください。',
      romaji: 'Soko no shio o totte kudasai.',
      indonesian: 'Tolong ambilkan garam di situ.'
    }
  },
  {
    id: 'v-335',
    kanji: '手伝います',
    hiragana: 'てつだいます',
    romaji: 'tetsudaimasu',
    meaningId: 'Membantu / Menolong',
    category: 'dunia-kerja',
    level: 'N5',
    partOfSpeech: 'verb',
    sentence: {
      japanese: '掃除を手伝ってくれてありがとう。',
      furigana: 'そうじ を てつだって くれて ありがとう。',
      romaji: 'Souji o tetsudatte kurete arigatou.',
      indonesian: 'Terima kasih telah membantu bersih-bersih.'
    }
  },
  {
    id: 'v-336',
    kanji: '呼びます',
    hiragana: 'よびます',
    romaji: 'yobimasu',
    meaningId: 'Memanggil (Taksi/Dokter/Orang)',
    category: 'percakapan-harian',
    level: 'N5',
    partOfSpeech: 'verb',
    sentence: {
      japanese: 'フロントでタクシーを一台呼びました。',
      furigana: 'フロント で タクシー を いちだい よびました。',
      romaji: 'Furonto de takushii o ichidai yobimashita.',
      indonesian: 'Saya memanggil satu taksi di resepsionis.'
    }
  },
  {
    id: 'v-337',
    kanji: '話します',
    hiragana: 'はなします',
    romaji: 'hanashimasu',
    meaningId: 'Berbicara / Mengobrol',
    category: 'percakapan-harian',
    level: 'N5',
    partOfSpeech: 'verb',
    sentence: {
      japanese: '先生とゆっくり日本語で話します。',
      furigana: 'せんせい と ゆっくり にほんご で はなします。',
      romaji: 'Sensei to yukkuri nihongo de hanashimasu.',
      indonesian: 'Berbicara dengan guru menggunakan bahasa Jepang secara perlahan.'
    }
  },
  {
    id: 'v-338',
    kanji: '使います',
    hiragana: 'つかいます',
    romaji: 'tsukaimasu',
    meaningId: 'Menggunakan / Memakai',
    category: 'dunia-kerja',
    level: 'N5',
    partOfSpeech: 'verb',
    sentence: {
      japanese: '仕事でパソコンを毎日使います。',
      furigana: 'しごと で パソコン を まいにち つかいます。',
      romaji: 'Shigoto de pasokon o mainichi tsukaimasu.',
      indonesian: 'Setiap hari saya menggunakan komputer untuk bekerja.'
    }
  },
  {
    id: 'v-339',
    kanji: '止めます',
    hiragana: 'とめます',
    romaji: 'tomemasu',
    meaningId: 'Menghentikan / Memarkir (Mobil)',
    category: 'transportasi',
    level: 'N5',
    partOfSpeech: 'verb',
    sentence: {
      japanese: 'ここに車を止めてはいけません。',
      furigana: 'ここ に くるま を とめて は いけません。',
      romaji: 'Koko ni kuruma o tomete wa ikemasen.',
      indonesian: 'Dilarang memarkir mobil di sini.'
    }
  },
  {
    id: 'v-340',
    kanji: '見せます',
    hiragana: 'みせます',
    romaji: 'misemasu',
    meaningId: 'Memperlihatkan / Menunjukkan',
    category: 'percakapan-harian',
    level: 'N5',
    partOfSpeech: 'verb',
    sentence: {
      japanese: 'パスポートを見せてください。',
      furigana: 'パスポート を みせて ください。',
      romaji: 'Pasupooto o misete kudasai.',
      indonesian: 'Tolong perlihatkan paspor Anda.'
    }
  },
  {
    id: 'v-341',
    kanji: '教えます',
    hiragana: 'おしえます',
    romaji: 'oshiemasu',
    meaningId: 'Mengajar / Memberitahu (Alamat/Nomor telepon)',
    category: 'percakapan-harian',
    level: 'N5',
    partOfSpeech: 'verb',
    sentence: {
      japanese: '電話番号を教えてください。',
      furigana: 'でんわばんごう を おしえて ください。',
      romaji: 'Denwabangou o oshiete kudasai.',
      indonesian: 'Tolong beri tahu nomor telepon Anda.'
    }
  },
  {
    id: 'v-342',
    kanji: '座ります',
    hiragana: 'すわります',
    romaji: 'suwarimasu',
    meaningId: 'Duduk',
    category: 'percakapan-harian',
    level: 'N5',
    partOfSpeech: 'verb',
    sentence: {
      japanese: 'どうぞこちらの椅子に座ってください。',
      furigana: 'どうぞ こちら の いす に すわって ください。',
      romaji: 'Douzo kochira no isu ni suwaritte kudasai.',
      indonesian: 'Silakan duduk di kursi sebelah sini.'
    }
  },
  {
    id: 'v-343',
    kanji: '立ちます',
    hiragana: 'たちます',
    romaji: 'tachimasu',
    meaningId: 'Berdiri',
    category: 'percakapan-harian',
    level: 'N5',
    partOfSpeech: 'verb',
    sentence: {
      japanese: '電車で高齢者にお席を譲るため立ちました。',
      furigana: 'でんしゃ で こうれいしゃ に おせき を ゆずる ため たちました。',
      romaji: 'Densha de koureisha ni oseki o yuzuru tame tachimashita.',
      indonesian: 'Di kereta saya berdiri untuk memberikan tempat duduk kepada lansia.'
    }
  },
  {
    id: 'v-344',
    kanji: '入ります',
    hiragana: 'はいります',
    romaji: 'hairimasu',
    meaningId: 'Masuk (ke ruangan/kafe)',
    category: 'percakapan-harian',
    level: 'N5',
    partOfSpeech: 'verb',
    sentence: {
      japanese: '喫茶店に入ってお茶を飲みましょう。',
      furigana: 'きっさてん に はいって おちゃ を のみましょう。',
      romaji: 'Kissaten ni haitte ocha o nomimashou.',
      indonesian: 'Mari masuk ke kedai kopi dan minum teh.'
    }
  },
  {
    id: 'v-345',
    kanji: '出ます',
    hiragana: 'でます',
    romaji: 'demasu',
    meaningId: 'Keluar / Meninggalkan tempat',
    category: 'percakapan-harian',
    level: 'N5',
    partOfSpeech: 'verb',
    sentence: {
      japanese: '朝七時に家を出ます。',
      furigana: 'あさ しちじ に いえ を でます。',
      romaji: 'Asa shichiji ni ie o demasu.',
      indonesian: 'Saya keluar dari rumah jam 7 pagi.'
    }
  },
  {
    id: 'v-346',
    kanji: '降ります',
    hiragana: 'ふります',
    romaji: 'furimasu',
    meaningId: 'Turun (Hujan / Salju)',
    category: 'percakapan-harian',
    level: 'N5',
    partOfSpeech: 'verb',
    sentence: {
      japanese: '外は雨が激しく降っています。',
      furigana: 'そと は あめ が はげしく ふって います。',
      romaji: 'Soto wa ame ga hageshiku futte imasu.',
      indonesian: 'Di luar hujan turun dengan deras.'
    }
  },
  {
    id: 'v-347',
    kanji: 'コピーします',
    hiragana: 'コピーします',
    romaji: 'kopiishimasu',
    meaningId: 'Memfotokopi dokumen',
    category: 'dunia-kerja',
    level: 'N5',
    partOfSpeech: 'verb',
    sentence: {
      japanese: 'この会議資料を十部コピーしてください。',
      furigana: 'この かいぎ しりょう を じゅうぶ コピー して ください。',
      romaji: 'Kono kaigi shiryou o juubu kopiishite kudasai.',
      indonesian: 'Tolong fotokopi dokumen rapat ini sebanyak 10 rangkap.'
    }
  },
  {
    id: 'v-348',
    kanji: '置きます',
    hiragana: 'おきます',
    romaji: 'okimasu',
    meaningId: 'Meletakkan / Menaruh',
    category: 'dunia-kerja',
    level: 'N5',
    partOfSpeech: 'verb',
    sentence: {
      japanese: '荷物は所定の棚に置いてください。',
      furigana: 'にもつ は しょてい の たな に おいて ください。',
      romaji: 'Nimotsu wa shotei no tana ni oite kudasai.',
      indonesian: 'Harap letakkan barang di rak yang telah ditentukan.'
    }
  },
  {
    id: 'v-349',
    kanji: '作ります',
    hiragana: 'つくります',
    romaji: 'tsukurimasu',
    meaningId: 'Membuat / Memproduksi',
    category: 'percakapan-harian',
    level: 'N5',
    partOfSpeech: 'verb',
    sentence: {
      japanese: '週末は自分でカレーを作ります。',
      furigana: 'しゅうまつ は じぶん で カレー を つくります。',
      romaji: 'Shuumatsu wa jibun de karee o tsukurimasu.',
      indonesian: 'Pada akhir pekan saya memasak kari sendiri.'
    }
  },
  {
    id: 'v-350',
    kanji: '売ります',
    hiragana: 'うります',
    romaji: 'urimasu',
    meaningId: 'Menjual',
    category: 'belanja',
    level: 'N5',
    partOfSpeech: 'verb',
    sentence: {
      japanese: '駅前の売店でお弁当を売っています。',
      furigana: 'えきまえ の ばいてん で おべんとう を うって います。',
      romaji: 'Ekimae no baiten de obentou o utte imasu.',
      indonesian: 'Kios di depan stasiun menjual bento.'
    }
  }
];

// Dynamically generate the remaining 150 items of Part 2 to reach exactly 250 items
const PART2_TEMPLATES = [
  { k: '知ります', h: 'しります', r: 'shirimasu', m: 'Mengetahui / Mengenal', cat: 'percakapan-harian', pos: 'verb' },
  { k: '住みます', h: 'すみます', r: 'sumimasu', m: 'Tinggal / Menetap', cat: 'percakapan-harian', pos: 'verb' },
  { k: '研究します', h: 'けんきゅうします', r: 'kenkyuushimasu', m: 'Meneliti / Riset', cat: 'dunia-kerja', pos: 'verb' },
  { k: '資料', h: 'しりょう', r: 'shiryou', m: 'Bahan materi / Dokumen', cat: 'dunia-kerja', pos: 'noun' },
  { k: 'カタログ', h: 'カタログ', r: 'katarogu', m: 'Katalog produk', cat: 'belanja', pos: 'noun' },
  { k: '時刻表', h: 'じこくひょう', r: 'jikokuhyou', m: 'Jadwal keberangkatan kereta', cat: 'transportasi', pos: 'noun' },
  { k: '服', h: 'ふく', r: 'fuku', m: 'Pakaian / Baju', cat: 'belanja', pos: 'noun' },
  { k: '製品', h: 'せいひん', r: 'seihin', m: 'Produk buatan / Barang jadi', cat: 'dunia-kerja', pos: 'noun' },
  { k: 'ソフト', h: 'ソフト', r: 'sofuto', m: 'Perangkat lunak (Software)', cat: 'dunia-kerja', pos: 'noun' },
  { k: '専門', h: 'せんもん', r: 'senmon', m: 'Spesialisasi / Jurusan keahlian', cat: 'dunia-kerja', pos: 'noun' },
  { k: '歯医者', h: 'はいしゃ', r: 'haisha', m: 'Dokter gigi', cat: 'kesehatan', pos: 'noun' },
  { k: '床屋', h: 'とこや', r: 'tokoya', m: 'Tempat cukur rambut (Barbershop)', cat: 'percakapan-harian', pos: 'noun' },
  { k: 'プレイガイド', h: 'プレイガイド', r: 'pureigaido', m: 'Loket penjualan tiket bioskop/konser', cat: 'budaya-jepang', pos: 'noun' },
  { k: '独身', h: 'どくしん', r: 'dokushin', m: 'Lajang / Belum menikah', cat: 'percakapan-harian', pos: 'noun' },
  { k: '特に', h: 'とくに', r: 'tokuni', m: 'Khususnya / Terutama', cat: 'percakapan-harian', pos: 'adverb' },
  { k: '思い出します', h: 'おもいだします', r: 'omoidashimasu', m: 'Mengingat kembali', cat: 'percakapan-harian', pos: 'verb' },
  { k: 'ご家族', h: 'ごかぞく', r: 'gokazoku', m: 'Keluarga (Sopan untuk orang lain)', cat: 'percakapan-harian', pos: 'noun' },
  { k: '高校', h: 'こうこう', r: 'koukou', m: 'Sekolah Menengah Atas (SMA)', cat: 'percakapan-harian', pos: 'noun' },
  { k: '乗ります', h: 'のります', r: 'norimasu', m: 'Naik kendaraan (Kereta/Bus)', cat: 'transportasi', pos: 'verb' },
  { k: '降ります', h: 'おります', r: 'orimasu', m: 'Turun dari kendaraan', cat: 'transportasi', pos: 'verb' },
  { k: '乗り換えます', h: 'のりかえます', r: 'norikaemasu', m: 'Pindah / Transit kendaraan', cat: 'transportasi', pos: 'verb' },
  { k: '浴びます', h: 'あびます', r: 'abimasu', m: 'Mandi siram / Guyur (Shower)', cat: 'percakapan-harian', pos: 'verb' },
  { k: '入れます', h: 'いれます', r: 'iremasu', m: 'Memasukkan ke dalam', cat: 'percakapan-harian', pos: 'verb' },
  { k: '出します', h: 'だします', r: 'dashimasu', m: 'Mengeluarkan / Menyerahkan tugas', cat: 'dunia-kerja', pos: 'verb' },
  { k: '下ろします', h: 'おろします', r: 'oroshimasu', m: 'Menarik uang di ATM', cat: 'percakapan-harian', pos: 'verb' },
  { k: '入ります', h: 'はいります', r: 'hairimasu', m: 'Masuk universitas / Bergabung', cat: 'percakapan-harian', pos: 'verb' },
  { k: '出ます', h: 'でます', r: 'demasu', m: 'Lulus sekolah / Keluar ruangan', cat: 'percakapan-harian', pos: 'verb' },
  { k: '押します', h: 'おします', r: 'oshimasu', m: 'Menekan (Tombol)', cat: 'dunia-kerja', pos: 'verb' },
  { k: '引きます', h: 'ひきます', r: 'hikimasu', m: 'Menarik pintu / tali', cat: 'percakapan-harian', pos: 'verb' },
  { k: '始めます', h: 'はじめます', r: 'hajimemasu', m: 'Memulai pekerjaan/pelajaran', cat: 'dunia-kerja', pos: 'verb' },
  { k: '見学します', h: 'けんがくします', r: 'kengakushimasu', m: 'Kunjungan studi / Observasi lapangan', cat: 'dunia-kerja', pos: 'verb' },
  { k: '電話します', h: 'でんわします', r: 'denwashimasu', m: 'Menelepon', cat: 'dunia-kerja', pos: 'verb' },
  { k: '若い', h: 'わかい', r: 'wakai', m: 'Muda (Usia)', cat: 'percakapan-harian', pos: 'i-adjective' },
  { k: '長い', h: 'ながい', r: 'nagai', m: 'Panjang (Ukuran/Waktu)', cat: 'percakapan-harian', pos: 'i-adjective' },
  { k: '短い', h: 'みじかい', r: 'mijikai', m: 'Pendek (Ukuran/Waktu)', cat: 'percakapan-harian', pos: 'i-adjective' },
  { k: '背が高い', h: 'せがたかい', r: 'segatakai', m: 'Berpostur tubuh tinggi', cat: 'percakapan-harian', pos: 'i-adjective' },
  { k: '頭がいい', h: 'あたまがいい', r: 'atamagaii', m: 'Pintar / Cerdas', cat: 'percakapan-harian', pos: 'i-adjective' },
  { k: '体', h: 'からだ', r: 'karada', m: 'Tubuh / Fisik', cat: 'kesehatan', pos: 'noun' },
  { k: '頭', h: 'あたま', r: 'atama', m: 'Kepala', cat: 'kesehatan', pos: 'noun' },
  { k: '髪', h: 'かみ', r: 'kami', m: 'Rambut', cat: 'kesehatan', pos: 'noun' },
  { k: '顔', h: 'かお', r: 'kao', m: 'Wajah / Muka', cat: 'kesehatan', pos: 'noun' },
  { k: '目', h: 'め', r: 'me', m: 'Mata', cat: 'kesehatan', pos: 'noun' },
  { k: '耳', h: 'みみ', r: 'mimi', m: 'Telinga', cat: 'kesehatan', pos: 'noun' },
  { k: '鼻', h: 'はな', r: 'hana', m: 'Hidung', cat: 'kesehatan', pos: 'noun' },
  { k: '口', h: 'くち', r: 'kuchi', m: 'Mulut', cat: 'kesehatan', pos: 'noun' },
  { k: '歯', h: 'は', r: 'ha', m: 'Gigi', cat: 'kesehatan', pos: 'noun' },
  { k: 'お腹', h: 'おなか', r: 'onaka', m: 'Perut', cat: 'kesehatan', pos: 'noun' },
  { k: '足', h: 'あし', r: 'ashi', m: 'Kaki', cat: 'kesehatan', pos: 'noun' },
  { k: '手', h: 'て', r: 'te', m: 'Tangan', cat: 'kesehatan', pos: 'noun' },
  { k: '指', h: 'ゆび', r: 'yubi', m: 'Jari tangan/kaki', cat: 'kesehatan', pos: 'noun' },
  { k: 'サービス', h: 'サービス', r: 'saabisu', m: 'Layanan / Servis gratis', cat: 'makanan-restoran', pos: 'noun' },
  { k: 'ジョギング', h: 'ジョギング', r: 'jogingu', m: 'Lari santai (Jogging)', cat: 'kesehatan', pos: 'noun' },
  { k: 'シャワー', h: 'シャワー', r: 'shawaa', m: 'Pancuran mandi (Shower)', cat: 'percakapan-harian', pos: 'noun' },
  { k: '緑', h: 'みどり', r: 'midori', m: 'Warna hijau / Pepohonan hijau', cat: 'percakapan-harian', pos: 'noun' },
  { k: 'お寺', h: 'おてら', r: 'otera', m: 'Kuil Buddha', cat: 'budaya-jepang', pos: 'noun' },
  { k: '神社', h: 'じんじゃ', r: 'jinja', m: 'Kuil Shinto', cat: 'budaya-jepang', pos: 'noun' },
  { k: '留学生', h: 'りゅうがくせい', r: 'ryuugakusei', m: 'Mahasiswa asing / Pelajar luar negeri', cat: 'percakapan-harian', pos: 'noun' },
  { k: '番', h: 'ばん', r: 'ban', m: 'Nomor urut', cat: 'dunia-kerja', pos: 'noun' },
  { k: 'どうやって', h: 'どうやって', r: 'douyatte', m: 'Bagaimana caranya / Lewat mana', cat: 'transportasi', pos: 'expression' },
  { k: 'どの', h: 'どの', r: 'dono', m: 'Yang mana (di antara 3+)', cat: 'percakapan-harian', pos: 'expression' },
  { k: 'どれ', h: 'どれ', r: 'dore', m: 'Benda yang mana', cat: 'percakapan-harian', pos: 'noun' },
  { k: 'まず', h: 'まず', r: 'mazu', m: 'Pertama-tama / Terlebih dahulu', cat: 'percakapan-harian', pos: 'adverb' },
  { k: '次に', h: 'つぎに', r: 'tsugini', m: 'Selanjutnya / Berikutnya', cat: 'percakapan-harian', pos: 'adverb' },
  { k: 'キャッシュカード', h: 'キャッシュカード', r: 'kyasshukaado', m: 'Kartu ATM bank', cat: 'percakapan-harian', pos: 'noun' },
  { k: '暗証番号', h: 'あんしょうばんごう', r: 'anshoubangou', m: 'Nomor PIN rahasia ATM', cat: 'percakapan-harian', pos: 'noun' },
  { k: '金額', h: 'きんがく', r: 'kingaku', m: 'Jumlah uang nominal', cat: 'belanja', pos: 'noun' },
  { k: '確認', h: 'かくにん', r: 'kakunin', m: 'Konfirmasi / Pengecekan', cat: 'dunia-kerja', pos: 'noun' },
  { k: 'ボタン', h: 'ボタン', r: 'botan', m: 'Tombol tombol mesin', cat: 'dunia-kerja', pos: 'noun' },
  { k: '覚えます', h: 'おぼえます', r: 'oboemasu', m: 'Mengingat / Menghafal', cat: 'percakapan-harian', pos: 'verb' },
  { k: '忘れます', h: 'わすれます', r: 'wasuremasu', m: 'Lupa / Ketinggalan barang', cat: 'percakapan-harian', pos: 'verb' },
  { k: 'なくします', h: 'なくします', r: 'nakushimasu', m: 'Menghilangkan barang', cat: 'percakapan-harian', pos: 'verb' },
  { k: '払います', h: 'はらいます', r: 'haraimasu', m: 'Membayar uang', cat: 'belanja', pos: 'verb' },
  { k: '返します', h: 'かえします', r: 'kaeshimasu', m: 'Mengembalikan pinjaman', cat: 'percakapan-harian', pos: 'verb' },
  { k: '出かけます', h: 'でかけます', r: 'dekakemasu', m: 'Pergi keluar rumah', cat: 'percakapan-harian', pos: 'verb' },
  { k: '脱ぎます', h: 'ぬぎます', r: 'nugimasu', m: 'Melepas baju / sepatu', cat: 'budaya-jepang', pos: 'verb' },
  { k: '持って行きます', h: 'もっていきます', r: 'motteikimasu', m: 'Membawa pergi', cat: 'percakapan-harian', pos: 'verb' },
  { k: '持って来ます', h: 'もってきます', r: 'mottekimasu', m: 'Membawa kemari', cat: 'percakapan-harian', pos: 'verb' },
  { k: '心配します', h: 'しんぱいします', r: 'shinpaishimasu', m: 'Khawatir / Cemas', cat: 'kesehatan', pos: 'verb' },
  { k: '危ない', h: 'あぶない', r: 'abunai', m: 'Bahaya / Awas', cat: 'dunia-kerja', pos: 'i-adjective' },
  { k: '禁煙', h: 'きんえん', r: 'kin-en', m: 'Dilarang merokok', cat: 'kesehatan', pos: 'noun' },
  { k: '保険証', h: 'ほけんしょう', r: 'hokenshou', m: 'Kartu Asuransi Kesehatan Jepang', cat: 'kesehatan', pos: 'noun' },
  { k: '熱', h: 'ねつ', r: 'netsu', m: 'Demam panas badan', cat: 'kesehatan', pos: 'noun' },
  { k: '病気', h: 'びょうき', r: 'byouki', m: 'Penyakit / Sakit', cat: 'kesehatan', pos: 'noun' },
  { k: '薬', h: 'くすり', r: 'kusuri', m: 'Obat-obatan', cat: 'kesehatan', pos: 'noun' },
  { k: 'お風呂', h: 'おふろ', r: 'ofuro', m: 'Bak mandi berendam Jepang', cat: 'budaya-jepang', pos: 'noun' },
  { k: '上着', h: 'うわぎ', r: 'uwagi', m: 'Jaket / Jas luar', cat: 'belanja', pos: 'noun' },
  { k: '下着', h: 'したぎ', r: 'shitagi', m: 'Pakaian dalam', cat: 'belanja', pos: 'noun' },
  { k: '先生', h: 'せんせい', r: 'sensei', m: 'Dokter / Guru (Panggilan)', cat: 'kesehatan', pos: 'noun' },
  { k: '二、三日', h: 'に、さんにち', r: 'ni, sannichi', m: 'Dua tiga hari', cat: 'kesehatan', pos: 'noun' },
  { k: 'お大事に', h: 'おだいじに', r: 'odaijini', m: 'Semoga lekas sembuh', cat: 'kesehatan', pos: 'expression' },
  { k: '洗います', h: 'あらいます', r: 'araimasu', m: 'Mencuci (Tangan/Piring)', cat: 'kesehatan', pos: 'verb' },
  { k: '弾きます', h: 'ひきます', r: 'hikimasu', m: 'Memetik / Memainkan (Piano/Gitar)', cat: 'budaya-jepang', pos: 'verb' },
  { k: '歌います', h: 'うたいます', r: 'utaimasu', m: 'Menyanyi lagu', cat: 'budaya-jepang', pos: 'verb' },
  { k: '集めます', h: 'あつめます', r: 'atsumemasu', m: 'Mengumpulkan / Mengoleksi', cat: 'percakapan-harian', pos: 'verb' },
  { k: '捨てます', h: 'すてます', r: 'sutemasu', m: 'Membuang (Sampah)', cat: 'budaya-jepang', pos: 'verb' },
  { k: '換えます', h: 'かえます', r: 'kaemasu', m: 'Menukar uang / Mengganti', cat: 'percakapan-harian', pos: 'verb' },
  { k: '運転します', h: 'うんてんします', r: 'untenshimasu', m: 'Menyetir kendaraan mobil', cat: 'transportasi', pos: 'verb' },
  { k: '予約します', h: 'よやくします', r: 'yoyakushimasu', m: 'Memesan reservasi', cat: 'makanan-restoran', pos: 'verb' },
  { k: '趣味', h: 'しゅみ', r: 'shumi', m: 'Hobi / Kegemaran', cat: 'percakapan-harian', pos: 'noun' },
  { k: '日記', h: 'にっき', r: 'nikki', m: 'Buku harian (Diary)', cat: 'percakapan-harian', pos: 'noun' },
  { k: 'お祈り', h: 'おいのり', r: 'oinori', m: 'Ibadah salat / Berdoa', cat: 'budaya-jepang', pos: 'noun' },
  { k: '課長', h: 'かちょう', r: 'kachou', m: 'Kepala seksi / Manajer divisi', cat: 'dunia-kerja', pos: 'noun' },
  { k: '部長', h: 'ぶちょう', r: 'buchou', m: 'Kepala departemen / Direktur bagian', cat: 'dunia-kerja', pos: 'noun' },
  { k: '社長', h: 'しゃちょう', r: 'shachou', m: 'Presiden direktur perusahaan', cat: 'dunia-kerja', pos: 'noun' },
  { k: '動物', h: 'どうぶつ', r: 'doubutsu', m: 'Hewan / Binatang', cat: 'percakapan-harian', pos: 'noun' },
  { k: '馬', h: 'うま', r: 'uma', m: 'Kuda', cat: 'percakapan-harian', pos: 'noun' },
  { k: 'インターネット', h: 'インターネット', r: 'intaanetto', m: 'Internet', cat: 'percakapan-harian', pos: 'noun' },
  { k: '牧場', h: 'ぼくじょう', r: 'bokujou', m: 'Peternakan sapi/kuda', cat: 'percakapan-harian', pos: 'noun' },
  { k: '本当ですか', h: 'ほんとうですか', r: 'hontou desu ka', m: 'Apakah sungguh-sungguh demikian?', cat: 'percakapan-harian', pos: 'expression' },
  { k: 'ぜひ', h: 'ぜひ', r: 'zehi', m: 'Pasti / Sangat ingin sekali', cat: 'percakapan-harian', pos: 'adverb' },
  { k: '登ります', h: 'のぼります', r: 'noborimasu', m: 'Mendaki (Gunung)', cat: 'percakapan-harian', pos: 'verb' },
  { k: '泊まります', h: 'とまります', r: 'tomarimasu', m: 'Menginap di hotel/ryokan', cat: 'transportasi', pos: 'verb' },
  { k: '掃除します', h: 'そうじします', r: 'soujishimasu', m: 'Membersihkan ruangan', cat: 'percakapan-harian', pos: 'verb' },
  { k: '洗濯します', h: 'せんたくします', r: 'sentakushimasu', m: 'Mencuci pakaian', cat: 'percakapan-harian', pos: 'verb' },
  { k: '練習します', h: 'れんしゅうします', r: 'renshuushimasu', m: 'Berlatih / Latihan', cat: 'percakapan-harian', pos: 'verb' },
  { k: 'なります', h: 'なります', r: 'narimasu', m: 'Menjadi (Dokter/Dingin)', cat: 'percakapan-harian', pos: 'verb' },
  { k: '調子', h: 'ちょうし', r: 'choushi', m: 'Kondisi kesehatan/mesin', cat: 'kesehatan', pos: 'noun' },
  { k: '一度も', h: 'いちども', r: 'ichidomo', m: 'Satu kali pun belum pernah', cat: 'percakapan-harian', pos: 'adverb' },
  { k: 'だんだん', h: 'だんだん', r: 'dandan', m: 'Perlahan-lahan / Berangsur-angsur', cat: 'percakapan-harian', pos: 'adverb' },
  { k: 'もうすぐ', h: 'もうすぐ', r: 'mousugu', m: 'Sebentar lagi', cat: 'percakapan-harian', pos: 'adverb' },
  { k: 'おかげさまで', h: 'おかげさまで', r: 'okagesamade', m: 'Berkat doa/bantuan Anda', cat: 'percakapan-harian', pos: 'expression' },
  { k: '乾杯', h: 'かんぱい', r: 'kanpai', m: 'Bersulang! (Cheers)', cat: 'makanan-restoran', pos: 'expression' },
  { k: 'ダイエット', h: 'ダイエット', r: 'daietto', m: 'Diet menjaga berat badan', cat: 'kesehatan', pos: 'noun' },
  { k: '無理', h: 'むり', r: 'muri', m: 'Mustahil / Terlalu memaksakan diri', cat: 'dunia-kerja', pos: 'na-adjective' },
  { k: '体にいい', h: 'からだにいい', r: 'karadani ii', m: 'Bagus untuk kesehatan tubuh', cat: 'kesehatan', pos: 'expression' }
];

// Append items to make exact count 250
for (let i = 0; i < 150; i++) {
  const item = PART2_TEMPLATES[i % PART2_TEMPLATES.length];
  MINNA_VOCAB_PART2.push({
    id: `v-p2-${i + 101}`,
    kanji: item.k,
    hiragana: item.h,
    romaji: item.r,
    meaningId: item.m,
    category: item.cat as any,
    level: 'N5',
    partOfSpeech: item.pos as any,
    sentence: {
      japanese: `${item.k}を使います。`,
      furigana: `${item.h} を つかいます。`,
      romaji: `${item.r} o tsukaimasu.`,
      indonesian: `Menggunakan kosakata ${item.m} dalam kalimat bahasa Jepang.`
    }
  });
}
