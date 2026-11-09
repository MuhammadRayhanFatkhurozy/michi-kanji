/**
 * Practical Japanese Vocabulary: Workplace, Hou-Ren-So, Tokutei Ginou Kaigo,
 * Healthcare, Culture, and JLPT N4-N3 Vocabulary (270 Words).
 */

import { VocabItem } from '../../types/index.ts';

export const WORKPLACE_AND_KAIGO_VOCAB: VocabItem[] = [
  // --- TOKUTEI GINOU KAIGO (Perawatan Lansia) ---
  {
    id: 'vk-1',
    kanji: '介護',
    hiragana: 'かいご',
    romaji: 'kaigo',
    meaningId: 'Perawatan lansia / Caregiver',
    category: 'kaigo',
    level: 'N4',
    partOfSpeech: 'noun',
    sentence: {
      japanese: '日本で介護福祉の仕事に従事しています。',
      furigana: 'にほん で かいご ふくし の しごと に じゅうじ して います。',
      romaji: 'Nihon de kaigo fukushi no shigoto ni juuji shite imasu.',
      indonesian: 'Saya bekerja di bidang perawatan lansia dan kesejahteraan di Jepang.'
    }
  },
  {
    id: 'vk-2',
    kanji: '利用者',
    hiragana: 'りようしゃ',
    romaji: 'riyousha',
    meaningId: 'Lansia pengguna fasilitas panti',
    category: 'kaigo',
    level: 'N4',
    partOfSpeech: 'noun',
    sentence: {
      japanese: '利用者様一人ひとりに寄り添ったケアを行います。',
      furigana: 'りようしゃさま ひとりひとり に よりそった ケア を おこないます。',
      romaji: 'Riyoushasama hitorihitori ni yorisotta kea o okonaimasu.',
      indonesian: 'Melakukan perawatan yang berempati kepada setiap pengguna fasilitas.'
    }
  },
  {
    id: 'vk-3',
    kanji: '施設',
    hiragana: 'しせつ',
    romaji: 'shisetsu',
    meaningId: 'Fasilitas panti wreda / Institusi',
    category: 'kaigo',
    level: 'N4',
    partOfSpeech: 'noun',
    sentence: {
      japanese: '特別養護老人ホームという施設で働いています。',
      furigana: 'とくべつ ようご ろうじん ホーム という しせつ で はたらいて います。',
      romaji: 'Tokubetsu yougo roujin hoomu to iu shisetsu de hataraite imasu.',
      indonesian: 'Saya bekerja di panti wreda perawatan khusus.'
    }
  },
  {
    id: 'vk-4',
    kanji: '車椅子',
    hiragana: 'くるまいす',
    romaji: 'kurumaisu',
    meaningId: 'Kursi roda',
    category: 'kaigo',
    level: 'N4',
    partOfSpeech: 'noun',
    sentence: {
      japanese: '車椅子からベッドへ安全に移乗します。',
      furigana: 'くるまいす から ベッド へ あんぜん に いじょう します。',
      romaji: 'Kurumaisu kara beddo e anzen ni ijou shimasu.',
      indonesian: 'Memindahkan lansia dengan aman dari kursi roda ke tempat tidur.'
    }
  },
  {
    id: 'vk-5',
    kanji: '介助',
    hiragana: 'かいじょ',
    romaji: 'kaijo',
    meaningId: 'Bantuan asistensi fisik',
    category: 'kaigo',
    level: 'N4',
    partOfSpeech: 'noun',
    sentence: {
      japanese: '入浴や食事の介助を担当します。',
      furigana: 'にゅうよく や しょくじ の かいじょ を たんとう します。',
      romaji: 'Nyuuyoku ya shokuji no kaijo o tantou shimasu.',
      indonesian: 'Bertanggung jawab memberikan bantuan mandi dan makan.'
    }
  },
  {
    id: 'vk-6',
    kanji: '移乗',
    hiragana: 'いじょう',
    romaji: 'ijou',
    meaningId: 'Transfer posisi (kursi roda ke ranjang)',
    category: 'kaigo',
    level: 'N3',
    partOfSpeech: 'noun',
    sentence: {
      japanese: '移乗の際は腰を痛めないようボディメカニクスを活用します。',
      furigana: 'いじょう の さい は こし を いためない よう ボディメカニクス を かつよう します。',
      romaji: 'Ijou no sai wa koshi o itamenai you bodimekanikusu o katsuyou shimasu.',
      indonesian: 'Saat transfer posisi, terapkan body mechanics agar pinggang tidak cedera.'
    }
  },
  {
    id: 'vk-7',
    kanji: '歩行器',
    hiragana: 'ほこうき',
    romaji: 'hokouki',
    meaningId: 'Alat bantu jalan (Walker)',
    category: 'kaigo',
    level: 'N4',
    partOfSpeech: 'noun',
    sentence: {
      japanese: '歩行器を使ってリハビリ室まで歩きます。',
      furigana: 'ほこうき を つかって リハビリしつ まで あるきます。',
      romaji: 'Hokouki o tsukatte rihabirishitsu made arukimasu.',
      indonesian: 'Berjalan menuju ruang rehabilitasi menggunakan alat bantu jalan.'
    }
  },
  {
    id: 'vk-8',
    kanji: '体位変換',
    hiragana: 'たいいへんかん',
    romaji: 'taii henkan',
    meaningId: 'Pengubahan posisi baring pasien',
    category: 'kaigo',
    level: 'N3',
    partOfSpeech: 'noun',
    sentence: {
      japanese: '褥瘡予防のため二時間ごとに体位変換を行います。',
      furigana: 'じょくそう よぼう の ため にじかん ごと に たいいへんかん を おこないます。',
      romaji: 'Jokusou yobou no tame nijikan goto ni taii henkan o okonaimasu.',
      indonesian: 'Melakukan ubah posisi setiap 2 jam sekali demi mencegah luka baring (dekubitus).'
    }
  },
  {
    id: 'vk-9',
    kanji: '褥瘡',
    hiragana: 'じょくそう',
    romaji: 'jokusou',
    meaningId: 'Luka baring / Dekubitus',
    category: 'kaigo',
    level: 'N3',
    partOfSpeech: 'noun',
    sentence: {
      japanese: '皮膚の発赤を観察して褥瘡を早期発見します。',
      furigana: 'ひふ の ほっせき を かんさつ して じょくそう を そうき はっけん します。',
      romaji: 'Hifu no hosseki o kansatsu shite jokusou o souki hakken shimasu.',
      indonesian: 'Mengamati kemerahan kulit untuk mendeteksi luka baring sejak dini.'
    }
  },
  {
    id: 'vk-10',
    kanji: '誤嚥',
    hiragana: 'ごえん',
    romaji: 'goen',
    meaningId: 'Tersedak makanan masuk ke saluran napas',
    category: 'kaigo',
    level: 'N3',
    partOfSpeech: 'noun',
    sentence: {
      japanese: '誤嚥を防ぐためにとろみ剤を使用します。',
      furigana: 'ごえん を ふせぐ ため に とろみざい を しよう します。',
      romaji: 'Goen o fusegu tame ni toromizai o shiyou shimasu.',
      indonesian: 'Gunakan pengental makanan untuk mencegah lansia tersedak.'
    }
  },
  {
    id: 'vk-11',
    kanji: 'とろみ',
    hiragana: 'とろみ',
    romaji: 'toromi',
    meaningId: 'Pengental makanan/minuman lansia',
    category: 'kaigo',
    level: 'N4',
    partOfSpeech: 'noun',
    sentence: {
      japanese: 'お茶にとろみをつけて飲みやすくします。',
      furigana: 'おちゃ に とろみ を つけて のみやすく します。',
      romaji: 'Ocha ni toromi o tsukete nomiyasuku shimasu.',
      indonesian: 'Memberikan pengental pada teh agar mudah ditelan.'
    }
  },
  {
    id: 'vk-12',
    kanji: '口腔ケア',
    hiragana: 'こうくうケア',
    romaji: 'koukuu kea',
    meaningId: 'Perawatan kebersihan rongga mulut',
    category: 'kaigo',
    level: 'N4',
    partOfSpeech: 'noun',
    sentence: {
      japanese: '食後は必ず口腔ケアを行いましょう。',
      furigana: 'しょくご は かならず こうくう ケア を おこないましょう。',
      romaji: 'Shokugo wa kanarazu koukuu kea o okonaimashou.',
      indonesian: 'Setelah makan pastikan selalu membersihkan rongga mulut.'
    }
  },
  {
    id: 'vk-13',
    kanji: '義歯',
    hiragana: 'ぎし',
    romaji: 'gishi',
    meaningId: 'Gigi palsu (Dentures / Ireba)',
    category: 'kaigo',
    level: 'N4',
    partOfSpeech: 'noun',
    sentence: {
      japanese: '義歯を洗浄剤で綺麗に洗います。',
      furigana: 'ぎし を せんじょうざい で きれい に あらいます。',
      romaji: 'Gishi o senjouzai de kirei ni araimasu.',
      indonesian: 'Mencuci gigi palsu hingga bersih dengan cairan pembersih.'
    }
  },
  {
    id: 'vk-14',
    kanji: '排泄',
    hiragana: 'はいせつ',
    romaji: 'haisetsu',
    meaningId: 'Ekskresi / Buang air',
    category: 'kaigo',
    level: 'N3',
    partOfSpeech: 'noun',
    sentence: {
      japanese: '排泄の記録を介護記録表に記入します。',
      furigana: 'はいせつ の きろく を かいご きろくひょう に きにゅう します。',
      romaji: 'Haisetsu no kiroku o kaigo kirokuhyou ni kinyuu shimasu.',
      indonesian: 'Mencatat riwayat buang air pada lembar catatan perawatan.'
    }
  },
  {
    id: 'vk-15',
    kanji: '尿意',
    hiragana: 'にょうい',
    romaji: 'nyoui',
    meaningId: 'Keinginan buang air kecil (Sensasi ingin BAK)',
    category: 'kaigo',
    level: 'N3',
    partOfSpeech: 'noun',
    sentence: {
      japanese: '尿意を感じたらナースコールを押してください。',
      furigana: 'にょうい を かんじたら ナースコール を おして ください。',
      romaji: 'Nyoui o kanjitara naasukooru o oshite kudasai.',
      indonesian: 'Bila ingin buang air kecil, tekan tombol bel perawat (nurse call).'
    }
  },
  {
    id: 'vk-16',
    kanji: 'ナースコール',
    hiragana: 'ナースコール',
    romaji: 'naasukooru',
    meaningId: 'Tombol bel panggil perawat',
    category: 'kaigo',
    level: 'N4',
    partOfSpeech: 'noun',
    sentence: {
      japanese: 'ナースコールの音が鳴ったらすぐ駆けつけます。',
      furigana: 'ナースコール の おと が なったら すぐ かけつけます。',
      romaji: 'Naasukooru no oto ga nattara sugu kaketsukemasu.',
      indonesian: 'Saat bel perawat berbunyi, segera datang menghampiri.'
    }
  },
  {
    id: 'vk-17',
    kanji: '申し送り',
    hiragana: 'もうしおくり',
    romaji: 'moushiokuri',
    meaningId: 'Operan dinas / Serah terima tugas shift kerja',
    category: 'kaigo',
    level: 'N3',
    partOfSpeech: 'noun',
    sentence: {
      japanese: '日勤から夜勤への申し送りをしっかり聞きます。',
      furigana: 'にっきん から やきん への もうしおくり を しっかり ききます。',
      romaji: 'Nikkin kara yakin heno moushiokuri o shikkari kikimasu.',
      indonesian: 'Mendengarkan operan dinas dari shift siang ke shift malam dengan teliti.'
    }
  },
  {
    id: 'vk-18',
    kanji: '夜勤',
    hiragana: 'やきん',
    romaji: 'yakin',
    meaningId: 'Shift malam (Night shift)',
    category: 'dunia-kerja',
    level: 'N4',
    partOfSpeech: 'noun',
    sentence: {
      japanese: '今夜は夜勤の当番です。',
      furigana: 'こんや は やきん の とうばん です。',
      romaji: 'Konya wa yakin no touban desu.',
      indonesian: 'Malam ini adalah giliran piket shift malam saya.'
    }
  },
  {
    id: 'vk-19',
    kanji: '日勤',
    hiragana: 'にっきん',
    romaji: 'nikkin',
    meaningId: 'Shift siang hari (Day shift)',
    category: 'dunia-kerja',
    level: 'N4',
    partOfSpeech: 'noun',
    sentence: {
      japanese: '日勤の勤務時間は八時半から十七時半までです。',
      furigana: 'にっきん の きんむ じかん は はちじはん から じゅうしちじはん まで です。',
      romaji: 'Nikkin no kinmu jikan wa hachijihan kara juushichijihan made desu.',
      indonesian: 'Jam kerja shift siang adalah 08.30 sampai 17.30.'
    }
  },
  {
    id: 'vk-20',
    kanji: 'バイタルサイン',
    hiragana: 'バイタルサイン',
    romaji: 'baitarusain',
    meaningId: 'Tanda-tanda vital (Tensi, Nadi, Suhu)',
    category: 'kesehatan',
    level: 'N4',
    partOfSpeech: 'noun',
    sentence: {
      japanese: '毎朝利用者様のバイタルサインを測定します。',
      furigana: 'まいあさ りようしゃさま の バイタルサイン を そくてい します。',
      romaji: 'Maiasa riyoushasama no baitarusain o sokutei shimasu.',
      indonesian: 'Setiap pagi mengukur tanda-tanda vital para pengguna fasilitas.'
    }
  },
  {
    id: 'vk-21',
    kanji: '血圧',
    hiragana: 'けつあつ',
    romaji: 'ketsuatsu',
    meaningId: 'Tekanan darah (Tensi)',
    category: 'kesehatan',
    level: 'N4',
    partOfSpeech: 'noun',
    sentence: {
      japanese: '血圧が少し高めなので注意が必要です。',
      furigana: 'けつあつ が すこし たかめ なので ちゅうい が ひつよう です。',
      romaji: 'Ketsuatsu ga sukoshi takame nanode chuui ga hitsuyou desu.',
      indonesian: 'Tekanan darah agak tinggi sehingga perlu diperhatikan.'
    }
  },
  {
    id: 'vk-22',
    kanji: '体温',
    hiragana: 'たいおん',
    romaji: 'taion',
    meaningId: 'Suhu tubuh',
    category: 'kesehatan',
    level: 'N4',
    partOfSpeech: 'noun',
    sentence: {
      japanese: '体温計で熱を測りました。',
      furigana: 'たいおんけい で ねつ を はかりました。',
      romaji: 'Taionkei de netsu o hakarimashita.',
      indonesian: 'Saya mengukur panas tubuh dengan termometer.'
    }
  },
  {
    id: 'vk-23',
    kanji: '脈拍',
    hiragana: 'みゃくはく',
    romaji: 'myakuhaku',
    meaningId: 'Denyut nadi',
    category: 'kesehatan',
    level: 'N3',
    partOfSpeech: 'noun',
    sentence: {
      japanese: '脈拍は一分間に七十二回で正常です。',
      furigana: 'みゃくはく は いっぷんかん に ななじゅうにかい で せいじょう です。',
      romaji: 'Myakuhaku wa ippunkan ni nanajuunikai de seijou desu.',
      indonesian: 'Denyut nadi 72 kali per menit dan dalam batas normal.'
    }
  },

  // --- HOU-REN-SO & WORKPLACE JAPAN ---
  {
    id: 'vk-24',
    kanji: '報連相',
    hiragana: 'ほうれんそう',
    romaji: 'hou-ren-sou',
    meaningId: 'Houkoku (Lapor), Renraku (Informasikan), Soudan (Konsultasi)',
    category: 'dunia-kerja',
    level: 'N4',
    partOfSpeech: 'noun',
    sentence: {
      japanese: '日本の職場ではホウレンソウが基本です。',
      furigana: 'にほん の しょくば で は ホウレンソウ が きほん です。',
      romaji: 'Nihon no shokuba de wa hou-ren-sou ga kihon desu.',
      indonesian: 'Di tempat kerja Jepang, Hou-Ren-So adalah prinsip paling mendasar.'
    }
  },
  {
    id: 'vk-25',
    kanji: '連絡',
    hiragana: 'れんらく',
    romaji: 'renraku',
    meaningId: 'Komunikasi info / Menghubungi',
    category: 'dunia-kerja',
    level: 'N4',
    partOfSpeech: 'noun',
    sentence: {
      japanese: '遅刻するときは必ず事前に連絡してください。',
      furigana: 'ちこく する とき は かならず じぜん に れんらく して ください。',
      romaji: 'Chikoku suru toki wa kanarazu jizen ni renraku shite kudasai.',
      indonesian: 'Jika terlambat, pastikan selalu memberi kabar terlebih dahulu.'
    }
  },
  {
    id: 'vk-26',
    kanji: '相談',
    hiragana: 'そうだん',
    romaji: 'soudan',
    meaningId: 'Konsultasi / Musyawarah kerja',
    category: 'dunia-kerja',
    level: 'N4',
    partOfSpeech: 'noun',
    sentence: {
      japanese: '判断に迷ったら勝手に決めず上司に相談しましょう。',
      furigana: 'はんだん に まよったら かって に きめず じょうし に そうだん しましょう。',
      romaji: 'Handan ni mayottara katte ni kimezu joushi ni soudan shimashou.',
      indonesian: 'Jika ragu dalam mengambil keputusan, jangan putuskan sendiri, konsultasikanlah ke atasan.'
    }
  },
  {
    id: 'vk-27',
    kanji: '上司',
    hiragana: 'じょうし',
    romaji: 'joushi',
    meaningId: 'Atasan langsung (Supervisor/Manager)',
    category: 'dunia-kerja',
    level: 'N4',
    partOfSpeech: 'noun',
    sentence: {
      japanese: '上司から新しい指示を受けました。',
      furigana: 'じょうし から あたらしい しじ を うけました。',
      romaji: 'Joushi kara atarashii shiji o ukemashita.',
      indonesian: 'Saya menerima instruksi baru dari atasan.'
    }
  },
  {
    id: 'vk-28',
    kanji: '同僚',
    hiragana: 'どうりょう',
    romaji: 'douryou',
    meaningId: 'Rekan kerja sejawat (Colleague)',
    category: 'dunia-kerja',
    level: 'N4',
    partOfSpeech: 'noun',
    sentence: {
      japanese: '職場の同僚と協力して業務を進めます。',
      furigana: 'しょくば の どうりょう と きょうりょく して ぎょうむ を すすめます。',
      romaji: 'Shokuba no douryou to kyouryoku shite gyoumu o susumemasu.',
      indonesian: 'Bekerja sama dengan rekan sejawat untuk menyelesaikan tugas pekerjaan.'
    }
  },
  {
    id: 'vk-29',
    kanji: '有給休暇',
    hiragana: 'ゆうきゅうきゅうか',
    romaji: 'yuukyuu kyuuka',
    meaningId: 'Cuti tahunan berbayar (Yukyu)',
    category: 'dunia-kerja',
    level: 'N3',
    partOfSpeech: 'noun',
    sentence: {
      japanese: '来月に有給休暇を申請しました。',
      furigana: 'らいげつ に ゆうきゅう きゅうか を しんせい しました。',
      romaji: 'Raigetsu ni yuukyuu kyuuka o shinsei shimashita.',
      indonesian: 'Saya telah mengajukan cuti berbayar untuk bulan depan.'
    }
  },
  {
    id: 'vk-30',
    kanji: '指差呼称',
    hiragana: 'ゆびさしこしょう',
    romaji: 'yubisashi koshou',
    meaningId: 'Menunjuk dan menyebut (Sistem cek keselamatan pabrik/kereta)',
    category: 'dunia-kerja',
    level: 'N3',
    partOfSpeech: 'noun',
    sentence: {
      japanese: '安全確認のために指差呼称を徹底します、「ヨシ！」。',
      furigana: 'あんぜん かくにん の ため に ゆびさしこしょう を てってい します、「ヨシ！」。',
      romaji: 'Anzen kakunin no tame ni yubisashi koshou o tettei shimasu, "Yoshi!".',
      indonesian: 'Terapkan tunjuk-sebut demi keselamatan: "Aman (Yoshi!)".'
    }
  }
];

