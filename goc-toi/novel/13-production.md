# Chương 13: "Lên Sàn" — Production

Test ổn. Giờ đưa lên thực tế.

"Ô kê, deploy đi." — Chị Vân.

Thắng: "Chị, chưa được."

"Sao?"

"Production khác test. Nhiều thứ."

---

### Observability — Nhìn được

Trong dev, mày mở terminal là thấy log. Production thì không.

Cần:

**1. Monitoring:** Bao nhiêu request? Thời gian? Lỗi? Token? Tiền?

**2. Tracing:** Agent đã gọi tool nào? Tại sao quyết định A không phải B?

**3. Logging:** Ghi toàn bộ. Để debug. Để kiểm tra.

---

### Cost — Kẻ thù số 1

"Mỗi request:
- 1 lần LLM: $0.01-0.05
- Nếu cần tool → thêm 1 lần: $0.01-0.05
- Multi-step: 5-10 lần LLM
- 1 request ~ $0.10

1000 request/ngày → $100/ngày → $3000/tháng"

"BỐ!" — Chị Vân tái mặt.

---

### Tối ưu cost

1. **Cache**: câu hỏi giống nhau, trả cache
2. **Gom nhóm**: nhiều câu hỏi, 1 lần LLM
3. **Phân cấp model**: câu dễ → model rẻ. Câu khó → model mắc
4. **Context ngắn**: càng ngắn càng rẻ
5. **Chết sớm**: phát hiện lạc → kill, đừng để chạy tiếp

---

### Vấn đề hay gặp

**Vòng lặp**: Agent retry mãi → $ bay. Solution: max retries, timeout, kill switch.

**Hallucination**: LLM nói sai với khách thật. Solution: RAG, fact-check, human review.

**Chậm**: Agent mất 10 giây. Khách không chờ. Solution: streaming, async.

**Cost đột biến**: 10,000 request đột xuất → hóa đơn $1000. Solution: rate limit, budget alert.

---

### 🎯 Bài học chương 13

1. **Observability** sống còn: monitoring, tracing, logging
2. **Cost** là kẻ thù số 1
3. Optimize: cache, batch, phân cấp model, context ngắn
4. Vấn đề: loop, hallucination, chậm, cost spike
5. Deploy dễ. Giữ cho nó chạy mới khó.
