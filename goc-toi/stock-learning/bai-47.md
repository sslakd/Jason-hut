# Bài 47: Scaling In/Out — Vào/Thoát Từng Phần

*Không cần phải tất tay. Vào từ từ, ra từ từ là cách của người khôn.*

---

Jason à,

Không phải lúc nào cũng phải vào full position hay thoát full position. Scaling in/out cho phép Jason **quản lý rủi ro linh hoạt** và **tối ưu lợi nhuận**.

## Scaling In — Vào Từng Phần

Thay vì mua hết số cổ dự định trong 1 lần, Jason chia làm nhiều lần.

### Tại Sao Nên Scaling In?

**Lý do 1: Giá có thể điều chỉnh thêm**

Jason mua FPT. Giá hiện tại 130,000. Jason dự định mua 500 cổ.

Cách 1 (all-in): Mua 500 cổ ở 130,000 → nếu giá về 128,000, Jason đang lỗ 2,000/cp × 500 = 1tr.

Cách 2 (scale in): 
- Mua 200 cổ ở 130,000
- Mua thêm 200 cổ ở 128,500 (nếu giá về)
- Mua 100 cổ cuối ở 127,500
- Giá trung bình: (200×130k + 200×128.5k + 100×127.5k) / 500 = 128,900

→ Giá trung bình thấp hơn 1,100/cp so với mua 1 lần.

**Lý do 2: Giảm rủi ro khi chưa chắc xu hướng**

Vào 1 phần nhỏ trước. Nếu đúng hướng, vào thêm. Nếu sai, cắt lỗ phần nhỏ.

**Lý do 3: Tránh FOMO**

Thấy cổ phiếu tăng, không phải all-in ngay. Vào 30% trước, nếu breakout thật sự thì vào thêm.

### Cách Scaling In Thông Dụng

**Cách 1: 3 lần bằng nhau**

```
Đợt 1: 33% ở giá A (vào ban đầu)
Đợt 2: 33% ở giá A - 2% (nếu điều chỉnh về hỗ trợ)
Đợt 3: 34% ở giá A - 4% (nếu điều chỉnh sâu hơn)
```

Ví dụ: Mua HPG 28,000 (33%), 27,500 (33%), 27,000 (34%).
Giá TB: ~27,500.

**Cách 2: Kim tự tháp — vào nhiều hơn khi giá tăng**

```
Đợt 1: 20% ở giá A
Đợt 2: 30% ở giá A + 2%
Đợt 3: 50% ở giá A + 5%
```

Phù hợp khi **xu hướng đã xác nhận**. Nhưng rủi ro: giá trung bình cao hơn.

**Cách 3: Kim tự tháp ngược — vào nhiều hơn khi giá giảm**

```
Đợt 1: 50% ở giá A
Đợt 2: 30% ở giá A - 3%
Đợt 3: 20% ở giá A - 6%
```

Phù hợp khi **bắt đáy**. Rủi ro thấp hơn vì giá TB thấp hơn. Nhưng nếu xu hướng giảm tiếp → lỗ nhiều.

### Lưu Ý Khi Scale In

1. **Luôn có stop loss cho toàn bộ position** — không phải từng phần riêng
2. **Không scale in quá nhiều lần** — tối đa 3 lần
3. **Khoảng cách giữa các lần hợp lý** — 2-5% tuỳ cổ phiếu
4. **Tổng rủi ro không đổi** — dù scale in, tổng rủi ro vẫn 1-2% TK
5. **Không scale in khi đang thua** — đây là "averaging down" (rất nguy hiểm)

## Scaling Out — Thoát Từng Phần

Thay vì bán hết 1 lần, Jason chia làm nhiều lần.

### Tại Sao Nên Scaling Out?

**Lý do 1: Chốt lời 1 phần, để phần còn lại chạy**

Mua HPG 28,000. HPG lên 32,000.
- Bán 50% ở 32,000 → chắc chắn có lời
- 50% còn lại trailing stop → nếu lên tiếp, kiếm thêm; nếu giảm, đã có lời rồi

**Lý do 2: Giảm áp lực tâm lý**

Khi đã chốt 1 phần, Jason đỡ căng thẳng, dễ đưa quyết định đúng cho phần còn lại.

**Lý do 3: Không bỏ lỡ nếu giá tiếp tục chạy**

Bán hết ở 32,000, giá lên 38,000 → tiếc. Bán 50%, còn 50% lên 38,000 → vui hơn.

### Cách Scaling Out Thông Dụng

**Cách 1: Theo mốc giá — 3 vùng target**

```
Target 1 (T1): giá vào + RR đầu tiên → bán 33%
Target 2 (T2): giá vào + RR × 2 → bán 33%
Target 3 (T3): trailing stop → 34%
```

Ví dụ: Mua VPB 18,000, SL 17,200 (mất 800), RR = 2.
- T1 = 18,000 + 800×2 = 19,600 → bán 33%
- T2 = 18,000 + 800×4 = 21,200 → bán 33%
- T3: trailing 5%

