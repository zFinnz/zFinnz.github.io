<h1> List Python</h1>

`List` trong Python là một `container` cho phép lưu trữ nhiều kiểu dữ liệu khác nhau trong nó.

Các đặc điểm đặc trưng của `list`:

+ Được giới hạn bởi cặp ngoặc `[]`, tất cả những gì nằm trong đó được gọi là phần tử của `List`.
```py
>>> a = []
>>> type(a)
#<class 'list'>
```
+ Các phần tử của `List` được phân cách nhau ra bởi dấu phẩy `,`.

```py
>>> a = [1, 2, 3, 4]
>>> type(a)
#<class 'list'>
```

+ `List` có khả năng chứa mọi kiểu giá trị, đối tượng trong Python. Và bao gồm cùng loại hay nhiều loại hoặc các đối tượng phức tạp như `fucntion`, `module`, `class`.

```py
def foo(): 
	pass 
 
>>> a = [1, 2, 3, 4]
>>> a = [1, '5', (1, 2, 3), [1, 2, 3], foo] 
# list a chứa integer, string, tuple, list, function
>>> type(a)
#<class 'list'>
```

+ `List` được sắp xếp.
`List` là một chứa các đối tượng được sắp xếp. Thứ tự mà bạn chỉ định các phần tử khi bạn khởi tạo `list` là một đặc tính sẵn có và được duy trì của `list`. Vì vậy, Các danh sách có cùng các phần tử nhưng theo thứ tự khác nhau thì không giống nhau.
```py
>>> a  =  [ 1, 2, 3, 4 ] 
>>> b  =  [ 4, 3, 2, 1 ] 
>>> a == b
False
>>> a  is  b 
False
```
+ Các phần tử danh sách có thể được truy cập theo chỉ mục (`index`).
Các phần tử riêng lẻ trong `list` có thể truy cập bằng cách sử dụng chỉ mục trong dấu ngoặc vuông (`[]`)
```py
>>> a = ['a', 'b', 'c', 'd', 'e', 'f']
>>> a[0]
'a'
>>> a[1]
'b'
```
+ Danh sách chỉ mục được bắt đầu từ `0` đến `len(list)` hoặc có thể chỉ mục âm từ bên phải sang trái từ `-1` đến `-len(list)-1`.
Hình ảnh
Cú pháp `list slice` là:
```py
a[start:end:step]
```
Trong đó:
+ `a` là danh sách cần cắt
+ `start` là điểm bắt đầu
+ `end` là điểm kết thúc
Cách cách hoạt động của cắt chuỗi:
+ `start` và `end` có thể là số âm hoặc dương.
```py
>>> a = ['a', 'b', 'c', 'd', 'e', 'f']
>>> a[1:5]
['b', 'c', 'd', 'e']
>>> a[-1:-4]
['f', 'e', 'd', 'c']
```
+ Nếu `start` bị bỏ qua thì điểm cắt bắt đầu từ đầu danh sách và `end` bị bỏ qua thì điểm cắt đến cuối danh sách.
```py
>>> a = ['a', 'b', 'c', 'd', 'e', 'f']
>>> a[:3]
['a', 'b', 'c', 'd',]
>>> a[2:]
['c', 'd', 'e', 'f']
```
+ `step` có thể là âm hoặc dương
```py
>>> a = ['a', 'b', 'c', 'd', 'e', 'f']
>>> a[1:5:2]
['b', 'd']
>>> a[6:0:-2]
['f', 'd', 'b']
```
+ Cú pháp đảo ngược chuỗi
```py
>>> a = ['a', 'b', 'c', 'd', 'e', 'f']
>>> a[::-1]
['f', 'e', 'd', 'c', 'b', 'a']
```

