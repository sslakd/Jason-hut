# Bài 42: Kelly Criterion — Công Thức Đơn Giản

Bài trước nói về 1% rủi ro mỗi lệnh. Kelly Criterion cho công thức chính xác hơn — nên vào bao nhiêu % dựa trên xác suất thắng và tỷ lệ lời/lỗ.

---

## Công thức

f = (bp - q) / b

f = % tài khoản nên đặt. b = tỷ lệ lời/lỗ (RR). p = xác suất thắng. q = 1 - p.

Ví dụ: RR = 1:2 (b = 2), win rate 50% (p = 0.5). f = (2 × 0.5 - 0.5) / 2 = 0.5 / 2 = 0.25 → vào 25% tài khoản.

Chiến lược thực tế hơn: 60% thắng, RR trung bình 1:1.5. f = (1.5 × 0.6 - 0.4) / 1.5 = 0.5 / 1.5 = 33.3%.

---

## Vấn đề với Kelly full

Kelly full dùng đúng kết quả f rất nguy hiểm. Xác suất không bao giờ chính xác 100%. Variance cao.

Ví dụ f = 33%: thua 1 lệnh, còn 67 triệu. Thua tiếp, còn 44.9 triệu. Sau 2 lệnh thua còn 45% tài khoản. Về lý thuyết vẫn sống, về tâm lý thì khủng hoảng.

---

## Fractional Kelly — an toàn hơn

Thay vì dùng f, dùng fractional:

- 1/4 Kelly: f × 0.25 — an toàn nhất
- 1/3 Kelly: f × 0.33 — phổ biến
- 1/2 Kelly: f × 0.5 — cân bằng

Với f = 33%: 1/3 Kelly = 11%, 1/4 Kelly = 8.25%.

Khuyến nghị: mới bắt đầu dùng 1/4 hoặc giữ 1% rủi ro. Có thống kê > 100 lệnh → 1/3 Kelly.

---

## Áp dụng thực tế VN

VPB: vào 18.000, stop 17.000 (rủi ro 1.000), TP 20.000 (lời 2.000). RR = 2. Win rate chiến lược 55%. f = (2 × 0.55 - 0.45) / 2 = 32.5%. 1/3 Kelly = 10.8%.

TK 100 triệu: vào 10.8% = 10.8 triệu. Giá 18.000 → 600 cổ. Rủi ro: 600 × 1.000 = 600.000 (0.6% TK). Rất an toàn.

---

## Bảng tham khảo nhanh

| Win Rate | RR 1:1 | RR 1:2 | RR 1:3 | 1/3 Kelly khuyến nghị |
|----------|--------|--------|--------|----------------------|
| 40% | Âm | 5% | 10% | 2% / 3% |
| 45% | Âm | 8% | 12% | 3% / 4% |
| 50% | 0% | 12.5% | 17% | 4% / 6% |
| 55% | 5% | 16% | 21% | 5% / 7% |
| 60% | 10% | 20% | 27% | 7% / 9% |

Nếu Kelly âm → chiến lược không có edge. Đừng trade.

---

Kelly chỉ đúng nếu biết chính xác p và b — chỉ từ thống kê thực tế. Dùng cho hệ thống, không cho lệnh đơn lẻ. Kelly là toán học, không phải tâm lý — có thể biết đúng nhưng không theo được.

Bài 42: Kelly Criterion Đơn Giản Hoá
