/**
 * FreeCell Solitaire için Türkçe yerelleştirme metinleri.
 * Yeni bir dil eklemek için bu dosyayı çoğaltın (ör. fr.ts), değerleri
 * çevirin ve ardından nesneyi src/i18n/index.ts içindeki `setLocale()` fonksiyonuna iletin.
 */
export const tr = {
  // ── Sayfa meta verileri ────────────────────────────────────────────────────
  pageTitle: 'FreeCell Solitaire — Ücretsiz Çevrimiçi Kart Oyunu',
  pageDescription: 'FreeCell Solitaire\'i tarayıcınızda ücretsiz oynayın. İndirme yok, kayıt yok. Geri alma, otomatik taşıma, klavye kısayolları ve stratejik oynanışa sahip klasik kart oyunu.',

  // ── Başlık düğmeleri ───────────────────────────────────────────────────────
  btnNewGame: 'Yeni Oyun',
  btnUndo: 'Geri Al',
  btnHint: 'İpucu',
  hintNone: 'Kullanılabilir hamle yok',

  // ── İstatistik çubuğu ──────────────────────────────────────────────────────
  statTime: 'Süre',
  statMoves: 'Hamle',
  statScore: 'Puan',

  // ── Deste başlıkları ───────────────────────────────────────────────────────
  pileFreeCell: 'Boş Hücre',
  pileFoundation: 'Temel',

  // ── Araç çubuğu ────────────────────────────────────────────────────────────
  toolbarPause: 'Duraklat',
  toolbarMusic: 'Müzik',
  toolbarFullscreen: 'Tam Ekran',
  toolbarExitFullscreen: 'Tam Ekrandan Çık',

  // ── Duraklatma penceresi ───────────────────────────────────────────────────
  pauseTitle: 'Oyun Duraklatıldı',
  pauseSubtitle: 'Acele etmeyin — oyununuz güvende',
  pauseResume: 'Devam Et',

  // ── Kazanma katmanı ────────────────────────────────────────────────────────
  winTitle: 'Kazandınız!',
  winFinalScore: 'Puan',
  winTime: 'Süre',
  winMoves: 'Hamle',

  // ── Kart erişilebilirliği ──────────────────────────────────────────────────
  cardBack: 'Kart arkası',

  // ── Müzik çalar ────────────────────────────────────────────────────────────
  musicPlayerAriaLabel: 'Müzik Çalar',
  musicSolitaireRadio: 'Solitaire Radyo',
  musicTracksLabel: 'Parçalar',
  musicTracksAriaLabel: 'Parça seçimi',
  musicPlay: 'Oynat',
  musicPause: 'Duraklat',
  musicVolumeLabel: 'Ses Seviyesi',
  musicVolumeAriaLabel: 'Ses Seviyesi',
  musicMute: 'Sesi Kapat',
  musicUnmute: 'Sesi Aç',
  musicTrackAriaLabel: (n: number, name: string) => `Parça ${n}: ${name}`,

  // ── Parça adları ───────────────────────────────────────────────────────────
  trackNames: [
    'Viyolonsel', 'Davul I', 'Davul II', 'Flüt', 'Gitar I', 'Gitar II', 'Gitar III',
    'Caz', 'Doğa I', 'Doğa II', 'Doğa III', 'Doğa IV', 'Doğa V', 'Doğa VI',
    'Orkestra', 'Piyano I', 'Piyano II', 'Piyano III', 'Piyano IV', 'Piyano V', 'Piyano VI',
    'Piyano VII', 'Piyano VIII', 'Sentezleyici I', 'Sentezleyici II', 'Sentezleyici III', 'Keman',
  ],

  // ── Altbilgi ───────────────────────────────────────────────────────────────
  footerCopy: 'FreeCell Solitaire. Ücretsiz oynayın.',
  footerPrivacyPolicy: 'Gizlilik Politikası',
  footerTermsOfService: 'Kullanım Şartları',
  footerNavAriaLabel: 'Altbilgi gezintisi',

  // ── Katlama altı içeriği ───────────────────────────────────────────────────
  descriptionHeading: 'FreeCell Solitaire',
  descriptionP1: 'Amaç, 52 kartın tamamını dört Temel destesine taşımak ve her desteyi As\'tan Papaz\'a kadar renklerine göre sıralamaktır.',
  descriptionP2: 'FreeCell, standart 52 kartlık tek bir deste ile oynanan, dünyanın en popüler sabır kart oyunlarından biridir. Çoğu solitaire türünün aksine, tüm kartlar başlangıçta açık olarak dağıtılır ve bu da oyunu tamamen beceri ve strateji oyunu haline getirir. Dikkatli bir planlama ile neredeyse her dağıtım çözülebilir. Dört boş hücre, kartları konumlandırmaya yardımcı olmak için geçici depolama alanı sağlar.',

  howToPlayHeading: 'Nasıl Oynanır',
  howToPlayLayoutHeading: 'Düzen',
  howToPlayLayoutP: 'Oyun, 52 kartın tamamının açık olarak sekiz Tablo sütununa dağıtılmasıyla başlar. İlk dört sütunda yedişer kart, kalan dört sütunda ise altışar kart bulunur. Sol üst köşede dört boş Boş Hücre, sağ üst köşede ise dört boş Temel destesi yer alır.',
  howToPlayGoalHeading: 'Hedefiniz',
  howToPlayGoalP: 'Dört Temel destesini de As\'tan Papaz\'a kadar renklerine göre sıralayın. Önce her renkten As\'ı Temel\'e, ardından 2, 3 ve Papaz\'a kadar devam edin. 52 kartın tamamı Temeller\'e yerleştiğinde kazanırsınız.',
  howToPlayTableauHeading: 'Tabloda Kart Taşıma',
  howToPlayTableauP: 'Bir kartı başka bir Tablo sütununa sürükleyin. Yerleştirdiğiniz kart, üzerine geldiği karttan tam bir rütbe düşük ve zıt renkte olmalıdır. Örneğin, kırmızı 7, siyah 8\'in üzerine konulabilir. Boş bir sütuna herhangi bir kart yerleştirilebilir. Kartlar azalan ve dönüşümlü renklerde bir dizi oluşturuyorsa ve teorik olarak birer birer taşımaya yetecek kadar boş hücre ve boş sütun varsa, birden fazla kartı aynı anda taşıyabilirsiniz (süper hamle).',
  howToPlayFreeCellsHeading: 'Boş Hücreleri Kullanma',
  howToPlayFreeCellsP: 'Her Boş Hücre bir seferde bir kart tutabilir. Tablodaki kartları serbest bırakmak için bunları geçici depolama olarak kullanın. Bir kartı Boş Hücreden tekrar Tabloya veya geçerli olduğunda doğrudan bir Temel\'e taşıyabilirsiniz.',
  howToPlayFoundationsHeading: 'Temelleri Oluşturma',
  howToPlayFoundationsP: 'As\'ları boş Temel destelerine taşıyın, ardından renklerine göre yukarı doğru sıralayın (As, 2, 3, ... Papaz). Taşınması güvenli olan kartlar, her işlemden sonra otomatik olarak Temeller\'e gönderilir.',
  howToPlayUndoHeading: 'Geri Alma',
  howToPlayUndoP: 'Son işleminizi geri almak için Geri Al düğmesine tıklayın (veya Ctrl+Z / Cmd+Z tuşlarına basın). Başlangıçtaki dağıtıma kadar geri alabilirsiniz.',

  rulesHeading: 'Kurallar — Adım Adım',
  rules: [
    '<strong>Karma &amp; Dağıtma</strong> — Standart 52 kartlık bir deste karıştırılır ve 8 Tablo sütununa açık olarak dağıtılır. Sütun 1–4 her biri 7 kart alır; sütun 5–8 her biri 6 kart alır. Tüm kartlar başlangıçtan itibaren görünürdür.',
    '<strong>Tablo azalan ve dönüşümlü renkte dizilir</strong> — Bir kart, tam olarak bir rütbe yüksek ve zıt renkteki herhangi bir Tablo kartının üzerine yerleştirilebilir. Örneğin, siyah 5, kırmızı 6\'nın üzerine konulabilir.',
    '<strong>Sıralı dizileri grup olarak süper taşıma</strong> — Azalan rütbe ve dönüşümlü renklerdeki bitişik bir kart dizisi, yeterli sayıda boş Boş Hücre ve boş Tablo sütunu varsa birlikte taşınabilir. Taşıyabileceğiniz maksimum kart sayısı (boş hücre sayısı + 1) × 2^(boş sütun sayısı) formülüne eşittir.',
    '<strong>Herhangi bir kart boş sütunu doldurur</strong> — Bir Tablo sütunu boşaldığında, oraya herhangi bir tek kart veya geçerli bir süper hamle dizisi taşınabilir.',
    '<strong>Boş Hücreler her biri bir kart tutar</strong> — Geçici depolama için herhangi bir tek kartı boş bir Boş Hücreye taşıyın. Hücre başına yalnızca bir kart izin verilir.',
    '<strong>Temelleri renklerine göre yukarı doğru dizin</strong> — As\'ları boş Temel destelerine taşıyın, ardından aynı renkte yukarı doğru sıralayın: As, 2, 3, ... Papaz.',
    '<strong>Güvenli kartların otomatik taşınması</strong> — Her işlemden sonra, Temeller\'e taşınması güvenli olan kartlar (artık Tablo inşası için gerekli olmayanlar) otomatik olarak taşınır.',
    '<strong>Herhangi bir hamleyi geri alın</strong> — Başlangıçtaki dağıtıma kadar hamleleri geri almak için Geri Al\'ı kullanın.',
    '<strong>Dört Temelin tamamını doldurarak kazanın</strong> — Oyunu kazanmak için 52 kartın tamamını dört Temel destesine (her deste için As\'tan Papaz\'a kadar aynı renkten tam bir dizi) yerleştirin.',
  ],

  shortcutsHeading: 'Klavye Kısayolları',
  shortcutsKeyCol: 'Tuş',
  shortcutsActionCol: 'Eylem',
  shortcuts: [
    { key: '← → ↑ ↓ Ok tuşları', action: 'Klavye imlecini desteler arasında hareket ettirir' },
    { key: 'Boşluk', action: 'İmleçteki kart(lar)ı seçer veya vurgulanan hedefe taşımayı onaylar' },
    { key: 'Escape', action: 'Mevcut seçimi iptal eder' },
    { key: 'F2', action: 'Yeni bir oyun başlatır' },
    { key: 'Ctrl+Z / Cmd+Z', action: 'Son işlemi geri alır' },
  ],

  // ── Gizlilik Politikası sayfası ────────────────────────────────────────────
  privacyPageTitle: 'Gizlilik Politikası — FreeCell Solitaire',
  privacyPageDescription: 'FreeCell Solitaire için Gizlilik Politikası. Verilerinizi nasıl işlediğimizi öğrenin.',
  privacyBackToGame: 'Oyuna Dön',
  privacyHeading: 'Gizlilik Politikası',
  privacyLastUpdated: 'Son güncelleme: 7 Nisan 2026',
  privacyIntro: 'Bu Gizlilik Politikası, FreeCell Solitaire ("biz", "bizim") olarak <a href="/">bu sitedeki</a> ücretsiz çevrimiçi kart oyunumuzu kullandığınızda bilgilerinizi nasıl işlediğimizi açıklar.',
  privacyCollectHeading: 'Topladığımız Bilgiler',
  privacyCollectP: 'Oyunu oynamak için bir hesap oluşturmanızı veya herhangi bir kişisel bilgi vermenizi gerektirmiyoruz. Aşağıdakiler dahil olmak üzere sınırlı, kişisel olmayan teknik verileri otomatik olarak toplayabiliriz:',
  privacyCollectItems: ['Tarayıcı türü ve sürümü', 'İşletim sistemi', 'Yönlendiren URL\'ler ve ziyaret edilen sayfalar', 'Ziyaretlerin tarihi ve saati'],
  privacyCollectNote: 'Bu veriler toplu olarak toplanır ve sizi kişisel olarak tanımlamak için kullanılamaz.',
  privacyStorageHeading: 'Yerel Depolama',
  privacyStorageP: 'Oyun, oyun tercihlerini cihazınızda yerel olarak kaydetmek için tarayıcınızın yerel depolama alanını kullanabilir. Bu veriler asla tarayıcınızdan çıkmaz ve bize iletilmez.',
  privacyCookiesHeading: 'Çerezler',
  privacyCookiesP: 'İzleme çerezleri veya reklam çerezleri kullanmıyoruz. Ayarlanan tüm çerezler oyunun çalışması için kesinlikle gereklidir ve kişisel veri toplamaz.',
  privacyThirdPartyHeading: 'Üçüncü Taraf Hizmetleri',
  privacyThirdPartyP: 'Oyun varlıklarını sunmak için CDN (İçerik Dağıtım Ağı) gibi üçüncü taraf hizmetlerini kullanabiliriz. Bu hizmetler, normal internet işleyişinin bir parçası olarak standart sunucu günlük verilerini (IP adresleri gibi) toplayabilir. Verilerinizi reklam verenlere satmıyor veya paylaşmıyoruz.',
  privacyChildrenHeading: 'Çocukların Gizliliği',
  privacyChildrenP: 'Oyunumuz her yaş için uygundur. 13 yaşın altındaki çocuklardan bilerek kişisel bilgi toplamıyoruz. Bir çocuğun bize kişisel bilgi verdiğini düşünüyorsanız, silebilmemiz için lütfen bizimle iletişime geçin.',
  privacyChangesHeading: 'Bu Politikadaki Değişiklikler',
  privacyChangesP: 'Bu Gizlilik Politikasını zaman zaman güncelleyebiliriz. Değişiklikler, güncellenmiş bir tarihle bu sayfada yayınlanacaktır. Değişikliklerden sonra oyunu kullanmaya devam etmeniz, güncellenmiş politikayı kabul ettiğiniz anlamına gelir.',
  privacyContactHeading: 'İletişim',
  privacyContactP: 'Bu Gizlilik Politikası hakkında herhangi bir sorunuz varsa, sitemizdeki iletişim bilgileri aracılığıyla bize ulaşabilirsiniz.',

  // ── Kullanım Şartları sayfası ──────────────────────────────────────────────
  tosPageTitle: 'Kullanım Şartları — FreeCell Solitaire',
  tosPageDescription: 'FreeCell Solitaire için Kullanım Şartları.',
  tosBackToGame: 'Oyuna Dön',
  tosHeading: 'Kullanım Şartları',
  tosLastUpdated: 'Son güncelleme: 7 Nisan 2026',
  tosIntro: 'FreeCell Solitaire\'e ("oyun", "site") erişerek veya kullanarak, bu Kullanım Şartlarına bağlı kalmayı kabul etmiş olursunuz. Kabul etmiyorsanız, lütfen siteyi kullanmayın.',
  tosUseHeading: 'Oyunun Kullanımı',
  tosUseP: 'FreeCell Solitaire, kişisel, ticari olmayan eğlence için ücretsiz olarak sunulmaktadır. Şunları yapabilirsiniz:',
  tosUseMayItems: ['Kişisel keyif için oyunu oynamak', 'Site URL\'sini başkalarıyla paylaşmak'],
  tosUseMayNotP: 'Şunları yapamazsınız:',
  tosUseMayNotItems: [
    'Oyunu veya varlıklarını izinsiz kopyalamak, yeniden dağıtmak veya satmak',
    'Oyunu tersine mühendislik yapmaya, kaynak koduna dönüştürmeye veya kurcalamaya çalışmak',
    'Oyunla etkileşim kurmak için otomatik araçlar veya botlar kullanmak',
    'Siteyi herhangi bir yasa dışı amaçla kullanmak',
  ],
  tosIPHeading: 'Fikri Mülkiyet',
  tosIPP: 'Oyun kodu, grafikler, kart resimleri ve ses dahil olmak üzere bu sitedeki tüm içerik bize aittir veya bize lisanslanmıştır. Bu Şartlardaki hiçbir şey, oyunu oynamak için gerekli olanın ötesinde fikri mülkiyetimiz üzerinde size herhangi bir hak vermez.',
  tosWarrantyHeading: 'Garantilerin Reddi',
  tosWarrantyP: 'Oyun "olduğu gibi" sunulmakta olup, açık veya zımni hiçbir garanti verilmemektedir. Sitenin her zaman kullanılabilir olacağını, hatasız olacağını veya virüs ya da diğer zararlı bileşenler içermeyeceğini garanti etmiyoruz.',
  tosLiabilityHeading: 'Sorumluluğun Sınırlandırılması',
  tosLiabilityP: 'Yasaların izin verdiği en geniş ölçüde, oyunu kullanımınızdan veya kullanamamanızdan kaynaklanan dolaylı, arızi, özel veya sonuç olarak ortaya çıkan hiçbir zarardan sorumlu olmayacağız.',
  tosChangesHeading: 'Bu Şartlardaki Değişiklikler',
  tosChangesP: 'Bu Şartları istediğimiz zaman güncelleme hakkını saklı tutarız. Değişiklikler, güncellenmiş bir tarihle bu sayfada yayınlanacaktır. Değişikliklerden sonra oyunu kullanmaya devam etmeniz, revize edilmiş Şartları kabul ettiğiniz anlamına gelir.',
  tosLawHeading: 'Geçerli Hukuk',
  tosLawP: 'Bu Şartlar, geçerli yasalara tabidir. Herhangi bir uyuşmazlık, ilgili yargı alanındaki yetkili mahkemelerde çözülecektir.',
  tosContactHeading: 'İletişim',
  tosContactP: 'Bu Şartlar hakkında sorularınız varsa, lütfen sitemizde bulunan iletişim bilgileri aracılığıyla bize ulaşın.',
};

export type Locale = typeof tr;