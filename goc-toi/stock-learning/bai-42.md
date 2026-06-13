# Bài 42: Kelly Criterion Đơn Giản Hoá

*Đừng sợ công thức — cái này dễ hơn Jason nghĩ.*

---

Jason à,

Bài trước nói về 1% rủi ro mỗi lệnh — đó là quy tắc an toàn cơ bản. Hôm nay BG dạy một công thức để tính **chính xác hơn**: nên vào bao nhiêu % tài khoản dựa trên xác suất thắng và tỷ lệ lời/lỗ.

## Kelly Criterion Là Gì?

Kelly Criterion là công thức toán học do John Kelly phát minh năm 1956, dùng để tối ưu hoá **tốc độ tăng trưởng tài khoản** trong dài hạn.

Nghe cao siêu vậy thôi, áp dụng vào trading rất đơn giản.

## Công Thức Kelly Cơ Bản

```
f = (bp - q) / b
```

Trong đó:
- **f** = % tài khoản nên đặt cược (kết quả cần tìm)
- **b** = tỷ lệ lời trên lỗ (nếu thắng được bao nhiêu lần so với nếu thua)
- **p** = xác suất thắng (ví dụ 60% = 0.6)
- **q** = xác suất thua = 1 - p

### Ví dụ dễ hiểu

Giả sử Jason có chiến lược:
- RR = 1:2 (b = 2 — nếu thắng lời 2, nếu thua mất 1)
- Tỷ lệ thắng 50% (p = 0.5, q = 0.5)

```
f = (2 × 0.5 - 0.5) / 2
f = (1 - 0.5) / 2
f = 0.5 / 2
f = 0.25
```

→ Kelly nói: **vào 25% tài khoản mỗi lệnh**

### Một ví dụ thực tế hơn

Jason trade swing, thống kê 50 lệnh gần nhất:
- Thắng: 30 lệnh → p = 0.6
- Thua: 20 lệnh → q = 0.4
- RR trung bình: 1:1.5 → b = 1.5

```
f = (1.5 × 0.6 - 0.4) / 1.5
f = (0.9 - 0.4) / 1.5
f = 0.5 / 1.5
f = 0.333...
```

→ Kelly nói: vào **33% tài khoản**

## Vấn Đề Với Kelly Full

Kelly "full" (dùng đúng kết quả f) rất nguy hiểm vì 2 lý do:

1. **Xác suất không chính xác** — Jason nghĩ p=60% nhưng thực tế chỉ 50%, Kelly sẽ cho ra f sai -> rủi ro lớn
2. **Variance cao** — dùng Kelly full, tài khoản biến động rất mạnh

Ví dụ: f = 33% nghĩa là mỗi lệnh vào 33% tài khoản. Nếu thua 2 lệnh liên tiếp → mất 66%? Không, vì Kelly tính theo giá trị còn lại:
- Lệnh 1: 100tr - 33% × 1 (thua) = 67tr
- Lệnh 2: 67tr - 33% × 1 (thua) = 44.9tr

Sau 2 lệnh thua còn 45% tài khoản. Về mặt lý thuyết vẫn sống, nhưng về mặt tâm lý thì **khủng hoảng**.

## Fractional Kelly — Cách Dùng An Toàn Cho Dân VN

Thay vì dùng f, dùng **fractional Kelly**:
- **1/4 Kelly**: f × 0.25 → an toàn nhất
- **1/2 Kelly**: f × 0.5 → cân bằng
- **1/3 Kelly**: f × 0.33 → phổ biến

### Ví dụ áp dụng fractional Kelly

Với chiến lược p=60%, b=1.5, f=33%:

| Loại | Công thức | % TK mỗi lệnh |
|------|-----------|--------------|
| Kelly full | f = 33% | 33% |
| 1/2 Kelly | f × 0.5 | 16.5% |
| **1/3 Kelly** | f × 0.33 | **11%** |
| 1/4 Kelly | f × 0.25 | 8.25% |

**Khuyến nghị cho Jason:**
- Mới bắt đầu: **1/4 Kelly** hoặc **giữ nguyên 1% rủi ro**
- Có thống kê >100 lệnh: **1/3 Kelly**
- Pro: có thể lên **1/2 Kelly**

## Áp Dụng Trên Thị Trường VN

Ví dụ cụ thể với cổ phiếu VN:

**Tình huống:** Jason muốn mua VPB. Chiến lược:
- Điểm vào: 18,000
- Stop loss: 17,000 (rủi ro 1,000/cp = 5.56%)
- Take profit: 20,000 (lời 2,000/cp = 11.11%)
- → RR = 2,000/1,000 = 2 (b = 2)

Jason thống kê chiến lược này có win rate 55% (p = 0.55, q = 0.45)

```
f = (2 × 0.55 - 0.45) / 2
f = (1.1 - 0.45) / 2
f = 0.65 / 2
f = 0.325
```

→ Kelly full: 32.5%
→ 1/3 Kelly: ~10.8% tài khoản

**Tính số cổ phiếu mua:**

Jason có 100tr:
- Vào 10.8% = 10.8 triệu
- Giá VPB 18,000/cp
- Số lượng: 10,800,000 / 18,000 ≈ 600 cổ

**Kiểm tra rủi ro:**
- Stop loss 17,000, mất 1,000/cp
- 600 cổ × 1,000 = 600,000đ
- 600k / 100tr = 0.6% tài khoản
- → Rất an toàn

## Bảng Tham Khảo Nhanh

Không cần tính mỗi lần. Dùng bảng này:

| Win Rate | RR 1:1 | RR 1:2 | RR 1:3 | 1/3 Kelly khuyến nghị |
|----------|--------|--------|--------|----------------------|
| 40% | Negative | 5% | 10% | 2% / 3% |
| 45% | Negative | 8% | 12% | 3% / 4% |
| 50% | 0% | 12.5% | 17% | 4% / 6% |
| 55% | 5% | 16% | 21% | 5% / 7% |
| 60% | 10% | 20% | 27% | 7% / 9% |
| 65% | 15% | 24% | 32% | 8% / 11% |

Lưu ý: Nếu Kelly ra kết quả **âm**, tức là chiến lược đó **không có edge** — đừng trade.

## Lưu Ý Quan Trọng

1. **Kelly chỉ đúng nếu Jason biết chính xác p và b** — điều này chỉ có từ thống kê giao dịch thực tế
2. **Không Kelly cho lệnh đơn lẻ** — Kelly dùng cho hệ thống/chiến lược, không tính từng lệnh riêng
3. **Kelly không tính đến thanh khoản** — nếu cổ phiếu VN kém thanh khoản, Kelly ra f=20% cũng vô dụng vì không vào được
4. **Kelly là toán học, không phải tâm lý** — Jason có thể sợ và không theo được Kelly 30%

## Bài Tập Nhỏ

Jason có chiến lược:
- Win rate: 50% (p = 0.5)
- RR: 1:2 (b = 2)

1. Tính Kelly full
2. Tính 1/3 Kelly
3. Nếu tài khoản 50tr, vào 1/3 Kelly thì mỗi lệnh bao nhiêu tiền?

Đáp án: f = (2×0.5 - 0.5)/2 = 0.25 → 25%. 1/3 Kelly = 8.3%. Với 50tr: 4.15 triệu/lệnh.

---

**Bài 43:** Position sizing thực tế — biết vào bao nhiêu tiền, bao nhiêu cổ mỗi lệnh.

— BG 🏠
