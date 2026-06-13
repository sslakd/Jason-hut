# Bài 58: Kết Hợp Tất Cả — Từ Scan Đến Vào Lệnh

*Cả 60 bài học dồn vào 1 quy trình duy nhất. Làm đúng quy trình này, Jason có hệ thống.*

---

Jason à,

Đây là bài quan trọng nhất trong Phase 5. BG sẽ chỉ Jason **quy trình hoàn chỉnh** từ đầu tuần đến khi vào lệnh.

Không suy nghĩ lung tung. Không cảm xúc. Chỉ có quy trình.

## Sơ Đồ Quy Trình

```
CUỐI TUẦN (Chủ Nhật)
  │
  ├── Step 1: Review tuần trước (journal)
  ├── Step 2: Tổng quan thị trường (VNIndex, ngành)
  ├── Step 3: Scan cổ phiếu (screener → 5-10 cổ)
  ├── Step 4: Chọn 3-5 cổ ưu tiên
  └── Step 5: Viết kế hoạch vào/thoát cho từng cổ
       │
       ▼
TRONG TUẦN
  │
  ├── Step 6: Mỗi sáng check kế hoạch
  ├── Step 7: Chờ tín hiệu từ thị trường
  ├── Step 8: Xác nhận tín hiệu (2 bước)
  ├── Step 9: Tính position size
  ├── Step 10: Đặt lệnh (LO)
  └── Step 11: Quản lý lệnh (trailing, stop)
       │
       ▼
ĐÓNG LỆNH
  │
  ├── Step 12: Ghi journal
  └── Step 13: Đánh giá
```

## Step 1-5: Cuối Tuần (Xem Bài 56-57)

Đã học rồi. Chủ nhật tối, dành 30-45 phút.

## Step 6: Mỗi Sáng Check Kế Hoạch

**Việc cần làm:** 5 phút trước giờ mở cửa (8:45).

```
1. Mở kế hoạch cuối tuần
2. Check tin tức qua đêm:
   - Thế giới: Dow Jones, S&P 500 (tăng/giảm?)
   - Trong nước: có tin gì quan trọng?
3. Điều chỉnh kế hoạch nếu cần:
   - Thị trường Mỹ giảm 2% → VN có thể giảm → thận trọng
   - Có tin tích cực VN → cơ hội tốt hơn
4. Nhắc lại: hôm nay mình canh cổ nào, giá nào
```

## Step 7: Chờ Tín Hiệu

Jason không cần phải canh chừng từng phút. **Đặt cảnh báo giá (price alert) trên app.**

Ví dụ từ kế hoạch:
- VCB: vào ở 89,000 → đặt alert ở 89,200 ("sắp tới giá")
- HPG: breakout 29,000 → đặt alert ở 29,000

Khi alert reo, Jason mở app, kiểm tra.

## Step 8: Xác Nhận Tín Hiệu

Trước khi vào lệnh, kiểm tra **2 bước xác nhận**.

### Bước A: Kỹ thuật

```
✅ Giá chạm hoặc vượt mức vào dự kiến?
✅ Khối lượng có xác nhận không? (KL > TB 20 ngày)
✅ Không có kháng cự mạnh ngay phía trên?
✅ Xu hướng vẫn còn? (trên MA20 với swing)
✅ RSI không quá mua? (< 70)
```

### Bước B: Kế hoạch & Tâm lý

```
✅ Cổ này có trong danh sách cuối tuần?
✅ Giá vào nằm trong vùng đã xác định?
✅ Có stop loss rõ ràng?
✅ RR có >= 1.5?
✅ Jason đang bình tĩnh, không FOMO?
```

**Chỉ vào lệnh khi tất cả đều ✅.** Nếu còn ❌, không vào.

## Step 9: Tính Position Size

Ví dụ:
- TK: 100 triệu
- Rủi ro 1%: 1,000,000đ
- HPG: giá 29,000, stop 27,500 (rủi ro 1,500/cp)
- Số cổ: 1,000,000 / 1,500 = **666 cổ**
- Làm tròn: **600 cổ** (lô chẵn)
- Kiểm tra vốn cần: 600 × 29,000 = 17.4tr (17.4% TK) — OK

## Step 10: Đặt Lệnh

### Dùng LO (Limit Order)

```
Mua: LO, 600 HPG, giá 29,000
```

**Tại sao không dùng MP?**
- Với LO, Jason kiểm soát được giá
- Nếu không khớp → chờ. Còn hơn mua trượt giá 100-200đ
- Khi breakout, nếu thanh khoản tốt, LO khớp nhanh

**Nếu lệnh không khớp?**
- Giá chạy qua 29,000 lên 29,100 → không đuổi
- Chờ pullback (nếu có)
- Hoặc: đánh giá xem có đáng vào ở giá mới không

**Nếu khớp từng phần?**
- Jason đặt 600, khớp 400 → còn 200
- Có thể huỷ phần chưa khớp, hoặc để đó
- Theo dõi, không mua thêm nếu giá lên cao hơn

## Step 11: Quản Lý Lệnh

### Ngay sau khi vào

