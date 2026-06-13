# Bài 33: Pivot Intraday — R1, R2, R3, S1, S2, S3 Chi Tiết

## 📌 Mở đầu

Các bài trước BG dạy pivot Daily. Hôm nay xuống cấp độ **intraday** — trade trong ngày, canh từng mức R1, R2, R3 và S1, S2, S3.

Đây là nơi pivot **phát huy sức mạnh nhất**. Vì trong ngày, các mức pivot là "kim chỉ nam" cho price action.

---

## 1. Pivot Intraday Khác Gì Pivot Daily?

| Pivot Daily | Pivot Intraday |
|-------------|----------------|
| Tính từ H/L/C **hôm qua** | Tính từ H/L/C của **phiên/khung giờ trước** |
| Dùng 1 lần/ngày | Có thể tính lại mỗi khung (1h, 4h) |
| Cho cái nhìn tổng thể | Cho điểm vào/thoát cụ thể |
| Hợp với swing trade (vài ngày) | Hợp với day trade (trong phiên) |

**Cách dùng phổ biến:**
- **Pivot Daily** = xác định vùng lớn cho cả ngày
- **Pivot 1h/15m** = xác định điểm vào/thoát cụ thể trong ngày

---

## 2. Cách Tính Pivot Intraday

**Công thức vẫn y chang** — chỉ thay đổi dữ liệu đầu vào.

### Pivot 1h
```
Mỗi đầu giờ, tính từ 1 tiếng trước:
PP(1h) = (High_1h + Low_1h + Close_1h) / 3
R1(1h) = 2 × PP - Low_1h
S1(1h) = 2 × PP - High_1h
```

### Pivot 15m
```
Tương tự, dùng dữ liệu 15 phút trước.
```

**Lưu ý:** TradingView tự tính pivot intraday — chỉ cần chọn timeframe.

---

## 3. Vai Trò Cụ Thể Của Từng Mức

### R1 — Kháng cự đầu tiên
- Mức **dễ chạm nhất** trong ngày
- Thường giá chạm R1 trong 1-2h đầu phiên
- Nếu giá mở cửa dưới R1 → R1 là mục tiêu

**Cách trade R1 intraday:**
```
Giá đang tăng → chạm R1:
- Nến 15m đóng cửa yếu (bấc trên dài) → short
- Nến 15m đóng cửa mạnh (xanh to) → có thể lên R2
```

### R2 — Kháng cự thứ hai
- Xa hơn, chỉ chạm trong phiên biến động mạnh
- **Khoảng cách R2 - R1** = range của khung trước
- Nếu giá chạm R2 → thường quay đầu rất nhanh

### R3 — Mức xa nhất
- Hiếm chạm — thường trong ngày có tin tức lớn
- Nếu chạm R3 → overshoot → quay đầu mạnh

### S1 — Hỗ trợ đầu tiên
- Quan trọng nhất bên dưới
- Nếu giá mở cửa gần S1 → có thể bật lên

### S2 — Hỗ trợ thứ hai
- Đáy của phiên biến động mạnh
- Kết hợp S2 + RSI < 30 = cơ hội mua

### S3 — Mức xa nhất dưới
- Cảnh báo: thị trường đang quá yếu
- Có thể là điểm mua mạo hiểm

---

## 4. Cấu Trúc Phiên Intraday Với Pivot

Một ngày giao dịch VN thường có 3 phần:

### 9:00 - 10:00 — Phiên sáng sớm
```
Giá chạy về pivot sau ATO
→ Thường chạm PP, R1 hoặc S1 đầu tiên
→ Khối lượng cao
```

**Hành động:** Quan sát. Đừng vội vào lệnh trong 30 phút đầu. Chờ giá ổn định quanh PP.

### 10:00 - 11:30 — Phiên sáng chính
```
Giá xác định xu hướng trong ngày
→ Nếu giá trên PP: ưu tiên long
→ Nếu giá dưới PP: ưu tiên short
```

**Hành động:** Trade theo hướng đã xác định.

### 13:00 - 14:30 — Phiên chiều
```
Tiếp diễn hoặc đảo chiều
→ Volume thường thấp hơn sáng
→ Các mức pivot R2/S2 thường chạm ở đây
```

**Hành động:** Cẩn thận. Fakeout nhiều vào giờ này.

### 14:30 - 14:45 — Phiên ATC
```
15 phút cuối — định giá đóng cửa
→ Giá có thể biến động mạnh
→ Nếu giá quanh pivot → khớp lệnh ATC có thể đẩy giá
```

---

## 5. Ví Dụ Cụ Thể — Một Ngày Giao Dịch

### Giả sử FPT hôm nay

Pivot daily:
- PP = 130,000
- R1 = 132,000, R2 = 134,000, R3 = 136,000
- S1 = 128,000, S2 = 126,000, S3 = 124,000

### 9:15 — Sau ATO
```
Giá mở 130,500 → trên PP
→ Xu hướng trong ngày nghiêng về tăng
→ Tìm cơ hội long
```

### 9:45
```
Giá lên 131,500 → gần R1 (132,000)
→ Nến 15m: đang xanh nhưng volume giảm
→ Chờ chạm R1
```

### 10:00 — Chạm R1
```
Giá chạm 132,000 → nến 15m: shooting star
→ RSI 15m = 72
→ Short tại 131,800, stop 132,500, TP 130,000 (PP)
```

### 11:00
```
Giá về 130,200 → chạm PP
→ Nến 15m: hammer (bấc dưới dài)
→ Chốt short lời 1,600đ/cp
```

### 13:30 (nếu chưa chốt)
```
Giá xuống 129,500 → dưới PP
→ Xu hướng trong ngày chuyển bear
→ Có thể cân nhắc short tiếp hoặc chờ S1
```

---

## 6. Lưu Ý Cho Pivot Intraday Thị Trường VN

### Biên độ HOSE 7%
Trong ngày bình thường, giá chạy 1-3% là nhiều. Pivot intraday phù hợp.

### Tránh tin tức
Khi có tin bất ngờ (lãi suất, CPI, chính sách), pivot intraday mất hiệu quả. Giá có thể phá mọi mức.

### Chọn timeframe phù hợp
- **Day trade pro:** Pivot 15m
- **Swing intraday:** Pivot 1h
- **Tổng quan:** Pivot Daily

---

## 🎯 Kết Luận

**Nhớ:**
- R1, S1 — quan trọng nhất trong intraday
- Phân biệt 3 giai đoạn phiên: sáng sớm, chính, chiều
- Đừng trade 30 phút đầu — chờ giá ổn định
- Kết hợp pivot + RSI/MACD/volume intraday
- ATC 15 phút cuối có thể thay đổi mọi thứ

---

**Bài tập nhỏ:**
Ngày mai, trong giờ giao dịch:
1. Lúc 9:30 — giá đang ở đâu so với PP?
2. Lúc 10:30 — giá có chạm R1/S1 không? Phản ứng thế nào?
3. Lúc 14:00 — giá đang ở đâu? Có cơ hội nào không?
4. Ghi lại kết quả — đúng hay sai so với dự đoán.

Bài sau: Pivot weekly/monthly — tầm nhìn lớn hơn.

— BG 🏠