+ Danh sách có thể được lồng vào độ sâu tùy ý.
```py
>>> x = ['a', ['bb', ['ccc', 'ddd'], 'ee', 'ff'], 'g', ['hh', 'ii'], 'j']
>>> x
['a', ['bb', ['ccc', 'ddd'], 'ee', 'ff'], 'g', ['hh', 'ii'], 'j']
>>> x[1][0]
'bb'
```
+ Danh sách có thể thay đổi.
Ta có thể thay đổi giá trị `list` trong Python bằng cách lập chỉ mục và gán giá trị.
```py
>>> a = ['a', 'b', 'c', 'd', 'e', 'f']
>>> a[0]= 'x'
>>> a
['x', 'b', 'c', 'd', 'e', 'f']
>>> a[6] = 'y'
['x', 'b', 'c', 'd', 'e', 'y']
>>> a[2:4] = ['l', 't']
>>> a
['x', 'b', 'c', 'd', 'e', 'y']
```
Và ta có thể xóa mục trong danh sách bằng lệnh `del`.
```py
>>> a = ['a', 'b', 'c', 'd', 'e', 'f']
>>> del a[0]
>>> a
['b', 'c', 'd', 'e', 'f']
```

Toán tử trong list
+ Toán tử `in`
Trả về `True` nếu một phần tử tồn tại trong `list`. Ngược lại, trả về `False`
```py
>>> a = [1, 2, 3, 4]
>>> 1 in a
True
>>> 5 in a
False
```
+ Toán tử `not in`
Trả về `True` nếu một phần tử không tồn tại trong `list`. Ngược lại, trả về `False`
```py
>>> a = [1, 2, 3, 4]
>>> 1 not in a
False
>>> 5 not in a
True
```
+ Toán tử `+`
Cho phép nối hai hoặc nhiều chuối với nhau.
```py
>>> a = [1, 2, 3, 4]
>>> b = [5, 6, 7]
>>> a + b
[1, 2, 3, 4, 5, 6, 7]
```
+ Toán tử `*` 
Cho phép tạo ra một list mới có số lượng phần tử được nhân lên.
```py
>>> a = [1, 2, 3]
>>> a * 2
[1, 2, 3, 1, 2, 3]
```
Toán tử `==` và `!=`
So sánh hai hay nhiều `list` với nhau
```py
>>> a = [1, 2, 3]
>>> b = [i for i in range(1,3)]
>>> a == b
True
>>> a != b
False
```


Các hàm dựng sẵn trong `list`

