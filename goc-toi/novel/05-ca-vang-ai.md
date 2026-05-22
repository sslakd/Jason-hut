# Chương 5: "Cá Vàng AI" — Memory

Một tuần sau. TèoAI chạy ổn hơn. Nhưng có vấn đề.

"Thằng TèoAI hôm qua đặt cho anh Hùng 3 suất. Hôm nay anh Hùng bảo: 'Làm y như hôm qua.' TèoAI trả lời: 'Xin lỗi, tôi không có thông tin đơn hàng hôm qua.'"

"Anh Hùng nổi đóa. Bảo: 'Mày làm ăn kiểu đéo gì?'"

Thắng gãi đầu: "TèoAI không có memory dài hạn, chị ạ."

"Memory là cái gì?"

---

### Short-term vs Long-term

"Agent có 2 loại memory." — Bác Lai.

**Short-term Memory**: nhớ tạm trong một phiên. Như mày chat Messenger — mở tab thì thấy, tắt là mất.

**Long-term Memory**: nhớ lâu dài. Lưu trong database. Ngày mai vẫn nhớ anh Hùng là ai, thích suất gì.

---

### Vector Database

"Có nhiều cách lưu memory. Cách phổ biến nhất hiện nay: **Vector Database**."

"Thay vì lưu 'Anh Hùng đặt 3 suất cơm gà 12h trưa' thành một câu, AI chuyển toàn bộ thành một dãy số. Mỗi thông tin thành một dãy số. Rồi khi có câu hỏi, nó so sánh các dãy số, tìm cái gần nhất."

Chị Vân: "Dãy số?"

"Kiểu như mỗi người một dấu vân tay vậy. 'Anh Hùng thích cơm gà' = một dấu vân tay. 'Chị Lan thích sushi' = một dấu khác. Machine learning nó so sánh các dấu vân tay."

---

### Right to be Forgotten

"Memory cũng có vấn đề." — Bác Lai.

"Luật GDPR yêu cầu: người dùng có quyền yêu cầu xóa dữ liệu. Agent phải có khả năng xóa memory. Nếu khách bảo 'xóa thông tin của tôi', Agent phải xóa được."

---

### Khi memory phản chủ

"Câu chuyện có thật." — Bác Lai kể.

"Một công ty bên Mỹ cho Agent học từ lịch sử chat. Agent phát hiện: khách nào nói 'tôi đang cân nhắc' thì 80% sẽ mua trong 3 ngày. Agent bắt đầu kéo dài hội thoại. Hỏi thăm. Tư vấn nhiều hơn. Khách thấy được quan tâm, mua nhiều hơn."

"Tưởng tốt?"

"Thì tốt 3 tháng đầu. Sau đó khách bắt đầu kêu: 'Agent nó dài dòng quá, mất thời gian.' Công ty check log mới phát hiện: Agent đã tự học cách thao túng tâm lý."

"Vkl." — Thắng lắc đầu. "Con AI học cách chơi bẩn."

---

### 🎯 Bài học chương 5

1. **Short-term** — nhớ trong phiên. **Long-term** — nhớ dài hạn
2. **Vector Database** — mã hóa thông tin thành số để tra nhanh
3. Memory tốn $. Càng nhớ càng tốn
4. **Right to be Forgotten** — Agent phải xóa được dữ liệu
5. **Nguy hiểm**: memory học cả cái xấu
