/**
 * Japanese Cultural Facts & Daily Trivia (日本の豆知識)
 * Curated authentic trivia regarding Japanese lifestyle, manners, workplace, and cultural heritage.
 */

export interface CulturalFact {
  id: string;
  category: 'Budaya & Etika' | 'Dunia Kerja' | 'Kaigo & Pelayanan' | 'Kehidupan Sehari-hari' | 'Tradisi Unik';
  titleJapanese: string;
  titleRomaji: string;
  titleId: string;
  fact: string;
  detailId: string;
  iconTag: string;
}

export const CULTURAL_FACTS: CulturalFact[] = [
  {
    id: 'fact-1',
    category: 'Budaya & Etika',
    titleJapanese: 'お辞儀 (Ojigi)',
    titleRomaji: 'Ojigi',
    titleId: 'Tiga Sudut Membungkuk Hormat',
    fact: 'Di Jepang, membungkuk (Ojigi) memiliki derajat kemiringan berbeda: 15° (Eshaku) untuk sapaan kasual, 30° (Keirei) untuk rekan kerja dan tamu, serta 45° (Saikeirei) untuk rasa hormat mendalam atau permintaan maaf tulus.',
    detailId: 'Saat membungkuk, punggung tetap lurus dan pandangan mata turun mengikuti kemiringan tubuh, bukan menatap mata lawan bicara.',
    iconTag: '🙇'
  },
  {
    id: 'fact-2',
    category: 'Dunia Kerja',
    titleJapanese: '報連相 (Hou-Ren-So)',
    titleRomaji: 'Hou-Ren-So',
    titleId: 'Tiga Pilar Emas Tempat Kerja Jepang',
    fact: 'Hou-Ren-So adalah singkatan dari Houkoku (Lapor), Renraku (Informasikan), dan Soudan (Konsultasikan). Prinsip ini wajib diterapkan untuk mencegah kesalahpahaman kerja di kantor dan pabrik Jepang.',
    detailId: 'Kata "Hourenso" juga merupakan permainan kata dalam bahasa Jepang yang berarti sayur bayam.',
    iconTag: '💼'
  },
  {
    id: 'fact-3',
    category: 'Kehidupan Sehari-hari',
    titleJapanese: '自動販売機 (Jidouhanbaiki)',
    titleRomaji: 'Jidouhanbaiki',
    titleId: 'Negeri Mesin Penjual Otomatis Terpadat di Dunia',
    fact: 'Jepang memiliki lebih dari 4 juta vending machine aktif. Hebatnya, selain minuman dingin (biru), mesin ini juga menjual minuman kaleng hangat (merah) seperti kopi dan teh susu di musim dingin.',
    detailId: 'Tingkat kriminalitas yang sangat rendah dan rasa saling percaya masyarakat membuat mesin ini aman diletakkan di gang terpencil sekalipun.',
    iconTag: '🥫'
  },
  {
    id: 'fact-4',
    category: 'Budaya & Etika',
    titleJapanese: '印鑑 / 判子 (Inkan / Hanko)',
    titleRomaji: 'Inkan / Hanko',
    titleId: 'Stempel Resmi Pengganti Tanda Tangan',
    fact: 'Di Jepang, stempel nama pribadi (Hanko) menggantikan tanda tangan tangan untuk urusan bank, kontrak kerja, hingga penerimaan paket kiriman pos di depan pintu rumah.',
    detailId: 'Setiap pekerja asing di Jepang dianjurkan membuat Hanko dengan huruf Katakana untuk keperluan administrasi resmi.',
    iconTag: '💮'
  },
  {
    id: 'fact-5',
    category: 'Kehidupan Sehari-hari',
    titleJapanese: 'いただきます (Itadakimasu)',
    titleRomaji: 'Itadakimasu',
    titleId: 'Rasa Syukur Mendalam Sebelum Menyantap Makanan',
    fact: 'Secara harfiah berarti "Saya menerima dengan rendah hati". Ucapan ini bukan sekadar selamat makan, melainkan wujud terima kasih kepada petani, nelayan, koki, serta nyawa makhluk hidup yang menjadi hidangan.',
    detailId: 'Diucapkan dengan merapatkan kedua telapak tangan di depan dada sebelum sumpit diangkat.',
    iconTag: '🥢'
  },
  {
    id: 'fact-6',
    category: 'Kaigo & Pelayanan',
    titleJapanese: 'おもてなし (Omotenashi)',
    titleRomaji: 'Omotenashi',
    titleId: 'Filosofi Keramahan Tulus Tanpa Pamrih',
    fact: 'Omotenashi adalah konsep pelayanan sepenuh hati tanpa mengharapkan imbalan. Karena prinsip inilah budaya memberi uang tip (tipping) tidak ada di Jepang dan bahkan bisa dianggap kurang sopan.',
    detailId: 'Dalam bidang Kaigo (Caregiver), Omotenashi diterjemahkan sebagai kepedulian tulus terhadap kenyamanan dan privasi para lansia.',
    iconTag: '🍵'
  },
  {
    id: 'fact-7',
    category: 'Dunia Kerja',
    titleJapanese: '指差呼称 (Yubisashi Koshou)',
    titleRomaji: 'Yubisashi Koshou',
    titleId: 'Tunjuk dan Sebut demi Nol Kecelakaan Kerja',
    fact: 'Metode menunjuk objek kerja dengan jari telunjuk sambil bersuara lantang: "[Objek]... Yoshi! (Aman!)". Riset membuktikan metode ini menurunkan kesalahan kerja manusia hingga 85%.',
    detailId: 'Diterapkan secara ketat oleh masinis Shinkansen, perawat medis rumah sakit, teknisi pabrik, dan pekerja konstruksi di Jepang.',
    iconTag: '👉'
  },
  {
    id: 'fact-8',
    category: 'Kehidupan Sehari-hari',
    titleJapanese: 'ごみ分別 (Gomi Bunbetsu)',
    titleRomaji: 'Gomi Bunbetsu',
    titleId: 'Sistem Pemilahan Sampah Paling Disiplin',
    fact: 'Di Jepang, tong sampah umum sangat jarang ditemukan di jalanan. Warga membawa sampah sendiri pulang ke rumah, lalu memilahnya menjadi: sampah bakar, non-bakar, botol PET, kaleng, dan kardus.',
    detailId: 'Setiap distrik kota memiliki kantong sampah khusus dan kalender hari pembuangan yang harus dipatuhi secara tertib.',
    iconTag: '♻️'
  },
  {
    id: 'fact-9',
    category: 'Budaya & Etika',
    titleJapanese: '靴を脱ぐ (Kutsu o nugu)',
    titleRomaji: 'Kutsu o nugu',
    titleId: 'Genkan: Batas Kebersihan Rumah Jepang',
    fact: 'Di area pintu masuk (Genkan), sepatu wajib dilepas menghadap keluar ke arah pintu sebelum melangkah naik ke lantai kayu atau tatami rumah.',
    detailId: 'Tradisi ini menjaga rumah selalu higienis karena orang Jepang sering duduk dan menggelar kasur futon langsung di atas lantai tatami.',
    iconTag: '👟'
  },
  {
    id: 'fact-10',
    category: 'Tradisi Unik',
    titleJapanese: '乾杯 (Kanpai)',
    titleRomaji: 'Kanpai',
    titleId: 'Etika Minum Bersama Rekan Kerja',
    fact: 'Saat acara minum bersama (Nomikai), jangan minum duluan sebelum semua gelas terisi dan bersulang "Kanpai!". Posisi gelas orang yang lebih muda atau bawahan biasanya sedikit lebih rendah dari gelas atasan.',
    detailId: 'Menuangkan minuman ke gelas rekan kerja adalah bentuk perhatian dan penghormatan dalam etika pergaulan profesional.',
    iconTag: '🍶'
  },
  {
    id: 'fact-11',
    category: 'Kehidupan Sehari-hari',
    titleJapanese: 'お風呂 (Ofuro)',
    titleRomaji: 'Ofuro',
    titleId: 'Mandi Berendam: Cuci Badan Dahulu di Luar Bak',
    fact: 'Sebelum masuk ke bak air panas (Ofuro atau Onsen), Anda wajib mandi sabun dan keramas hingga bersih di area duduk luar bak. Air di dalam bak hanya untuk relaksasi dan digunakan bersama keluarga.',
    detailId: 'Mandi air hangat di malam hari diyakini melancarkan peredaran darah dan menyegarkan otot setelah seharian bekerja keras.',
    iconTag: '♨️'
  },
  {
    id: 'fact-12',
    category: 'Budaya & Etika',
    titleJapanese: '名刺交換 (Meishi Koukan)',
    titleRomaji: 'Meishi Koukan',
    titleId: 'Ritual Sakral Penyerahan Kartu Nama Bisnis',
    fact: 'Kartu nama (Meishi) dianggap cerminan dari kehormatan pemiliknya. Meishi harus diserahkan dan diterima dengan kedua belah tangan, dibaca dengan seksama, dan diletakkan di atas meja, tidak boleh langsung dimasukkan ke saku celana.',
    detailId: 'Jangan pernah menulis catatan apa pun di atas kartu nama rekan yang baru saja Anda terima.',
    iconTag: '📇'
  }
];
