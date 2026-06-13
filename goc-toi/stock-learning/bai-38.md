# Bài 38: Fakeout Pivot — Cách Nhận Biết

## 📌 Mở đầu

Đây là bài **quan trọng nhất** trong Phase 3.

Cậu đã học pivot, volume, RSI, MACD, Fibonacci, entry, stop, TP. Nhưng còn một thứ có thể phá hỏng tất cả: **FAKEOUT**.

Fakeout là khi giá **vượt qua** pivot, khiến cậu tưởng breakout thật — rồi lập tức quay đầu, quét stop loss của những người vừa vào lệnh.

Nếu không biết nhận biết fakeout, cậu sẽ bị "quét" liên tục và mất tiền oan.

---

## 1. Fakeout Là Gì?

Fakeout (còn gọi là false breakout / liquidity sweep) là:

> Giá tạm thời vượt qua một mức pivot quan trọng, nhưng không đủ sức mạnh để duy trì — lập tức quay đầu ngược lại.

### Ví dụ:
```
PP = 130,000, R1 = 132,000
Giá lên 132,500 (vượt R1) → ai cũng nghĩ breakout → mua vào
→ Giá quay đầu xuống 129,000 → quét stop của những người vừa mua
→ Đó là fakeout
```

### Mục đích của fakeout:
- Big money muốn **gom hàng giá rẻ** — đẩy giá xuống dưới hỗ trợ để quét stop, rồi mua vào
- Hoặc muốn **xả hàng giá cao** — đẩy giá lên trên kháng cự để quét stop short, rồi bán ra

**Đây là trò chơi của big money. Cậu không đánh bại được họ — nhưng cậu có thể học cách đi cùng họ.**

---

## 2. Dấu Hiệu Nhận Biết Fakeout

### Dấu hiệu 1: Volume thấp tại breakout

```
Giá vượt R1 với volume < 0.8x TB
→ Fakeout rất cao
```

**Trái lại:** Breakout thật có volume > 1.5x TB.

### Dấu hiệu 2: Nến có bấc dài

```
Giá vượt R1, nhưng:
- Nến 15m: bấc trên rất dài, thân nến nhỏ
- Hoặc: nến đỏ (giá đóng cửa dưới R1 dù đã vượt)
→ Fakeout
```

**Trái lại:** Breakout thật có nến xanh to, đóng cửa xa khỏi pivot.

### Dấu hiệu 3: RSI không xác nhận

```
Giá vượt R1 nhưng RSI < 50 (dưới trung bình)
→ Fakeout — giá tăng nhưng động lực yếu
```

**Trái lại:** Breakout thật có RSI > 50, thường > 60.

### Dấu hiệu 4: MACD histogram đang thu hẹp

```
Giá vượt R1 nhưng histogram MACD đang thu nhỏ
→ Momentum yếu → fakeout
```

**Trái lại:** Breakout thật histogram mở rộng hoặc đang tăng.

### Dấu hiệu 5: Giá quay đầu ngay trong 1-2 nến

```
Vượt R1 ở nến thứ nhất → nến thứ 2 quay xuống dưới R1
→ Fakeout
```

**Trái lại:** Breakout thật giá giữ trên R1 ít nhất 2-3 nến.

---

## 3. Bảng So Sánh — Breakout Thật vs Fakeout

| Yếu tố | Breakout thật | Fakeout |
|--------|---------------|---------|
| Volume | > 1.5x TB | < TB hoặc bình thường |
| Nến | Thân to, đóng xa pivot | Bấc dài, thân nhỏ |
| RSI | > 50, có thể > 60 | < 50 hoặc giảm |
| MACD histogram | Mở rộng | Thu hẹp |
| Thời gian duy trì | > 2-3 nến | < 2 nến |
| Ngày trong tuần | Thứ 3-5 (xu hướng) | Thứ 2 hoặc thứ 6 |
| ATR | Mở rộng | Thu hẹp |

---

## 4. Các Loại Fakeout Phổ Biến

### Loại 1: Fakeout lên — Bull Trap

Giá vượt R1 (kháng cự), mọi người mua theo → giá quay đầu xuống → quét stop của người mua.

**Cách tránh:**
- Chờ giá đóng cửa TRÊN R1 ít nhất 1 nến daily
- Kiểm tra volume
- Kiểm tra RSI

### Loại 2: Fakeout xuống — Bear Trap

