| __eq __ () | __hash __ () | Sự miêu tả|
|----------|-----------|--------------------------------------------------|
| Được xác định | Được xác định | Tất cả các đối tượng sẽ so sánh không bằng nhau (ngoại trừ chính chúng) |
| Được xác định | Không nên xác định | Việc triển khai tập hợp có thể băm yêu cầu giá trị băm của khóa không thay đổi được |
| Không xác định | Không nên xác định | Nếu `__eq __()` không được xác định, `__hash __()` không được xác định. |
| Được định nghĩa | Không xác định | Các thuộc tính của class sẽ không thể sử dụng được dưới dạng bộ sưu tập có thể băm. `__hash __()` được đặt thành `None`. Tạo ngoại lệ `TypeError` nếu cố gắng truy lục hàm băm.|
| Được định nghĩa | Giữ lại từ lớp cha | `__hash__ = <ParentClass>.__ hash__` |
| Được định nghĩa | Không muốn băm | `__hash__ = None`. Tạo ngoại lệ `TypeError` nếu cố gắng truy lục hàm băm.|
