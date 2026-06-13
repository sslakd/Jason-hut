# Bài 43: Position Sizing — Vào Bao Nhiêu

Từ Kelly ra thực tế. Tính nhẩm 5 giây ra số cổ cần mua.

---

## Công thức cơ bản

Số cổ = (Rủi ro cho phép) / (Rủi ro mỗi cổ)

Rủi ro cho phép = Tài khoản × % rủi ro mỗi lệnh.
Rủi ro mỗi cổ = Giá vào - Stop loss (với long).

Ví dụ: TK 100 triệu, rủi ro 1% mỗi lệnh = 1 triệu. Giá vào 20.000, stop 19.000 (rủi ro 1.000/cp). Số cổ = 1.000.000 / 1.000 = 1.000 cổ.

---

## Các cách tính

**Cách 1 — Tính theo % tài khoản (Kelly):**
TK 100 triệu, Kelly cho 10%. Giá vào 20.000. Số cổ = 10.000.000 / 20.000 = 500 cổ. Đơn giản nhất.

**Cách 2 — Tính theo rủi ro cố định:**
TK 100 triệu, rủi ro 1% = 1 triệu. Stop cách entry 1.000. Số cổ = 1.000.000 / 1.000 = 1.000 cổ.

**Cách 3 — Tính theo số cổ tối thiểu:**
Với HOSE, 1 lệnh tối thiểu 100 cổ. Với cổ giá cao (VNM 80.000), 100 cổ = 8 triệu. Cần tài khoản đủ lớn.

---

## Bảng tra nhanh

TK 50 triệu, rủi ro 1% = 500.000:

| Cách entry-stop | Số cổ mua | Số tiền |
|----------------|-----------|---------|
| 20.000 - 19.500 (500đ) | 1.000 | 20 triệu |
| 20.000 - 19.000 (1.000đ) | 500 | 10 triệu |
| 50.000 - 48.000 (2.000đ) | 250 | 12.5 triệu |
| 80.000 - 77.000 (3.000đ) | 166 | 13.3 triệu |

Số tiền vào lệnh có thể lớn nhưng rủi ro chỉ 1%. Đó là sức mạnh của position sizing.

---

## Quy tắc số cổ tối thiểu

HOSE: 100 cổ/lệnh, bội số của 10. HNX: 100 cổ/lệnh, bội số của 100. UPCOM: 100 cổ/lệnh.

Với cổ giá 80.000 (VNM): 100 cổ = 8 triệu. Với cổ giá 20.000 (VPB): 100 cổ = 2 triệu. Cổ giá thấp dễ position sizing hơn.

---

## Ví dụ thực chiến

TK 200 triệu. Rủi ro 1.5%/lệnh = 3 triệu. FPT: vào 130.000, stop 127.000 (rủi ro 3.000). Số cổ = 3.000.000 / 3.000 = 1.000 cổ.

Số tiền bỏ ra: 1.000 × 130.000 = 130 triệu (65% TK). Rủi ro thực tế: 3 triệu (1.5% TK). Đây là lý do nhiều người thấy 65% TK và nghĩ "nhiều quá" — nhưng rủi ro thực tế chỉ 1.5% nếu stop đúng.

---

## Quy tắc tổng thể

Mỗi lệnh rủi ro 1-2% tài khoản. Tổng rủi ro tất cả lệnh không quá 6%. Không margin cho đến khi có > 100 lệnh thống kê. Điều chỉnh position size theo ATR: cổ biến động cao → position nhỏ hơn.

Bài 43: Position Sizing
