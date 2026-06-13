# Bài 32: Pivot + Fibonacci — Kết Hợp Mạnh Mẽ

Đã học Fibonacci Retracement ở Phase 2 (bài 17) — vùng giá hồi phục sau một sóng tăng/giảm.

Khi các mức Fibonacci trùng với pivot → vùng đó càng mạnh.

---

## Tại sao kết hợp này mạnh?

Pivot dựa trên dữ liệu 1 phiên (daily pivot) hoặc 1 tuần (weekly pivot). Fibonacci dựa trên một sóng giá hoàn chỉnh (có thể kéo dài nhiều tuần, nhiều tháng).

Khi hai hệ thống khác nhau cùng chỉ vào một vùng giá → độ tin cậy tăng gấp đôi. Giống như hai la bàn khác nhau cùng chỉ một hướng.

---

## Các vùng trùng phổ biến

**Fibonacci 0.618 + PP hoặc R1/S1:**
0.618 là golden ratio — vùng hồi phục mạnh nhất. Khi trùng với pivot → vùng quyết định. Nếu 0.618 trùng R1: kháng cự rất mạnh, khó phá. Nếu 0.618 trùng S1: hỗ trợ rất mạnh, khó thủng.

**Fibonacci 0.382 + R1 hoặc S1:**
0.382 là vùng hồi phục nhẹ. Khi trùng R1: kháng cự vừa, dễ phá hơn. Khi trùng S1: hỗ trợ vừa.

**Fibonacci 0.786 + R2 hoặc S2:**
0.786 là mức sâu. Khi trùng R2/S2: vùng cực mạnh, thường là điểm đảo chiều.

**Fibonacci mở rộng 1.272/1.618 + R3/S3:**
Mức mở rộng cho target xa. Khi trùng R3/S3 → vùng không nên theo đuổi.

---

## Ví dụ

**HPG:**
Sóng tăng từ 25.000 lên 30.000. Fibonacci retracement vẽ từ đáy lên đỉnh.

0.618 = 25.000 + (30.000 - 25.000) × 0.382 = 26.910
Hoặc: 30.000 - (5.000 × 0.618) = 26.910

Trùng với S1 = 27.000 (sau điều chỉnh). Giá chạm 26.900-27.000 → nến hammer + volume cao → long mạnh.

---

## Khi pivot và Fibonacci không trùng

Nếu pivot và Fibonacci cách xa nhau (>1-2%): vùng pivot yếu hơn bình thường vì thiếu sự đồng thuận. Ưu tiên tầng thời gian lớn hơn: Fibonacci weekly trọng số cao hơn pivot daily.

---

## Chiến thuật 3 bước

1. Xác định pivot daily: PP, R1, R2, S1, S2
2. Vẽ Fibonacci từ đáy-đỉnh (hoặc đỉnh-đáy) gần nhất
3. Tìm vùng trùng: Fibonacci + pivot gần nhau (< 0.5%)

Vào lệnh tại vùng trùng, stop sau vùng trùng 0.5-1%. Target = vùng pivot tiếp theo hoặc Fibonacci mở rộng.

---

Pivot dựa trên 1 phiên. Fibonacci dựa trên 1 sóng. Khi trùng nhau → tín hiệu rất mạnh. Các cặp mạnh nhất: 0.618 + R1/S1, 0.786 + R2/S2.

Mở TradingView, chọn cổ VN30. Vẽ Fibonacci từ đáy lên đỉnh gần nhất. Thêm pivot daily. Tìm vùng trùng. Làm tương tự với Fibonacci từ đỉnh xuống đáy.

Bài 32: Pivot Với Fibonacci
