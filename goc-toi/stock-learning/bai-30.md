# Bài 30: Pivot Với RSI — Lọc Tín Hiệu Giả

## 📌 Mở đầu

Bài trước cậu học Pivot + Volume. Hôm nay thêm một layer nữa: **RSI**.

Bộ đôi Pivot + RSI giúp cậu trả lời câu hỏi: *"Breakout này có momentum thật không? Hay chỉ là một cú hích yếu ớt trước khi quay đầu?"*

---

## 1. RSI Nhắc Nhanh

RSI (Relative Strength Index) — đo tốc độ và biên độ thay đổi giá.

- **RSI > 70** = quá mua (overbought)
- **RSI < 30** = quá bán (oversold)
- **RSI 30-70** = bình thường

(Chi tiết bài 13 — quay lại nếu quên.)

---

## 2. Kết Hợp Pivot + RSI — 4 Kịch Bản Chính

### Kịch bản 1: Giá chạm R1 + RSI > 70

```
Tình huống: Giá lên R1, RSI trên 70
→ Giá đang ở vùng kháng cự + thị trường quá mua
→ Khả năng quay đầu CAO
```

**Hành động:** KHÔNG mua. Có thể canh short.
**Lưu ý:** Nếu RSI > 75 và có divergence → short mạnh hơn.

### Kịch bản 2: Giá chạm R1 + RSI < 60

```
Tình huống: Giá lên R1 nhưng RSI dưới 60
→ Giá đến vùng kháng cự nhưng chưa quá mua
→ Có thể còn dư địa lên tiếp nếu breakout
```

**Hành động:** Chờ xác nhận volume. Nếu breakout có thể lên R2.
**Lưu ý:** Đây là tình huống "giá còn mạnh" — đừng vội short.

### Kịch bản 3: Giá chạm S1 + RSI < 30

```
Tình huống: Giá xuống S1, RSI dưới 30
→ Giá ở vùng hỗ trợ + thị trường quá bán
→ Khả năng bật lên CAO
```

**Hành động:** Có thể long. Stop dưới S1.

### Kịch bản 4: Giá chạm S1 + RSI > 40

```
Tình huống: Giá xuống S1 nhưng RSI vẫn trên 40
→ Giá đến hỗ trợ nhưng chưa quá bán
→ Có thể còn xuống tiếp
```

**Hành động:** Chờ. Chưa vội long.

---

## 3. Bảng Tổng Quan Nhanh

| Giá | RSI | Ý nghĩa | Hành động |
|-----|-----|---------|-----------|
| R1 | > 70 | Overbought + kháng cự | Canh short |
| R1 | < 60 | Còn dư địa | Chờ breakout |
| S1 | < 30 | Oversold + hỗ trợ | Canh long |
| S1 | > 40 | Chưa oversold | Chờ |
| PP | > 70 | Trên PP nhưng quá mua | Coi chừng quay đầu |
| PP | < 30 | Dưới PP nhưng quá bán | Có thể bật lên |

---

## 4. Divergence Tại Pivot — Vũ Khí Tối Thượng

Đây là lúc cậu kết hợp bài 22 (divergence) với pivot.

### Bearish divergence tại R1

```
Giá tạo đỉnh cao hơn → chạm R1
RSI tạo đỉnh thấp hơn → dưới 70
→ Bearish divergence tại kháng cự
→ Đảo chiều xuống RẤT mạnh
```

**Hành động:** Short tự tin hơn. Stop trên R1.

### Bullish divergence tại S1

```
Giá tạo đáy thấp hơn → chạm S1
RSI tạo đáy cao hơn → trên 30
→ Bullish divergence tại hỗ trợ
→ Bật lên RẤT mạnh
```

**Hành động:** Long tự tin hơn. Stop dưới S1.

---

## 5. Ví Dụ Cụ Thể

### Ví dụ: HPG tại R1

```
HPG: PP = 28,000, R1 = 29,200
RSI = 72

Kịch bản:
- Giá chạm R1 → RSI 72 > 70 → quá mua tại kháng cự
- Nến hôm đó: shooting star (bấc trên dài)
→ Short tại 29,000, stop 29,500, TP 28,000 (PP)
```

### Ví dụ: FPT tại S1

```
FPT: PP = 130,000, S1 = 128,000
RSI = 28

Kịch bản:
- Giá chạm S1 → RSI 28 < 30 → quá bán tại hỗ trợ
- Nến hôm đó: hammer (bấc dưới dài)
- Kiểm tra thêm: bullish divergence?
→ Long tại 128,200, stop 127,000, TP 130,000
```

---

## 6. Sai Lầm Thường Gặp

### Sai lầm 1: RSI > 70 = bán ngay
Không phải. RSI có thể ở 70-80 cả tuần trong uptrend mạnh. Chỉ bán khi **có thêm tín hiệu pivot hoặc divergence**.

### Sai lầm 2: Chỉ dùng RSI không pivot
RSI > 70 ở giữa range không có ý nghĩa gì. Phải kết hợp với vùng pivot mới mạnh.

### Sai lầm 3: Không check timeframe
RSI daily khác RSI 1h. Khi trade pivot, dùng RSI cùng timeframe với pivot.

---

## 🎯 Kết Luận

**Cốt lõi:**
- RSI lọc tín hiệu pivot — không trade pivot mù quáng
- RSI > 70 tại R1 = nguy cơ quay đầu
- RSI < 30 tại S1 = cơ hội bật lên
- Divergence tại pivot = tín hiệu mạnh nhất
- Luôn kết hợp pivot + RSI + volume (bài trước) để có 3 lớp xác nhận

---

**Bài tập nhỏ:**
Mở TradingView, chọn bất kỳ cổ VN30 nào.
1. Xác định các mức pivot hôm nay (PP, R1, S1)
2. Giá ở mức nào? RSI bao nhiêu?
3. Nếu giá chạm R1 mà RSI 75 — cậu sẽ làm gì?
4. Nếu giá chạm S1 mà RSI 25 — cậu sẽ làm gì?

Bài sau: Pivot với MACD — momentum confirmation.

— BG 🏠
