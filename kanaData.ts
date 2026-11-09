/**
 * Complete Kana Data (Hiragana & Katakana)
 * Full Gojuon, Dakuten, Handakuten, Youon, Sokuon, Long Vowels, and Common Mistakes
 */

import { KanaCharacter } from '../types';

export const HIRAGANA_DATA: KanaCharacter[] = [
  // A row
  { char: 'あ', romaji: 'a', type: 'hiragana', category: 'gojuon', row: 'a', strokeCount: 3, strokeSteps: ['Garis horizontal pendek melengkung', 'Garis vertikal melengkung di tengah', 'Lingkaran loop terbuka ke kanan bawah'], exampleWord: 'あさ', exampleReading: 'asa', exampleMeaningId: 'Pagi', audioText: 'あ' },
  { char: 'い', romaji: 'i', type: 'hiragana', category: 'gojuon', row: 'a', strokeCount: 2, strokeSteps: ['Garis lengkung kiri dengan kail bawah', 'Garis vertikal pendek di kanan'], exampleWord: 'いぬ', exampleReading: 'inu', exampleMeaningId: 'Anjing', audioText: 'い' },
  { char: 'う', romaji: 'u', type: 'hiragana', category: 'gojuon', row: 'a', strokeCount: 2, strokeSteps: ['Titik garis miring atas', 'Lengkungan membulat besar seperti telinga'], exampleWord: 'うみ', exampleReading: 'umi', exampleMeaningId: 'Laut', audioText: 'う' },
  { char: 'え', romaji: 'e', type: 'hiragana', category: 'gojuon', row: 'a', strokeCount: 2, strokeSteps: ['Titik miring atas', 'Garis zigzag mirip angka 7 dengan lengkung bawah'], exampleWord: 'えき', exampleReading: 'eki', exampleMeaningId: 'Stasiun', audioText: 'え' },
  { char: 'お', romaji: 'o', type: 'hiragana', category: 'gojuon', row: 'a', strokeCount: 3, strokeSteps: ['Garis horizontal', 'Garis vertikal memutar membentuk perut', 'Titik miring di kanan atas'], exampleWord: 'お茶', exampleReading: 'ocha', exampleMeaningId: 'Teh', audioText: 'お' },

  // Ka row
  { char: 'か', romaji: 'ka', type: 'hiragana', category: 'gojuon', row: 'ka', strokeCount: 3, strokeSteps: ['Garis melengkung dengan kail', 'Garis vertikal memotong', 'Garis aksen kanan'], exampleWord: 'かさ', exampleReading: 'kasa', exampleMeaningId: 'Payung', audioText: 'か' },
  { char: 'き', romaji: 'ki', type: 'hiragana', category: 'gojuon', row: 'ka', strokeCount: 4, strokeSteps: ['Garis horizontal atas', 'Garis horizontal kedua', 'Garis diagonal miring', 'Lengkung bawah'], exampleWord: 'きのう', exampleReading: 'kinou', exampleMeaningId: 'Kemarin', audioText: 'き' },
  { char: 'く', romaji: 'ku', type: 'hiragana', category: 'gojuon', row: 'ka', strokeCount: 1, strokeSteps: ['Satu goresan sudut siku terbuka ke kanan (<)'], exampleWord: 'くるま', exampleReading: 'kuruma', exampleMeaningId: 'Mobil', audioText: 'く' },
  { char: 'け', romaji: 'ke', type: 'hiragana', category: 'gojuon', row: 'ka', strokeCount: 3, strokeSteps: ['Garis vertikal kiri berkait', 'Garis horizontal kanan', 'Garis vertikal melengkung'], exampleWord: 'けさ', exampleReading: 'kesa', exampleMeaningId: 'Pagi ini', audioText: 'け' },
  { char: 'こ', romaji: 'ko', type: 'hiragana', category: 'gojuon', row: 'ka', strokeCount: 2, strokeSteps: ['Garis horizontal atas dengan kail', 'Garis lengkung horizontal bawah'], exampleWord: 'これ', exampleReading: 'kore', exampleMeaningId: 'Ini', audioText: 'こ' },

  // Sa row
  { char: 'さ', romaji: 'sa', type: 'hiragana', category: 'gojuon', row: 'sa', strokeCount: 3, strokeSteps: ['Garis horizontal miring naik', 'Garis diagonal memotong dengan kail', 'Lengkungan bawah terpisah'], exampleWord: 'さくら', exampleReading: 'sakura', exampleMeaningId: 'Bunga Sakura', audioText: 'さ' },
  { char: 'し', romaji: 'shi', type: 'hiragana', category: 'gojuon', row: 'sa', strokeCount: 1, strokeSteps: ['Garis lurus turun lalu melengkung ke atas seperti mata kail'], exampleWord: 'しごと', exampleReading: 'shigoto', exampleMeaningId: 'Pekerjaan', audioText: 'し' },
  { char: 'す', romaji: 'su', type: 'hiragana', category: 'gojuon', row: 'sa', strokeCount: 2, strokeSteps: ['Garis horizontal', 'Garis vertikal membuat simpul bulat di tengah lalu turun'], exampleWord: 'すし', exampleReading: 'sushi', exampleMeaningId: 'Sushi', audioText: 'す' },
  { char: 'せ', romaji: 'se', type: 'hiragana', category: 'gojuon', row: 'sa', strokeCount: 3, strokeSteps: ['Garis horizontal panjang', 'Garis vertikal kanan belok bawah', 'Garis vertikal kiri memotong'], exampleWord: 'せんせい', exampleReading: 'sensei', exampleMeaningId: 'Guru', audioText: 'せ' },
  { char: 'そ', romaji: 'so', type: 'hiragana', category: 'gojuon', row: 'sa', strokeCount: 1, strokeSteps: ['Goresan zigzag satu tarikan bersambung membentuk huruf Z lalu lengkung bawah'], exampleWord: 'そこ', exampleReading: 'soko', exampleMeaningId: 'Di situ', audioText: 'そ' },

  // Ta row
  { char: 'た', romaji: 'ta', type: 'hiragana', category: 'gojuon', row: 'ta', strokeCount: 4, strokeSteps: ['Garis horizontal', 'Garis diagonal memotong', 'Garis pendek kanan', 'Lengkung bawah'], exampleWord: 'たまご', exampleReading: 'tamago', exampleMeaningId: 'Telur', audioText: 'た' },
  { char: 'ち', romaji: 'chi', type: 'hiragana', category: 'gojuon', row: 'ta', strokeCount: 2, strokeSteps: ['Garis horizontal pendek', 'Garis vertikal membulat ke kanan bawah mirip angka 5'], exampleWord: 'ちず', exampleReading: 'chizu', exampleMeaningId: 'Peta', audioText: 'ち' },
  { char: 'つ', romaji: 'tsu', type: 'hiragana', category: 'gojuon', row: 'ta', strokeCount: 1, strokeSteps: ['Satu goresan membulat besar seperti ombak melengkung'], exampleWord: 'つき', exampleReading: 'tsuki', exampleMeaningId: 'Bulan', audioText: 'つ' },
  { char: 'て', romaji: 'te', type: 'hiragana', category: 'gojuon', row: 'ta', strokeCount: 1, strokeSteps: ['Garis horizontal lalu melengkung turun ke kanan bawah'], exampleWord: 'てがみ', exampleReading: 'tegami', exampleMeaningId: 'Surat', audioText: 'て' },
  { char: 'と', romaji: 'to', type: 'hiragana', category: 'gojuon', row: 'ta', strokeCount: 2, strokeSteps: ['Garis miring pendek', 'Garis melengkung cembung ke kanan'], exampleWord: 'ともだち', exampleReading: 'tomodachi', exampleMeaningId: 'Teman', audioText: 'と' },

  // Na row
  { char: 'な', romaji: 'na', type: 'hiragana', category: 'gojuon', row: 'na', strokeCount: 4, strokeSteps: ['Garis horizontal', 'Garis diagonal memotong', 'Titik kanan atas', 'Simpul loop kecil kanan bawah'], exampleWord: 'なつ', exampleReading: 'natsu', exampleMeaningId: 'Musim Panas', audioText: 'な' },
  { char: 'に', romaji: 'ni', type: 'hiragana', category: 'gojuon', row: 'na', strokeCount: 3, strokeSteps: ['Garis vertikal kiri berkait', 'Garis horizontal kanan atas', 'Garis horizontal kanan bawah'], exampleWord: 'にほん', exampleReading: 'nihon', exampleMeaningId: 'Jepang', audioText: 'に' },
  { char: 'ぬ', romaji: 'nu', type: 'hiragana', category: 'gojuon', row: 'na', strokeCount: 2, strokeSteps: ['Garis diagonal miring', 'Garis melengkung melingkar dengan ekor simpul kecil di ujung'], exampleWord: 'ぬの', exampleReading: 'nuno', exampleMeaningId: 'Kain', audioText: 'ぬ' },
  { char: 'ね', romaji: 'ne', type: 'hiragana', category: 'gojuon', row: 'na', strokeCount: 2, strokeSteps: ['Garis lurus vertikal', 'Garis zigzag lalu loop kecil di ujung kanan'], exampleWord: 'ねこ', exampleReading: 'neko', exampleMeaningId: 'Kucing', audioText: 'ね' },
  { char: 'の', romaji: 'no', type: 'hiragana', category: 'gojuon', row: 'na', strokeCount: 1, strokeSteps: ['Satu goresan spiral spiral melingkar searah jarum jam'], exampleWord: 'のみもの', exampleReading: 'nomimono', exampleMeaningId: 'Minuman', audioText: 'の' },

  // Ha row
  { char: 'は', romaji: 'ha', type: 'hiragana', category: 'gojuon', row: 'ha', strokeCount: 3, strokeSteps: ['Garis vertikal kiri berkait', 'Garis horizontal kanan', 'Garis vertikal loop kanan bawah'], exampleWord: 'はな', exampleReading: 'hana', exampleMeaningId: 'Bunga / Hidung', audioText: 'は' },
  { char: 'ひ', romaji: 'hi', type: 'hiragana', category: 'gojuon', row: 'ha', strokeCount: 1, strokeSteps: ['Satu goresan membentuk mangkuk U terbalik melengkung simetris'], exampleWord: 'ひと', exampleReading: 'hito', exampleMeaningId: 'Orang', audioText: 'ひ' },
  { char: 'ふ', romaji: 'fu', type: 'hiragana', category: 'gojuon', row: 'ha', strokeCount: 4, strokeSteps: ['Titik atas', 'Garis lengkung tengah', 'Titik kiri', 'Titik kanan'], exampleWord: 'ふゆ', exampleReading: 'fuyu', exampleMeaningId: 'Musim Dingin', audioText: 'ふ' },
  { char: 'へ', romaji: 'he', type: 'hiragana', category: 'gojuon', row: 'ha', strokeCount: 1, strokeSteps: ['Goresan seperti atap rumah naik lalu turun landai'], exampleWord: 'へや', exampleReading: 'heya', exampleMeaningId: 'Kamar', audioText: 'へ' },
  { char: 'ほ', romaji: 'ho', type: 'hiragana', category: 'gojuon', row: 'ha', strokeCount: 4, strokeSteps: ['Garis vertikal kiri', 'Garis horizontal atas', 'Garis horizontal bawah', 'Garis vertikal simpul loop (tidak menembus atas)'], exampleWord: 'ほん', exampleReading: 'hon', exampleMeaningId: 'Buku', audioText: 'ほ' },

  // Ma row
  { char: 'ま', romaji: 'ma', type: 'hiragana', category: 'gojuon', row: 'ma', strokeCount: 3, strokeSteps: ['Garis horizontal atas', 'Garis horizontal tengah', 'Garis vertikal melingkar dengan loop bawah'], exampleWord: 'まち', exampleReading: 'machi', exampleMeaningId: 'Kota', audioText: 'ま' },
  { char: 'み', romaji: 'mi', type: 'hiragana', category: 'gojuon', row: 'ma', strokeCount: 2, strokeSteps: ['Garis horizontal belok simpul kiri lalu memotong', 'Garis lengkung kanan'], exampleWord: 'みず', exampleReading: 'mizu', exampleMeaningId: 'Air', audioText: 'み' },
  { char: 'む', romaji: 'mu', type: 'hiragana', category: 'gojuon', row: 'ma', strokeCount: 3, strokeSteps: ['Garis horizontal pendek', 'Garis vertikal turun buat loop lalu ekor naik', 'Titik kanan atas'], exampleWord: 'むし', exampleReading: 'mushi', exampleMeaningId: 'Serangga', audioText: 'む' },
  { char: 'め', romaji: 'me', type: 'hiragana', category: 'gojuon', row: 'ma', strokeCount: 2, strokeSteps: ['Garis diagonal miring', 'Garis melengkung menyapu tanpa simpul di ujung (beda dari ぬ)'], exampleWord: 'め', exampleReading: 'me', exampleMeaningId: 'Mata', audioText: 'め' },
  { char: 'も', romaji: 'mo', type: 'hiragana', category: 'gojuon', row: 'ma', strokeCount: 3, strokeSteps: ['Garis kail pancing vertikal membulat ke kanan', 'Garis horizontal atas', 'Garis horizontal bawah'], exampleWord: 'もり', exampleReading: 'mori', exampleMeaningId: 'Hutan', audioText: 'も' },

  // Ya row
  { char: 'や', romaji: 'ya', type: 'hiragana', category: 'gojuon', row: 'ya', strokeCount: 3, strokeSteps: ['Garis melengkung dengan kail kanan', 'Titik kecil miring', 'Garis diagonal memotong'], exampleWord: 'やま', exampleReading: 'yama', exampleMeaningId: 'Gunung', audioText: 'や' },
  { char: 'ゆ', romaji: 'yu', type: 'hiragana', category: 'gojuon', row: 'ya', strokeCount: 2, strokeSteps: ['Garis lengkung membulat ke bawah lalu loop besar', 'Garis vertikal memotong tengah'], exampleWord: 'ゆき', exampleReading: 'yuki', exampleMeaningId: 'Salju', audioText: 'ゆ' },
  { char: 'よ', romaji: 'yo', type: 'hiragana', category: 'gojuon', row: 'ya', strokeCount: 2, strokeSteps: ['Garis horizontal pendek', 'Garis vertikal turun membuat loop ke kiri lalu mendatar'], exampleWord: 'よる', exampleReading: 'yoru', exampleMeaningId: 'Malam', audioText: 'よ' },

  // Ra row
  { char: 'ら', romaji: 'ra', type: 'hiragana', category: 'gojuon', row: 'ra', strokeCount: 2, strokeSteps: ['Titik miring atas', 'Lengkung membulat seperti angka 5 terbalik'], exampleWord: 'らいしゅう', exampleReading: 'raishuu', exampleMeaningId: 'Minggu depan', audioText: 'ら' },
  { char: 'り', romaji: 'ri', type: 'hiragana', category: 'gojuon', row: 'ra', strokeCount: 2, strokeSteps: ['Garis vertikal pendek kiri berkait', 'Garis vertikal panjang kanan melengkung halus'], exampleWord: 'りんご', exampleReading: 'ringo', exampleMeaningId: 'Apel', audioText: 'り' },
  { char: 'る', romaji: 'ru', type: 'hiragana', category: 'gojuon', row: 'ra', strokeCount: 1, strokeSteps: ['Satu goresan zigzag mirip angka 3 dengan lingkaran kecil di ekornya'], exampleWord: 'るす', exampleReading: 'rusu', exampleMeaningId: 'Tidak di rumah', audioText: 'る' },
  { char: 'れ', romaji: 're', type: 'hiragana', category: 'gojuon', row: 'ra', strokeCount: 2, strokeSteps: ['Garis vertikal kiri lurus', 'Garis zigzag lalu meliuk ke luar kanan atas (beda dari ね)'], exampleWord: 'れいぞうこ', exampleReading: 'reizouko', exampleMeaningId: 'Kulkas', audioText: 'れ' },
  { char: 'ろ', romaji: 'ro', type: 'hiragana', category: 'gojuon', row: 'ra', strokeCount: 1, strokeSteps: ['Satu goresan mirip angka 3 tanpa lingkaran di ujung (beda dari る)'], exampleWord: 'ろうそく', exampleReading: 'rousoku', exampleMeaningId: 'Lilin', audioText: 'ろ' },

  // Wa, Wo, N
  { char: 'わ', romaji: 'wa', type: 'hiragana', category: 'gojuon', row: 'wa', strokeCount: 2, strokeSteps: ['Garis vertikal kiri', 'Garis melengkung bulat besar seperti busur terbuka'], exampleWord: 'わたし', exampleReading: 'watashi', exampleMeaningId: 'Saya', audioText: 'わ' },
  { char: 'を', romaji: 'wo (o)', type: 'hiragana', category: 'gojuon', row: 'wa', strokeCount: 3, strokeSteps: ['Garis horizontal', 'Garis diagonal belok kiri', 'Lengkung C di bawah'], exampleWord: 'ごはんを食べる', exampleReading: 'gohan o taberu', exampleMeaningId: 'Makan nasi (Partikel objek)', audioText: 'を', commonMistake: 'Hanya dipakai sebagai partikel tata bahasa, diucapkan "o".' },
  { char: 'ん', romaji: 'n', type: 'hiragana', category: 'gojuon', row: 'wa', strokeCount: 1, strokeSteps: ['Satu goresan mengalir mirip huruf latin "n" miring'], exampleWord: 'にほん', exampleReading: 'nihon', exampleMeaningId: 'Jepang', audioText: 'ん' },

  // Dakuten (Tenten ゛)
  { char: 'が', romaji: 'ga', type: 'hiragana', category: 'dakuten', strokeCount: 5, strokeSteps: ['か + dua garis tenten di kanan atas'], exampleWord: 'がくせい', exampleReading: 'gakusei', exampleMeaningId: 'Mahasiswa / Siswa', audioText: 'が' },
  { char: 'ぎ', romaji: 'gi', type: 'hiragana', category: 'dakuten', strokeCount: 6, strokeSteps: ['き + tenten'], exampleWord: 'ぎんこう', exampleReading: 'ginkou', exampleMeaningId: 'Bank', audioText: 'ぎ' },
  { char: 'ぐ', romaji: 'gu', type: 'hiragana', category: 'dakuten', strokeCount: 3, strokeSteps: ['く + tenten'], exampleWord: 'ぐらい', exampleReading: 'gurai', exampleMeaningId: 'Kira-kira', audioText: 'ぐ' },
  { char: 'げ', romaji: 'ge', type: 'hiragana', category: 'dakuten', strokeCount: 5, strokeSteps: ['け + tenten'], exampleWord: 'げんき', exampleReading: 'genki', exampleMeaningId: 'Sehat / Semangat', audioText: 'げ' },
  { char: 'ご', romaji: 'go', type: 'hiragana', category: 'dakuten', strokeCount: 4, strokeSteps: ['こ + tenten'], exampleWord: 'ごはん', exampleReading: 'gohan', exampleMeaningId: 'Nasi / Makanan', audioText: 'ご' },

  { char: 'ざ', romaji: 'za', type: 'hiragana', category: 'dakuten', strokeCount: 5, strokeSteps: ['さ + tenten'], exampleWord: 'ざっし', exampleReading: 'zasshi', exampleMeaningId: 'Majalah', audioText: 'ざ' },
  { char: 'じ', romaji: 'ji', type: 'hiragana', category: 'dakuten', strokeCount: 3, strokeSteps: ['し + tenten'], exampleWord: 'じかん', exampleReading: 'jikan', exampleMeaningId: 'Waktu', audioText: 'じ' },
  { char: 'ず', romaji: 'zu', type: 'hiragana', category: 'dakuten', strokeCount: 4, strokeSteps: ['す + tenten'], exampleWord: 'ずっと', exampleReading: 'zutto', exampleMeaningId: 'Terus-menerus', audioText: 'ず' },
  { char: 'ぜ', romaji: 'ze', type: 'hiragana', category: 'dakuten', strokeCount: 5, strokeSteps: ['せ + tenten'], exampleWord: 'ぜんぶ', exampleReading: 'zenbu', exampleMeaningId: 'Semuanya', audioText: 'ぜ' },
  { char: 'ぞ', romaji: 'zo', type: 'hiragana', category: 'dakuten', strokeCount: 3, strokeSteps: ['そ + tenten'], exampleWord: 'ぞう', exampleReading: 'zou', exampleMeaningId: 'Gajah', audioText: 'ぞ' },

  { char: 'だ', romaji: 'da', type: 'hiragana', category: 'dakuten', strokeCount: 6, strokeSteps: ['た + tenten'], exampleWord: 'だいがく', exampleReading: 'daigaku', exampleMeaningId: 'Universitas', audioText: 'だ' },
  { char: 'ぢ', romaji: 'ji (dji)', type: 'hiragana', category: 'dakuten', strokeCount: 4, strokeSteps: ['ち + tenten'], exampleWord: 'はなぢ', exampleReading: 'hanaji', exampleMeaningId: 'Mimisan', audioText: 'ぢ', commonMistake: 'Jarang dipakai, umumnya bunyi "ji" ditulis dengan じ.' },
  { char: 'づ', romaji: 'zu (dzu)', type: 'hiragana', category: 'dakuten', strokeCount: 3, strokeSteps: ['つ + tenten'], exampleWord: 'つづく', exampleReading: 'tsuzuku', exampleMeaningId: 'Berlanjut', audioText: 'づ', commonMistake: 'Umumnya bunyi "zu" ditulis dengan ず.' },
  { char: 'で', romaji: 'de', type: 'hiragana', category: 'dakuten', strokeCount: 3, strokeSteps: ['て + tenten'], exampleWord: 'でんしゃ', exampleReading: 'densha', exampleMeaningId: 'Kereta listrik', audioText: 'で' },
  { char: 'ど', romaji: 'do', type: 'hiragana', category: 'dakuten', strokeCount: 4, strokeSteps: ['と + tenten'], exampleWord: 'どこ', exampleReading: 'doko', exampleMeaningId: 'Di mana', audioText: 'ど' },

  { char: 'ば', romaji: 'ba', type: 'hiragana', category: 'dakuten', strokeCount: 5, strokeSteps: ['は + tenten'], exampleWord: 'ばんごう', exampleReading: 'bangou', exampleMeaningId: 'Nomor', audioText: 'ば' },
  { char: 'び', romaji: 'bi', type: 'hiragana', category: 'dakuten', strokeCount: 3, strokeSteps: ['ひ + tenten'], exampleWord: 'びょういん', exampleReading: 'byouin', exampleMeaningId: 'Rumah Sakit', audioText: 'び' },
  { char: 'ぶ', romaji: 'bu', type: 'hiragana', category: 'dakuten', strokeCount: 6, strokeSteps: ['ふ + tenten'], exampleWord: 'ぶんぽう', exampleReading: 'bunpou', exampleMeaningId: 'Tata bahasa (Grammar)', audioText: 'ぶ' },
  { char: 'べ', romaji: 'be', type: 'hiragana', category: 'dakuten', strokeCount: 3, strokeSteps: ['へ + tenten'], exampleWord: 'べんきょう', exampleReading: 'benkyou', exampleMeaningId: 'Belajar', audioText: 'べ' },
  { char: 'ぼ', romaji: 'bo', type: 'hiragana', category: 'dakuten', strokeCount: 6, strokeSteps: ['ほ + tenten'], exampleWord: 'ぼうし', exampleReading: 'boushi', exampleMeaningId: 'Topi', audioText: 'ぼ' },

  // Handakuten (Maru ゜)
  { char: 'ぱ', romaji: 'pa', type: 'hiragana', category: 'handakuten', strokeCount: 4, strokeSteps: ['は + lingkaran kecil (maru) kanan atas'], exampleWord: 'ぱん', exampleReading: 'pan (lebih umum roti ditulis パン)', exampleMeaningId: 'Roti', audioText: 'ぱ' },
  { char: 'ぴ', romaji: 'pi', type: 'hiragana', category: 'handakuten', strokeCount: 2, strokeSteps: ['ひ + maru'], exampleWord: 'ぴかぴか', exampleReading: 'pikapika', exampleMeaningId: 'Berkilau', audioText: 'ぴ' },
  { char: 'ぷ', romaji: 'pu', type: 'hiragana', category: 'handakuten', strokeCount: 5, strokeSteps: ['ふ + maru'], exampleWord: 'ぷらす', exampleReading: 'purasu', exampleMeaningId: 'Plus / Nilai tambah', audioText: 'ぷ' },
  { char: 'ぺ', romaji: 'pe', type: 'hiragana', category: 'handakuten', strokeCount: 2, strokeSteps: ['へ + maru'], exampleWord: 'ぺらぺら', exampleReading: 'perapera', exampleMeaningId: 'Lancar berbicara', audioText: 'ぺ' },
  { char: 'ぽ', romaji: 'po', type: 'hiragana', category: 'handakuten', strokeCount: 5, strokeSteps: ['ほ + maru'], exampleWord: 'ぽけっと', exampleReading: 'poketto', exampleMeaningId: 'Saku / Kantong', audioText: 'ぽ' },

  // Youon (Kombinasi huruf kecil ゃ, ゅ, ょ)
  { char: 'きゃ', romaji: 'kya', type: 'hiragana', category: 'youon', strokeCount: 7, strokeSteps: ['き + huruf kecil ゃ'], exampleWord: 'きゃく', exampleReading: 'kyaku', exampleMeaningId: 'Tamu / Pelanggan', audioText: 'きゃ' },
  { char: 'きゅ', romaji: 'kyu', type: 'hiragana', category: 'youon', strokeCount: 6, strokeSteps: ['き + huruf kecil ゅ'], exampleWord: 'きゅうり', exampleReading: 'kyuuri', exampleMeaningId: 'Mentimun', audioText: 'きゅ' },
  { char: 'きょ', romaji: 'kyo', type: 'hiragana', category: 'youon', strokeCount: 6, strokeSteps: ['き + huruf kecil ょ'], exampleWord: 'きょう', exampleReading: 'kyou', exampleMeaningId: 'Hari ini', audioText: 'きょ' },

  { char: 'しゃ', romaji: 'sha', type: 'hiragana', category: 'youon', strokeCount: 4, strokeSteps: ['し + huruf kecil ゃ'], exampleWord: 'しゃしん', exampleReading: 'shashin', exampleMeaningId: 'Foto', audioText: 'しゃ' },
  { char: 'しゅ', romaji: 'shu', type: 'hiragana', category: 'youon', strokeCount: 3, strokeSteps: ['し + huruf kecil ゅ'], exampleWord: 'しゅくだい', exampleReading: 'shukudai', exampleMeaningId: 'PR (Pekerjaan Rumah)', audioText: 'しゅ' },
  { char: 'しょ', romaji: 'sho', type: 'hiragana', category: 'youon', strokeCount: 3, strokeSteps: ['し + huruf kecil ょ'], exampleWord: 'しょくどう', exampleReading: 'shokudou', exampleMeaningId: 'Kantin', audioText: 'しょ' },

  { char: 'ちゃ', romaji: 'cha', type: 'hiragana', category: 'youon', strokeCount: 5, strokeSteps: ['ち + ゃ'], exampleWord: 'お茶 (おちゃ)', exampleReading: 'ocha', exampleMeaningId: 'Teh Jepang', audioText: 'ちゃ' },
  { char: 'ちゅ', romaji: 'chu', type: 'hiragana', category: 'youon', strokeCount: 4, strokeSteps: ['ち + ゅ'], exampleWord: 'ちゅうごく', exampleReading: 'chuugoku', exampleMeaningId: 'Tiongkok', audioText: 'ちゅ' },
  { char: 'ちょ', romaji: 'cho', type: 'hiragana', category: 'youon', strokeCount: 4, strokeSteps: ['ち + ょ'], exampleWord: 'ちょっと', exampleReading: 'chotto', exampleMeaningId: 'Sebentar / Sedikit', audioText: 'ちょ' },

  { char: 'にゃ', romaji: 'nya', type: 'hiragana', category: 'youon', strokeCount: 6, strokeSteps: ['に + ゃ'], exampleWord: 'にゃーにゃー', exampleReading: 'nyaanyaa', exampleMeaningId: 'Suara meong kucing', audioText: 'にゃ' },
  { char: 'にゅ', romaji: 'nyu', type: 'hiragana', category: 'youon', strokeCount: 5, strokeSteps: ['に + ゅ'], exampleWord: 'ぎゅうにゅう', exampleReading: 'gyuunyuu', exampleMeaningId: 'Susu sapi', audioText: 'にゅ' },
  { char: 'にょ', romaji: 'nyo', type: 'hiragana', category: 'youon', strokeCount: 5, strokeSteps: ['に + ょ'], exampleWord: 'にょう', exampleReading: 'nyou', exampleMeaningId: 'Air seni / Urin (medis)', audioText: 'にょ' },

  { char: 'ひゃ', romaji: 'hya', type: 'hiragana', category: 'youon', strokeCount: 4, strokeSteps: ['ひ + ゃ'], exampleWord: 'ひゃく', exampleReading: 'hyaku', exampleMeaningId: 'Seratus (100)', audioText: 'ひゃ' },
  { char: 'ひゅ', romaji: 'hyu', type: 'hiragana', category: 'youon', strokeCount: 3, strokeSteps: ['ひ + ゅ'], exampleWord: 'ひゅうひゅう', exampleReading: 'hyuuhyuu', exampleMeaningId: 'Suara desau angin', audioText: 'ひゅ' },
  { char: 'ひょ', romaji: 'hyo', type: 'hiragana', category: 'youon', strokeCount: 3, strokeSteps: ['ひ + ょ'], exampleWord: 'ひょう', exampleReading: 'hyou', exampleMeaningId: 'Tabel / Grafik', audioText: 'ひょ' },

  { char: 'みゃ', romaji: 'mya', type: 'hiragana', category: 'youon', strokeCount: 5, strokeSteps: ['み + ゃ'], exampleWord: 'みゃく', exampleReading: 'myaku', exampleMeaningId: 'Denyut nadi (medis)', audioText: 'みゃ' },
  { char: 'みゅ', romaji: 'myu', type: 'hiragana', category: 'youon', strokeCount: 4, strokeSteps: ['み + ゅ'], exampleWord: 'みゅーじっく', exampleReading: 'myuujikku', exampleMeaningId: 'Musik', audioText: 'みゅ' },
  { char: 'みょ', romaji: 'myo', type: 'hiragana', category: 'youon', strokeCount: 4, strokeSteps: ['み + ょ'], exampleWord: 'みょうじ', exampleReading: 'myouji', exampleMeaningId: 'Nama keluarga / Marga', audioText: 'みょ' },

  { char: 'りゃ', romaji: 'rya', type: 'hiragana', category: 'youon', strokeCount: 5, strokeSteps: ['り + ゃ'], exampleWord: 'りゃく', exampleReading: 'ryaku', exampleMeaningId: 'Singkatan', audioText: 'りゃ' },
  { char: 'りゅ', romaji: 'ryu', type: 'hiragana', category: 'youon', strokeCount: 4, strokeSteps: ['り + ゅ'], exampleWord: 'りゅうがくせい', exampleReading: 'ryuugakusei', exampleMeaningId: 'Mahasiswa asing', audioText: 'りゅ' },
  { char: 'りょ', romaji: 'ryo', type: 'hiragana', category: 'youon', strokeCount: 4, strokeSteps: ['り + ょ'], exampleWord: 'りょこう', exampleReading: 'ryokou', exampleMeaningId: 'Wisata / Liburan', audioText: 'りょ' },

  { char: 'ぎゃ', romaji: 'gya', type: 'hiragana', category: 'youon', strokeCount: 9, strokeSteps: ['ぎ + ゃ'], exampleWord: 'ぎゃく', exampleReading: 'gyaku', exampleMeaningId: 'Kebalikan', audioText: 'ぎゃ' },
  { char: 'じゃ', romaji: 'ja', type: 'hiragana', category: 'youon', strokeCount: 6, strokeSteps: ['じ + ゃ'], exampleWord: 'じゃあ', exampleReading: 'jaa', exampleMeaningId: 'Kalau begitu', audioText: 'じゃ' },
  { char: 'じゅ', romaji: 'ju', type: 'hiragana', category: 'youon', strokeCount: 5, strokeSteps: ['じ + ゅ'], exampleWord: 'じゅぎょう', exampleReading: 'jugyou', exampleMeaningId: 'Pelajaran di kelas', audioText: 'じゅ' },
  { char: 'じょ', romaji: 'jo', type: 'hiragana', category: 'youon', strokeCount: 5, strokeSteps: ['じ + ょ'], exampleWord: 'じょせい', exampleReading: 'josei', exampleMeaningId: 'Wanita', audioText: 'じょ' },
  { char: 'びゃ', romaji: 'bya', type: 'hiragana', category: 'youon', strokeCount: 6, strokeSteps: ['び + ゃ'], exampleWord: 'さんびゃく', exampleReading: 'sanbyaku', exampleMeaningId: 'Tiga ratus (300)', audioText: 'びゃ' },
  { char: 'ぴゃ', romaji: 'pya', type: 'hiragana', category: 'youon', strokeCount: 5, strokeSteps: ['ぴ + ゃ'], exampleWord: 'ろっぴゃく', exampleReading: 'roppyaku', exampleMeaningId: 'Enam ratus (600)', audioText: 'ぴゃ' },
];

