# Bài 50: Journal Giao Dịch — Ghi Lại Để Học

*Trader chuyên nghiệp có journal. Trader nghiệp dư có trí nhớ chọn lọc.*

---

Jason à,

Journal giao dịch là thứ tách biệt trader chuyên nghiệp khỏi đám đông thua lỗ.

Nếu Jason không ghi lại giao dịch, Jason sẽ **lặp lại sai lầm** mà không hề hay biết.

## Tại Sao Cần Journal?

**Lý do 1: Trí nhớ sai lệch**

Jason nhớ: "Tháng trước mình thắng 8/10 lệnh, thị trường dễ ăn quá."

Sự thật sau khi kiểm tra journal: "Thắng 6/12 lệnh, 2 lệnh thắng nhờ may mắn, 2 lệnh thua to."

**Lý do 2: Phát hiện mô hình sai lầm**

Journal cho thấy:
- Mỗi khi mua đuổi (FOMO) → thua (6/7 lần)
- Mỗi khi có kế hoạch trước → thắng (8/10 lần)
- Trade ngân hàng → thắng nhiều hơn trade bất động sản

**Lý do 3: Cải thiện liên tục**

Không có dữ liệu → không biết cái gì cần sửa. Có dữ liệu → biết chính xác điểm yếu.

## Journal Gồm Những Gì?

### Thông Tin Cơ Bản

| Mục | Ví dụ |
|-----|-------|
| Ngày | 12/06/2026 |
| Mã cổ phiếu | HPG |
| Hướng | Long |
| Số lượng | 1,000 |
| Giá vào | 28,500 |

### Phân Tích Kỹ Thuật

| Mục | Ví dụ |
|-----|-------|
| Lý do vào | Breakout khỏi trendline giảm, KL tăng trên MA20 |
| Khung thời gian | Daily |
| Chỉ báo hỗ trợ | MACD cắt lên, RSI 55 |
| Hỗ trợ/kháng cự | Hỗ trợ 27,500, kháng cự 30,000 |

### Quản Lý Rủi Ro

| Mục | Ví dụ |
|-----|-------|
| Stop loss | 27,000 (mất 1,500/cp) |
| Take profit | 31,000 (lời 2,500/cp) |
| RR ratio | 1.67 |
| % TK rủi ro | 1.5% (TK 100tr, rủi ro 1.5tr) |

### Thực Thi

| Mục | Ví dụ |
|-----|-------|
| Có đặt stop không? | Có, LO stop |
| Có đặt TP không? | Không, trailing thủ công |
| Có scale không? | Không |

### Kết Quả

| Mục | Ví dụ |
|-----|-------|
| Giá thoát | 30,500 |
| Lời/lỗ | Lời 2,000/cp × 1,000 = 2,000,000đ |
| % tài khoản | +2% |
| Thời gian giữ | 9 ngày |

### Cảm Xúc Và Bài Học

| Mục | Ví dụ |
|-----|-------|
| Cảm xúc khi vào | Bình tĩnh, có kế hoạch |
| Cảm xúc khi giữ | Hơi lo ngày 3 khi giá về 28,100 |
| Cảm xúc khi ra | Hài lòng |
| Bài học | Giá về gần stop là bình thường, cần kiên nhẫn |

## Mẫu Journal Đơn Giản

Copy cái này vào Google Sheets hoặc Notion:

```
Ngày | Mã | Hướng | SL | Giá Vào | Stop | TP | RR | Kết Quả | Lời/Lỗ | Bài Học
12/06| HPG| Long  |1000| 28,500  |27k  |31k |1.67| TP chạm | +2tr   | Kiên nhẫn
```

Hoặc dùng Excel, mỗi dòng = 1 trade.

## Phân Tích Journal Hàng Tuần

Không chỉ ghi, phải **phân tích**. Mỗi tuần dành 30 phút:

### Thống Kê Cơ Bản

```
Tổng số lệnh: 10
Thắng: 6
Thua: 4
Win rate: 60%
Net P/L: +3.2tr
RR trung bình: 1.8
```

### Phân Tích Theo Loại

```
Lệnh theo kế hoạch: 7 lệnh → thắng 5 (71%)
Lệnh impulsive: 3 lệnh → thắng 1 (33%)
→ Kết luận: Lệnh có kế hoạch tốt hơn gấp đôi.
```

### Phân Tích Theo Mã

```
HPG: 4 lệnh → thắng 3 (75%)
FPT: 3 lệnh → thắng 1 (33%)
VPB: 3 lệnh → thắng 2 (66%)
→ Kết luận: HPG có edge, FPT chưa hiểu rõ → cần nghiên cứu thêm FPT
```

### Phân Tích Theo Cảm Xúc

```
Bình tĩnh: 6 lệnh → thắng 5 (83%)
FOMO: 2 lệnh → thắng 0 (0%)
Sợ: 2 lệnh → thắng 1 (50%)
→ Kết luận: Trade khi bình tĩnh = hiệu quả nhất. FOMO = thua.
```

## Tool Gợi Ý Cho Journal

### 1. Google Sheets (Dễ nhất)

Tạo 1 sheet với các cột trên. Mỗi lệnh 1 dòng. Cuối tuần làm pivot table.

**Lợi:** Miễn phí, dễ dùng, truy cập mọi nơi.

### 2. Tradervue (Chuyên nghiệp)

Website chuyên về journal trading. Import lệnh từ sàn, tự động tính thống kê.

**Lợi:** Nhiều tính năng phân tích, có đồ thị equity curve.

### 3. Edgewonk

Phần mềm journal chuyên sâu, có tính năng psychological analysis.

**Lợi:** Phân tích tâm lý, random distribution test (có phải may mắn không).

### 4. Sổ Tay (Cổ điển)

Jason có thể ghi tay vào sổ A5. Mất 2 phút mỗi lệnh.

**Lợi:** Không bị phân tâm bởi điện thoại, dễ nhớ hơn.

## Quy Tắc Journal Của BG

1. **Ghi ngay sau khi đóng lệnh** — trí nhớ còn tươi, cảm xúc còn rõ
2. **Ghi cảm xúc** — không chỉ số liệu khô khan
3. **Trung thực** — không làm đẹp journal. Ghi cả lệnh ngu, lệnh thua. Jason là học để tiến bộ, không để khoe.
4. **Phân tích cuối tuần** — journal không phân tích = vô dụng
5. **Ít nhất 30 lệnh mới rút ra kết luận** — không kết luận sau 5 lệnh

## Bài Tập Nhỏ

Tạo journal cho 3 giao dịch gần đây nhất của Jason (có thể nhớ được hoặc kiểm tra lịch sử tài khoản).

1. Ghi theo mẫu trên
2. Tính win rate
3. Tính expectancy
4. Rút ra 1 bài học

Ví dụ journal đơn giản:

```
Lệnh 1: Mua FPT 132,000, bán 128,000 => lỗ 4,000/cp
Lý do vào: Thấy FPT đẹp, không có kế hoạch
Bài học: Không trade khi chưa có kế hoạch

Lệnh 2: Mua HPG 28,000, bán 30,500 => lời 2,500/cp
Lý do vào: Breakout khỏi range, có kế hoạch
Bài học: Lên kế hoạch thì thắng

Lệnh 3: Mua VPB 18,500, stop 17,800 => lỗ 700/cp
Lý do vào: Có kế hoạch nhưng stop bị chạm
Bài học: Đúng kế hoạch, stop chỉ hơi gần => cần điều chỉnh
```

---

**Bài 51:** Backtest — kiểm tra chiến lược trước khi live.

— BG 🏠
