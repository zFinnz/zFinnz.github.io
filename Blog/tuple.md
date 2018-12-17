<h1> Tuple trong python </h1>

Python cũng cấp một loại lưu trữ dữ liệu nữa là `tuple` tương tự với kiểu [list](https://www.0xpan.blogspot.com/2018/12/list-trong-python.html) nhưng có một vài đặc điểm khác biệt được nói sau đây.

Các đặc tính của kiểu dữ liệu tuple

+ Các `tuple` được xác định bằng cách đặt các phần tử trong ngoặc đơn (`()`) thay vì ngoặc vuông như `list` và các nhau bởi dấu phẩy (`,`) như sau:
```py
(<value_1>, <value_2>, ....., <value_n>)
```
+ Sử dụng `constructor Tuple` để khởi tạo `tuple`
```py
>>> a = tuple([1, 2, 3])
>>> a
(1, 2, 3)
>>> b = tuple(i for in in range(10) if i%2 == 0)
>>> b
(0, 2, 4, 6, 8)
```
+ `Tuple` có khả năng chứa mọi loại đối tượng trong Python.
```py
>>> a = (1, 'hello', [1, 2, 3], {'a':1, 'b': 2})
>>> type(a)
#<class 'tuple'>
```
+ `Tuple` là một đối tượng [immutable](https://www.0xpan.blogspot.com/2018/11/mutable-va-immutable-trong-python.html)
+ `Tuple` có thể lập chỉ mục (`slice`) như với kiểu `list`. Một số ví dụ:
```py
>>> a = (1, 2, 3, 4, 5)
>>> type(a)
#<class 'tuple'>
>>> a[0]
1
>>> a[1::2]
(2, 4)
>>> a[::-1]
(5, 4, 3, 2, 1)
```
+ Tuy nhiên `tuple` lại không thể sửa đổi được
```py
>>> a = (1, 2, 3, 4, 5)
>>> a[0] = 0
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: 'tuple' object does not support item assignment
```
+ `Tuple` không phải hoàn toàn là một đối tượng `immutable`
`Tuple` là một đối tượng `immutable` nhưng không phải luôn luôn như vậy. Giá trị của `tuple` có thể thay đổi nếu như trong `tuple` có chứa một đối tượng `mutable` và lúc đó `tuple` trở thành 1 đối tượng `mutable`
```py
>>> a = (1, 2, [3, 4])
>>> a[2][0] = 2
>>> a
(1, 2, [2, 4])
```
+ Chúng ta không thể xóa từng phần tử của `tuple` mà chỉ có thể xóa toàn bộ `tuple` bằng lệnh `del`
```py
>>> a = (1, 2, 3, 4, 5)
>>> del a[0]
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: 'tuple' object doesn't support item deletion'
>>> del a
>>> a
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
NameError: name 'a' is not defined
```

Các toán tử trong tuple

Toán tử `+`
Ta có thể dùng toán tử `+` để nối 2 hay nhiều tuple với nhau tượng tự như kiểu `string`
```py
>>> a = (1, 2, 3, 4, 5)
>>> b = (6, 7, 8, 9)
>>> a + b
(1, 2, 3, 4, 5, 6, 7, 8, 9)
```
Toán tử `*`
```py
>>> a = (1, 2, 3, 4, 5)
>>> a*2
(1, 2, 3, 4, 5, 1, 2, 3, 4, 5)
```
Toán tử `in` hoặc `not in`
```py
>>> a = (1, 2, 3, 4, 5)
>>> 1 in a
True
>>> 5 not in a
False
```
+ Toán tử == và != 
So sánh hai hay nhiều `tuple` với nhau
```
>>> a = (1, 2, 3)
>>> b = tuple(i for i in range(1,4))
>>> a == b
True
>>> a != b
False
```


Các ưu điểm của `tuple` so với kiểu `list`:
+ `Tuple` được sử dụng cho các kiểu dữ liệu khác nhau còn `lisst` cho các kiểu giống nhau.
+ Vì `tuple` và đối tượng `immuatble` nên việc lặp qua `tuple` nhanh hơn so với danh sách, nên có thể tăng hiệu suất.
+ Các `tuple` chứa các phần tử dữ liệu `immutable` có thể sử dụng làm khóa cho `dictionary` còn `list` thì không thể.
+ Nếu bạn có dữ liệu không thay đổi, thì việc triển khai nó dưới dạng `tuple` sẽ đảm bảo nó không thể bị sửa đổi.


Các phương thức trong tuple

| Phương thức | Miêu tả |
|-------------|---------|
| tuple.count(x) | Trả về số lần `x` được tìm thấy trong `tuple` |
| tuple.index(x) | Trả về số chỉ mục đầu tiên bằng `x` được tìm thấy |

```py
>>> tuple_a = ('a', 'b', 'c', 'd', 'a')
>>> tuple_a.count('a')
2
>>> tuple_a.index('b')
1
```

Các hàm tích hợp python với tuple

| Hàm | Miêu tả |
|------|--------|
| [all()](https://0xpan.blogspot.com/2018/11/ham-built-in-trong-python.html#load-h4-1) | Trả về `True` nếu tất cả các phần tử của `tuple` là `True` hoặc `tuple` rỗng |
| [any()](https://0xpan.blogspot.com/2018/11/ham-built-in-trong-python.html#load-h4-2) | Trả về `False` nếu bất kì phần tử của `tuple` là `True` , nếu `tuple` rỗng trả về `False` |
| [enumerate()](https://0xpan.blogspot.com/2018/11/ham-built-in-trong-python.html#load-h4-18) | Trả về một đối tượng liệt kê. Nó chỉ chứa số và giá trị của tất cả các mục `tuple` dưới dạng cặp |
| [len()](https://0xpan.blogspot.com/2018/11/ham-built-in-trong-python.html#load-h4-37) | Trả về độ dài của `tuple` |
| [max()](https://0xpan.blogspot.com/2018/11/ham-built-in-trong-python.html#load-h4-41) | Trả về mục lớn nhất trong `tuple` |
| [min()](https://0xpan.blogspot.com/2018/11/ham-built-in-trong-python.html#load-h4-43) | Trả về mục nhỏ nhất trong `tuple` |
| [sorted()](https://0xpan.blogspot.com/2018/11/ham-built-in-trong-python.html#load-h4-59) | Trả về một danh sách mới được sắp xếp của `tuple`, danh sách cũ không đổi. |
| [sum()](https://0xpan.blogspot.com/2018/11/ham-built-in-trong-python.html#load-h4-62) | Trả về tổng của tất cả các phần tử trong `tuple` |
| [tuple()](https://0xpan.blogspot.com/2018/11/ham-built-in-trong-python.html#load-h4-64) | Chuyển đổi một `iterable` (`list`, `string`, `set`, `dict`) thành một `tuple`. |
