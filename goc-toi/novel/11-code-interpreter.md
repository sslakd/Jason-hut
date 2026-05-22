# Chương 11: "Code Tự Động" — Code Interpreter

Một hôm, chị Vân gửi file Excel: "Tính doanh thu tháng này, phân tích theo khu vực."

TèoAI: "File Excel? Tôi chỉ biết đọc tin nhắn."

"Vkl." — Thắng. "Đây là lúc cần Code Interpreter."

---

### Code Interpreter

Tool đặc biệt: Agent viết code Python tại chỗ, chạy code đó, lấy kết quả.

"LLM viết code. Code chạy. LLM đọc kết quả."

Quy trình:

1. Chị Vân: "Tính doanh thu"
2. LLM viết: `df.groupby('region')['revenue'].sum()`
3. Chạy code
4. KQ: "Miền Bắc 200tr, Miền Nam 150tr"
5. LLM trả lời chị Vân

---

### Ví dụ

```python
# Agent viết code này:
import pandas as pd
df = pd.read_excel('doanh_thu.xlsx')
summary = df.groupby('khu_vuc')['doanh_thu'].sum()
print(summary)

# Vẽ biểu đồ
import matplotlib.pyplot as plt
summary.plot(kind='bar')
plt.savefig('bieu_do.png')
```

"Thấy chưa? Agent tự code, tự chạy, tự vẽ biểu đồ. Éo cần dev."

---

### Rủi ro

"Code Interpreter mạnh nhất và nguy hiểm nhất."

**1. Code xóa dữ liệu**
`os.remove('/data/*')` — và nếu có quyền, nó xóa thật.
→ Sandbox. Chạy trong môi trường cách ly.

**2. Vòng lặp**
`while True:` — tốn CPU, tốn $.
→ Timeout 30 giây.

**3. Package lạ**
`pip install package_lạ` — có thể là malware.
→ Chỉ cho package được duyệt.

---

### 🎯 Bài học chương 11

1. **Code Interpreter** = LLM viết code → chạy → đọc kết quả
2. Biến Agent thành data analyst
3. **Cực kỳ nguy hiểm** nếu không bảo vệ
4. 3 biện pháp: sandbox, timeout, whitelist
5. Nguyên tắc: "Cho Agent viết code. Nhưng đừng cho nó xóa database."
