# Bài 28: Pivot Point Vùng Support/Resistance

## 📌 Mở đầu

Bài trước cậu đã biết tính Pivot Point. Giờ đến lúc **dùng nó** — coi từng mức PP, R1-R3, S1-S3 như những vùng support/resistance thực thụ.

Nếu bài 6 (support/resistance) là vẽ tay, thì bài này là **có số đo chính xác**.

---

## 1. PP Là "Cái Cân" — Mức Quan Trọng Nhất

PP là trung tâm. Mọi thứ xoay quanh nó.

**Cách dùng PP:**

| Giá so với PP | Ý nghĩa | Hành động |
|---------------|---------|-----------|
| **Trên PP** | Xu hướng nghiêng về mua | Ưu tiên tìm cơ hội long |
| **Dưới PP** | Xu hướng nghiêng về bán | Ưu tiên tìm cơ hội short |
| **Đang test PP** | Thị trường đang do dự | Chờ xác nhận — không vội |

**PP đóng vai trò kép:**
- Nếu giá từ trên xuống chạm PP → PP là **support**
- Nếu giá từ dưới lên chạm PP → PP là **resistance**

Giống như một cánh cửa — đẩy từ bên này là ra ngoài, kéo từ bên kia là vào trong.

---

## 2. R1, R2, R3 — Các Mức Kháng Cự

### R1 — Kháng cự đầu tiên
- Mức mà giá có khả năng chững lại **cao nhất**
- Nếu giá phá R1 với volume mạnh → giá có thể lên R2
- Nếu giá chạm R1 rồi quay đầu → R1 là resistance thật

**Cách dùng R1 trong thực tế:**
```
Giá đang ở 129, R1 = 132
→ Nếu chạm 132 mà nến đóng cửa yếu (doji, shooting star) → cân nhắc chốt lời short
→ Nếu phá 132 với nến xanh to + volume → chờ lên R2
```

### R2 — Kháng cự mạnh hơn
- Xa hơn, khó chạm hơn
- Thường xuất hiện trong phiên biến động mạnh
- Nếu giá chạm R2 → rất dễ quay đầu

### R3 — Kháng cự "cứng"
- Hiếm khi chạm tới
- Nếu giá lên tới R3 → thường là quá mua mạnh → coi chừng đảo chiều
- Cũng có thể là breakout mạnh nếu tin tức đặc biệt

---

## 3. S1, S2, S3 — Các Mức Hỗ Trợ

### S1 — Hỗ trợ đầu tiên
- Quan trọng nhất trong 3 mức
- Nếu giá xuống S1 mà có nến xanh bật lên → có thể long
- Nếu giá cắt S1 dễ dàng → giá đang yếu

### S2 — Hỗ trợ mạnh
- Nếu giá xuống S2 → thường là quá bán
- Cơ hội long tại S2 nếu có divergence RSI

### S3 — Hỗ trợ cuối cùng
- Nếu giá chạm S3 → đang có vấn đề lớn
- Có thể là điểm mua mạo hiểm — nhưng chỉ với stop loss chặt

---

## 4. Bảng Tổng Quan — Mức Độ Quan Trọng

| Mức | Độ quan trọng | Khả năng chạm | Hành động gợi ý |
|-----|---------------|---------------|-----------------|
| R3 | Rất mạnh | Hiếm | Bán hoặc chờ breakout xác nhận |
| R2 | Mạnh | Trung bình | Chốt lời / canh short |
| R1 | Trung bình | Cao | Chốt lời / canh short nếu có tín hiệu |
| PP | Cân bằng | Rất cao | Chờ xác nhận hướng |
| S1 | Trung bình | Cao | Canh long / chốt lời short |
| S2 | Mạnh | Trung bình | Canh long nếu có tín hiệu |
| S3 | Rất mạnh | Hiếm | Mua mạo hiểm — stop chặt |

---

## 5. Ví Dụ Thực Tế

Giả sử hôm nay MWG:
- PP = 56,000
- R1 = 57,500, R2 = 59,000
- S1 = 54,500, S2 = 53,000

### Kịch bản A: Giá đi lên
```
Mở cửa: 56,200 (trên PP)
→ Chạm R1 57,500 → quay đầu → bán ngắn
→ Nếu phá R1 với volume → chờ R2 59,000
```

### Kịch bản B: Giá đi xuống
```
Mở cửa: 55,800 (dưới PP)
→ Xuống S1 54,500 → nến bật lên → mua
→ Nếu thủng S1 với volume → chờ S2 53,000
```

### Kịch bản C: Sideways
```
Giá loanh quanh 55,800-56,200 cả phiên
→ PP đang là kháng cự từ dưới lên (resistance)
→ Nếu giá vượt PP → có thể lên R1
→ Nếu giá thủng dưới PP → có thể xuống S1
```

---

## 6. Lưu Ý Khi Dùng Pivot

### ⚠️ Pivot không phải là "điểm chính xác"
Đừng đặt lệnh đúng giá PP. Hãy cho nó **một vùng**:

```
PP = 130,000 → vùng 129,800 - 130,200
R1 = 132,000 → vùng 131,800 - 132,200
```

### ⚠️ Pivot hiệu quả nhất khi kết hợp
Pivot một mình cũng tốt. Nhưng Pivot + Volume, Pivot + RSI, Pivot + MACD → **tuyệt vời**. Đó là lý do các bài 29-32 tồn tại.

### ⚠️ Thị trường VN có biên độ
Với HOSE, biên độ ±7%. Pivot mở rộng phù hợp. Với HNX ±10%, các mức xa hơn một chút.

---

## 🎯 Kết Luận

**Những gì cần nhớ:**
- PP là cái cân — mức quan trọng nhất
- R1/S1 quan trọng nhất trong các mức kháng cự/hỗ trợ
- R2/S2 mạnh hơn nhưng xa hơn — ít chạm hơn
- R3/S3 là các mức "cứng" — hiếm khi chạm
- Cho pivot một vùng, không phải điểm chính xác

---

**Bài tập nhỏ:**
Open TradingView, chọn FPT khung Daily.
1. Quan sát 5 phiên gần nhất — giá đã chạm mức pivot nào?
2. Tại mỗi lần chạm, giá phản ứng thế nào? (bật lên / xuyên qua / loanh quanh?)
3. Nếu giá chạm R1 mà volume thấp → chuyện gì xảy ra tiếp theo?

Bài sau: Pivot + Volume — xác nhận breakout thật hay giả.

— BG 🏠
