# Quy tắc tạo game

Tài liệu này là contract chung cho mọi game trong Chơi Game 5 Phút.

## 1. Trải nghiệm

- Toàn bộ tên, mô tả, hướng dẫn và phản hồi trong game dùng tiếng Việt tự nhiên.
- Giao diện tối giản, dịu mắt, ưu tiên bảng màu xanh lá nhạt; icon dùng Font Awesome.
- Âm thanh có nhưng nhẹ, không phát liên tục và phải đi qua `GameAudio`.
- Mobile là nền tảng chính: vùng chơi chiếm trọn màn hình, thao tác chính là chạm, kéo, vuốt hoặc giữ. Chuột và bàn phím chỉ là phương án dự phòng.
- Mỗi game có 1-2 câu mô tả ngắn, mục tiêu và hướng dẫn chơi trong catalog.

## 2. Cấu trúc module

- Mỗi game nằm riêng tại `games/<game-id>/game.js`.
- Game đăng ký bằng `GamePlatform.register("<game-id>", factory)`.
- Không ghi logic riêng của game vào `app.js`, `platform.js` hoặc module của game khác.
- Timer, interval, listener, gesture và cleanup phải dùng `options.runtime`.
- Factory trả về lifecycle object. Chỉ khai báo `setPaused()` hoặc `destroy()` khi game có tài nguyên riêng ngoài runtime.
- CSS của game dùng namespace riêng, ví dụ `.game-sudoku`, để tránh ảnh hưởng game khác.

## 3. Màn chơi và độ khó

- Game qua màn: thắng mở màn tiếp theo và tăng độ khó 5%; thua cho chơi lại màn hiện tại hoặc từ đầu.
- Màn mới phải thay đổi bàn chơi, vị trí, mục tiêu hoặc dữ liệu câu đố và vẫn bảo đảm giải được.
- Game vô hạn khai báo `mode: "endless"` trong catalog, tăng tốc độ hoặc độ phức tạp ngay trong ván bằng `options.getEndlessDifficulty(progress)`.
- Game vô hạn kết thúc bằng `options.onLose({ message, score })`; không hiển thị nút qua màn.
- Không tự viết công thức độ khó chung trong game. Game chỉ ánh xạ `options.difficulty.multiplier` và helper của platform vào luật riêng.

## 4. Chuyển động và điều khiển

- Thay đổi vị trí phải có chuyển động, không nhảy tức thời từ A sang B.
- Game DOM dùng `GamePlatform.motion.render()` và `data-motion-key` ổn định cho vật thể cần nội suy.
- Game canvas phải tự nội suy vị trí theo thời gian.
- Luôn tôn trọng `prefers-reduced-motion`.
- Vùng kéo/vuốt phải có `touch-action` phù hợp và kích thước chạm đủ lớn.

## 5. Dữ liệu và tài nguyên

- Ảnh nằm trong `assets/images/<game-id>/`, tối thiểu có `cover.svg`, `background.svg`, `primary.svg`.
- Đường dẫn ảnh chỉ khai báo trong `assets/images/manifest.js`, không ghi cứng trong engine.
- Âm thanh, AI, cấu hình độ khó và hình ảnh phải tách riêng để thay thế mà không sửa luật chơi.
- Không dùng tên, hình ảnh hoặc luật trình bày có nguy cơ xâm phạm nhãn hiệu; dùng tên thay thế khi cần.

## 6. Definition of Done

- Catalog có mô tả, mục tiêu, hướng dẫn và `status: "mvp"`.
- Module tải được, chơi được bằng cảm ứng và desktop fallback.
- Thắng, thua, chơi lại, tạm dừng và qua màn hoạt động đúng.
- Qua màn tạo bàn chơi khác và áp dụng hệ số khó mới.
- Không rò timer/listener sau khi thoát game.
- Không có lỗi console; chạy qua syntax check, platform test, asset test và browser smoke test.
- Mọi thay đổi ở phần dùng chung phải giữ nguyên contract của các game đã có.
