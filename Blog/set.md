<h1> set trong python</h1>

Set là một `container`, tuy nhiên không được sử dụng nhiều bằng `list` hay `tuple` trong Python.
Các đặc điểm của set

+ Được giới hạn bởi cặp ngoặc (`{}`), các phần tử trong `set` được ngăn cách bằng dấu phẩy (`,`).
+ `Set` không có thứ tự vì vậy các phương thức `indexing` và `slice` sẽ không được hỗ trợ trong `set`.
+ Các phần tử của `set` là duy nhất, không được phép trùng lặp.
+ `Set` có thể sửa đổi (`mutable`) nhưng các phần tử trong `set` phải thuộc loại không thể thay đổi (`immutable`), vì vậy `set` không thể chứa 1 `set` khác.

```py
>>> a = {1, 'a', (1, 2, 3)}
# set có thể chứa nhiều kiểu dữ liệu khác nhau
>>> type(a)
# <class 'set'>
>>> b = {[1, 2], [3, 4]}
# sset không thể chứa list vì list và đối tượng `mutable`
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: unhashable type: 'list'
```
Khởi tạo set

+ Sử dụng cặp ngoặc `{}` và đặt giá trị bên trong
Cú pháp:
```py
set_x = {<value_1>, <value_2>, .., <value_n>}
```
+ Sử dụng set contructor
Cú pháp:
```py
set(iterable)
```
```py
>>> a = set((1, 2, 3, 4))
# khởi tạo set từ đối tượng tuple
>>> a
{1, 2, 3}
>>> b = set('aaaaaaaa')
# khởi tạo set từ đối tượng string
>>> b
{'a'}
```
+ Sử dụng set comprehension
```py
>>> a = { value for value in range(3)}
>>> a
{0, 1, 2}
```

Toán tử trong set

+ Toán tử `in`
Trả về `True` nếu `value` tồn tại trong `set`. Ngược lại trả về `False`.
```py
>>> 1 in {1, 2, 3, 4}
True
>>> 5 in {1, 2, 3, 4}
False
```
+ Toán tử `not in`
Ngược với toán tử `in`. Trả về `True` nếu `value` không tồn tại trong `set`, ngược lại sẽ trả về `False`.
```py
>>> 1 not in {1, 2, 3, 4}
False
>>> 5 not in {1, 2, 3, 4}
True
```
+ Toán tử `-`
Cú pháp:
```py
set1 - set2 - ..... - setn
```
Trả về một `set` gồm các phần tử chỉ tồn tại trong `set1` mà không tồn tại trong `set2`...`setn`.
```py
>>> set1 = {1, 2, 3, 4, 5}
>>> set2 = {1, 2, 3}
>>> set1 - set2
{4, 5}
```
+ Toán tử `&`
Cú pháp:
```py
set1 & set2 & ..... & setn
```
Trả về một `set` chứa các phần tử cùng tồn tại trong cả tất cả các `set`.
```py
>>> set1 = {1, 2, 3, 4, 5}
>>> set2 = {1, 2, 3}
>>> set1 & set2
{1, 2, 3}
```
+ Toán tử `|`
Cú pháp:
```py
set1 | set2 | ... | setn
```
Trả về một `set` chứa tất cả các phần tử tồn tại trong các `set` sau khi lọai các phần tử trùng.
```py
>>> set1 = {1, 2, 3, 4, 5}
>>> set2 = {1, 2, 3}
>>> set1 | set2
{1, 2, 3, 4, 5}
```
+ Toán tử `^`
Cú pháp:
```
set1 ^ set2 ..... ^ setn
```
Trả về một `set` chứa tất cả các phần tử chỉ tồn tại ở một trong 2 `set`, có nghĩa là các phần tử giống nhau giữa 2 `set` sẽ bị loại bỏ.
```py
>>> set_1 = {1, 2, 3, 4, 5}
>>> set_2 = {1, 2, 3}
>>> set_1 ^ set_2 
{4, 5}
```
+ Toán tử `==` và `!=` 
So sánh hai hay nhiều `set` với nhau
```py
>>> a = {1,2,3}
>>> b = set({i for i in range(1,4)})
>>> a == b
True
>>> a != b
False
```

Các phương thức dựng sẵn trong set

