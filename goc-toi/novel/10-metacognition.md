# Chương 10: "Tự Soi Lại Mình" — Metacognition

TíAI — thằng Agent bán hàng — hay sai tên khách. 'Nguyễn Văn Hùng' nó ghi 'Hùng Nguyễn'. 'Trần Thị Mai' nó ghi 'Mai Trần'.

"Lại nữa hả con chó này?" — chị Vân bực mình.

Thắng sửa code. Tuần sau, lại sai. Lần này sai số điện thoại.

"Sao fix hoài không hết?"

Bác Lai: "Vì mày fix symptom, không fix root cause."

"Vấn đề không phải TíAI sai tên. Vấn đề là TíAI không biết tự kiểm tra lại trước khi gửi."

---

### Metacognition

**Metacognition** = suy nghĩ về suy nghĩ của mình.

Người: viết xong tin nhắn → đọc lại → sửa lỗi → kiểm tra tên → okay gửi.

TíAI: viết xong → gửi. Không đọc lại. Không kiểm tra.

---

### Self-Reflection + Self-Correction

```python
class AgentBietSoi:
    def lam(self, viec):
        # Bước 1: Làm
        output = self.llm.tao(viec)
        
        # Bước 2: Soi lại
        van_de = self.llm.soi(output)
        # "Tên viết sai. Số điện thoại thiếu số 0."
        
        if van_de:
            # Bước 3: Sửa
            output = self.llm.sua(output, van_de)
            
            # Bước 4: Soi lại lần nữa
            van_de2 = self.llm.soi(output)
            if van_de2:
                # Vẫn sai → nhờ người
                self.tools['goi_admin']("Tôi không tự sửa được")
        
        return output
```

---

### Metacognition vs Hallucination

"Metacognition có giúp giảm hallucination không?"

"Có thể. Nếu LLM tự kiểm tra lại output, nó có thể phát hiện mâu thuẫn."

"Nhưng không hoàn hảo. Vì nó còn có thể hallucinate trong bước soi lại."

"Như có thằng bạn đọc lại bài cho mày. Thằng bạn ấy cũng có thể sai. Nhưng có người đọc vẫn hơn không."

---

### 🎯 Bài học chương 10

1. **Metacognition** = tự kiểm tra lại
2. Gồm: **Self-Reflection** (nhận ra lỗi) + **Self-Correction** (sửa lỗi)
3. Giúp giảm hallucination, nhưng không xóa hoàn toàn
4. Nếu tự sửa > N lần → gọi người
5. Nguyên tắc: "Làm xong. Soi lại. Sửa. Rồi gửi."
