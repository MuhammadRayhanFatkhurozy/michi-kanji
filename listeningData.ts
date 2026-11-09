/**
 * Listening Comprehension Scenarios & Shadowing Exercises
 * Includes slow speed controls (0.5x, 0.75x, 1.0x), sentence-by-sentence audio,
 * audio demo asset support, and interactive comprehension tests.
 */

import { ListeningItem } from '../types';

export const SAMPLE_AUDIO_URL = 'https://www.aidocmaker.com/g0/audio?name=c78df95768254536a9393415130ac249&utm_source=chatgpt.com';

export const LISTENING_DATA: ListeningItem[] = [
  {
    id: 'listen-1',
    title: 'Stasiun Kereta: Menanyakan Jadwal & Jalur',
    scenario: 'Kamu berada di Stasiun Shinjuku dan bertanya kepada petugas stasiun (eki-in) tentang kereta berikutnya ke Bandara Haneda.',
    level: 'N5',
    audioSpeedOptions: [0.5, 0.75, 1.0],
    audioAssetUrl: SAMPLE_AUDIO_URL,
    dialogue: [
      {
        speaker: 'Penumpang',
        japanese: 'すみません、羽田空港行きの電車は何番線ですか。',
        furigana: 'すみません、はねだ くうこう ゆき の でんしゃ は なんばんせん です か。',
        romaji: 'Sumimasen, Haneda kuukou yuki no densha wa nanbansen desu ka.',
        indonesian: 'Permisi, kereta jurusan Bandara Haneda ada di peron nomor berapa?'
      },
      {
        speaker: 'Petugas Stasiun',
        japanese: '羽田空港行きですね。四番線です。次は十分後に出ますよ。',
        furigana: 'はねだ くうこう ゆき です ね。よんばんせん です。つぎ は じゅっぷんご に でます よ。',
        romaji: 'Haneda kuukou yuki desu ne. Yonbansen desu. Tsugi wa juppungo ni demasu yo.',
        indonesian: 'Jurusan Bandara Haneda ya. Di peron nomor empat. Kereta berikutnya berangkat 10 menit lagi.'
      },
      {
        speaker: 'Penumpang',
        japanese: '四番線ですね。ありがとうございます！',
        furigana: 'よんばんせん です ね。ありがとうございます！',
        romaji: 'Yonbansen desu ne. Arigatou gozaimasu!',
        indonesian: 'Peron nomor 4 ya. Terima kasih banyak!'
      }
    ],
    questions: [
      {
        question: 'Kereta menuju Bandara Haneda berada di peron nomor berapa?',
        options: ['Peron 2', 'Peron 3', 'Peron 4 (四番線)', 'Peron 5'],
        correctIndex: 2,
        explanation: 'Petugas stasiun mengatakan "四番線です (Yonbansen desu)" yang berarti peron nomor empat.'
      },
      {
        question: 'Kapan kereta berikutnya akan berangkat?',
        options: ['5 menit lagi', '10 menit lagi (十分後)', '30 menit lagi', 'Sudah berangkat'],
        correctIndex: 1,
        explanation: 'Petugas menjelaskan "次は十分後に出ます (Tsugi wa juppungo ni demasu)".'
      }
    ],
    shadowingTips: 'Dengarkan jeda setelah kata "すみません" dan intonasi naik di akhir pertanyaan "何番線ですか (nanbansen desu ka?)".'
  },
  {
    id: 'listen-2',
    title: 'Situasi Tokutei Ginou Kaigo: Panggilan Pagi Hari',
    scenario: 'Seorang perawat caregiver Indonesia menyapa pasien lansia bernama Nenek Sato di kamar fasilitas panti.',
    level: 'N4',
    audioSpeedOptions: [0.5, 0.75, 1.0],
    dialogue: [
      {
        speaker: 'Caregiver',
        japanese: '佐藤様、おはようございます。よく眠れましたか。',
        furigana: 'さとうさま、おはようございます。よく ねむれました か。',
        romaji: 'Satou-sama, ohayou gozaimasu. Yoku nemuremashita ka.',
        indonesian: 'Nenek Sato, selamat pagi. Apakah semalam tidurnya nyenyak?'
      },
      {
        speaker: 'Nenek Sato',
        japanese: 'おはよう。うん、ぐっすり眠れたよ。今日はいい天気だね。',
        furigana: 'おはよう。うん、ぐっすり ねむれた よ。きょう は いい てんき だ ね。',
        romaji: 'Ohayou. Un, gussuri nemureta yo. Kyou wa ii tenki da ne.',
        indonesian: 'Selamat pagi. Ya, tidurnya sangat nyenyak. Hari ini cuacanya cerah ya.'
      },
      {
        speaker: 'Caregiver',
        japanese: 'はい、青空がとても綺麗ですよ。カーテンを開けますね。',
        furigana: 'はい、あおぞら が とても きれい です よ。カーテン を あけます ね。',
        romaji: 'Hai, aozora ga totemo kirei desu yo. Kaaten o akemasu ne.',
        indonesian: 'Iya, langit birunya sangat indah. Saya buka tirai jendelanya ya.'
      }
    ],
    questions: [
      {
        question: 'Bagaimana kondisi tidur Nenek Sato semalam?',
        options: ['Tidak bisa tidur', 'Tidur sangat nyenyak (ぐっすり眠れた)', 'Bermimpi buruk', 'Merasa sakit kepala'],
        correctIndex: 1,
        explanation: 'Kata "ぐっすり眠れた (gussuri nemureta)" berarti tidur lelap dan nyenyak.'
      }
    ],
    shadowingTips: 'Ucapkan kata "開けますね (akemasu ne)" dengan nada lembut dan intonasi ramah khas perawat di Jepang.'
  },
  {
    id: 'listen-3',
    title: 'JLPT N3 Dokkai/Choukai: Penjelasan Rapat Singkat',
    scenario: 'Manajer divisi produksi memberikan pengumuman keselamatan kerja sebelum shift pagi dimulai.',
    level: 'N3',
    audioSpeedOptions: [0.5, 0.75, 1.0],
    dialogue: [
      {
        speaker: 'Manajer',
        japanese: '本日の朝礼を始めます。最近、作業中の不注意によるヒヤリハットが増えています。',
        furigana: 'ほんじつ の ちょうれい を はじめます。さいきん、さぎょうちゅう の ふちゅうい による ヒヤリハット が ふえて います。',
        romaji: 'Honjitsu no chourei o hajimemasu. Saikin, sagyouchuu no fuchuui ni yoru hiyarihatto ga fuete imasu.',
        indonesian: 'Kita mulai apel pagi hari ini. Akhir-akhir ini, insiden nyaris celaka (hiyarihatto) akibat kurang teliti saat bekerja meningkat.'
      },
      {
        speaker: 'Manajer',
        japanese: '機械を操作する際は、必ず指差呼称で確認してください。今日も一日、ご安全に！',
        furigana: 'きかい を そうさ する さい は、かならず ゆびさし こしょう で かくにん して ください。きょう も いちにち、ごあんぜん に！',
        romaji: 'Kikai o sousa suru sai wa, kanarazu yubisashi koshou de kakunin shite kudasai. Kyou mo ichinichi, go-anzen ni!',
        indonesian: 'Saat mengoperasikan mesin, pastikan mengecek dengan metode tunjuk-sebut (yubisashi koshou). Selamat bertugas dengan aman hari ini!'
      }
    ],
    questions: [
      {
        question: 'Tindakan apa yang diwajibkan manajer saat mengoperasikan mesin?',
        options: ['Bekerja lebih cepat', 'Metode tunjuk dan sebut (指差呼称 - Yubisashi koshou)', 'Mematikan alarm mesin', 'Tidak perlu lapor'],
        correctIndex: 1,
        explanation: 'Yubisashi koshou (pointing and calling) adalah standar keselamatan industri pabrik Jepang.'
      }
    ],
    shadowingTips: 'Perhatikan ritme kalimat bisnis formal Jepang (keigo/kenjougo ringan) dengan penekanan pada frasa instruksi "必ず〜してください".'
  }
];
