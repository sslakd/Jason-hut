# Bài 44: Risk-Reward Ratio — RR 1:2, 1:3 Cách Tính Và Chọn

*Đừng trade nếu chưa biết mình đang mạo hiểm bao nhiêu để lời bao nhiêu.*

---

Jason à,

Bài trước học position sizing — biết vào bao nhiêu. Hôm nay học **Risk-Reward Ratio** — biết một trade có đáng chơi không trước khi vào lệnh.

## Risk-Reward Ratio (RR) Là Gì?

**RR = Lợi nhuận kỳ vọng / Rủi ro chấp nhận**

Ví dụ:
- Mua FPT 130,000
- Stop loss 125,000 → rủi ro 5,000đ/cp
- Take profit 140,000 → lời 10,000đ/cp
- RR = 10,000 / 5,000 = **2** (hay 1:2)

Đọc: "1 đồng rủi ro kiếm 2 đồng lời."

## Tại Sao RR Quan Trọng?

Jason cần hiểu: **Win rate không phải tất cả**. Quan trọng là expectancy (kỳ vọng lợi nhuận).

Công thức expectancy:
```
E = (Win% × Avg Win) - (Loss% × Avg Loss)
```

### Ví dụ 1: Win rate cao nhưng RR thấp

Jason trade với win rate 80% nhưng RR = 1:0.5 (lời 5, mất 10):
```
E = (0.8 × 5) - (0.2 × 10) = 4 - 2 = 2
```
→ Kỳ vọng dương, nhưng thấp.

### Ví dụ 2: Win rate thấp nhưng RR cao

Jason trade với win rate 30% nhưng RR = 1:5 (lời 5, mất 1):
```
E = (0.3 × 5) - (0.7 × 1) = 1.5 - 0.7 = 0.8
```
→ Kỳ vọng 0.8 — mỗi lệnh kiếm 0.8% tài khoản, rất tốt.

**Quan trọng:** Chỉ cần E > 0 là chiến lược có lời trong dài hạn.

## Tỷ Lệ Thắng Cần Thiết Cho Từng Mức RR

Bảng dưới cho biết **cần thắng bao nhiêu %** để hoà vốn với từng mức RR:

| RR | Win rate hoà vốn | Ghi chú |
|----|-----------------|---------|
| 1:0.5 | 66.7% | Cần thắng 2/3 — khó duy trì |
| 1:1 | 50% | Chẵn lẻ, khó có lợi thế |
| 1:1.5 | 40% | Dễ duy trì |
| **1:2** | **33.3%** | **Chỉ cần thắng 1/3 — phổ biến nhất** |
| 1:2.5 | 28.6% | Thắng dưới 30% vẫn lời |
| **1:3** | **25%** | **Chỉ cần thắng 1/4 — rất dễ** |
| 1:4 | 20% | Cần 1/5 |
| 1:5 | 16.7% | Cần 1/6 |

Nhìn bảng này Jason sẽ thấy: **RR càng cao, Jason càng dễ có lợi nhuận dù tỷ lệ thắng thấp**.

Đây là lý do trader chuyên nghiệp thường chọn RR >= 1:2.

## Tại Sao Nhiều Trader Mới Chơi RR Thấp?

Họ trade kiểu:
- Vào lệnh không có stop loss rõ ràng
- Lời nhỏ đã chốt (sợ mất)
- Lỗ lớn vẫn giữ (hy vọng hồi)

Kết quả: RR thực tế có thể 1:0.3 — thắng nhiều nhưng mỗi lần thua mất gấp 3-4 lần lần thắng.

Ví dụ:
- 10 lệnh: thắng 7 (mỗi lệnh lời 500k), thua 3 (mỗi lệnh lỗ 2tr)
- Tổng: 7 × 500k - 3 × 2tr = 3.5tr - 6tr = **-2.5tr**

Thắng 70% nhưng vẫn lỗ. Jason thấy chưa?

