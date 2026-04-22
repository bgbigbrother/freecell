/**
 * Deutsche Sprachtexte für FreeCell Solitaire.
 * Um eine neue Sprache hinzuzufügen, duplizieren Sie diese Datei (z. B. fr.ts), übersetzen Sie die
 * Werte und übergeben Sie das Objekt an `setLocale()` in src/i18n/index.ts.
 */
export const de = {
  // ── Seiten-Metadaten ────────────────────────────────────────────────────────
  pageTitle: 'FreeCell Solitaire — Kostenloses Online-Kartenspiel',
  pageDescription: 'Spielen Sie FreeCell Solitaire kostenlos in Ihrem Browser. Kein Download, keine Anmeldung. Das klassische Kartenspiel mit Rückgängig, Auto-Bewegung, Tastenkürzeln und strategischem Spielverlauf.',

  // ── Kopfzeilen-Schaltflächen ─────────────────────────────────────────────────
  btnNewGame: 'Neues Spiel',
  btnUndo: 'Rückgängig',
  btnHint: 'Tipp',
  hintNone: 'Keine Züge verfügbar',

  // ── Statistikleiste ─────────────────────────────────────────────────────────
  statTime: 'Zeit',
  statMoves: 'Züge',
  statScore: 'Punktzahl',

  // ── Stapelbezeichnungen ─────────────────────────────────────────────────────
  pileFreeCell: 'Freie Zelle',
  pileFoundation: 'Fundament',

  // ── Werkzeugleiste ──────────────────────────────────────────────────────────
  toolbarPause: 'Pause',
  toolbarMusic: 'Musik',
  toolbarFullscreen: 'Vollbild',
  toolbarExitFullscreen: 'Vollbild beenden',

  // ── Pausen-Modal ────────────────────────────────────────────────────────────
  pauseTitle: 'Spiel pausiert',
  pauseSubtitle: 'Lassen Sie sich Zeit – Ihr Spiel ist sicher',
  pauseResume: 'Fortsetzen',

  // ── Gewinn-Overlay ──────────────────────────────────────────────────────────
  winTitle: 'Sie haben gewonnen!',
  winFinalScore: 'Punktzahl',
  winTime: 'Zeit',
  winMoves: 'Züge',

  // ── Barrierefreiheit der Karten ─────────────────────────────────────────────
  cardBack: 'Kartenrückseite',

  // ── Musik-Player ────────────────────────────────────────────────────────────
  musicPlayerAriaLabel: 'Musik-Player',
  musicSolitaireRadio: 'Solitaire Radio',
  musicTracksLabel: 'Titel',
  musicTracksAriaLabel: 'Titelauswahl',
  musicPlay: 'Abspielen',
  musicPause: 'Pause',
  musicVolumeLabel: 'Lautstärke',
  musicVolumeAriaLabel: 'Lautstärke',
  musicMute: 'Stummschalten',
  musicUnmute: 'Ton einschalten',
  musicTrackAriaLabel: (n: number, name: string) => `Titel ${n}: ${name}`,

  // ── Titelnamen ──────────────────────────────────────────────────────────────
  trackNames: [
    'Cello', 'Schlagzeug I', 'Schlagzeug II', 'Flöte', 'Gitarre I', 'Gitarre II', 'Gitarre III',
    'Jazz', 'Natur I', 'Natur II', 'Natur III', 'Natur IV', 'Natur V', 'Natur VI',
    'Orchester', 'Klavier I', 'Klavier II', 'Klavier III', 'Klavier IV', 'Klavier V', 'Klavier VI',
    'Klavier VII', 'Klavier VIII', 'Synthesizer I', 'Synthesizer II', 'Synthesizer III', 'Violine',
  ],

  // ── Fußzeile ────────────────────────────────────────────────────────────────
  footerCopy: 'FreeCell Solitaire. Kostenlos spielbar.',
  footerPrivacyPolicy: 'Datenschutzerklärung',
  footerTermsOfService: 'Nutzungsbedingungen',
  footerNavAriaLabel: 'Fußzeilen-Navigation',

  // ── Inhalt unterhalb der Falz ───────────────────────────────────────────────
  descriptionHeading: 'FreeCell Solitaire',
  descriptionP1: 'Ziel ist es, alle 52 Karten auf die vier Fundament-Stapel zu legen, wobei jeder Stapel farbgleich von Ass bis König aufgebaut wird.',
  descriptionP2: 'FreeCell ist eines der beliebtesten Patience-Kartenspiele der Welt, gespielt mit einem einzigen Standardblatt von 52 Karten. Anders als bei den meisten Solitaire-Varianten werden alle Karten von Anfang an offen ausgelegt, was es zu einem Spiel der reinen Geschicklichkeit und Strategie macht. Nahezu jedes Blatt ist mit sorgfältiger Planung lösbar. Die vier freien Zellen bieten temporären Ablageplatz, um Karten in Position zu manövrieren.',

  howToPlayHeading: 'Spielanleitung',
  howToPlayLayoutHeading: 'Das Layout',
  howToPlayLayoutP: 'Das Spiel beginnt mit allen 52 offen ausgelegten Karten in acht Tableau-Spalten. Die ersten vier Spalten enthalten je 7 Karten, die übrigen vier Spalten je 6 Karten. Vier leere Freie Zellen befinden sich in der oberen linken Ecke, und vier leere Fundament-Stapel in der oberen rechten Ecke.',
  howToPlayGoalHeading: 'Ihr Ziel',
  howToPlayGoalP: 'Bauen Sie alle vier Fundament-Stapel farbgleich von Ass bis König auf. Legen Sie zuerst das Ass jeder Farbe auf ein Fundament, dann die 2, die 3 und so weiter bis zum König. Sobald alle 52 Karten auf den Fundamenten liegen, haben Sie gewonnen.',
  howToPlayTableauHeading: 'Karten im Tableau bewegen',
  howToPlayTableauP: 'Ziehen Sie eine Karte auf eine andere Tableau-Spalte. Die abgelegte Karte muss die entgegengesetzte Farbe und genau einen Rang niedriger haben als die Karte, auf der sie landet. Zum Beispiel kann eine rote 7 auf eine schwarze 8 gelegt werden. Auf eine leere Spalte darf jede beliebige Karte gelegt werden. Sie können mehrere Karten auf einmal bewegen (Superzug), wenn sie eine absteigende Folge in wechselnden Farben bilden und genügend leere freie Zellen und leere Spalten vorhanden sind, um sie theoretisch einzeln zu bewegen.',
  howToPlayFreeCellsHeading: 'Freie Zellen nutzen',
  howToPlayFreeCellsP: 'Jede Freie Zelle kann jeweils eine Karte aufnehmen. Nutzen Sie sie als Zwischenlager, um Karten im Tableau freizubekommen. Sie können eine Karte aus einer Freien Zelle zurück ins Tableau oder direkt auf ein Fundament legen, wenn dies gültig ist.',
  howToPlayFoundationsHeading: 'Fundamente aufbauen',
  howToPlayFoundationsP: 'Legen Sie Asse auf leere Fundament-Stapel und bauen Sie dann farbgleich aufwärts (Ass, 2, 3, ... König). Karten, die gefahrlos bewegt werden können, werden nach jeder Aktion automatisch auf die Fundamente gelegt.',
  howToPlayUndoHeading: 'Rückgängig',
  howToPlayUndoP: 'Klicken Sie auf die Schaltfläche „Rückgängig“ (oder drücken Sie Strg+Z / Cmd+Z), um Ihre letzte Aktion rückgängig zu machen. Sie können bis zur anfänglichen Kartenauslage zurücksetzen.',

  rulesHeading: 'Regeln – Schritt für Schritt',
  rules: [
    '<strong>Mischen &amp; Austeilen</strong> – Ein Standardblatt mit 52 Karten wird gemischt und offen in 8 Tableau-Spalten ausgelegt. Spalten 1–4 erhalten je 7 Karten, Spalten 5–8 je 6 Karten. Alle Karten sind von Anfang an sichtbar.',
    '<strong>Tableau baut absteigend in wechselnden Farben</strong> – Eine Karte darf auf jede Tableau-Karte gelegt werden, die genau einen Rang höher und von entgegengesetzter Farbe ist. Beispiel: Eine schwarze 5 darf auf eine rote 6 gelegt werden.',
    '<strong>Sequenzen als Gruppe super-verschieben</strong> – Eine zusammenhängende Folge von Karten in absteigender Reihenfolge und wechselnden Farben kann gemeinsam bewegt werden, sofern genügend leere Freie Zellen und leere Tableau-Spalten vorhanden sind. Die maximale Anzahl bewegbarer Karten beträgt (leere freie Zellen + 1) × 2^(leere Spalten).',
    '<strong>Jede Karte füllt eine leere Spalte</strong> – Wird eine Tableau-Spalte geleert, kann jede einzelne Karte oder gültige Superzug-Sequenz dorthin bewegt werden.',
    '<strong>Freie Zellen fassen je eine Karte</strong> – Legen Sie eine beliebige einzelne Karte zur Zwischenlagerung in eine leere Freie Zelle. Pro Zelle ist nur eine Karte erlaubt.',
    '<strong>Fundamente farbgleich aufwärts aufbauen</strong> – Legen Sie Asse auf leere Fundament-Stapel und bauen Sie dann in derselben Farbe auf: Ass, 2, 3, ... König.',
    '<strong>Sichere Karten automatisch bewegen</strong> – Nach jeder Aktion werden Karten, die gefahrlos auf die Fundamente gelegt werden können (und nicht mehr für den Tableau-Aufbau benötigt werden), automatisch dorthin bewegt.',
    '<strong>Jeden Zug rückgängig machen</strong> – Nutzen Sie „Rückgängig“, um Züge bis zur anfänglichen Kartenauslage zurückzunehmen.',
    '<strong>Gewinnen durch Füllen aller vier Fundamente</strong> – Legen Sie alle 52 Karten auf die vier Fundament-Stapel (eine vollständige Ass-bis-König-Folge derselben Farbe pro Stapel), um das Spiel zu gewinnen.',
  ],

  shortcutsHeading: 'Tastenkürzel',
  shortcutsKeyCol: 'Taste',
  shortcutsActionCol: 'Aktion',
  shortcuts: [
    { key: '← → ↑ ↓ Pfeiltasten', action: 'Tastaturcursor zwischen den Stapeln bewegen' },
    { key: 'Leertaste', action: 'Karte(n) am Cursor auswählen oder Zug auf hervorgehobenes Ziel bestätigen' },
    { key: 'Escape', action: 'Aktuelle Auswahl abbrechen' },
    { key: 'F2', action: 'Neues Spiel starten' },
    { key: 'Strg+Z / Cmd+Z', action: 'Letzte Aktion rückgängig machen' },
  ],

  // ── Datenschutzerklärungs-Seite ─────────────────────────────────────────────
  privacyPageTitle: 'Datenschutzerklärung — FreeCell Solitaire',
  privacyPageDescription: 'Datenschutzerklärung für FreeCell Solitaire. Erfahren Sie, wie wir mit Ihren Daten umgehen.',
  privacyBackToGame: 'Zurück zum Spiel',
  privacyHeading: 'Datenschutzerklärung',
  privacyLastUpdated: 'Zuletzt aktualisiert: 7. April 2026',
  privacyIntro: 'Diese Datenschutzerklärung beschreibt, wie FreeCell Solitaire („wir“, „uns“ oder „unser“) mit Informationen umgeht, wenn Sie unser kostenloses Online-Kartenspiel auf <a href="/">dieser Website</a> nutzen.',
  privacyCollectHeading: 'Von uns erfasste Informationen',
  privacyCollectP: 'Sie müssen kein Konto erstellen oder personenbezogene Daten angeben, um das Spiel zu spielen. Wir können automatisch begrenzte, nicht personenbezogene technische Daten erfassen, darunter:',
  privacyCollectItems: ['Browsertyp und -version', 'Betriebssystem', 'Verweis-URLs und besuchte Seiten', 'Datum und Uhrzeit der Besuche'],
  privacyCollectNote: 'Diese Daten werden aggregiert erfasst und können nicht dazu verwendet werden, Sie persönlich zu identifizieren.',
  privacyStorageHeading: 'Lokaler Speicher',
  privacyStorageP: 'Das Spiel kann den lokalen Speicher Ihres Browsers nutzen, um Spieleinstellungen lokal auf Ihrem Gerät zu speichern. Diese Daten verlassen niemals Ihren Browser und werden nicht an uns übermittelt.',
  privacyCookiesHeading: 'Cookies',
  privacyCookiesP: 'Wir verwenden keine Tracking-Cookies oder Werbe-Cookies. Alle gesetzten Cookies sind für den Betrieb des Spiels zwingend erforderlich und erfassen keine personenbezogenen Daten.',
  privacyThirdPartyHeading: 'Drittanbieter-Dienste',
  privacyThirdPartyP: 'Wir können Drittanbieter-Dienste wie ein CDN (Content Delivery Network) nutzen, um die Spielressourcen bereitzustellen. Diese Dienste können im Rahmen des normalen Internetbetriebs übliche Server-Protokolldaten (wie IP-Adressen) erfassen. Wir verkaufen oder teilen Ihre Daten nicht mit Werbetreibenden.',
  privacyChildrenHeading: 'Datenschutz von Kindern',
  privacyChildrenP: 'Unser Spiel ist für alle Altersgruppen geeignet. Wir erfassen wissentlich keine personenbezogenen Daten von Kindern unter 13 Jahren. Wenn Sie glauben, dass ein Kind uns personenbezogene Daten übermittelt hat, kontaktieren Sie uns bitte, damit wir diese löschen können.',
  privacyChangesHeading: 'Änderungen dieser Erklärung',
  privacyChangesP: 'Wir können diese Datenschutzerklärung von Zeit zu Zeit aktualisieren. Änderungen werden auf dieser Seite mit aktualisiertem Datum veröffentlicht. Die fortgesetzte Nutzung des Spiels nach Änderungen gilt als Annahme der aktualisierten Erklärung.',
  privacyContactHeading: 'Kontakt',
  privacyContactP: 'Wenn Sie Fragen zu dieser Datenschutzerklärung haben, können Sie uns über die auf unserer Website verfügbaren Kontaktdaten erreichen.',

  // ── Nutzungsbedingungen-Seite ───────────────────────────────────────────────
  tosPageTitle: 'Nutzungsbedingungen — FreeCell Solitaire',
  tosPageDescription: 'Nutzungsbedingungen für FreeCell Solitaire.',
  tosBackToGame: 'Zurück zum Spiel',
  tosHeading: 'Nutzungsbedingungen',
  tosLastUpdated: 'Zuletzt aktualisiert: 7. April 2026',
  tosIntro: 'Durch den Zugriff auf oder die Nutzung von FreeCell Solitaire („das Spiel“, „die Website“) erklären Sie sich mit diesen Nutzungsbedingungen einverstanden. Wenn Sie nicht einverstanden sind, nutzen Sie die Website bitte nicht.',
  tosUseHeading: 'Nutzung des Spiels',
  tosUseP: 'FreeCell Solitaire wird kostenlos zur persönlichen, nicht-kommerziellen Unterhaltung bereitgestellt. Sie dürfen:',
  tosUseMayItems: ['Das Spiel zum persönlichen Vergnügen spielen', 'Die URL der Website mit anderen teilen'],
  tosUseMayNotP: 'Sie dürfen nicht:',
  tosUseMayNotItems: [
    'Das Spiel oder seine Ressourcen ohne Erlaubnis kopieren, weiterverbreiten oder weiterverkaufen',
    'Versuchen, das Spiel zurückzuentwickeln, zu dekompilieren oder zu manipulieren',
    'Automatisierte Tools oder Bots zur Interaktion mit dem Spiel einsetzen',
    'Die Website für rechtswidrige Zwecke nutzen',
  ],
  tosIPHeading: 'Geistiges Eigentum',
  tosIPP: 'Alle Inhalte dieser Website, einschließlich Spielcode, Grafiken, Kartenillustrationen und Audio, sind unser Eigentum oder an uns lizenziert. Nichts in diesen Bedingungen gewährt Ihnen Rechte an unserem geistigen Eigentum, die über das zum Spielen erforderliche Maß hinausgehen.',
  tosWarrantyHeading: 'Gewährleistungsausschluss',
  tosWarrantyP: 'Das Spiel wird ohne Mängelgewähr und ohne jegliche ausdrückliche oder stillschweigende Garantie bereitgestellt. Wir übernehmen keine Garantie dafür, dass die Website jederzeit verfügbar, fehlerfrei oder frei von Viren oder anderen schädlichen Komponenten ist.',
  tosLiabilityHeading: 'Haftungsbeschränkung',
  tosLiabilityP: 'Im gesetzlich zulässigen Umfang haften wir nicht für indirekte, zufällige, besondere oder Folgeschäden, die sich aus Ihrer Nutzung oder der Unmöglichkeit der Nutzung des Spiels ergeben.',
  tosChangesHeading: 'Änderungen dieser Bedingungen',
  tosChangesP: 'Wir behalten uns das Recht vor, diese Bedingungen jederzeit zu aktualisieren. Änderungen werden auf dieser Seite mit aktualisiertem Datum veröffentlicht. Die fortgesetzte Nutzung des Spiels nach Änderungen gilt als Annahme der geänderten Bedingungen.',
  tosLawHeading: 'Anwendbares Recht',
  tosLawP: 'Diese Bedingungen unterliegen dem anwendbaren Recht. Streitigkeiten werden vor den zuständigen Gerichten der anwendbaren Gerichtsbarkeit beigelegt.',
  tosContactHeading: 'Kontakt',
  tosContactP: 'Wenn Sie Fragen zu diesen Bedingungen haben, kontaktieren Sie uns bitte über die auf unserer Website verfügbaren Kontaktdaten.',
};

export type Locale = typeof de;