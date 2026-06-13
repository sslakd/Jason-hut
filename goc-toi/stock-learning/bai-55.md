# Bài 55: Ôn Tập Phase 4

*Dừng lại, nhìn lại, chuẩn bị cho chặng cuối.*

---

Jason à,

14 bài Phase 4 — từ quản lý vốn đến tâm lý, journal, backtest, paper trade, chọn sàn, thuế phí. Dài nhưng đây là phần **sống còn**.

Hôm nay BG tổng kết để Jason có 1 bức tranh tổng thể trước khi vào Phase 5 — thực chiến.

## Phase 4: Những Gì Đã Học

### Module 1: Quản Lý Vốn (Bài 41-48)

**Bài 41 — MM mở đầu:**
- 90% trader thua vì không quản lý vốn, không phải vì không biết phân tích
- 3 quy tắc vàng: 1-2% rủi ro/lệnh, 6% tổng, cut loss nhanh - để lời chạy

**Bài 42 — Kelly Criterion:**
- f = (bp - q)/b — công thức tính % vốn tối ưu
- Fractional Kelly (1/3 hoặc 1/4) an toàn hơn Kelly full
- Kelly âm = chiến lược không có edge

**Bài 43 — Position Sizing:**
- Số cổ = (Rủi ro cho phép) / (Rủi ro trên 1 cổ)
- Rủi ro 1% TK, stop loss 1,500/cp → TK 100tr → 666 cổ

**Bài 44 — Risk-Reward Ratio:**
- RR tối thiểu 1:1.5, lý tưởng 1:2 trở lên
- Với RR 1:2, chỉ cần thắng 33% là hoà vốn
- Luôn biết SL và TP trước khi vào lệnh

**Bài 45 — Stop Loss:**
- 5 loại: Fixed, Trailing, ATR-based, Support/Resistance, Time-based
- Không có stop = không trade
- Chạm stop là cắt — không dời stop ra xa hơn

**Bài 46 — Trailing Stop:**
- Để lợi nhuận chạy, tự động bảo vệ lời
- Khi có lời >5%: kéo stop về hoà vốn
- Sau đó trailing 5-8% hoặc 2-3 ATR
- Sàn VN không có trailing tự động → Jason tự điều chỉnh

**Bài 47 — Scaling In/Out:**
- Vào từng phần (3 lần max): giảm giá TB, giảm rủi ro
- Thoát theo target: 33%-33%-34% hoặc 50%-50%
- Scale out giúp giảm áp lực tâm lý

**Bài 48 — Đa dạng hoá:**
- TK < 100tr: 2-3 cổ, 2-3 ngành
- TK 200-500tr: 5-7 cổ, 3-4 ngành
- Không giả đa dạng (cùng ngành)
- Core-satellite: 60-70% lõi + 30-40% vệ tinh

### Module 2: Tâm Lý & Journal (Bài 49-50)

**Bài 49 — Tâm Lý:**
- 3 kẻ thù: FOMO, Greed, Fear
- Vòng lặp trader nghiệp dư: tự tin → FOMO → sợ → cắt non → cay → FOMO lại
- Chiêu trị: Quy tắc 24 giờ, thua 3 lệnh = dừng, rủi ro 0.5%

**Bài 50 — Journal:**
- Ghi: ngày, mã, hướng, giá, SL, TP, kết quả, cảm xúc, bài học
- Phân tích cuối tuần: win rate, profit factor, mô hình sai lầm
- Không journal = không biết mình sai ở đâu

### Module 3: Kiểm Tra (Bài 51-54)

**Bài 51 — Backtest:**
- Kiểm tra chiến lược trên dữ liệu quá khứ
- Chỉ số quan trọng: Win rate, Profit Factor, MDD
- Cạm bẫy: Hindsight bias, Overfitting, Survivorship bias

**Bài 52 — Paper Trading:**
- Trade với tiền ảo trước khi live
- Tối thiểu 2-4 tuần (có kinh nghiệm) hoặc 1-2 tháng (mới hoàn toàn)
- Paper như trade thật: cùng size, cùng kỷ luật

**Bài 53 — Chọn sàn:**
- SSI: chuyên nghiệp, công cụ mạnh, phí cao
- VNDirect: cân bằng, dễ dùng
- TCBS: phí rẻ nhất, đơn giản nhất
- Nên mở 2 sàn dự phòng

**Bài 54 — Thuế & Phí:**
- Phí môi giới: 0.05-0.2% mỗi chiều
- Thuế: 0.1% khi bán
- % cần tăng để hoà vốn: TCBS 0.2%, VND 0.3%, SSI 0.4%
- Cổ giá thấp + spread rộng + phí cao = chi phí giao dịch rất lớn

