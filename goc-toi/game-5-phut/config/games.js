window.GAME_CATALOG = [
  {
    id: "thoat-bai-xe", name: "Thoát Bãi Xe", category: "Giải đố", icon: "fa-car-side", color: "mint", badge: "top", status: "mvp",
    summary: "Dịch chuyển những chiếc xe đang chắn đường để mở lối ra.",
    objective: "Đưa xe chính ra khỏi bãi với số lượt di chuyển ít nhất.",
    steps: ["Chạm và kéo xe theo chiều xe có thể di chuyển.", "Quan sát khoảng trống trước khi dịch chuyển.", "Mở một đường thông từ xe chính tới lối ra."]
  },
  {
    id: "xep-dai-oc", name: "Xếp Đai Ốc", category: "Sắp xếp", icon: "fa-screwdriver-wrench", color: "amber", status: "mvp",
    summary: "Chuyển các khối màu giữa những cột để sắp xếp chúng.",
    objective: "Đưa toàn bộ khối cùng màu về chung một cột.",
    steps: ["Chọn khối nằm trên cùng của một cột.", "Chọn cột còn chỗ để chuyển khối sang.", "Hoàn thành khi mỗi cột chỉ còn một màu."]
  },
  {
    id: "son-me-cung", name: "Sơn Mê Cung", category: "Giải đố", icon: "fa-paint-roller", color: "sky", status: "mvp",
    summary: "Lăn quả bóng qua mê cung và phủ màu mọi lối đi.",
    objective: "Sơn kín toàn bộ ô trống mà không bỏ sót đường nào.",
    steps: ["Vuốt theo bốn hướng để bóng lăn.", "Bóng chỉ dừng khi gặp tường.", "Tính đường đi để sơn được mọi ô."]
  },
  {
    id: "khoi-sac-mau", name: "Khối Sắc Màu", category: "Giải đố", icon: "fa-shapes", color: "coral", status: "mvp",
    summary: "Sắp các khối màu vào đúng vị trí trong một bàn chơi gọn gàng.",
    objective: "Ghép và dọn các khối theo yêu cầu của từng màn.",
    steps: ["Quan sát hình dạng và màu của các khối.", "Kéo khối tới vị trí phù hợp.", "Hoàn thành mục tiêu trước khi hết chỗ."]
  },
  {
    id: "ghep-trai-cay", name: "Ghép Trái Cây", category: "Ghép nối", icon: "fa-apple-whole", color: "coral", badge: "new", status: "mvp",
    summary: "Thả và ghép những trái cây giống nhau thành loại lớn hơn.",
    objective: "Tạo trái cây lớn nhất mà không để hộp bị đầy.",
    steps: ["Chọn vị trí rồi thả trái cây xuống.", "Hai trái giống nhau chạm vào sẽ hợp nhất.", "Giữ trái cây dưới vạch giới hạn."]
  },
  {
    id: "to-du-mau", name: "Tô Đủ Màu", category: "Giải đố", icon: "fa-fill-drip", color: "violet", status: "mvp",
    summary: "Lan màu từ các điểm bắt đầu để phủ kín bàn chơi.",
    objective: "Lấp đầy mọi ô mà các vùng màu không chồng lên nhau.",
    steps: ["Chạm một điểm màu để bắt đầu.", "Kéo đường màu qua các ô trống.", "Phủ kín bàn chơi bằng tất cả màu đã cho."]
  },
  {
    id: "xep-thap", name: "Xếp Tháp", category: "Phản xạ", icon: "fa-building", color: "amber", status: "mvp", mode: "endless",
    summary: "Thả các tầng đúng nhịp để dựng một ngọn tháp thật cao.",
    objective: "Xếp chồng nhiều tầng nhất mà không làm tháp đổ.",
    steps: ["Chạm để thả tầng đang di chuyển.", "Phần lệch khỏi tầng dưới sẽ bị cắt bỏ.", "Giữ nhịp để mặt tháp không bị thu nhỏ."]
  },
  {
    id: "xep-nuoc", name: "Phân Loại Nước", category: "Sắp xếp", icon: "fa-flask", color: "sky", badge: "top", status: "mvp",
    summary: "Rót những lớp nước màu qua lại giữa các ống thủy tinh.",
    objective: "Đưa mỗi màu về một ống riêng biệt.",
    steps: ["Kéo ống muốn rót sang ống nhận.", "Chỉ rót lên lớp cùng màu hoặc ống trống.", "Sắp để mỗi ống hoàn chỉnh một màu."]
  },
  {
    id: "domino", name: "Domino", category: "Cờ bàn", icon: "fa-dice-two", color: "ink", status: "mvp",
    summary: "Nối những quân domino có cùng số chấm trên bàn.",
    objective: "Đánh hết quân trước đối thủ hoặc đạt điểm cao nhất.",
    steps: ["Chọn quân có đầu khớp với một đầu trên bàn.", "Đặt quân vào phía phù hợp.", "Nếu không còn quân hợp lệ, bạn phải bỏ lượt."]
  },
  {
    id: "cat-roi", name: "Cát Rơi", category: "Phản xạ", icon: "fa-hourglass-half", color: "amber", badge: "new", status: "mvp",
    summary: "Xoay và xếp những cụm cát màu đang rơi xuống.",
    objective: "Tạo dải màu liền để xóa cát và giữ bàn không bị đầy.",
    steps: ["Vuốt ngang để di chuyển, vuốt lên để xoay.", "Vuốt xuống để thả nhanh cụm cát.", "Xóa đủ hàng để giữ khoảng trống."]
  },
  {
    id: "lap-day-khoi", name: "Lấp Đầy Khối", category: "Giải đố", icon: "fa-border-all", color: "mint",
    summary: "Đặt những mảnh hình học vào bảng để lấp kín khoảng trống.",
    objective: "Dùng đủ các mảnh để hoàn thiện hình của mỗi màn.",
    steps: ["Chọn một mảnh bên ngoài bàn.", "Kéo và xoay mảnh nếu màn cho phép.", "Đặt mọi mảnh vừa khít, không chồng nhau."]
  },
  {
    id: "chim-vuot-gio", name: "Chim Vượt Gió", category: "Phản xạ", icon: "fa-feather-pointed", color: "sky", status: "mvp", mode: "endless",
    summary: "Giữ chú chim bay qua những khoảng trống liên tiếp.",
    objective: "Vượt càng nhiều chướng ngại càng tốt mà không va chạm.",
    steps: ["Chạm màn hình để chim vỗ cánh bay lên.", "Thả tay để chim hạ thấp dần.", "Canh nhịp bay qua giữa các cột."]
  },
  {
    id: "bich-chien", name: "Bích Chiến", category: "Bài", icon: "fa-spade", color: "ink",
    summary: "Đấu bài theo vòng và dự đoán số lượt mình có thể thắng.",
    objective: "Thực hiện đúng cam kết và giành nhiều điểm nhất.",
    steps: ["Đặt số lượt bạn dự đoán sẽ thắng.", "Đánh cùng chất nếu trên tay còn chất đó.", "Quân bích là chủ và thắng các chất còn lại."]
  },
  {
    id: "spiderette", name: "Spiderette", category: "Bài", icon: "fa-layer-group", color: "violet",
    summary: "Xếp một bộ bài theo chuỗi giảm dần như phiên bản Nhện gọn nhẹ.",
    objective: "Tạo đủ chuỗi từ K tới A để dọn sạch bàn.",
    steps: ["Xếp lá nhỏ hơn lên lá lớn hơn một bậc.", "Chỉ chuyển cả chuỗi khi các lá cùng chất.", "Chia thêm bài khi không còn nước đi phù hợp."]
  },
  {
    id: "nhen", name: "Nhện Solitaire", category: "Bài", icon: "fa-table-cells-large", color: "ink",
    summary: "Sắp nhiều bộ bài thành những chuỗi đồng chất giảm dần.",
    objective: "Hoàn thành mọi chuỗi từ K tới A và dọn sạch bàn.",
    steps: ["Xếp lá nhỏ hơn lên lá lớn hơn một bậc.", "Ưu tiên tạo chuỗi cùng chất để di chuyển.", "Lật lá úp và dùng lượt chia bài thật hợp lý."]
  },
  {
    id: "tim-tu", name: "Tìm Từ", category: "Từ ngữ", icon: "fa-font", color: "mint",
    summary: "Tìm những từ tiếng Việt đang ẩn trong bảng chữ cái.",
    objective: "Tìm đủ danh sách từ trước khi thời gian kết thúc.",
    steps: ["Đọc danh sách từ cần tìm.", "Kéo qua các chữ theo hàng, cột hoặc đường chéo.", "Từ đúng sẽ được đánh dấu khỏi danh sách."]
  },
  {
    id: "ban-cung", name: "Bắn Cung", category: "Thể thao", icon: "fa-bullseye", color: "coral",
    summary: "Canh hướng và lực để đưa mũi tên vào gần tâm bia.",
    objective: "Ghi số điểm cao nhất qua một số lượt bắn giới hạn.",
    steps: ["Giữ để ngắm và điều chỉnh lực bắn.", "Tính hướng gió hiển thị trên màn hình.", "Thả tay đúng lúc để bắn tên."]
  },
  {
    id: "phi-tieu", name: "Phi Tiêu", category: "Thể thao", icon: "fa-location-crosshairs", color: "coral",
    summary: "Ném phi tiêu vào những vùng điểm trên bảng tròn.",
    objective: "Đạt điểm mục tiêu với ít lượt ném nhất.",
    steps: ["Kéo để chọn hướng và lực ném.", "Thả tay để phi tiêu bay tới bảng.", "Nhắm các vòng nhân điểm để tiến nhanh hơn."]
  },
  {
    id: "gop-so", name: "Gộp Số", category: "Ghép nối", icon: "fa-hashtag", color: "violet",
    summary: "Ghép những ô số giống nhau để tạo giá trị lớn hơn.",
    objective: "Tạo số mục tiêu trước khi bàn không còn chỗ.",
    steps: ["Chọn hoặc kéo các ô số giống nhau.", "Các ô hợp lệ sẽ nhập thành số lớn hơn.", "Giữ khoảng trống để tiếp tục tạo chuỗi."]
  },
  {
    id: "noi-so", name: "Nối Số", category: "Ghép nối", icon: "fa-code-branch", color: "sky",
    summary: "Nối các số theo thứ tự để tạo một đường đi liên tục.",
    objective: "Kết nối đủ chuỗi số mà không để các đường giao nhau.",
    steps: ["Chạm số bắt đầu của một chuỗi.", "Kéo qua các ô theo thứ tự tăng dần.", "Hoàn tất mọi chuỗi trên bàn."]
  },
  {
    id: "dau-mau", name: "Đấu Màu", category: "Bài", icon: "fa-clone", color: "coral", status: "mvp",
    summary: "Đánh lá cùng màu hoặc cùng ký hiệu trong một ván bài nhanh.",
    objective: "Đánh hết bài trên tay trước những người chơi còn lại.",
    steps: ["Kéo lá cùng màu hoặc cùng ký hiệu lên bàn.", "Chạm chồng bài khi không có nước đi.", "Đánh hết bài trên tay trước đối thủ."]
  },
  {
    id: "noi-mau", name: "Nối Màu", category: "Giải đố", icon: "fa-bezier-curve", color: "violet",
    summary: "Nối từng cặp điểm cùng màu bằng những đường không giao nhau.",
    objective: "Kết nối mọi cặp và phủ kín bàn chơi.",
    steps: ["Chạm một điểm màu để bắt đầu.", "Kéo đường tới điểm còn lại cùng màu.", "Điều chỉnh để các đường không chạm nhau."]
  },
  {
    id: "freecell", name: "FreeCell", category: "Bài", icon: "fa-grip", color: "mint",
    summary: "Dùng bốn ô trống để sắp một bộ bài về đúng thứ tự.",
    objective: "Đưa toàn bộ bài lên bốn chồng theo chất từ A tới K.",
    steps: ["Xếp bài dưới bàn xen kẽ màu và giảm dần.", "Dùng ô trống để giữ tạm một lá.", "Mở đường đưa bài lên chồng đích theo từng chất."]
  },
  {
    id: "co-ca-ngua", name: "Cờ Cá Ngựa", category: "Cờ Việt", icon: "fa-horse", color: "amber",
    summary: "Đổ xúc xắc và đưa bốn quân cờ đi hết vòng đua.",
    objective: "Đưa toàn bộ quân của bạn về chuồng trước đối thủ.",
    steps: ["Đổ xúc xắc để xác định số bước.", "Chọn quân hợp lệ để di chuyển.", "Đá quân đối thủ và đưa quân mình lên đủ bậc chuồng."]
  },
  {
    id: "solitaire", name: "Solitaire", category: "Bài", icon: "fa-diamond", color: "coral",
    summary: "Xếp bộ bài cổ điển bằng cách lật mở và tạo chuỗi xen màu.",
    objective: "Đưa toàn bộ bài lên bốn chồng theo chất từ A tới K.",
    steps: ["Xếp lá giảm dần và xen kẽ đỏ đen.", "Lật lá úp khi một cột được mở.", "Đưa các lá lên chồng đích theo đúng chất."]
  },
  {
    id: "o-an-quan", name: "Ô Ăn Quan", category: "Cờ Việt", icon: "fa-circle-dot", color: "mint", status: "mvp",
    summary: "Rải quân quanh bàn và tính đường để thu về nhiều dân, quan.",
    objective: "Kết thúc ván với tổng điểm cao hơn đối thủ.",
    steps: ["Vuốt từ một ô dân sang trái hoặc phải.", "Quân được rải lần lượt theo hướng vuốt.", "Tận dụng ô trống để ăn quân ở ô kế tiếp."]
  },
  {
    id: "co-nha-dat", name: "Cờ Nhà Đất", category: "Cờ bàn", icon: "fa-house-chimney", color: "sky",
    summary: "Mua bán địa điểm và quản lý tài sản trên một bàn cờ kinh tế.",
    objective: "Xây dựng khối tài sản vững nhất và không bị phá sản.",
    steps: ["Đổ xúc xắc và di chuyển quanh bàn.", "Cân nhắc mua địa điểm bạn dừng chân.", "Thu phí, trao đổi và quản lý tiền mặt hợp lý."]
  },
  {
    id: "sudoku", name: "Sudoku", category: "Giải đố", icon: "fa-table-cells", color: "ink",
    summary: "Điền số vào lưới bằng suy luận, không cần tính toán phức tạp.",
    objective: "Mỗi hàng, cột và vùng đều có đủ số mà không trùng lặp.",
    steps: ["Chọn một ô trống trên bảng.", "Điền số hợp lệ hoặc ghi chú các khả năng.", "Dùng các số đã có để loại trừ và hoàn thiện lưới."]
  },
  {
    id: "trai-tim", name: "Trái Tim", category: "Bài", icon: "fa-heart", color: "coral",
    summary: "Tránh thu về những lá phạt trong trò đấu bài theo vòng.",
    objective: "Giữ tổng điểm phạt thấp nhất sau các ván.",
    steps: ["Đánh cùng chất với lá đầu nếu có thể.", "Tránh ăn các lá cơ và quân Q bích.", "Tính thời điểm đẩy lá phạt sang người khác."]
  },
  {
    id: "co-vua", name: "Cờ Vua", category: "Cờ bàn", icon: "fa-chess-knight", color: "ink",
    summary: "Đấu trí trên bàn 8×8 với những quân cờ có cách đi riêng.",
    objective: "Chiếu hết vua của đối thủ trước khi vua mình bị bắt.",
    steps: ["Chọn quân để xem các nước đi hợp lệ.", "Phối hợp quân để kiểm soát bàn cờ.", "Bảo vệ vua và tạo thế chiếu hết."]
  },
  {
    id: "co-tuong", name: "Cờ Tướng", category: "Cờ Việt", icon: "fa-chess-rook", color: "coral",
    summary: "Điều binh trên bàn cờ sông, cung và đối đầu trực diện.",
    objective: "Chiếu bí tướng của đối phương.",
    steps: ["Chọn quân để xem những vị trí có thể đi.", "Tận dụng đặc tính riêng của từng quân.", "Giữ tướng an toàn và phối hợp thế tấn công."]
  },
  {
    id: "co-lat", name: "Cờ Lật", category: "Cờ bàn", icon: "fa-circle-half-stroke", color: "ink",
    summary: "Kẹp quân đối thủ giữa hai quân của mình để lật màu bàn cờ.",
    objective: "Có nhiều quân màu của bạn hơn khi bàn không còn nước đi.",
    steps: ["Đặt quân vào ô tạo được một hàng kẹp.", "Mọi quân đối thủ bị kẹp sẽ đổi sang màu của bạn.", "Chiếm góc và hạn chế nước đi của đối thủ."]
  },
  {
    id: "hai-chien", name: "Hải Chiến", category: "Cờ bàn", icon: "fa-ship", color: "sky",
    summary: "Dò tìm hạm đội đang được đối thủ giấu trên mặt biển.",
    objective: "Đánh chìm toàn bộ tàu đối phương trước khi mất hạm đội.",
    steps: ["Sắp xếp tàu của bạn trên vùng biển.", "Chọn một tọa độ để khai hỏa.", "Dựa vào dấu trúng và trượt để tìm các tàu còn lại."]
  },
  {
    id: "ghep-ba", name: "Ghép Ba", category: "Ghép nối", icon: "fa-cubes-stacked", color: "violet",
    summary: "Chọn các vật giống nhau và gom thành nhóm ba để dọn bàn.",
    objective: "Xóa hết vật thể trước khi khay chứa bị đầy.",
    steps: ["Chạm một vật đang nhìn thấy để đưa vào khay.", "Ba vật giống nhau trong khay sẽ biến mất.", "Tính thứ tự chọn để không dùng hết chỗ trống."]
  },
  {
    id: "truot-so", name: "Trượt Số", category: "Ghép nối", icon: "fa-grip-vertical", color: "amber", status: "mvp",
    summary: "Trượt toàn bộ ô số và gộp những cặp có cùng giá trị.",
    objective: "Tạo ô số mục tiêu trước khi lưới bị lấp kín.",
    steps: ["Vuốt lên, xuống, trái hoặc phải.", "Hai ô cùng số chạm nhau sẽ hợp nhất.", "Giữ ô lớn ở một góc để dễ kiểm soát bàn."]
  },
  {
    id: "bon-quan-lien", name: "Bốn Quân Liền", category: "Cờ bàn", icon: "fa-circle-nodes", color: "coral", status: "mvp",
    summary: "Thả quân vào cột và tạo một hàng bốn quân liên tiếp.",
    objective: "Nối bốn quân theo ngang, dọc hoặc chéo trước đối thủ.",
    steps: ["Chọn cột để thả quân xuống.", "Quan sát cả thế tấn công lẫn phòng thủ.", "Tạo một đường bốn quân liền nhau."]
  },
  {
    id: "caro-ba", name: "Caro 3×3", category: "Cờ bàn", icon: "fa-xmarks-lines", color: "mint", status: "mvp",
    summary: "Đặt X và O trong một ván đấu trí nhỏ gọn.",
    objective: "Tạo hàng ba ký hiệu trước đối thủ.",
    steps: ["Chọn một ô trống để đặt ký hiệu.", "Chặn đối thủ khi họ có hai ô liền nhau.", "Nối ba ô theo hàng, cột hoặc đường chéo."]
  },
  {
    id: "backgammon", name: "Cờ Đua Quân", category: "Cờ bàn", icon: "fa-dice", color: "amber",
    summary: "Di chuyển quân theo xúc xắc trong một cuộc đua đầy tính toán.",
    objective: "Đưa toàn bộ quân ra khỏi bàn trước đối thủ.",
    steps: ["Đổ hai xúc xắc để nhận số bước.", "Di chuyển quân tới các điểm hợp lệ.", "Chặn, bắt quân lẻ và đưa quân về khu nhà."]
  },
  {
    id: "do-min", name: "Dò Mìn", category: "Giải đố", icon: "fa-bomb", color: "ink", status: "mvp",
    summary: "Mở những ô an toàn bằng các con số gợi ý quanh bãi mìn.",
    objective: "Mở toàn bộ ô không có mìn mà không kích nổ.",
    steps: ["Chạm để mở một ô chưa biết.", "Dùng con số để suy ra số mìn xung quanh.", "Đánh dấu những ô chắc chắn có mìn."]
  },
  {
    id: "doan-chu", name: "Đoán Chữ", category: "Từ ngữ", icon: "fa-spell-check", color: "violet",
    summary: "Đoán một từ bí mật qua từng chữ cái.",
    objective: "Tìm đúng từ trước khi dùng hết số lần đoán.",
    steps: ["Chọn một chữ cái bạn nghĩ có trong từ.", "Chữ đúng sẽ hiện vào mọi vị trí tương ứng.", "Dùng chủ đề và các chữ đã mở để đoán cả từ."]
  },
  {
    id: "khoi-go", name: "Khối Gỗ", category: "Giải đố", icon: "fa-cubes", color: "amber",
    summary: "Đặt những khối gỗ vào lưới và hoàn thành các hàng.",
    objective: "Xóa nhiều hàng nhất trước khi không còn chỗ đặt.",
    steps: ["Chọn một trong ba khối đang có.", "Kéo khối vào vùng trống vừa hình.", "Lấp kín hàng hoặc cột để xóa chúng."]
  },
  {
    id: "ran-san-moi", name: "Rắn Săn Mồi", category: "Phản xạ", icon: "fa-staff-snake", color: "mint", status: "mvp",
    summary: "Điều khiển chú rắn ăn quà và dài thêm qua từng lượt.",
    objective: "Ăn được nhiều quà nhất mà không va vào thân hoặc tường.",
    steps: ["Vuốt để đổi hướng di chuyển.", "Đi tới món quà để tăng điểm và chiều dài.", "Chừa đường quay đầu khi thân rắn dài dần."]
  },
  {
    id: "lat-hinh", name: "Lật Hình", category: "Trí nhớ", icon: "fa-copy", color: "sky", status: "mvp",
    summary: "Ghi nhớ vị trí và tìm những cặp hình giống nhau.",
    objective: "Mở hết các cặp với số lượt lật ít nhất.",
    steps: ["Chạm để lật hai thẻ trong mỗi lượt.", "Cặp giống nhau sẽ được giữ mở.", "Ghi nhớ các thẻ chưa khớp để tìm ở lượt sau."]
  },
  {
    id: "tranh-truot", name: "Tranh Trượt", category: "Giải đố", icon: "fa-puzzle-piece", color: "violet", status: "mvp",
    summary: "Trượt từng mảnh qua ô trống để khôi phục bức hình.",
    objective: "Sắp mọi mảnh về đúng vị trí ban đầu.",
    steps: ["Chạm mảnh cạnh ô trống để di chuyển.", "Sắp từng hàng hoặc vùng theo thứ tự.", "Hoàn thiện bức tranh bằng ít lượt nhất."]
  },
  {
    id: "bong-ban", name: "Bóng Bàn", category: "Thể thao", icon: "fa-table-tennis-paddle-ball", color: "coral",
    summary: "Đỡ và điều hướng bóng trong những pha đôi công nhanh.",
    objective: "Ghi đủ điểm trước đối thủ.",
    steps: ["Kéo vợt theo vị trí bóng đang tới.", "Đánh lệch tâm để đổi hướng bóng.", "Canh nhịp và tốc độ để đối thủ khó đỡ."]
  },
  {
    id: "quan-vot", name: "Quần Vợt", category: "Thể thao", icon: "fa-baseball", color: "mint",
    summary: "Di chuyển, đón bóng và lựa chọn hướng đánh trên sân.",
    objective: "Thắng các điểm và hoàn thành ván đấu.",
    steps: ["Kéo để di chuyển tới vị trí đón bóng.", "Vuốt theo hướng bạn muốn đánh trả.", "Canh thời điểm để tạo cú đánh mạnh và chính xác."]
  },
  {
    id: "cham-va-o", name: "Chấm Và Ô", category: "Cờ bàn", icon: "fa-braille", color: "sky",
    summary: "Nối hai chấm cạnh nhau và khép kín những ô vuông.",
    objective: "Sở hữu nhiều ô hơn đối thủ khi mọi cạnh đã được vẽ.",
    steps: ["Chọn hai chấm kề nhau để nối một cạnh.", "Khép cạnh thứ tư để chiếm ô và được đi tiếp.", "Tránh trao chuỗi ô dài cho đối thủ."]
  },
  {
    id: "goc-thu-gian", name: "Góc Thư Giãn", category: "Thư giãn", icon: "fa-water", color: "mint",
    summary: "Chạm, kéo và quan sát những phản hồi nhỏ giúp đầu óc dịu lại.",
    objective: "Không có thắng thua, chỉ cần chơi theo nhịp của bạn.",
    steps: ["Chọn một vật thể hoặc bề mặt.", "Chạm, kéo hay giữ để tạo phản hồi.", "Dừng lại bất cứ khi nào bạn thấy đủ."]
  }
];

window.GAME_CATEGORIES = ["Tất cả", "Giải đố", "Sắp xếp", "Ghép nối", "Phản xạ", "Bài", "Cờ bàn", "Cờ Việt", "Từ ngữ", "Trí nhớ", "Thể thao", "Thư giãn"];