export const KATAKANA_DATA: KanaCharacter[] = [
  // A row
  { char: 'ア', romaji: 'a', type: 'katakana', category: 'gojuon', row: 'a', strokeCount: 2, strokeSteps: ['Garis horizontal lalu belok diagonal kiri', 'Garis vertikal miring'], exampleWord: 'アイス', exampleReading: 'aisu', exampleMeaningId: 'Es krim', audioText: 'ア' },
  { char: 'イ', romaji: 'i', type: 'katakana', category: 'gojuon', row: 'a', strokeCount: 2, strokeSteps: ['Garis miring kiri', 'Garis vertikal lurus'], exampleWord: 'インドネシア', exampleReading: 'indoneshia', exampleMeaningId: 'Indonesia', audioText: 'イ' },
  { char: 'ウ', romaji: 'u', type: 'katakana', category: 'gojuon', row: 'a', strokeCount: 3, strokeSteps: ['Titik vertikal pendek atas', 'Titik kiri', 'Garis horizontal lalu belok diagonal melengkung'], exampleWord: 'ウェブ', exampleReading: 'webu', exampleMeaningId: 'Web / Situs', audioText: 'ウ' },
  { char: 'エ', romaji: 'e', type: 'katakana', category: 'gojuon', row: 'a', strokeCount: 3, strokeSteps: ['Garis horizontal atas', 'Garis vertikal tengah', 'Garis horizontal bawah lebih panjang'], exampleWord: 'エアコン', exampleReading: 'eakon', exampleMeaningId: 'AC (Pendingin ruangan)', audioText: 'エ' },
  { char: 'オ', romaji: 'o', type: 'katakana', category: 'gojuon', row: 'a', strokeCount: 3, strokeSteps: ['Garis horizontal', 'Garis vertikal berkait kiri', 'Garis miring kanan'], exampleWord: 'オレンジ', exampleReading: 'orenji', exampleMeaningId: 'Jeruk / Oranye', audioText: 'オ' },

  // Ka row
  { char: 'カ', romaji: 'ka', type: 'katakana', category: 'gojuon', row: 'ka', strokeCount: 2, strokeSteps: ['Garis horizontal lalu belok kait ke dalam', 'Garis diagonal miring memotong'], exampleWord: 'カメラ', exampleReading: 'kamera', exampleMeaningId: 'Kamera', audioText: 'カ' },
  { char: 'キ', romaji: 'ki', type: 'katakana', category: 'gojuon', row: 'ka', strokeCount: 3, strokeSteps: ['Garis horizontal atas', 'Garis horizontal tengah', 'Garis diagonal miring'], exampleWord: 'キッチン', exampleReading: 'kicchin', exampleMeaningId: 'Dapur', audioText: 'キ' },
  { char: 'ク', romaji: 'ku', type: 'katakana', category: 'gojuon', row: 'ka', strokeCount: 2, strokeSteps: ['Garis miring pendek kiri', 'Garis horizontal lalu sapuan miring panjang ke kiri bawah'], exampleWord: 'クラス', exampleReading: 'kurasu', exampleMeaningId: 'Kelas', audioText: 'ク' },
  { char: 'ケ', romaji: 'ke', type: 'katakana', category: 'gojuon', row: 'ka', strokeCount: 3, strokeSteps: ['Garis miring kiri pendek', 'Garis horizontal tengah', 'Garis melengkung menyapu ke kiri'], exampleWord: 'ケーキ', exampleReading: 'keeki', exampleMeaningId: 'Kue', audioText: 'ケ' },
  { char: 'コ', romaji: 'ko', type: 'katakana', category: 'gojuon', row: 'ka', strokeCount: 2, strokeSteps: ['Garis horizontal lalu siku turun tegak', 'Garis horizontal bawah menyambung'], exampleWord: 'コーヒー', exampleReading: 'koohii', exampleMeaningId: 'Kopi', audioText: 'コ' },

  // Sa row
  { char: 'サ', romaji: 'sa', type: 'katakana', category: 'gojuon', row: 'sa', strokeCount: 3, strokeSteps: ['Garis horizontal panjang', 'Garis vertikal kiri pendek', 'Garis vertikal kanan melengkung halus'], exampleWord: 'サラダ', exampleReading: 'sarada', exampleMeaningId: 'Salad', audioText: 'サ' },
  { char: 'シ', romaji: 'shi', type: 'katakana', category: 'gojuon', row: 'sa', strokeCount: 3, strokeSteps: ['Titik miring atas', 'Titik miring kedua di bawahnya sejajar', 'Sapuan panjang dari kiri bawah mengarah ke kanan atas'], exampleWord: 'シャツ', exampleReading: 'shatsu', exampleMeaningId: 'Kemeja', audioText: 'シ', commonMistake: 'Hati-hati tertukar dengan ツ (tsu). シ ditarik mendatar dari bawah ke atas.' },
  { char: 'ス', romaji: 'su', type: 'katakana', category: 'gojuon', row: 'sa', strokeCount: 2, strokeSteps: ['Garis horizontal lalu belok diagonal kiri', 'Garis miring kanan'], exampleWord: 'スーパー', exampleReading: 'suupaa', exampleMeaningId: 'Supermarket', audioText: 'ス' },
  { char: 'セ', romaji: 'se', type: 'katakana', category: 'gojuon', row: 'sa', strokeCount: 2, strokeSteps: ['Garis horizontal lalu siku turun berkait', 'Garis vertikal belok siku bawah'], exampleWord: 'センター', exampleReading: 'sentaa', exampleMeaningId: 'Pusat (Center)', audioText: 'セ' },
  { char: 'ソ', romaji: 'so', type: 'katakana', category: 'gojuon', row: 'sa', strokeCount: 2, strokeSteps: ['Titik miring kiri atas', 'Sapuan panjang dari kanan atas miring ke kiri bawah'], exampleWord: 'ソファ', exampleReading: 'sofa', exampleMeaningId: 'Sofa', audioText: 'ソ', commonMistake: 'Hati-hati tertukar dengan ン (n). ソ ditarik dari atas ke bawah.' },

  // Ta row
  { char: 'タ', romaji: 'ta', type: 'katakana', category: 'gojuon', row: 'ta', strokeCount: 3, strokeSteps: ['Garis miring pendek', 'Garis horizontal lalu sapuan miring', 'Garis memotong di dalam'], exampleWord: 'タクシー', exampleReading: 'takushii', exampleMeaningId: 'Taksi', audioText: 'タ' },
  { char: 'チ', romaji: 'chi', type: 'katakana', category: 'gojuon', row: 'ta', strokeCount: 3, strokeSteps: ['Garis miring atas', 'Garis horizontal tengah', 'Garis melengkung menyapu'], exampleWord: 'チケット', exampleReading: 'chiketto', exampleMeaningId: 'Tiket', audioText: 'チ' },
  { char: 'ツ', romaji: 'tsu', type: 'katakana', category: 'gojuon', row: 'ta', strokeCount: 3, strokeSteps: ['Dua titik horizontal di atas', 'Sapuan kuat dari kanan atas turun ke kiri bawah'], exampleWord: 'ツアー', exampleReading: 'tsuaa', exampleMeaningId: 'Tur / Wisata', audioText: 'ツ', commonMistake: 'Tertukar dengan シ (shi). Titik-titik ツ lebih vertikal dan sapuan dari atas ke bawah.' },
  { char: 'テ', romaji: 'te', type: 'katakana', category: 'gojuon', row: 'ta', strokeCount: 3, strokeSteps: ['Garis horizontal atas pendek', 'Garis horizontal tengah lebih panjang', 'Garis melengkung menyapu dari tengah'], exampleWord: 'テーブル', exampleReading: 'teeburu', exampleMeaningId: 'Meja', audioText: 'テ' },
  { char: 'ト', romaji: 'to', type: 'katakana', category: 'gojuon', row: 'ta', strokeCount: 2, strokeSteps: ['Garis vertikal lurus', 'Garis miring ke kanan bawah'], exampleWord: 'トイレ', exampleReading: 'toire', exampleMeaningId: 'Toilet', audioText: 'ト' },

  // Na row
  { char: 'ナ', romaji: 'na', type: 'katakana', category: 'gojuon', row: 'na', strokeCount: 2, strokeSteps: ['Garis horizontal', 'Garis melengkung miring menyapu ke kiri'], exampleWord: 'ナイフ', exampleReading: 'naifu', exampleMeaningId: 'Pisau', audioText: 'ナ' },
  { char: 'ニ', romaji: 'ni', type: 'katakana', category: 'gojuon', row: 'na', strokeCount: 2, strokeSteps: ['Garis horizontal atas', 'Garis horizontal bawah lebih panjang (mirip kanji 2 二)'], exampleWord: 'ニュース', exampleReading: 'nyuusu', exampleMeaningId: 'Berita', audioText: 'ニ' },
  { char: 'ヌ', romaji: 'nu', type: 'katakana', category: 'gojuon', row: 'na', strokeCount: 2, strokeSteps: ['Garis horizontal lalu belok diagonal kiri', 'Garis diagonal miring memotong kanan'], exampleWord: 'ヌードル', exampleReading: 'nuudoru', exampleMeaningId: 'Mi instan / Noodle', audioText: 'ヌ' },
  { char: 'ネ', romaji: 'ne', type: 'katakana', category: 'gojuon', row: 'na', strokeCount: 4, strokeSteps: ['Titik miring atas', 'Garis vertikal kiri', 'Garis horizontal menyiku', 'Garis miring kanan'], exampleWord: 'ネクタイ', exampleReading: 'nekutai', exampleMeaningId: 'Dasi', audioText: 'ネ' },
  { char: 'ノ', romaji: 'no', type: 'katakana', category: 'gojuon', row: 'na', strokeCount: 1, strokeSteps: ['Satu goresan melengkung halus menyapu dari kanan atas ke kiri bawah'], exampleWord: 'ノート', exampleReading: 'nooto', exampleMeaningId: 'Buku catatan (Notebook)', audioText: 'ノ' },

  // Ha row
  { char: 'ハ', romaji: 'ha', type: 'katakana', category: 'gojuon', row: 'ha', strokeCount: 2, strokeSteps: ['Garis miring kiri', 'Garis miring kanan saling menjauh membentuk tenda'], exampleWord: 'ハンバーガー', exampleReading: 'hanbaagaa', exampleMeaningId: 'Hamburger', audioText: 'ハ' },
  { char: 'ヒ', romaji: 'hi', type: 'katakana', category: 'gojuon', row: 'ha', strokeCount: 2, strokeSteps: ['Garis horizontal pendek belok turun tegak', 'Garis horizontal bawah menyambung'], exampleWord: 'ヒーター', exampleReading: 'hiitaa', exampleMeaningId: 'Pemanas ruangan', audioText: 'ヒ' },
  { char: 'フ', romaji: 'fu', type: 'katakana', category: 'gojuon', row: 'ha', strokeCount: 1, strokeSteps: ['Garis horizontal pendek lalu sapuan miring ke kiri bawah'], exampleWord: 'ホテル', exampleReading: 'hoteru', exampleMeaningId: 'Hotel', audioText: 'フ' },
  { char: 'ヘ', romaji: 'he', type: 'katakana', category: 'gojuon', row: 'ha', strokeCount: 1, strokeSteps: ['Satu goresan mirip atap naik lalu turun landai (sama seperti hiragana へ)'], exampleWord: 'ヘルメット', exampleReading: 'herumetto', exampleMeaningId: 'Helm keselamatan', audioText: 'ヘ' },
  { char: 'ホ', romaji: 'ho', type: 'katakana', category: 'gojuon', row: 'ha', strokeCount: 4, strokeSteps: ['Garis horizontal', 'Garis vertikal tengah dengan kail', 'Titik miring kiri', 'Titik miring kanan'], exampleWord: 'ホワイトボード', exampleReading: 'howaitoboodo', exampleMeaningId: 'Papan tulis putih', audioText: 'ホ' },

  // Ma row
  { char: 'マ', romaji: 'ma', type: 'katakana', category: 'gojuon', row: 'ma', strokeCount: 2, strokeSteps: ['Garis horizontal belok diagonal kiri', 'Titik miring pendek kanan'], exampleWord: 'マスク', exampleReading: 'masuku', exampleMeaningId: 'Masker', audioText: 'マ' },
  { char: 'ミ', romaji: 'mi', type: 'katakana', category: 'gojuon', row: 'ma', strokeCount: 3, strokeSteps: ['Tiga garis diagonal pendek sejajar mengarah ke kanan bawah'], exampleWord: 'ミルク', exampleReading: 'miruku', exampleMeaningId: 'Susu', audioText: 'ミ' },
  { char: 'ム', romaji: 'mu', type: 'katakana', category: 'gojuon', row: 'ma', strokeCount: 2, strokeSteps: ['Garis segitiga siku terbuka', 'Titik miring kanan'], exampleWord: 'ムービー', exampleReading: 'muubii', exampleMeaningId: 'Film / Video', audioText: 'ム' },
  { char: 'メ', romaji: 'me', type: 'katakana', category: 'gojuon', row: 'ma', strokeCount: 2, strokeSteps: ['Garis miring kiri', 'Garis diagonal panjang memotong dari kanan atas'], exampleWord: 'メール', exampleReading: 'meeru', exampleMeaningId: 'Email', audioText: 'メ' },
  { char: 'モ', romaji: 'mo', type: 'katakana', category: 'gojuon', row: 'ma', strokeCount: 3, strokeSteps: ['Garis horizontal atas', 'Garis horizontal bawah lebih panjang', 'Garis vertikal siku ke kanan'], exampleWord: 'モデル', exampleReading: 'moderu', exampleMeaningId: 'Model / Teladan', audioText: 'モ' },

  // Ya row
  { char: 'ヤ', romaji: 'ya', type: 'katakana', category: 'gojuon', row: 'ya', strokeCount: 2, strokeSteps: ['Garis horizontal belok sudut siku', 'Garis miring memotong dari atas'], exampleWord: 'ヤシ', exampleReading: 'yashi', exampleMeaningId: 'Pohon kelapa', audioText: 'ヤ' },
  { char: 'ユ', romaji: 'yu', type: 'katakana', category: 'gojuon', row: 'ya', strokeCount: 2, strokeSteps: ['Garis horizontal siku turun', 'Garis horizontal bawah lebih panjang'], exampleWord: 'ユニフォーム', exampleReading: 'yunifoomu', exampleMeaningId: 'Seragam kerja', audioText: 'ユ' },
  { char: 'ヨ', romaji: 'yo', type: 'katakana', category: 'gojuon', row: 'ya', strokeCount: 3, strokeSteps: ['Garis horizontal siku turun', 'Garis horizontal tengah', 'Garis horizontal bawah'], exampleWord: 'ヨーグルト', exampleReading: 'yooguruto', exampleMeaningId: 'Yoghurt', audioText: 'ヨ' },

  // Ra row
  { char: 'ラ', romaji: 'ra', type: 'katakana', category: 'gojuon', row: 'ra', strokeCount: 2, strokeSteps: ['Garis horizontal pendek atas', 'Garis siku melengkung ke kiri'], exampleWord: 'ラジオ', exampleReading: 'rajio', exampleMeaningId: 'Radio', audioText: 'ラ' },
  { char: 'リ', romaji: 'ri', type: 'katakana', category: 'gojuon', row: 'ra', strokeCount: 2, strokeSteps: ['Garis vertikal pendek kiri', 'Garis vertikal kanan melengkung halus'], exampleWord: 'リーダー', exampleReading: 'riidaa', exampleMeaningId: 'Pemimpin / Leader', audioText: 'リ' },
  { char: 'ル', romaji: 'ru', type: 'katakana', category: 'gojuon', row: 'ra', strokeCount: 2, strokeSteps: ['Garis miring kiri', 'Garis melengkung dengan kail kanan atas'], exampleWord: 'ルール', exampleReading: 'ruuru', exampleMeaningId: 'Aturan / Peraturan', audioText: 'ル' },
  { char: 'レ', romaji: 're', type: 'katakana', category: 'gojuon', row: 'ra', strokeCount: 1, strokeSteps: ['Garis vertikal turun lalu siku mendatar ke kanan'], exampleWord: 'レストラン', exampleReading: 'resutoran', exampleMeaningId: 'Restoran', audioText: 'レ' },
  { char: 'ロ', romaji: 'ro', type: 'katakana', category: 'gojuon', row: 'ra', strokeCount: 3, strokeSteps: ['Garis vertikal kiri', 'Garis horizontal siku turun', 'Garis horizontal bawah menutup kotak'], exampleWord: 'ロビー', exampleReading: 'robii', exampleMeaningId: 'Lobi kantor/hotel', audioText: 'ロ' },

  // Wa, Wo, N
  { char: 'ワ', romaji: 'wa', type: 'katakana', category: 'gojuon', row: 'wa', strokeCount: 2, strokeSteps: ['Garis vertikal pendek kiri', 'Garis horizontal siku melengkung ke kiri bawah'], exampleWord: 'ワイン', exampleReading: 'wain', exampleMeaningId: 'Anggur (Wine)', audioText: 'ワ' },
  { char: 'ヲ', romaji: 'wo', type: 'katakana', category: 'gojuon', row: 'wa', strokeCount: 2, strokeSteps: ['Garis horizontal lalu siku melengkung', 'Garis horizontal memotong'], exampleWord: 'ヲ', exampleReading: 'o', exampleMeaningId: 'Sangat jarang dalam katakana modern', audioText: 'ヲ' },
  { char: 'ン', romaji: 'n', type: 'katakana', category: 'gojuon', row: 'wa', strokeCount: 2, strokeSteps: ['Titik miring', 'Sapuan dari kiri bawah naik ke kanan atas'], exampleWord: 'パン', exampleReading: 'pan', exampleMeaningId: 'Roti', audioText: 'ン', commonMistake: 'Tertukar dengan ソ (so). ン ditarik mendatar dari bawah ke atas.' },

  // Katakana Dakuten & Handakuten (Populer)
  { char: 'ガ', romaji: 'ga', type: 'katakana', category: 'dakuten', strokeCount: 4, strokeSteps: ['カ + tenten'], exampleWord: 'ガス', exampleReading: 'gasu', exampleMeaningId: 'Gas kompor', audioText: 'ガ' },
  { char: 'ギ', romaji: 'gi', type: 'katakana', category: 'dakuten', strokeCount: 5, strokeSteps: ['キ + tenten'], exampleWord: 'ギター', exampleReading: 'gitaa', exampleMeaningId: 'Gitar', audioText: 'ギ' },
  { char: 'グ', romaji: 'gu', type: 'katakana', category: 'dakuten', strokeCount: 4, strokeSteps: ['ク + tenten'], exampleWord: 'グループ', exampleReading: 'guruupu', exampleMeaningId: 'Grup / Kelompok', audioText: 'グ' },
  { char: 'ゲ', romaji: 'ge', type: 'katakana', category: 'dakuten', strokeCount: 5, strokeSteps: ['ケ + tenten'], exampleWord: 'ゲーム', exampleReading: 'geemu', exampleMeaningId: 'Game', audioText: 'ゲ' },
  { char: 'ゴ', romaji: 'go', type: 'katakana', category: 'dakuten', strokeCount: 4, strokeSteps: ['コ + tenten'], exampleWord: 'ゴミ箱', exampleReading: 'gomibako', exampleMeaningId: 'Tempat sampah', audioText: 'ゴ' },

  { char: 'バ', romaji: 'ba', type: 'katakana', category: 'dakuten', strokeCount: 4, strokeSteps: ['ハ + tenten'], exampleWord: 'バス', exampleReading: 'basu', exampleMeaningId: 'Bus', audioText: 'バ' },
  { char: 'ビ', romaji: 'bi', type: 'katakana', category: 'dakuten', strokeCount: 4, strokeSteps: ['ヒ + tenten'], exampleWord: 'ビル', exampleReading: 'biru', exampleMeaningId: 'Gedung perkantoran', audioText: 'ビ' },
  { char: 'ブ', romaji: 'bu', type: 'katakana', category: 'dakuten', strokeCount: 3, strokeSteps: ['フ + tenten'], exampleWord: 'ブログ', exampleReading: 'burogu', exampleMeaningId: 'Blog', audioText: 'ブ' },
  { char: 'ベ', romaji: 'be', type: 'katakana', category: 'dakuten', strokeCount: 3, strokeSteps: ['ヘ + tenten'], exampleWord: 'ベッド', exampleReading: 'beddo', exampleMeaningId: 'Tempat tidur', audioText: 'ベ' },
  { char: 'ボ', romaji: 'bo', type: 'katakana', category: 'dakuten', strokeCount: 6, strokeSteps: ['ホ + tenten'], exampleWord: 'ボールペン', exampleReading: 'boorupen', exampleMeaningId: 'Pulpen', audioText: 'ボ' },

  { char: 'パ', romaji: 'pa', type: 'katakana', category: 'handakuten', strokeCount: 3, strokeSteps: ['ハ + maru'], exampleWord: 'パンコン', exampleReading: 'pasokon', exampleMeaningId: 'Komputer / Laptop', audioText: 'パ' },
  { char: 'ピ', romaji: 'pi', type: 'katakana', category: 'handakuten', strokeCount: 3, strokeSteps: ['ヒ + maru'], exampleWord: 'ピアノ', exampleReading: 'piano', exampleMeaningId: 'Piano', audioText: 'ピ' },
  { char: 'プ', romaji: 'pu', type: 'katakana', category: 'handakuten', strokeCount: 2, strokeSteps: ['フ + maru'], exampleWord: 'プール', exampleReading: 'puuru', exampleMeaningId: 'Kolam renang', audioText: 'プ' },
  { char: 'ペ', romaji: 'pe', type: 'katakana', category: 'handakuten', strokeCount: 2, strokeSteps: ['ヘ + maru'], exampleWord: 'ペン', exampleReading: 'pen', exampleMeaningId: 'Pena', audioText: 'ペ' },
  { char: 'ポ', romaji: 'po', type: 'katakana', category: 'handakuten', strokeCount: 5, strokeSteps: ['ホ + maru'], exampleWord: 'ポスト', exampleReading: 'posuto', exampleMeaningId: 'Kotak pos', audioText: 'ポ' },
];

