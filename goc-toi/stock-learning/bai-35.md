# Bài 35: Vào Lệnh Tại Pivot — Entry Chi Tiết

## 📌 Mở đầu

Đến lúc quan trọng nhất: **vào lệnh**.

Biết pivot ở đâu, biết volume, RSI, MACD, Fibonacci — nhưng không biết **cách đặt lệnh cụ thể** thì cũng vô ích.

Bài này BG chỉ chi tiết từng bước: giá chạm pivot nào, đặt lệnh ra sao, vào lúc nào, với khối lượng bao nhiêu.

---

## 1. Ba Cách Vào Lệnh Tại Pivot

### Cách 1: Limit Order — Đón giá tại pivot (ưu tiên số 1)

Đặt lệnh chờ trước khi giá chạm pivot.

```
FPT: PP = 130,000, S1 = 128,000
→ Đặt LO mua 1,000 FPT giá 128,000
→ Nếu giá xuống 128,000 → tự khớp
→ Nếu không → lệnh treo đến hết phiên
```

**Ưu điểm:** Vào lệnh đúng giá, không trượt.
**Nhược điểm:** Có thể không khớp nếu giá không chạm.

**Khi nào dùng:** Khi cậu có sẵn kế hoạch từ đêm hôm trước, tin rằng giá sẽ chạm pivot.

### Cách 2: Market Order — Xác nhận breakout

Đặt lệnh sau khi giá đã vượt pivot với xác nhận.

```
FPT: R1 = 132,000
→ Giá vượt 132,000 với nến 15m xanh + volume > 1.5x
→ Mua MP hoặc LO giá 132,200
```

**Ưu điểm:** Có xác nhận, giảm fakeout.
**Nhược điểm:** Vào trễ hơn, giá có thể đã chạy.

**Khi nào dùng:** Khi cần xác nhận breakout, không muốn bị fakeout.

### Cách 3: Limit Order tại pivot + chờ phản ứng (cách yêu thích của BG)

Đặt LO tại pivot, nhưng vào lệnh **sau khi nến xác nhận phản ứng**.

```
FPT: S1 = 128,000
→ Đặt LO mua 128,000
→ Giá chạm 128,000 → nến 15m đóng cửa
→ Kiểm tra: nến có bấc dưới dài không? RSI < 30?
→ Nếu OK → giữ lệnh, nếu không → hủy
```

**Ưu điểm:** Cả 2 thế giới — có giá tốt + có xác nhận.
**Nhược điểm:** Cần theo dõi chart liên tục.

---

## 2. Chi Tiết Từng Loại Entry

### Entry Long tại S1

**Điều kiện cần:**
- Giá chạm S1
- RSI < 30 (oversold) hoặc có bullish divergence
- Nến xác nhận: hammer, bullish engulfing, hoặc bấc dưới dài
- Volume > TB (xác nhận lực mua)

**Cách đặt lệnh:**
```
LO mua tại: S1 hoặc cao hơn 0.2-0.5% (cho spread)
Ví dụ: S1 = 128,000 → LO mua 128,200
```

**Tại sao không đặt đúng S1?** Vì spread. Nếu đặt đúng 128,000 và ask đang 128,100 → không khớp. Cần cho 1 khoảng nhỏ.

### Entry Long tại PP từ dưới lên

Khi giá từ dưới PP **vượt lên trên PP** — đây là tín hiệu chuyển xu hướng trong ngày.

**Cách đặt:**
```
Chờ nến 15m đóng cửa trên PP
LO mua tại PP + 1 spread
Stop: dưới PP 1%
TP: R1
```

### Entry Short tại R1

**Điều kiện cần:**
- Giá chạm R1
- RSI > 70 hoặc có bearish divergence
- Nến xác nhận: shooting star, bearish engulfing, bấc trên dài
- Volume thấp hoặc bình thường

**Cách đặt lệnh:**
```
LO bán tại: R1 hoặc thấp hơn 0.2-0.5%
Ví dụ: R1 = 132,000 → LO bán 131,800
```

---

## 3. Mẹo Vào Lệnh Thực Chiến

