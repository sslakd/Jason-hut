# Bài 51: Backtest — Kiểm Tra Chiến Lược Trước Khi Live

*Đừng mang tiền thật ra thử nghiệm. Test trên quá khứ trước.*

---

Jason à,

Jason đã học nhiều chiến lược — breakout, trend following, hỗ trợ/kháng cự. Nhưng làm sao biết chiến lược đó **thực sự có lời**?

Câu trả lời: **Backtest** — kiểm tra chiến lược trên dữ liệu quá khứ.

## Backtest Là Gì?

Backtest = Jason giả vờ trade trên dữ liệu cũ để xem chiến lược có hiệu quả không.

Ví dụ:
- Chiến lược: HPG breakout trên MA20, KL > 1.5× trung bình → mua, stop 5%, take profit 10%
- Lấy dữ liệu HPG 2023-2025
- "Trade" giả trên từng tín hiệu breakout
- Ghi lại kết quả: thắng bao nhiêu, thua bao nhiêu, RR, drawdown

### Manual Backtest (Bằng tay)

Jason mở chart HPG, nhìn từng ngày, tìm tín hiệu, ghi lại kết quả.

**Ưu điểm:**
- Hiểu sâu chiến lược
- Cảm nhận được thị trường
- Không cần code

**Nhược điểm:**
- Mất thời gian (30 tín hiệu = 2-3 giờ)
- Dễ bị bias (nhìn sau biết trước — hindsight bias)
- Khó test nhiều cổ cùng lúc

### Automated Backtest (Tự động)

Dùng phần mềm hoặc code để test tự động.

**Ưu điểm:**
- Nhanh (hàng trăm tín hiệu trong vài phút)
- Không bias
- Test được trên nhiều cổ, nhiều khoảng thời gian

**Nhược điểm:**
- Cần kỹ năng code hoặc phần mềm trả phí
- Không cảm nhận được thị trường

## Các Chỉ Số Quan Trọng Khi Backtest

### 1. Win Rate (Tỷ lệ thắng)

```
Số lệnh thắng / Tổng số lệnh
```

Ví dụ: 30 lệnh thắng / 50 lệnh = 60%

### 2. Profit Factor

```
Tổng lợi nhuận / Tổng thua lỗ
```

Quan trọng hơn win rate.
- PF > 2: Rất tốt
- PF 1.5-2: Tốt
- PF 1-1.5: Chấp nhận được
- PF < 1: Chiến lược thua lỗ

Ví dụ: Tổng lời 30tr / Tổng lỗ 15tr = PF 2.0

### 3. Maximum Drawdown (MDD)

```
Số % thua lỗ lớn nhất từ đỉnh đến đáy
```

- MDD < 10%: Rất an toàn
- MDD 10-20%: Chấp nhận được
- MDD 20-30%: Rủi ro cao
- MDD > 30%: Có vấn đề

### 4. Sharpe Ratio

Lợi nhuận trên 1 đơn vị rủi ro.
- Sharpe > 1: Tốt
- Sharpe > 2: Rất tốt

### 5. Số lệnh

- Tối thiểu 30-50 lệnh để có ý nghĩa thống kê
- 100+ lệnh: Tin cậy được

## Các Bước Backtest Chi Tiết

### Bước 1: Xác định chiến lược

Ghi rõ:
- Điều kiện vào lệnh
- Stop loss
- Take profit
- Quản lý lệnh (trailing, scale?)

Ví dụ:
```
Vào: HPG đóng cửa trên MA20 và KL > TB 20 ngày
Stop: 5% dưới giá vào
TP: 10% trên giá vào
Quản lý: Không trailing, chạm TP hoặc SL là thoát
```

### Bước 2: Chọn dữ liệu

- Khoảng thời gian: Ít nhất 1-2 năm
- Nên có cả thị trường tăng và giảm (2022 là năm giảm, 2023-2024 là tăng)
- Chọn cổ phiếu thanh khoản tốt

### Bước 3: Làm manual backtest

Jason mở chart HPG 2023-2025 ở daily timeframe.

**Quy trình:**
1. Ngày 01/01/2023, nhìn chart
2. Có tín hiệu breakout MA20 không? Nếu có → ghi vào: ngày, giá vào, stop, tp
3. Kéo chart đến khi chạm stop hoặc tp → ghi kết quả
4. Tiếp tục đến tín hiệu tiếp theo
5. Lặp lại đến hết 2025