## Bảng Tổng Kết Nhanh

| Chủ đề | Nguyên tắc chính | Công thức / Con số |
|--------|-----------------|-------------------|
| Rủi ro/lệnh | 1-2% tài khoản | TK 100tr → 1-2tr mỗi lệnh |
| Tổng rủi ro | 6% tài khoản | Max 6 lệnh thua liên tiếp |
| Position size | Số cổ = rủi ro cho phép / rủi ro 1 cổ | (TK × %) / (Giá vào - SL) |
| RR tối thiểu | 1:1.5 | Lý tưởng 1:2+ |
| Stop loss | Luôn có trước khi vào | Fixed / ATR / Support |
| Trailing | Kéo stop theo lời | 5-8% hoặc 2-3 ATR |
| Đa dạng hoá | 3-7 cổ, 2-4 ngành | Core-Satellite |
| Journal | Ghi ngay sau khi đóng | Phân tích cuối tuần |
| Backtest | 50+ tín hiệu | PF > 1.5, MDD < 15% |
| Paper trade | 2-4 tuần tối thiểu | Cùng size, cùng kỷ luật |

## Câu Hỏi Ôn Tập

Hãy tự trả lời trước khi đọc tiếp:

**1.** TK 200 triệu. Mua VCB 90,000, stop 85,000 (rủi ro 5,000/cp). Rủi ro 1%. Tính số cổ.

**2.** Chiến lược có win rate 40%, RR 1:3. Tính Kelly và 1/3 Kelly.

**3.** Đang có 3 lệnh. Tổng rủi ro là 5% TK. Jason muốn mở lệnh thứ 4 với rủi ro 2%. Có nên không?

**4.** Paper trade 2 tuần. Tổng kết: thắng 8/10 lệnh. Jason muốn chuyển live ngay. Nên hay không? Vì sao?

**5.** Chọn sàn cho Jason: mới tập, muốn phí thấp, công cụ cơ bản.

**Đáp án:**
1. 200tr × 1% = 2tr. 2tr / 5,000 = 400 cổ
2. f = (3×0.4 - 0.6)/3 = 0.6/3 = 0.2 (20%). 1/3 Kelly = 6.67%
3. Không. Tổng rủi ro nếu thêm = 5% + 2% = 7% > 6%. Chỉ mở nếu Jason giảm 1-2 lệnh khác hoặc giảm rủi ro lệnh mới.
4. Chưa nên. 10 lệnh là quá ít. Cần ít nhất 20-30 lệnh paper + phân tích kỹ. Ngoài ra paper thường cho win rate ảo cao hơn thực tế.
5. VNDirect hoặc TCBS. VND nếu muốn có công cụ, TCBS nếu muốn rẻ. SSI chưa cần.

## Tự Đánh Giá Phase 4

Jason đánh giá mình:

| Kỹ năng | 1 - Chưa biết | 2 - Hiểu | 3 - Làm được | 4 - Thành thạo |
|---------|:---:|:---:|:---:|:---:|
| Tính position size | | | | |
| Đặt stop loss | | | | |
| Dùng trailing stop | | | | |
| Kiểm soát FOMO/Greed/Fear | | | | |
| Ghi journal | | | | |
| Biết phí & thuế | | | | |

Mục tiêu: tất cả trên 3 trước khi vào Phase 5.

## Chuẩn Bị Cho Phase 5: Thực Chiến

Phase 5 (Bài 56-60) sẽ là:
- Lên kế hoạch giao dịch tuần
- Scan cổ phiếu cuối tuần
- Kết hợp tất cả: từ scan đến vào lệnh
- Case study: trade mẫu VN
- Tổng kết 60 ngày

Phase này không lý thuyết — **toàn thực hành**. Jason cần sẵn sàng:
1. Tài khoản chứng khoán (thật hoặc demo)
2. Journal (Google Sheets hoặc sổ tay)
3. 1 chiến lược đã backtest (dù đơn giản)
4. 500k tiền thật để trade thật (nếu dám)

## Bài Tập Nhỏ

1. Làm bài tự đánh giá ở trên
2. Nếu có kỹ năng nào dưới 3, đọc lại bài tương ứng
3. Chuẩn bị checklist Phase 5: tài khoản, journal, chiến lược
4. **Quan trọng nhất: Ghi lại 3 bài học tâm đắc nhất từ Phase 4**

---

**Bài 56:** Lên kế hoạch giao dịch tuần — checklist từ chủ nhật.

— BG 🏠
