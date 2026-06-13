# Bài 27: Cách Tính Pivot Point — Công Thức Cổ Điển

TradingView tự tính pivot, nhưng hiểu cách tính mới hiểu bản chất. Và biết khi nào kết quả có vấn đề.

---

## Công thức gốc

**Bước 1: Pivot Point (PP)**

PP = (High + Low + Close) / 3

High = giá cao nhất phiên trước, Low = giá thấp nhất, Close = giá đóng cửa.

**Bước 2: Resistance**

R1 = (2 × PP) - Low
R2 = PP + (High - Low)
R3 = High + 2 × (PP - Low)

**Bước 3: Support**

S1 = (2 × PP) - High
S2 = PP - (High - Low)
S3 = Low - 2 × (High - PP)

---

## Ví dụ với FPT

Hôm qua FPT: High = 132.000, Low = 128.000, Close = 130.000

PP = (132.000 + 128.000 + 130.000) / 3 = 130.000

R1 = (2 × 130.000) - 128.000 = 132.000
R2 = 130.000 + (132.000 - 128.000) = 134.000
R3 = 132.000 + 2 × (130.000 - 128.000) = 136.000

S1 = (2 × 130.000) - 132.000 = 128.000
S2 = 130.000 - (132.000 - 128.000) = 126.000
S3 = 128.000 - 2 × (132.000 - 130.000) = 124.000

Kết quả:

| Mức | Giá |
|-----|-----|
| R3 | 136.000 |
| R2 | 134.000 |
| R1 | 132.000 |
| PP | 130.000 |
| S1 | 128.000 |
| S2 | 126.000 |
| S3 | 124.000 |

---

## Nhận xét từ con số

R1 = 132.000 = High hôm qua. Không ngẫu nhiên — giá hôm qua đã chững ở 132.
S1 = 128.000 = Low hôm qua. Cũng vậy.
PP = 130.000 = Close hôm qua.

Pivot Point không phải bói toán. Nó chỉ là mở rộng tự nhiên từ biến động hôm qua. Chính sự đơn giản này lại hiệu quả vì ai cũng tính ra một số.

---

## Khoảng cách giữa các mức

Khoảng cách = range hôm qua (High - Low).

Ví dụ trên: range = 132.000 - 128.000 = 4.000
R2 = PP + range = 130.000 + 4.000 = 134.000
S2 = PP - range = 130.000 - 4.000 = 126.000

- Range hẹp (1.000-2.000) → pivot gần nhau, giá dễ chạm
- Range rộng (5.000-10.000) → pivot xa nhau, ít chạm hơn nhưng chất lượng hơn

---

## Mẹo thực tế

Không cần tính tay mỗi ngày — TradingView tự làm. Nhưng nên tính tay 1-2 lần để hiểu bản chất. Sau đó kiểm tra lại indicator — đôi khi nó dùng công thức khác (Woodie, Camarilla).

---

## Bài tập

Hôm qua HPG: High = 28.500, Low = 27.500, Close = 28.000. Tính PP, R1, R2, S1, S2 bằng tay. Mở TradingView kiểm tra có khớp không.

Bài 27: Cách Tính Pivot Point