Giá thủng S1 (hỗ trợ), mọi người bán theo → giá quay đầu lên → quét stop của người bán.

**Cách tránh:**
- Tương tự — chờ xác nhận

### Loại 3: Fakeout PP (phá PP rồi hồi)

Giá phá PP (phá xuống dưới) → mọi người short → giá quay lên trên PP → quét stop short.

**Đây là fakeout phổ biến nhất trên thị trường VN — PP thường bị "chọc thủng" 1 tí rồi hồi.**

---

## 5. Chiến Thuật Tránh Fakeout (BG's Rules)

### Rule 1: Chờ 1 nến xác nhận

Không trade ngay khi giá chạm/vượt pivot. Chờ **1 nến đóng cửa** khẳng định.

```
Vượt R1 → chờ nến 15m (hoặc 1h) đóng cửa trên R1
Nếu đóng cửa trên R1 → vào lệnh
Nếu đóng cửa dưới R1 (dù đã vượt) → không trade
```

### Rule 2: Volume rule

Không bao giờ trade breakout nếu volume < 1.2x TB.

```
Volume 1.5x+ → tự tin
Volume 1.0-1.5x → thận trọng
Volume < 1.0x → KHÔNG trade
```

### Rule 3: False breakout từ 1h30-2h chiều

Trên thị trường VN, fakeout thường xảy ra vào:
- **14:00-14:30** — trước ATC, giá thường bị kéo lên/xuống rồi quay đầu ở ATC
- **9:15-9:30** — sau ATO, giá tìm hướng thật

### Rule 4: Kết hợp timeframe

Luôn kiểm tra daily pivot trước khi trade intraday.

Nếu daily R1 = 132,000 và intraday vượt 132,000 → daily R1 là kháng cự mạnh, breakout intraday có thể là fakeout.

---

## 6. Ví Dụ Cụ Thể

### Ví dụ: FPT fakeout R1

```
FPT:
PP = 130,000, R1 = 132,000
Volume TB 20 = 2 triệu

Diễn biến:
9:30 — Giá 131,500
10:00 — Giá lên 132,200 (vượt R1) — volume 200k trong 15p
10:15 — Giá quay xuống 131,500 — nến 15m đỏ
10:30 — Giá 130,500

Dấu hiệu fakeout:
- Volume thấp (dự tính cả ngày chỉ ~1.2 triệu)
- Quay đầu ngay trong 1 nến
- Nến 15m đỏ tại R1
```

**Cách xử lý đúng:**
```
Không mua khi giá vượt R1 lúc 10:00
Chờ nến xác nhận
Thấy quay đầu → bỏ qua, hoặc nếu đã short tại R1 thì giữ
```

### Ví dụ 2: FPT breakout thật

```
FPT:
PP = 130,000, R1 = 132,000
Volume TB = 2 triệu

Diễn biến:
10:00 — Giá 131,800
10:15 — Giá 132,100 — volume 500k trong 15p
10:30 — Giá 132,500 — volume 600k — nến xanh to

Dấu hiệu breakout thật:
- Volume gấp 2x so với 15p thường
- 2 nến liên tiếp trên R1
- Nến xanh to, thân dài
```

**Cách xử lý đúng:**
```
Mua tại 132,300 (sau khi nến 10:30 đóng cửa)
Stop: 131,500 (dưới R1)
TP: R2 134,000
```

---

## 🎯 Kết Luận

**Cốt lõi tránh fakeout:**
1. **Chờ nến xác nhận** — không trade ngay khi chạm pivot
2. **Volume > 1.5x TB** — breakout thật
3. **RSI > 50 và histogram mở rộng** — momentum thật
4. **Ít nhất 2 nến duy trì** trên/dưới pivot
5. **Tránh fakeout giờ ATO và trước ATC** — thời gian dễ fake
6. **Kết hợp daily + intraday** — biết vùng nào là kháng cự thật

---

**Bài tập nhỏ:**
Mở TradingView, chọn bất kỳ cổ VN30 nào khung Daily.
1. Tìm 1 lần fakeout trong 10 phiên gần nhất
2. Ghi lại volume hôm đó so với TB
3. Nến hôm đó có đặc điểm gì? (bấc dài? đóng cửa dưới pivot?)
4. Nếu cậu trade hôm đó — đáng lẽ phải làm gì?

Bài sau: Pivot + Trend — trade theo xu hướng.

— BG 🏠
