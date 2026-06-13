# Bài 45: Stop Loss — Các Loại Và Cách Đặt

*Biết đặt stop là biết sống. Không có stop = đánh bạc.*

---

Jason à,

Stop loss là công cụ quan trọng nhất trong quản lý vốn. Không có nó, Jason chỉ đang đánh bạc chứ không phải đầu tư.

Hôm nay BG chỉ các loại stop loss và cách đặt phù hợp với thị trường VN.

## Tại Sao Cần Stop Loss?

1. **Giới hạn tổn thất** — biết trước mất bao nhiêu
2. **Loại bỏ cảm xúc** — khỏi phải quyết định khi đang lỗ
3. **Bảo toàn vốn** — để còn trade tiếp
4. **Kỷ luật** — biết tôn trọng kế hoạch

## Các Loại Stop Loss

### 1. Fixed Stop Loss (Cố Định)

Đơn giản nhất. Đặt 1 mức giá cố định, chạm là cắt.

```
Mua MWG 56,000
Stop loss: 54,000 (mất 2,000/cp)
```

**Khi nào dùng:**
- Mới tập trade
- Thị trường bình thường, không biến động mạnh
- Cổ phiếu thanh khoản tốt

**Ưu điểm:** Rõ ràng, dễ tính position size.
**Nhược điểm:** Không linh hoạt, dễ bị "stop hunt" nếu đặt quá gần.

### 2. Trailing Stop Loss (Di Động)

Stop loss tự động điều chỉnh theo giá. Khi giá lên, stop cũng lên theo.

Ví dụ:
- Mua HPG 28,000, trailing stop 5%
- HPG lên 30,000 → stop tự động kéo lên 28,500
- HPG lên 32,000 → stop kéo lên 30,400
- HPG giảm về 30,400 → chạm stop, chốt lời 2,400/cp

**Khi nào dùng:**
- Đã có lợi nhuận, muốn để lợi nhuận chạy
- Xu hướng mạnh, không muốn chốt sớm

**Lưu ý:** Trailing stop trên sàn VN không tự động như US. Nhiều sàn VN không hỗ trợ trailing stop tự động — Jason phải tự điều chỉnh bằng tay. (Bài sau nói kỹ hơn.)

### 3. Volatility-Based Stop Loss (Dựa Trên Biến Động)

Stop loss dựa trên ATR (Average True Range) — đo độ biến động của cổ phiếu.

Cách tính:
```
Stop loss = Giá vào - n × ATR(14)
```
Trong đó n thường là 2 hoặc 3.

Ví dụ:
- Mua VPB 18,000
- ATR(14) của VPB = 600
- Stop = 18,000 - 2 × 600 = 16,800
- Mất 1,200/cp (6.7%)

**Khi nào dùng:**
- Cổ phiếu biến động mạnh, không thể đặt stop cố định quá gần
- Swing trade, giữ lệnh vài ngày
- Điều chỉnh được theo điều kiện thị trường

**Ưu điểm:** Thích ứng với biến động giá — không bị stop vì nhiễu ngẫu nhiên.
**Nhược điểm:** Phức tạp hơn, cần tính toán.

### 4. Support/Resistance Stop Loss (Dựa Trên Kỹ Thuật)

Đặt stop dưới vùng hỗ trợ hoặc trên vùng kháng cự (với lệnh short).

Ví dụ:
- FPT có support 128,000, Jason vào ở 130,000
- Stop dưới support một chút: 127,500
- Mất 2,500/cp (1.9%)

**Khi nào dùng:**
- Giao dịch dựa trên phân tích kỹ thuật (hỗ trợ/kháng cự, trendline, MA)
- Swing trade, position trade
- Mọi cấp độ trader

**Lưu ý:** Đặt stop dưới support 1-2%. Không đặt **ngay tại** support — dễ bị stop hunt.

### 5. Time-Based Stop Loss (Dựa Trên Thời Gian)

Không phải giá bao nhiêu, mà là sau bao lâu.

Ví dụ:
- Mua cổ phiếu đầu phiên
- Nếu đến 11h không có tín hiệu gì (giá đi ngang, khối lượng thấp) → thoát
- Hoặc: Nếu sau 3 ngày chưa chạm target → thoát

**Khi nào dùng:**
- Day trade — nếu không chạy được trong ngày thì cắt
- Tin tức — nếu tin không có tác động như kỳ vọng

## Cách Đặt Stop Loss Trên Thị Trường VN

### Đặc Thù Sàn VN

1. **Biên độ giá:** HOSE ±7%, HNX ±10%, UPCOM ±15%
2. **Giá trị lô:** Tối thiểu 100 cổ
3. **Không có stop loss tự động nhiều sàn** — Jason phải canh và đặt lệnh thủ công

