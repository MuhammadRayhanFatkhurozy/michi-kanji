/**
 * Speaking Practice Data & Pronunciation Guidance
 * Designed for Indonesian learners with pitch accent notes, mora rhythm,
 * and conversational context.
 */

import { SpeakingItem } from '../types';

export const SPEAKING_DATA: SpeakingItem[] = [
  {
    id: 'spk-1',
    category: 'Perkenalan Diri (Jiko Shoukai)',
    level: 'N5',
    sentence: '初めまして。インドネシアから参りました。よろしくお願いいたします。',
    furigana: 'はじめまして。インドネシア から まいりました。よろしく おねがいいたします。',
    romaji: 'Hajimemashite. Indoneshia kara mairimashita. Yoroshiku onegai itashimasu.',
    meaningId: 'Senang berkenalan dengan Anda. Saya datang dari Indonesia. Mohon bimbingan dan kerja samanya.',
    context: 'Wawancara kerja Tokutei Ginou / Magang di hadapan manajer Jepang.',
    pronunciationNotes: 'Kata "参りました (mairimashita)" adalah bentuk merendah (kenjougo) dari 来ました. Ucapkan dengan nada sopan dan bungkukkan sedikit kepala saat mengucapkan kata penutup.'
  },
  {
    id: 'spk-2',
    category: 'Etika Kerja & Hou-Ren-So',
    level: 'N4',
    sentence: '課長、先ほどの書類の確認をお願いできますでしょうか。',
    furigana: 'かちょう、さきほど の しょるい の かくにん を おねがい できます でしょう か。',
    romaji: 'Kachou, sakihodo no shorui no kakunin o onegai dekimasu deshou ka.',
    meaningId: 'Pak Kepala Seksi, bolehkah saya meminta tolong untuk memeriksa dokumen yang tadi?',
    context: 'Meminta atasan memeriksa berkas atau laporan kerja tanpa kesan mendesak.',
    pronunciationNotes: 'Intonasi di kata "〜でしょうか (deshou ka)" dinaikkan sedikit secara halus. Berikan jeda sejenak setelah kata panggilan "課長 (kachou)".'
  },
  {
    id: 'spk-3',
    category: 'Kaigo / Caregiver Lansia',
    level: 'N4',
    sentence: '足元にお気をつけください。ゆっくり歩きましょう。',
    furigana: 'あしもと に おき を つけ ください。ゆっくり あるきましょう。',
    romaji: 'Ashimoto ni oki o tsuke kudasai. Yukkuri arukimashou.',
    meaningId: 'Hati-hati dengan langkah kaki Anda. Mari kita berjalan pelan-pelan.',
    context: 'Mendampingi lansia berjalan menuju ruang makan atau ruang santai.',
    pronunciationNotes: 'Karakter vokal "っ" pada kata "ゆっくり (yukkuri)" membutuhkan jeda henti 1 mora ketukan. Nada bicara harus tenang, tidak terdengar tergesa-gesa.'
  },
  {
    id: 'spk-4',
    category: 'Restoran & Belanja',
    level: 'N5',
    sentence: 'すみません、おすすめの定食はどれですか。',
    furigana: 'すみません、おすすめ の ていしょく は どれ です か。',
    romaji: 'Sumimasen, osusume no teishoku wa dore desu ka.',
    meaningId: 'Permisi, set menu makanan (teishoku) yang direkomendasikan yang mana ya?',
    context: 'Bertanya ramah kepada pelayan restoran Jepang.',
    pronunciationNotes: 'Kata "定食 (teishoku)" memiliki vokal panjang "ei" yang diucapkan seperti "ee" panjang (teeshoku).'
  },
  {
    id: 'spk-5',
    category: 'JLPT N3 / Diskusi Bisnis',
    level: 'N3',
    sentence: '納期に間に合わせるために、作業の優先順位を見直す必要があります。',
    furigana: 'のうき に まにあわせる ため に、さぎょう の ゆうせん じゅんい を みなおす ひつよう が あります。',
    romaji: 'Nouki ni maniawaseru tame ni, sagyou no yuusen jun-i o minaosu hitsuyou ga arimasu.',
    meaningId: 'Agar tepat waktu dengan tenggat pengiriman, kita perlu meninjau kembali skala prioritas pekerjaan.',
    context: 'Diskusi pemecahan masalah (kaizen) di tempat kerja manufaktur atau perkantoran.',
    pronunciationNotes: 'Perhatikan aksen nada pada "優先順位 (yuusen jun-i)" dan jangan menelan konsonan "k" pada kata "納期 (nouki)".'
  }
];
