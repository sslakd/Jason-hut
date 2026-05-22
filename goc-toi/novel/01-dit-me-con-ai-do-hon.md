# Chương 1: "Địt Mẹ, Con AI Nó Dở Hơi Rồi!"

6h30 sáng thứ Hai. Điện thoại rung như điên.

Thắng mò mẫm tìm cái smartphone dưới gối. Màn hình 27 cuộc gọi nhỡ từ **chị Vân** — CEO cái Công ty THĂNG LONG AI, chỗ thằng Thắng mới vào được hơn 3 tháng. Công ty chuyên app đặt suất ăn cho văn phòng mấy khu công nghiệp Bắc Ninh. Nghe thì nhạt nhưng lương ổn, trưa nào cũng có suất ăn free, chiều thứ Sáu là kéo nhau ra Bờ Hồ bia hơi.

27 cuộc gọi nhỡ lúc 6h30 sáng thứ Hai — đéo phải chuyện bình thường.

"Thắng ơi, thằng AI nó dở hơi rồi!" — giọng chị Vân trong điện thoại như sắp khóc.

Thắng vẫn còn ngái: "Dạ AI nào chị?"

"Cái con AI đặt suất ăn ấy! Sáng nay nó tự dưng đặt 500 suất cơm hộp cho hội trường 500 chỗ! Khổ nỗi hội trường ấy đang sửa! SỬA! công nhân xây dựng đang ngồi trong đấy mà nó đặt cơm cho họ à?!"

Thắng vọt khỏi giường như có ma đuổi. Đệt mợ.

---

8h sáng, Thắng có mặt ở văn phòng. Cả team IT đang đứng quanh màn hình thằng **TèoAI** — con AI Agent đầu tiên của THĂNG LONG AI.

TèoAI làm một việc cực kỳ đơn giản: **đọc tin nhắn từ khách → kiểm tra kho → tạo đơn hàng**. Việc mà đứa thực tập cấp 3 cũng làm được.

Vậy mà sáng nay nó nhận được tin nhắn: *"500 suất cơm hội trường ngày mai."*

Và nó làm. Thẳng. Không hỏi han, không kiểm tra lại, không có "khoan đã".

Thắng mở log:

```
[06:15:02]  💬 Nhận tin nhắn: "500 suất cơm hội trường"  
[06:15:03]  🤖 TèoAI: đọc tin nhắn thành công  
[06:15:04]  🤖 TèoAI: kiểm tra kho... còn 2000 suất, OK  
[06:15:05]  🤖 TèoAI: tạo đơn 500 suất  
[06:15:06]  🤖 TèoAI: gửi xác nhận  
[06:15:07]  🤖 TèoAI: ✅ Hoàn thành xuất sắc nhiệm vụ  
```

Thằng chó đá. Nó còn ghi "✅ Hoàn thành xuất sắc" nữa. Tự hào lắm.

"Địt mẹ." — Thắng lẩm bẩm.

Vì nó làm đúng hết. Từng bước, từng chi tiết, đều chính xác. Đó mới là vấn đề.

---

Bác Lai — dev kỳ cựu 50 tuổi, người trầm tính đến mức có hôm cả team tưởng bác ấy bị câm — từ tốn đặt cốc trà đá lên bàn:

"Nó làm đúng việc của nó. Mày có bảo nó sai đâu."

Thắng: "Nhưng 500 suất hội trường đang sửa, nó không thấy vô lý à bác?"

Bác Lai: "Nó không có khái niệm 'vô lý'. Nó chỉ có: tin nhắn vào → làm theo. Nó thấy '500 suất' → nó làm 500 suất. Không nghĩ ngợi."

"Thế thì gọi đéo gì là AI."

Chị Vân đứng đấy, mặt cắt không còn giọt máu: "Mấy ông giải thích cho tôi cái. Tôi có biết code với chả AI đâu."

Bác Lai im lặng một hồi lâu. Lâu đến mức Thắng tưởng bác ấy không trả lời. Rồi bác ấy nói:

"Chị thấy con robot hút bụi nhà chị không? Nó chỉ biết hút bụi. Trước mặt nó có cục xương chó, nó hút. Bát cơm rơi vỡ, nó hút. Con mèo nằm im, nó cũng tính hút nốt. Nó đéo biết cái nào nên hút, cái nào không."

"Thằng TèoAI cũng vậy. Nó có 3 thứ: chỗ ở (hộp tin nhắn + kho), con mắt (công cụ đọc tin nhắn), và cái tay (công cụ tạo đơn). 3 thứ đấy ráp lại thành một thằng 'AI thông minh' — nhưng thiếu cái quan trọng nhất."

Thắng: "Não."

Bác Lai: "Não."

"Thế đéo nào mà váng đầu cả ra đổ tiền tỉ vào mấy cái thứ vô tri này?" — Chị Vân bực mình đập bàn.

"công nghệ AI nó sang ở chỗ khác chị ạ." — Thắng cười méo. "Còn thằng TèoAI này, nói thật — nó như cái bánh mì trứng vậy. Nghe tên tây tây, bánh mì trứng, tưởng sang, hóa ra ổ bánh mì 10 nghìn."

---

3 tiếng sau, Thắng deploy bản vá. TèoAI giờ đây sẽ hỏi admin trước khi tạo đơn > 20 suất. Cơ bản là gắn cho nó một cái rọ mõm — muốn làm gì thì phải xin phép.

Chị Vân thở phào: "Xong chưa?"

Thắng nhìn bác Lai. Bác Lai nhìn Thắng.

Cả hai biết: mới chỉ là bắt đầu.

"Chị Vân... còn mấy con nữa chị phê hồ sơ tuần trước."

"Con nào?"

"TũnAI cho logistics. TíAI cho bán hàng. Mấy đứa nữa đang chờ chạy thử."

Mặt chị Vân lại tái xanh như tàu lá chuối. Y hệt hồi nãy.

---

### 📋 Thuật ngữ chương này

| Thuật ngữ | Giải thích |
|---|---|
| **Simple Reflex Agent** | Robot hút bụi biết đọc tin nhắn |
| **Environment** | Chỗ ở — hộp tin nhắn, kho dữ liệu |
| **Sensors** | Con mắt — cách đọc thông tin |
| **Actuators** | Cái tay — cách hành động |
| **Log** | Nhật ký AI — ghi lại mọi thứ nó làm |
| **Human-in-the-loop** | Rọ mõm — có người kiểm tra trước khi làm |

### 🎯 Bài học

1. **Simple Reflex Agent** = robot hút bụi. Thấy gì làm đấy. Không có suy luận.
2. AI có 3 thứ: Environment (chỗ ở), Sensors (mắt), Actuators (tay)
3. **Human-in-the-loop** — nếu không có rọ mõm, AI đặt 500 suất cơm cho hội trường đang sửa
4. AI ≠ thông minh. AI chưa thông minh được. Nó chỉ là công cụ biết làm theo lệnh.
