# Chơi Game 5 Phút - bản thử nghiệm

Static app chạy tại `/goc-toi/game-5-phut/`.

## Chỗ cập nhật

- `config/games.js`: tên, thể loại, mô tả, hướng dẫn, icon và badge từng game.
- `config/difficulty.js`: bốn mức độ khó và công thức tăng 5% mỗi màn.
- `audio/audio.js`: âm lượng, cao độ và kiểu phản hồi âm thanh.
- `games/core/platform.js`: registry, lifecycle, timer, event và gesture dùng chung.
- `games/mvp-games.js`: sáu game MVP đầu tiên.
- `games/<game-id>/game.js`: module độc lập của từng game mới.
- `tests/platform.test.js`: contract test bảo vệ phần dùng chung.
- `assets/images/<game-id>/`: placeholder `cover`, `background`, `primary`.
- `assets/images/manifest.js`: đường dẫn ảnh dùng chung, không ghi cứng trong game.
- `assets/images/`: ảnh riêng của game khi bắt đầu bổ sung đồ họa.
- `styles.css`: theme xanh lá, responsive và giao diện toàn màn hình mobile.
- `app.js`: luồng tìm kiếm, lọc, hướng dẫn, chọn độ khó và màn chơi demo.

20 game hiện có thể chơi: Thoát Bãi Xe, Phân Loại Nước, Cát Rơi, Đấu Màu,
Ô Ăn Quan, Chim Vượt Gió, Caro 3×3, Bốn Quân Liền, Trượt Số, Dò Mìn,
Lật Hình, Tranh Trượt, Rắn Săn Mồi, Xếp Tháp, Xếp Đai Ốc, Sơn Mê Cung,
Khối Sắc Màu, Ghép Trái Cây, Tô Đủ Màu và Domino. Khi tiếp tục mở rộng, tách
từng game thành `games/<game-id>/` để quản lý engine, UI, AI và asset độc lập.
Game mới phải đăng ký qua `GamePlatform.register()` và dùng `options.runtime`
để quản lý timeout, interval, event listener và gesture.

Game phá kỷ lục khai báo `mode: "endless"` trong catalog. Khi kết thúc, engine
gọi `options.onLose({ message, score })`; app tự lưu kỷ lục và chỉ hiện nút
chơi lại, không tạo màn tiếp theo.

Trong ván endless, dùng `options.getEndlessDifficulty(progress)` để lấy
`stage`, `factor` và `multiplier`. Mỗi engine ánh xạ đường cong chung này sang
tốc độ, mật độ chướng ngại hoặc độ phức tạp phù hợp với luật riêng.
Các game endless hiện có: Chim Vượt Gió, Xếp Tháp, Cát Rơi, Ghép Trái Cây,
Trượt Số và Rắn Săn Mồi.

Nhóm game chơi được hiện có 24 game; đợt mới gồm Lấp Đầy Khối, Tìm Từ,
Bắn Cung và Phi Tiêu.

Input của game ưu tiên mobile: kéo, vuốt và chạm bằng Pointer Events. Chuột,
bàn phím và các nút điều khiển chỉ là phương án dự phòng trên desktop.

Các game DOM dùng `GamePlatform.motion.render()` với `data-motion-key` ổn định
để nội suy vị trí giữa hai trạng thái. Motion tự giảm về gần như tức thì khi
thiết bị bật `prefers-reduced-motion`.

Sơn Mê Cung biến đổi layout và điểm xuất phát theo `level`; các phép xoay/lật
giữ nguyên cấu trúc có thể giải của mê cung gốc nhưng tránh lặp giữa các màn kế.
