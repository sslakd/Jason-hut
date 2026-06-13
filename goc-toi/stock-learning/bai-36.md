# Bài 36: Stop Loss Cho Pivot Trade

## 📌 Mở đầu

Bài trước BG dạy vào lệnh. Bài này dạy **thoát lệnh khi sai** — còn quan trọng hơn vào lệnh.

Trong trading, cậu sẽ đúng tầm 40-50% số lần. Nhưng nếu biết cắt lỗ đúng, cậu vẫn có lợi nhuận cuối tháng. Nếu không biết cắt lỗ, 1 lần sai có thể xoá sạch 10 lần đúng.

Đặc biệt với pivot trade — vì chúng ta canh tại các mức giá cụ thể, nên stop loss cũng phải cụ thể.

---

## 1. Nguyên Tắc Vàng: Đặt Stop Loss Trước Entry

**Luật bất di bất dịch:**
> Trước khi đặt lệnh entry, cậu phải biết stop loss ở đâu.

Không "để xem sao". Không "chờ thêm tí nữa". Không "chắc nó sẽ quay lại".

Stop loss là **bảo hiểm** — không có bảo hiểm thì đừng lái xe.

---

## 2. Stop Loss Cho Long (Mua Tại Support)

### Nguyên tắc: Dưới mức pivot 1 vùng

Khi long tại S1, S2, hoặc PP:

**Stop loss cơ bản:**
```
Long tại S1 = 128,000
→ Stop loss = dưới S1 0.5-1.5% 
→ Cụ thể: 126,500 - 127,400
```

**Tại sao không đặt ngay dưới S1?**
Vì giá có thể chạm S1 rồi "cắt xuống 1 tí" để quét stop trước khi bật lên — gọi là **liquidity sweep**. Cần cho 1 khoảng an toàn.

### Các mức stop cụ thể:

| Vào lệnh tại | Stop loss |
|-------------|-----------|
| S1 | Dưới S1 0.5-1.5% hoặc dưới S2 |
| PP (từ dưới lên) | Dưới PP 1% hoặc S1 |
| S2 | Dưới S2 0.5-1% hoặc S3 |

### Ví dụ:
```
MWG long tại S1 = 54,500
Stop loss = 53,800 (dưới S1 ~1.3%)
Hoặc chặt hơn: 54,000 (dưới S1 ~0.9%)
```

---

## 3. Stop Loss Cho Short (Bán Tại Kháng Cự)

### Nguyên tắc: Trên mức pivot 1 vùng

Khi short tại R1, R2:

**Stop loss cơ bản:**
```
Short tại R1 = 132,000
→ Stop loss = trên R1 0.5-1.5%
→ Cụ thể: 132,700 - 134,000
```

### Các mức stop cụ thể:

| Vào lệnh tại | Stop loss |
|-------------|-----------|
| R1 | Trên R1 0.5-1.5% hoặc R2 |
| PP (từ trên xuống) | Trên PP 1% hoặc R1 |
| R2 | Trên R2 0.5-1% hoặc R3 |

### Ví dụ:
```
FPT short tại R1 = 132,000
Stop loss = 133,000 (trên R1 ~0.75%)
Hoặc chặt hơn: 132,500 (trên R1 ~0.38%)
```

---

## 4. Độ Rộng Stop Loss — Khoa Học Hay Nghệ Thuật?

### Yếu tố 1: ATR — Average True Range

ATR đo biến động trung bình của cổ phiếu. Stop loss nên dựa trên ATR.

**Công thức:**
```
Stop loss = Pivot +/- (ATR × 1.5)
```

**Ví dụ:**
```
HPG ATR = 800
Long tại S1 = 26,800
Stop loss = 26,800 - (800 × 1.5) = 26,800 - 1,200 = 25,600
```

### Yếu tố 2: Cấu trúc thị trường

Nếu gần S1 có đáy cũ:
```
S1 = 50,000
Đáy cũ gần nhất = 49,500
→ Stop loss = 49,400 (dưới đáy cũ 1 tí)
```

### Yếu tố 3: Risk trên mỗi lệnh

Đừng để stop loss quá rộng làm mất quá nhiều % tài khoản.

