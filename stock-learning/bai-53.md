# 📈 Bài 53: Tối ưu — Win Rate vs R:R, Expectancy, Sharpe Ratio Cơ Bản

*Speedrun 2 tháng — Tối ưu*

---

Có strategy rồi — nhưng sao biết nó có tốt không? Nhìn win rate ư? Có strategy win rate 10% mà vẫn lời đều. Có strategy win rate 80% mà chết tài khoản sau 1 tháng.

Bài này BG chỉ cách đánh giá strategy đúng — bằng các chỉ số khoa học, không cảm tính.

---

## 1. Win Rate — Cái bẫy của người mới

**Win rate = % số lệnh thắng / tổng số lệnh.**

```
Ví dụ:
- 10 lệnh, thắng 7 → win rate 70%
- 10 lệnh, thắng 3 → win rate 30%
```

**Vấn đề:** Win rate cao không đồng nghĩa với lợi nhuận.

```
Strategy A: Win rate 80%
- Thắng: +100 (8 lần)
- Thua: -500 (2 lần)
- Tổng: 800 - 1000 = -200

Strategy B: Win rate 30%
- Thắng: +500 (3 lần)
- Thua: -100 (7 lần)
- Tổng: 1500 - 700 = +800
```

> **Bài học:** Win rate không quan trọng bằng expectancy (kỳ vọng). Strategy B win rate 30% nhưng lời gấp 4 lần A.

### Win rate bao nhiêu là OK?

| Win rate | Đánh giá |
|---|---|
| < 30% | Quá thấp — cần R:R rất cao để bù (1:4+) |
| 30-50% | Phổ biến cho trend-following |
| 50-70% | Tốt — phù hợp với nhiều strategy |
| > 70% | Coi chừng overfitting hoặc R:R quá thấp |

---

## 2. R:R (Risk:Reward) — Vũ khí của trader có kỷ luật

**R:R = mục tiêu lời / mức cắt lỗ.**

```
Ví dụ:
- SL: 10 điểm
- TP1: 20 điểm
- R:R = 20/10 = 1:2

Có nghĩa: Mỗi lần thua mất 1R, mỗi lần thắng được 2R.
```

### R:R bao nhiêu là tốt?

| R:R | Đánh giá |
|---|---|
| 1:1 | Hòa vốn (cần win rate > 50%) |
| 1:1.5 | Tối thiểu cho trend trade |
| 1:2 | Tốt — mức BG hay dùng |
| 1:3+ | Xuất sắc — nhưng hiếm và khó đạt được |
| < 1:1 | Rủi ro — cần win rate rất cao |

### Mối quan hệ Win Rate × R:R

Để có lợi nhuận: **Win Rate × R:R > 1.**

| Win rate | R:R tối thiểu để có lời |
|---|---|
| 30% | 1:2.4 |
| 40% | 1:1.5 |
| 50% | 1:1 |
| 60% | 1:0.67 |
| 70% | 1:0.43 |

**Công thức:** R:R tối thiểu = 1/Win Rate - 1 + epsilon

---

## 3. Expectancy — Chỉ số quan trọng nhất

**Expectancy = lợi nhuận trung bình mỗi lệnh, tính theo R.**

```
Expectancy = (Win Rate × Avg Win) - (Loss Rate × Avg Loss)

Ví dụ:
- Win: 40% × 2R = 0.8
- Loss: 60% × 1R = 0.6
- Expectancy = 0.8 - 0.6 = 0.2R

Có nghĩa: Mỗi lệnh, kỳ vọng lời 0.2R.
100 lệnh → kỳ vọng lời 20R.
```

### Expectancy bao nhiêu là tốt?

| Expectancy | Đánh giá |
|---|---|
| < 0 | Strategy thua lỗ — dừng ngay |
| 0 - 0.1R | Hòa vốn — chưa tính phí là lỗ |
| 0.1 - 0.3R | Tốt — strategy có lời ổn định |
| 0.3 - 0.5R | Rất tốt |
| > 0.5R | Xuất sắc — hiếm gặp |

### Ví dụ thực tế: So sánh 2 strategy

**Strategy: Golden Cross FPT (bài 52)**

```
Trade 1: +2R
Trade 2: +2R
Trade 3: +1.8R
Trade 4: -2R (SL)
Trade 5: +2R
Trade 6: +1.2R
Trade 7: -2R (SL)

Win rate: 5/7 = 71%
Avg Win: (2+2+1.8+2+1.2)/5 = 1.8R
Avg Loss: (2+2)/2 = 2R
Expectancy: (0.71 × 1.8) - (0.29 × 2) = 1.278 - 0.58 = 0.698R  ✅ RẤT TỐT
```

**Strategy: Scalp RSI H1**

```
Trade 1: +0.5R
Trade 2: -1R
Trade 3: +0.8R
Trade 4: +0.3R
Trade 5: -1R
Trade 6: +0.6R
Trade 7: -1R
Trade 8: +0.4R
Trade 9: -1R
Trade 10: +0.7R

Win rate: 6/10 = 60%
Avg Win: (0.5+0.8+0.3+0.6+0.4+0.7)/6 = 0.55R
Avg Loss: 1R
Expectancy: (0.6 × 0.55) - (0.4 × 1) = 0.33 - 0.4 = -0.07R  ❌ THUA LỖ
```