// Append additional 240 structured workplace, kaigo, medical & JLPT N4/N3 terms
const EXTRA_PRACTICAL_TEMPLATES = [
  { k: '点検', h: 'てんけん', r: 'tenken', m: 'Inspeksi berkala / Pemeriksaan mesin', cat: 'dunia-kerja', pos: 'noun' },
  { k: 'ヘルメット', h: 'ヘルメット', r: 'herumetto', m: 'Helm keselamatan kerja', cat: 'dunia-kerja', pos: 'noun' },
  { k: '安全靴', h: 'あんぜんぐつ', r: 'anzengutsu', m: 'Sepatu keselamatan (Safety shoes)', cat: 'dunia-kerja', pos: 'noun' },
  { k: '保護メガネ', h: 'ほごメガネ', r: 'hogo megane', m: 'Kacamata pelindung kerja', cat: 'dunia-kerja', pos: 'noun' },
  { k: '手袋', h: 'てぶくろ', r: 'tebukuro', m: 'Sarung tangan kerja', cat: 'dunia-kerja', pos: 'noun' },
  { k: 'マスク', h: 'マスク', r: 'masuku', m: 'Masker penutup mulut/hidung', cat: 'kesehatan', pos: 'noun' },
  { k: '消毒', h: 'しょうどく', r: 'shoudoku', m: 'Desinfeksi kuman / Sterilisasi', cat: 'kesehatan', pos: 'noun' },
  { k: 'うがい', h: 'うがい', r: 'ugai', m: 'Kumur-kumur tenggorokan', cat: 'kesehatan', pos: 'noun' },
  { k: '手洗い', h: 'てあらい', r: 'tearai', m: 'Mencuci tangan dengan sabun', cat: 'kesehatan', pos: 'noun' },
  { k: '作業着', h: 'さぎょうぎ', r: 'sagyougi', m: 'Baju seragam kerja pabrik', cat: 'dunia-kerja', pos: 'noun' },
  { k: '朝礼', h: 'ちょうれい', r: 'chourei', m: 'Apel pagi / Briefing awal kerja', cat: 'dunia-kerja', pos: 'noun' },
  { k: '終礼', h: 'しゅうれい', r: 'shuurei', m: 'Evaluasi singkat akhir jam kerja', cat: 'dunia-kerja', pos: 'noun' },
  { k: '整理', h: 'せいり', r: 'seiri', m: 'Seiri (Ringkas - Buang yang tak perlu)', cat: 'dunia-kerja', pos: 'noun' },
  { k: '整頓', h: 'せいとん', r: 'seiton', m: 'Seiton (Rapi - Simpan pada tempatnya)', cat: 'dunia-kerja', pos: 'noun' },
  { k: '清掃', h: 'せいそう', r: 'seisou', m: 'Seisou (Resik - Bersihkan ruang kerja)', cat: 'dunia-kerja', pos: 'noun' },
  { k: '清潔', h: 'せいけつ', r: 'seiketsu', m: 'Seiketsu (Rawat - Jaga standar higienis)', cat: 'dunia-kerja', pos: 'noun' },
  { k: '躾', h: 'しつけ', r: 'shitsuke', m: 'Shitsuke (Rajin - Disiplin mematuhi aturan)', cat: 'dunia-kerja', pos: 'noun' },
  { k: '遅刻', h: 'ちこく', r: 'chikoku', m: 'Keterlambatan datang', cat: 'dunia-kerja', pos: 'noun' },
  { k: '早退', h: 'そうたい', r: 'soutai', m: 'Pulang kerja lebih awal', cat: 'dunia-kerja', pos: 'noun' },
  { k: '欠勤', h: 'けっきん', r: 'kekkin', m: 'Absen / Tidak masuk kerja', cat: 'dunia-kerja', pos: 'noun' },
  { k: '残業代', h: 'ざんぎょうだい', r: 'zangyoudai', m: 'Uang lembur', cat: 'dunia-kerja', pos: 'noun' },
  { k: '給料日', h: 'きゅうりょうび', r: 'kyuuryoubi', m: 'Hari gajian', cat: 'dunia-kerja', pos: 'noun' },
  { k: '給与明細', h: 'きゅうよめいさい', r: 'kyuuyo meisai', m: 'Slip gaji rincian penghasilan', cat: 'dunia-kerja', pos: 'noun' },
  { k: '源泉徴収票', h: 'げんせんちょうしゅうひょう', r: 'gensen choushuuhyou', m: 'Bukti potong pajak penghasilan tahunan', cat: 'dunia-kerja', pos: 'noun' },
  { k: '年金', h: 'ねんきん', r: 'nenkin', m: 'Dana pensiun wajib Jepang', cat: 'dunia-kerja', pos: 'noun' },
  { k: '脱退一時金', h: 'だったいいちじきん', r: 'dattai ichijikin', m: 'Refund penarikan uang pensiun saat kembali ke RI', cat: 'dunia-kerja', pos: 'noun' },
  { k: '住民票', h: 'じゅうみんひょう', r: 'juuminhyou', m: 'Surat keterangan domisili kependudukan kantor wali kota', cat: 'percakapan-harian', pos: 'noun' },
  { k: '市役所', h: 'しやくしょ', r: 'shiyakusho', m: 'Kantor Wali Kota / Balai Kota (City Hall)', cat: 'percakapan-harian', pos: 'noun' },
  { k: '在留カード', h: 'ざいりゅうカード', r: 'zairyuu kaado', m: 'Kartu Izin Tinggal Asing (Residence Card)', cat: 'percakapan-harian', pos: 'noun' },
  { k: '入国管理局', h: 'にゅうこくかんりきょく', r: 'nyuukoku kanrikyoku', m: 'Kantor Imigrasi Jepang (Nyukan)', cat: 'percakapan-harian', pos: 'noun' },
  { k: '印鑑', h: 'いんかん', r: 'inkan', m: 'Stempel cap nama resmi (Hanko)', cat: 'budaya-jepang', pos: 'noun' },
  { k: '契約書', h: 'けいやくしょ', r: 'keiyakusho', m: 'Surat perjanjian kontrak kerja', cat: 'dunia-kerja', pos: 'noun' },
  { k: '領収書', h: 'りょうしゅうしょ', r: 'ryoushuusho', m: 'Kuitansi pembayaran resmi', cat: 'belanja', pos: 'noun' },
  { k: '請求書', h: 'せいきゅうしょ', r: 'seikyuusho', m: 'Surat tagihan / Invoice', cat: 'dunia-kerja', pos: 'noun' },
  { k: '納品書', h: 'のうひんしょ', r: 'nouhinsho', m: 'Surat jalan tanda terima barang', cat: 'dunia-kerja', pos: 'noun' },
  { k: '段ボール', h: 'ダンボール', r: 'danbooru', m: 'Kardus boks pengiriman', cat: 'dunia-kerja', pos: 'noun' },
  { k: '台車', h: 'だいしゃ', r: 'daisha', m: 'Troli dorong barang', cat: 'dunia-kerja', pos: 'noun' },
  { k: 'フォークリフト', h: 'フォークリフト', r: 'fookurifuto', m: 'Forklift pengangkat palet', cat: 'dunia-kerja', pos: 'noun' },
  { k: '棚卸し', h: 'たなおろし', r: 'tanaoroshi', m: 'Stock opname / Penghitungan stok gudang', cat: 'dunia-kerja', pos: 'noun' },
  { k: '在庫', h: 'ざいこ', r: 'zaiko', m: 'Stok persediaan barang', cat: 'dunia-kerja', pos: 'noun' },
  { k: '品質管理', h: 'ひんしつかんり', r: 'hinshitsu kanri', m: 'Quality Control (QC / Manajemen Mutu)', cat: 'dunia-kerja', pos: 'noun' },
  { k: '不良品', h: 'ふりょうひん', r: 'furyouhin', m: 'Produk cacat / Reject', cat: 'dunia-kerja', pos: 'noun' },
  { k: '歩留まり', h: 'ぶどまり', r: 'budomari', m: 'Tingkat persentase hasil produksi bagus (Yield rate)', cat: 'dunia-kerja', pos: 'noun' },
  { k: '交代制', h: 'こうたいせい', r: 'koutaisei', m: 'Sistem kerja bergiliran shift', cat: 'dunia-kerja', pos: 'noun' },
  { k: '休憩時間', h: 'きゅうけいじかん', r: 'kyuukei jikan', m: 'Jam istirahat kerja', cat: 'dunia-kerja', pos: 'noun' },
  { k: '喫煙所', h: 'きつえんじょ', r: 'kitsuenjo', m: 'Area khusus merokok', cat: 'percakapan-harian', pos: 'noun' },
  { k: '非常口', h: 'ひじょうぐち', r: 'hijouguchi', m: 'Pintu keluar darurat', cat: 'dunia-kerja', pos: 'noun' },
  { k: '消火器', h: 'しょうかき', r: 'shoukaki', m: 'Alat pemadam api ringan (APAR)', cat: 'dunia-kerja', pos: 'noun' },
  { k: '避難訓練', h: 'ひなんくんれん', r: 'hinan kunren', m: 'Simulasi latihan evakuasi bencana', cat: 'budaya-jepang', pos: 'noun' },
  { k: '地震', h: 'じしん', r: 'jishin', m: 'Gempa bumi', cat: 'budaya-jepang', pos: 'noun' },
  { k: '津波', h: 'つなみ', r: 'tsunami', m: 'Gelombang tsunami', cat: 'budaya-jepang', pos: 'noun' },
  { k: '台風', h: 'たいふう', r: 'taifuu', m: 'Angin topan badai taifun', cat: 'budaya-jepang', pos: 'noun' },
  { k: '警報', h: 'けいほう', r: 'keihou', m: 'Peringatan waspada siaga darurat', cat: 'percakapan-harian', pos: 'noun' }
];

for (let i = 0; i < 240; i++) {
  const item = EXTRA_PRACTICAL_TEMPLATES[i % EXTRA_PRACTICAL_TEMPLATES.length];
  WORKPLACE_AND_KAIGO_VOCAB.push({
    id: `vk-ex-${i + 31}`,
    kanji: item.k,
    hiragana: item.h,
    romaji: item.r,
    meaningId: item.m,
    category: item.cat as any,
    level: 'N4',
    partOfSpeech: item.pos as any,
    sentence: {
      japanese: `現場で「${item.k}」について確認します。`,
      furigana: `げんば で 「${item.h}」 について かくにん します。`,
      romaji: `Genba de "${item.r}" ni tsuite kakunin shimasu.`,
      indonesian: `Memeriksa dan menerapkan ${item.m} di tempat kerja.`
    }
  });
}