| Phương thức | Miêu tả |
|------------|---------|
| [set.add()](https://0xpan.blogspot.com/2018/12/set-trong-python.html#load-h4-0) | Thêm một phần tử vào `set` |
| [set.clear()](https://0xpan.blogspot.com/2018/12/set-trong-python.html#load-h4-1) | Xóa tất cả phần tử khỏi `set` |
| [set.copy()](https://0xpan.blogspot.com/2018/12/set-trong-python.html#load-h4-2) | Trả về một bản sao của `set` |
| [set.difference()](https://0xpan.blogspot.com/2018/12/set-trong-python.html#load-h4-3) | Trả về một `set` mới chứa các phần tử khác biệt giữa hai hay nhiều `set` |
| [set.difference_update()](https://0xpan.blogspot.com/2018/12/set-trong-python.html#load-h4-4) | Xóa tất cả các thành phần của `set` khác tồn tại trong `set` này |
| [set.discard()](https://0xpan.blogspot.com/2018/12/set-trong-python.html#load-h4-5) | Xóa một phần tử khỏi `set` nếu nó tồn tại trong `set` |
| [set.intersection()](https://0xpan.blogspot.com/2018/12/set-trong-python.html#load-h4-6) | Trả về một `set` mới chứa các phần tử giống nhau giữa 2 `set` |
| [set.intersection_update()](https://0xpan.blogspot.com/2018/12/set-trong-python.html#load-h4-7) | Cập nhật `set` với các phần tử giống nhau giữa nó và `set` khác |
| [set.isdisjoint()](https://0xpan.blogspot.com/2018/12/set-trong-python.html#load-h4-8) | Trả về `True` nếu 2 `set` không có phần tử giống nhau |
| [set.issubset()](https://0xpan.blogspot.com/2018/12/set-trong-python.html#load-h4-9) | Trả về `True` nếu `set` khác chứa các phần tử của `set` này |
| [set.issuperset()](https://0xpan.blogspot.com/2018/12/set-trong-python.html#load-h4-10) | Trả về `True` nếu `set` này chứa các phần tử của `set` khác |
| [set.pop()](https://0xpan.blogspot.com/2018/12/set-trong-python.html#load-h4-11) | Loại bỏ và trả về một phần tử tùy ý.Tạo ra `keyError` nếu `set` rỗng |
| [set.remove()](https://0xpan.blogspot.com/2018/12/set-trong-python.html#load-h4-12) | Loại bỏ một phần tử khỏi `set`. Nếu phần tử không tồn tại tạo ra `KeyError` |
| [set.symmetric_difference()](https://0xpan.blogspot.com/2018/12/set-trong-python.html#load-h4-13) | Trả về `set` mới chứa phần tử khác biệt đối xứng giữa 2 `set` |
| [set.symmetric_difference_update()](https://0xpan.blogspot.com/2018/12/set-trong-python.html#load-h4-14) | Cập nhật một `set` với các phần tử khác biệt đối xứng giữa nó và `set` khác |
| [set.union()](https://0xpan.blogspot.com/2018/12/set-trong-python.html#load-h4-15) | Trả về sự kết hợp của các `set` trong một `set` mới |
| [set.update()](https://0xpan.blogspot.com/2018/12/set-trong-python.html#load-h4-16) | Cập nhật các thiết lập với sự kết hợp của chính nó và `set` khác |

set.add(element)
Thêm một đối tượng `element` vào `set`, `element` phải là đối tượng `immutable`. Nếu `element` đã có trong `set`, `element` sẽ không được thêm vào.
```py
>>> a = {1, 2, 3}
>>> a.add(4)
>>> a
{1, 2, 3, 4}
```
Ngoài ra, nếu bạn sử dụng phương thức này khi bạn khởi tạo một đối tượng `set` , `element` sẽ không được thêm vào, bạn sẽ nhận được giá trị `None`
```py
>>> a = set()
>>> a.add(5)
>>> a
None
```

Set.clear()
Phương thức này loại bỏ tất cả các phần tử của `set`.
```py
>>> a = {1, 2, 3, 4}
>>> a.clear()
>>> a
{}
```

Set.copy()

Trả về một bản sao của `set`
```py
>>> a  = {1, 2, 3, 4}
>>> b = a.copy()
>>> b
{1, 2, 3, 4}
```
Bạn cũng có thể sao chép `set` bằng cách sử dụng toán tử `=`.Tuy nhiên nó sẽ không tạo ra một đối tượng mới mà sẽ trỏ về giá trị `set` ban đầu, nên khi bạn thay đổi `new_set` thì `set` cũng sẽ bị thay đổi.
```py
>>> a  = {1, 2, 3, 4}
>>> b = a
>>> b.add(5)
>>>b
{1, 2, 3, 4, 5}
>>>a
{1, 2, 3, 4, 5}
```

Set1.difference(set2[, set3...])

Tương đương với:
```py
set - set2 [-set3....]
```
Phương thức này trả về tập hợp các phần tử có trong `set1` nhưng không tồn tại trong 2 hay nhiều `set` khác.
```py
>>> a = {1, 2, 3, 4}
>>> b = {4, 5, 6}
>>> a.difference(b)
{1, 2, 3}
>>> a - b
{1, 2, 3}
```
Bạn cũng có thể chỉ định nhiều hơn 2 `set`. Khi đó thao tác được thực hiện từ trái sang phải.
```py
>>> a = {1, 2, 3, 4}
>>> b = {4, 5, 6}
>>> c = {4, 3, 9}
>>> a .difference(b, c)
{1, 2}
>>> a - b - c
{1, 2}
```

Set1.difference_update(set2[,set3...])
Phương thức cập nhật giá trị `set1` đã loại bỏ các phần tử tìm thấy trong `set2` hoặc các `set` khác.
```py
>>> a = {1, 2, 3, 4}
>>> b = {4, 5, 6}
>>> a .difference_update(b)
>>> a
{1, 2}
>>> a -= b
{1, 2}
```

Set.discard(element)

Phuwong thức loại bỏ phần tử `element` từ `set`. Nếu `element` không tồn tại, phương thức sẽ không làm gì thay vì tạo ra một ngoại lệ.
```py
>>> a = {1, 2, 3, 4}
>>> a.discard(4)
>>> a
{1, 2, 3}
>>> a.discard(5)
>>> a
{1, 2, 3}
```

Set1.intersection(set2[, set3....])
Phương thức tính giao điểm của hai hay nhiều `set`. hay nói cách khác, phương thức sẽ trả về tập hợp các phần tử đều tồn tại trong 2 hay nhiều `set`. Nếu không có phần tử nào trả về một `set` rỗng.
```py
>>> a = {1, 2, 3, 4}
>>> b = {4, 5, 6}
>>> a.intersection(b)
{4}
```

Set1.intersection_update(set2[, set3...])
Hay còn có thể biểu diễn theo các khác
```py
set &= set2[&set3.....]
```
Phương thức cập nhật `set1`, chỉ giữ lại các phần tử được tìm thấy trong cả hai `set`.

```py
>>> a = {1, 2, 3, 4}
>>> b = {4, 5, 6}
>>> a.intersection_update(b)
>>> a 
{4}
>>> a &= b
{4}
```

Set1.isdisjoint(set2)
Phương thức trả về `True` nếu `set1` và `set2` không có phần tử chung, ngượi lại `False`.

```py
>>> a = {1, 2, 3, 4}
>>> b = {4, 5, 6}
>>> a.isdisjoint(b)
False
>>> a.isdisjoint(b- {4})
True
```
Nếu phương thức trả về `True` có nghĩa là phép toán `set1 & set2` sẽ trả về `set` rỗng.
```py
>>> a = {1, 2, 3, 4}
>>> b = {5, 6}
>>> a & b 
set()
```

Set1.issubset(set2)
Phương thức trả về `True` nếu `set1` là tập hợp con của `set2`.
```py
>>> a = {1, 2, 3, 4}
>>> b = {1, 2, 3, 4, 5, 6}
>>> a.issubnet(b) 
True
```
Một `set` được coi là tập hợp con của chính nó.
```py
>>> a = {1, 2, 3, 4}
>>> a.issubnet(a)
True
```

Set1.issuperset(set2)
Phương thức trả về `True` nếu `set2` là tập hợp con của `set1`. Ngược lại trả về `False`
```py
>>> a = {1, 2, 3, 4, 5 ,6}
>>> b = {1, 2, 3, 4}
>>> a.issuperset(b) 
True
```

Set.pop()

Phương thức sẽ loại bỏ và trả về một phần tử được chọn tùy ý từ `set`. nếu `set` rỗng, phương thức sẽ tạo ra một ngoại lệ.
```py
>>> a = {1, 2, 3, 4, 5 ,6}
>>> a.pop()
6
>>> b = set()
>>> b.pop()
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
KeyError: 'pop from an empty set'
```

Set.remove(element)
Phương thức loại bỏ phần tử `element` từ `set` và tạo ra một ngoại lệ nếu `element` không tồn tại trong `set`.
```py
>>> a = {1, 2, 3, 4, 5 ,6}
>>> a.remove(6)
>>> a
{1, 2, 3, 4, 5}
>>> a.remove(7)
Traceback (most recent call last):     
  File "<stdin>", line 1, in <module>  
KeyError: 7                            
```

Set1.symmetric_difference(set2)

Phương thức trả về tập hợp loại bỏ các phần tử chung giữa `set1` và `set2`.
```py
>>> a = {1, 2, 3, 4, 5 ,6}
>>> b = {5 ,6, 7, 8}
>>> a.symmetric_difference(b)
{1, 2, 3, 4, 7, 8}
```

Set1.symmtric_diffence_update(set2)

Phương thức cập nhật `set1` loại bỏ các phần tử giống nhau giữa `set1` và `set2` hoặc giữa `set1` và các `set` khác.
```py
>>> a = {1, 2, 3, 4, 5 ,6}
>>> b = {5 ,6, 7, 8}
>>> a.symmetric_difference_update(b)
>>> a
{1, 2, 3, 4, 7, 8}
```

Set1.union(set2[, set3....])
Tương đương với:
```py
Set1 | set2 [| set3...]
```
Phương thức trả về tập hợp tồn tại trong cả hai hay nhiều `set`.
```py
>>> a = {1, 2, 3, 4, 5 ,6}
>>> b = {5 ,6, 7, 8}
>>> c = {9, 10}
>>> a.union(b, c)
{1, 2, 3, 4, 5 ,6, 7, 8, 9, 10}
>>> a | b | c
{1, 2, 3, 4, 5 ,6, 7, 8, 9, 10}
```

S1.update(set2[, set3....])
Tương tự với:
```py
Set1 |= set2 [| set3.....]
```
Phương thức thêm vào `set1` những phần tử có trong nhưng `set` khác mà không có trong `set1` và không có giá trị trả về (trả về `None`) . Nếu bạn muốn thêm các tập hợp mà không phải `set`(như `list`, `string`, `tuple`, `dict`...) bạn chỉ cần dùng cú pháp:
```py
set.update(set(X))
# Hoặc
set.update(X)
#  X có thể là list, string...
```

```py
>>> a = {1, 2, 3, 4, 5 ,6}
>>> b = {5 ,6, 7, 8}
>>> c = {9, 10}
>>> a.update(b, c)
>>> a 
{1, 2, 3, 4, 5 ,6, 7, 8, 9, 10}
>>> a |= b | c
>>> a 
{1, 2, 3, 4, 5 ,6, 7, 8, 9, 10}
```

Các hàm dựng sẵn trong Python với set

| Hàm | Miêu tả |
|------|-------|
| [all()](https://0xpan.blogspot.com/2018/11/ham-built-in-trong-python.html#load-h4-1) | Trả về `True` nếu tất cả các phần tử của `set` là `True`, hoặc nếu `set` rỗng. |
| [any()](https://0xpan.blogspot.com/2018/11/ham-built-in-trong-python.html#load-h4-2) | Trả về `True` nếu bất kì phần tử của `set` là `True`, hoặc nếu `set` rỗng trả về `False` |
| [enumerate()](https://0xpan.blogspot.com/2018/11/ham-built-in-trong-python.html#load-h4-18) | Trả lại một đối tượng liệt kê. Nó chứa chỉ mục và giá trị của tất cả các mục được đặt thành một cặp. |
| [len()](https://0xpan.blogspot.com/2018/11/ham-built-in-trong-python.html#load-h4-37) | Trả về độ lớn của `set` |
| [max()](https://0xpan.blogspot.com/2018/11/ham-built-in-trong-python.html#load-h4-41) | Trả về phần tử lớn nhất của `set` |
| [min()](https://0xpan.blogspot.com/2018/11/ham-built-in-trong-python.html#load-h4-43) | Trả về phần tử nhỏ nhất của `set` |
| [sorted()](https://0xpan.blogspot.com/2018/11/ham-built-in-trong-python.html#load-h4-59) | Trả về một `set` được sắp xếp |
| [sum()](https://0xpan.blogspot.com/2018/11/ham-built-in-trong-python.html#load-h4-62) | Trả về tổng của các phần tử trong `set` |
