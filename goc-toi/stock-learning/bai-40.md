# Bài 40: Ôn Tập Phase 3 — Kiểm Tra Tổng Hợp

## 📌 Mở đầu

Chào Jason, kết thúc Phase 3 rồi!

Đây là phase quan trọng nhất — từ "biết đọc chart" sang "biết vào lệnh có hệ thống". Pivot Point là công cụ để cậu **có kế hoạch cụ thể trước khi trade** — không cảm tính, không FOMO.

Bài này là ôn tập + kiểm tra. Làm nghiêm túc nha — nếu qua được bài này, cậu đã sẵn sàng cho Phase 4 (quản lý vốn và thực chiến).

---

## 🧠 Phần 1: Trắc Nghiệm Nhanh

**1. Pivot Point được tính từ đâu?**
- A. Từ khối lượng giao dịch
- B. Từ (Cao + Thấp + Đóng)/3
- C. Từ SMA 50 và SMA 200
- D. Từ RSI 14

**2. Khi giá đang trên PP, điều đó có nghĩa gì?**
- A. Chắc chắn giá sẽ lên
- B. Xu hướng trong ngày nghiêng về mua
- C. Nên short ngay
- D. Không có ý nghĩa gì

**3. Mức pivot nào có khả năng chạm cao nhất?**
- A. R3
- B. R2
- C. R1
- D. S3

**4. Dấu hiệu nào cho thấy breakout thật?**
- A. Volume < 0.8x TB
- B. Nến có bấc dài, thân nhỏ
- C. Volume > 1.5x TB
- D. RSI < 50

**5. Nếu RSI > 70 tại R1, cậu nên làm gì?**
- A. Mua ngay vì quá mua là mạnh
- B. Canh short vì quá mua + kháng cự
- C. Không làm gì cả
- D. Thêm lệnh mua gấp đôi

**6. Trong uptrend, ưu tiên trade gì?**
- A. Short tại R1
- B. Long tại S1
- C. Short tại PP
- D. Không trade

**7. MACD histogram đang thu hẹp ở gần R1 báo hiệu?**
- A. Momentum mạnh, sắp breakout
- B. Momentum yếu, có thể quay đầu
- C. Nên mua thêm
- D. Không có ý nghĩa

**8. Fakeout là gì?**
- A. Breakout mạnh
- B. Giá tạm thời vượt pivot rồi quay đầu
- C. Volume tăng đột biến
- D. RSI quá mua

---

## ✅ Đáp Án

1. **B** — PP = (Cao + Thấp + Đóng) / 3. Công thức cổ điển.
2. **B** — Nghiêng về mua. Không phải "chắc chắn lên" — chưa có gì chắc chắn trong trading.
3. **C** — R1 và S1 có khả năng chạm cao nhất. R3/S3 hiếm chạm.
4. **C** — Volume > 1.5x TB là dấu hiệu mạnh nhất.
5. **B** — RSI > 70 (quá mua) + R1 (kháng cự) = cơ hội short.
6. **B** — Uptrend ưu tiên long. Long tại S1 (hồi về hỗ trợ) là an toàn nhất.
7. **B** — Histogram thu hẹp = momentum yếu dần. Có thể quay đầu.
8. **B** — Giá vượt pivot tạm thời rồi quay đầu. Big money quét stop.

---

## 📝 Phần 2: Tính Toán

**Câu 9:**
Hôm qua VNM: High = 80,000, Low = 78,000, Close = 79,000.

1. Tính PP, R1, R2, S1, S2
2. RSI hôm qua = 68, RSI hôm nay = 72
3. Volume hôm qua = 1.2 triệu, TB 20 phiên = 1 triệu

Phân tích:
- Nếu hôm nay giá chạm R1 — cậu sẽ làm gì?
- Nếu hôm nay giá chạm S1 — cậu sẽ làm gì?

**Đáp án tham khảo:**

Tính:
```
PP = (80,000 + 78,000 + 79,000) / 3 = 79,000
R1 = (2 × 79,000) - 78,000 = 80,000
R2 = 79,000 + (80,000 - 78,000) = 81,000
S1 = (2 × 79,000) - 80,000 = 78,000
S2 = 79,000 - (80,000 - 78,000) = 77,000
```

Phân tích tại R1 = 80,000:
- RSI = 72 (> 70) → quá mua tại kháng cự
- Volume 1.2x TB → nhưng không quá mạnh
- → Có thể short. Stop 80,500. TP 79,000 (PP) hoặc 78,000 (S1)

Phân tích tại S1 = 78,000:
- RSI = 72 → chưa oversold (cần < 30)
- Giá từ trên xuống S1 → S1 là hỗ trợ nhưng không có oversold
- → Chờ. Không vội long.

---

**Câu 10:**
MWG có weekly PP = 56,000 và daily PP = 56,500.
Giá hiện tại = 56,200.

Trả lời:
1. Giá đang trên hay dưới weekly PP?
2. Giá đang trên hay dưới daily PP?
3. Tình huống này có gì đặc biệt?

