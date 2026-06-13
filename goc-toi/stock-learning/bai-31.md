# Bài 31: Pivot Với MACD — Momentum Confirmation

## 📌 Mở đầu

Đã có volume (bài 29), đã có RSI (bài 30). Hôm nay thêm **MACD** — bộ ba hoàn hảo để xác nhận tín hiệu pivot.

Nếu RSI đo "tốc độ quá mua/quá bán", thì MACD đo **momentum tổng thể** — cơn gió đang thổi mạnh hay yếu.

---

## 1. MACD Nhắc Nhanh

MACD có 3 thành phần:
- **MACD line** = EMA12 - EMA26 — momentum nhanh
- **Signal line** = EMA9 của MACD line — momentum chậm hơn
- **Histogram** = MACD - Signal — chênh lệch giữa 2 đường

**Cách đọc cơ bản:**
- MACD trên Signal = bullish momentum
- MACD dưới Signal = bearish momentum
- Histogram dương và mở rộng = momentum mạnh lên
- Histogram âm và mở rộng = momentum yếu đi

(Chi tiết bài 14 — quay lại nếu quên.)

---

## 2. Bốn Kịch Bản Pivot + MACD

### Kịch bản 1: Giá chạm R1 + MACD dương nhưng thu hẹp

```
Giá lên R1, MACD trên 0 (dương) nhưng histogram đang thu nhỏ
→ Momentum đuối dần
→ Khả năng quay đầu tại R1
```

**Hành động:** Canh short. Stop trên R1.

### Kịch bản 2: Giá chạm R1 + MACD dương và mở rộng

```
Giá lên R1, MACD trên 0, histogram đang mở rộng
→ Momentum còn mạnh
→ Breakout qua R1 khả thi
```

**Hành động:** Chờ xác nhận volume. Có thể mua nếu breakout thật.

### Kịch bản 3: Giá chạm S1 + MACD âm nhưng thu hẹp

```
Giá xuống S1, MACD dưới 0, histogram đang thu nhỏ
→ Lực bán yếu dần
→ Có thể bật lên từ S1
```

**Hành động:** Canh long. Stop dưới S1.

### Kịch bản 4: Giá chạm S1 + MACD âm và mở rộng

```
Giá xuống S1, MACD dưới 0, histogram đang mở rộng (xuống sâu hơn)
→ Momentum bán còn mạnh
→ S1 có thể bị thủng
```

**Hành động:** Chờ. Đừng vội long.

---

## 3. Bảng Tổng Quan Nhanh

| Giá | MACD vs 0 | Histogram | Ý nghĩa | Hành động |
|-----|-----------|-----------|---------|-----------|
| R1 | Trên 0 | Thu hẹp | Momentum yếu | Short |
| R1 | Trên 0 | Mở rộng | Momentum mạnh | Chờ/ Long nếu breakout |
| S1 | Dưới 0 | Thu hẹp | Lực bán yếu | Long |
| S1 | Dưới 0 | Mở rộng | Lực bán mạnh | Chờ |
| PP | Chuyển dương | Bắt đầu mở rộng | Xu hướng mới | Long theo trend |
| PP | Chuyển âm | Bắt đầu mở rộng | Xu hướng xuống | Short |

---

## 4. MACD Crossover Tại Pivot

Đây là tín hiệu mạnh hơn — khi MACD line cắt signal line **ngay tại vùng pivot**.

### Bullish crossover tại S1

```
Tình huống:
- Giá chạm S1
- MACD line cắt lên signal line (bullish crossover)
- Nằm dưới 0 hoặc gần 0

→ Momentum đảo chiều tăng ngay tại vùng hỗ trợ
→ Rất mạnh — có thể long
```

### Bearish crossover tại R1

```
Tình huống:
- Giá chạm R1
- MACD line cắt xuống signal line (bearish crossover)
- Nằm trên 0 hoặc gần 0

→ Momentum đảo chiều giảm ngay tại vùng kháng cự
→ Có thể short
```

---

## 5. Ví Dụ Cụ Thể

### Ví dụ: MWG tại R1

```
MWG: PP = 56,000, R1 = 57,500
MACD: Line = 1.2, Signal = 1.0 (trên 0)
Histogram: 0.2 đang thu hẹp (tuần trước là 0.8)

Phân tích:
- MACD còn trên 0 (momentum dương)
- Nhưng histogram thu hẹp rõ (momentum yếu)
- Tại R1 57,500

→ Cân nhắc short, stop 58,000
```

### Ví dụ: SSI tại PP

```
SSI: PP = 25,000
MACD: Line vừa cắt lên Signal (bullish crossover)
Histogram bắt đầu dương

Phân tích:
- Vừa vượt PP (dưới lên) + MACD vừa crossover
- Crossover càng gần PP càng tốt

→ Long tại 25,100, stop dưới PP 24,500
```

---

## 6. Sai Lầm Thường Gặp

### Sai lầm 1: MACD lag — đừng dùng một mình
MACD là chỉ báo lag (dựa trên EMA). Đừng chỉ dùng MACD để quyết định — cần pivot làm mức giá, cần volume xác nhận.

### Sai lầm 2: Nhìn histogram mở rộng rồi mua
Histogram mở rộng nói "momentum đang mạnh" — nhưng nếu giá đã chạy xa pivot, cậu mua đỉnh.

### Sai lầm 3: Không phân biệt daily vs intraday
MACD daily có độ tin cậy cao hơn MACD 15 phút. Nếu trade pivot daily — dùng MACD daily. Nếu trade pivot intraday — dùng MACD 1h hoặc 15m.

---

## 🎯 Kết Luận

**Bộ ba hoàn chỉnh:**

| Lớp | Công cụ | Xác nhận |
|-----|---------|----------|
| 1 | Pivot Point | Vùng giá |
| 2 | Volume | Sức mạnh breakout |
| 3 | RSI | Quá mua/quá bán |
| 4 | MACD | Momentum tổng thể |

Càng nhiều lớp trùng khớp → tín hiệu càng mạnh.

---

**Bài tập nhỏ:**
Mở TradingView, chọn bất kỳ cổ VN30 nào.
1. Thêm Pivot Point Standard + MACD
2. Tìm lần giá chạm R1 gần nhất — MACD đang ở đâu? Histogram mở rộng hay thu hẹp?
3. Tìm lần giá chạm S1 gần nhất — giống câu 2
4. Có lần nào MACD crossover ngay tại pivot không?

Bài sau: Pivot với Fibonacci — kết hợp mạnh mẽ.

— BG 🏠
