/* Kont Technology — shared data + EN/TR switching */
window.KONT = (function () {
  var APPS = [
    { id: 'bubblelevel', type: 'app', color: '#44d389', play: 'com.kont.bubblelevel',
      name: { en: 'Bubble Level: Spirit Level', tr: 'Su Terazisi' },
      short: { en: 'Level surfaces and measure angles.', tr: 'Yüzeyleri dengeleyin, açıları ölçün.' } },
    { id: 'compass', type: 'app', color: '#e1a143', play: 'com.kont.compass',
      name: { en: 'Compass: Digital Compass', tr: 'Pusula' },
      short: { en: 'A clean compass with a clear heading.', tr: 'Net yön gösteren sade bir pusula.' } },
    { id: 'soundmeter', type: 'app', color: '#eb4445', play: 'com.kont.soundmeter',
      name: { en: 'Sound Meter: Decibel Meter', tr: 'Desibel Ölçer' },
      short: { en: 'Measure noise levels in decibels.', tr: 'Gürültü seviyesini desibel olarak ölçün.' } },
    { id: 'pdftools', type: 'app', color: '#2d5c8b', play: 'com.kont.pdftools',
      name: { en: 'PDF Tools: Merge, Sign, Split', tr: 'PDF Araçları: Birleştir, Böl' },
      short: { en: 'PDF reader and toolkit. Fully offline, no watermark.', tr: 'PDF okuyucu ve araç kutusu. Çevrimdışı, filigransız.' } },
    { id: 'qibla', type: 'app', color: '#bda74e', play: null,
      name: { en: 'Qibla Compass: Qibla Finder', tr: 'Kıble Pusulası' },
      short: { en: 'Find the Qibla without location permission.', tr: 'Konum izni olmadan kıbleyi bulun.' } },
    { id: 'tuner', type: 'app', color: '#e3a32f', play: null,
      name: { en: 'Tuner & Metronome: Guitar', tr: 'Akort ve Metronom: Bağlama' },
      short: { en: 'Guitar, bass, ukulele and saz tuner plus a metronome.', tr: 'Bağlama, gitar, ud, keman akordu ve metronom.' } },
    { id: 'tasbih', type: 'app', color: '#deb561', play: null,
      name: { en: 'Tasbih Counter: Dhikr Tally', tr: 'Zikirmatik: Dijital Tesbih' },
      short: { en: 'Count dhikr with volume keys, even in your pocket.', tr: 'Ses tuşuyla, cepte bile zikir sayın.' } },
    { id: 'phonetest', type: 'app', color: '#36c392', play: null,
      name: { en: 'Phone Test: Hardware Check', tr: 'Telefon Testi: 2. El Kontrol' },
      short: { en: 'Test 26 phone parts before buying used.', tr: 'İkinci el telefonun 26 parçasını test edin.' } },
    { id: 'photoresizer', type: 'app', color: '#24337d', play: null,
      name: { en: 'Photo Resizer: Compress to KB', tr: 'Fotoğraf Küçültücü: KB Ayarla' },
      short: { en: 'Shrink photos to an exact size in KB.', tr: 'Fotoğrafı istenen KB boyutuna küçültün.' } },
    { id: 'hushbrook', type: 'game', color: '#2e8a6e', play: null,
      name: { en: 'Hushbrook: Mahjong Solitaire', tr: 'Hushbrook: Mahjong Solitaire' },
      short: { en: 'Calm Mahjong by the quiet water. One tap, a new board every day.', tr: 'Sakin suyun kıyısında Mahjong. Tek dokunuş, her gün yeni tahta.' } },
    { id: 'arrowly', type: 'game', color: '#5ce1e6', play: null,
      name: { en: 'Arrowly: Arrow Puzzle', tr: 'Arrowly: Ok Bulmacası' },
      short: { en: 'Tap an arrow, clear the board. Fair puzzles, eight themes.', tr: 'Oka dokun, tahtayı temizle. Adil bulmacalar, sekiz tema.' } },
    { id: 'brickwell', type: 'game', color: '#212d7d', play: null,
      name: { en: 'Brickwell: Fair Block Puzzle', tr: 'Brickwell: Adil Blok Bulmaca' },
      short: { en: 'Drag blocks, clear lines. Every set of pieces always fits, with undo.', tr: 'Blokları sürükle, satırları temizle. Gelen her set sığar, geri al var.' } },
    { id: 'starwise', type: 'game', color: '#fbd173', play: null,
      name: { en: 'Starwise: Star Battle Logic', tr: 'Starwise: Mantık Bulmacası' },
      short: { en: 'Calm, fair logic puzzles under the stars. No guessing.', tr: 'Yıldızların altında sakin, adil mantık bulmacaları.' } }
  ];

  var STR = {
    en: {
      title: 'Kont Technology', role: 'Android developer',
      tagline: 'Small, honest utilities and puzzles. No accounts, no sign-in.',
      apps: 'Apps', game: 'Game', games: 'Games', privacy: 'Privacy',
      appsSub: 'Simple tools that do one job well.',
      gamesSub: 'Calm puzzles for a quiet moment.',
      privacySub: 'Every app has its own privacy policy.',
      get: 'Get', soon: 'Soon', comingSoon: 'Coming soon', onPlay: 'On Google Play',
      policy: 'Privacy policy', open: 'Open',
      dataQ: 'Questions about your data? Write to',
      contact: 'Contact', all: 'All', featured: 'Featured', live: 'Live',
      noAccounts: 'No accounts', offline: 'Works offline', noSignIn: 'No sign-in', light: 'Lightweight',
      scroll: 'Explore', madeWith: 'Made with care in Türkiye'
    },
    tr: {
      title: 'Kont Technology', role: 'Android geliştiricisi',
      tagline: 'Küçük, dürüst yardımcı uygulamalar ve bulmacalar. Hesap yok, giriş yok.',
      apps: 'Uygulamalar', game: 'Oyun', games: 'Oyunlar', privacy: 'Gizlilik',
      appsSub: 'Tek bir işi iyi yapan sade araçlar.',
      gamesSub: 'Sakin anlar için dingin bulmacalar.',
      privacySub: 'Her uygulamanın kendi gizlilik politikası var.',
      get: 'Yükle', soon: 'Yakında', comingSoon: 'Çok yakında', onPlay: "Google Play'de",
      policy: 'Gizlilik politikası', open: 'Aç',
      dataQ: 'Verilerinizle ilgili sorularınız için:',
      contact: 'İletişim', all: 'Tümü', featured: 'Öne çıkanlar', live: 'Yayında',
      noAccounts: 'Hesap yok', offline: 'Çevrimdışı', noSignIn: 'Giriş yok', light: 'Hafif',
      scroll: 'Keşfet', madeWith: "Türkiye'de özenle yapıldı"
    }
  };

  function initialLang() {
    try { var s = localStorage.getItem('kont-lang'); if (s === 'en' || s === 'tr') return s; } catch (e) {}
    return (navigator.language || 'en').toLowerCase().indexOf('tr') === 0 ? 'tr' : 'en';
  }

  var lang = initialLang(), listeners = [];

  function t(key) { return (STR[lang] && STR[lang][key]) || STR.en[key] || key; }
  function playUrl(a) { return 'https://play.google.com/store/apps/details?id=' + a.play + (lang === 'tr' ? '&hl=tr' : '&hl=en'); }

  function apply() {
    document.documentElement.lang = lang;
    [].forEach.call(document.querySelectorAll('[data-i18n]'), function (el) { el.textContent = t(el.getAttribute('data-i18n')); });
    [].forEach.call(document.querySelectorAll('[data-lang]'), function (b) {
      b.setAttribute('aria-pressed', b.getAttribute('data-lang') === lang);
    });
    listeners.forEach(function (fn) { fn(lang); });
  }

  function setLang(l) {
    lang = l;
    try { localStorage.setItem('kont-lang', l); } catch (e) {}
    apply();
  }

  document.addEventListener('click', function (e) {
    var b = e.target.closest && e.target.closest('[data-lang]');
    if (b) { e.preventDefault(); setLang(b.getAttribute('data-lang')); }
  });

  return {
    APPS: APPS, t: t, playUrl: playUrl, setLang: setLang, apply: apply,
    lang: function () { return lang; },
    onChange: function (fn) { listeners.push(fn); },
    esc: function (s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  };
})();
