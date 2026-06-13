# Bài 52: Paper Trading — Tập Chơi Trước Khi Vào Tiền Thật

*Backtest xong, chưa phải live. Paper trade để xác nhận trước.*

---

Jason à,

Có một bước quan trọng giữa backtest (test quá khứ) và live trade (tiền thật): **paper trading**.

Nhiều người bỏ qua bước này vì nghĩ "mất công, trade giả khác trade thật". Họ đúng — nó khác. Nhưng vẫn cần.

## Paper Trading Là Gì?

Paper trading = Jason trade **trên dữ liệu thật, giá thật, nhưng không dùng tiền thật**.

Jason mở app, đặt lệnh với số tiền ảo (thường là 100tr-1 tỷ), và xem kết quả.

## Tại Sao Cần Paper Trading?

### Lý do 1: Kiểm tra chiến lược trong điều kiện real-time

Backtest có hindsight bias. Paper trading thì không — Jason quyết định trong thời gian thực, không biết trước giá.

### Lý do 2: Làm quen với nền tảng giao dịch

Jason biết đặt lệnh LO, ATO, ATC chưa? Biết kiểm tra spread, khối lượng, sổ lệnh không? Paper trade giúp Jason làm quen mà không sợ mất tiền.

### Lý do 3: Kiểm tra tâm lý (một phần)

Paper trade không gây sợ hãi thật sự. Nhưng nếu Jason không thể tuân thủ kỷ luật ngay cả với paper trade → chắc chắn sẽ không tuân thủ với tiền thật.

### Lý do 4: Xây dựng thói quen

Mở app mỗi sáng, check danh mục, đặt lệnh theo kế hoạch — làm 30 ngày liên tục với paper, thành thói quen. Khi chuyển sang live, Jason đã có sẵn routine.

## Cách Paper Trading Đúng

### Không phải "chơi cho vui"

Sai lầm lớn nhất của paper trade: Jason mua 1 tỷ VCB, thấy lời 30%, thấy dễ quá.

Rồi khi live, mua 200 cổ, giá giảm 500đ, hoảng.

**Nguyên tắc:** Paper trade như trade thật.
- Cùng số tiền dự định live
- Cùng kích thước lệnh (không mua 10,000 cổ nếu live chỉ mua 500)
- Cùng stop loss, take profit
- Cùng kỷ luật

### Quy trình paper trading

**Bước 1: Nạp tiền ảo**

Chọn số tiền = số tiền Jason sẽ live. Ví dụ 100 triệu.

**Bước 2: Lên kế hoạch**

Trước mỗi phiên, viết kế hoạch: hôm nay tìm cơ hội gì, theo chiến lược nào.

**Bước 3: Thực thi**

Vào lệnh, đặt stop, quản lý — y hệt live.

**Bước 4: Ghi journal**

Cảm xúc khi trade giả? Có FOMO không? Có bỏ stop không?

**Bước 5: Đánh giá cuối tuần**

Thống kê, so sánh với backtest.

## Các Tool Paper Trading Cho Thị Trường VN

### 1. TCBS (Techcombank Securities) — Giả lập

TCBS có tài khoản demo. Jason đăng ký, được 1 tỷ tiền ảo. Giao diện giống hệt thật.

**Lợi:** Dữ liệu realtime, giống thật nhất.

### 2. VNDirect — Tài khoản ảo

VNDirect cũng có chức năng tương tự. Mở tài khoản demo, trade với tiền ảo.

### 3. SSI iBoard — Xem được giá thật, tự ghi chép

SSI không có chức năng paper trade chính thức. Jason có thể dùng SSI để xem giá, và ghi chép tay kết quả giả.

**Lợi:** Phản ánh đúng spread, khối lượng thực tế. Jason thấy được lệnh có thể khớp được không.

### 4. Excel/Google Sheets

Cũng được. Mỗi ngày, ghi lại các tín hiệu tìm được, giá đặt lệnh giả, giá stop, kết quả.

## Lưu Ý Khi Paper Trade Trên Thị Trường VN

### 1. Khối lượng khớp thực tế

Paper trade thường tự động khớp lệnh. Nhưng thực tế: nếu cổ phiếu kém thanh khoản, lệnh của Jason có thể không khớp hoặc khớp từng phần.

**Cách khắc phục:** Chỉ trade cổ VN30 khi paper. Check sổ lệnh thực tế trước khi "giả sử khớp".

### 2. Spread thực tế

Paper trade thường khớp ở giữa spread. Thực tế: Jason mua ở ask, bán ở bid.

**Cách khắc phục:** Khi ghi kết quả, trừ spread thực tế (100-500đ/cp).

### 3. Thanh khoản khi stop loss

Paper trade: "Stop loss 28,000, khớp ngay 28,000."
Thực tế: Nếu HPG giảm mạnh 7% trong 1 ngày, Jason có thể không bán được kịp.

**Cách khắc phục:** Giả sử stop loss trượt thêm 0.5-1% so với giá đặt.

## Bao Lâu Thì Paper Trade?

BG khuyến nghị:

| Kinh nghiệm | Thời gian paper trade | Điều kiện chuyển live |
|-----------|---------------------|---------------------|
| Mới hoàn toàn | 1-2 tháng | Paper lời 2 tháng liên tiếp |
| Có kiến thức | 2-4 tuần | Paper thắng >50% lệnh + tuân thủ kỷ luật |
| Đã trade nhưng muốn test chiến lược mới | 1-2 tuần | 10-15 lệnh paper ổn định |

## Từ Paper Sang Live — Bước Chuyển

Khi chuyển từ paper sang live, BG khuyên:
1. **Live với 1/3 kích thước** — nếu paper vào 500 cổ, live chỉ 150-200 cổ
2. **Rủi ro cực thấp** — 0.5% tài khoản mỗi lệnh thay vì 1%
3. **Theo dõi tâm lý kỹ hơn** — cảm xúc lúc này mới thật
4. **20-30 lệnh live đầu tiên** là học, không kỳ vọng lời

## Sai Lầm Phổ Biến

### Sai lầm 1: Paper trade toàn thắng, live thua

Lý do: Paper trade không có cảm xúc. Live có sợ hãi.

**Cách tránh:** Khi paper, tự tạo áp lực bằng cách đặt deadline và mục tiêu cụ thể.

### Sai lầm 2: Paper trade quá lâu

Có người paper 1 năm. Thấy lời đều. Live vẫn thua.

Lý do: Họ không chuyển được kỷ luật paper sang live.

**Cách tránh:** Khi paper ổn 20 lệnh, chuyển live với size nhỏ.

### Sai lầm 3: Không paper trade gì cả

Jason đến từ bài 1 đến 52, chưa bao giờ đặt 1 lệnh — kể cả giả.

**Cách tránh:** Học xong bài này, mở tài khoản demo ngay. Trade ít nhất 5 lệnh paper trước khi đọc bài 53.

## Bài Tập Nhỏ

1. Mở tài khoản paper tại TCBS hoặc VNDirect
2. Trade 3 lệnh paper tuần này (theo chiến lược Jason đã học)
3. Ghi journal cho từng lệnh
4. Cuối tuần: thống kê kết quả

Không cần phức tạp. Chỉ cần bắt đầu.

---

**Bài 53:** Chọn sàn môi giới — SSI, VND, TCBS so sánh cho Jason.

— BG 🏠
