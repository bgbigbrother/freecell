/**
 * Chuỗi ngôn ngữ tiếng Việt cho FreeCell Solitaire.
 * Để thêm ngôn ngữ mới, hãy sao chép tệp này (ví dụ: fr.ts), dịch các
 * giá trị, sau đó truyền đối tượng vào `setLocale()` trong src/i18n/index.ts.
 */
export const vi = {
  // ── Siêu dữ liệu trang ─────────────────────────────────────────────────────
  pageTitle: 'FreeCell Solitaire — Trò chơi bài trực tuyến miễn phí',
  pageDescription: 'Chơi FreeCell Solitaire miễn phí trên trình duyệt của bạn. Không cần tải xuống, không cần đăng ký. Trò chơi bài cổ điển với hoàn tác, tự động di chuyển, phím tắt và lối chơi chiến thuật.',

  // ── Nút tiêu đề ────────────────────────────────────────────────────────────
  btnNewGame: 'Ván mới',
  btnUndo: 'Hoàn tác',
  btnHint: 'Gợi ý',
  hintNone: 'Không có nước đi khả dụng',

  // ── Thanh thống kê ─────────────────────────────────────────────────────────
  statTime: 'Thời gian',
  statMoves: 'Nước đi',
  statScore: 'Điểm',

  // ── Tiêu đề chồng bài ──────────────────────────────────────────────────────
  pileFreeCell: 'Ô trống',
  pileFoundation: 'Cột nền',

  // ── Thanh công cụ ──────────────────────────────────────────────────────────
  toolbarPause: 'Tạm dừng',
  toolbarMusic: 'Âm nhạc',
  toolbarFullscreen: 'Toàn màn hình',
  toolbarExitFullscreen: 'Thoát toàn màn hình',

  // ── Hộp thoại tạm dừng ─────────────────────────────────────────────────────
  pauseTitle: 'Trò chơi tạm dừng',
  pauseSubtitle: 'Cứ từ từ — ván bài của bạn vẫn an toàn',
  pauseResume: 'Tiếp tục',

  // ── Lớp phủ chiến thắng ────────────────────────────────────────────────────
  winTitle: 'Bạn đã thắng!',
  winFinalScore: 'Điểm',
  winTime: 'Thời gian',
  winMoves: 'Nước đi',

  // ── Trợ năng thẻ bài ───────────────────────────────────────────────────────
  cardBack: 'Mặt sau thẻ bài',

  // ── Trình phát nhạc ────────────────────────────────────────────────────────
  musicPlayerAriaLabel: 'Trình phát nhạc',
  musicSolitaireRadio: 'Radio Solitaire',
  musicTracksLabel: 'Bản nhạc',
  musicTracksAriaLabel: 'Chọn bản nhạc',
  musicPlay: 'Phát',
  musicPause: 'Tạm dừng',
  musicVolumeLabel: 'Âm lượng',
  musicVolumeAriaLabel: 'Âm lượng',
  musicMute: 'Tắt tiếng',
  musicUnmute: 'Bật tiếng',
  musicTrackAriaLabel: (n: number, name: string) => `Bản nhạc ${n}: ${name}`,

  // ── Tên bản nhạc ───────────────────────────────────────────────────────────
  trackNames: [
    'Cello', 'Trống I', 'Trống II', 'Sáo', 'Guitar I', 'Guitar II', 'Guitar III',
    'Jazz', 'Thiên nhiên I', 'Thiên nhiên II', 'Thiên nhiên III', 'Thiên nhiên IV', 'Thiên nhiên V', 'Thiên nhiên VI',
    'Dàn nhạc', 'Piano I', 'Piano II', 'Piano III', 'Piano IV', 'Piano V', 'Piano VI',
    'Piano VII', 'Piano VIII', 'Synth I', 'Synth II', 'Synth III', 'Violin',
  ],

  // ── Chân trang ──────────────────────────────────────────────────────────────
  footerCopy: 'FreeCell Solitaire. Chơi miễn phí.',
  footerPrivacyPolicy: 'Chính sách bảo mật',
  footerTermsOfService: 'Điều khoản dịch vụ',
  footerNavAriaLabel: 'Điều hướng chân trang',

  // ── Nội dung bên dưới ──────────────────────────────────────────────────────
  descriptionHeading: 'FreeCell Solitaire',
  descriptionP1: 'Mục tiêu là di chuyển tất cả 52 lá bài lên bốn cột nền, xây dựng từng cột theo chất từ Át đến Già.',
  descriptionP2: 'FreeCell là một trong những trò chơi bài kiên nhẫn phổ biến nhất thế giới, được chơi với một bộ bài tiêu chuẩn 52 lá. Không giống hầu hết các biến thể solitaire khác, tất cả các lá bài đều được chia ngửa ngay từ đầu, khiến nó trở thành trò chơi thuần túy về kỹ năng và chiến lược. Hầu hết mọi ván bài đều có thể giải được nếu lập kế hoạch cẩn thận. Bốn ô trống cung cấp nơi lưu trữ tạm thời để giúp di chuyển các lá bài vào đúng vị trí.',

  howToPlayHeading: 'Cách chơi',
  howToPlayLayoutHeading: 'Bố cục',
  howToPlayLayoutP: 'Trò chơi bắt đầu với tất cả 52 lá bài được chia ngửa thành tám cột trên bàn. Bốn cột đầu tiên mỗi cột có 7 lá; bốn cột còn lại mỗi cột có 6 lá. Bốn Ô Trống trống nằm ở góc trên bên trái, và bốn cột Nền trống nằm ở góc trên bên phải.',
  howToPlayGoalHeading: 'Mục tiêu của bạn',
  howToPlayGoalP: 'Xây dựng tất cả bốn cột Nền theo chất từ Át đến Già. Đầu tiên, di chuyển quân Át của mỗi chất lên cột Nền, sau đó đến 2, 3, và cứ thế cho đến Già. Khi tất cả 52 lá bài đã nằm trên các cột Nền, bạn sẽ thắng.',
  howToPlayTableauHeading: 'Di chuyển bài trên bàn',
  howToPlayTableauP: 'Kéo một lá bài lên một cột khác trên bàn. Lá bài bạn đặt phải khác màu và có giá trị thấp hơn đúng một bậc so với lá bài mà nó đặt lên. Ví dụ, lá 7 đỏ có thể được đặt lên lá 8 đen. Bất kỳ lá bài nào cũng có thể được đặt lên cột trống. Bạn có thể di chuyển nhiều lá cùng lúc (siêu di chuyển) nếu chúng tạo thành một chuỗi giảm dần xen kẽ màu và có đủ ô trống và cột trống để về mặt lý thuyết có thể di chuyển chúng từng lá một.',
  howToPlayFreeCellsHeading: 'Sử dụng Ô Trống',
  howToPlayFreeCellsP: 'Mỗi Ô Trống chỉ chứa được một lá bài tại một thời điểm. Sử dụng chúng làm nơi lưu trữ tạm thời để giải phóng các lá bài trên bàn. Bạn có thể di chuyển một lá bài từ Ô Trống trở lại bàn hoặc trực tiếp lên cột Nền khi hợp lệ.',
  howToPlayFoundationsHeading: 'Xây dựng cột Nền',
  howToPlayFoundationsP: 'Di chuyển quân Át lên các cột Nền trống, sau đó xây dựng tăng dần theo chất (Át, 2, 3, ... Già). Những lá bài an toàn để di chuyển sẽ được tự động đưa lên cột Nền sau mỗi hành động.',
  howToPlayUndoHeading: 'Hoàn tác',
  howToPlayUndoP: 'Nhấp vào nút Hoàn tác (hoặc nhấn Ctrl+Z / Cmd+Z) để đảo ngược hành động cuối cùng của bạn. Bạn có thể hoàn tác cho đến khi trở lại ván chia bài ban đầu.',

  rulesHeading: 'Luật chơi — Từng bước',
  rules: [
    '<strong>Xào bài &amp; Chia bài</strong> — Một bộ bài tiêu chuẩn 52 lá được xào và chia ngửa thành 8 cột trên bàn. Cột 1–4 nhận mỗi cột 7 lá; cột 5–8 nhận mỗi cột 6 lá. Tất cả các lá bài đều hiển thị ngay từ đầu.',
    '<strong>Bàn xây dựng giảm dần xen kẽ màu</strong> — Một lá bài có thể được đặt lên bất kỳ lá bài nào trên bàn có giá trị cao hơn đúng một bậc và khác màu. Ví dụ, lá 5 đen có thể được đặt lên lá 6 đỏ.',
    '<strong>Siêu di chuyển chuỗi theo nhóm</strong> — Một chuỗi liên tiếp các lá bài theo thứ tự giảm dần và xen kẽ màu có thể được di chuyển cùng nhau, với điều kiện có đủ Ô Trống trống và cột trống trên bàn. Số lá bài tối đa bạn có thể di chuyển bằng (số ô trống trống + 1) × 2^(số cột trống).',
    '<strong>Bất kỳ lá bài nào cũng có thể lấp đầy cột trống</strong> — Khi một cột trên bàn bị trống, bất kỳ lá bài đơn lẻ hoặc chuỗi siêu di chuyển hợp lệ nào cũng có thể được di chuyển vào đó.',
    '<strong>Mỗi Ô Trống chứa một lá bài</strong> — Di chuyển bất kỳ lá bài đơn lẻ nào vào Ô Trống trống để lưu trữ tạm thời. Chỉ cho phép một lá mỗi ô.',
    '<strong>Xây dựng cột Nền tăng dần theo chất</strong> — Di chuyển quân Át lên các cột Nền trống, sau đó xây dựng tăng dần trong cùng một chất: Át, 2, 3, ... Già.',
    '<strong>Tự động di chuyển các lá bài an toàn</strong> — Sau mỗi hành động, những lá bài an toàn để di chuyển lên cột Nền (không còn cần thiết cho việc xây dựng trên bàn) sẽ được tự động di chuyển.',
    '<strong>Hoàn tác bất kỳ nước đi nào</strong> — Sử dụng Hoàn tác để quay lại các nước đi cho đến ván chia bài ban đầu.',
    '<strong>Thắng bằng cách lấp đầy cả bốn cột Nền</strong> — Đặt tất cả 52 lá bài lên bốn cột Nền (mỗi cột một chuỗi hoàn chỉnh Át đến Già cùng chất) để giành chiến thắng.',
  ],

  shortcutsHeading: 'Phím tắt',
  shortcutsKeyCol: 'Phím',
  shortcutsActionCol: 'Hành động',
  shortcuts: [
    { key: '← → ↑ ↓ Phím mũi tên', action: 'Di chuyển con trỏ bàn phím giữa các chồng bài' },
    { key: 'Phím cách', action: 'Chọn (các) lá bài tại con trỏ, hoặc xác nhận di chuyển đến mục tiêu được tô sáng' },
    { key: 'Escape', action: 'Hủy lựa chọn hiện tại' },
    { key: 'F2', action: 'Bắt đầu ván mới' },
    { key: 'Ctrl+Z / Cmd+Z', action: 'Hoàn tác hành động cuối cùng' },
  ],

  // ── Trang Chính sách bảo mật ───────────────────────────────────────────────
  privacyPageTitle: 'Chính sách bảo mật — FreeCell Solitaire',
  privacyPageDescription: 'Chính sách bảo mật cho FreeCell Solitaire. Tìm hiểu cách chúng tôi xử lý dữ liệu của bạn.',
  privacyBackToGame: 'Quay lại trò chơi',
  privacyHeading: 'Chính sách bảo mật',
  privacyLastUpdated: 'Cập nhật lần cuối: ngày 7 tháng 4 năm 2026',
  privacyIntro: 'Chính sách bảo mật này mô tả cách FreeCell Solitaire ("chúng tôi") xử lý thông tin khi bạn sử dụng trò chơi bài trực tuyến miễn phí của chúng tôi tại <a href="/">trang web này</a>.',
  privacyCollectHeading: 'Thông tin chúng tôi thu thập',
  privacyCollectP: 'Chúng tôi không yêu cầu bạn tạo tài khoản hoặc cung cấp bất kỳ thông tin cá nhân nào để chơi. Chúng tôi có thể tự động thu thập dữ liệu kỹ thuật giới hạn, phi cá nhân, bao gồm:',
  privacyCollectItems: ['Loại và phiên bản trình duyệt', 'Hệ điều hành', 'URL giới thiệu và các trang đã truy cập', 'Ngày và giờ truy cập'],
  privacyCollectNote: 'Dữ liệu này được thu thập dưới dạng tổng hợp và không thể được sử dụng để nhận dạng cá nhân bạn.',
  privacyStorageHeading: 'Lưu trữ cục bộ',
  privacyStorageP: 'Trò chơi có thể sử dụng bộ nhớ cục bộ của trình duyệt để lưu các tùy chọn trò chơi cục bộ trên thiết bị của bạn. Dữ liệu này không bao giờ rời khỏi trình duyệt của bạn và không được truyền đến chúng tôi.',
  privacyCookiesHeading: 'Cookie',
  privacyCookiesP: 'Chúng tôi không sử dụng cookie theo dõi hoặc cookie quảng cáo. Bất kỳ cookie nào được thiết lập đều thực sự cần thiết để trò chơi hoạt động và không thu thập dữ liệu cá nhân.',
  privacyThirdPartyHeading: 'Dịch vụ bên thứ ba',
  privacyThirdPartyP: 'Chúng tôi có thể sử dụng các dịch vụ của bên thứ ba như CDN (Mạng phân phối nội dung) để cung cấp tài nguyên trò chơi. Các dịch vụ này có thể thu thập dữ liệu nhật ký máy chủ tiêu chuẩn (như địa chỉ IP) như một phần của hoạt động internet thông thường. Chúng tôi không bán hoặc chia sẻ dữ liệu của bạn với các nhà quảng cáo.',
  privacyChildrenHeading: 'Quyền riêng tư của trẻ em',
  privacyChildrenP: 'Trò chơi của chúng tôi phù hợp với mọi lứa tuổi. Chúng tôi không cố ý thu thập thông tin cá nhân từ trẻ em dưới 13 tuổi. Nếu bạn tin rằng một đứa trẻ đã cung cấp cho chúng tôi thông tin cá nhân, vui lòng liên hệ với chúng tôi để chúng tôi có thể xóa nó.',
  privacyChangesHeading: 'Thay đổi chính sách này',
  privacyChangesP: 'Chúng tôi có thể cập nhật Chính sách bảo mật này theo thời gian. Các thay đổi sẽ được đăng trên trang này với ngày cập nhật. Việc tiếp tục sử dụng trò chơi sau khi thay đổi đồng nghĩa với việc chấp nhận chính sách đã cập nhật.',
  privacyContactHeading: 'Liên hệ',
  privacyContactP: 'Nếu bạn có bất kỳ câu hỏi nào về Chính sách bảo mật này, bạn có thể liên hệ với chúng tôi qua thông tin liên hệ có trên trang web của chúng tôi.',

  // ── Trang Điều khoản dịch vụ ───────────────────────────────────────────────
  tosPageTitle: 'Điều khoản dịch vụ — FreeCell Solitaire',
  tosPageDescription: 'Điều khoản dịch vụ cho FreeCell Solitaire.',
  tosBackToGame: 'Quay lại trò chơi',
  tosHeading: 'Điều khoản dịch vụ',
  tosLastUpdated: 'Cập nhật lần cuối: ngày 7 tháng 4 năm 2026',
  tosIntro: 'Bằng cách truy cập hoặc sử dụng FreeCell Solitaire ("trò chơi", "trang web"), bạn đồng ý bị ràng buộc bởi các Điều khoản dịch vụ này. Nếu bạn không đồng ý, vui lòng không sử dụng trang web.',
  tosUseHeading: 'Sử dụng trò chơi',
  tosUseP: 'FreeCell Solitaire được cung cấp miễn phí cho mục đích giải trí cá nhân, phi thương mại. Bạn có thể:',
  tosUseMayItems: ['Chơi để giải trí cá nhân', 'Chia sẻ URL trang web với người khác'],
  tosUseMayNotP: 'Bạn không được:',
  tosUseMayNotItems: [
    'Sao chép, phân phối lại hoặc bán lại trò chơi hoặc tài sản của trò chơi mà không được phép',
    'Cố gắng thiết kế ngược, biên dịch ngược hoặc can thiệp vào trò chơi',
    'Sử dụng các công cụ tự động hoặc bot để tương tác với trò chơi',
    'Sử dụng trang web cho bất kỳ mục đích bất hợp pháp nào',
  ],
  tosIPHeading: 'Sở hữu trí tuệ',
  tosIPP: 'Tất cả nội dung trên trang web này, bao gồm mã trò chơi, đồ họa, hình ảnh thẻ bài và âm thanh, đều thuộc sở hữu của chúng tôi hoặc được cấp phép cho chúng tôi. Không có điều khoản nào trong Điều khoản này cấp cho bạn bất kỳ quyền nào đối với tài sản trí tuệ của chúng tôi ngoài những gì cần thiết để chơi trò chơi.',
  tosWarrantyHeading: 'Tuyên bố từ chối bảo hành',
  tosWarrantyP: 'Trò chơi được cung cấp "nguyên trạng" mà không có bất kỳ bảo đảm nào, dù rõ ràng hay ngụ ý. Chúng tôi không đảm bảo rằng trang web sẽ luôn có sẵn, không có lỗi hoặc không có vi-rút hoặc các thành phần gây hại khác.',
  tosLiabilityHeading: 'Giới hạn trách nhiệm pháp lý',
  tosLiabilityP: 'Trong phạm vi tối đa được pháp luật cho phép, chúng tôi sẽ không chịu trách nhiệm đối với bất kỳ thiệt hại gián tiếp, ngẫu nhiên, đặc biệt hoặc do hậu quả nào phát sinh từ việc bạn sử dụng hoặc không có khả năng sử dụng trò chơi.',
  tosChangesHeading: 'Thay đổi các Điều khoản này',
  tosChangesP: 'Chúng tôi bảo lưu quyền cập nhật các Điều khoản này bất kỳ lúc nào. Các thay đổi sẽ được đăng trên trang này với ngày cập nhật. Việc tiếp tục sử dụng trò chơi sau khi thay đổi đồng nghĩa với việc bạn chấp nhận các Điều khoản đã sửa đổi.',
  tosLawHeading: 'Luật điều chỉnh',
  tosLawP: 'Các Điều khoản này được điều chỉnh bởi luật hiện hành. Mọi tranh chấp sẽ được giải quyết tại các tòa án có thẩm quyền thích hợp.',
  tosContactHeading: 'Liên hệ',
  tosContactP: 'Nếu bạn có câu hỏi về các Điều khoản này, vui lòng liên hệ với chúng tôi qua thông tin có sẵn trên trang web của chúng tôi.',
};

export type Locale = typeof vi;