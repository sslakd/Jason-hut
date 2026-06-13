# Bài 39: Pivot + Trend — Trade Theo Xu Hướng

## 📌 Mở đầu

Đây là bài kết hợp pivot với **nguyên tắc quan trọng nhất trong trading**: trade theo trend.

Pivot Point giúp cậu biết **vùng giá cụ thể**. Trend giúp cậu biết **trade hướng nào**.
Kết hợp cả 2 → cậu biết **trade hướng nào, tại vùng nào**.

**Nguyên tắc vàng:**
> Pivot + Trend → tín hiệu mạnh. Pivot chống trend → tín hiệu yếu, fakeout nhiều.

---

## 1. Xác Định Trend Với Pivot

### Trend tăng

Khi các mức pivot đều **dịch chuyển lên** qua các phiên.

```
Phiên 1: PP = 128, R1 = 130, S1 = 126
Phiên 2: PP = 129, R1 = 131, S1 = 127
Phiên 3: PP = 130, R1 = 132, S1 = 128

→ PP tăng dần → thị trường đang đi lên → trend tăng
```

### Trend giảm

Khi các mức pivot đều **dịch chuyển xuống**.

```
Phiên 1: PP = 130, R1 = 132, S1 = 128
Phiên 2: PP = 129, R1 = 131, S1 = 127
Phiên 3: PP = 127, R1 = 129, S1 = 125

→ PP giảm dần → thị trường đang đi xuống → trend giảm
```

### Sideways

Khi các PP loanh quanh 1 vùng trong nhiều phiên.

```
PP dao động 128-130 trong 1 tuần
→ Không trend → giao dịch cẩn thận
```

---

## 2. Cách Dùng SMA Để Xác Định Trend

Kết hợp pivot với SMA 50 và SMA 200.

### Uptrend (SMA50 > SMA200)

```
- Giá trên SMA50 và SMA200
- Các pivot nằm trên SMA50
- R1, R2 thường bị phá vỡ (breakout)
- S1, S2 thường là điểm mua tốt
```

**Chiến thuật:**
- **Ưu tiên LONG** — mua tại S1, PP
- Hạn chế SHORT — chỉ short khi R1 có tín hiệu fakeout rõ
- R1 thường là cản tạm thời, R2 mới là cản thật

### Downtrend (SMA50 < SMA200)

```
- Giá dưới SMA50 và SMA200
- Các pivot nằm dưới SMA50
- S1, S2 thường bị phá vỡ (breakdown)
- R1, R2 thường là điểm bán tốt
```

**Chiến thuật:**
- **Ưu tiên SHORT** — bán tại R1, PP
- Hạn chế LONG — chỉ long khi S1 có tín hiệu bật lên rõ
- S1 thường là cản tạm thời, S2 mới là cản thật

### Sideways (SMA50 và SMA200 giao nhau hoặc nằm ngang)

```
- Giá quanh SMA50, SMA200
- PP ít thay đổi
- Các mức R/S thường bị chạm nhiều lần
```

**Chiến thuật:**
- **Trade range** — mua tại S1, bán tại R1
- Không giữ lệnh lâu
- TP nhanh, stop hẹp

---

## 3. Bảng Chiến Thuật Cho Từng Trend

### Uptrend — Chi tiết

| Tình huống | Hành động | Mức độ |
|-----------|-----------|--------|
| Giá hồi về S1 trong uptrend | Long mạnh | 🟢 Rất tốt |
| Giá hồi về PP trong uptrend | Long | 🟢 Tốt |
| Giá chạm R1 trong uptrend | Không short — có thể chờ breakout | 🟡 Thận trọng |
| Giá phá R1 trong uptrend | Long theo breakout | 🟢 Tốt |

### Downtrend — Chi tiết

| Tình huống | Hành động | Mức độ |
|-----------|-----------|--------|
| Giá hồi về R1 trong downtrend | Short mạnh | 🟢 Rất tốt |
| Giá hồi về PP trong downtrend | Short | 🟢 Tốt |
| Giá chạm S1 trong downtrend | Không long — có thể chờ breakdown | 🟡 Thận trọng |
| Giá phá S1 trong downtrend | Short theo breakdown | 🟢 Tốt |

