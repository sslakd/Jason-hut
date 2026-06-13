# Bài 46: Trailing Stop — Để Lợi Nhuận Chạy

Đừng chốt lời quá sớm. Trailing stop giúp giữ lệnh khi giá đi đúng hướng, tự động chốt khi giá quay đầu.

---

## Trailing stop là gì?

Stop loss di động — tự động kéo theo giá khi giá đi đúng hướng.

Cố định: vào 100, stop 95, TP 115. Giá lên 110 → stop vẫn 95. Nếu giá quay từ 110 xuống 95 → lỗ 5.

Trailing: vào 100, stop 95 (cách 5). Giá lên 105 → stop tự động kéo lên 100. Giá lên 110 → stop lên 105. Nếu giá quay từ 110, chạm stop 105 → lời 5.

---

## Các loại trailing stop

**Theo %:**
Stop cách giá hiện tại 1 tỷ lệ cố định. Ví dụ: trailing 5%. Giá 100 → stop 95. Giá 110 → stop 104.5. Đơn giản, dễ hiểu. Phù hợp thị trường biến động thấp.

**Theo ATR:**
Stop cách giá = ATR × hệ số. Ví dụ: ATR 14 = 1.500, trailing 2 ATR. Giá 130.000 → stop 127.000. Giá 135.000 → stop 132.000. Thích ứng với biến động. Cổ biến động cao → trailing rộng hơn, ít bị quét.

**Theo pivot:**
Stop kéo từng mức pivot. Vào lệnh tại S1, stop dưới S1. Giá lên PP → kéo stop lên dưới PP. Giá lên R1 → kéo stop lên dưới R1. Tự nhiên cho pivot trade.

---

## Khi nào dùng trailing stop?

**Xu hướng mạnh, rõ ràng:**
Giá lên 5 phiên liên tiếp, SMA bull aligned, MACD histogram mở rộng. Đây là lúc để lợi nhuận chạy. Dùng trailing stop ATR hoặc pivot.

**Sideways, không rõ hướng:**
Không dùng trailing. Chốt lời nhanh tại các mục tiêu cố định.

**Sau tin tức lớn:**
Biến động cao, xu hướng hình thành. Dùng trailing stop rộng để tránh bị quét bởi nhiễu.

---

## Khi nào không dùng trailing?

Scalping hoặc day trade ngắn: mục tiêu nhỏ, trailing không có ý nghĩa.

Spread rộng: trailing stop có thể bị quét bởi spread. Với cổ thanh khoản thấp, dùng stop cố định.

Mới vào lệnh: trailing stop quá gần sẽ bị quét ngay. Cho giá chạy ít nhất 1 ATR trước khi kích hoạt trailing.

---

## Cách cài trên app

Hầu hết sàn VN (SSI, VNDirect, TCBS) không có trailing stop tự động. Phải canh manual.

Cách làm: đặt stop loss cố định. Khi giá đạt mốc mới, chỉnh stop lên. Mỗi ngày kiểm tra 1 lần, điều chỉnh stop. Hoặc dùng TradingView alert để được nhắc.

---

Trailing stop giữ lệnh trong xu hướng mạnh, chốt lời tự động khi trend kết thúc. Trailing theo ATR hoặc pivot. Không trailing trong sideways. Thị trường VN chưa có trailing tự động → canh manual.

Bài 46: Trailing Stop
