# Bài 43: Position Sizing — Vào Bao Nhiêu % Tài Khoản

*Từ công thức Kelly ra thực tế, tính nhẩm 5 giây ra số cổ cần mua.*

---

Jason à,

Bài trước học Kelly — biết được **nên mạo hiểm bao nhiêu % tài khoản**. Hôm nay học bước cuối: chuyển cái % đó thành **số cổ phiếu cần mua**.

Đây là kỹ năng phải **thuộc lòng** trước khi bấm nút mua.

## Công Thức Position Sizing Cơ Bản

```
Số cổ = (Rủi ro cho phép) / (Rủi ro trên 1 cổ)
```

Trong đó:
- **Rủi ro cho phép** = % tài khoản × Giá trị tài khoản
- **Rủi ro trên 1 cổ** = Giá vào - Stop loss

### Ví dụ thực tế

Jason có TK 100 triệu. Chiến lược nói mỗi lệnh rủi ro 1%.

Muốn mua FPT giá 130,000. Stop loss 125,000 (mất 5,000/cp).

- Rủi ro cho phép: 100tr × 1% = 1,000,000đ
- Rủi ro trên 1 cổ: 130,000 - 125,000 = 5,000đ
- **Số cổ: 1,000,000 / 5,000 = 200 cổ**

→ Mua 200 cổ FPT, nếu chạm stop mất đúng 1 triệu = 1% tài khoản.

## Các Cách Tính Position Size

### Cách 1: Cố định % rủi ro (Fixed Percentage Risk)

Dễ nhất. Mỗi lệnh rủi ro 1%. Như ví dụ trên.

**Ưu điểm:** Dễ nhớ, tự động điều chỉnh theo tài khoản.
**Nhược điểm:** Cổ nào đặt stop xa thì vào ít cổ, cổ nào stop gần thì vào nhiều cổ — hơi khó chịu nhưng toán học đúng.

### Cách 2: Cố định % vốn (Fixed Fractional)

Jason quyết định mỗi lệnh **dùng x% tài khoản để mua**, không quan tâm stop loss.

Ví dụ: 100tr, vào 10% mỗi lệnh = 10tr/lệnh. FPT 130k → 10tr/130k ≈ 76 cổ.

**⚠️ Rủi ro:** Nếu FPT có stop loss xa, rủi ro thực tế có thể > 2-3% tài khoản. Không khuyến khích.

### Cách 3: Kết hợp Kelly + Rủi ro cố định

BG khuyên dùng cách này:
- Kelly cho biết **% vốn lý thuyết**
- Rủi ro cố định **kiểm soát drawdown**

Ví dụ: Kelly nói 25%, Jason sợ quá → dùng 1/3 Kelly = 8%.
- TK 100tr → 8tr mỗi lệnh
- Mua FPT 130k → 8tr/130k ≈ 61 cổ
- Stop loss 125k → mất 61 × 5k = 305k = 0.3% TK

→ Cực kỳ an toàn.

## Bảng Tra Nhanh Position Size

Không cần tính mỗi lần. Save cái này vào điện thoại.

### TK 50tr — rủi ro 1% (500k/lệnh)

| Stop loss/cp | Số cổ | Ghi chú |
|-------------|-------|---------|
| 500đ | 1,000 | Cổ giá thấp, stop gần |
| 1,000đ | 500 | Phổ biến với cổ 15-20k |
| 2,000đ | 250 | Stop vừa |
| 5,000đ | 100 | Stop xa, ít cổ |
| 10,000đ | 50 | Cổ cao giá |

### TK 100tr — rủi ro 1% (1tr/lệnh)

| Stop loss/cp | Số cổ | Vốn cần |
|-------------|-------|---------|
| 500đ | 2,000 | 40tr (cổ 20k) |
| 1,000đ | 1,000 | 20tr (cổ 20k) |
| 2,000đ | 500 | 10tr (cổ 20k) |
| 5,000đ | 200 | 26tr (FPT 130k) |
| 10,000đ | 100 | 13tr (FPT 130k) |

### TK 500tr — rủi ro 1% (5tr/lệnh)

| Stop loss/cp | Số cổ | Vốn cần |
|-------------|-------|---------|
| 500đ | 10,000 | 200tr |
| 1,000đ | 5,000 | 100tr |
| 2,000đ | 2,500 | 50tr |
| 5,000đ | 1,000 | 130tr |
| 10,000đ | 500 | 65tr |

## Quy Tắc Số Cổ Tối Thiểu

Trên sàn VN, lệnh nhỏ nhất là 100 cổ (lô chẵn). Một số sàn cho lô lẻ 1-99 cổ nhưng spread cao hơn.

**Khuyến nghị của BG:**
- Mỗi lệnh tối thiểu **300-500 cổ** với cổ thanh khoản tốt (để dễ xử lý khớp từng phần)
- Cổ giá thấp (<20k): có thể vào 1,000-2,000 cổ
- Cổ giá cao (>100k): 100-200 cổ cũng được

## Ví Dụ Thực Chiến VN

Jason thấy tín hiệu mua VPB ngày 12/06/2026:
- Giá: 18,000
- Stop loss: 17,200 (mất 800đ/cp, ~4.4%)
- Take profit: 19,500 (lời 1,500/cp, ~8.3%)
- RR: 1,500/800 ≈ 1.875
- TK: 80 triệu

**Bước 1:** Xác định rủi ro cho phép
- Rủi ro 1%: 80tr × 1% = 800,000đ

**Bước 2:** Tính số cổ
- 800,000 / 800 = **1,000 cổ**

**Bước 3:** Kiểm tra vốn cần
- 1,000 × 18,000 = 18,000,000đ
- Chiếm 18tr/80tr = 22.5% tài khoản — OK, dưới 30%

**Kiểm tra Kelly:**
- Win rate chiến lược: 55%
- f = (1.875 × 0.55 - 0.45) / 1.875 = 0.31
- 1/3 Kelly: 10.3%
- 10.3% của 80tr = 8.24tr → ~457 cổ

So sánh 2 cách:
- Cách 1% rủi ro: 1,000 cổ, vốn 18tr
- Cách 1/3 Kelly: ~460 cổ, vốn 8.3tr

Jason có thể chọn con số nào đó ở giữa, tuỳ mức độ tự tin. BG khuyên bắt đầu với **1% rủi ro**.

## Quy Tắc Tổng Thể

1. **Mỗi lệnh: rủi ro 0.5-2% tài khoản**
2. **Tổng rủi ro tất cả lệnh đang mở: không quá 6%**
3. **Tổng vốn dùng: không quá 70% tài khoản** (luôn giữ 30% tiền mặt)
4. **Tối đa 5-8 lệnh cùng lúc** (tránh loãng)

## Bài Tập Nhỏ

TK 150 triệu. Mua HPG giá 28,000. Stop loss 26,500.

1. Rủi ro trên 1 cổ?
2. Rủi ro 1% cho phép là bao nhiêu?
3. Số cổ nên mua?
4. Vốn cần để mua số cổ đó?

Đáp án: (1) 28,000 - 26,500 = 1,500/cp. (2) 150tr × 1% = 1.5tr. (3) 1.5tr / 1,500 = 1,000 cổ. (4) 1,000 × 28,000 = 28tr.

---

**Bài 44:** Risk-Reward Ratio — RR 1:2, 1:3 — cách tính và chọn tỷ lệ phù hợp.

— BG 🏠
