# Chương 7: "Trợ Lý Biết Tự Vào Thư Viện" — Agentic RAG

Một email đặc biệt: *"KunAI muốn hỏi cty mình có chính sách đặt cơm thế nào cho 50 người, budget 40 triệu/tháng?"*

TèoAI trả lời: *"Cảm ơn bạn. Vui lòng liên hệ admin."*

Chị Vân: "Bố tổ sư. Thay vì tự search, nó đẩy sang admin. Thế tôi cần AI làm đéo gì?"

Thắng: "Vấn đề là TèoAI không có quy trình trong code. Quy trình thực tế nằm trong file PDF 200 trang."

"Thế không cho nó đọc à?"

"Đây là lúc cần **RAG**, chị ạ."

---

### RAG — Retrieval-Augmented Generation

"RAG cho Agent khả năng tra cứu tài liệu trước khi trả lời."

Thay vì LLM trả lời từ trí nhớ, nó được cấp một tủ hồ sơ (knowledge base) để tra.

1. Khách hỏi → Agent search tài liệu → tìm đoạn liên quan
2. Đoạn đó + câu hỏi = context mới
3. LLM trả lời dựa trên context
4. Nếu không tìm thấy → 'Xin lỗi, tôi không có thông tin'

---

### Agentic RAG khác RAG thường?

"RAG thường: search 1 lần, lấy 1 đoạn, trả lời."

"Agentic RAG: Agent tự quyết định search cái gì, bao nhiêu lần. Lần đầu chưa đủ → search tiếp. Cần chi tiết → search sâu hơn."

Code:

```python
class RAGThongMinh:
    def tra_loi(self, cau_hoi, max_search=5):
        ngung_canh = 0
        tai_lieu_thu_thap = []
        
        while ngung_canh < max_search:
            # Search
            ket_qua = self.db.search(cau_hoi)
            tai_lieu_thu_thap.extend(ket_qua)
            
            # AI tự biết đã đủ chưa
            if self.llm.thay_du(cau_hoi, tai_lieu_thu_thap):
                break
            
            # Chưa đủ, search tiếp
            cau_hoi_moi = self.llm.sinh_cau_hoi_moi(cau_hoi, tai_lieu_thu_thap)
            cau_hoi = cau_hoi_moi
            ngung_canh += 1
        
        return self.llm.tra_loi(cau_hoi, tai_lieu_thu_thap)
```

---

### Vấn đề của RAG

"Tưởng ngon, nhưng đéo phải." — Thắng.

**1. Chunking:** Tài liệu phải cắt thành miếng nhỏ. Cắt nhỏ quá → mất bối cảnh. Cắt to quá → tràn context.

**2. Search sai:** Search engine kém → lấy sai tài liệu → LLM trả lời sai dựa trên tài liệu sai.

**3. Chậm:** Mỗi lần search ~500ms. 5 lần = 2.5 giây. Khách không chờ.

**4. Đắt:** Mỗi lần search = 1 lần DB + 1 lần LLM.

---

### 🎯 Bài học chương 7

1. **RAG** = cho AI một tủ hồ sơ để tra trước khi nói
2. **Agentic RAG** = AI tự quyết định tra bao nhiêu lần
3. RAG không hoàn hảo: chunking, search sai, chậm, đắt
4. Nguyên tắc: không tìm thấy = nói "không biết". Đừng bịa.
5. Không có gì nguy hiểm hơn AI tự tin nói sai dựa trên tài liệu sai.