### Các Mức Stop Loss Thông Dụng

**Theo % giá:**
- Cổ bluechip (VNM, FPT, MWG): 3-5%
- Cổ midcap: 5-8%
- Cổ penny: 8-15%
- Day trade: 1-2%
- Swing trade: 3-7%

**Theo ATR:**
- Stop = Giá vào - 2 × ATR(14): tiêu chuẩn
- Stop = Giá vào - 3 × ATR(14): rộng hơn, cho trade swing

**Theo hỗ trợ:**
- Luôn đặt stop **dưới** hỗ trợ 0.5-1% để tránh stop hunt

### Ví Dụ Cụ Thể

**Tình huống 1:** Jason day trade SSI
- Mua 25,000 vào đầu phiên
- Kháng cự gần nhất 25,500, hỗ trợ 24,800
- ATR(14) của SSI = 350
- Stop cố định: 24,700 (1.2%)
- Stop ATR: 25,000 - 2×350 = 24,300 (2.8%) — hơi xa cho day trade
- Chọn stop 24,700: mất 300/cp, RR = 500/300 = 1.67

**Tình huống 2:** Jason swing HPG
- Mua 28,000, dựa trên breakout trendline
- Hỗ trợ trendline: 27,200
- Stop: 27,000 (3.6%)
- ATR(14) HPG = 550
- Stop ATR: 28,000 - 2×550 = 26,900 — gần trùng với stop kỹ thuật
- Đặt 27,000: mất 1,000/cp

## Sai Lầm Thường Gặp Khi Đặt Stop Loss

### Sai lầm 1: Stop quá gần

Jason mua SSI 25,000, đặt stop 24,800 (0.8%).
Giá dao động bình thường 1-2% trong ngày.
→ Bị stop vì nhiễu, giá sau đó lên 26,000.

**Khắc phục:** Cho stop "thoáng" hơn. Dùng ATR hoặc support/resistance để có stop hợp lý.

### Sai lầm 2: Stop quá xa

Jason mua penny giá 10,000, đặt stop 8,000 (20%).
→ Rủi ro 20%, nếu chạm mất 20% tài khoản nếu all-in.

**Khắc phục:** Nếu stop xa, giảm position size. Mỗi lệnh vẫn chỉ rủi ro 1-2% tài khoản.

### Sai lầm 3: Dời stop ra xa hơn khi giá giảm

Jason mua FPT 130,000, stop 127,000.
FPT giảm 127,500. Jason nghĩ "nó chỉ đang test support" → dời stop xuống 125,000.
FPT giảm tiếp 124,000. Jason mất 6,000/cp thay vì 3,000.

**Khắc phục:** Đặt stop và tôn trọng nó. Chỉ dời stop khi có lý do kỹ thuật rõ ràng, không phải vì sợ.

### Sai lầm 4: Không đặt stop

Jason nghĩ "cổ này ngon, không cần stop, nó sẽ hồi".
→ Nó không hồi. Nó giảm 20%. Jason cầm 6 tháng, chốt lỗ muộn.

**Khắc phục:** **Luôn có stop trước khi vào lệnh.** Không stop = không trade.

## Quy Tắc Vàng Của BG

1. **Luôn có stop loss trước khi vào lệnh** — không có thì không vào
2. **Stop dựa trên kỹ thuật + rủi ro tài khoản**, không dựa trên cảm xúc
3. **Tôn trọng stop** — chạm là cắt, không hy vọng
4. **Có thể dời stop VÔ HƯỚNG (vào vùng lời)** nhưng không BAO GIỜ dời ra xa hơn
5. **Điều chỉnh stop theo biến động thị trường** — VNI biến động mạnh thì stop rộng hơn

## Bài Tập Nhỏ

Jason muốn mua MSN giá 80,000. Dữ liệu:
- ATR(14) của MSN: 1,200
- Hỗ trợ gần nhất: 77,500
- Kháng cự: 83,000

1. Stop cố định theo support: bao nhiêu?
2. Stop ATR (2×): bao nhiêu?
3. Với TK 200tr, rủi ro 1%, mỗi cách cho bao nhiêu cổ?

Đáp án:
- (1) Dưới support 1%: 77,500 - 1% = 76,725 → mất 3,275/cp
- (2) 80,000 - 2×1,200 = 77,600 → mất 2,400/cp
- (3) Cách 1: 200tr×1% / 3,275 = 610 cổ. Cách 2: 200tr×1% / 2,400 = 833 cổ.

Chọn stop nào? Nếu là swing, BG chọn cách 1 (dựa trên hỗ trợ). Nếu day trade, có thể chặt hơn.

---

**Bài 46:** Trailing stop — để lợi nhuận chạy.

— BG 🏠
