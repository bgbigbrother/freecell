/**
 * Chaînes de langue française pour FreeCell Solitaire.
 * Pour ajouter une nouvelle langue, dupliquez ce fichier (ex. fr.ts), traduisez les
 * valeurs, puis passez l'objet à `setLocale()` dans src/i18n/index.ts.
 */
export const fr = {
  // ── Métadonnées de la page ──────────────────────────────────────────────────
  pageTitle: 'FreeCell Solitaire — Jeu de cartes gratuit en ligne',
  pageDescription: 'Jouez au FreeCell Solitaire gratuitement dans votre navigateur. Aucun téléchargement, aucune inscription. Le jeu de cartes classique avec annulation, déplacement automatique, raccourcis clavier et un gameplay stratégique.',

  // ── Boutons d\'en-tête ──────────────────────────────────────────────────────
  btnNewGame: 'Nouvelle partie',
  btnUndo: 'Annuler',
  btnHint: 'Indice',
  hintNone: 'Aucun coup disponible',

  // ── Barre de statistiques ──────────────────────────────────────────────────
  statTime: 'Temps',
  statMoves: 'Coups',
  statScore: 'Score',

  // ── Titres des piles ────────────────────────────────────────────────────────
  pileFreeCell: 'Cellule libre',
  pileFoundation: 'Fondation',

  // ── Barre d\'outils ─────────────────────────────────────────────────────────
  toolbarPause: 'Pause',
  toolbarMusic: 'Musique',
  toolbarFullscreen: 'Plein écran',
  toolbarExitFullscreen: 'Quitter le plein écran',

  // ── Fenêtre modale de pause ─────────────────────────────────────────────────
  pauseTitle: 'Partie en pause',
  pauseSubtitle: 'Prenez votre temps — votre partie est en sécurité',
  pauseResume: 'Continuer',

  // ── Superposition de victoire ───────────────────────────────────────────────
  winTitle: 'Vous avez gagné !',
  winFinalScore: 'Score',
  winTime: 'Temps',
  winMoves: 'Coups',

  // ── Accessibilité des cartes ────────────────────────────────────────────────
  cardBack: 'Dos de carte',

  // ── Lecteur de musique ──────────────────────────────────────────────────────
  musicPlayerAriaLabel: 'Lecteur de musique',
  musicSolitaireRadio: 'Radio Solitaire',
  musicTracksLabel: 'Pistes',
  musicTracksAriaLabel: 'Sélection de piste',
  musicPlay: 'Lecture',
  musicPause: 'Pause',
  musicVolumeLabel: 'Volume',
  musicVolumeAriaLabel: 'Volume',
  musicMute: 'Couper le son',
  musicUnmute: 'Activer le son',
  musicTrackAriaLabel: (n: number, name: string) => `Piste ${n} : ${name}`,

  // ── Noms des pistes ─────────────────────────────────────────────────────────
  trackNames: [
    'Violoncelle', 'Batterie I', 'Batterie II', 'Flûte', 'Guitare I', 'Guitare II', 'Guitare III',
    'Jazz', 'Nature I', 'Nature II', 'Nature III', 'Nature IV', 'Nature V', 'Nature VI',
    'Orchestre', 'Piano I', 'Piano II', 'Piano III', 'Piano IV', 'Piano V', 'Piano VI',
    'Piano VII', 'Piano VIII', 'Synthé I', 'Synthé II', 'Synthé III', 'Violon',
  ],

  // ── Pied de page ────────────────────────────────────────────────────────────
  footerCopy: 'FreeCell Solitaire. Jouer gratuitement.',
  footerPrivacyPolicy: 'Politique de confidentialité',
  footerTermsOfService: 'Conditions d\'utilisation',
  footerNavAriaLabel: 'Navigation du pied de page',

  // ── Contenu sous la ligne de flottaison ─────────────────────────────────────
  descriptionHeading: 'FreeCell Solitaire',
  descriptionP1: 'Le but est de déplacer les 52 cartes vers les quatre piles de Fondation, en construisant chaque pile par couleur de l\'As au Roi.',
  descriptionP2: 'FreeCell est l\'un des jeux de patience les plus populaires au monde, joué avec un seul jeu standard de 52 cartes. Contrairement à la plupart des variantes de solitaire, toutes les cartes sont distribuées face visible dès le départ, ce qui en fait un jeu de pure habileté et de stratégie. Presque toutes les donnes sont résolubles avec une planification minutieuse. Les quatre cellules libres offrent un stockage temporaire pour vous aider à manœuvrer les cartes.',

  howToPlayHeading: 'Comment jouer',
  howToPlayLayoutHeading: 'La disposition',
  howToPlayLayoutP: 'Le jeu commence avec les 52 cartes distribuées face visible en huit colonnes du tableau. Les quatre premières colonnes comportent chacune 7 cartes ; les quatre colonnes restantes comportent chacune 6 cartes. Quatre Cellules Libres vides se trouvent dans le coin supérieur gauche, et quatre piles de Fondation vides se trouvent dans le coin supérieur droit.',
  howToPlayGoalHeading: 'Votre objectif',
  howToPlayGoalP: 'Construisez les quatre piles de Fondation par couleur de l\'As au Roi. Déplacez d\'abord l\'As de chaque couleur vers une Fondation, puis le 2, le 3, et ainsi de suite jusqu\'au Roi. Une fois les 52 cartes sur les Fondations, vous gagnez.',
  howToPlayTableauHeading: 'Déplacer les cartes dans le tableau',
  howToPlayTableauP: 'Faites glisser une carte sur une autre colonne du tableau. La carte que vous placez doit être de couleur opposée et exactement d\'un rang inférieur à la carte sur laquelle elle atterrit. Par exemple, un 7 rouge peut être placé sur un 8 noir. N\'importe quelle carte peut être placée sur une colonne vide. Vous pouvez déplacer plusieurs cartes à la fois (super-déplacement) si elles forment une séquence descendante de couleurs alternées et qu\'il y a suffisamment de cellules libres et de colonnes vides pour les déplacer théoriquement une par une.',
  howToPlayFreeCellsHeading: 'Utiliser les Cellules Libres',
  howToPlayFreeCellsP: 'Chaque Cellule Libre peut contenir une seule carte à la fois. Utilisez-les comme espace de stockage temporaire pour libérer des cartes du tableau. Vous pouvez replacer une carte d\'une Cellule Libre vers le tableau ou directement vers une Fondation lorsque c\'est valide.',
  howToPlayFoundationsHeading: 'Construire les Fondations',
  howToPlayFoundationsP: 'Déplacez les As vers les piles de Fondation vides, puis construisez vers le haut par couleur (As, 2, 3, ... Roi). Les cartes qu\'il est sûr de déplacer sont automatiquement envoyées vers les Fondations après chaque action.',
  howToPlayUndoHeading: 'Annuler',
  howToPlayUndoP: 'Cliquez sur le bouton Annuler (ou appuyez sur Ctrl+Z / Cmd+Z) pour revenir sur votre dernière action. Vous pouvez annuler jusqu\'à revenir à la donne initiale.',

  rulesHeading: 'Règles — Pas à pas',
  rules: [
    '<strong>Mélanger et distribuer</strong> — Un jeu standard de 52 cartes est mélangé et distribué face visible en 8 colonnes du tableau. Les colonnes 1 à 4 reçoivent 7 cartes chacune ; les colonnes 5 à 8 reçoivent 6 cartes chacune. Toutes les cartes sont visibles dès le départ.',
    '<strong>Le tableau se construit en descendant et en couleurs alternées</strong> — Une carte peut être placée sur toute carte du tableau qui est exactement d\'un rang supérieur et de couleur opposée. Par exemple, un 5 noir peut être placé sur un 6 rouge.',
    '<strong>Super-déplacement de séquences en groupe</strong> — Une suite contiguë de cartes en ordre décroissant et de couleurs alternées peut être déplacée ensemble, à condition qu\'il y ait suffisamment de Cellules Libres vides et de colonnes vides du tableau. Le nombre maximum de cartes que vous pouvez déplacer est égal à (cellules libres vides + 1) × 2^(colonnes vides).',
    '<strong>N\'importe quelle carte remplit une colonne vide</strong> — Lorsqu\'une colonne du tableau est vidée, n\'importe quelle carte seule ou séquence valide en super-déplacement peut y être déplacée.',
    '<strong>Les Cellules Libres contiennent une carte chacune</strong> — Déplacez n\'importe quelle carte seule vers une Cellule Libre vide pour un stockage temporaire. Une seule carte par cellule est autorisée.',
    '<strong>Construisez les Fondations vers le haut par couleur</strong> — Déplacez les As vers les piles de Fondation vides, puis construisez vers le haut dans la même couleur : As, 2, 3, ... Roi.',
    '<strong>Déplacement automatique des cartes sûres</strong> — Après chaque action, les cartes qu\'il est sûr de déplacer vers les Fondations (car elles ne sont plus utiles pour la construction du tableau) sont déplacées automatiquement.',
    '<strong>Annuler n\'importe quel coup</strong> — Utilisez Annuler pour revenir en arrière jusqu\'à la donne initiale.',
    '<strong>Gagnez en remplissant les quatre Fondations</strong> — Placez les 52 cartes sur les quatre piles de Fondation (une séquence complète As-Roi de la même couleur par pile) pour gagner la partie.',
  ],

  shortcutsHeading: 'Raccourcis clavier',
  shortcutsKeyCol: 'Touche',
  shortcutsActionCol: 'Action',
  shortcuts: [
    { key: '← → ↑ ↓ Flèches', action: 'Déplacer le curseur clavier entre les piles' },
    { key: 'Espace', action: 'Sélectionner la ou les cartes au curseur, ou confirmer un déplacement vers la cible en surbrillance' },
    { key: 'Échap', action: 'Annuler la sélection en cours' },
    { key: 'F2', action: 'Commencer une nouvelle partie' },
    { key: 'Ctrl+Z / Cmd+Z', action: 'Annuler la dernière action' },
  ],

  // ── Page Politique de confidentialité ───────────────────────────────────────
  privacyPageTitle: 'Politique de confidentialité — FreeCell Solitaire',
  privacyPageDescription: 'Politique de confidentialité de FreeCell Solitaire. Découvrez comment nous traitons vos données.',
  privacyBackToGame: 'Retour au jeu',
  privacyHeading: 'Politique de confidentialité',
  privacyLastUpdated: 'Dernière mise à jour : 7 avril 2026',
  privacyIntro: 'Cette Politique de confidentialité décrit comment FreeCell Solitaire (« nous », « notre » ou « nos ») traite les informations lorsque vous utilisez notre jeu de cartes gratuit en ligne sur <a href="/">ce site</a>.',
  privacyCollectHeading: 'Informations que nous collectons',
  privacyCollectP: 'Nous n\'exigeons pas que vous créiez un compte ni que vous fournissiez des informations personnelles pour jouer. Nous pouvons collecter automatiquement des données techniques limitées et non personnelles, notamment :',
  privacyCollectItems: ['Type et version du navigateur', 'Système d\'exploitation', 'URL de référence et pages visitées', 'Date et heure des visites'],
  privacyCollectNote: 'Ces données sont collectées de manière agrégée et ne peuvent pas être utilisées pour vous identifier personnellement.',
  privacyStorageHeading: 'Stockage local',
  privacyStorageP: 'Le jeu peut utiliser le stockage local de votre navigateur pour enregistrer les préférences de jeu localement sur votre appareil. Ces données ne quittent jamais votre navigateur et ne nous sont pas transmises.',
  privacyCookiesHeading: 'Cookies',
  privacyCookiesP: 'Nous n\'utilisons pas de cookies de suivi ni de cookies publicitaires. Tout cookie défini est strictement nécessaire au fonctionnement du jeu et ne collecte pas de données personnelles.',
  privacyThirdPartyHeading: 'Services tiers',
  privacyThirdPartyP: 'Nous pouvons utiliser des services tiers tels qu\'un CDN (réseau de diffusion de contenu) pour servir les ressources du jeu. Ces services peuvent collecter des données de journal de serveur standard (telles que les adresses IP) dans le cadre des opérations normales d\'Internet. Nous ne vendons ni ne partageons vos données avec des annonceurs.',
  privacyChildrenHeading: 'Confidentialité des enfants',
  privacyChildrenP: 'Notre jeu convient à tous les âges. Nous ne collectons pas sciemment d\'informations personnelles auprès d\'enfants de moins de 13 ans. Si vous pensez qu\'un enfant nous a fourni des informations personnelles, veuillez nous contacter afin que nous puissions les supprimer.',
  privacyChangesHeading: 'Modifications de cette politique',
  privacyChangesP: 'Nous pouvons mettre à jour cette Politique de confidentialité de temps à autre. Les modifications seront publiées sur cette page avec une date de mise à jour. L\'utilisation continue du jeu après les modifications vaut acceptation de la politique mise à jour.',
  privacyContactHeading: 'Contact',
  privacyContactP: 'Si vous avez des questions concernant cette Politique de confidentialité, vous pouvez nous contacter via les informations disponibles sur notre site.',

  // ── Page Conditions d\'utilisation ───────────────────────────────────────────
  tosPageTitle: 'Conditions d\'utilisation — FreeCell Solitaire',
  tosPageDescription: 'Conditions d\'utilisation de FreeCell Solitaire.',
  tosBackToGame: 'Retour au jeu',
  tosHeading: 'Conditions d\'utilisation',
  tosLastUpdated: 'Dernière mise à jour : 7 avril 2026',
  tosIntro: 'En accédant ou en utilisant FreeCell Solitaire (« le jeu », « le site »), vous acceptez d\'être lié par les présentes Conditions d\'utilisation. Si vous n\'êtes pas d\'accord, veuillez ne pas utiliser le site.',
  tosUseHeading: 'Utilisation du jeu',
  tosUseP: 'FreeCell Solitaire est fourni gratuitement à des fins de divertissement personnel et non commercial. Vous pouvez :',
  tosUseMayItems: ['Jouer pour votre plaisir personnel', 'Partager l\'URL du site avec d\'autres personnes'],
  tosUseMayNotP: 'Vous ne pouvez pas :',
  tosUseMayNotItems: [
    'Copier, redistribuer ou revendre le jeu ou ses ressources sans autorisation',
    'Tenter de rétro-concevoir, décompiler ou altérer le jeu',
    'Utiliser des outils automatisés ou des robots pour interagir avec le jeu',
    'Utiliser le site à des fins illicites',
  ],
  tosIPHeading: 'Propriété intellectuelle',
  tosIPP: 'Tout le contenu de ce site, y compris le code du jeu, les graphismes, les illustrations des cartes et l\'audio, nous appartient ou nous est concédé sous licence. Rien dans les présentes Conditions ne vous accorde de droits sur notre propriété intellectuelle au-delà de ce qui est nécessaire pour jouer.',
  tosWarrantyHeading: 'Exclusion de garanties',
  tosWarrantyP: 'Le jeu est fourni « tel quel » sans aucune garantie, expresse ou implicite. Nous ne garantissons pas que le site sera disponible à tout moment, exempt d\'erreurs ou dépourvu de virus ou d\'autres composants nuisibles.',
  tosLiabilityHeading: 'Limitation de responsabilité',
  tosLiabilityP: 'Dans toute la mesure permise par la loi, nous ne serons pas responsables des dommages indirects, accessoires, spéciaux ou consécutifs découlant de votre utilisation ou de votre incapacité à utiliser le jeu.',
  tosChangesHeading: 'Modifications des présentes conditions',
  tosChangesP: 'Nous nous réservons le droit de mettre à jour ces Conditions à tout moment. Les modifications seront publiées sur cette page avec une date de mise à jour. L\'utilisation continue du jeu après les modifications vaut acceptation des Conditions révisées.',
  tosLawHeading: 'Droit applicable',
  tosLawP: 'Les présentes Conditions sont régies par le droit applicable. Tout litige sera résolu devant les tribunaux compétents de la juridiction applicable.',
  tosContactHeading: 'Contact',
  tosContactP: 'Si vous avez des questions concernant ces Conditions, veuillez nous contacter via les informations disponibles sur notre site.',
};

export type Locale = typeof fr;