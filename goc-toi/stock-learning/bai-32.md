# Bài 32: Pivot Với Fibonacci — Kết Hợp Mạnh Mẽ

## 📌 Mở đầu

Phase 2 (bài 17) cậu đã học Fibonacci Retracement — vùng giá hồi phục sau một sóng tăng/giảm.

Hôm nay BG chỉ cách kết hợp **Fibonacci + Pivot Point**. Đây là một trong những combo mạnh nhất — vì cả 2 đều dựa trên toán học, cả 2 đều cho cậu các mức giá cụ thể.

Khi Pivot và Fibonacci **trùng nhau** → vùng đó cực kỳ quan trọng.

---

## 1. Tại Sao Pivot + Fibonacci Lại Mạnh?

Pivot Point: tính từ High/Low/Close hôm qua — phản ánh tâm lý ngắn hạn.
Fibonacci Retracement: tính từ một sóng giá lớn hơn — phản ánh cấu trúc thị trường.

Khi cả 2 cùng chỉ vào một vùng giá:

- **Pivot nói:** "Hôm qua giá đã phản ứng ở đây"
- **Fibonacci nói:** "Sóng này hồi về 0.618"
- 2 tín hiệu khác nhau, cùng 1 kết luận → **xác suất cao hơn**

---

## 2. Các Vùng Trùng Phổ Biến

Khi vẽ Fibonacci từ đáy (sóng tăng) lên đỉnh:

| Fibonacci | Pivot thường gặp | Ý nghĩa |
|-----------|-----------------|---------|
| 0.382 | R1 hoặc PP | Hồi nhẹ — trend mạnh |
| 0.500 | PP | Hồi giữa — neutral |
| **0.618** | **R1 hoặc S1** | **Quan trọng nhất** |
| 0.786 | R2 hoặc S2 | Hồi sâu — trend yếu |
| 1.000 | R2 hoặc S2 | Về lại điểm bắt đầu |

### 0.618 + R1 hoặc S1 = Bộ đôi vàng

Đây là vùng mạnh nhất. Fibonacci 0.618 là golden ratio. Pivot R1/S1 là mức đầu tiên. Khi trùng nhau:

- Sóng giảm chạm S1 + Fib 0.618 → **điểm mua mạnh**
- Sóng tăng chạm R1 + Fib 0.618 → **điểm bán mạnh**

---

## 3. Ví Dụ Cụ Thể

### Ví dụ: FPT — Sóng tăng từ 120,000 lên 135,000

```
Fib vẽ từ 120,000 (đáy) lên 135,000 (đỉnh):
- 0.382 = 129,270
- 0.500 = 127,500
- 0.618 = 125,730
- 0.786 = 123,210

Pivot hôm nay:
- PP = 128,000
- S1 = 126,000
- S2 = 124,000
```

**Phân tích:**
- Fib 0.618 = 125,730 và S1 = 126,000 → **gần nhau** (chênh ~270đ)
- Đây là vùng mua mạnh tiềm năng

**Kịch bản:**
Giá giảm về vùng 125,700-126,000:
- Fibonacci xác nhận hồi về 0.618
- Pivot xác nhận đây là S1
- Volume và RSI xác nhận thêm

→ Long tại 125,800, stop 124,500 (dưới S2 + Fib 0.786)

---

### Ví dụ 2: MWG — Sóng giảm từ 60,000 xuống 52,000

```
Fib vẽ từ 60,000 (đỉnh) xuống 52,000 (đáy):
- 0.382 = 55,056
- 0.500 = 56,000
- 0.618 = 56,944
- 0.786 = 58,288

Pivot hôm nay:
- PP = 56,500
- R1 = 57,800
- R2 = 59,200
```

**Phân tích:**
- Fib 0.618 = 56,944 và R1 = 57,800 → gần nhau (chênh ~856đ)
- Đây là vùng kháng cự mạnh

**Kịch bản:**
Giá hồi phục lên vùng 57,000-57,800:
- Fibonacci xác nhận hồi về 0.618
- Pivot xác nhận R1
- RSI kiểm tra: đang ở 68 (gần quá mua)

→ Có thể short, stop 58,500

---

## 4. Khi Pivot Và Fibonacci Không Trùng

Đừng lo. Không phải lúc nào cũng trùng. Khi không trùng:

**Cách xử lý:**
- Vùng giữa 2 mức → zone rộng hơn, vào lệnh thận trọng
- Mức nào gần hơn dùng làm entry, mức xa hơn làm xác nhận
- Hoặc chờ giá đến gần một trong 2 rồi quyết định

**Ví dụ:**
```
Fib 0.618 = 50,000
S1 = 51,500
→ Vùng kháng cự từ 50,000-51,500
→ Có thể short khi giá vào vùng này
```

---

## 5. Chiến Thuật Kết Hợp — 3 Bước

### Bước 1: Xác định sóng
Vẽ Fibonacci từ đáy gần nhất đến đỉnh gần nhất (hoặc ngược lại).

### Bước 2: Xác định pivot
Ghi lại PP, R1, R2, S1, S2 hôm nay.

### Bước 3: Tìm vùng trùng
Tìm Fib level gần pivot nhất. Đó là vùng giao dịch tiềm năng.

**Checklist trước khi vào lệnh:**
- [ ] Pivot và Fibonacci trùng hoặc gần nhau (cách < 1%)
- [ ] Volume xác nhận (tăng tại breakout hoặc giảm tại chạm)
- [ ] RSI ủng hộ (quá mua tại kháng cự / quá bán tại hỗ trợ)
- [ ] MACD ủng hộ (histogram thu hẹp tại vùng)

---

## 🎯 Kết Luận

**Cốt lõi:**
- Pivot + Fibonacci mạnh vì cả 2 dựa trên số liệu khách quan
- Khi trùng nhau → vùng đó cực kỳ quan trọng
- 0.618 + R1/S1 = bộ đôi vàng
- Khi không trùng → zone rộng hơn, thận trọng hơn

---

**Bài tập nhỏ:**
Mở TradingView, chọn FPT khung Daily.
1. Vẽ Fibonacci từ đáy 6 tháng lên đỉnh gần nhất
2. Thêm Pivot Point Standard
3. Tìm vùng trùng giữa Fib và Pivot
4. Ghi lại: Fib mức nào? Pivot mức nào? Cách nhau bao xa?
5. Trong 10 phiên gần nhất, giá có lần nào chạm vùng đó không? Phản ứng thế nào?

Bài sau: Pivot intraday — R1, R2, R3, S1, S2, S3 chi tiết.

— BG 🏠
