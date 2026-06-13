# Bài 38: Fakeout Pivot — Nhận Biết Và Tránh

Đây là bài quan trọng nhất Phase 3.

Đã học pivot, volume, RSI, MACD, Fibonacci, entry, stop, TP. Nhưng còn một thứ có thể phá hỏng tất cả: fakeout.

Fakeout là khi giá vượt qua pivot, khiến tưởng breakout thật — rồi lập tức quay đầu, quét stop của người vừa vào lệnh. Nếu không biết nhận biết, sẽ bị quét liên tục.

---

## Fakeout là gì?

Giá tạm thời vượt qua một mức pivot quan trọng, nhưng không đủ sức mạnh duy trì — lập tức quay đầu.

Ví dụ: PP = 130.000, R1 = 132.000. Giá lên 132.500 (vượt R1) → ai cũng nghĩ breakout → mua vào. Giá quay đầu xuống 129.000 → quét stop của người mua. Đó là fakeout.

---

## Dấu hiệu nhận biết

**Volume thấp tại breakout.** Breakout thật cần volume > 1.5x TB. Nếu vượt R1 với volume < TB hoặc chỉ bằng TB → fakeout. Volume là dấu hiệu đáng tin nhất.

**Nến đóng cửa yếu.** Breakout thật: nến xanh to + đóng cửa gần đỉnh. Fakeout: nến có bấc trên dài (shooting star), doji, hoặc nến xanh nhỏ. Nến hourly xác nhận: nếu nến phá R1 nhưng nến tiếp theo đỏ → fakeout.

**Không có sự đồng thuận.** Chỉ breakout dựa trên 1 yếu tố (ví dụ giá vượt pivot nhưng RSI > 75). Thiếu 2 trong 3 lớp xác nhận (volume, RSI, MACD). Nhất là khi RSI và MACD không ủng hộ.

**Pivot weekly/monthly cản.** Vượt daily R1 nhưng weekly R1 ở ngay trên → dễ bị cản bởi weekly pivot.

---

## So sánh breakout thật vs fakeout

| Yếu tố | Breakout thật | Fakeout |
|--------|---------------|---------|
| Volume | > 1.5x TB | < TB hoặc = TB |
| Nến | Xanh to, đóng gần đỉnh | Bấc dài, doji |
| RSI | < 70, còn dư địa | > 70, quá mua |
| MACD | Histogram mở rộng | Histogram thu hẹp |
| Retest | Giá quay lại test pivot rồi bật | Giá xuyên qua pivot rồi tiếp tục xuống |

---

## Các loại fakeout phổ biến

**Liquidity sweep — quét thanh khoản:**
Big money đẩy giá qua pivot để quét stop loss của đám đông, sau đó đảo chiều. Dân trong nghề gọi là "stop hunt". Thường xảy ra ở các mức pivot tròn (130.000, 28.000).

**News fakeout — tin tức giả:**
Tin tốt xuất hiện → giá vượt pivot → nhưng tin không đủ mạnh → giá quay đầu. Volume cao nhưng nến đóng cửa yếu.

**Low volume fakeout — breakout không hậu thuẫn:**
Giá vượt pivot sau giờ nghỉ trưa. Volume thấp. Chiều giá quay đầu. Đây là loại dễ tránh nhất: chỉ cần nhìn volume.

---

## Chiến thuật tránh fakeout

**Đợi nến đóng cửa:** không vào lệnh khi giá mới chạm pivot. Chờ nến đóng cửa (hoặc ít nhất 1h) xác nhận.

**Chờ retest:** giá phá pivot, quay lại test, rồi mới vào. Retest thành công = pivot cũ thành support/resistance mới.

**Dùng stop entry:** đặt lệnh trên pivot một khoảng (không phải ngay tại pivot). Với HOSE, đặt trên R1 khoảng 0.5-1%. Nếu breakout thật, giá sẽ chạm lệnh. Nếu fakeout, giá không chạm.

**Kiểm tra 3 lớp:** volume > 1.5x TB? RSI < 70? MACD histogram mở rộng? Thiếu 1 trong 3 → fakeout.

---

## Ví dụ

**FPT R1 fakeout:**
FPT: PP = 130.000, R1 = 132.000. AVG volume = 1.5 triệu. Giá lên 132.300. Volume = 1.2 triệu (0.8x TB) → thấp. Nến có bấc trên dài. RSI đã 74. MACD histogram thu hẹp.

Kết luận: fakeout. Không long. Giá quay đầu xuống 129.000 trong 2 phiên.

---

## Lưu ý

Thị trường VN nhiều fakeout hơn thị trường US do thanh khoản thấp và nhiều nhà đầu tư nhỏ lẻ. Fakeout thường xảy ra tại R1 và S1 nhiều nhất. R2 và S2 ít bị fakeout hơn.

Giá gap qua R1/S1 khi mở cửa: thường được lấp trong 1-2 giờ. Nếu gap + volume thấp → khả năng cao là fakeout.

---

Fakeout là kẻ thù số 1 của pivot trader. Volume là vũ khí số 1 để chống lại. Chờ xác nhận trước khi vào. Breakout thật cần 3 lớp xác nhận.

Bài 38: Fakeout Pivot