export const KANA_RULES_INFO = {
  sokuon: {
    title: 'Sokuon (っ / ッ) — Konsonan Ganda / Hentian Nada',
    description: 'Huruf "tsu" kecil digunakan untuk menggandakan konsonan berikutnya (seperti k, s, t, p) atau membuat jeda henti sesaat (glottal stop).',
    examples: [
      { word: 'きって (切手)', romaji: 'kitte', meaning: 'Prangko', note: 'Ada jeda henti sebelum bunyi "te"' },
      { word: 'ざっし (雑誌)', romaji: 'zasshi', meaning: 'Majalah', note: 'Bunyi "s" ditahan rangkap' },
      { word: 'がっこう (学校)', romaji: 'gakkou', meaning: 'Sekolah', note: 'Jeda henti sebelum "kou"' },
      { word: 'ベッド', romaji: 'beddo', meaning: 'Kasur', note: 'Katakana tsu kecil (ッ)' }
    ]
  },
  longVowels: {
    title: 'Bunyi Panjang (Chouon / 長音)',
    description: 'Diucapkan dua ketukan panjang. Panjang pendek vokal dalam bahasa Jepang membedakan arti kata secara fatal!',
    examples: [
      { word: 'おばさん (obasan) = Tante', contrast: 'おばあさん (obaasan) = Nenek (vokal "a" dipanjangkan)' },
      { word: 'おじさん (ojisan) = Paman', contrast: 'おじいさん (ojiisan) = Kakek (vokal "i" dipanjangkan)' },
      { word: 'ゆき (yuki) = Salju', contrast: 'ゆうき (yuuki) = Keberanian (vokal "u" dipanjangkan)' },
      { word: 'Katakana menggunakan tanda minus panjang (ー)', contrast: 'コーヒー (koohii = kopi), ノート (nooto = catatan)' }
    ]
  },
  commonMistakes: [
    { title: 'Partikel は dibaca "wa"', desc: 'Bila berfungsi sebagai penanda topik kalimat, huruf は dibaca "wa", BUKAN "ha". Contoh: わたしは (watashi wa).' },
    { title: 'Partikel へ dibaca "e"', desc: 'Bila menunjukkan arah tujuan gerak, huruf へ dibaca "e", BUKAN "he". Contoh: 日本へ行きます (Nihon e ikimasu).' },
    { title: 'Partikel を dibaca "o"', desc: 'Huruf を hanya dipakai sebagai partikel objek kalimat dan diucapkan persis seperti vokal "o". Contoh: 水を飲む (mizu o nomu).' },
    { title: 'Perbedaan Simetris Katakana シ vs ツ', desc: 'シ (shi): goresan ditarik mendatar dari kiri bawah ke kanan atas. ツ (tsu): goresan ditarik curam dari kanan atas turun ke bawah.' },
    { title: 'Perbedaan Katakana ソ vs ン', desc: 'ソ (so): ditarik dari kanan atas ke bawah. ン (n): ditarik mendatar dari kiri bawah menyapu ke atas.' }
  ]
};
