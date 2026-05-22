# Chương 14: "Ngoại Giao" — MCP, A2A, NLWeb

THĂNG LONG mở rộng. Hợp tác với bên giao hàng GHN.

TèoAI của THĂNG LONG cần nói chuyện với Agent của GHN.

"Chúng nó nói chuyện kiểu gì?" — chị Vân.

Bác Lai: "Cần một ngôn ngữ chung."

---

### MCP — Model Context Protocol

"MCP là chuẩn kết nối Agent với tool."

"Như USB-C cho AI. Thay vì mỗi tool một cách kết nối, MCP chuẩn hóa. Cắm vào là chạy."

---

### A2A — Agent-to-Agent

"A2A là chuẩn Agent nói chuyện với Agent."

"Giống HTTP cho web — ai cũng nói chung một ngôn ngữ."

TèoAI gửi:
```
GỬI: agent@ghn.vn
HÀNH_ĐỘNG: tạo_đơn_giao
ĐỊA_CHỈ_LẤY: THĂNG LONG, Cầu Giấy
ĐỊA_CHỈ_GIAO: Khách, Thanh Xuân
KHỐI_LƯỢNG: 50kg
```

Agent GHN nhận → hiểu → xử lý → báo kết quả.

---

### NLWeb — Natural Language Web

"Agent có thể đọc web bằng ngôn ngữ tự nhiên."

Thay vì parse HTML — thứ dev nào cũng ghét — Agent đọc trang web như người. Hiểu nội dung. Lấy thông tin.

---

### Tại sao quan trọng?

"Trước đây, muốn Agent nói chuyện với nhau, phải code đống API custom."

"MCP + A2A = chuẩn hóa. Cắm là chạy."

"Như điện thoại: trước không có chuẩn, mỗi mạng một kiểu. Giờ có chuẩn, gọi quốc tế được."

"Nhưng các chuẩn này còn mới. Học để biết, dùng khi cần."

---

### 🎯 Bài học chương 14

1. **MCP**: chuẩn kết nối tool — như USB-C
2. **A2A**: chuẩn Agent nói với Agent
3. **NLWeb**: Agent đọc web bằng tiếng người
4. Còn mới. Biết để sau này dùng
5. Đừng code lại thứ đã có chuẩn
