/**
 * Testi in lingua italiana per FreeCell Solitaire.
 * Per aggiungere una nuova lingua, duplica questo file (es. fr.ts), traduci i
 * valori, quindi passa l'oggetto a `setLocale()` in src/i18n/index.ts.
 */
export const it = {
  // ── Metadati della pagina ───────────────────────────────────────────────────
  pageTitle: 'FreeCell Solitaire — Gioco di carte online gratuito',
  pageDescription: 'Gioca a FreeCell Solitaire gratis nel tuo browser. Nessun download, nessuna registrazione. Il classico gioco di carte con annulla, spostamento automatico, scorciatoie da tastiera e gioco strategico.',

  // ── Pulsanti dell\'intestazione ──────────────────────────────────────────────
  btnNewGame: 'Nuova partita',
  btnUndo: 'Annulla',
  btnHint: 'Suggerimento',
  hintNone: 'Nessuna mossa disponibile',

  // ── Barra delle statistiche ─────────────────────────────────────────────────
  statTime: 'Tempo',
  statMoves: 'Mosse',
  statScore: 'Punteggio',

  // ── Titoli delle pile ───────────────────────────────────────────────────────
  pileFreeCell: 'Cella libera',
  pileFoundation: 'Fondazione',

  // ── Barra degli strumenti ───────────────────────────────────────────────────
  toolbarPause: 'Pausa',
  toolbarMusic: 'Musica',
  toolbarFullscreen: 'Schermo intero',
  toolbarExitFullscreen: 'Esci da schermo intero',

  // ── Finestra modale di pausa ────────────────────────────────────────────────
  pauseTitle: 'Gioco in pausa',
  pauseSubtitle: 'Prenditi il tuo tempo — la tua partita è al sicuro',
  pauseResume: 'Continua',

  // ── Overlay di vittoria ─────────────────────────────────────────────────────
  winTitle: 'Hai vinto!',
  winFinalScore: 'Punteggio',
  winTime: 'Tempo',
  winMoves: 'Mosse',

  // ── Accessibilità delle carte ───────────────────────────────────────────────
  cardBack: 'Dorso della carta',

  // ── Lettore musicale ────────────────────────────────────────────────────────
  musicPlayerAriaLabel: 'Lettore musicale',
  musicSolitaireRadio: 'Radio Solitario',
  musicTracksLabel: 'Brani',
  musicTracksAriaLabel: 'Selezione brano',
  musicPlay: 'Riproduci',
  musicPause: 'Pausa',
  musicVolumeLabel: 'Volume',
  musicVolumeAriaLabel: 'Volume',
  musicMute: 'Silenzia',
  musicUnmute: 'Riattiva audio',
  musicTrackAriaLabel: (n: number, name: string) => `Brano ${n}: ${name}`,

  // ── Nomi dei brani ──────────────────────────────────────────────────────────
  trackNames: [
    'Violoncello', 'Batteria I', 'Batteria II', 'Flauto', 'Chitarra I', 'Chitarra II', 'Chitarra III',
    'Jazz', 'Natura I', 'Natura II', 'Natura III', 'Natura IV', 'Natura V', 'Natura VI',
    'Orchestra', 'Pianoforte I', 'Pianoforte II', 'Pianoforte III', 'Pianoforte IV', 'Pianoforte V', 'Pianoforte VI',
    'Pianoforte VII', 'Pianoforte VIII', 'Sintetizzatore I', 'Sintetizzatore II', 'Sintetizzatore III', 'Violino',
  ],

  // ── Piè di pagina ───────────────────────────────────────────────────────────
  footerCopy: 'FreeCell Solitaire. Gioco gratuito.',
  footerPrivacyPolicy: 'Informativa sulla privacy',
  footerTermsOfService: 'Termini di servizio',
  footerNavAriaLabel: 'Navigazione del piè di pagina',

  // ── Contenuto sotto la piega ────────────────────────────────────────────────
  descriptionHeading: 'FreeCell Solitaire',
  descriptionP1: 'L\'obiettivo è spostare tutte le 52 carte sulle quattro pile di Fondazione, costruendo ogni pila per seme dall\'Asso al Re.',
  descriptionP2: 'FreeCell è uno dei giochi di pazienza con le carte più popolari al mondo, giocato con un singolo mazzo standard da 52 carte. A differenza della maggior parte delle varianti del solitario, tutte le carte sono distribuite a faccia in su fin dall\'inizio, rendendolo un gioco di pura abilità e strategia. Quasi ogni smazzata è risolvibile con un\'attenta pianificazione. Le quattro celle libere forniscono uno spazio di archiviazione temporaneo per aiutare a manovrare le carte in posizione.',

  howToPlayHeading: 'Come giocare',
  howToPlayLayoutHeading: 'La disposizione',
  howToPlayLayoutP: 'Il gioco inizia con tutte le 52 carte distribuite a faccia in su in otto colonne del tableau. Le prime quattro colonne contengono 7 carte ciascuna; le restanti quattro colonne contengono 6 carte ciascuna. Quattro Celle Libere vuote si trovano nell\'angolo in alto a sinistra, e quattro pile di Fondazione vuote nell\'angolo in alto a destra.',
  howToPlayGoalHeading: 'Il tuo obiettivo',
  howToPlayGoalP: 'Costruisci tutte e quattro le pile di Fondazione per seme dall\'Asso al Re. Sposta prima l\'Asso di ogni seme su una Fondazione, poi il 2, il 3 e così via fino al Re. Una volta che tutte le 52 carte sono sulle Fondazioni, hai vinto.',
  howToPlayTableauHeading: 'Spostare le carte nel tableau',
  howToPlayTableauP: 'Trascina una carta su un\'altra colonna del tableau. La carta che posizioni deve essere di colore opposto e di esattamente un rango inferiore rispetto alla carta su cui atterra. Ad esempio, un 7 rosso può essere posizionato su un 8 nero. Qualsiasi carta può essere posizionata su una colonna vuota. Puoi spostare più carte contemporaneamente (supermossa) se formano una sequenza discendente a colori alternati e ci sono abbastanza celle libere e colonne vuote per spostarle teoricamente una alla volta.',
  howToPlayFreeCellsHeading: 'Usare le Celle Libere',
  howToPlayFreeCellsP: 'Ogni Cella Libera può contenere una carta alla volta. Usale come deposito temporaneo per liberare carte nel tableau. Puoi riportare una carta da una Cella Libera al tableau o direttamente a una Fondazione quando è valido.',
  howToPlayFoundationsHeading: 'Costruire le Fondazioni',
  howToPlayFoundationsP: 'Sposta gli Assi sulle pile di Fondazione vuote, quindi costruisci verso l\'alto per seme (Asso, 2, 3, ... Re). Le carte che è sicuro spostare vengono inviate automaticamente alle Fondazioni dopo ogni azione.',
  howToPlayUndoHeading: 'Annulla',
  howToPlayUndoP: 'Clicca il pulsante Annulla (o premi Ctrl+Z / Cmd+Z) per annullare la tua ultima azione. Puoi annullare fino a tornare alla distribuzione iniziale.',

  rulesHeading: 'Regole — Passo dopo passo',
  rules: [
    '<strong>Mescola e distribuisci</strong> — Un mazzo standard da 52 carte viene mescolato e distribuito a faccia in su in 8 colonne del tableau. Le colonne 1–4 ricevono 7 carte ciascuna; le colonne 5–8 ricevono 6 carte ciascuna. Tutte le carte sono visibili fin dall\'inizio.',
    '<strong>Il tableau si costruisce in ordine decrescente a colori alternati</strong> — Una carta può essere posizionata su qualsiasi carta del tableau che sia esattamente di un rango superiore e di colore opposto. Ad esempio, un 5 nero può essere posizionato su un 6 rosso.',
    '<strong>Supermossa di sequenze in gruppo</strong> — Una sequenza contigua di carte in ordine decrescente e a colori alternati può essere spostata insieme, a condizione che esistano abbastanza Celle Libere vuote e colonne del tableau vuote. Il numero massimo di carte che puoi spostare è pari a (celle libere vuote + 1) × 2^(colonne vuote).',
    '<strong>Qualsiasi carta riempie una colonna vuota</strong> — Quando una colonna del tableau viene svuotata, qualsiasi singola carta o sequenza di supermossa valida può essere spostata lì.',
    '<strong>Le Celle Libere contengono una carta ciascuna</strong> — Sposta qualsiasi singola carta in una Cella Libera vuota per una conservazione temporanea. È consentita solo una carta per cella.',
    '<strong>Costruisci le Fondazioni verso l\'alto per seme</strong> — Sposta gli Assi sulle pile di Fondazione vuote, quindi costruisci verso l\'alto nello stesso seme: Asso, 2, 3, ... Re.',
    '<strong>Spostamento automatico delle carte sicure</strong> — Dopo ogni azione, le carte che è sicuro spostare sulle Fondazioni (cioè che non servono più per la costruzione del tableau) vengono spostate automaticamente.',
    '<strong>Annulla qualsiasi mossa</strong> — Usa Annulla per invertire le mosse fino alla distribuzione iniziale.',
    '<strong>Vinci riempiendo tutte e quattro le Fondazioni</strong> — Posiziona tutte le 52 carte sulle quattro pile di Fondazione (una sequenza completa Asso-Re dello stesso seme per pila) per vincere la partita.',
  ],

  shortcutsHeading: 'Scorciatoie da tastiera',
  shortcutsKeyCol: 'Tasto',
  shortcutsActionCol: 'Azione',
  shortcuts: [
    { key: '← → ↑ ↓ Tasti freccia', action: 'Sposta il cursore della tastiera tra le pile' },
    { key: 'Spazio', action: 'Seleziona la/e carta/e al cursore, oppure conferma una mossa verso la destinazione evidenziata' },
    { key: 'Escape', action: 'Annulla la selezione corrente' },
    { key: 'F2', action: 'Inizia una nuova partita' },
    { key: 'Ctrl+Z / Cmd+Z', action: 'Annulla l\'ultima azione' },
  ],

  // ── Pagina Informativa sulla privacy ────────────────────────────────────────
  privacyPageTitle: 'Informativa sulla privacy — FreeCell Solitaire',
  privacyPageDescription: 'Informativa sulla privacy per FreeCell Solitaire. Scopri come gestiamo i tuoi dati.',
  privacyBackToGame: 'Torna al gioco',
  privacyHeading: 'Informativa sulla privacy',
  privacyLastUpdated: 'Ultimo aggiornamento: 7 aprile 2026',
  privacyIntro: 'La presente Informativa sulla privacy descrive come FreeCell Solitaire ("noi", "ci" o "nostro") gestisce le informazioni quando utilizzi il nostro gioco di carte online gratuito su <a href="/">questo sito</a>.',
  privacyCollectHeading: 'Informazioni che raccogliamo',
  privacyCollectP: 'Non richiediamo la creazione di un account né la fornitura di informazioni personali per giocare. Potremmo raccogliere automaticamente dati tecnici limitati e non personali, tra cui:',
  privacyCollectItems: ['Tipo e versione del browser', 'Sistema operativo', 'URL di riferimento e pagine visitate', 'Data e ora delle visite'],
  privacyCollectNote: 'Questi dati vengono raccolti in forma aggregata e non possono essere utilizzati per identificarti personalmente.',
  privacyStorageHeading: 'Archiviazione locale',
  privacyStorageP: 'Il gioco può utilizzare l\'archiviazione locale del tuo browser per salvare le preferenze di gioco localmente sul tuo dispositivo. Questi dati non lasciano mai il tuo browser e non ci vengono trasmessi.',
  privacyCookiesHeading: 'Cookie',
  privacyCookiesP: 'Non utilizziamo cookie di tracciamento o cookie pubblicitari. Eventuali cookie impostati sono strettamente necessari per il funzionamento del gioco e non raccolgono dati personali.',
  privacyThirdPartyHeading: 'Servizi di terze parti',
  privacyThirdPartyP: 'Potremmo utilizzare servizi di terze parti come una CDN (Content Delivery Network) per fornire le risorse del gioco. Questi servizi potrebbero raccogliere dati di registro del server standard (come gli indirizzi IP) nell\'ambito delle normali operazioni Internet. Non vendiamo né condividiamo i tuoi dati con inserzionisti.',
  privacyChildrenHeading: 'Privacy dei minori',
  privacyChildrenP: 'Il nostro gioco è adatto a tutte le età. Non raccogliamo consapevolmente informazioni personali da minori di 13 anni. Se ritieni che un minore ci abbia fornito informazioni personali, ti preghiamo di contattarci affinché possiamo eliminarle.',
  privacyChangesHeading: 'Modifiche alla presente informativa',
  privacyChangesP: 'Potremmo aggiornare la presente Informativa sulla privacy di tanto in tanto. Le modifiche saranno pubblicate su questa pagina con una data aggiornata. L\'uso continuato del gioco dopo le modifiche costituisce accettazione dell\'informativa aggiornata.',
  privacyContactHeading: 'Contatti',
  privacyContactP: 'In caso di domande sulla presente Informativa sulla privacy, puoi contattarci tramite le informazioni disponibili sul nostro sito.',

  // ── Pagina Termini di servizio ──────────────────────────────────────────────
  tosPageTitle: 'Termini di servizio — FreeCell Solitaire',
  tosPageDescription: 'Termini di servizio per FreeCell Solitaire.',
  tosBackToGame: 'Torna al gioco',
  tosHeading: 'Termini di servizio',
  tosLastUpdated: 'Ultimo aggiornamento: 7 aprile 2026',
  tosIntro: 'Accedendo o utilizzando FreeCell Solitaire ("il gioco", "il sito"), accetti di essere vincolato dai presenti Termini di servizio. Se non sei d\'accordo, ti preghiamo di non utilizzare il sito.',
  tosUseHeading: 'Utilizzo del gioco',
  tosUseP: 'FreeCell Solitaire è fornito gratuitamente per intrattenimento personale e non commerciale. Puoi:',
  tosUseMayItems: ['Giocare per divertimento personale', 'Condividere l\'URL del sito con altri'],
  tosUseMayNotP: 'Non puoi:',
  tosUseMayNotItems: [
    'Copiare, ridistribuire o rivendere il gioco o le sue risorse senza autorizzazione',
    'Tentare di decodificare, decompilare o manomettere il gioco',
    'Utilizzare strumenti automatizzati o bot per interagire con il gioco',
    'Utilizzare il sito per scopi illeciti',
  ],
  tosIPHeading: 'Proprietà intellettuale',
  tosIPP: 'Tutti i contenuti di questo sito, inclusi il codice del gioco, la grafica, le illustrazioni delle carte e l\'audio, sono di nostra proprietà o concessi in licenza a noi. Nulla nei presenti Termini ti concede alcun diritto sulla nostra proprietà intellettuale al di là di quanto necessario per giocare.',
  tosWarrantyHeading: 'Esclusione di garanzie',
  tosWarrantyP: 'Il gioco è fornito "così com\'è" senza garanzie di alcun tipo, espresse o implicite. Non garantiamo che il sito sarà sempre disponibile, privo di errori o di virus o altri componenti dannosi.',
  tosLiabilityHeading: 'Limitazione di responsabilità',
  tosLiabilityP: 'Nella misura massima consentita dalla legge, non saremo responsabili per danni indiretti, incidentali, speciali o consequenziali derivanti dall\'uso o dall\'impossibilità di utilizzare il gioco.',
  tosChangesHeading: 'Modifiche ai presenti Termini',
  tosChangesP: 'Ci riserviamo il diritto di aggiornare i presenti Termini in qualsiasi momento. Le modifiche saranno pubblicate su questa pagina con una data aggiornata. L\'uso continuato del gioco dopo le modifiche costituisce accettazione dei Termini rivisti.',
  tosLawHeading: 'Legge applicabile',
  tosLawP: 'I presenti Termini sono regolati dalla legge applicabile. Eventuali controversie saranno risolte presso i tribunali competenti della giurisdizione applicabile.',
  tosContactHeading: 'Contatti',
  tosContactP: 'In caso di domande sui presenti Termini, ti preghiamo di contattarci tramite le informazioni disponibili sul nostro sito.',
};

export type Locale = typeof it;