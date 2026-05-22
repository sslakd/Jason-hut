# Chương 16: "Thám Tử Biết Click Chuột" — CUA

Khách hàng mới có yêu cầu: "Muốn Agent tự động truy cập web đối tác, tải báo cáo mỗi sáng."

Thắng: "Để TèoAI làm?"

"TèoAI làm được không?"

"TèoAI chỉ biết đọc tin nhắn với API. Không biết click."

---

### CUA — Computer Use Agent

"Agent có thể điều khiển trình duyệt."

"Giống mày thuê đứa thực tập: bảo nó vào web → đăng nhập → vào mục báo cáo → click tải. Nó tự làm."

Cách hoạt động:
1. Chụp ảnh màn hình
2. LLM đọc ảnh, quyết định click chỗ nào
3. Click, gõ phím
4. Chụp ảnh lại → kiểm tra → click tiếp

---

### Giới hạn

"Ghê vậy sao không xài hết?"

**1. UI thay đổi**: Web đối tác đổi giao diện, nút chỗ khác. Click nhầm.

**2. Captcha**: Không giải được. Bí.

**3. Xác thực**: 2FA, OTP, token cứng. Chịu.

**4. Chậm**: Mỗi bước 2-3 giây. 10 bước = 30 giây.

**5. Đắt**: Chụp ảnh + LLM vision = gấp 3 lần LLM text.

---

### 🎯 Bài học chương 16

1. **CUA** = Agent click chuột
2. Chụp ảnh → phân tích → hành động → lặp
3. Giới hạn: UI thay đổi, captcha, auth, chậm, đắt
4. Chỉ dùng cho: web cũ không có API
5. API vẫn tốt hơn click chuột
