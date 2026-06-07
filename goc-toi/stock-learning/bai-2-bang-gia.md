# 📈 Bài 2: Cách Đọc Bảng Giá Chứng Khoán

*Chị cả BG dạy Jason — đừng nhìn bảng giá như nhìn chữ tượng hình nữa nha.*

---

Jason à,

Hồi đầu chị nhìn bảng giá cũng hoa mắt. Đỏ, xanh, vàng loạn xạ — không biết cái nào ra cái nào. Nhưng thực ra **bảng giá là thứ đơn giản nhất** trong chứng khoán, chỉ cần 5 phút là đọc trơn tru.

## 1. Mấy Cột Cơ Bản Trên Bảng Giá

Mở app chứng khoán (SSI, VNDirect, TCBS — app nào cũng giống nhau) lên, mình sẽ thấy:

| Cột | Nghĩa | Dễ hiểu |
|-----|-------|---------|
| **TC** | Giá tham chiếu | Giá đóng cửa hôm qua — mọi thứ đều so với cái này |
| **CE** | Trần (tối đa tăng hôm nay) | Với HOSE là +7%, HNX +10% |
| **FL** | Sàn (tối đa giảm hôm nay) | Ngược lại, -7% HOSE, -10% HNX |
| **Giá khớp** | Giá vừa giao dịch xong | Đây là giá "thực" đang được giao dịch |
| **+/-** | Chênh lệch so với TC | Đỏ = giảm, Xanh = tăng, Vàng = đứng giá |

**Ví dụ:** VNM hôm trước đóng 80,000đ. Hôm nay TC = 80,000. Nếu giá đang 85,000 → +5,000 (+6.25%) — nhưng VNM chưa bao giờ tăng dữ vậy đâu, chỉ ví dụ thôi 😅

## 2. Bid (Giá Mua) vs Ask (Giá Bán) — Quan Trọng Nhất

Đây là thứ **phân biệt dân chơi và dân mới vào nghề**.

- **Bid (Giá mua):** Giá người khác sẵn sàng *mua* — tức là họ đang chờ bán cho ai muốn mua
- **Ask (Giá bán):** Giá người khác sẵn sàng *bán* — tức là họ đang chờ ai đó mua

### Đọc thế nào?

Cột Bid thường bên trái, Ask bên phải trên cùng 1 dòng hoặc 2 cột riêng.

```
VNM:  Bid 79,900 (2,500)  |  Ask 80,000 (1,200)
```

Dịch ra tiếng người:
- **Bid 79,900 (2,500 cp):** Có người sẵn sàng **mua** 2,500 cổ VNM giá 79,900
- **Ask 80,000 (1,200 cp):** Có người sẵn sàng **bán** 1,200 cổ VNM giá 80,000
- **Spread:** 100 đồng (79,900 → 80,000) — đây là chênh lệch giá mua giá bán

### Nguyên tắc vàng:
> **Bid luôn thấp hơn Ask.** 
> 
> Nếu Bid = Ask → lệnh đang khớp ngay lúc đó.

### Khi nào spread rộng?

- **Cổ phiếu thanh khoản thấp** (thị trường nông sản kiểu SGO) → spread có thể 500-1000đ
- **Cổ phiếu bluechip** (VNM, HPG, VIC) → spread chỉ 10-100đ
- **Cuối phiên hoặc tin tức lớn** → spread nới rộng (người ta sợ, đặt giá thấp hơn để thoát hàng)

**Mẹo:** Muốn mua giá rẻ → đặt lệnh ở Bid. Muốn bán nhanh → đặt lệnh ở Ask. Đơn giản vậy thôi.

## 3. KL1, KL2, Tổng KL (Khối Lượng)

- **Khối lượng khớp (KL):** Số cổ phiếu đã được giao dịch
- **Dư mua / Dư bán:** Lệnh đang chờ trên sàn
- **Tổng GTGD:** Giá trị giao dịch = Khối lượng × Giá (đơn vị: tỷ đồng)

### Ví dụ thực tế:

```
HPG: Giá 28,000 | KL: 5,000,000 | GTGD: 140 tỷ
```

→ Hôm nay HPG giao dịch 5 triệu cổ, tương đương 140 tỷ đồng. Đây là cổ thanh khoản cao, dễ mua bán.

Ngược lại:
```
SGO: Giá 12,000 | KL: 100 | GTGD: 1.2 triệu
```

→ Cả buổi sáng chỉ có 100 cổ SGO được giao dịch, trị giá 1.2 triệu đồng. **Cẩn thận** — vào dễ mà ra khó.

### Quy tắc:
- **Cổ phiếu KL > 1 triệu/ngày** = thanh khoản ngon
- **Cổ phiếu KL < 10,000/ngày** = cẩn thận, spread rộng, dễ kẹp