---

## 4. Sharpe Ratio — Đo lường trên mỗi đơn vị rủi ro

**Sharpe Ratio = (Lợi nhuận kỳ vọng - Lãi suất phi rủi ro) / Độ lệch chuẩn lợi nhuận.**

Nôm na: **Mỗi đơn vị rủi ro tạo ra bao nhiêu lợi nhuận?**

### Công thức đơn giản (cho trader cá nhân)

```
Sharpe ≈ (Avg Return - Risk Free Rate) / Std Dev of Returns

Risk Free Rate VN: ~5% (lãi tiết kiệm)
```

### Tính trên Excel

```
Giả sử 12 trade với % lợi nhuận:

Trade 1: +1.2%
Trade 2: -0.5%
Trade 3: +1.5%
...

Bước 1: Tính lợi nhuận TB = AVERAGE(range)
Bước 2: Tính độ lệch chuẩn = STDEV(range)
Bước 3: Sharpe = (TB - 5%/12) / STDEV
         = (TB - 0.42%) / STDEV
```

### Sharpe bao nhiêu là tốt?

| Sharpe | Đánh giá |
|---|---|
| < 0.5 | Kém |
| 0.5 - 1.0 | Chấp nhận được |
| 1.0 - 1.5 | Tốt |
| 1.5 - 2.0 | Rất tốt |
| > 2.0 | Xuất sắc (hiếm) |

> **Lưu ý:** Sharpe dựa trên giả định phân phối chuẩn của lợi nhuận — không hoàn hảo nhưng là chỉ số chuẩn trong tài chính.

---

## Bảng tổng hợp 4 chỉ số

| Chỉ số | Strategy A | Strategy B | Strategy C |
|---|---|---|---|
| **Win rate** | 70% | 45% | 35% |
| **R:R** | 1:1 | 1:2.5 | 1:3 |
| **Expectancy** | 0.4R | 0.575R | 0.4R |
| **Sharpe** | 0.8 | 1.3 | 1.5 |
| **Đánh giá** | 🟡 Ổn | 🟢 Tốt nhất | 🟢 Tốt nhưng khó |

> **BG nhận xét:** Strategy B có win rate thấp nhất nhưng expectancy cao nhất và sharpe tốt. Đây là strategy thực tế nhất — chịu thua nhiều, nhưng khi thắng thì thắng lớn.

---

## Cách tối ưu một strategy

### Bước 1: Đo lường hiện tại

```
Win rate: ?%
R:R: ?
Expectancy: ?R
Sharpe: ?
Max DD: ?%
```

### Bước 2: Tìm điểm yếu

| Vấn đề | Giải pháp |
|---|---|
| Win rate thấp < 30% | Thêm tín hiệu lọc, cải thiện entry |
| R:R kém < 1:1 | Tăng TP, chờ pullback để vào |
| Expectancy âm | Đổi strategy — không cứu được |
| Sharpe thấp < 0.5 | Giảm position size, thêm filter |
| DD quá lớn > 20% | Giảm position size, thêm hedge |

### Bước 3: Tối ưu từng tham số

**Ví dụ: Tối ưu RSI threshold**

```
Test RSI = 30: Win 40%, Exp 0.2R
Test RSI = 25: Win 45%, Exp 0.15R
Test RSI = 35: Win 38%, Exp 0.22R  ← TỐT NHẤT
Test RSI = 40: Win 42%, Exp 0.18R
```

**Chọn RSI = 35.**

### Bước 4: Validate lại

Test trên mã khác, thời gian khác. Nếu kết quả tương tự → strategy OK.

---

## Quy tắc ngón tay cái

| Bạn có | Thì nên |
|---|---|
| Win rate 30-40% | R:R > 1:2, mỗi thắng bù 2-3 thua |
| Win rate 40-50% | R:R > 1:1.5, mỗi thắng bù 1.5 thua |
| Win rate 50-60% | R:R > 1:1, hòa vốn ở ngưỡng này |
| Win rate > 60% | R:R > 1:0.7, ổn, nhưng cần kiểm tra overfitting |

---

## Tóm tắt

1. **Win rate KHÔNG quan trọng bằng Expectancy**
2. **R:R tối thiểu 1:1.5 cho trend trade**
3. **Expectancy > 0.3R là strategy khỏe**
4. **Sharpe > 1 là tốt, > 1.5 là xuất sắc**
5. **Tối ưu từng tham số — test lại trên nhiều mã**
6. **Đừng tham — một strategy tốt đã đủ**

> **BG nhắn:** Có strategy expectancy 0.4R mà bạn trade được 12 tháng liên tục? Giữ lấy, đừng bỏ. Có strategy sharpe 2.0 mà bạn không tuân thủ được? Cũng vô dụng. Kỷ luật thực thi còn quan trọng hơn số đẹp.

Bài sau: **Pre-market checklist mẫu.**
