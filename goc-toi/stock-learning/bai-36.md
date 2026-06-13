# Bài 36: Stop Loss Cho Pivot Trade

Thoát lệnh khi sai quan trọng hơn vào lệnh. Trong trading, đúng tầm 40-50% số lần. Nếu biết cắt lỗ đúng, vẫn có lợi nhuận cuối tháng. Nếu không, 1 lần sai xoá sạch 10 lần đúng.

Với pivot trade, stop loss phải cụ thể như các mức pivot.

---

## Nguyên tắc vàng: stop trước entry

Trước khi đặt entry, phải biết stop ở đâu. Không "để xem sao", không "chờ thêm tí nữa".

---

## Stop loss cho long (mua tại support)

Vào lệnh long tại S1 → stop dưới S1. Cụ thể: nếu S1 = 128.000, stop tại 126.500 (cách S1 1.2%). Dưới S1 1-2% là khoảng cách hợp lý với HOSE.

Vào lệnh tại PP (mua khi giá hồi về PP từ trên xuống) → stop dưới PP 0.5-1%. PP gần hơn nên stop hẹp hơn.

Vào lệnh tại S2 → stop dưới S2 1.5-2.5%. S2 xa hơn nên cần stop rộng hơn.

---

## Stop loss cho short (bán tại kháng cự)

Vào lệnh short tại R1 → stop trên R1 1-2%. Nếu R1 = 132.000, stop tại 133.500.

Vào lệnh tại PP (short khi giá hồi về PP từ dưới lên) → stop trên PP 0.5-1%.

Vào lệnh tại R2 → stop trên R2 1.5-2.5%.

---

## Độ rộng stop loss

Stop hẹp (< 1%): rủi ro thấp nhưng dễ bị quét. Stop rộng (2-3%): ít bị quét nhưng rủi ro cao hơn.

Công thức tham khảo: stop = ATR(14) × 1.5. ATR là Average True Range — đo biến động trung bình. Nếu ATR 14 của FPT là 1.500đ, stop tối thiểu = 1.500 × 1.5 = 2.250đ (~1.7%).

---

## Các loại stop loss

**Stop theo giá tuyệt đối:** đặt stop tại giá cụ thể. Đơn giản, dễ thực hiện.

**Trailing stop để bảo vệ lợi nhuận:** khi giá đi đúng hướng, kéo stop theo. Sẽ học chi tiết ở bài sau.

**Thời gian stop:** nếu giá không đi đúng hướng trong 3-5 phiên → đóng lệnh. Dùng cho swing trade, tránh nằm vùng.

---

## Khi nào nên chấp nhận stop rộng hơn?

Trước tin tức lớn (báo cáo tài chính, họp ĐHCĐ, quyết định lãi suất) → biến động cao hơn bình thường 1.5-2x. Stop loss có thể nới rộng gấp 1.5 lần.

Cổ phiếu biến động cao (HPG, các cổ thép, chứng khoán) → stop rộng hơn cổ phiếu ít biến động (VNM, các cổ ngành điện, nước).

Khung thời gian dài hơn (weekly vs daily) → stop rộng hơn.

---

## Sai lầm thường gặp

Không đặt stop: lý do số 1 cháy tài khoản.

Stop quá hẹp: bị quét bởi nhiễu thị trường, mất cơ hội.

Dời stop ra xa khi giá đi ngược: sợ thua lỗ → càng thua thêm. Nếu giá chạm stop, ra. Đừng hy vọng.

---

## Bảng stop loss tham khảo

| Vào lệnh tại | Stop | Khoảng cách gợi ý |
|-------------|------|-------------------|
| S3 | Dưới S3 | 2-3% |
| S2 | Dưới S2 | 1.5-2.5% |
| S1 | Dưới S1 | 1-2% |
| PP (long) | Dưới PP | 0.5-1% |
| PP (short) | Trên PP | 0.5-1% |
| R1 | Trên R1 | 1-2% |
| R2 | Trên R2 | 1.5-2.5% |
| R3 | Trên R3 | 2-3% |

---

Biết stop loss trước khi vào lệnh. Stop cách pivot 1-2%. Dùng ATR để tính stop phù hợp với biến động. Không dời stop ra xa. Cắt lỗ nhanh, còn tiền đánh trận khác.

Bài 36: Stop Loss Cho Pivot Trade
