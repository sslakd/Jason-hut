# 📈 Bài 15: Bollinger Bands

## Biên động giá — squeeze, breakout, và cách dùng

Jason, Bollinger Bands là 3 đường: middle (SMA20), upper (SMA20 + 2σ), lower (SMA20 - 2σ).

---

## 1. Cấu Tạo

- **Middle Band** = SMA20 (xu hướng trung bình)
- **Upper Band** = SMA20 + 2 độ lệch chuẩn (vùng quá mua)
- **Lower Band** = SMA20 - 2 độ lệch chuẩn (vùng quá bán)

## 2. Cách Dùng

### A) Bollinger Squeeze
Dải band hẹp lại → biến động thấp → sắp breakout lớn.

**Trade:**
- Chờ squeeze
- Xác định hướng breakout (cần volume + nến xác nhận)
- Vào lệnh theo hướng breakout

### B) Touch Band
- Giá chạm Upper → quá mua (có thể hồi, nhưng trong uptrend mạnh có thể đi tiếp)
- Giá chạm Lower → quá bán (có thể hồi, nhưng trong downtrend có thể đi tiếp)
- **Mẹo:** Chỉ tin ở band thứ 2 — nếu giá chạm Upper 2 lần, lần 2 yếu hơn → sắp hồi

### C) Band Walk
- Giá **đi dọc Upper Band** → uptrend rất mạnh, không nên bán
- Giá **đi dọc Lower Band** → downtrend rất mạnh, không nên mua

## 3. Kết Hợp Bollinger + RSI

- Bollinger chạm Lower + RSI < 30 → oversold thật
- Bollinger chạm Upper + RSI > 70 → overbought thật
- **Cả 2 cùng nói 1 điều → tín hiệu mạnh**

## 4. Trên Thị Trường VN

Bollinger khung D1 rất hữu ích cho swing trade VN30:
- Squeeze xuất hiện trước các phiên đáo hạn phái sinh (thứ 5 hàng tuần)
- Breakout khỏi Bollinger thường kèm volume đột biến

---

**Bài tập:** Mở chart VN30F (khung D1), thêm Bollinger Bands (20, 2). Tìm 1 lần Squeeze (dải hẹp). Chuyện gì xảy ra 3-5 ngày sau?

**Bài sau:** Ichimoku Cloud — overview cơ bản.
