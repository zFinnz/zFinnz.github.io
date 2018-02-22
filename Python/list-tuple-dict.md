<h1 align="center"> List, Tuple, Dictionary trong Python </h1>



# List

- List là cấu trúc dữ liệu có khả năng lưu trữ các kiểu dữ liệu khác nhau
- List không tạo mới khi sửa một phần tử trong list
- List được tạo ra bởi lưu trữ một dãy các kiểu dữ liệu ngăn cách bằng dấu phẩy

## ▶ Các hàm dựng sẵn trong list

| STT | Hàm | Miêu tả|
|-----|-----|--------|
| 1 | cmp(list1,list2) | So sánh các phần tử trong 2 list |
| 2 | len(list) | Trả về độ dài của list |
| 3 | max(list) | Trả về phần tử có giá trị lớn nhất trong list |
| 4 | min(list) | Trả về phần tử có giá trị nhỏ nhất trong list |
| 5 | list(seq) | Chuyển đổi tuple thành list |
| 6 | sum(list) | trả về tổng của các phần tử trong list |
| 7 | del list[index] | xóa phần tử thứ `index` trong list |


----


## ▶ Các phương thức trong list

| STT | Phương thức | Miêu tả|
|-----|-----|--------|
| 1 | list.append(obj) | Thêm một đối tượng `obj` vào cuối list |
| 2 | list.count(x) | Đếm số lần xuất hiện của `x` trong list |
| 3 | list.extend(L) | Thêm 1 list `L` vào cuối list |
| 4 | list.insert(i,x) | Thêm `x` vào vị trí `i` trong list |
| 5 | list.remove(x) | xóa `x` khỏi list |
| 6 | list.pop([i]) | xóa 1 giá trị tại vị trí i và trả về giá trị đó |
| 7 | list.index(x) | trả về vị trí của x trong list |
| 8 | list.sort([reverse=True]) | Sắp xếp list theo thứ tự tăng dần, đảo ngượi lại với `reverse=True` |
| 9 | list.reverse() | Đảo chuỗi |
| 10 | sorted(list) | Sắp xếp list theo thứ tự tăng dần |
| 11 | enumerate(list) | Duyệt qua index và các giá trị |
| 12 | map(func, list) | Thực thi `func` lần lượt bằng các phần tử của list và trả về list mới |
| 13 | reduce(func, list) | Giống `map` nhưng nhận 2 tham số đầu vào |
| 14 | filter(func,list) | Filter sẽ gọi hàm `func` với tham số lần lượt là các phần tử của list và trả về danh sách các phần tử mà `func` trả về `True` |
| 15 | lambda x : y | với x là tham số đầu vào, y là giá trị trả về |
| 16 | ví dụ đặc biệt  | `[i*2 for i in range(10) if i%2 ==0]` Hoặc `[i*2 if i %2==0 else i*3 for i in range(10)]` |


----


# Tuple

- Tuple cũng chưa giá trị giống list nhưng tuple không thể bị thay đổi.


## ▶ Các hàm dựng sẵn trong tuple

| STT | Hàm | Miêu tả|
|-----|-----|--------|
| 1 | cmp(tuple1,tuple2) | So sánh 2 tuple với nhau|
| 2 | len(tuple) | Trả về độ dài của tuple |
| 3 | max(tuple) | Trả về phần tử có giá trị lớn nhất trong tuple |
| 4 | min(tuple) | Trả về phần tử có giá trị nhỏ nhất trong tuple |
| 5 | tuple(seq) | Chuyển đổi tuple thành tuple |


----


# Dictionary


## ▶ Các phương thức trong dictionary


| STT | Phương thức | Miêu tả|
|-----|-----|--------|
| 1 | dict.clear() | Xóa tất cả các phần tử trong `dict` |
| 2 | dict.copy() | Tạo bản sao của `dict` |
| 3 | {}.fromkeys(list or tuple,x) | Tạo dict mới từ `list` hoặc `tuple` với giá trị đều là `x` |
| 4 | dict.get(key, string(default=None)) | Trả về giá trị của `key`, nếu không có trả về `string` |
| 5 | dict.has_key(key) | Trả về `True` hoặc `False` nếu tồn tại hay không khóa `key` |
| 6 | dict.items() | Trả về `list` các cặp khóa và giá trị của `dict` |
| 7 | dict.update(dict2) | Thêm `dict2` vào `dict` |
| 8 | dict.values() | Trả về list các giá trị |
| 9 | dict.pop(key) == del dict(key) | Xóa phần tử của `dict` theo `key` |
| 10 | dict.keys() | `List` các từ khóa của `dict` |
| 11 | dict.setdefault(key, default=None) | Tương tự như get nhưng sẽ thiết lập `dict[key] = default` nếu `key` không tồn tại trong `dict` |