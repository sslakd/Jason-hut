# Bài 33: Pivot Intraday — R1-R3, S1-S3 Chi Tiết

Các bài trước dùng pivot Daily. Giờ xuống cấp độ intraday — trade trong ngày, canh từng mức R1, R2, R3 và S1, S2, S3.

---

## Pivot intraday khác gì pivot daily?

Pivot daily: tính từ High/Low/Close hôm qua, dùng cho cả phiên hôm nay.

Pivot intraday: có thể tính từ High/Low/Close phiên trước đó (khung 30m, 1h), dùng cho phiên hiện tại. Cũng có thể dùng daily pivot để trade intraday — đây là cách phổ biến nhất.

Khung thời gian nhỏ hơn → biến động nhiễu nhiều hơn. Cần kỷ luật chặt hơn.

---

## Vai trò cụ thể của từng mức

**PP (Pivot Point) — 10h sáng:**
Sau 30 phút khớp lệnh ATO và 30 phút đầu phiên, PP thường là vùng giá dao động chính. Nếu giá trên PP → ưu tiên long. Dưới PP → ưu tiên short.

**R1 — Kháng cự đầu tiên:**
Mức quan trọng nhất. Giá chạm R1 thường chững 15-30 phút. Volume tại R1 quyết định: volume cao + nến xanh → phá R1. Volume thấp + nến đỏ/yếu → quay đầu.

Khi giá chạm R1: đây là lúc phe mua và phe bán đối đầu trực tiếp. Giá không phá được trong 2 lần chạm → R1 càng mạnh.

**R2 — Kháng cự mạnh:**
Phiên mạnh mới tới R2. Khi tới R2: thường xảy ra 1 trong 2: giá quay đầu mạnh hoặc tiếp tục đến R3. Momentum là chìa khóa.

**R3 — Kháng cự cuối:**
Hiếm khi chạm. Nếu chạm R3 → ngày giao dịch cực kỳ biến động. Đa số quay đầu từ R3.

**S1 — Hỗ trợ đầu tiên:**
Đối xứng với R1. Giá chạm S1 thường hồi phục ít nhất về PP.

**S2 — Hỗ trợ mạnh:**
Tương tự R2. Giá tới S2 trong ngày yếu.

**S3 — Hỗ trợ cuối:**
Hiếm khi chạm. Nếu chạm → phiên rất biến động.

---

## Cấu trúc phiên intraday với pivot

**9:00-9:15 — ATO:**
Giá thường vol cao, có thể vượt pivot ngay hoặc gap. Chưa vội trade — chờ xác nhận.

**9:15-10:00 — Khởi động:**
Giá tìm vùng cân bằng quanh PP. Đây là thời điểm để xác định xu hướng ngày.

**10:00-11:30 — Phiên sáng:**
Giá thường chạm ít nhất R1 hoặc S1. Volume giảm dần.

**13:00-14:30 — Phiên chiều:**
Tiếp diễn xu hướng sáng hoặc đảo chiều. Volume thấp. Nếu giá chưa chạm pivot nào → có thể chạm trong phiên này.

**14:30-14:45 — ATC:**
Đột biến mạnh. Nhiều big money vào/ra 15 phút cuối.

---

## Ví dụ một ngày giao dịch

HPG: PP = 28.000, R1 = 28.700, R2 = 29.500, S1 = 27.300.

9:15: giá mở 28.200 (trên PP). 10:00: giá lên 28.500. 10:30: chạm R1 28.700 với volume cao → phá R1. 11:00: lên 29.200. 14:00: chạm R2 29.500 → quay đầu. Đóng cửa 29.000.

Giá đi theo cấu trúc gần như textbook.

---

## Lưu ý cho thị trường VN

HOSE biên độ ±7%. Với cổ > 50.000, R3 và S3 thường nằm ngoài biên độ. Với cổ < 20.000, các mức trong biên độ.

Giá gap qua R1/S1 qua đêm: cẩn thận khi trade. Gap thường được lấp trong 1-2 giờ đầu.

Spread intraday rộng hơn daily nhất là đầu phiên và cuối phiên. Tính spread vào stop loss.

---

## Bảng tóm tắt

| Mức | Độ mạnh | Khả năng chạm | Hành động |
|-----|---------|---------------|-----------|
| R3 | Rất mạnh | Rất hiếm | Coi chừng đảo chiều |
| R2 | Mạnh | Trung bình | Chốt lời / canh short |
| R1 | Trung bình | Cao | Canh short nếu có tín hiệu |
| PP | Linh hoạt | Rất cao | Chờ xác nhận |
| S1 | Trung bình | Cao | Canh long nếu có tín hiệu |
| S2 | Mạnh | Trung bình | Canh long |
| S3 | Rất mạnh | Rất hiếm | Mua mạo hiểm |

---

Chuẩn bị khung Daily + khung 15m hoặc 1h. Xác định PP, R1, S1 trước giờ mở cửa. Quan sát 30 phút đầu để xác định xu hướng. Trade theo kế hoạch, không trade theo cảm xúc.

Bài 33: Pivot Intraday
