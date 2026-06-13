# Bài 37: Take Profit Cho Pivot Trade

## 📌 Mở đầu

Bài trước: biết thoát lệnh khi sai (stop loss). Bài này: biết **thoát lệnh khi đúng** (take profit).

Nhiều trader biết cách vào lệnh, biết đặt stop, nhưng **không biết chốt lời** — hoặc chốt quá sớm, hoặc để lợi nhuận chạy rồi quay đầu.

Với pivot trade, các mục tiêu lợi nhuận rất rõ ràng: chính là các mức pivot tiếp theo.

---

## 1. Mục Tiêu Lợi Nhuận Tự Nhiên

Khi vào lệnh tại pivot này, mục tiêu là pivot tiếp theo.

### Long — Mục tiêu:

| Vào lệnh tại | TP1 (ngắn) | TP2 (trung) | TP3 (dài) |
|-------------|-----------|------------|-----------|
| S3 | S2 | S1 | PP |
| S2 | S1 | PP | R1 |
| S1 | PP | R1 | R2 |
| PP (từ dưới lên) | R1 | R2 | R3 |

### Short — Mục tiêu:

| Vào lệnh tại | TP1 (ngắn) | TP2 (trung) | TP3 (dài) |
|-------------|-----------|------------|-----------|
| R3 | R2 | R1 | PP |
| R2 | R1 | PP | S1 |
| R1 | PP | S1 | S2 |
| PP (từ trên xuống) | S1 | S2 | S3 |

---

## 2. Phương Pháp Chốt Lời

### Cách 1: Chốt 1 lần tại TP duy nhất

Đơn giản nhất: vào lệnh, đặt TP tại mức pivot tiếp theo.

**Ví dụ:**
```
Long tại S1 = 128,000
TP tại PP = 130,000
→ Lời 2,000đ/cp (~1.56%)
```

**Khi nào dùng:** Trade đơn giản, khung Daily, không muốn phức tạp.

### Cách 2: Chia TP làm 2 phần (Khuyến nghị)

50% TP1 (gần), 50% TP2 (xa hơn).

**Ví dụ:**
```
Long 1,000 FPT tại S1 = 128,000
- TP1: 500cp tại PP = 130,000 (lời 2,000/cp)
- TP2: 500cp tại R1 = 132,000 (lời 4,000/cp)
→ Trung bình lời 3,000/cp
```

**Tại sao nên làm vậy?**
- TP1 giúp cậu có lợi nhuận ngay — giảm áp lực tâm lý
- TP2 cho cậu cơ hội lời nhiều hơn nếu trend tiếp diễn

### Cách 3: Trailing TP — Kéo theo ATR

Không đặt TP cố định. Khi giá chạm R1, kéo stop loss lên breakeven và để giá chạy.

**Ví dụ:**
```
Long tại S1 = 128,000
→ Giá lên 130,500 (trên PP) → kéo SL lên 129,000 (lời 1,000/cp)
→ Giá lên 131,500 → kéo SL lên 130,500 (lời 2,500/cp)
→ Giá lên 133,000 → kéo SL lên 132,000 (lời 4,000/cp)
```

**Khi nào dùng:** Khi trend rất mạnh, volume lớn, khả năng giá tiếp tục lên R2/R3.

---

## 3. Tính RR (Risk-Reward) Cho Pivot Trade

Mỗi lệnh phải có RR rõ ràng trước khi vào.

### Công thức:
```
RR = (TP - Entry) / (Entry - SL) đối với Long
RR = (Entry - TP) / (SL - Entry) đối với Short
```

### Ví dụ Long:
```
Entry: 128,000 (S1)
SL: 126,500 (dưới S1 1.5%)
TP1: 130,000 (PP) — lời 2,000
TP2: 132,000 (R1) — lời 4,000

RR (TP1): 2,000 / 1,500 = 1:1.33
RR (TP2): 4,000 / 1,500 = 1:2.67
RR trung bình (50/50): 3,000 / 1,500 = 1:2
```

### RR tối thiểu:

