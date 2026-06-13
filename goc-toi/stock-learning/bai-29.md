# Bài 29: Pivot + Volume — Xác Nhận Breakout

## 📌 Mở đầu

Bài trước cậu đã biết các mức pivot đóng vai trò support/resistance. Nhưng **làm sao biết breakout thật hay giả?**

Câu trả lời: **Volume**.

Volume là chân lý cuối cùng. Giá có thể nói dối, nhưng volume thì không.

---

## 1. Nguyên Tắc Vàng: Breakout + Volume = Thật

Khi giá chạm R1, R2, S1, S2 — cậu có 2 kịch bản:

### Kịch bản A: Breakout có volume
```
Giá vượt R1, kèm volume > 1.5x trung bình 20 phiên
→ Breakout thật → nhiều khả năng giá tiếp tục lên R2
```

### Kịch bản B: Breakout không volume
```
Giá vượt R1, nhưng volume thấp hơn trung bình
→ Fakeout → giá sẽ quay đầu xuống dưới R1
```

**Tại sao?**
- Breakout thật cần **dòng tiền thực sự** đổ vào — nó thể hiện qua volume
- Breakout giả thường là "kéo giá lên để bán" — không có volume thật đằng sau

---

## 2. Đo Volume Như Thế Nào?

### Volume trung bình (AVG Volume)
Cách đơn giản: lấy volume trung bình 20 phiên gần nhất.

```
AVG Volume 20 = Tổng volume 20 phiên / 20
```

### Các mức volume đáng chú ý:

| Mức volume | So sánh | Ý nghĩa |
|-----------|---------|---------|
| < 0.5x TB | Rất thấp | Breakout khó tin |
| 0.5x - 1x TB | Bình thường | Cần thêm xác nhận |
| 1x - 1.5x TB | Cao hơn TB | Breakout đáng tin |
| 1.5x - 3x TB | Cao | Rất đáng tin |
| > 3x TB | Đột biến | Breakout mạnh — tin tức lớn |

---

## 3. Ví Dụ Thực Tế

### Ví dụ 1: Breakout thật — HPG

Giả sử HPG:
- PP = 28,000, R1 = 29,200
- AVG volume 20 phiên = 5 triệu

**Kịch bản:**
```
HPG lên R1 29,200 → volume hôm đó 8.5 triệu (1.7x TB)
→ Breakout xác nhận → có thể lên R2 30,500
→ Hành động: Long, stop dưới R1
```

### Ví dụ 2: Fakeout — VNM

Giả sử VNM:
- PP = 78,000, R1 = 79,500
- AVG volume 20 phiên = 1.2 triệu

**Kịch bản:**
```
VNM chạm R1 79,500 → volume chỉ 800,000 (0.67x TB)
→ Breakout yếu → khả năng quay đầu cao
→ Hành động: KHÔNG long. Chờ. Hoặc canh short.
```

---

## 4. Các Dạng Volume Khi Chạm Pivot

### Dạng 1: Volume tăng dần đến pivot
```
Volume tăng đều 3-4 phiên trước khi chạm pivot
→ Có dòng tiền âm thầm gom hàng
→ Breakout khả năng cao là thật
```

### Dạng 2: Volume bùng nổ đột ngột tại pivot
```
Volume thấp -> chạm R1 -> volume đột biến 3x
→ Có thể là tin tức mới -> trade theo tin
→ Có thể là big money kéo để xả -> coi chừng
```

### Dạng 3: Volume giảm dần đến pivot
```
Volume giảm 3 phiên trước khi chạm R1
→ Thiếu động lực
→ Khả năng fakeout cao
```

---

## 5. Pivot + Volume — Chiến Thuật Cụ Thể

### Long tại S1 với volume cao

```
Điều kiện:
- Giá chạm S1
- Volume phiên hiện tại > 1.2x TB
- Nến có bấc dưới dài (long lower wick)

Hành động:
- Long tại vùng S1
- Stop loss dưới S1 1-2%
- TP: R1
```

### Short tại R1 với volume yếu

```
Điều kiện:
- Giá chạm R1
- Volume < TB
- Nến có bấc trên dài (long upper wick)

Hành động:
- Short tại vùng R1
- Stop loss trên R1 1-2%
- TP: S1 hoặc PP
```

---

## 6. Lưu Ý Cho Thị Trường VN

### Thanh khoản VN30 vs penny

- **VN30:** Volume thường ổn định, dễ so sánh
- **Penny, small cap:** Volume dễ bị "pha loãng" bởi 1-2 lệnh lớn — coi chừng volume giả

### Phiên ATC và ATO

Volume phiên ATO và ATC thường chiếm 20-30% tổng volume ngày. Đừng vội kết luận breakout ngay đầu phiên — chờ ít nhất **30 phút đầu** để volume ổn định.

### Volume + spread

Nếu giá chạm R1 với volume cao nhưng spread nới rộng → thị trường đang do dự. Chờ thêm xác nhận.

---

## 🎯 Kết Luận

**Nguyên tắc cốt lõi:**
- Breakout + volume > 1.5x TB = thật
- Breakout + volume < TB = coi chừng fakeout
- Volume tăng dần đến pivot = tích cực
- Volume bùng nổ đột ngột = cẩn thận
- Volume giảm dần đến pivot = fakeout

---

**Bài tập nhỏ:**
Mở TradingView, chọn HPG hoặc FPT khung Daily.
1. Tìm 1 lần giá chạm R1 hoặc S1 trong 10 phiên gần nhất
2. Ghi lại volume hôm đó so với AVG volume 20
3. Kết luận: breakout thật hay giả? Giá đi tiếp hướng nào?

Bài sau: Pivot với RSI — lọc tín hiệu giả.

— BG 🏠
