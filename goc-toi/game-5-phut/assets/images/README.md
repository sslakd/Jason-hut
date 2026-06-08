# Thư viện hình ảnh game

Mỗi game có một thư mục riêng theo `game-id` và ba file thay thế trực tiếp:

- `cover.svg` — ảnh ngang 16:10 cho card, hướng dẫn hoặc màn giới thiệu.
- `background.svg` — ảnh dọc 9:16 cho vùng chơi mobile.
- `primary.svg` — vật thể chính dạng vuông, nền trong suốt.

Khi có ảnh thật, giữ nguyên tên file và thay SVG bằng SVG/WebP tương ứng. Nếu đổi
đuôi file, cập nhật duy nhất đường dẫn trong `manifest.js`.

## Quy ước

- SVG cho icon, hình phẳng và đồ họa cần đổi màu.
- WebP cho hình nhiều chi tiết; tránh PNG lớn.
- Không ghi đường dẫn ảnh trực tiếp trong engine game.
- Tên file dùng chữ thường, không dấu và dấu gạch ngang.
- Ảnh không chứa chữ quan trọng vì giao diện phải hỗ trợ thay đổi nội dung.

`manifest.js` là nguồn đường dẫn duy nhất. Khi game được mở, app đưa ba đường dẫn
vào CSS variables `--asset-cover`, `--asset-background`, `--asset-primary`.
