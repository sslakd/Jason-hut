# Bài 34: Pivot Weekly/Monthly — Tầm Nhìn Lớn Hơn

## 📌 Mở đầu

Mấy bài trước cậu học pivot Daily và pivot Intraday. Hôm nay lên một tầm cao hơn: **pivot Weekly và Monthly**.

Tại sao cần? Vì:

- Pivot daily = phản ứng trong 1 ngày
- Pivot weekly = xu hướng 1 tuần
- Pivot monthly = xu hướng 1 tháng

Khi cậu biết monthly/weekly pivot nằm ở đâu, cậu sẽ biết **các vùng giá quan trọng nhất** — nơi thị trường có thể quay đầu hoặc breakout mạnh.

---

## 1. Cách Tính Pivot Weekly/Monthly

**Công thức vẫn y chang** — chỉ thay đổi timeframe đầu vào.

### Pivot Weekly
Dùng dữ liệu **tuần trước**:
```
PP(weekly) = (High_tuan + Low_tuan + Close_tuan) / 3
R1(weekly) = 2 × PP - Low_tuan
S1(weekly) = 2 × PP - High_tuan
```

### Pivot Monthly
Dùng dữ liệu **tháng trước**:
```
PP(monthly) = (High_thang + Low_thang + Close_thang) / 3
R1(monthly) = 2 × PP - Low_thang
S1(monthly) = 2 × PP - High_thang
```

---

## 2. Tại Sao Pivot Weekly/Monthly Quan Trọng?

### Vì 1: Nó là vùng "cứng"

Pivot daily thay đổi mỗi ngày. Nhưng pivot weekly tồn tại cả tuần — 5 phiên giao dịch có cùng một mức.

Nếu giá chạm weekly R1 → đó là **kháng cự đáng tin cậy hơn** daily R1.

### Vì 2: Institution dùng nó

Các quỹ, ngân hàng, tổ chức thường nhìn vào pivot weekly/monthly. Họ không trade daily — họ trade theo tuần/tháng.

Khi họ đặt lệnh, họ đặt ở các mức này. Đây là nơi có **thanh khoản lớn nhất**.

### Vì 3: Tạo khung cho daily

Biết weekly pivot giúp cậu trả lời: *"Hôm nay daily chạm R1 — nhưng weekly đang ở đâu?"*

- Nếu daily R1 gần weekly PP → R1 yếu hơn (weekly PP là hỗ trợ)
- Nếu daily R1 = weekly R1 → kháng cự cực mạnh

---

## 3. Ví Dụ Cụ Thể

### Ví dụ: HPG — Weekly + Daily

**Weekly pivot tuần này:**
```
PP(w) = 28,500
R1(w) = 30,000
S1(w) = 27,000
```

**Daily pivot thứ Hai:**
```
PP(d) = 28,200
R1(d) = 29,000
```

**Phân tích:**
- Daily R1 = 29,000, nhưng Weekly R1 = 30,000
- → Daily R1 29,000 nằm trong vùng **không có weekly pivot**
- → Kháng cự daily R1 yếu hơn bình thường
- → Nếu giá vượt 29,000, khả năng lên 30,000 (weekly R1) cao

**Kịch bản:**
Giá chạm daily R1 29,000:
- Chưa vội short — weekly chưa có kháng cự ở đây
- Chờ xem giá có phá được không
- Nếu phá → mục tiêu weekly R1 30,000

---

## 4. Cách Kết Hợp 3 Tầng Pivot

| Tầng | Timeframe | Dùng để |
|------|-----------|---------|
| 1 | Monthly | Biên lớn nhất trong tháng — vùng "cứng" |
| 2 | Weekly | Xu hướng tuần — nơi institution đặt lệnh |
| 3 | Daily | Điểm vào/thoát cụ thể trong ngày |

### Quy trình mỗi sáng:

**Bước 1: Check Monthly Pivot**
```
Monthly PP: 1,250 (VNIndex)
→ Thị trường đang trên hay dưới?
→ Nếu trên → xu hướng tháng là tăng
```

**Bước 2: Check Weekly Pivot**
```
Weekly PP: 1,270
→ Giá 1,280 > weekly PP → tuần này nghiêng tăng
→ Weekly R1: 1,300 — mục tiêu trong tuần
```

**Bước 3: Trade Daily**
```
Dựa vào weekly/monthly để biết:
- Đang đi theo trend nào
- Cơ hội cao ở daily R1/S1 nào là thật
```

---

## 5. Khi Weekly Và Daily Pivot Trùng Nhau

Đây là tình huống **mạnh nhất** — cần chú ý đặc biệt.

### Trùng R1

```
Weekly R1 = 130,000
Daily R1 = 130,000

→ Cả tuần và hôm nay đều cho thấy 130,000 là kháng cự
→ Cực kỳ mạnh
```

**Hành động:** Short tại 130,000. Stop trên 130,500.

### Trùng S1

```
Weekly S1 = 125,000
Daily S1 = 125,000

→ Hỗ trợ 2 tầng
→ Rất khó thủng
```

**Hành động:** Long tại 125,000. Stop dưới 124,500.

---

## 6. Lưu Ý Khi Dùng Pivot Weekly/Monthly

### ⚠️ Chỉ tính đầu tuần/đầu tháng
Pivot weekly chỉ thay đổi 1 lần/tuần (đầu tuần) — không thay đổi giữa tuần. Pivot monthly chỉ thay đổi 1 lần/tháng.

### ⚠️ Đừng dùng pivot weekly cho day trade
Weekly pivot cho cậu biên lớn (có thể 5-10% cho cổ VN). Nếu day trade, dùng daily + intraday.

### ⚠️ Hết tháng — tính lại
Cuối tháng, tính pivot cho tháng mới. Mức cũ vẫn có giá trị tham khảo nhưng không còn chính xác.

---

## 7. Cách Thêm Pivot Weekly/Monthly Trên TradingView

**Cách 1:** Thêm indicator Pivot Point Standard → chọn timeframe Weekly/Monthly.

**Cách 2:** Chuyển chart sang Weekly/Monthly → thêm Pivot Point — nó sẽ tính tự động.

**Mẹo:** Thêm cả 3 cùng lúc (Daily, Weekly, Monthly) với màu khác nhau để dễ phân biệt.

---

## 🎯 Kết Luận

**Cốt lõi:**
- Weekly/monthly pivot = tầm nhìn lớn, dùng cho institution
- Daily pivot = điểm vào/thoát cụ thể
- Khi daily và weekly trùng = tín hiệu mạnh
- Trader thông minh luôn nhìn weekly/monthly trước khi trade daily
- **Xu hướng tháng > xu hướng tuần > biến động trong ngày**

---

**Bài tập nhỏ:**
Mở TradingView, chọn bất kỳ cổ VN30 nào.
1. Thêm Pivot Point Weekly + Daily
2. Ghi lại weekly PP, R1, S1
3. Ghi lại daily PP, R1, S1 hôm nay
4. Có mức nào trùng nhau không?
5. Giá hiện tại đang ở đâu so với cả 2?

Bài sau: Vào lệnh tại pivot — entry chi tiết.

— BG 🏠
