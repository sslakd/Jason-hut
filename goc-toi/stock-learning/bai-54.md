# Bài 54: Thuế Và Phí — Bao Nhiêu, Ai Trả

*Lời 10% không có nghĩa là lời 10%. Trừ thuế, phí, spread mới ra con số thật.*

---

Jason à,

Nhiều trader mới quên mất: **mỗi giao dịch đều có chi phí**. Lời 1% chưa chắc đã lời sau khi trừ phí.

Hôm nay BG chỉ Jason tất cả các khoản phí và thuế trên thị trường VN.

## Các Khoản Phí Giao Dịch

### 1. Phí môi giới (Brokerage Fee)

Đây là phí Jason trả cho công ty chứng khoán mỗi lần mua hoặc bán.

**Mức phí phổ biến:**
- SSI: 0.15% - 0.2% giá trị giao dịch
- VNDirect: 0.1% - 0.15%
- TCBS: 0.05% - 0.1%

**Cách tính:**
```
Phí môi giới = Giá trị giao dịch × (% phí)
```

Ví dụ: Jason mua 1,000 HPG giá 28,000. Tổng giá trị = 28,000,000đ.
- Với TCBS (0.05%): Phí = 28tr × 0.05% = 14,000đ
- Với SSI (0.15%): Phí = 28tr × 0.15% = 42,000đ

Chênh lệch 28,000đ — không nhiều, nhưng nếu Jason trade 100 lần/tháng, chênh lệch 2.8tr.

**Lưu ý:** Phí này tính riêng cho mỗi chiều: mua tính 1 lần, bán tính 1 lần.

### 2. Thuế thu nhập chứng khoán (0.1%)

Đây là thuế Jason phải nộp khi **bán** cổ phiếu.

**Mức:** 0.1% giá trị giao dịch bán.

**Cách tính:**
```
Thuế = Giá trị bán × 0.1%
```

Ví dụ: Jason bán 1,000 HPG giá 30,000. Tổng giá trị bán = 30,000,000đ.
- Thuế = 30tr × 0.1% = 30,000đ

**Quan trọng:**
- Chỉ đánh khi **bán**, không đánh khi mua
- Tự động trừ vào tài khoản khi Jason bán
- Nếu Jason lỗ, vẫn phải nộp thuế 0.1% trên giá trị bán — dù lỗ vẫn mất thêm 0.1%

### 3. Phí lưu ký (Custody Fee)

Phí giữ cổ phiếu trong tài khoản.

**Mức:** Thường 0.3-0.5đ/cổ/tháng. Hoặc miễn phí với nhiều sàn.

Ví dụ: Jason có 5,000 cổ HPG → phí lưu ký = 5,000 × 0.3đ = 1,500đ/tháng.

**Hầu hết sàn VN hiện tại MIỄN phí lưu ký** (SSI, VND, TCBS đều free).

### 4. Phí ứng trước tiền bán

Nếu Jason bán cổ phiếu, tiền về sau 2 ngày (T+2). Nếu muốn dùng tiền ngay, Jason trả phí ứng trước.

**Mức:** 0.03-0.05%/ngày trên số tiền ứng.

**Ví dụ:** Bán 30tr, muốn dùng tiền ngay. Ứng trước 2 ngày. Phí = 30tr × 0.03% × 2 = 18,000đ.

**Khuyến nghị:** Trừ khi gấp, đừng dùng ứng trước — chờ T+2.

## Vậy Tổng Chi Phí Mỗi Giao Dịch Là Bao Nhiêu?

### Ví dụ cụ thể

Jason mua 1,000 HPG giá 28,000, bán sau 2 tuần giá 30,000 (ở TCBS, phí 0.05%).

**Mua:**
- Giá trị: 1,000 × 28,000 = 28,000,000đ
- Phí môi giới: 28tr × 0.05% = 14,000đ
- Tổng tiền mua: **28,014,000đ**

**Bán:**
- Giá trị: 1,000 × 30,000 = 30,000,000đ
- Phí môi giới: 30tr × 0.05% = 15,000đ
- Thuế: 30tr × 0.1% = 30,000đ
- Tổng thu: **29,955,000đ**

**Kết quả:**
- Lời chưa trừ phí: 30,000,000 - 28,000,000 = 2,000,000đ
- Lời sau phí: 29,955,000 - 28,014,000 = **1,941,000đ**
- Phí và thuế ăn mất: 59,000đ (2.95% lợi nhuận)