## Cách Chọn RR Phù Hợp

### Yếu tố 1: Phong cách giao dịch

| Phong cách | RR phù hợp | Lý do |
|-----------|-----------|-------|
| Scalping | 1:1 đến 1:1.5 | Lời nhỏ, vào ra nhanh |
| Day trade | 1:1.5 đến 1:2 | Giữ vài tiếng |
| Swing trade | 1:2 đến 1:3 | Giữ vài ngày đến vài tuần |
| Position trade | 1:3 đến 1:5 | Giữ tháng, xu hướng lớn |

### Yếu tố 2: Win rate lịch sử

Mở journal, xem win rate hiện tại:
- Win rate 50%: dùng RR >= 1:2
- Win rate 40%: dùng RR >= 1:3
- Win rate 30%: dùng RR >= 1:4

### Yếu tố 3: Thị trường hiện tại

- **Sideways market:** RR thấp hơn (1:1.5), vì giá không chạy xa
- **Trending market:** RR cao hơn (1:3), giá chạy theo xu hướng mạnh
- **Volatile (biến động mạnh):** RR thấp, stop xa hơn, nhưng target cũng xa

## Ví Dụ Chọn RR Trên Thị Trường VN

### Case 1: HPG sideway trong vùng 27,000-29,000

Jason muốn mua 27,500, stop 27,000 (rủi ro 500), target 29,000 (lời 1,500).
- RR = 1,500/500 = **3** — ngon. Nhưng có chạm 29k không nếu sideway?

Thực tế: Nếu sideway, giá có thể chạm 28,500 rồi quay đầu. Đặt target 29k là tham lam. Tốt hơn:
- Target 28,500: RR = 1,000/500 = **2** — thực tế hơn

### Case 2: VPB sau tin tích cực, breakout trendline

Giá 18,000, breakout khỏi trendline giảm.
- Stop loss dưới trendline 17,500 (rủi ro 500)
- Target kháng cự gần nhất 19,200 (lời 1,200)
- RR = 1,200/500 = **2.4** — rất tốt

→ Chấp nhận trade này.

### Case 3: MWG đang ở đỉnh, không rõ xu hướng

Giá 56,000. Jason muốn mua vì thấy đẹp.
- Stop loss 55,000 (rủi ro 1,000)
- Target? Jason không biết → không thể tính RR

→ **KHÔNG trade.** Nếu không biết target ở đâu, đừng vào lệnh.

## Quy Tắc Vàng Của BG Về RR

1. **RR tối thiểu 1:1.5** — không trade RR thấp hơn
2. **RR lý tưởng 1:2 hoặc cao hơn** — cho Jason margin an toàn
3. **Luôn biết stop loss và take profit TRƯỚC khi vào lệnh** — không biết thì không vào
4. **Điều chỉnh RR theo điều kiện thị trường** — uptrend RR cao, sideway RR vừa
5. **Đừng tham RR quá cao** — RR 1:5 hiếm khi chạm, dễ thua nhiều hơn

## Bài Tập Nhỏ

Trong các tình huống sau, trade nào có RR đáng chơi?

1. Mua VIC 42,000, SL 40,500, TP 45,500
2. Mua SSI 25,000, SL 24,700, TP 25,500
3. Mua FPT 130,000, SL 127,000, TP 138,000
4. Mua VNM 80,000, SL 79,000, TP 82,000

Đáp án:
- (1) Lời 3,500, lỗ 1,500 → RR = 2.33 — ✅
- (2) Lời 500, lỗ 300 → RR = 1.67 — ✅ (ngưỡng thấp)
- (3) Lời 8,000, lỗ 3,000 → RR = 2.67 — ✅
- (4) Lời 2,000, lỗ 1,000 → RR = 2 — ✅

Tất cả đều có RR >= 1.5, đều đáng cân nhắc.

---

**Bài 45:** Stop loss — các loại và cách đặt cho thị trường VN.

— BG 🏠
