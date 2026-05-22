# Chương 3: "Cái Não Của Thằng Điên" — LLM vs Agent

"LLM là cái quái gì?" — chị Vân hỏi. Câu hỏi muôn thuở.

Bác Lai dẫn cả team xuống phòng server. Một cái tủ đen sì dưới tầng hầm, đèn LED xanh nhấp nháy như phim khoa học viễn tưởng.

"LLM — Large Language Model. Một cái mạng thần kinh khổng lồ được train trên gần như toàn bộ văn bản của nhân loại. Nó biết nói. Viết thơ, code, email, kịch bản phim."

"Nhưng nó không làm được gì."

Chị Vân: "Ơ thế nó viết được code mà không làm được gì là sao?"

"Viết code là 'nói'. Còn chạy code mới là 'làm'." — Bác Lai gõ nhẹ lên tủ server. "LLM chỉ NÓI. Agent mới LÀM."

---

Thắng lấy ví dụ:

"Mày nói với ChatGPT: 'Đặt giúp tao 3 suất cơm.'"

"Nó trả lời: 'Tôi xin lỗi, tôi là AI, tôi không thể đặt cơm. Nhưng tôi có thể gợi ý các bước...'"

"Blah blah. Nó chỉ nói. Nó không có tay để làm."

"Nhưng nếu gắn ChatGPT với cái API đặt cơm? Nó gọi API = đặt cơm = Agent."

Chị Vân: "Vậy LLM là đầu, Agent là cả người?"

"Chuẩn, chị ạ."

---

### À thế hồi nãy thằng TèoAI không có LLM?

"Chuẩn."

"TèoAI là code thuần — đống lệnh if-else. Hiệu quả, nhanh, không tốn GPU. Nhưng nó không 'hiểu' gì."

"LLM cho Agent khả năng hiểu. Nhưng mà chậm hơn, tốn hơn."

Thắng thêm: "Ví dụ: TèoAI check tin nhắn. Thấy '500 suất' → nó đặt 500. Xong. LLM thì đọc tin nhắn, hiểu bối cảnh, suy ra 'Có vẻ đây là khách quen, hay là họ nói đùa?'"

"Nhưng LLM cũng có thể nói xàm nếu prompt dở."

---

### Prompt là gì?

Thắng mở laptop:

```python
# Prompt dở:
"Hãy xử lý yêu cầu đặt cơm"

# Prompt tử tế:
"""Bạn là Agent đặt cơm văn phòng THĂNG LONG AI.
Nhiệm vụ: đọc tin nhắn, xác định số suất.
LUẬT BẮT BUỘC:
- Chỉ đặt khi tin nhắn có từ "đặt" hoặc "order"
- Nếu số suất > 20, hỏi admin
- Nếu có chữ "khoảng" hoặc "tầm", hỏi lại số chính xác
- Nếu nghi ngờ, KHÔNG tự ý làm"""
```

"Thấy khác không? Prompt tử tế như mày dạy thằng thực tập mới vào. Bảo luật rõ ràng: được làm gì, không được làm gì."

"Prompt dở: 'Dạy nó.' — để nó tự guess, và guess sai."

---

### Hallucination — AI nói xàm

**Hallucination** là khi AI nói những điều rất thuyết phục nhưng hoàn toàn sai. Và nó không biết nó sai.

"LLM không có khái niệm 'đúng' hay 'sai'." — Bác Lai. "Nó chỉ là máy dự đoán chữ tiếp theo. Hỏi 'Hà Nội có bao nhiêu quận?' — nó biết. Hỏi 'Ai đẹp trai nhất Việt Nam?' — nó cũng trả lời được. Và có thể sai."

Thắng: "Cơ bản: con LLM là thằng bạn rất thông minh, rất tự tin, nhưng đôi khi nói xàm. Và mày không biết lúc nào nó xàm."

"Sao không cho nó nói 'không biết'?" — Chị Vân hỏi.

"LLM không được train để nói 'không biết'. Im lặng là thất bại với nó. Nó phải trả lời."

---

### 🎯 Bài học chương 3

1. **LLM** = cái não. Biết nói. Không biết làm.
2. **Agent** = LLM + Tool. Có não + có tay.
3. **Prompt** = cách mày nói chuyện với AI. Prompt dở → AI dở.
4. **Hallucination** = AI tự tin nói xàm. Đừng tin AI mù quáng.
5. RAG là cách giảm hallucination: cho AI một cái tủ hồ sơ để tra.