### Sideways — Chi tiết

| Tình huống | Hành động | Mức độ |
|-----------|-----------|--------|
| Giá chạm S1 | Long, TP tại R1 | 🟢 Tốt |
| Giá chạm R1 | Short, TP tại S1 | 🟢 Tốt |
| Giá ở PP | Không trade — chờ 1 trong 2 hướng | 🟡 Chờ |

---

## 4. Ví Dụ Cụ Thể

### Ví dụ 1: Uptrend — FPT

```
PP tuần trước: 127, PP tuần này: 130 (tăng)
SMA50 = 125 (dưới giá), SMA200 = 118
→ Trend tăng rõ

Hôm nay: PP = 130, R1 = 132, S1 = 128

Kịch bản:
- Giá hồi về S1 128 → LONG (ưu tiên số 1)
- Giá hồi về PP 130 → LONG thêm
- Giá chạm R1 132 → không short
→ Nếu vượt R1 → long thêm, chờ R2
```

### Ví dụ 2: Downtrend — HPG

```
PP tuần trước: 29, PP tuần này: 27 (giảm)
SMA50 = 29 (trên giá), SMA200 = 26
→ Trend giảm

Hôm nay: PP = 27, R1 = 28.5, S1 = 25.5

Kịch bản:
- Giá hồi về R1 28.5 → SHORT (ưu tiên số 1)
- Giá hồi về PP 27 → SHORT thêm
- Giá chạm S1 25.5 → không long
→ Nếu vỡ S1 → short thêm, chờ S2
```

### Ví dụ 3: Sideways — MWG

```
PP loanh quanh 55-56 trong 2 tuần
SMA50 = SMA200 = 55
→ Sideways

Hôm nay: PP = 55.5, R1 = 57, S1 = 54

Kịch bản:
- Chạm S1 54 → LONG, TP 57 (R1)
- Chạm R1 57 → SHORT, TP 54 (S1)
- Không giữ lệnh qua đêm
```

---

## 5. Sai Lầm Khi Trade Trend + Pivot

### Sai lầm 1: Chống trend

```
Uptrend mạnh: PP tăng dần 3 phiên
→ "Chạm R1 rồi, chắc quay đầu, short thôi"
→ Giá phá R1, chạy tiếp 3%
→ Stop loss bị quét, mất tiền
```

**Giải pháp:** Khi uptrend, chỉ long. Không short trừ khi có fakeout rõ ràng.

### Sai lầm 2: Bỏ trend chỉ nhìn pivot

```
Downtrend, PP giảm dần
→ "Chạm S1 rồi, RSI oversold, mua đáy"
→ Giá thủng S1, xuống tiếp 5%
```

**Giải pháp:** Trend là vua. Pivot là công cụ. Khi pivot và trend mâu thuẫn — **theo trend**.

### Sai lầm 3: Không phân biệt pivot daily vs trend weekly

```
Daily uptrend -> long tại PP
Nhưng weekly đang downtrend
→ Có thể daily chỉ là hồi phục trong downtrend lớn hơn
```

**Giải pháp:** Luôn check weekly/monthly trend trước. Daily chỉ trade trong khuôn khổ của weekly.

---

## 🎯 Kết Luận

**Cốt lõi:**
1. Trend tăng → ưu tiên long tại S1, PP
2. Trend giảm → ưu tiên short tại R1, PP
3. Sideways → trade range, chốt nhanh
4. Pivot + trend cùng hướng = tín hiệu mạnh
5. Pivot chống trend = fakeout nhiều, thận trọng
6. Trend là vua. Pivot là tôi tớ.

---

**Bài tập nhỏ:**
Mở TradingView, chọn FPT khung Daily.
1. Xác định trend hiện tại (dùng SMA50/200 hoặc PP dịch chuyển)
2. Ghi lại PP, R1, S1 hôm nay
3. Viết kế hoạch:
   - Nếu uptrend → canh long ở đâu?
   - Nếu downtrend → canh short ở đâu?
   - Nếu sideways → range nào?

Bài sau: Ôn tập Phase 3 — bài kiểm tra tổng hợp.

— BG 🏠
