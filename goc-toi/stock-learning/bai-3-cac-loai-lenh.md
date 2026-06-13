# Bài 3: Các Loại Lệnh — LO, ATO/ATC, MP, Khớp Từng Phần, Spread

## 📌 Mở đầu

Bài trước mình học cách đọc bảng giá. Hôm nay mình đi sâu hơn — đặt lệnh như thế nào, có mấy loại lệnh, và cái bẫy nào hay mắc.

Trên sàn chứng khoán VN có 3 loại lệnh chính mà Jason cần nhớ:

---

## 1️⃣ LO (Limit Order) — Lệnh Giới Hạn

**Cơ chế:** Đặt giá cụ thể, chỉ khớp khi giá thị trường chạm hoặc tốt hơn giá đó.

**Ví dụ:** Mua 1,000 FPT giá 130,000. Lệnh chỉ khớp khi có người bán giá ≤ 130,000.

**Đặc điểm:**
- ✅ Kiểm soát được giá vào — không sợ mua đắt hơn dự định
- ❌ Có thể **không khớp** nếu giá không chạm
- ⏳ Có hiệu lực đến hết phiên (hoặc hết ngày với sàn VN)

**Khi nào dùng:**
- Muốn mua ở 1 giá cụ thể, không vội
- Đặt limit ở vùng hỗ trợ để đón price action
- Khi spread rộng (thị trường kém thanh khoản)

---

## 2️⃣ ATO / ATC — Lệnh Mở/Đóng Cửa

**ATO (At The Opening):**
- Chỉ đặt được trong **15 phút đầu phiên sáng** (9:00-9:15)
- Giá khớp = giá mở cửa
- Nếu không khớp → tự huỷ
- Dùng khi: có tin quan trọng qua đêm, muốn vào lệnh ngay khi mở cửa

**ATC (At The Closing):**
- Chỉ đặt được trong **15 phút cuối phiên chiều** (14:30-14:45)
- Giá khớp = giá đóng cửa
- Cũng tự huỷ nếu không khớp
- Dùng khi: muốn chốt lời/cắt lỗ ở giá đóng cửa, hoặc trade phiên ATC

**⚠️ Lưu ý:** 15 phút ATO và ATC là định giá tập trung — tất cả lệnh gom lại, 1 giá khớp duy nhất. Có thể tạo biến động mạnh.

---

## 3️⃣ MP (Market Price / Market Order) — Lệnh Thị Trường

**Cơ chế:** Không đặt giá, hệ thống tự khớp với giá bán tốt nhất hiện có.

**Ví dụ:** Mua MP 1,000 FPT — nếu giá bán thấp nhất đang là 130,200 → khớp 130,200.

**Đặc điểm:**
- ✅ Khớp NGAY — ưu tiên số 1
- ❌ **Không biết trước giá chính xác** — đặc biệt nguy hiểm khi thanh khoản thấp
- ❌ Có thể bị **trượt giá (slippage)** nếu khối lượng lớn

**Khi nào dùng:**
- Thị trường biến động mạnh, cần vào/thoát gấp
- Tin tức quan trọng, giá chạy nhanh
- Thanh khoản cao, spread hẹp thì an toàn hơn

**⚠️ Rủi ro với MP trên sàn VN:**
Sàn VN không có MP thuần tuý kiểu US — mà là lệnh **MP tức là so khớp ở mức giá thấp nhất bên bán**. Hệ thống vẫn có biên độ giao động, không khớp tuỳ tiện. Nhưng nếu lệnh lớn hơn khối lượng ở giá tốt nhất, nó sẽ "ăn" dần các mức giá cao hơn.

---

## 4️⃣ Khớp Từng Phần (Partial Match)

Đây là cái bẫy Jason dễ mắc phải.

**Chuyện gì xảy ra:**

Jason đặt mua LO 5,000 cổ phiếu VNM giá 75,000.
- Trên sàn chỉ có 2,000 đang bán giá 75,000
- → Khớp **2,000**, còn **3,000 chưa khớp** treo trên sổ lệnh
- Lúc này gọi là **khớp từng phần**

**Rủi ro:**
- Jason tưởng đã mua xong 5,000 → đi làm việc khác
- 3,000 còn lại lát sau khớp ở các mức giá khác nhau
- Giá đi xuống → Jason lỗ thêm

**Cách xử lý:**
- Kiểm tra trạng thái lệnh sau khi đặt
- Nếu muốn khớp hết ngay: chia nhỏ lệnh, hoặc đặt lệnh mới thay vì để treo
- Theo dõi sổ lệnh trước khi đặt — nhìn bên bán có đủ khối lượng không

---

## 5️⃣ Spread — Chênh Lệch Giá Mua/Bán

**Spread = Giá bán thấp nhất (Ask) - Giá mua cao nhất (Bid)**

**Ví dụ thực tế trên FPT:**
```
Bên mua (Bid): 130,000 (1,000 cp)
Bên bán (Ask): 130,100 (500 cp)
              ↓
        Spread = 100 đồng
```

**Spread nói lên điều gì:**

| Spread | Thanh khoản | Ý nghĩa |
|--------|-------------|---------|
| Hẹp (100-200đ) | Cao | Dễ vào/ra, ít bị trượt giá |
| Rộng (500-1000đ+) | Thấp | Khó vào/ra, cẩn thận slippage |

**Cách dùng spread trong giao dịch:**
- Spread hẹp → có thể dùng LO giá giữa bid-ask, khớp nhanh
- Spread rộng → đừng dùng MP — slippage sẽ giết lợi nhuận
- Trước tin tức, spread thường nở rộng — những lúc này đặt lệnh cẩn thận

---

## 🎯 Tổng Kết Nhanh

| Loại | Đặc điểm | Khi nào dùng |
|------|----------|--------------|
| **LO** | Kiểm soát giá, có thể không khớp | Đa số tình huống |
| **ATO** | Khớp giá mở cửa, tự huỷ nếu không khớp | Có tin qua đêm |
| **ATC** | Khớp giá đóng cửa, tự huỷ nếu không khớp | Chốt lời/cắt lỗ cuối ngày |
| **MP** | Khớp ngay, không kiểm soát giá | Cần vào/thoát gấp, thanh khoản cao |

**Tip cho Jason:**
- Cơ bản nhất: dùng **LO** là an toàn nhất
- **Chỉ MP khi thực sự cần** — và kiểm tra spread trước
- Luôn check khối lượng bên kia trước khi đặt lệnh lớn — tránh khớp từng phần
- ATO/ATC là vũ khí mạnh — nhiều big money chơi 15 phút cuối này

---

**Bài sau:** Phân tích cơ bản sơ lược — EPS, P/E, P/B, ROE — nhìn vào đâu để biết cổ phiếu "ngon" 💪
