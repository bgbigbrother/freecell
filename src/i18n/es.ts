/**
 * Cadenas de configuración regional en español para FreeCell Solitaire.
 * Para añadir un nuevo idioma, duplica este archivo (ej. fr.ts), traduce los
 * valores y luego pasa el objeto a `setLocale()` en src/i18n/index.ts.
 */
export const es = {
  // ── Metadatos de la página ──────────────────────────────────────────────────
  pageTitle: 'FreeCell Solitaire — Juego de cartas online gratuito',
  pageDescription: 'Juega al FreeCell Solitaire gratis en tu navegador. Sin descargas, sin registro. El clásico juego de cartas con deshacer, movimiento automático, atajos de teclado y jugabilidad estratégica.',

  // ── Botones del encabezado ─────────────────────────────────────────────────
  btnNewGame: 'Nueva partida',
  btnUndo: 'Deshacer',
  btnHint: 'Pista',
  hintNone: 'No hay movimientos disponibles',

  // ── Barra de estadísticas ──────────────────────────────────────────────────
  statTime: 'Tiempo',
  statMoves: 'Movimientos',
  statScore: 'Puntuación',

  // ── Títulos de las pilas ───────────────────────────────────────────────────
  pileFreeCell: 'Celda libre',
  pileFoundation: 'Fundación',

  // ── Barra de herramientas ──────────────────────────────────────────────────
  toolbarPause: 'Pausa',
  toolbarMusic: 'Música',
  toolbarFullscreen: 'Pantalla completa',
  toolbarExitFullscreen: 'Salir de pantalla completa',

  // ── Modal de pausa ─────────────────────────────────────────────────────────
  pauseTitle: 'Juego en pausa',
  pauseSubtitle: 'Tómate tu tiempo — tu partida está a salvo',
  pauseResume: 'Continuar',

  // ── Superposición de victoria ──────────────────────────────────────────────
  winTitle: '¡Has ganado!',
  winFinalScore: 'Puntuación',
  winTime: 'Tiempo',
  winMoves: 'Movimientos',

  // ── Accesibilidad de cartas ────────────────────────────────────────────────
  cardBack: 'Reverso de la carta',

  // ── Reproductor de música ──────────────────────────────────────────────────
  musicPlayerAriaLabel: 'Reproductor de música',
  musicSolitaireRadio: 'Radio Solitario',
  musicTracksLabel: 'Pistas',
  musicTracksAriaLabel: 'Selección de pista',
  musicPlay: 'Reproducir',
  musicPause: 'Pausa',
  musicVolumeLabel: 'Volumen',
  musicVolumeAriaLabel: 'Volumen',
  musicMute: 'Silenciar',
  musicUnmute: 'Activar sonido',
  musicTrackAriaLabel: (n: number, name: string) => `Pista ${n}: ${name}`,

  // ── Nombres de las pistas ──────────────────────────────────────────────────
  trackNames: [
    'Violonchelo', 'Batería I', 'Batería II', 'Flauta', 'Guitarra I', 'Guitarra II', 'Guitarra III',
    'Jazz', 'Naturaleza I', 'Naturaleza II', 'Naturaleza III', 'Naturaleza IV', 'Naturaleza V', 'Naturaleza VI',
    'Orquesta', 'Piano I', 'Piano II', 'Piano III', 'Piano IV', 'Piano V', 'Piano VI',
    'Piano VII', 'Piano VIII', 'Sintetizador I', 'Sintetizador II', 'Sintetizador III', 'Violín',
  ],

  // ── Pie de página ──────────────────────────────────────────────────────────
  footerCopy: 'FreeCell Solitaire. Juego gratuito.',
  footerPrivacyPolicy: 'Política de privacidad',
  footerTermsOfService: 'Términos del servicio',
  footerNavAriaLabel: 'Navegación del pie de página',

  // ── Contenido bajo el pliegue ──────────────────────────────────────────────
  descriptionHeading: 'FreeCell Solitaire',
  descriptionP1: 'El objetivo es mover las 52 cartas a las cuatro pilas de Fundación, construyendo cada pila por palo desde el As hasta el Rey.',
  descriptionP2: 'FreeCell es uno de los juegos de paciencia con cartas más populares del mundo, jugado con una sola baraja estándar de 52 cartas. A diferencia de la mayoría de las variantes de solitario, todas las cartas se reparten boca arriba desde el principio, lo que lo convierte en un juego de pura habilidad y estrategia. Casi todas las manos tienen solución con una planificación cuidadosa. Las cuatro celdas libres proporcionan almacenamiento temporal para ayudar a maniobrar las cartas en posición.',

  howToPlayHeading: 'Cómo jugar',
  howToPlayLayoutHeading: 'La disposición',
  howToPlayLayoutP: 'El juego comienza con las 52 cartas repartidas boca arriba en ocho columnas del tablero. Las primeras cuatro columnas tienen 7 cartas cada una; las cuatro columnas restantes tienen 6 cartas cada una. Cuatro Celdas Libres vacías se sitúan en la esquina superior izquierda, y cuatro pilas de Fundación vacías en la esquina superior derecha.',
  howToPlayGoalHeading: 'Tu objetivo',
  howToPlayGoalP: 'Construye las cuatro pilas de Fundación por palo desde el As hasta el Rey. Mueve primero el As de cada palo a una Fundación, luego el 2, el 3, y así sucesivamente hasta el Rey. Una vez que las 52 cartas estén en las Fundaciones, ganas.',
  howToPlayTableauHeading: 'Moviendo cartas en el tablero',
  howToPlayTableauP: 'Arrastra una carta sobre otra columna del tablero. La carta que coloques debe ser del color opuesto y exactamente un rango inferior a la carta sobre la que se coloca. Por ejemplo, un 7 rojo puede colocarse sobre un 8 negro. Cualquier carta puede colocarse en una columna vacía. Puedes mover varias cartas a la vez (supermovimiento) si forman una secuencia descendente de colores alternos y hay suficientes celdas libres y columnas vacías para moverlas teóricamente una a una.',
  howToPlayFreeCellsHeading: 'Usando las Celdas Libres',
  howToPlayFreeCellsP: 'Cada Celda Libre puede contener una sola carta a la vez. Úsalas como almacenamiento temporal para liberar cartas del tablero. Puedes mover una carta de una Celda Libre de vuelta al tablero o directamente a una Fundación cuando sea válido.',
  howToPlayFoundationsHeading: 'Construyendo las Fundaciones',
  howToPlayFoundationsP: 'Mueve los Ases a las pilas de Fundación vacías, luego construye hacia arriba por palo (As, 2, 3, ... Rey). Las cartas que es seguro mover se envían automáticamente a las Fundaciones después de cada acción.',
  howToPlayUndoHeading: 'Deshacer',
  howToPlayUndoP: 'Haz clic en el botón Deshacer (o presiona Ctrl+Z / Cmd+Z) para revertir tu última acción. Puedes deshacer hasta volver al reparto inicial.',

  rulesHeading: 'Reglas — Paso a paso',
  rules: [
    '<strong>Barajar y repartir</strong> — Una baraja estándar de 52 cartas se baraja y se reparte boca arriba en 8 columnas del tablero. Las columnas 1–4 reciben 7 cartas cada una; las columnas 5–8 reciben 6 cartas cada una. Todas las cartas son visibles desde el principio.',
    '<strong>El tablero se construye hacia abajo en colores alternos</strong> — Una carta puede colocarse sobre cualquier carta del tablero que sea exactamente un rango superior y de color opuesto. Por ejemplo, un 5 negro puede colocarse sobre un 6 rojo.',
    '<strong>Supermovimiento de secuencias como grupo</strong> — Una secuencia contigua de cartas en orden descendente y colores alternos puede moverse junta, siempre que existan suficientes Celdas Libres vacías y columnas del tablero vacías. El número máximo de cartas que puedes mover es igual a (celdas libres vacías + 1) × 2^(columnas vacías).',
    '<strong>Cualquier carta llena una columna vacía</strong> — Cuando se vacía una columna del tablero, se puede mover allí cualquier carta individual o secuencia de supermovimiento válida.',
    '<strong>Las Celdas Libres contienen una carta cada una</strong> — Mueve cualquier carta individual a una Celda Libre vacía para almacenamiento temporal. Solo se permite una carta por celda.',
    '<strong>Construye las Fundaciones hacia arriba por palo</strong> — Mueve los Ases a las pilas de Fundación vacías, luego construye hacia arriba en el mismo palo: As, 2, 3, ... Rey.',
    '<strong>Movimiento automático de cartas seguras</strong> — Después de cada acción, las cartas que es seguro mover a las Fundaciones (es decir, que no se necesitan para construir en el tablero) se mueven automáticamente.',
    '<strong>Deshacer cualquier movimiento</strong> — Usa Deshacer para revertir movimientos hasta el reparto inicial.',
    '<strong>Gana llenando las cuatro Fundaciones</strong> — Coloca las 52 cartas en las cuatro pilas de Fundación (una secuencia completa As-Rey del mismo palo por pila) para ganar el juego.',
  ],

  shortcutsHeading: 'Atajos de teclado',
  shortcutsKeyCol: 'Tecla',
  shortcutsActionCol: 'Acción',
  shortcuts: [
    { key: '← → ↑ ↓ Teclas de flecha', action: 'Mover el cursor del teclado entre las pilas' },
    { key: 'Espacio', action: 'Seleccionar la(s) carta(s) en el cursor, o confirmar un movimiento al destino resaltado' },
    { key: 'Escape', action: 'Cancelar la selección actual' },
    { key: 'F2', action: 'Iniciar una nueva partida' },
    { key: 'Ctrl+Z / Cmd+Z', action: 'Deshacer la última acción' },
  ],

  // ── Página de Política de privacidad ───────────────────────────────────────
  privacyPageTitle: 'Política de privacidad — FreeCell Solitaire',
  privacyPageDescription: 'Política de privacidad de FreeCell Solitaire. Conoce cómo manejamos tus datos.',
  privacyBackToGame: 'Volver al juego',
  privacyHeading: 'Política de privacidad',
  privacyLastUpdated: 'Última actualización: 7 de abril de 2026',
  privacyIntro: 'Esta Política de privacidad describe cómo FreeCell Solitaire ("nosotros", "nos" o "nuestro") maneja la información cuando utilizas nuestro juego de cartas online gratuito en <a href="/">este sitio</a>.',
  privacyCollectHeading: 'Información que recopilamos',
  privacyCollectP: 'No requerimos que crees una cuenta ni que proporciones información personal para jugar. Podemos recopilar automáticamente datos técnicos limitados y no personales, incluyendo:',
  privacyCollectItems: ['Tipo y versión de navegador', 'Sistema operativo', 'URL de referencia y páginas visitadas', 'Fecha y hora de las visitas'],
  privacyCollectNote: 'Estos datos se recopilan de forma agregada y no pueden utilizarse para identificarte personalmente.',
  privacyStorageHeading: 'Almacenamiento local',
  privacyStorageP: 'El juego puede usar el almacenamiento local de tu navegador para guardar preferencias de juego localmente en tu dispositivo. Estos datos nunca salen de tu navegador y no se nos transmiten.',
  privacyCookiesHeading: 'Cookies',
  privacyCookiesP: 'No utilizamos cookies de seguimiento ni cookies publicitarias. Cualquier cookie establecida es estrictamente necesaria para el funcionamiento del juego y no recopila datos personales.',
  privacyThirdPartyHeading: 'Servicios de terceros',
  privacyThirdPartyP: 'Podemos utilizar servicios de terceros, como una CDN (Red de distribución de contenidos), para servir los recursos del juego. Estos servicios pueden recopilar datos de registro de servidor estándar (como direcciones IP) como parte de las operaciones normales de Internet. No vendemos ni compartimos tus datos con anunciantes.',
  privacyChildrenHeading: 'Privacidad infantil',
  privacyChildrenP: 'Nuestro juego es apto para todas las edades. No recopilamos conscientemente información personal de niños menores de 13 años. Si crees que un niño nos ha proporcionado información personal, por favor contáctanos para que podamos eliminarla.',
  privacyChangesHeading: 'Cambios en esta política',
  privacyChangesP: 'Podemos actualizar esta Política de privacidad ocasionalmente. Los cambios se publicarán en esta página con una fecha actualizada. El uso continuado del juego después de los cambios constituye la aceptación de la política actualizada.',
  privacyContactHeading: 'Contacto',
  privacyContactP: 'Si tienes alguna pregunta sobre esta Política de privacidad, puedes contactarnos a través de la información disponible en nuestro sitio.',

  // ── Página de Términos del servicio ────────────────────────────────────────
  tosPageTitle: 'Términos del servicio — FreeCell Solitaire',
  tosPageDescription: 'Términos del servicio de FreeCell Solitaire.',
  tosBackToGame: 'Volver al juego',
  tosHeading: 'Términos del servicio',
  tosLastUpdated: 'Última actualización: 7 de abril de 2026',
  tosIntro: 'Al acceder o utilizar FreeCell Solitaire ("el juego", "el sitio"), aceptas estar sujeto a estos Términos del servicio. Si no estás de acuerdo, por favor no uses el sitio.',
  tosUseHeading: 'Uso del juego',
  tosUseP: 'FreeCell Solitaire se proporciona de forma gratuita para entretenimiento personal y no comercial. Puedes:',
  tosUseMayItems: ['Jugar por disfrute personal', 'Compartir la URL del sitio con otros'],
  tosUseMayNotP: 'No puedes:',
  tosUseMayNotItems: [
    'Copiar, redistribuir o revender el juego o sus recursos sin permiso',
    'Intentar realizar ingeniería inversa, descompilar o manipular el juego',
    'Usar herramientas automatizadas o bots para interactuar con el juego',
    'Usar el sitio con fines ilegales',
  ],
  tosIPHeading: 'Propiedad intelectual',
  tosIPP: 'Todo el contenido de este sitio, incluyendo el código del juego, gráficos, ilustraciones de cartas y audio, es propiedad nuestra o está licenciado para nosotros. Nada en estos Términos te otorga derechos sobre nuestra propiedad intelectual más allá de lo necesario para jugar.',
  tosWarrantyHeading: 'Exención de garantías',
  tosWarrantyP: 'El juego se proporciona "tal cual" sin garantías de ningún tipo, expresas o implícitas. No garantizamos que el sitio esté disponible en todo momento, libre de errores o de virus u otros componentes dañinos.',
  tosLiabilityHeading: 'Limitación de responsabilidad',
  tosLiabilityP: 'En la máxima medida permitida por la ley, no seremos responsables por daños indirectos, incidentales, especiales o consecuentes derivados de tu uso o incapacidad para usar el juego.',
  tosChangesHeading: 'Cambios en estos términos',
  tosChangesP: 'Nos reservamos el derecho de actualizar estos Términos en cualquier momento. Los cambios se publicarán en esta página con una fecha actualizada. El uso continuado del juego después de los cambios constituye tu aceptación de los Términos revisados.',
  tosLawHeading: 'Ley aplicable',
  tosLawP: 'Estos Términos se rigen por la ley aplicable. Cualquier disputa se resolverá en los tribunales competentes de la jurisdicción aplicable.',
  tosContactHeading: 'Contacto',
  tosContactP: 'Si tienes preguntas sobre estos Términos, por favor contáctanos a través de la información disponible en nuestro sitio.',
};

export type Locale = typeof es;