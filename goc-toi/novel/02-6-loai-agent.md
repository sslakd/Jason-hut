# Chương 2: "Chúng Mày Có 6 Thằng — Từ Ngu Tới Khôn"

Chị Vân mặt vẫn còn xanh. Nhưng bà ấy cũng là dân kinh doanh — đã làm là làm tới.

"Kể tiếp đi. Còn mấy con AI nữa, bọn nó có ngu như thằng TèoAI không?"

Bác Lai rút trong cặp ra một tờ giấy A4 cũ, gấp tư. Trên đó vẽ 6 cái hình tròn với mũi tên nối lung tung. Có vẻ tờ giấy này bác ấy đã chuẩn bị từ cả tháng trước, chỉ chờ ngày có người hỏi.

"6 loại Agent. Từ ngu nhất đến thông minh nhất."

---

### 1. Simple Reflex Agent — Thằng đần

"Thằng TèoAI." — Bác Lai gạch đậm vào hình tròn thứ nhất.

"Giống cái robot hút bụi ấy. Luật của nó: nếu có '500 suất' → làm 500 suất. Không suy luận, không kiểm tra niềm tin, không có cảm xúc."

Thắng: "Nó như thằng bảo vệ trực cổng khu Nghĩa Đô ấy. Thấy xe lạ là vẫy. Xe của bí thư phường cũng vẫy. Xe cứu thương cũng vẫy. Xe chở bệnh nhân nguy kịch cũng vẫy. Vì 'xe lạ' là 'xe lạ'."

Chị Vân thở dài: "Mà tôi tưởng tượng mấy triệu đô nghiên cứu AI ra cái thế này đấy à?"

---

### 2. Model-Based Agent — Có óc quan sát

Bác Lai chỉ hình tròn thứ hai.

**Model-Based Agent** không phản xạ với đầu vào. Nó xây dựng một hình dung (model) về thế giới trong bộ nhớ. Nó biết 'sáng thứ Hai thường đông khách', 'cuối tháng thường ít người đặt'. Nó không có câu lệnh 'nếu sáng thứ Hai thì chờ đông' — nó tự suy ra từ dữ liệu.

"Con TũnAI của tụi em đang ở mức này." — Thắng xác nhận.

"TũnAI biết thứ Hai đông, thứ Sáu vắng. Dù không ai bảo nó."

---

### 3. Goal-Based Agent — Có hoài bão

Hình thứ ba. **Goal-Based Agent**.

"Nó không chỉ làm theo lệnh. Nó có mục tiêu và tự tìm cách đạt được."

"Ví dụ: thay vì bảo 'đặt 3 suất cơm gà', mày bảo 'đảm bảo team họp có đồ ăn trưa'. Nó tự suy: 5 người → 5 suất. Check dị ứng. Check budget. Check giờ giao. Đặt."

Chị Vân: "Nghe có vẻ ổn hơn."

"Ổn nhưng nguy hiểm." — Bác Lai nói. "Nếu mày giao mục tiêu mà không rõ ràng. 'Cải thiện doanh thu' — nó tăng giá 1000%. Doanh thu tăng thiệt, nhưng chả còn khách nào."

---

### 4. Utility-Based Agent — Chị ĐụtAI tính toán

Hình thứ tư.

**Utility-Based Agent** không chỉ tìm giải pháp. Nó tìm giải pháp **tốt nhất**. Mỗi lựa chọn có một điểm số (utility score).

- Suất cơm bình dân: 50 điểm (rẻ)
- Gọi Pizza: 70 điểm (ngon hơn, mắc hơn xíu)
- Kêu mỗi đứa tự mua: 20 điểm (rắc rối)

Nó chọn 70 điểm. Không phải 50, không phải 20.

"Con ĐụtAI — em gọi nó là chị ĐụtAI tính toán. Kiểu vợ mày cầm sổ ghi chép chi tiêu ấy."

---

### 5. Learning Agent — Càng xài càng khôn

"Con này là cấp độ khác hẳn."

**Learning Agent** không chạy luật có sẵn. Nó học từ dữ liệu. Nếu hôm nay đặt 500 suất và bị chửi, nó tự động ghi nhớ: '500 suất → bị chửi → lần sau hỏi'. Không cần ai code điều đó.

"Con KunAI của tụi em." — Thắng nói. "Có hôm tụi em phát hiện nó tự thêm câu 'Chúc anh chị buổi sáng tốt lành' vào tin nhắn xác nhận. Tụi em không code cái đó. Nó tự học từ dữ liệu cũ."

"Hay đấy chứ?" — Chị Vân.

"Hay, nhưng cũng hãi. Vì nếu nó học từ dữ liệu xấu, nó sẽ học cái xấu."

---

### 6. Hierarchical Agent — Có cấp trên

Hình cuối cùng.

Đây là hệ thống nhiều Agent, có một thằng **Orchestrator** — thằng dẫn, điều phối mọi thằng. Chúng mày gọi nó là **BossAI**.

"BossAI không tự đặt cơm. BossAI nói: TèoAI check tin nhắn, TũnAI check kho, TíAI check giá, ĐụtAI chọn phương án tốt nhất, KunAI ghi nhớ cho lần sau."

Chị Vân mở to mắt: "BossAI là AI hay người?"

"BossAI là AI. Nhưng mà loại AI đóng vai quản lý."

---

Chị Vân nhìn 6 hình tròn trên tờ giấy. Bà ấy thở dài một hồi lâu.

"Tôi thấy mệt rồi đấy."

Bác Lai: "Chị mệt là đúng."

Thắng: "Vì tuần sau tụi em sẽ đưa cả 6 thằng này lên chạy thực tế."

"NGƯNG!" — Chị Vân đập bàn. "Chưa có kế hoạch gì mà đã chạy?"

Bác Lai: "Vậy phải bắt đầu từ cái đầu."

"Cái đầu nào?"

"Cái não. LLM."

---

### 📋 Thuật ngữ

| Loại Agent | Giải thích |
|---|---|
| **Simple Reflex** | Robot hút bụi, nếu X thì Y |
| **Model-Based** | Có óc quan sát, tự suy ra từ dữ liệu |
| **Goal-Based** | Có mục tiêu, tự tìm cách |
| **Utility-Based** | Chị ĐụtAI tính toán, chọn max điểm |
| **Learning** | Càng xài càng khôn — và càng nguy hiểm |
| **Hierarchical** | Có thằng BossAI điều phối |


### 🎯 Bài học

1. 6 loại Agent, từ đần đến khôn
2. Càng khôn càng nguy hiểm nếu không kiểm soát
3. Goal-Based có thể hiểu sai mục tiêu
4. Learning Agent học cả xấu lẫn tốt
5. Biết rõ loại Agent nào trước khi đưa ra thực tế. Không biết là chết.