| Hàm | Chú thích |
|------|----------|
| [list.append()](http://www.0xpan.blogspot.com/2018/12/list-trong-python.html#load-h4-0) | Thêm một đối tượng `obj` vào cuối `list` |
| [list.count()](http://www.0xpan.blogspot.com/2018/12/list-trong-python.html#load-h4-1) | Đếm xem có bao nhêu lần mà obj xuất hiện trong `list` |
| [list.extend()](http://www.0xpan.blogspot.com/2018/12/list-trong-python.html#load-h4-2) | Cộng thêm các nội dung của seq vào cuối `list` |
| [list.index()](http://www.0xpan.blogspot.com/2018/12/list-trong-python.html#load-h4-3) | Trả về chỉ mục đầu tiên tìm thấy `obj` xuất hiện trong `list` |
| [list.insert()](http://www.0xpan.blogspot.com/2018/12/list-trong-python.html#load-h4-4) | Chèn đối tượng `obj` và list tại vị trí `index` |
| [list.pop()](http://www.0xpan.blogspot.com/2018/12/list-trong-python.html#load-h4-5) | Xóa và trả về đối tượng có chỉ mục `index` được cung cấp trước, mặc định là phần tử cuối cùng |
| [list.remove()](http://www.0xpan.blogspot.com/2018/12/list-trong-python.html#load-h4-6) | Xóa một đối tượng `obj` từ `list` |
| [list.reverse()](http://www.0xpan.blogspot.com/2018/12/list-trong-python.html#load-h4-7) | Đảo ngược thứ tự các phần tử trong `list` |
| [list.sort()](http://www.0xpan.blogspot.com/2018/12/list-trong-python.html#load-h4-8) | Xắp xếp các đối tượng của `list`, sử dụng hàm so sánh nếu được cung cấp |
| [list.copy()](http://www.0xpan.blogspot.com/2018/12/list-trong-python.html#load-h4-9) | Trả về một bản sao của `list` |
| [list.clear()](http://www.0xpan.blogspot.com/2018/12/list-trong-python.html#load-h4-10) | Xóa tất cả các phần tử khỏi `list` |

List.append(item)
Phương thức này thêm một đối tượng `item` vào cuối list. các `item` có thể là `number`, `string`, `list`, `dict`...
Phương thức này không trả về bất cứ giá trị nào, nhưng nó cập nhật list đã cho.
```py
>>> a = ['a', 'b', 'c', 'd', 'e', 'f']
>>> a.append('g')
>>> a
['a', 'b', 'c', 'd', 'e', 'f', 'g']
# Trường hợp thêm 1 list vào list đã cho
>>> a.append(['h','k'])
>>> a
['a', 'b', 'c', 'd', 'e', 'f', 'g', ['h','k']]
```
Nếu bạn muốn thêm các chỉ mục thay vì toàn bộ danh sách, hãy tham khảo phuwong thức list.extend().

List.count(obj)
Phương thức này đếm xem có bao nhiêu lần mà `obj` xuất hiện trong chuỗi và trả về số lần đó.
```py
>>> a = ['a', 'b', 'c', 'd', 'e', 'f']
>>> a.count('a')
1
>>> a.count('x')
0
```
List.extend(iterable)
Phương thức này thêm các phần tử của `iterable` vào cuối `list`. Phương thức này không trả về bất cứ giá trị nào, nó chỉ sửa đổi danh sách gốc.
```py
>>> a = ['a', 'b', 'c', 'd', 'e', 'f']
# Với đối tượng được thêm là list
>>> a.extend(['g', 'h'])
>>> a
['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
# Với đối tượng được thêm là tuple
>>> a.extend(('i', 'k'))
>>> a
['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'k']
```
List.index(obj)
Phương thức này trả về chỉ mục đầu tiên tìm thấy `obj` xuất hiện trong list. Nếu không tìm thấy, phương thức sẽ tạo một exception `valueError`.
```py
>>> a = ['a', 'b', 'c', 'd', 'e', 'f']
>>> a.index('b')
1
>>> a.index('z')
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
ValueError: 'z' is not in list
```
List.insert(index, obj)
Phương thức chèn đối tượng `obj` vào trong list tại `index` đã cho. Phương thức không trả về giá trị nào
```py
>>> a = ['a', 'b', 'c', 'd', 'e', 'f']
>>> a.insert(3, 'y')
['a', 'b', 'c', 'y', 'd', 'e', 'f']
# chèn đối tượng tuple vào list
>>> a.insert(2, ('x', 'z'))
a.insert(2, ('x', 'z'))
```
List.pop(index[=list[-1]])
phương thức xóa và trả về phần tử có chỉ mục `index`, nếu không được cung cấp thì mặc định sẽ xóa phần tử cuối cùng của chuỗi, và trả về đối tượng bị xóa. Nếu chỉ mục được truyền không nằm trong phạm vi nó sẽ tạo ra ngoại lệ `indexError`.
```py
>>> a = ['a', 'b', 'c', 'd', 'e', 'f']
>>> a.pop(2)
>>> a
['a', 'b', 'd', 'e', 'f']
>>> a.pop()
>>> a
['a', 'b', 'd', 'e']
>>> a.pop(10)
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
IndexError: pop index out of range
```
List.remove(obj)
Phương thức xóa đối tượng `obj` từ list mà nó tìm thấy đầu tiên và không trả về giá trị nào. Nếu phần tử được truyền không tìm thấy, một ngoại lệ `valueError` được tạo ra.
```py
>>> a = ['a', 'b', 'c', 'd', 'e', 'f']
>>> a.remove('f')
>>> a
['a', 'b', 'c', 'd', 'e']
>>> a.remove('z')
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
ValueError: list.remove(x): x not in list
```
List.reverse()
Phương thức này đảo ngược thứ tự các đối tượng trong `list` và không trả về giá trị nào.
```py
>>> a = ['a', 'b', 'c', 'd', 'e', 'f']
>>> a.reverse()
['f', 'e', 'd', 'c', 'b', 'a']
```


List.sort(key=..., reverse=...)
Phương thức này sắp xếp các đối tượng của `list` theo thứ tự tăng dần hoặc giảm dần, sử dụng hàm so sánh nếu được cung cấp. Phương thức không trả về bất cứ giá trị nào.
```py
>>> a = ['b', 'c', 'a', 'd', 'f', 'e']
>>> a.sort()
>>> a
['a', 'b', 'c', 'd', 'e', 'f']
```
Sắp xếp danh sách theo thứ tự giảm dần 
```py
>>> a = ['b', 'c', 'a', 'd', 'f', 'e']
>>> a.sort(reverse=True)
>>> a
['f', 'e', 'd', 'c', 'b', 'a']
```
Bạn cũng có thể đảo ngược chuỗi bằng cách sử dụng `slice` nhưng nó sẽ không làm thay đổi danh sách ban đầu.
```py
>>> a = ['b', 'c', 'a', 'd', 'f', 'e']
>>> a[::-1]
['b', 'c', 'a', 'd', 'f', 'e']
>>> a
['b', 'c', 'a', 'd', 'f', 'e']
```

List.copy()
Phương thức này trả về một đối tượng bản sao của danh sách, nó không nhận bất kì tham số nào và cũng không sửa đổi danh sách ban đầu.
```py
>>> a = ['a', 'b', 'c', 'd', 'e', 'f']
>>> b = a.copy
>>> a is b
False
>>> b.append('z')
>>> a
['a', 'b', 'c', 'd', 'e', 'f']
>>> b
['a', 'b', 'c', 'd', 'e', 'f', 'z']
```
Bạn cũng có thể sao chép danh sách bằng cách sử dụng `slice`
```py
>>> a = ['a', 'b', 'c', 'd', 'e', 'f']
>>> b = a[:]
>>> b
['a', 'b', 'c', 'd', 'e', 'f']
>>> a is b
False
```

List.clear()
Phương thức xóa tất cả phần tử khỏi danh sách, phương thức không nhận bất kì tham số nào và không trả về giá trị nào.
```py
>>> a = ['a', 'b', 'c', 'd', 'e', 'f']
>>> a.clear()
>>> a
[]
```

Các hàm dựng sẵn xử lý list

| Hàm | Miêu tả |
|------|-------|
| [list()](http://www.0xpan.blogspot.com/2018/11/ham-built-in-trong-python.html#load-h4-38) | chuyển đổi kiểu dữ liệu của một biến sang dạng `list` |
| [len()](http://www.0xpan.blogspot.com/2018/11/ham-built-in-trong-python.html#load-h4-37) | Trả về số lượng phần tử trong `list` |
| [max()](http://www.0xpan.blogspot.com/2018/11/ham-built-in-trong-python.html#load-h4-41) | Trả về phần tử có giá trị lớn nhất trong `list` |
| [min()](http://www.0xpan.blogspot.com/2018/11/ham-built-in-trong-python.html#load-h4-43) | Trả về phần tử có giá trị nhỏ nhất trong `list` |
| [all()](http://www.0xpan.blogspot.com/2018/11/ham-built-in-trong-python.html#load-h4-1) | Trả về `True` nếu tất cả các phần tử của `list` là đúng (hoặc nếu là `list` rỗng) |
| [any()](http://www.0xpan.blogspot.com/2018/11/ham-built-in-trong-python.html#load-h4-2) | Trả về `True` nếu bất kỳ phần tử nào của danh sách là đúng. Nếu `list` rỗng, trả về `False` |
| [enumerate()](http://www.0xpan.blogspot.com/2018/11/ham-built-in-trong-python.html#load-h4-18) | Trả lại một đối tượng `enumerate`. Nó chứa chỉ mục và giá trị của tất cả các mục trong `list` dưới dạng một `tuple`. |
| [sorted()](http://www.0xpan.blogspot.com/2018/11/ham-built-in-trong-python.html#load-h4-59) | Trả về một `list` mới được sắp xếp |
| [sum()](http://www.0xpan.blogspot.com/2018/11/ham-built-in-trong-python.html#load-h4-62) | Trả về tổng của tất cả các phần tử trong `list` |


