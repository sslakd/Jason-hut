# Bài 37: Take Profit Cho Pivot Trade

Thoát lệnh khi sai (stop loss) đã biết. Giờ học thoát lệnh khi đúng (take profit).

Nhiều trader biết vào lệnh, biết đặt stop, nhưng không biết chốt lời — hoặc chốt quá sớm, hoặc để lợi nhuận chạy rồi quay đầu.

Với pivot trade, mục tiêu lợi nhuận rất rõ ràng: các mức pivot tiếp theo.

---

## Mục tiêu lợi nhuận tự nhiên

Vào lệnh tại pivot này, mục tiêu là pivot tiếp theo.

Long: vào S3 → TP S2, S1, PP. Vào S2 → TP S1, PP, R1. Vào S1 → TP PP, R1, R2. Vào PP → TP R1, R2, R3.

Short: vào R3 → TP R2, R1, PP. Vào R2 → TP R1, PP, S1. Vào R1 → TP PP, S1, S2. Vào PP → TP S1, S2, S3.

Luôn có ít nhất 2 mức TP: TP1 an toàn (gần), TP2 tham vọng (xa).

---

## Phương pháp chốt lời

**Chốt 100% tại TP1:** vào S1, TP tại PP. An toàn, ít rủi ro quay đầu. Nhưng bỏ lỡ nếu giá đi xa hơn. Phù hợp khi spread rộng hoặc thị trường do dự.

**Chốt một phần (scaling out):** 50% tại TP1, 50% tại TP2. Cân bằng giữa an toàn và tham vọng. Cách phổ biến nhất.

**Trailing stop:** không chốt TP cố định — kéo stop theo giá. Để lợi nhuận chạy tối đa trong xu hướng mạnh. Rủi ro: lợi nhuận có thể bị thu hẹp khi giá quay đầu.

---

## Tính RR (Risk-Reward) cho pivot trade

RR = (TP - Entry) / (Entry - Stop). Với short: RR = (Entry - TP) / (Stop - Entry).

Mỗi pivot trade nên có RR tối thiểu 1:2. Có nghĩa là lời gấp đôi rủi ro.

Ví dụ: long S1 = 128.000, stop 126.500 (rủi ro 1.500đ). TP1 = PP = 130.000 (lời 2.000đ). RR = 2.000 / 1.500 = 1:1.33.

RR này thấp. Cần thêm TP2 = R1 = 132.000 (lời 4.000đ). Nếu scaling out 50-50: RR trung bình = (0.5 × 2.000 + 0.5 × 4.000) / 1.500 = 1:2. RR chấp nhận được.

---

## Yếu tố ảnh hưởng đến TP

Volume: nếu volume yếu khi đến TP1 → chốt sớm. Volume mạnh → có thể giữ đến TP2.

Momentum: nếu MACD histogram còn mở rộng, RSI < 70 → giá còn dư địa. Nếu histogram thu hẹp, RSI > 70 → chốt sớm.

Thời gian: còn nhiều thời gian trong phiên → có thể chờ TP xa. Gần cuối phiên → chốt sớm.

---

## Ví dụ hoàn chỉnh

**HPG — long từ S1:**
Entry: S1 = 27.300. Stop: 26.800 (dưới S1 1.8%). TP1: PP = 28.000 (lời 700đ, RR = 700/500 = 1:1.4). TP2: R1 = 28.700 (lời 1.400đ, RR = 1.400/500 = 1:2.8).

Giá chạm S1 → nến hammer + volume 1.5x TB. Long 2.000 cổ. Giá lên PP sau 2 phiên → chốt 1.000 cổ (TP1). Giá tiếp lên R1 → chốt 1.000 cổ còn lại (TP2).

---

## Sai lầm thường gặp

Chốt lời quá sớm vì sợ: không có TP cố định, thấy lời 1% là chốt. Cần kỷ luật.

Không chốt lời vì tham: giá lên R1 xong quay đầu về PP, mất hết lợi nhuận. Luôn có TP.

Chốt lời rồi nhảy vào lại: ra ở R1, thấy giá lên tiếp → mua đuổi ở R2 → dính đỉnh. Đã chốt là xong.

---

Luôn xác định TP trước khi vào lệnh. PP, R1, R2, S1, S2 là các mục tiêu tự nhiên. Dùng scaling out để cân bằng an toàn và lợi nhuận. RR tối thiểu 1:2.

Bài 37: Take Profit Cho Pivot Trade