### Bước 4: Ghi kết quả

Tạo sheet:
```
# | Ngày vào | Giá vào | Stop | TP | Ngày thoát | Giá thoát | KQ | Lời/lỗ %
1 | 15/03/23 | 26,500  | 25,175| 29,150 | 28/03/23 | 29,150 | Thắng | +10%
2 | 10/05/23 | 28,000  | 26,600| 30,800 | 22/05/23 | 26,600 | Thua  | -5%
...
```

### Bước 5: Tính thống kê

Sau 30-50 tín hiệu:
- Win rate?
- Profit factor?
- MDD?
- Có đáng trade không?

## Backtest Cho Thị Trường VN

### Đặc thù cần lưu ý

**1. Spread và phí**

Trong backtest, nhớ trừ phí và spread.

Ví dụ: 
- Spread mỗi chiều: 100đ → mua + bán mất 200đ
- Phí giao dịch: 0.15% mỗi chiều → 0.3% tổng
- Với cổ giá 28,000: mất 200đ + 84đ phí = 284đ/cp mỗi lần vào ra

Trong backtest, trừ 1% tổng giá trị cho mỗi lệnh (đủ bù spread + phí).

**2. Thanh khoản**

Backtest nói vào 100,000 cổ là thắng, nhưng thực tế thị trường VN không đủ thanh khoản.

**Nên:** Chỉ test trên cổ VN30, và giới hạn khối lượng phù hợp.

**3. Biên độ giá**

HOSE ±7% mỗi ngày. Nếu stop loss ở 8%, có thể không bán được ngay — phải chờ hôm sau.

### Tool Cho Backtest

**1. Amibroker** — Phần mềm backtest chuyên nghiệp cho thị trường VN, nhiều broker VN support
**2. TradingView** — Có tính năng bar replay, có thể manual backtest
**3. Excel** — Nếu Jason chỉ manual 30-50 lệnh, Excel đủ
**4. Google Sheets** — Tương tự Excel, free

## Những Cạm Bẫy Trong Backtest

### Cạm bẫy 1: Hindsight bias

Jason nhìn chart và thấy "rõ ràng breakout là đúng". Nhưng lúc đó, chưa ai biết.

**Cách tránh:** Dùng bar replay (TradingView), hoặc che phần chart phía sau.

### Cạm bẫy 2: Overfitting (tối ưu quá khứ)

Jason test chiến lược với MA20, thấy thắng. Thử MA21, MA22... thấy MA25 thắng nhiều nhất.

Vấn đề: MA25 chỉ thắng trên dữ liệu quá khứ đó. Sang dữ liệu mới, nó thua.

**Cách tránh:**
- Dùng tham số đơn giản (MA20, RSI 14 — những tham số tiêu chuẩn)
- Test trên out-of-sample (2/3 dữ liệu để test, 1/3 để kiểm tra lại)

### Cạm bẫy 3: Survivorship bias

Jason test trên VCB, FPT, HPG — những cổ đã thành công. Nhưng lúc đó cũng có nhiều cổ "chết" bị huỷ niêm yết.

**Cách tránh:** Test trên cả cổ thua, hoặc dùng chỉ số VN30.

## Khi Nào Backtest Đủ Tin Cậy Để Live?

**Checklist:**
- ✅ Ít nhất 50 tín hiệu
- ✅ Profit factor > 1.5
- ✅ Win rate > 40% (với RR >= 1.5)
- ✅ MDD < 15%
- ✅ Hoạt động tốt cả trong thị trường tăng và giảm
- ✅ Tham số đơn giản, không overfit

## Bài Tập Nhỏ

Lấy 1 chiến lược đơn giản: "Mua HPG khi giá trên MA20 và RSI(14) < 70, bán khi giá dưới MA20 hoặc RSI > 80."

1. Mở TradingView, chart HPG daily
2. Tìm 20 tín hiệu từ 2023-2024
3. Ghi kết quả: thắng/thua, lời/lỗ trung bình
4. Tính win rate sơ bộ
5. Có đáng live không?

---

**Bài 52:** Paper trading — tập chơi trước khi vào tiền thật.

— BG 🏠
