# Bài 46: Trailing Stop — Để Lợi Nhuận Chạy

*Bài học hay nhất từ các trader kỳ cựu: đừng chốt lời quá sớm.*

---

Jason à,

Trailing stop là kỹ thuật giúp Jason **giữ lợi nhuận chạy** mà vẫn bảo vệ được phần lời đã có.

Đây là cách các trader chuyên nghiệp biến những trade thắng nhỏ thành những trade thắng lớn.

## Trailing Stop Là Gì?

Trailing stop là stop loss **di động** — nó tự động điều chỉnh khi giá chạy theo hướng có lợi.

Khi giá lên, stop cũng lên theo. Khi giá giảm, stop vẫn giữ nguyên (không bao giờ đi xuống).

### Ví dụ đơn giản

Jason mua HPG 28,000. Đặt trailing stop 5%.

- HPG lên 30,000 → stop ở 28,500 (30,000 - 5%)
- HPG lên 32,000 → stop ở 30,400
- HPG lên 35,000 → stop ở 33,250
- HPG giảm về 33,250 → chạm stop, chốt lời 5,250/cp (18.75%)
- Nếu không trailing, Jason có thể đã chốt ở 30,000 → chỉ lời 2,000 (7.1%)

**Kết quả:** Trailing giúp Jason kiếm gấp 2.6 lần so với chốt sớm.

## Các Loại Trailing Stop

### 1. Percentage Trailing (Theo %)

Stop = Giá hiện tại × (1 - % trailing)

```
HPG: trailing 5%
Giá 30,000 → stop 28,500
Giá 35,000 → stop 33,250
```

**Thích hợp cho:** Swing trade, cổ phiếu biến động vừa phải.

**Tỷ lệ trailing tham khảo:**
- Bluechip VN30: 5-8% (VNM, FPT, HPG, VCB)
- Midcap: 8-12%
- Penny: 12-20%

### 2. Fixed Amount Trailing (Theo Số Tiền)

Stop = Giá hiện tại - Số tiền cố định

```
FPT: trailing 5,000đ
Giá 130,000 → stop 125,000
Giá 140,000 → stop 135,000
Giá 150,000 → stop 145,000
```

**Thích hợp cho:** Cổ phiếu giá cao, biến động ít (MSN, VNM, VCB).

### 3. ATR-Based Trailing (Theo Biến Động)

Stop = Giá hiện tại - n × ATR(14)

```
VPB: ATR(14) = 600, n = 3
Giá 18,000 → stop 16,200
Giá 20,000 → stop 18,200
Giá 22,000 → stop 20,200
```

**Thích hợp cho:** Mọi loại cổ phiếu — tự động điều chỉnh theo biến động.

**Lưu ý:** Khi thị trường biến động mạnh, ATR tăng → stop xa hơn (tốt). Khi thị trường yên, ATR giảm → stop gần hơn (cũng tốt).

### 4. Parabolic SAR Trailing (Theo Chỉ Báo Kỹ Thuật)

Parabolic SAR là chỉ báo tự động tạo ra mức stop di động. Nó đặt stop dưới giá trong uptrend và trên giá trong downtrend.

**Thích hợp cho:** Xu hướng rõ ràng. Không thích hợp cho sideway (bị đánh lừa liên tục).

## Cách Áp Dụng Từng Loại

### Cách 1: Chốt 1 phần + Trailing phần còn lại

Đây là cách BG khuyên nhất:

Ví dụ: Mua 1,000 cổ FPT.
- FPT lên 135,000 → chốt 300 cổ (lời 5,000/cp)
- 700 cổ còn lại trailing stop 5% từ giá hiện tại
- FPT lên 145,000 → stop trailing ở 137,750
- Khi chạm, chốt thêm 700 cổ

**Kết quả:** 300 cổ lời 5k = 1.5tr. 700 cổ lời ~7,750/cp = 5.4tr. **Tổng: ~7tr.**

### Cách 2: Active trailing — tự điều chỉnh bằng tay

Trên nhiều sàn VN (SSI, VNDirect, TCBS) **không có trailing stop tự động**. Jason phải tự canh và điều chỉnh.

Quy trình:
1. Mỗi ngày kiểm tra 1 lần
2. Nếu giá lên, kéo stop theo
3. Không bao giờ kéo stop xuống

Ví dụ thực tế:

```
Ngày 1: Mua VHM 45,000, stop 43,000
Ngày 2: VHM 46,500 → kéo stop lên 44,500
Ngày 3: VHM 48,000 → kéo stop lên 46,000
Ngày 5: VHM 50,000 → kéo stop lên 48,000
Ngày 7: VHM 47,500 → không kéo stop (giá giảm)
Ngày 8: VHM chạm 48,000 → chốt. Lời 3,000/cp.
```

