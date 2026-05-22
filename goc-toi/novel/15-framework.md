# Chương 15: "Của Để Dành" — Agent Frameworks

Thắng đang code TèoAI từ đầu. Mất 3 tuần.

Bác Lai ghé: "Có đồ chơi sao không xài?"

"Hả?"

"Framework. Bộ đồ nghề làm Agent có sẵn."

---

### Framework là gì?

"Framework là lego. Có sẵn khối. Chỉ việc ráp."

Các framework chính:

**Microsoft Agent Framework (MAF)**
Của Microsoft. Agent, tool, memory, planning — đều có.

**LangChain / LangGraph**
Phổ biến nhất. Nhiều tool. Cộng đồng lớn.

**AutoGen**
Của Microsoft Research. TèoAI multi-agent.

**CrewAI**
Multi-agent, dễ xài.

---

### So sánh

**Tự code:**
```python
# 200 dòng cho Agent + Tool + Memory
# 1 tuần code + 1 tuần debug
```

**Dùng framework:**
```python
from crewai import Agent, Task

agent = Agent(
    role='Xử lý đơn hàng',
    tools=[check_kho, tao_don],
)

task = Task(agent=agent)
task.run("500 suất cơm")
# 10 dòng. Chạy ngay.
```

---

### Chọn framework

- **Single agent?** → LangChain
- **Multi-agent?** → CrewAI, AutoGen
- **Microsoft stack?** → MAF + Azure
- **Cộng đồng lớn?** → LangChain

---

### 🎯 Bài học chương 15

1. Framework = đồ chơi có sẵn. Đừng code lại bánh xe.
2. Chính: MAF, LangChain, AutoGen, CrewAI
3. Tự code toàn bộ là chuyện 2023
4. Chọn framework theo nhu cầu
5. Luật: "Có lego sao phải đẽo đá?"
