# Chương 17: "Chứng Cứ" — Securing Agents

Hệ thống ghi nhận: TèoAI đã hủy 50 đơn hàng lúc 2h sáng.

Ai làm? TèoAI tự hủy hay bị hack?

Chị Vân: "Ai chịu trách nhiệm?"

Bác Lai: "Câu hỏi quan trọng. Cần **Cryptographic Receipt**."

---

### Cryptographic Receipt

Chứng từ số cho mỗi hành động của Agent.

```python
hanh_dong = {
    'agent': 'Manh',
    'hanh_dong': 'huy_don',
    'don_id': 'ORD-2024-001',
    'thoi_gian': '2026-05-21T02:00:00Z',
    'ly_do': 'Khách yêu cầu hủy'
}

# Ký
chu_ky = hashlib.sha256(str(hanh_dong).encode()).hexdigest()
```

Có chứng từ này, sau biết chính xác ai làm, lúc nào, tại sao.

---

### Audit Trail

Không chỉ receipt, cần audit trail:

1. **Input**: tin nhắn gì vào?
2. **Suy luận**: LLM nghĩ gì? Chọn tool nào?
3. **Hành động**: Tool chạy thế nào? Kết quả?
4. **Output**: Agent trả lời gì?

Audit trail phải:
- Không sửa được
- Không xóa được
- Tra cứu được
- Có thời gian chính xác

---

### Ai chịu trách nhiệm?

"Chưa có luật rõ. Nhưng xu hướng:
- Agent tự làm sai → chủ sở hữu chịu
- Agent bị hack → chủ sở hữu vẫn chịu
- Developer code sai → developer + chủ sở hữu

Không có 'AI làm đấy, không phải tôi'."

---

### Checklist

1. **Ký code**: phát hiện nếu code bị sửa
2. **Giám sát**: phát hiện behavior bất thường
3. **Phân quyền**: quyền tối thiểu
4. **Mã hóa**: input/output của Agent
5. **Kế hoạch ứng phó**: AI làm sai, xử lý thế nào?
6. **Kiểm tra định kỳ**: audit trail

---

### 🎯 Bài học chương 17

1. **Cryptographic Receipt** = chứng từ số mỗi hành động
2. **Audit Trail**: immutable, tamper-proof, searchable
3. Pháp lý: chủ sở hữu Agent chịu trách nhiệm
4. Cần: ký code, giám sát, phân quyền, mã hóa, kế hoạch ứng phó
5. Không có receipt = không có chứng cứ