### Cách 3: Price action trailing — dùng support di động

Mỗi khi giá tạo đáy mới cao hơn, kéo stop lên ngay dưới đáy đó.

```
Đáy 1: 28,000 → stop 27,800
Đáy 2: 29,500 → stop 29,300
Đáy 3: 31,000 → stop 30,800
```

Phù hợp với trader phân tích kỹ thuật, biết đọc price action.

## Ví Dụ Thực Chiến VN

### Case: HPG tháng 5-6/2026

Jason mua HPG 27,000 ngày 15/05, dựa trên breakout khỏi vùng tích luỹ.

**Tuần 1:** HPG lên 28,500. Jason đặt stop cố định ở 26,500 (hơn giá vào 500đ).
**Tuần 2:** HPG 30,000. Jason kéo stop lên 28,500 (ngang giá vào — hoà vốn nếu chạm).
**Tuần 3:** HPG 32,500. Jason trailing 5%: stop = 32,500 × 0.95 = 30,875.
**Tuần 4:** HPG 35,000. Jason trailing: stop = 33,250.
**Tuần 5:** HPG về 33,500 — chưa chạm stop.
**Tuần 6:** HPG 33,000 — chạm stop 33,250 → chốt.

**Kết quả:** Mua 27,000, bán 33,250, lời 6,250/cp (23%).
- Không trailing: Jason có thể chốt ở 30,000 → lời 3,000 (11%)
- Trailing: lời gấp đôi.

### Case: SSI tin tức breakout

Jason trade SSI dựa trên tin sáp nhập.

- Mua 24,000
- Stop ban đầu: 23,000 (4.2%)
- SSI lên 25,500 trong 2 ngày
- Kéo stop lên 24,500 (vùng hoà vốn + lời nhẹ)
- SSI lên 27,000 → trailing 8%: stop = 24,840
- SSI về 25,000 → chạm stop 24,840 → lời 840/cp (3.5%)

**Bài học:** Dù SSI không chạy xa như kỳ vọng, trailing vẫn giúp Jason có lời nhẹ thay vì lỗ.

## Sai Lầm Với Trailing Stop

### Sai lầm 1: Trailing quá gần (1-2%)

Giá dao động bình thường 1-2% mỗi ngày → bị stop vì nhiễu.

**Khắc phục:** Dùng ATR hoặc trailing 5-8% cho swing trade.

### Sai lầm 2: Không trailing khi giá lên mạnh

Jason thấy HPG lên 35,000, vẫn giữ stop ở 28,500 (ban đầu).
HPG giảm về 29,000 → mất 6,000/cp lợi nhuận.

**Khắc phục:** Luôn điều chỉnh stop theo giá. Việc này mất 30 giây mỗi ngày.

### Sai lầm 3: Dời stop ra xa hơn vì sợ mất lệnh

Jason trailing HPG lên 33,000, stop 31,350.
HPG giảm 31,000 → chưa chạm stop. Jason sợ bị stop "vào lúc sáng tạo" → dời stop xuống 30,000.
HPG giảm tiếp 29,500 → mất thêm 1,500/cp.

**Khắc phục:** Trailing = tôn trọng mức stop đã đặt. Chỉ dời lên, không dời xuống.

## Quy Tắc Vàng

1. **Stop ban đầu: dựa trên kỹ thuật + rủi ro.** Sau đó mới trailing.
2. **Khi có lời 5-10%: kéo stop về hoà vốn** — không bao giờ để trade thắng thành thua
3. **Sau đó: trailing 5-8% hoặc 2-3 ATR**
4. **Kiểm tra và điều chỉnh stop MỖI NGÀY** — đặt nhắc lịch 5 phút cuối phiên
5. **Không trailing quá gần** — cho cổ phiếu "thở"

## Bài Tập Nhỏ

Jason mua VNM 80,000. ATR(14) VNM = 1,200.

1. Stop ban đầu dùng ATR×2: bao nhiêu?
2. VNM lên 85,000. Kéo stop về hoà vốn (80,000). Đúng hay sai?
3. VNM lên 90,000. Trailing 6%. Stop mới?
4. VNM lên 95,000. Trailing tiếp. Stop mới?

Đáp án:
- (1) 80,000 - 2×1,200 = 77,600
- (2) Đúng — luôn kéo về hoà vốn khi có lời >5%
- (3) 90,000 × 0.94 = 84,600
- (4) 95,000 × 0.94 = 89,300

---

**Bài 47:** Scaling in/out — vào và thoát từng phần để quản lý rủi ro tốt hơn.

— BG 🏠
