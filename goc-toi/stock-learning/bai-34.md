# Bài 34: Pivot Weekly/Monthly — Tầm Nhìn Lớn

Đã học pivot Daily và Intraday. Giờ lên tầm cao hơn: pivot Weekly và Monthly.

Pivot daily = phản ứng trong 1 ngày. Pivot weekly = xu hướng 1 tuần. Pivot monthly = xu hướng 1 tháng.

Biết monthly/weekly pivot nằm ở đâu → biết vùng giá quan trọng nhất — nơi thị trường có thể quay đầu hoặc breakout mạnh.

---

## Cách tính

Công thức vẫn y chang, chỉ thay đổi đầu vào:

Pivot Weekly: dùng High, Low, Close của tuần trước.
Pivot Monthly: dùng High, Low, Close của tháng trước.

PP = (High + Low + Close) / 3
R1 = (2 × PP) - Low, S1 = (2 × PP) - High
R2 = PP + (High - Low), S2 = PP - (High - Low)

---

## Tại sao quan trọng?

**Weekly pivot — cản lớn trong tuần.**
PP weekly là mức quan trọng nhất tuần. Giá đóng cửa trên PP weekly → tuần tăng điểm. R1 weekly: nếu giá chạm R1 weekly → thường là đỉnh tuần. S1 weekly: nếu giá chạm → thường là đáy tuần.

**Monthly pivot — xu hướng tháng.**
PP monthly quyết định xu hướng tháng. R1 và S1 monthly là vùng đảo chiều mạnh. Big money đặt lệnh quanh các mức này.

**Trong thực tế:**
Chạm weekly pivot (daily chart) và monthly pivot (weekly chart) → phản ứng mạnh hơn hẳn daily pivot. Nếu daily R1 trùng weekly R1 → vùng cực kỳ mạnh.

---

## Ví dụ

**FPT weekly:**
Tuần trước: High 135.000, Low 128.000, Close 132.000.

PP weekly = (135 + 128 + 132) / 3 = 131.700
R1 weekly = (2 × 131.7) - 128 = 135.400

Tuần này: giá chạm 135.400, RSI 68, volume thấp. Phản ứng mạnh: quay đầu về 132.000 trong 2 phiên. Short tại 135.000, stop 136.000.

**HPG monthly:**
Tháng trước: High 30.000, Low 25.000, Close 28.000.

PP monthly = (30 + 25 + 28) / 3 = 27.700
S1 monthly = (2 × 27.7) - 30 = 25.400

Tháng này: giá xuống 25.500 (gần S1 monthly = 25.400). Nến hammer + volume cao. Long tại 25.500.

---

## Kết hợp 3 tầng pivot

Dùng monthly cho xu hướng tổng thể. Dùng weekly cho vùng quan trọng. Dùng daily cho entry.

Ví dụ: Monthly cho biết thị trường đang uptrend (giá trên PP monthly). Weekly R1 cho biết tuần này kháng cự ở đâu. Daily cho biết hôm nay nên mua hay bán.

Cách dùng:
1. Mở monthly, xác định PP monthly, R1/S1 monthly
2. Mở weekly, xác định PP weekly, R1/S1 weekly
3. Chỉ trade khi có sự đồng thuận ít nhất 2 tầng

---

## Khi weekly và daily trùng nhau

Daily R1 = 28.700, Weekly R1 = 28.800. Sai số chỉ 100đ (~0.35%). Vùng 28.700-28.800 là vùng rất mạnh. Nếu giá chạm vùng này:
- Volume > 1.5x TB, RSI < 60 → có thể breakout
- Volume < TB, RSI > 70 → khả năng quay đầu

---

## Lưu ý

Pivot weekly/monthly ít thay đổi — ổn định để lập kế hoạch. Kết hợp với market structure (bài 24). Nếu weekly PP đang là hỗ trợ mạnh, giá trên đó → chỉ long, không short.

Trên TradingView: thêm Pivot Point Standard, chọn Weekly. Xem ở cuối chart. Thêm indicator Monthly, chọn Monthly timeframe.

---

Xác định monthly PP, R1, S1. Xác định weekly PP, R1, S1. So sánh với daily pivot hôm nay. Vùng nào trùng nhau? Đó là vùng quan trọng nhất để canh trade.

Bài 34: Pivot Weekly/Monthly
