# 📈 Bài 52: Backtest — Cách Backtest 1 Strategy Đơn Giản Trên Excel

*Speedrun 2 tháng — Backtest*

---

Có strategy hay mà không backtest thì cũng như mua xe đẹp xong không chạy thử. Backtest là cách kiểm tra "Chiến thuật này có lời không?" trước khi đem tiền thật vào.

BG chỉ cách backtest đơn giản trên Excel — không cần code, không cần phần mềm đắt tiền.

---

## Tại sao phải backtest?

| Lý do | Giải thích |
|---|---|
| **Kiểm tra strategy** | Có thực sự lời không? |
| **Tìm điểm yếu** | R:R kém? Win rate thấp? |
| **Tối ưu tham số** | MA period? RSI threshold? |
| **Tự tin hơn** | Có số liệu, không trade cảm tính |
| **Tránh overfitting** | Strategy chỉ đẹp trên 1 mã? |

---

## Chuẩn bị dữ liệu

### 1. Nguồn dữ liệu

| Nguồn | Loại | Free? |
|---|---|---|
| **TradingView** | Export CSV | ✅ |
| **CafeF** | Lịch sử giá | ✅ |
| **VNDirect** | Dữ liệu nội bộ | Có tài khoản |
| **Investing.com** | Forex, index | ✅ |

### 2. Cột cần có

```
Date | Open | High | Low | Close | Volume
```

Tối thiểu: Date + Close là đủ cho backtest cơ bản.

### 3. Khoảng thời gian

- **Tối thiểu:** 6 tháng (120+ phiên)
- **Tốt nhất:** 2-3 năm (500+ phiên)
- **Bao gồm:** Cả uptrend + downtrend + sideway

---

## Tạo Excel Template

### Bước 1: Import dữ liệu

Tạo 1 sheet tên là "Data". Paste dữ liệu giá.

| A | B | C | D | E | F |
|---|---|---|---|---|---|
| Date | Open | High | Low | Close | Volume |

### Bước 2: Tính chỉ báo

Sheet "Indicators". Thêm cột:

```
Column G: MA20 = AVERAGE(E2:E21)   // 20 phiên gần nhất
Column H: MA50 = AVERAGE(E2:E51)   // 50 phiên gần nhất
Column I: RSI = xem công thức dưới
Column J: VolumeMA20 = AVERAGE(F2:F21)

RSI công thức:
- diff = Close - Close(-1)
- gain = IF(diff>0, diff, 0)
- loss = IF(diff<0, -diff, 0)
- avgGain = AVERAGE(gain)
- avgLoss = AVERAGE(loss)
- RS = avgGain/avgLoss
- RSI = 100 - 100/(1+RS)
```

### Bước 3: Tạo tín hiệu

Sheet "Signals". Mỗi dòng = 1 tín hiệu.

| A | B | C | D | E | F |
|---|---|---|---|---|---|
| Date | Mã | Hướng | Entry | SL | TP |

Công thức tín hiệu (ví dụ strategy SMA crossover):

```
Signal Long:
= IF(AND(G20>H20, G19<H19), "LONG", "")

Signal Short:
= IF(AND(G20<H20, G19>H19), "SHORT", "")
```

### Bước 4: Tính kết quả

Sheet "Results". Mỗi dòng = 1 trade.

| A | B | C | D | E | F | G | H | I |
|---|---|---|---|---|---|---|---|---|
| # | Date In | Date Out | Hướng | Entry | Exit | P/L (điểm) | P/L (%) | R:R |

Công thức:

```
P/L (điểm):
= IF(D2="LONG", F2-E2, E2-F2)

P/L (%):
= P/L(điểm) / Entry * 100

R:R:
= ABS(G2) / ABS(SL - Entry)
```

---

## Ví dụ cụ thể: Backtest SMA 20/50 cho FPT

### Strategy
- Long khi MA20 cắt lên MA50 (Golden Cross)
- Short khi MA20 cắt xuống MA50 (Death Cross)
- SL: 2% từ entry
- TP: 4% từ entry (R:R = 1:2)

### Dữ liệu: FPT 01/2024 - 06/2024 (~120 phiên)

**Kết quả backtest (giả định):**