**Cách 2: 50/50 — Chốt 1 nửa, để 1 nửa**

Đơn giản nhất. Khi chạm target đầu:
- Bán 50%
- 50% còn lại chuyển sang trailing

**Cách 3: Chốt dần theo khối lượng**

Bán khối lượng nhỏ dần:
- Giá đạt T1: bán 50%
- Giá đạt T2: bán 30%
- Giá đạt T3: bán 20% còn lại

## Ví Dụ Thực Chiến VN

### Case 1: FPT — Scale In

Jason thấy FPT có tín hiệu breakout từ vùng 125,000-130,000.

Kế hoạch:
- TK: 100tr
- Tổng vốn dự định: 20% TK = 20tr
- Giá vào dự kiến: 130,000

**Thực tế:**
- Ngày 1: FPT 130,000, KL tăng → vào 10tr (50 cổ) — 10% TK
- Ngày 2: FPT 129,500, sideway → chờ thêm
- Ngày 3: FPT 128,500, test MA20 → vào thêm 10tr (77 cổ) — 10% TK
- **Tổng: 127 cổ, giá TB 129,200, vốn 16.5tr**

Nếu FPT lên → lời trên giá TB thấp hơn. Nếu FPT xuống 125,000 (stop) → mất 4,200/cp × 127 = 533k = 0.53% TK — rất an toàn.

### Case 2: MWG — Scale Out

Jason mua MWG 55,000, 2,000 cổ.
Kế hoạch:
- T1: 58,000 (lời 3,000) → bán 1,000 cổ
- T2: 61,000 (lời 6,000) → bán 500 cổ
- T3: trailing 7% → 500 cổ

**Diễn biến:**
- MWG lên 58,000 → bán 1,000 cổ → lời 3,000,000đ
- MWG tiếp tục lên 60,500 → chưa tới T2
- MWG sideway ở 60,000-61,000 trong 3 ngày
- Jason quyết định: bán 500 cổ ở 60,500 → lời 2,750,000đ
- 500 cổ còn lại trailing 7% từ 60,500 → stop 56,265

**Kết quả cuối:** Jason đã chốt 2,750,000đ. Nếu 500 cổ cuối chạm stop hoặc lên tiếp, Jason đều vui. Tâm lý thoải mái.

### Case 3: HPG — Không Scale Out

Để so sánh: Jason không scale out HPG.
- Mua 28,000, 2,000 cổ
- HPG lên 32,000 → không bán (muốn để chạy tiếp)
- HPG lên 33,000 → vẫn không bán
- HPG có tin xấu, giảm 30,000 → không bán
- HPG về 29,000 → bán vì sợ
- Lời 1,000/cp × 2,000 = 2,000,000đ

So với scale out:
- Bán 1,000 ở 32,000 (lời 4,000,000)
- 1,000 trailing: chạm ở 30,500 (lời 2,500,000)
- **Tổng: 6,500,000đ** — gấp 3 lần.

## Khi Nào Nên/ Không Nên Scale

### Nên Scale In:
- Cổ phiếu có thanh khoản tốt (VN30)
- Thị trường đang tích luỹ, chưa rõ xu hướng
- Swing trade, position trade

### Không Nên Scale In:
- Day trade (không có thời gian)
- Cổ phiếu kém thanh khoản (không mua được nhiều lần)
- Tin tức quan trọng sắp ra

### Nên Scale Out:
- Swing trade, position trade
- Thị trường đang trong uptrend (để phần lời chạy tiếp)
- Cổ phiếu có biến động mạnh (không đoán được đỉnh)

### Không Nên Scale Out:
- Day trade (vào ra nhanh, ít cần chia)
- Cổ phiếu kém thanh khoản (không bán được từng phần dễ dàng)
- Tín hiệu đảo chiều rõ ràng (out hết ngay)

## Bài Tập Nhỏ

Jason mua SSI 25,000, 1,000 cổ. Kế hoạch scale out:
- T1: 26,000
- T2: 27,500
- T3: trailing 5%

1. Nếu SSI chạm T1, Jason bán bao nhiêu (theo 50/50)?
2. Nếu SSI lên 26,500 rồi giảm về 25,800, Jason làm gì?
3. Tính lời nếu T1 bán 500, SSI lên 28,000 rồi chạm trailing 5%.

Đáp án:
- (1) 500 cổ ở 26,000 → lời 500 × 1,000 = 500k
- (2) 500 cổ còn lại, trailing 5% từ đỉnh 26,500 → stop = 25,175. Giá 25,800 > stop → giữ.
- (3) 500 cổ đầu lời 500k. Đỉnh 28,000, trailing 5% = 26,600. Bán 500 cổ ở 26,600 → lời 1,600×500 = 800k. Tổng: 1.3tr.

---

**Bài 48:** Đa dạng hoá danh mục — bao nhiêu cổ phiếu là đủ trên thị trường VN.

— BG 🏠