- **Đặt stop loss** (nếu chưa đặt cùng lúc vào)
  - Stop: 27,500 → đặt LO bán 600 HPG giá 27,500

- **Đặt take profit** (hoặc quyết định trailing)
  - TP: 31,000 → đặt LO bán 300 HPG giá 31,000 (scale out 50%)
  - 300 còn lại: trailing

### Hàng ngày

```
8:45 — Check alert, không có gì → để yên
11:30 — Nghỉ trưa: check nhanh danh mục
14:00 — Check trailing stop
```

### Khi giá đi đúng hướng

- HPG lên 30,000 (lời 1,000/cp, 3.4%)
  - Kéo stop từ 27,500 lên 28,500 (hoà vốn + một chút)
- HPG lên 31,000 (lời 2,000/cp, 6.9%)
  - Chốt 300 cổ (50%) ở 31,000
  - 300 cổ còn lại: trailing 5% → stop = 29,450

### Khi giá chạm stop

- **Chấp nhận.** Cắt lỗ.
- Ghi journal
- Không revenge trade (vào lại ngay để gỡ)

## Step 12-13: Đóng Lệnh & Journal

Khi lệnh đã đóng (lời hoặc lỗ):

```
NGAY LẬP TỨC, ghi journal:

Mã: HPG
Hướng: Long
Vào: 29,000 | SL: 27,500 | TP: 31,000
Thoát: 31,000 (chốt 300) + 30,500 (trailing 300)
Kết quả: Lời 2,750,000đ (2.75% TK)
Cảm xúc: Bình tĩnh, đúng kế hoạch
Bài học: Trailing giúp lời thêm dù không đạt TP tối đa
```

## Ví Dụ Flow Hoàn Chỉnh

### Từ Chủ Nhật đến thứ 3

**Chủ nhật 20h:**
- Scan cuối tuần → chọn VCB, HPG, FPT, VPB
- Viết kế hoạch
- HPG: breakout 29,000, SL 27,500, TP 31,000 → vào 600 cổ

**Thứ 2 sáng 8:45:**
- Check tin: Dow Jones +0.5%, VN có thể tăng nhẹ
- Đặt alert HPG 29,000

**Thứ 2 9:30:**
- Alert reo: HPG 29,000, volume cao
- Check xác nhận:
  - ✅ Giá 29,000
  - ✅ KL > TB 20 ngày (2.5×)
  - ✅ Trong danh sách cuối tuần
  - ✅ RR 1.6 (lời 2k, lỗ 1.5k)
  - ✅ Jason bình tĩnh

- Tính position size: TK 100tr × 1% / 1,500 = 666 cổ → 600 cổ
- Đặt LO: Mua 600 HPG 29,000

**Thứ 2 9:35:**
- Lệnh khớp. Đặt SL: Bán 600 HPG 27,500

**Thứ 2 14:00:**
- HPG 29,800. Chưa cần làm gì.

**Thứ 3 10:00:**
- HPG 30,200. Kéo stop lên 29,000 (hoà vốn).

**Thứ 3 14:30:**
- HPG 31,000. Chốt 300 cổ. 300 còn lại trailing 5%: stop 29,450.

**Thứ 5:**
- HPG 30,000. Chạm trailing stop 29,450 → bán 300 cổ còn lại.
- Lời 300 × (31,000 - 29,000) + 300 × (29,450 - 29,000)
= 300 × 2,000 + 300 × 450
= 600,000 + 135,000 = 735,000đ

**Thứ 5 15:00:**
- Ghi journal. Kết thúc.

## Điều Gì Nếu Sai?

### Kịch bản: HPG không breakout, mà giảm

**Thứ 2 10:00:**
- HPG 28,800, không chạm alert 29,000
- → Không làm gì

**Thứ 2 14:00:**
- HPG 28,500
- → Vẫn chưa breakout. Chờ.

**Thứ 3 10:00:**
- HPG 28,200
- → Tín hiệu yếu. Có thể bỏ kế hoạch HPG tuần này.
- Ghi chú journal: "HPG không breakout, hủy kế hoạch, chờ tuần sau"

## Quy Tắc Khi Mọi Thứ Sai

1. **Kế hoạch sai** → điều chỉnh
2. **Thị trường đảo chiều** → cut loss, đừng hy vọng
3. **Jason mất bình tĩnh** → tắt app, đi dạo
4. **Quá nhiều biến động** → đóng hết lệnh, cash is king
5. **Không chắc chắn** → không trade

## Bài Tập Nhỏ

Bài tập lớn nhất của series. Làm theo quy trình trên:

1. Chủ nhật: Lên kế hoạch (viết ra)
2. Thứ 2: Chờ tín hiệu (đặt alert)
3. Khi có tín hiệu: Check xác nhận
4. Nếu OK: Tính position size, vào lệnh
5. Quản lý lệnh trong tuần
6. Khi đóng: Ghi journal

Dù với tài khoản demo hay thật, hãy làm đúng 6 bước này. Lặp lại 5 tuần. Sau đó nhìn lại journal — Jason sẽ thấy mình tiến bộ thế nào.

---

**Bài 59:** Case study — trade mẫu từ A-Z với cổ phiếu VN thực tế.

— BG 🏠
