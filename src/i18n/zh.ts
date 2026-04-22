/**
 * Chinese (Simplified) locale strings for FreeCell Solitaire.
 * To add a new language, duplicate this file (e.g. fr.ts), translate the
 * values, then pass the object to `setLocale()` in src/i18n/index.ts.
 */
export const zh = {
  // ── Page metadata ──────────────────────────────────────────────────────────
  pageTitle: '空当接龙 — 免费在线纸牌游戏',
  pageDescription: '在浏览器中免费玩空当接龙。无需下载，无需注册。经典纸牌游戏，支持撤销、自动移牌、键盘快捷键和策略性玩法。',

  // ── Header buttons ─────────────────────────────────────────────────────────
  btnNewGame: '新游戏',
  btnUndo: '撤销',
  btnHint: '提示',
  hintNone: '没有可用的移动',

  // ── Stats bar ──────────────────────────────────────────────────────────────
  statTime: '时间',
  statMoves: '步数',
  statScore: '得分',

  // ── Pile titles ────────────────────────────────────────────────────────────
  pileFreeCell: '可用单元',
  pileFoundation: '收牌区',

  // ── Toolbar ────────────────────────────────────────────────────────────────
  toolbarPause: '暂停',
  toolbarMusic: '音乐',
  toolbarFullscreen: '全屏',
  toolbarExitFullscreen: '退出全屏',

  // ── Pause modal ────────────────────────────────────────────────────────────
  pauseTitle: '游戏暂停',
  pauseSubtitle: '慢慢来 — 您的游戏进度很安全',
  pauseResume: '继续',

  // ── Win overlay ────────────────────────────────────────────────────────────
  winTitle: '您赢了！',
  winFinalScore: '得分',
  winTime: '时间',
  winMoves: '步数',

  // ── Card accessibility ─────────────────────────────────────────────────────
  cardBack: '牌背',

  // ── Music player ───────────────────────────────────────────────────────────
  musicPlayerAriaLabel: '音乐播放器',
  musicSolitaireRadio: '纸牌电台',
  musicTracksLabel: '曲目',
  musicTracksAriaLabel: '曲目选择',
  musicPlay: '播放',
  musicPause: '暂停',
  musicVolumeLabel: '音量',
  musicVolumeAriaLabel: '音量',
  musicMute: '静音',
  musicUnmute: '取消静音',
  musicTrackAriaLabel: (n: number, name: string) => `曲目 ${n}：${name}`,

  // ── Track names ────────────────────────────────────────────────────────────
  trackNames: [
    '大提琴', '鼓声 I', '鼓声 II', '长笛', '吉他 I', '吉他 II', '吉他 III',
    '爵士', '自然 I', '自然 II', '自然 III', '自然 IV', '自然 V', '自然 VI',
    '管弦乐', '钢琴 I', '钢琴 II', '钢琴 III', '钢琴 IV', '钢琴 V', '钢琴 VI',
    '钢琴 VII', '钢琴 VIII', '合成器 I', '合成器 II', '合成器 III', '小提琴',
  ],

  // ── Footer ─────────────────────────────────────────────────────────────────
  footerCopy: '空当接龙。免费畅玩。',
  footerPrivacyPolicy: '隐私政策',
  footerTermsOfService: '服务条款',
  footerNavAriaLabel: '页脚导航',

  // ── Below-fold content ─────────────────────────────────────────────────────
  descriptionHeading: '空当接龙',
  descriptionP1: '目标是将全部 52 张牌移动到四个收牌区，每个收牌区按花色从 A 到 K 依次递增排列。',
  descriptionP2: '空当接龙是世界上最受欢迎的纸牌接龙游戏之一，使用一副标准的 52 张牌进行游戏。与大多数纸牌接龙变体不同，所有牌从一开始就正面朝上发放，使其成为一款纯粹考验技巧和策略的游戏。通过精心规划，几乎每一局都有解。四个可用单元提供临时存放空间，帮助您调动纸牌就位。',

  howToPlayHeading: '玩法介绍',
  howToPlayLayoutHeading: '牌局布局',
  howToPlayLayoutP: '游戏开始时，全部 52 张牌正面朝上发放到八列牌桌上。前四列每列 7 张牌；后四列每列 6 张牌。左上角有四个空的可用单元，右上角有四个空的收牌区。',
  howToPlayGoalHeading: '您的目标',
  howToPlayGoalP: '按花色从 A 到 K 依次将牌移至收牌区。先将每种花色的 A 移至收牌区，然后是 2、3，依此类推直到 K。当全部 52 张牌都放入收牌区时，您就获胜了。',
  howToPlayTableauHeading: '在牌桌上移动纸牌',
  howToPlayTableauP: '将一张牌拖到另一列牌桌上。您放置的牌必须与目标牌颜色相反且点数刚好小 1。例如，红色的 7 可以放在黑色的 8 上。任何牌都可以放到空列上。如果您选中了一个颜色交替递减序列，且空闲的可用单元和空列数量理论上足以一次移动一张，则可以一次移动多张牌（超级移动）。',
  howToPlayFreeCellsHeading: '使用可用单元',
  howToPlayFreeCellsP: '每个可用单元一次只能存放一张牌。将它们用作临时存放区，以释放牌桌上的牌。您可以将牌从可用单元移回牌桌，或在符合规则时直接移入收牌区。',
  howToPlayFoundationsHeading: '构建收牌区',
  howToPlayFoundationsP: '将 A 移动到空的收牌区，然后按花色递增排列（A、2、3 ... K）。每次操作后，可以安全移动的牌会自动送入收牌区。',
  howToPlayUndoHeading: '撤销',
  howToPlayUndoP: '点击撤销按钮（或按 Ctrl+Z / Cmd+Z）可撤销上一步操作。您可以一直撤销到初始发牌状态。',

  rulesHeading: '规则 — 逐步详解',
  rules: [
    '<strong>洗牌与发牌</strong> — 一副标准 52 张牌洗匀后，正面朝上发放到 8 列表格中。第 1–4 列每列 7 张牌；第 5–8 列每列 6 张牌。所有牌从一开始就可见。',
    '<strong>牌桌按颜色交替递减排列</strong> — 可以将一张牌放在任何点数刚好大 1 且颜色相反的牌上。例如，黑色的 5 可以放在红色的 6 上。',
    '<strong>将序列作为整体超级移动</strong> — 一个点数递减、颜色交替的连续序列可以整体移动，前提是有足够的空可用单元和空列。最大可移动牌数等于 (空可用单元数 + 1) × 2^(空列数)。',
    '<strong>任何牌都可填补空列</strong> — 当牌桌某一列清空后，可以将任意单张牌或有效的超级移动序列移到该列。',
    '<strong>每个可用单元只能放一张牌</strong> — 可将任意单张牌移入空的可用单元作为临时存放。每个单元只能存放一张牌。',
    '<strong>收牌区按花色递增构建</strong> — 将 A 移到空的收牌区，然后按相同花色递增排列：A、2、3 ... K。',
    '<strong>自动移动安全牌</strong> — 每次操作后，可以安全移入收牌区的牌（即不再为牌桌构建所需的牌）会自动移动。',
    '<strong>撤销任意移动</strong> — 使用撤销功能可以回退到初始发牌状态。',
    '<strong>填满全部四个收牌区即获胜</strong> — 将全部 52 张牌放入四个收牌区（每个收牌区包含从 A 到 K 同花色的完整序列）即可赢得游戏。',
  ],

  shortcutsHeading: '键盘快捷键',
  shortcutsKeyCol: '按键',
  shortcutsActionCol: '操作',
  shortcuts: [
    { key: '← → ↑ ↓ 方向键', action: '在牌堆之间移动键盘光标' },
    { key: '空格键', action: '选中光标处的牌，或确认将牌移动到高亮的目标位置' },
    { key: 'Esc 键', action: '取消当前选择' },
    { key: 'F2', action: '开始新游戏' },
    { key: 'Ctrl+Z / Cmd+Z', action: '撤销上一步操作' },
  ],

  // ── Privacy Policy page ────────────────────────────────────────────────────
  privacyPageTitle: '隐私政策 — 空当接龙',
  privacyPageDescription: '空当接龙的隐私政策。了解我们如何处理您的数据。',
  privacyBackToGame: '返回游戏',
  privacyHeading: '隐私政策',
  privacyLastUpdated: '最后更新日期：2026年4月7日',
  privacyIntro: '本隐私政策说明了空当接龙（"我们"或"我们的"）在您使用我们位于 <a href="/">本网站</a> 的免费在线纸牌游戏时如何处理信息。',
  privacyCollectHeading: '我们收集的信息',
  privacyCollectP: '我们不需要您创建账户或提供任何个人信息即可玩游戏。我们可能会自动收集有限的非个人技术数据，包括：',
  privacyCollectItems: ['浏览器类型和版本', '操作系统', '引荐网址和访问的页面', '访问日期和时间'],
  privacyCollectNote: '这些数据以汇总形式收集，无法用于识别您的个人身份。',
  privacyStorageHeading: '本地存储',
  privacyStorageP: '游戏可能会使用您浏览器的本地存储功能，在您的设备上本地保存游戏偏好设置。这些数据绝不会离开您的浏览器，也不会传输给我们。',
  privacyCookiesHeading: 'Cookie',
  privacyCookiesP: '我们不使用追踪 Cookie 或广告 Cookie。设置的任何 Cookie 都是游戏运行所必需的，不会收集个人数据。',
  privacyThirdPartyHeading: '第三方服务',
  privacyThirdPartyP: '我们可能会使用第三方服务（例如 CDN 内容分发网络）来提供游戏资源。这些服务可能会作为正常互联网运营的一部分收集标准服务器日志数据（例如 IP 地址）。我们不会将您的数据出售或分享给广告商。',
  privacyChildrenHeading: '儿童隐私',
  privacyChildrenP: '我们的游戏适合所有年龄段。我们不会故意收集 13 岁以下儿童的个人信息。如果您认为有儿童向我们提供了个人信息，请联系我们以便我们将其删除。',
  privacyChangesHeading: '本政策的变更',
  privacyChangesP: '我们可能会不时更新本隐私政策。变更内容将发布在此页面上，并注明更新日期。变更后继续使用游戏即表示您接受更新后的政策。',
  privacyContactHeading: '联系方式',
  privacyContactP: '如果您对本隐私政策有任何疑问，可以通过我们网站上的联系信息与我们联系。',

  // ── Terms of Service page ──────────────────────────────────────────────────
  tosPageTitle: '服务条款 — 空当接龙',
  tosPageDescription: '空当接龙的服务条款。',
  tosBackToGame: '返回游戏',
  tosHeading: '服务条款',
  tosLastUpdated: '最后更新日期：2026年4月7日',
  tosIntro: '访问或使用空当接龙（"游戏"、"网站"）即表示您同意受本服务条款的约束。如果您不同意，请不要使用本网站。',
  tosUseHeading: '游戏使用',
  tosUseP: '空当接龙免费提供，仅供个人非商业娱乐用途。您可以：',
  tosUseMayItems: ['出于个人娱乐目的玩游戏', '与他人分享网站网址'],
  tosUseMayNotP: '您不得：',
  tosUseMayNotItems: [
    '未经许可复制、分发或转售游戏或其资源',
    '试图对游戏进行逆向工程、反编译或篡改',
    '使用自动化工具或机器人程序与游戏交互',
    '将网站用于任何非法目的',
  ],
  tosIPHeading: '知识产权',
  tosIPP: '本网站上的所有内容，包括游戏代码、图形、纸牌图案和音频，均归我们所有或授权给我们使用。本条款中的任何内容均未授予您除玩游戏所需之外的任何知识产权权利。',
  tosWarrantyHeading: '免责声明',
  tosWarrantyP: '游戏按"现状"提供，不作任何明示或暗示的担保。我们不保证网站始终可用、无错误或没有病毒或其他有害组件。',
  tosLiabilityHeading: '责任限制',
  tosLiabilityP: '在法律允许的最大范围内，对于因您使用或无法使用游戏而引起的任何间接、偶然、特殊或后果性损害，我们概不负责。',
  tosChangesHeading: '本条款的变更',
  tosChangesP: '我们保留随时更新本条款的权利。变更内容将发布在此页面上，并注明更新日期。变更后继续使用游戏即表示您接受修订后的条款。',
  tosLawHeading: '适用法律',
  tosLawP: '本条款受适用法律管辖。任何争议应由适用司法管辖区的适当法院解决。',
  tosContactHeading: '联系方式',
  tosContactP: '如果您对本条款有任何疑问，请通过我们网站上提供的联系信息与我们联系。',
};

export type Locale = typeof zh;