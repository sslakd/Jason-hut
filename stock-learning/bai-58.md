# 📈 Bài 58: Sneaky Pivot Checklist — 12 Bước Trước Mỗi Trade

*Speedrun 2 tháng — Checklist*

---

Trước mỗi lệnh, BG chạy qua 12 bước. Có thể mất 2-3 phút — nhưng giúp tránh 90% lệnh ẩu.

Checklist này là sự tổng hợp của toàn bộ khóa học. In ra, dán cạnh màn hình.

---

## 12 Bước Sneaky Pivot Checklist

### Bước 1: Xác định xu hướng (D1)

```
Câu hỏi: Xu hướng chính là gì?
- Uptrend: Price > MA50, MA50 > MA200
- Downtrend: Price < MA50, MA50 < MA200
- Sideway: MA50 và MA200 nằm ngang

Ví dụ:
- FPT D1: Price 115 > MA50 (110) > MA200 (100) → UPTREND ✅
- VIC D1: Price 40 < MA50 (45) < MA200 (50) → DOWNTREND ❌

Nếu không rõ trend → DỪNG.
```

### Bước 2: Xác định khung H4 trend

```
Câu hỏi: Trend trung hạn có đồng pha với D1 không?

- Nếu D1 uptrend + H4 uptrend → LONG MẠNH
- Nếu D1 uptrend + H4 downtrend → CHỜ H4 đảo chiều
- Nếu D1 sideway + H4 uptrend → CÓ THỂ long nhưng nhẹ
- Nếu D1 + H4 ngược pha → THẬN TRỌNG, vị thế nhỏ
```

### Bước 3: Tìm vùng Supply / Demand (H4)

```
Supply (bán): Vùng giá giảm mạnh + OB nến giảm cuối
Demand (mua): Vùng giá tăng mạnh + OB nến tăng cuối

Vẽ OB: Nến cuối cùng trước khi giá đi mạnh.
- OB LONG: Nến xanh cuối cùng trước khi tăng
- OB SHORT: Nến đỏ cuối cùng trước khi giảm

Supply zone: Vùng từ OB đến đỉnh gần nhất
Demand zone: Vùng từ OB đến đáy gần nhất
```

### Bước 4: Chờ giá chạm vùng (H1)

```
Câu hỏi: Giá đã chạm vùng long/short chưa?

Chưa chạm → Đặt alert, chờ
Đã chạm → Sang bước 5
Đi qua vùng → Bỏ qua, chờ vùng mới
```

### Bước 5: Kiểm tra nến xác nhận (H1)

```
Nến xác nhận (confluence nến):
- Engulfing (nhấn chìm)
- Pin Bar (nến búa)
- Inside Bar (nến trong)
- Doji (nến xoay)

Yêu cầu: Có tối thiểu 1 nến xác nhận rõ ràng.
Nếu không có → CHỜ nến tiếp theo.
```

### Bước 6: Kiểm tra Volume

```
Câu hỏi: Volume có xác nhận không?

- Nến xác nhận tăng → Volume > TB 20 phiên
- Volume < TB → Nghi ngờ tín hiệu
- Volume spike gấp 2-3x TB → Xác nhận mạnh

Lưu ý: Volume xác nhận BREAKOUT, không xác nhận REVERSAL.
```

### Bước 7: Kiểm tra RSI

```
- RSI < 30 + nến xác nhận long → Quá bán → Cơ hội
- RSI > 70 + nến xác nhận short → Quá mua → Cơ hội
- RSI divergence (giá lên đỉnh cao hơn, RSI đỉnh thấp hơn) → Đảo chiều tiềm năng
- RSI 30-70 → Trung tính, dùng tín hiệu khác

Nếu RSI cực đoan > 80 hoặc < 20 → Cẩn thận, có thể tiếp diễn.
```

### Bước 8: Kiểm tra FVG (Fair Value Gap) — H1

```
FVG: Khoảng trống giữa 2 nến H1 không overlap.
- FVG dưới giá hiện tại → Vùng demand tiềm năng
- FVG trên giá hiện tại → Vùng supply tiềm năng
- FVG + OB → Vùng rất mạnh

Nếu có FVG trùng với vùng OB → Tăng confidence.
Không có FVG → Không sao, vẫn trade được.
```

### Bước 9: Tính R:R

```
R:R = Mục tiêu lời / Mức cắt lỗ

Ví dụ:
- Entry: 115 | SL: 113 | TP1: 118 | TP2: 121
- R:R TP1 = (118-115)/(115-113) = 3/2 = 1:1.5
- R:R TP2 = (121-115)/(115-113) = 6/2 = 1:3

Yêu cầu: R:R tối thiểu 1:1.5.
Nếu < 1:1.5 → KHÔNG VÀO, tìm setup khác.
```

