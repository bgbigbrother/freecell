/**
 * Textos em português para FreeCell Solitaire.
 * Para adicionar um novo idioma, duplique este arquivo (ex. fr.ts), traduza os
 * valores e passe o objeto para `setLocale()` em src/i18n/index.ts.
 */
export const pt = {
  // ── Metadados da página ─────────────────────────────────────────────────────
  pageTitle: 'FreeCell Solitaire — Jogo de cartas online grátis',
  pageDescription: 'Jogue FreeCell Solitaire gratuitamente no seu navegador. Sem download, sem inscrição. O clássico jogo de cartas com desfazer, movimento automático, atalhos de teclado e jogabilidade estratégica.',

  // ── Botões do cabeçalho ─────────────────────────────────────────────────────
  btnNewGame: 'Novo jogo',
  btnUndo: 'Desfazer',
  btnHint: 'Dica',
  hintNone: 'Nenhum movimento disponível',

  // ── Barra de estatísticas ───────────────────────────────────────────────────
  statTime: 'Tempo',
  statMoves: 'Movimentos',
  statScore: 'Pontuação',

  // ── Títulos das pilhas ──────────────────────────────────────────────────────
  pileFreeCell: 'Célula livre',
  pileFoundation: 'Fundação',

  // ── Barra de ferramentas ────────────────────────────────────────────────────
  toolbarPause: 'Pausa',
  toolbarMusic: 'Música',
  toolbarFullscreen: 'Tela cheia',
  toolbarExitFullscreen: 'Sair da tela cheia',

  // ── Modal de pausa ──────────────────────────────────────────────────────────
  pauseTitle: 'Jogo em pausa',
  pauseSubtitle: 'Sem pressa — o seu jogo está seguro',
  pauseResume: 'Continuar',

  // ── Sobreposição de vitória ─────────────────────────────────────────────────
  winTitle: 'Você venceu!',
  winFinalScore: 'Pontuação',
  winTime: 'Tempo',
  winMoves: 'Movimentos',

  // ── Acessibilidade das cartas ───────────────────────────────────────────────
  cardBack: 'Verso da carta',

  // ── Reprodutor de música ────────────────────────────────────────────────────
  musicPlayerAriaLabel: 'Reprodutor de música',
  musicSolitaireRadio: 'Rádio Solitário',
  musicTracksLabel: 'Faixas',
  musicTracksAriaLabel: 'Seleção de faixa',
  musicPlay: 'Reproduzir',
  musicPause: 'Pausa',
  musicVolumeLabel: 'Volume',
  musicVolumeAriaLabel: 'Volume',
  musicMute: 'Silenciar',
  musicUnmute: 'Ativar som',
  musicTrackAriaLabel: (n: number, name: string) => `Faixa ${n}: ${name}`,

  // ── Nomes das faixas ────────────────────────────────────────────────────────
  trackNames: [
    'Violoncelo', 'Bateria I', 'Bateria II', 'Flauta', 'Guitarra I', 'Guitarra II', 'Guitarra III',
    'Jazz', 'Natureza I', 'Natureza II', 'Natureza III', 'Natureza IV', 'Natureza V', 'Natureza VI',
    'Orquestra', 'Piano I', 'Piano II', 'Piano III', 'Piano IV', 'Piano V', 'Piano VI',
    'Piano VII', 'Piano VIII', 'Sintetizador I', 'Sintetizador II', 'Sintetizador III', 'Violino',
  ],

  // ── Rodapé ──────────────────────────────────────────────────────────────────
  footerCopy: 'FreeCell Solitaire. Jogo gratuito.',
  footerPrivacyPolicy: 'Política de Privacidade',
  footerTermsOfService: 'Termos de Serviço',
  footerNavAriaLabel: 'Navegação do rodapé',

  // ── Conteúdo abaixo da dobra ────────────────────────────────────────────────
  descriptionHeading: 'FreeCell Solitaire',
  descriptionP1: 'O objetivo é mover todas as 52 cartas para as quatro pilhas de Fundação, construindo cada pilha por naipe do Ás ao Rei.',
  descriptionP2: 'FreeCell é um dos jogos de paciência com cartas mais populares do mundo, jogado com um único baralho padrão de 52 cartas. Ao contrário da maioria das variantes de solitário, todas as cartas são distribuídas viradas para cima desde o início, tornando-o um jogo de pura habilidade e estratégia. Quase todas as distribuições têm solução com planejamento cuidadoso. As quatro células livres fornecem armazenamento temporário para ajudar a manobrar as cartas para a posição correta.',

  howToPlayHeading: 'Como jogar',
  howToPlayLayoutHeading: 'O layout',
  howToPlayLayoutP: 'O jogo começa com as 52 cartas distribuídas viradas para cima em oito colunas do tableau. As primeiras quatro colunas têm 7 cartas cada; as quatro colunas restantes têm 6 cartas cada. Quatro Células Livres vazias ficam no canto superior esquerdo, e quatro pilhas de Fundação vazias no canto superior direito.',
  howToPlayGoalHeading: 'Seu objetivo',
  howToPlayGoalP: 'Construa as quatro pilhas de Fundação por naipe, do Ás ao Rei. Mova primeiro o Ás de cada naipe para uma Fundação, depois o 2, o 3 e assim por diante até o Rei. Quando todas as 52 cartas estiverem nas Fundações, você vence.',
  howToPlayTableauHeading: 'Movendo cartas no tableau',
  howToPlayTableauP: 'Arraste uma carta para outra coluna do tableau. A carta que você colocar deve ser de cor oposta e exatamente um valor abaixo da carta sobre a qual será colocada. Por exemplo, um 7 vermelho pode ser colocado sobre um 8 preto. Qualquer carta pode ser colocada em uma coluna vazia. Você pode mover várias cartas de uma vez (supermovimento) se elas formarem uma sequência decrescente de cores alternadas e houver células livres e colunas vazias suficientes para movê-las teoricamente uma a uma.',
  howToPlayFreeCellsHeading: 'Usando as Células Livres',
  howToPlayFreeCellsP: 'Cada Célula Livre pode conter uma carta por vez. Use-as como armazenamento temporário para liberar cartas no tableau. Você pode mover uma carta de uma Célula Livre de volta para o tableau ou diretamente para uma Fundação quando for válido.',
  howToPlayFoundationsHeading: 'Construindo as Fundações',
  howToPlayFoundationsP: 'Mova os Ases para as pilhas de Fundação vazias e depois construa para cima por naipe (Ás, 2, 3, ... Rei). As cartas que podem ser movidas com segurança são enviadas automaticamente para as Fundações após cada ação.',
  howToPlayUndoHeading: 'Desfazer',
  howToPlayUndoP: 'Clique no botão Desfazer (ou pressione Ctrl+Z / Cmd+Z) para reverter sua última ação. Você pode desfazer até voltar à distribuição inicial.',

  rulesHeading: 'Regras — Passo a passo',
  rules: [
    '<strong>Embaralhar e distribuir</strong> — Um baralho padrão de 52 cartas é embaralhado e distribuído virado para cima em 8 colunas do tableau. As colunas 1–4 recebem 7 cartas cada; as colunas 5–8 recebem 6 cartas cada. Todas as cartas ficam visíveis desde o início.',
    '<strong>O tableau é construído em ordem decrescente e cores alternadas</strong> — Uma carta pode ser colocada sobre qualquer carta do tableau que seja exatamente um valor acima e de cor oposta. Por exemplo, um 5 preto pode ser colocado sobre um 6 vermelho.',
    '<strong>Supermovimento de sequências em grupo</strong> — Uma sequência contígua de cartas em ordem decrescente e cores alternadas pode ser movida junta, desde que haja Células Livres vazias e colunas do tableau vazias suficientes. O número máximo de cartas que você pode mover é igual a (células livres vazias + 1) × 2^(colunas vazias).',
    '<strong>Qualquer carta preenche uma coluna vazia</strong> — Quando uma coluna do tableau é esvaziada, qualquer carta individual ou sequência válida de supermovimento pode ser movida para lá.',
    '<strong>As Células Livres contêm uma carta cada</strong> — Mova qualquer carta individual para uma Célula Livre vazia para armazenamento temporário. Apenas uma carta por célula é permitida.',
    '<strong>Construa as Fundações para cima por naipe</strong> — Mova os Ases para as pilhas de Fundação vazias e depois construa para cima no mesmo naipe: Ás, 2, 3, ... Rei.',
    '<strong>Movimento automático de cartas seguras</strong> — Após cada ação, as cartas que podem ser movidas com segurança para as Fundações (não sendo mais necessárias para a construção do tableau) são movidas automaticamente.',
    '<strong>Desfazer qualquer movimento</strong> — Use Desfazer para reverter movimentos até a distribuição inicial.',
    '<strong>Vença preenchendo todas as quatro Fundações</strong> — Coloque todas as 52 cartas nas quatro pilhas de Fundação (uma sequência completa de Ás a Rei do mesmo naipe por pilha) para vencer o jogo.',
  ],

  shortcutsHeading: 'Atalhos de teclado',
  shortcutsKeyCol: 'Tecla',
  shortcutsActionCol: 'Ação',
  shortcuts: [
    { key: '← → ↑ ↓ Setas', action: 'Mover o cursor do teclado entre as pilhas' },
    { key: 'Espaço', action: 'Selecionar a(s) carta(s) no cursor ou confirmar um movimento para o destino destacado' },
    { key: 'Escape', action: 'Cancelar a seleção atual' },
    { key: 'F2', action: 'Iniciar um novo jogo' },
    { key: 'Ctrl+Z / Cmd+Z', action: 'Desfazer a última ação' },
  ],

  // ── Página da Política de Privacidade ───────────────────────────────────────
  privacyPageTitle: 'Política de Privacidade — FreeCell Solitaire',
  privacyPageDescription: 'Política de Privacidade do FreeCell Solitaire. Saiba como tratamos os seus dados.',
  privacyBackToGame: 'Voltar ao jogo',
  privacyHeading: 'Política de Privacidade',
  privacyLastUpdated: 'Última atualização: 7 de abril de 2026',
  privacyIntro: 'Esta Política de Privacidade descreve como o FreeCell Solitaire ("nós", "nos" ou "nosso") trata as informações quando você usa nosso jogo de cartas online gratuito em <a href="/">este site</a>.',
  privacyCollectHeading: 'Informações que coletamos',
  privacyCollectP: 'Não exigimos que você crie uma conta ou forneça informações pessoais para jogar. Podemos coletar automaticamente dados técnicos limitados e não pessoais, incluindo:',
  privacyCollectItems: ['Tipo e versão do navegador', 'Sistema operacional', 'URLs de referência e páginas visitadas', 'Data e hora das visitas'],
  privacyCollectNote: 'Esses dados são coletados de forma agregada e não podem ser usados para identificá-lo pessoalmente.',
  privacyStorageHeading: 'Armazenamento local',
  privacyStorageP: 'O jogo pode usar o armazenamento local do seu navegador para salvar preferências de jogo localmente no seu dispositivo. Esses dados nunca saem do seu navegador e não são transmitidos para nós.',
  privacyCookiesHeading: 'Cookies',
  privacyCookiesP: 'Não usamos cookies de rastreamento ou cookies de publicidade. Quaisquer cookies definidos são estritamente necessários para o funcionamento do jogo e não coletam dados pessoais.',
  privacyThirdPartyHeading: 'Serviços de terceiros',
  privacyThirdPartyP: 'Podemos usar serviços de terceiros, como uma CDN (Rede de Distribuição de Conteúdo), para fornecer os recursos do jogo. Esses serviços podem coletar dados de log de servidor padrão (como endereços IP) como parte das operações normais da Internet. Não vendemos nem compartilhamos seus dados com anunciantes.',
  privacyChildrenHeading: 'Privacidade das crianças',
  privacyChildrenP: 'Nosso jogo é adequado para todas as idades. Não coletamos intencionalmente informações pessoais de crianças menores de 13 anos. Se você acredita que uma criança nos forneceu informações pessoais, entre em contato conosco para que possamos excluí-las.',
  privacyChangesHeading: 'Alterações a esta política',
  privacyChangesP: 'Podemos atualizar esta Política de Privacidade periodicamente. As alterações serão publicadas nesta página com uma data atualizada. O uso contínuo do jogo após as alterações constitui aceitação da política atualizada.',
  privacyContactHeading: 'Contato',
  privacyContactP: 'Se você tiver alguma dúvida sobre esta Política de Privacidade, pode nos contatar por meio das informações disponíveis em nosso site.',

  // ── Página dos Termos de Serviço ────────────────────────────────────────────
  tosPageTitle: 'Termos de Serviço — FreeCell Solitaire',
  tosPageDescription: 'Termos de Serviço do FreeCell Solitaire.',
  tosBackToGame: 'Voltar ao jogo',
  tosHeading: 'Termos de Serviço',
  tosLastUpdated: 'Última atualização: 7 de abril de 2026',
  tosIntro: 'Ao acessar ou usar o FreeCell Solitaire ("o jogo", "o site"), você concorda em se vincular a estes Termos de Serviço. Se você não concorda, por favor, não use o site.',
  tosUseHeading: 'Uso do jogo',
  tosUseP: 'O FreeCell Solitaire é fornecido gratuitamente para entretenimento pessoal e não comercial. Você pode:',
  tosUseMayItems: ['Jogar para diversão pessoal', 'Compartilhar a URL do site com outras pessoas'],
  tosUseMayNotP: 'Você não pode:',
  tosUseMayNotItems: [
    'Copiar, redistribuir ou revender o jogo ou seus recursos sem permissão',
    'Tentar fazer engenharia reversa, descompilar ou adulterar o jogo',
    'Usar ferramentas automatizadas ou bots para interagir com o jogo',
    'Usar o site para qualquer finalidade ilícita',
  ],
  tosIPHeading: 'Propriedade intelectual',
  tosIPP: 'Todo o conteúdo deste site, incluindo o código do jogo, gráficos, arte das cartas e áudio, é de nossa propriedade ou licenciado para nós. Nada nestes Termos concede a você quaisquer direitos sobre nossa propriedade intelectual além do necessário para jogar.',
  tosWarrantyHeading: 'Isenção de garantias',
  tosWarrantyP: 'O jogo é fornecido "no estado em que se encontra", sem garantias de qualquer tipo, expressas ou implícitas. Não garantimos que o site estará disponível o tempo todo, livre de erros ou de vírus ou outros componentes prejudiciais.',
  tosLiabilityHeading: 'Limitação de responsabilidade',
  tosLiabilityP: 'Na máxima extensão permitida por lei, não seremos responsáveis por quaisquer danos indiretos, incidentais, especiais ou consequenciais decorrentes do uso ou da incapacidade de usar o jogo.',
  tosChangesHeading: 'Alterações a estes Termos',
  tosChangesP: 'Reservamo-nos o direito de atualizar estes Termos a qualquer momento. As alterações serão publicadas nesta página com uma data atualizada. O uso contínuo do jogo após as alterações constitui aceitação dos Termos revisados.',
  tosLawHeading: 'Lei aplicável',
  tosLawP: 'Estes Termos são regidos pela lei aplicável. Quaisquer disputas serão resolvidas nos tribunais competentes da jurisdição aplicável.',
  tosContactHeading: 'Contato',
  tosContactP: 'Se você tiver dúvidas sobre estes Termos, entre em contato conosco por meio das informações disponíveis em nosso site.',
};

export type Locale = typeof pt;