# Chương 8: "Việc Bé Xé Ra Việc To" — Planning

THĂNG LONG phát triển. Khách nhiều. TèoAI không đủ.

"Tao cần Agent xử lý quy trình dài." — Chị Vân. "Ví dụ: khách mới đăng ký, phải:

1. Gửi tin nhắn chào
2. Tạo tài khoản
3. Cài mặc định
4. Gửi SMS xác nhận
5. Hẹn gọi lại sau 3 ngày

Tự động từ A đến Z."

"Đấy là **Planning Pattern**, chị ạ." — Thắng.

---

### Planning là gì?

"Thay vì code cứng 5 bước, mày nói với Agent: 'Mục tiêu: onboard khách mới.' Agent tự suy các bước."

"Giống mày bảo thực tập sinh: 'Lo vụ khách mới nhé.' Nó phải tự nghĩ: chào trước, tạo tài khoản, gửi xác nhận... Quên bước nào là hỏng."

Code:

```python
class AgentCoKeHoach:
    def lap_ke_hoach(self, muc_tieu):
        # LLM tự suy ra các bước
        self.ke_hoach = self.llm.sinh_ke_hoach(muc_tieu)
        # Ví dụ:
        # 1. gui_tin_chao
        # 2. tao_tai_khoan
        # 3. cai_dat_mac_dinh
        # 4. gui_sms_xac_nhan
        # 5. hen_gui_lai
        
        for buoc in self.ke_hoach:
            ket_qua = self.tools[buoc['tool']](buoc['tham_so'])
            
            # Nếu bước nào fail
            if not self.llm.kiem_tra(ket_qua):
                self.lap_ke_hoach_moi(buoc, ket_qua)  # Làm lại
                break
        
        return "Xong"
```

---

### Re-planning

"Một hôm Agent đang onboard, bước 2 (tạo tài khoản) fail — API đối tác lỗi."

"Agent thường: im re, đứng hình."

"Agent có Planning: nó nhận ra fail. Nó tạo plan mới: 'Chờ 5p thử lại. Vẫn fail → báo admin.'"

"Đấy là **Re-Planning**. Biết sửa sai."

---

### Khi Planning fail

**1. Over-planning:** Agent lập kế hoạch 20 bước để gửi 1 tin nhắn. Tốn thời gian, tốn $.

**2. Vòng lặp vô tận:** Không tìm được giải pháp. Cứ replan mãi. Không bao giờ xong.

**3. Bước ảo:** LLM sinh ra bước vô lý. 'Bước 6: Mời khách đi ăn tối.' LLM nghĩ hợp lý.

Solution:
- Giới hạn số bước (max steps)
- Giới hạn số lần thử lại (max retries)
- Kiểm tra mỗi bước có tool tương ứng không

---

### 🎯 Bài học chương 8

1. **Planning Pattern**: Agent tự chia việc lớn → nhỏ → làm
2. **Re-Planning**: biết điều chỉnh khi fail
3. 3 vấn đề: over-planning, vòng lặp, bước ảo
4. Giải pháp: max steps, max retries, validate plan
5. Nguyên tắc: "Kế hoạch tốt là kế hoạch biết sửa sai"