### Bước 10: Tính Position Size

```
Position = (Tài khoản × Risk%) / Khoảng cách SL

Ví dụ:
- Tài khoản: 100 triệu
- Risk mỗi lệnh: 1% = 1 triệu
- Khoảng cách SL: 2 điểm (2,000đ)
- Position = 1,000,000 / 2,000 = 500 cổ

Công thức:
Position = (Account × Risk%) / (Entry - SL)
```

### Bước 11: Kiểm tra tâm lý + kỷ luật

```
Tự hỏi:
✅ Lệnh này có trong plan sáng nay không?
✅ Có phải FOMO không?
✅ Có phải revenge trade không?
✅ Ngủ đủ giấc? (Nếu thiếu ngủ → KHÔNG)
✅ Cảm xúc ổn định? (Nếu căng thẳng → KHÔNG)
✅ Có vi phạm bất kỳ rule nào không?

Nếu trả lời "Có" cho bất kỳ dấu hiệu cảm xúc tiêu cực nào → DỪNG.
```

### Bước 12: Vào lệnh có kế hoạch

```
Kế hoạch hoàn chỉnh:

Mã: _______________
Hướng: LONG / SHORT
Entry: _______________
SL: _______________
TP1: _______________(60% position)
TP2: _______________(40% position)
R:R: _______________
Position: _______ cổ (___ % tài khoản)
Thời gian dự kiến: 1-5 phiên

Nếu vào sau 1 phiên từ tín hiệu:
- Giá vẫn trong vùng → OK
- Giá đã ra khỏi vùng → BỎ QUA
```

---

## Checklist in nhanh — Bản A4

```
□ 1. Trend D1 rõ ràng?
□ 2. H4 đồng pha D1?
□ 3. Có S/D zone?
□ 4. Giá chạm vùng?
□ 5. Nến xác nhận?
□ 6. Volume xác nhận?
□ 7. RSI hỗ trợ?
□ 8. FVG nếu có?
□ 9. R:R ≥ 1:1.5?
□ 10. Position size đúng?
□ 11. Tâm lý OK?
□ 12. Plan chi tiết?
```

**Đủ 12/12 → Vào lệnh.**
**Thiếu 1 bước → KHÔNG vào.**

---

## Ví dụ: Chạy checklist cho FPT

```
Setup: FPT long tại 113-114

B1: Trend D1 → UPTREND ✅
B2: H4 đồng pha → H4 cũng uptrend ✅
B3: S/D → Demand zone 112-114 ✅
B4: Giá chạm → Giá 113.5, trong zone ✅
B5: Nến H1 → Bullish engulfing ✅
B6: Volume → Cao hơn TB 1.5x ✅
B7: RSI → 45, trung tính ✅
B8: FVG → Không có (không sao) ⚠️
B9: R:R → Entry 113.5, SL 111.5 (2đ), TP1 116 (2.5đ) = 1:1.25
                TP2 118 (4.5đ) = 1:2.25 → TP1 hơi thấp ⚠️
                → Điều chỉnh: TP1 = 116.5 (3đ) = 1:1.5 ✅
B10: Position → TK 100tr, risk 1% = 1tr, SL 2đ = 500 cổ ✅
B11: Tâm lý → OK, ngủ đủ, không FOMO ✅
B12: Plan → Viết đầy đủ ✅

12/12 → VÀO LỆNH ✅
```

---

## Nếu thiếu bước — Làm gì?

| Thiếu bước | Hành động |
|---|---|
| B1-B3 (không rõ trend/zone) | KHÔNG trade — chờ |
| B4-B8 (thiếu tín hiệu) | CHỜ thêm nến, volume |
| B9 (R:R kém) | Chờ pullback để có entry tốt hơn |
| B10 (position sai) | Tính lại |
| B11 (tâm lý không OK) | Nghỉ — không trade |
| B12 (chưa có plan) | Viết plan đã |

---

## Tóm tắt

1. **12 bước, 2-3 phút, làm trước mỗi lệnh**
2. **Đủ 12/12 mới vào**
3. **R:R tối thiểu 1:1.5**
4. **Tâm lý không OK → không trade**
5. **Không có plan viết sẵn → không trade**

> **BG nhắn:** Checklist này là chiếc phanh. Khi không dùng, bạn sẽ lao nhanh hơn — nhưng có thể là lao xuống vực. Mỗi lần thấy muốn bỏ qua 1 bước, hãy nhớ: cái lệnh bạn FOMO nhất thường là cái lệnh mất tiền nhất.

Bài sau: **Câu hỏi thường gặp — bao lâu có lời, drawdown, tips.**