| Loại trade | RR tối thiểu | Khuyến nghị |
|-----------|-------------|-------------|
| Trend mạnh | 1:1.5 | 1:2 |
| Sideways | 1:2 | 1:3 |
| Reversal (đảo chiều) | 1:2 | 1:3 |

**Luật:** Không trade nếu RR < 1:1.5. Càng thấp, càng dễ thua về lâu dài.

---

## 4. Yếu Tố Ảnh Hưởng Đến TP

### Volume
- Volume cao → khả năng giá tiếp cận TP xa hơn (R2/R3)
- Volume thấp → chốt sớm tại TP gần (PP/R1)

### ATR
- ATR lớn → giá dễ chạy đến mục tiêu xa
- ATR nhỏ → có thể giá không đủ động lực

### Thời gian
- Đầu tháng: mục tiêu xa hơn (weekly/monthly pivot)
- Cuối tuần: chốt sớm, không giữ qua cuối tuần

---

## 5. Ví Dụ Hoàn Chỉnh — Từ Entry Đến TP

### Case: FPT Long từ S1

```
Entry: LO mua 1,000 FPT giá 128,000 (S1)
SL: 126,500 (dưới S1 ~1.17%)

Kế hoạch TP:
- TP1: 500cp tại 130,000 (PP) — lời 2,000/cp = 1,000,000
- TP2: 500cp tại 132,000 (R1) — lời 4,000/cp = 2,000,000

RR:
- TP1: 2,000 / 1,500 = 1:1.33
- TP2: 4,000 / 1,500 = 1:2.67
- TB: 3,000 / 1,500 = 1:2

Diễn biến:
Hôm 1: Giá chạm 128,000 → khớp → xuống 127,200 → bật lên 129,000
Hôm 2: Giá lên 130,000 → chốt 500cp → kéo SL cho 500cp còn lại lên 128,500
Hôm 3: Giá lên 132,000 → chốt 500cp còn lại
Kết quả: Lời 3 củ, thua lỗ nếu SL chạm: 1.5 củ
```

---

## 6. Sai Lầm TP Thường Gặp

### Sai lầm 1: Chốt quá sớm (khi chưa đến TP)
```
"Ôi lời 500đ rồi, chốt đi cho lành"
→ Giá lên tiếp 3,000đ
→ FOMO mua lại ở giá cao
```

**Cách khắc phục:** Có kế hoạch TP từ trước. Không chốt sớm trừ khi có tín hiệu đảo chiều rõ ràng.

### Sai lầm 2: Không chốt khi đến TP
```
"R1 mới là mục tiêu, nhưng giá đến PP rồi, thôi chờ thêm tí"
→ Giá quay đầu xuống S1
→ Lời hoá lỗ
```

**Cách khắc phục:** Tôn trọng kế hoạch. Nếu muốn để chạy, ít nhất kéo SL lên breakeven.

### Sai lầm 3: Tham lam — đợi R3 khi chỉ nên lấy R1
```
Vào long tại S1
Mục tiêu ban đầu: R1
"Thấy volume mạnh, chờ R3 luôn"
→ Giá quay đầu tại R2 → lời ít hơn
```

**Cách khắc phục:** Chốt 50% tại TP1, để 50% chạy.

---

## 🎯 Kết Luận

**Cốt lõi:**
1. TP tự nhiên của pivot trade = pivot tiếp theo
2. Chia làm 2 phần: TP1 gần (50%), TP2 xa (50%)
3. RR tối thiểu 1:1.5, khuyến nghị 1:2 trở lên
4. Volume, ATR, thời gian ảnh hưởng đến TP
5. Tôn trọng kế hoạch — đừng tham lam, đừng sợ hãi

---

**Bài tập nhỏ:**
HPG:
- Long tại S1 = 26,800
- SL = 26,000 (dưới S1 3%)
- PP = 28,000, R1 = 29,200, R2 = 30,500

1. TP1 và TP2 nên đặt ở đâu?
2. Tính RR cho cả 2 TP
3. Nếu TP1 chốt 50%, TP2 chốt 50% — RR trung bình là bao nhiêu?
4. Giải thích tại sao cậu chọn TP đó (dựa vào volume/ATR?)

Bài sau: Fakeout pivot — cách nhận biết.

— BG 🏠
