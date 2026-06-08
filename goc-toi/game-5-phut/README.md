# Chơi Game 5 Phút - bản thử nghiệm

Static app chạy tại `/goc-toi/game-5-phut/`.

## Chỗ cập nhật

- `config/games.js`: tên, thể loại, mô tả, hướng dẫn, icon và badge từng game.
- `config/difficulty.js`: bốn mức độ khó và công thức tăng 5% mỗi màn.
- `audio/audio.js`: âm lượng, cao độ và kiểu phản hồi âm thanh.
- `games/mvp-games.js`: luật và vòng đời của sáu game MVP.
- `assets/images/`: ảnh riêng của game khi bắt đầu bổ sung đồ họa.
- `styles.css`: theme xanh lá, responsive và giao diện toàn màn hình mobile.
- `app.js`: luồng tìm kiếm, lọc, hướng dẫn, chọn độ khó và màn chơi demo.

Sáu MVP hiện tại: Thoát Bãi Xe, Phân Loại Nước, Cát Rơi, Đấu Màu, Ô Ăn Quan
và Chim Vượt Gió. Khi mở rộng, tách từng game từ `mvp-games.js` thành
`games/<game-id>/` để quản lý engine, UI, AI và asset độc lập.

Input của game ưu tiên mobile: kéo, vuốt và chạm bằng Pointer Events. Chuột,
bàn phím và các nút điều khiển chỉ là phương án dự phòng trên desktop.
