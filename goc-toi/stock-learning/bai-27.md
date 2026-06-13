# Bài 27: Cách Tính Pivot Point — Công Thức Cổ Điển

## 📌 Mở đầu

Bài trước BG giới thiệu Pivot Point là gì. Hôm nay đi vào con số cụ thể — **cách tính Pivot Point chuẩn cổ điển**.

Nếu cậu dùng TradingView, nó tự tính giùm. Nhưng **hiểu cách tính** mới hiểu bản chất. Và biết khi nào nó có vấn đề.

---

## 1. Công Thức Cổ Điển

### Bước 1: Tính Pivot Point (PP)

```
PP = (High + Low + Close) / 3
```

Trong đó:
- **High** = giá cao nhất phiên hôm qua
- **Low** = giá thấp nhất phiên hôm qua
- **Close** = giá đóng cửa hôm qua

### Bước 2: Tính các mức Resistance (R1, R2, R3)

```
R1 = (2 × PP) - Low
R2 = PP + (High - Low)
R3 = High + 2 × (PP - Low)
```

### Bước 3: Tính các mức Support (S1, S2, S3)

```
S1 = (2 × PP) - High
S2 = PP - (High - Low)
S3 = Low - 2 × (High - PP)
```

---

## 2. Ví Dụ Cụ Thể — FPT

Giả sử hôm qua FPT:
- **High:** 132,000
- **Low:** 128,000
- **Close:** 130,000

### Tính PP:
```
PP = (132,000 + 128,000 + 130,000) / 3
PP = 390,000 / 3
PP = 130,000
```

### Tính R1:
```
R1 = (2 × 130,000) - 128,000
R1 = 260,000 - 128,000
R1 = 132,000
```

### Tính S1:
```
S1 = (2 × 130,000) - 132,000
S1 = 260,000 - 132,000
S1 = 128,000
```

### Tính R2:
```
R2 = 130,000 + (132,000 - 128,000)
R2 = 130,000 + 4,000
R2 = 134,000
```

### Tính S2:
```
S2 = 130,000 - (132,000 - 128,000)
S2 = 130,000 - 4,000
S2 = 126,000
```

### Tính R3:
```
R3 = 132,000 + 2 × (130,000 - 128,000)
R3 = 132,000 + 2 × 2,000
R3 = 132,000 + 4,000
R3 = 136,000
```

### Tính S3:
```
S3 = 128,000 - 2 × (132,000 - 130,000)
S3 = 128,000 - 2 × 2,000
S3 = 128,000 - 4,000
S3 = 124,000
```

---

## 3. Nhìn Vào Con Số, Hiểu Được Gì?

Với FPT hôm nay, các mức pivot là:

| Mức | Giá |
|-----|-----|
| R3 | 136,000 |
| R2 | 134,000 |
| R1 | 132,000 |
| **PP** | **130,000** |
| S1 | 128,000 |
| S2 | 126,000 |
| S3 | 124,000 |

**Quan sát:**
- R1 (132,000) = High hôm qua — không ngẫu nhiên. Giá hôm qua đã chững ở 132.
- S1 (128,000) = Low hôm qua — cũng vậy.
- PP (130,000) = Close hôm qua — vì hôm nay cũng đóng ở giá đó.

**Cậu thấy chưa:** Pivot Point không phải bói toán. Nó chỉ là **mở rộng tự nhiên** từ biến động hôm qua. Nhưng chính sự đơn giản này lại hiệu quả vì ai cũng tính ra cùng một số.

---

## 4. Tại Sao Mỗi Mức Cách Nhau Một Khoảng?

Khoảng cách giữa các mức = **range của hôm qua** (High - Low).

Trong ví dụ trên:
- Range = 132,000 - 128,000 = 4,000
- R2 = PP + range = 130,000 + 4,000 = 134,000
- S2 = PP - range = 130,000 - 4,000 = 126,000

**Ý nghĩa:** Nếu hôm qua giá dao động 4,000đ, thì mỗi mức pivot cách nhau cũng tầm đó. Hôm qua càng biến động mạnh → các mức càng xa nhau → khó chạm hơn.

**Cách đọc:**
- Range hẹp (1,000-2,000) → pivot gần nhau, giá dễ chạm
- Range rộng (5,000-10,000) → pivot xa nhau, trade ít hơn nhưng chất lượng hơn

---

## 5. Mẹo Khi Tính Tay

Cậu không cần tính tay mỗi ngày — TradingView tự làm. Nhưng BG khuyên:

1. **Tính tay 1-2 lần** để hiểu bản chất
2. Sau đó để indicator tự vẽ
3. Nhưng **kiểm tra lại indicator** — đôi khi nó dùng công thức khác (Woodie, Camarilla...)

---

## 🎯 Kết Luận

**Nhớ:**
- PP = (H + L + C) / 3 — điểm cân bằng
- R1 = 2PP - L, S1 = 2PP - H — mức đầu tiên
- R2 = PP + range, S2 = PP - range — mức thứ hai
- R3, S3 — mức xa, ít chạm hơn nhưng mạnh hơn

---

**Bài tập nhỏ:**
Hôm qua HPG có High = 28,500, Low = 27,500, Close = 28,000.
1. Tính PP, R1, R2, S1, S2 bằng tay.
2. Mở TradingView, thêm Pivot Point Standard, check xem có khớp không.
3. Nếu khác — tự hỏi tại sao? (có thể indicator dùng khung khác)

Bài sau: Pivot Point vùng support/resistance — cách dùng thực chiến.

— BG 🏠