### Với phí cao hơn (SSI 0.15%)

**Mua:**
- Phí: 28tr × 0.15% = 42,000đ
- Tổng: 28,042,000đ

**Bán:**
- Phí: 30tr × 0.15% = 45,000đ
- Thuế: 30,000đ
- Tổng thu: 29,925,000đ

**Kết quả:**
- Lời sau phí: 29,925,000 - 28,042,000 = **1,883,000đ**
- Phí và thuế: 117,000đ (5.85% lợi nhuận)

Chênh lệch giữa TCBS và SSI trong giao dịch này: 58,000đ.

## Tính Vào Giá "Hoà Vốn"

Jason cần biết cổ phải tăng bao nhiêu % để hoà vốn.

### Công thức nhanh

Với phí 0.1% và thuế 0.1%:
```
% hoà vốn ≈ Phí mua (0.1%) + Phí bán (0.1%) + Thuế (0.1%) = 0.3%
```

### Cụ thể cho từng sàn

| Sàn | Phí mua | Phí bán | Thuế bán | Tổng mất | % cần tăng để hoà vốn |
|-----|---------|---------|---------|---------|---------------------|
| TCBS | 0.05% | 0.05% | 0.1% | 0.2% | 0.2% |
| VND | 0.1% | 0.1% | 0.1% | 0.3% | 0.3% |
| SSI | 0.15% | 0.15% | 0.1% | 0.4% | 0.4% |

Ví dụ: Mua TCBS → giá lên 0.2% là hoà vốn. Mua SSI → cần lên 0.4%.

### Với cổ giá thấp, spread rộng

Thêm spread vào:
- Cổ 10,000đ, spread 100đ = 1%
- Mua TCBS: 0.2% (phí) + 1% (spread vào) + 1% (spread ra) = 2.2% cần tăng để hoà vốn
- Mua SSI: 0.4% + 2% = **2.4%**

→ Cổ giá thấp + spread rộng = chi phí giao dịch cực kỳ cao.

## Ảnh Hưởng Đến Chiến Lược

### Day trade

Nếu Jason day trade, vào ra mỗi ngày:
- Mỗi lần vào ra mất 0.2-0.4% phí + thuế
- 1 ngày 3 lần → mất 0.6-1.2%/ngày
- 20 ngày/tháng → mất 12-24%/tháng chỉ từ phí giao dịch

→ **Day trade chỉ có lời nếu Jason thắng đều và thắng lớn hơn chi phí này.**

### Swing trade

Nếu Jason swing, giữ 1-4 tuần:
- 1 lần vào ra: mất 0.2-0.4%
- Lời 5-10% mỗi trade → phí chỉ là 2-8% lợi nhuận

→ **Swing trade dễ chịu hơn về chi phí.**

## Mẹo Giảm Chi Phí

1. **Chọn sàn phí thấp** — TCBS cho trade số lượng ít, VND cho trade vừa
2. **Trade cổ thanh khoản cao** — spread hẹp, giảm chi phí ẩn
3. **Hạn chế day trade** — nhiều lệnh = nhiều phí
4. **Thương lượng phí với sàn** — Nếu Jason trade >1 tỷ/tháng, có thể xin giảm phí
5. **Không dùng ứng tiền bán** — chờ T+2
6. **Scaling out thay vì chốt nhiều lần** — mỗi lần chốt là 1 lần mất phí

## Bài Tập Nhỏ

Jason mua 500 cổ FPT giá 130,000, bán giá 140,000. Sàn VNDirect (phí 0.1%).

1. Phí mua?
2. Phí bán?
3. Thuế?
4. Tổng chi phí?
5. Lợi nhuận sau phí?
6. Lợi nhuận tính bằng %?

Đáp án:
- (1) 500 × 130k × 0.1% = 65,000đ
- (2) 500 × 140k × 0.1% = 70,000đ
- (3) 500 × 140k × 0.1% = 70,000đ
- (4) 65,000 + 70,000 + 70,000 = 205,000đ
- (5) (500 × 10k) - 205k = 5tr - 205k = 4,795,000đ
- (6) 4.795tr / (500 × 130k) = 7.38% (thay vì 7.69% nếu không tính phí)

Mất ~0.3% lợi nhuận vì phí và thuế.

---

**Bài 55:** Ôn tập Phase 4 — quản lý vốn, tâm lý, journal, backtest — tổng kết trước khi vào Phase cuối.

— BG 🏠
