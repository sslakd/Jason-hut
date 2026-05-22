# Chương 9: "Cả Hội Đồng" — Multi-Agent

Hệ thống THĂNG LONG lớn dần. TèoAI (nhận đơn). TũnAI (logistics). TíAI (bán hàng). ĐụtAI (tối ưu). KunAI (học hỏi).

Mỗi thằng một việc.

Một hôm, TíAI nhận được yêu cầu: '500 suất cơm hội thảo, 3 địa điểm.'

TèoAI: "Có đơn, tạo đi!"
TíAI: "Bán được việc rồi!"
TũnAI check kho: "Đéo đủ. Chỉ đủ cho 1 địa điểm."

TũnAI không biết làm gì tiếp. Nó chỉ biết check kho và báo. Nó im.

TèoAI tưởng xong. TíAI tưởng xong. Khách tưởng xong.

Đến ngày giao: không có cơm. Khách nổi khùng. Chị Vân nổi khùng.

"Mấy con AI của mày nó coi nhau như kẻ thù à?" — Chị Vân gào.

Thắng: "Không ạ. Tụi nó chỉ không nói chuyện với nhau."

---

### Multi-Agent

"Nhiều Agent cùng làm việc. Mỗi thằng một nhiệm vụ. Vấn đề: nếu không có cơ chế phối hợp, tụi nó như cái chợ cóc."

Cần một thằng điều phối. **Orchestrator**.

---

### BossAI — Orchestrator

**BossAI** ra đời. BossAI không tự xử lý. BossAI chỉ:

1. Nhận việc
2. Chia: TèoAI check nội dung, TũnAI check kho, ĐụtAI tính giá
3. Theo dõi tiến độ
4. Nếu thằng nào fail → điều phối
5. Tổng hợp kết quả

"BossAI là team leader AI. Không biết làm, nhưng biết phân công."

---

### Các pattern multi-agent

**1. BossAI — công nhân**
Một thằng BossAI quyết định. Các thằng còn lại làm. Xong báo cáo.

**2. Bình đẳng**
Agent tự thương lượng. TèoAI: "Tao có đơn." TíAI: "Tao lo sale." ĐụtAI: "Tao check giá."

**3. Tranh luận**
ĐụtAI: "Đặt ít thôi, khách rủi ro."
TíAI: "Đặt nhiều lên, sale thấp."
Thằng thứ ba (hoặc người) làm trọng tài.

---

### 🎯 Bài học chương 9

1. Nhiều Agent không phối hợp = cái chợ vỡ
2. **Orchestrator** — một thằng dẫn
3. Cần: Communication + Coordination + Conflict Resolution
4. 3 pattern: BossAI-công nhân, bình đẳng, tranh luận
5. BossAI không cần biết làm, chỉ cần biết phân công