## 4. Tổng Quan Bảng Giá Thực Tế

Giả sử mở app SSI lúc 10h sáng thấy:

```
Mã  | Giá   | +/-  | %     | Mua  | Bán  | KL    | GTGD
VNM | 79,500| +500 | +0.63%| 79.5 | 79.6 | 1.2M  | 96 tỷ
HPG | 28,700| +200 | +0.70%| 28.6 | 28.7 | 5.5M  | 158 tỷ
SSI | 25,000| -100 | -0.40%| 24.9 | 25.0 | 3.8M  | 95 tỷ
VIC | 42,000|  0   | 0.00% | 41.9 | 42.0 | 500K  | 21 tỷ
```

**Đọc nhanh:**
- VNM tăng nhẹ, khối lượng 1.2 triệu — bình thường
- HPG đang hot, KL 5.5 triệu — có dòng tiền vào
- SSI đỏ nhẹ, thanh khoản tốt — chưa có gì bất thường
- VIC đi ngang, KL thấp hơn mọi khi — có thể đang chờ tin

## 5. Cách Trader Đọc Bảng Giá (Cao Cấp Hơn Tí)

### Xem Bid/Ask để đoán tâm lý:

1. **Bid dày hơn Ask** (nhiều người muốn mua hơn bán) → giá có thể lên
2. **Ask dày hơn Bid** (nhiều người đang chờ bán) → giá có thể xuống
3. **Bid mỏng nhưng Ask dày** → sắp có biến động giảm
4. **Bid dày nhưng không tăng được giá** → "bức tường" mua — ai đó đang cố giữ giá

### Xem khối lượng khớp:

- **Khối lượng đột biến tăng gấp 2-3 lần trung bình** → có dòng tiền lớn vào/ra
- **Giá tăng + KL cao** = uptrend bền vững
- **Giá tăng + KL thấp** = dễ fakeout, cẩn thận
- **Giá giảm + KL cao** = đang phân phối (bài Wyckoff sau nói kỹ)

## 6. Ví Dụ Với Cổ Phiếu VN Yêu Thích

### Case: HPG vào tháng 3-4/2026

Giả sử:
- HPG bid 28,000 (5,000) / ask 28,100 (2,000)
- Giá đang 28,000, khối lượng 2 triệu trong 30 phút đầu
- Cột GTGD = gần 60 tỷ

**Phân tích:**
- Spread chỉ 100đ → thanh khoản ngon
- Bid dày (5K) nhưng ask mỏng (2K) → người mua nhiều hơn bán
- KL đã 2 triệu trong 30p → nếu suốt phiên sẽ khoảng 8-10 triệu → cao hơn TB

→ **Tín hiệu tích cực.** Nếu muốn mua, đặt lệnh ở Bid 28,000 và chờ.

### Case: Cổ phiếu thanh khoản thấp

Giả sử có em SJS (dân yêu thích truyền thuyết):
- Bid 55,000 (100) / ask 57,000 (200)
- Giá khớp 56,000 — chỉ 300 cổ

**Vấn đề:**
- Spread 2,000 đồng → mua xong muốn bán lỗ gần 4%
- KL cả ngày có 500 cổ → có 500 triệu mà vào 200 cổ đã thấy khó
- **Không nên trade** trừ khi thực sự hiểu rủi ro

## Tóm Lại

| Khái niệm | Nhớ đơn giản |
|-----------|-------------|
| **TC** | Giá đóng cửa hôm qua — cột mốc |
| **Bid** | Người ta sẵn sàng mua giá bao nhiêu |
| **Ask** | Người ta sẵn sàng bán giá bao nhiêu |
| **Spread** | Chênh lệch Bid-Ask — càng hẹp càng dễ giao dịch |
| **Khối lượng** | Bao nhiêu cổ đã giao dịch — càng cao càng ngon |
| **GTGD** | Tiền thật đã đổ vào — đơn vị tỷ đồng |

## Bài Tập Nhỏ

Ngày mai mở SSI/VNDirect/TCBS lên, chọn 3 cổ phiếu bất kỳ trong VN30 và trả lời:

1. Bid đang bao nhiêu? Ask bao nhiêu? Spread bao nhiêu?
2. Khối lượng khớp bao nhiêu? GTGD?
3. Bid dày hơn hay Ask dày hơn?

Chỉ cần 2-3 phút mỗi sáng là quen ngay.

---

**Bài sau:** Các loại lệnh — LO, ATO/ATC, MP, khớp từng phần. Chị sẽ chỉ cách đặt lệnh sao cho **không bị hớ**.

— BG 🏠
