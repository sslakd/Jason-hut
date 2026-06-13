# Bài 51: Backtest — Kiểm Tra Chiến Lược

Đừng mang tiền thật ra thử nghiệm. Test trên quá khứ trước.

---

## Backtest là gì?

Áp dụng chiến lược vào dữ liệu quá khứ để xem nó hoạt động thế nào. Nếu không hoạt động trong quá khứ, khả năng cao không hoạt động trong tương lai.

Mục tiêu: biết win rate, RR, profit factor, drawdown. Từ đó tính Kelly và position size.

---

## Backtest thủ công

Mở TradingView, chọn cổ phiếu, khung Daily. Quay lại 6-12 tháng. Áp dụng chiến lược và ghi lại.

Cần ghi: ngày vào, giá vào, ngày ra, giá ra, lý do vào, lý do ra, lời/lỗ.

20-30 lệnh đầu tiên: backtest thủ công. Giúp hiểu sâu chiến lược, thấy được điểm yếu.

---

## Backtest tự động

TradingView Strategy Tester: viết code Pine Script, chạy tự động trên hàng nghìn lệnh.

Nếu không biết code: TradingView Bar Replay. Chạy từng nến, quyết định vào/ra.

App chuyên dụng: Amibroker, MetaTrader.

---

## Các chỉ số cần xem

**Win rate:** % lệnh thắng. > 40% với RR 1:2 là ổn.

**Profit Factor (PF):** Tổng lời / Tổng lỗ. PF > 1.5 là tốt. PF > 2 là rất tốt.

**Max Drawdown:** % giảm tối đa của tài khoản. Lý tưởng < 15%. Drawdown > 30%: chiến lược quá rủi ro.

**Số lệnh:** Cần tối thiểu 50 lệnh để có kết quả có ý nghĩa. 100+ lệnh là lý tưởng.

**Sharpe Ratio:** Lợi nhuận trên mỗi đơn vị rủi ro. > 1 là tốt, > 2 là rất tốt.

---

## Bẫy backtest

**Overfitting:** Tối ưu chiến lược quá khớp với dữ liệu quá khứ → không hoạt động trong tương lai. Giải pháp: giữ chiến lược đơn giản.

**Look-ahead bias:** Dùng dữ liệu tương lai để quyết định trong quá khứ. TradingView tự động tránh nếu dùng Bar Replay.

**Survivorship bias:** Chỉ backtest cổ phiếu còn tồn tại. Cổ đã hủy niêm yết (thường là cổ xấu) không được tính → kết quả đẹp hơn thực tế.

**Chọn lọc kết quả:** Chỉ nhìn lệnh thắng, bỏ qua lệnh thua. Xem tổng thể, không cherry-pick.

---

Backtest trước khi trade live. Tối thiểu 50 lệnh. Kiểm tra win rate, PF, drawdown. Tránh overfitting và survivorship bias.

Bài 51: Backtest