| Trade | Date In | Date Out | Hướng | Entry | Exit | P/L | R:R |
|---|---|---|---|---|---|---|---|
| 1 | 15/01 | 25/01 | Long | 110 | 114.4 | +4k | 1:2 |
| 2 | 20/02 | 05/03 | Long | 112 | 116.5 | +4.5k | 1:2 |
| 3 | 10/03 | 18/03 | Short | 116 | 112.5 | +3.5k | 1:1.8 |
| 4 | 25/03 | 01/04 | Long | 113 | 110.7 | -2.3k | 1:2 (SL) |
| 5 | 15/04 | 28/04 | Long | 115 | 119.6 | +4.6k | 1:2 |
| 6 | 05/05 | 12/05 | Short | 118 | 115.6 | +2.4k | 1:1.2 |
| 7 | 20/05 | 01/06 | Long | 117 | 114.7 | -2.3k | 1:2 (SL) |

**Tổng kết:**

| Chỉ số | Giá trị |
|---|---|
| Tổng trade | 7 |
| Win | 5 |
| Loss | 2 |
| Win rate | 71.4% |
| Tổng P/L | +14.4 điểm |
| Lợi nhuận TB | +2.06 điểm/trade |
| Max drawdown | -4.6 điểm |
| Expectancy | +2.06 điểm/trade |

---

## Template Excel mẫu

BG đề xuất cấu trúc file:

```
Sheet 1: DATA
- Date | Open | High | Low | Close | Volume

Sheet 2: INDICATORS
- MA20 | MA50 | RSI | VolumeMA20 | Signal

Sheet 3: TRADES
- ID | Date | Mã | Hướng | Entry | SL | TP | Exit | P/L | R:R | Notes

Sheet 4: SUMMARY
- Win rate | Avg Win | Avg Loss | Expectancy | Max DD | Sharpe (manual)
```

---

## Các strategy dễ backtest trên Excel

| Strategy | Cách tính |
|---|---|
| **SMA crossover** | MA20 x MA50 |
| **RSI oversold/overbought** | RSI < 30 long, > 70 short |
| **Breakout** | Giá > Highest(20) → long |
| **Support/Resistance** | Manual — đánh dấu S/R rồi check |
| **Volume divergence** | Giá tăng/volume giảm → manual check |

---

## Những cạm bẫy khi backtest

### 1. Look-ahead bias
**Sai:** Dùng giá đóng cửa hôm nay để quyết định vào lệnh hôm nay.
**Đúng:** Chỉ dùng giá của các phiên trước.

### 2. Survivorship bias
**Sai:** Chỉ backtest các mã còn tồn tại.
**Đúng:** Backtest cả mã đã bị hủy niêm yết (như ITA, OGC) — nếu có dữ liệu.

### 3. Overfitting
**Sai:** Tối ưu RSI = 23.7, MA = 33, vì thấy đẹp nhất.
**Đúng:** Dùng số tròn (30, 50, 20), test trên nhiều mã.

### 4. Không tính phí
**Sai:** Mua 100 → bán 105 → lời 5.
**Đúng:** Mua 100 + 0.15% → bán 105 - 0.15% → lời thực tế 4.7.

### 5. Quá ít mẫu
**Sai:** 10 trade → win rate 80%.
**Đúng:** Cần 30+ trade để có ý nghĩa thống kê.

---

## Cách backtest manual (không Excel)

Nếu lười Excel hoặc chỉ muốn test nhanh:

1. **Mở TradingView**
2. **Chọn mã, timeframe D1**
3. **Phân tích từng vùng S/R**
4. **Ghi chép trade vào sổ tay**

Kém chính xác hơn, nhưng ít tốn thời gian và giúp rèn kỹ năng phân tích.

---

## Checklist backtest của BG

```
✅ 50+ mẫu trade
✅ Bao gồm phí + spread
✅ Cả win + loss ghi đầy đủ
✅ Win rate > 50%
✅ Expectancy > 0
✅ Max DD < 20%
✅ R:R trung bình > 1:1.5
✅ Test trên 3 mã khác nhau
✅ Bao gồm cả 3 điều kiện thị trường
```

---

## Tóm tắt

1. **Backtest = chiếc cầu từ demo → real**
2. **Excel đủ dùng cho basic strategy**
3. **30+ trade mới có ý nghĩa**
4. **Tránh look-ahead bias — chỉ dùng dữ liệu quá khứ**
5. **Đừng overfit — dùng số tròn**
6. **Kết quả backtest không đảm bảo tương lai**

> **BG nhắn:** Backtest xong mà strategy không lời? Tốt — biết sớm hơn là mất tiền thật. Backtest giống như chạy thử xe trước khi mua: tốn 1 buổi chiều nhưng tiết kiệm cả năm hối hận.

Bài sau: **Tối ưu — win rate vs R:R, expectancy, sharpe ratio cơ bản.**