### Mẹo 1: Chia lệnh làm 2 phần

Đừng vào tất tay tại 1 mức.

```
Thay vì mua 2,000 FPT tại S1:
→ Mua 1,000 tại S1
→ Mua thêm 1,000 nếu giá bật lên xác nhận
```

### Mẹo 2: Canh theo spread

Xem spread Bid/Ask trước khi vào lệnh.

- Spread hẹp (100-300đ): LO gần pivot OK
- Spread rộng (>500đ): đặt LO thấp hơn hoặc dùng MP nếu cần gấp

### Mẹo 3: Tránh 15 phút đầu và cuối

- **9:00-9:15** (ATO) — giá chưa ổn định
- **14:30-14:45** (ATC) — biến động mạnh, fakeout nhiều
- Thời gian tốt nhất: 9:30-11:00 và 13:30-14:00

### Mẹo 4: Luôn có stop loss trước khi vào

Đây là rule bất di bất dịch. Đặt stop loss **ngay khi đặt lệnh entry**, không chờ "xem sao".

---

## 4. Ví Dụ Entry Hoàn Chỉnh

### Case: FPT Daily

```
Thông số:
- PP = 130,000
- R1 = 132,000
- S1 = 128,000
- RSI = 28 (oversold tại S1)
- Volume: 1.5x TB
- Nến hôm qua: hammer tại 128,000
```

**Kế hoạch:**
```
Entry: LO mua 1,000 FPT giá 128,200
Stop loss: 126,500 (dưới S1 ~1.2%)
Take profit 1: 130,000 (PP) — 50%
Take profit 2: 132,000 (R1) — 50%
RR: 1,800 (SL) so với 3,800 (avg TP) → ~1:2.1
```

**Kịch bản:**
```
9:30 — Giá xuống 128,100 → lệnh khớp
9:45 — Giá bật lên 129,000 → kéo SL lên 128,000 (breakeven)
10:30 — Giá lên 130,000 → chốt 500cp, kéo SL cho 500cp còn lại lên 129,500
11:30 — Giá lên 131,500 → chốt 500cp còn lại
```

---

## 5. Những Sai Lầm Entry Cần Tránh

### Sai lầm 1: FOMO — đuổi theo giá đã chạy xa pivot
```
FPT từ 128,000 (S1) đã lên 131,000
→ "Chết, lỡ mất" → mua đuổi 131,000
→ Lợi nhuận còn 1,000 thay vì 3,000
→ Stop loss gần hơn → dễ bị quét
```

### Sai lầm 2: Không kiểm tra spread
```
Đặt LO mua đúng S1 = 50,000
Nhưng bid đang 50,000, ask 50,500 (spread 500đ)
→ Không khớp → bỏ lỡ cơ hội
```

### Sai lầm 3: Vào lệnh khi chưa có nến xác nhận
```
Giá vừa chạm S1 → mua ngay
→ Chưa biết có bật lên không
→ Giá thủng S1 → lỗ ngay
```

**Luật: Chờ 1 nến xác nhận. Chỉ 1 nến — không nhiều hơn.**

---

## 🎯 Kết Luận

**Các bước vào lệnh tại pivot:**
1. Xác định pivot (daily/weekly)
2. Kiểm tra điều kiện (RSI, volume, nến)
3. Chọn cách vào (chờ sẵn / chờ breakout / chờ phản ứng)
4. Đặt LO với khoảng spread
5. Đặt stop loss NGAY LẬP TỨC
6. Chia lệnh nếu cần (thêm sau khi xác nhận)

---

**Bài tập nhỏ:**
Với HPG:
- PP = 28,000, R1 = 29,200, S1 = 26,800
- RSI = 25
- Volume tuần trước: 4.5M TB

Viết kế hoạch entry HOÀN CHỈNH:
1. Entry ở đâu? LO giá bao nhiêu?
2. Stop loss ở đâu?
3. Take profit ở đâu?
4. Nếu giá không chạm — làm gì?

Bài sau: Stop loss cho pivot trade.

— BG 🏠
