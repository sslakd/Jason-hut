# Chơi Game 5 Phút - bản thử nghiệm

Static app chạy tại `/goc-toi/game-5-phut/`.

## Chỗ cập nhật

- `config/games.js`: tên, thể loại, mô tả, hướng dẫn và icon từng game.
- `config/difficulty.js`: bốn mức độ khó và công thức tăng 5% mỗi màn.
- `audio/audio.js`: âm lượng, cao độ và kiểu phản hồi âm thanh.
- `assets/images/`: ảnh riêng của game khi bắt đầu bổ sung đồ họa.
- `styles.css`: theme xanh lá, responsive và giao diện toàn màn hình mobile.
- `app.js`: luồng tìm kiếm, lọc, hướng dẫn, chọn độ khó và màn chơi demo.

Các game hoàn chỉnh sau này nên đặt engine, UI, AI và asset trong thư mục riêng
theo `games/<game-id>/`, không viết luật game trực tiếp vào `app.js`.