**Nguyên tắc:**
```
1 lệnh rủi ro tối đa = 1-2% tài khoản
Ví dụ: TK 50 triệu → rủi ro tối đa 500k-1tr/lệnh
```

---

## 5. Các Loại Stop Loss Cho Pivot Trade

### Loại 1: Fixed Stop — Cố định từ đầu

Đặt stop loss ngay khi vào lệnh, không thay đổi.

**Dùng khi:** Cậu không thể theo dõi chart liên tục, hoặc trade khung Daily.

### Loại 2: Trailing Stop — Kéo theo giá

Khi giá đi đúng hướng, kéo stop loss lên/xuống theo.

**Dùng khi:** Trade intraday, có thể theo dõi.

### Loại 3: Volatility Stop — Dựa trên ATR

Stop loss = entry +/- (ATR × hệ số)

**Dùng khi:** Cổ phiếu biến động mạnh, cần stop rộng hơn.

---

## 6. Khi Nào Nên Chấp Nhận Stop Loss Rộng Hơn?

### Trường hợp 1: Pivot weekly/monthly
Weekly/monthly pivot có biên độ lớn → stop rộng tự nhiên.

### Trường hợp 2: Tin tức quan trọng
Trước tin tức (lãi suất, CPI, ĐHCĐ), biến động cao → stop rộng hơn hoặc không trade.

### Trường hợp 3: Cổ phiếu biến động mạnh
Cổ VN30 thường 1-2%/ngày. Cổ penny có thể 5-7%. Stop rộng tương ứng.

---

## 7. Sai Lầm Stop Loss Thường Gặp

### Sai lầm 1: Stop quá hẹp
```
Long S1 = 50,000, stop 49,800 (0.4%)
→ Giá xuống 49,900 rồi bật lên 51,000
→ Bị quét stop — mất cơ hội
```

### Sai lầm 2: Stop quá rộng
```
Long S1 = 50,000, stop 45,000 (10%)
→ Nếu sai → mất 10% tài khoản
→ Mất nhiều hơn lãi của 3-4 lệnh đúng
```

### Sai lầm 3: Dời stop xa hơn khi đang lỗ
```
"Ủa, stop ở 49,800 nhưng giá xuống 49,700..."
→ Dời stop xuống 49,000
→ "Chắc nó bật lên mà..."
→ Giá xuống 48,000
```

**Hành vi này gọi là "hope trading" — đang hi vọng thay vì hành động. Đây là cách nhanh nhất để cháy tài khoản.**

---

## 8. Bảng Stop Loss Tham Khảo

| Mức pivot | Hướng | Stop loss (%) | Ghi chú |
|-----------|-------|---------------|---------|
| S1 | Long | 0.5-1.5% dưới S1 | Tiêu chuẩn |
| S2 | Long | 0.5-1% dưới S2 | Chặt hơn vì xa hơn |
| PP | Long | 1% dưới PP | Đợi breakout xác nhận |
| R1 | Short | 0.5-1.5% trên R1 | Tiêu chuẩn |
| R2 | Short | 0.5-1% trên R2 | Chặt hơn |
| PP | Short | 1% trên PP | Đợi breakdown xác nhận |

---

## 🎯 Kết Luận

**Cốt lõi:**
- Stop loss đặt TRƯỚC entry — không có ngoại lệ
- Stop dưới pivot 0.5-1.5% tuỳ ATR và cổ phiếu
- Cho stop 1 khoảng an toàn — tránh liquidity sweep
- Đừng stop quá hẹp (dễ bị quét) hay quá rộng (mất nhiều)
- Không dời stop xa hơn khi đang lỗ — cắt và sống để trade ngày khác

---

**Bài tập nhỏ:**
Với HPG:
- Long tại S1 = 26,800
- HPG ATR = 800
- Tài khoản: 50 triệu, rủi ro tối đa 1% mỗi lệnh

1. Stop loss hợp lý là bao nhiêu? (% và giá)
2. Tính số cổ có thể mua để rủi ro không quá 1% TK
3. Nếu HPG ATR = 1,200 (biến động cao) — stop thay đổi thế nào?

Bài sau: Take profit cho pivot trade.

— BG 🏠