**Đáp án:**
1. Giá 56,200 > weekly PP 56,000 → weekly nghiêng tăng
2. Giá 56,200 < daily PP 56,500 → daily PP là kháng cự từ dưới lên
3. Đặc biệt: Mâu thuẫn ngắn hạn/dài hạn. Weekly cho thấy xu hướng tuần tăng, nhưng daily đang dưới PP. Có thể daily đang hồi phục trong weekly trend.

→ Chiến thuật: Nếu giá vượt daily PP (56,500) → long mạnh (xác nhận weekly). Ưu tiên long hơn short.

---

## 🎯 Phần 3: Case Study Tổng Hợp

**Case: HPG**

Thông tin:
```
PP = 28,000
R1 = 29,200, R2 = 30,500
S1 = 26,800, S2 = 25,200

ATR = 800
Volume TB 20 = 5 triệu

RSI = 75
MACD histogram: đang thu hẹp

SMA50 = 27,000
SMA200 = 24,000

Trend: SMA50 > SMA200 → uptrend
```

**Câu hỏi:**
1. Giá đang ở mức nào? Trên/dưới PP?
2. RSI 75 có ý nghĩa gì?
3. MACD histogram thu hẹp có ý nghĩa gì?
4. Với uptrend hiện tại, cậu ưu tiên trade hướng nào?
5. Cụ thể: vào lệnh ở đâu, stop loss, take profit?

**Đáp án tham khảo:**

1. RSI 75 > 70 — quá mua. Giá đang trên PP (dựa vào RSI và MACD) > PP 28,000.
2. RSI 75 = quá mua — giá đang mạnh nhưng coi chừng điều chỉnh.
3. MACD histogram thu hẹp = momentum đang yếu dần — có thể chuẩn bị quay đầu hoặc đi ngang.
4. Uptrend (SMA50 > SMA200) → ưu tiên LONG. Nhưng RSI 75 + MACD thu hẹp → cẩn thận mua tại đây.

**Kế hoạch cụ thể:**

```
Chiến thuật 1: LONG TẠI PP (nếu giá hồi về)
- Entry: 28,000 (PP) hoặc 28,200
- SL: 27,200 (dưới PP 800 = 1 ATR)
- TP1: 29,200 (R1) — 50%
- TP2: 30,500 (R2) — 50%
- RR: 800 SL so với trung bình 1,700 TP → 1:2.1

Chiến thuật 2: SHORT TẠI R1 (nếu có fakeout)
- Chỉ short nếu giá chạm R1 29,200 và có dấu hiệu fakeout
- Entry: 29,000
- SL: 29,700
- TP: 28,000 (PP)
- RR: 700 so với 1,000 → 1:1.4

Chiến thuật chính: Chờ giá hồi về PP hoặc S1 để long.
Không đuổi mua tại R1.
```

---

## 💡 Tổng Kết Phase 3

**Những gì cậu đã học (bài 26-40):**

| Bài | Nội dung | Thành thạo? |
|-----|----------|-------------|
| 26 | Pivot Point là gì | ✅ Nên rồi |
| 27 | Công thức tính | ✅ |
| 28 | Support/Resistance từ pivot | ✅ |
| 29 | Pivot + Volume | ✅ |
| 30 | Pivot + RSI | ✅ |
| 31 | Pivot + MACD | ✅ |
| 32 | Pivot + Fibonacci | ✅ |
| 33 | Pivot intraday | ✅ |
| 34 | Pivot weekly/monthly | ✅ |
| 35 | Entry chi tiết | ✅ |
| 36 | Stop loss | ✅ |
| 37 | Take profit | ✅ |
| 38 | Fakeout | ✅ |
| 39 | Pivot + Trend | ✅ |

**Năng lực sau Phase 3:**
- ✅ Xác định các mức pivot (daily, weekly)
- ✅ Kết hợp pivot với volume, RSI, MACD để lọc tín hiệu
- ✅ Biết cách vào lệnh, đặt stop loss, take profit
- ✅ Nhận biết fakeout
- ✅ Trade pivot theo xu hướng

---

## 📌 Chuẩn Bị Phase 4

Phase 4 sắp tới là về **quản lý vốn và tâm lý** — thứ quyết định sống còn trong trading.

**Trước khi sang Phase 4, hãy tự trả lời:**
- Cậu đã hiểu pivot — nhưng có thực sự **tin tưởng hệ thống** này?
- Cậu đã biết stop loss — nhưng liệu có **dám cắt lỗ** đúng khi lệnh đi sai?
- Cậu đã biết kết hợp nhiều chỉ báo — nhưng có **kiên nhẫn chờ tín hiệu** không?

Phase 4 sẽ trả lời những câu hỏi này.

---

**Bài tập nhỏ (bài kiểm tra cuối cùng):**
Viết 1 kế hoạch giao dịch HOÀN CHỈNH cho một cổ phiếu bất kỳ (ngày mai hoặc hôm nay):

1. Tính pivot (PP, R1, R2, S1, S2)
2. Xác định trend (uptrend/downtrend/sideways)
3. Xác định tín hiệu hiện tại (RSI, volume, MACD)
4. Entry? SL? TP? RR?
5. Nếu bị fakeout — kế hoạch B là gì?

Viết ra giấy hoặc note. Gửi BG review nếu muốn.

Chúc mừng cậu đã hoàn thành Phase 3! 🎉

— BG 🏠
