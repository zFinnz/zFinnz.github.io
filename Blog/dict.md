<h1> Dictionary trong python</h1>

Python cũng cấp một kiểu dũ liệu tổng hợp nữa là `dictionary`, tương tự như danh sách trong đó nó là một tập các đối tượng

Các tính chất của kiểu dữ liệu dictionary

Xác định một dictionary

Một từ điển trong python bao gồm một tập hợp các `key: value` (khóa và giá trị). các cặp được phân tách bằng dấu phẩy đặt trong dấu ngoặc nhọn (`{}`).
```py
dict_a = {
	<key> : <value>,
	<key_2> : <value_2>,
	......
	<key_n> : <value_n>
}
```
Chúng ta có thể xây dựng kiểu `dictionary` bằng hàm `dict()`. Đối số của `dict()` phải là một chuỗi các cặp `key-value` như sau:
```py
>>> a = [('a', 1), ('b', 2), ('c', 3)]
>>> dict(a)
{'a': 1, 'b': 2, 'c': 3}
# Hoặc
>>> a = dict('a'=1, 'b'=2, 'c'=3)
>>> a
{'a': 1, 'b': 2, 'c': 3}
```

Truy cập các giá trị của dictionary

Chúng ta có thể truy cập được giá trị của `dictionary` bằng từ khóa (`key`) tương ứng với giá trị đó (`value`) trong ngoặc vuông (`[]`)
```py
>>> a = {'a': 1, 'b': 2, 'c': 3}
>>> a['a']
1
>>> a['c']
3
```
Nếu bạn đưa ra một từ khóa không tồn tại trong `dictionary` sẽ tạo ra một ngoại lệ:
```py
>>> a = {'a': 1, 'b': 2, 'c': 3}
>>> a['d']
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
KeyError: 'd'
```
Thêm một mục vào từ điển hiện có bằng cách gán một khóa mới và giá trị mới

```py
>>> a = {'a': 1, 'b': 2, 'c': 3}
>>> a['d'] = 4
>>> a
{'a': 1, 'b': 2, 'c': 3, 'd':4}
```
Bạn có thể sửa đổi `dictionary` hiện tại bằng cách gán giá trị mới cho khóa hiện có
```py
>>> a = {'a': 1, 'b': 2, 'c': 3, 'd':4}
>>> a['d'] = 5
>>> a
{'a': 1, 'b': 2, 'c': 3, 'd':5}
```
Để xóa một mục, sử dụng câu lệnh `del` và chỉ định khóa cần xóa.
```py
>>> a = {'a': 1, 'b': 2, 'c': 3, 'd':4}
>>> del a['d']
>>> a
{'a': 1, 'b': 2, 'c': 3}
```
Dictionary có thể chứ dictionary gọi là dictionary lồng nhau.
```py
>>> a = {'a': 1, 'b': 2, 'c': 3, 'd':{1: 'a', '2': b}}
>>> a
{'a': 1, 'b': 2, 'c': 3, 'd':{1: 'a', '2': b}}
```

Khóa trong dictionary

Hầu hết các loại giá trị đều có thể sử dụng làm khóa từ điển trong Python.
```py
>>> a  = { 1: 'a', 2.5: 'b', True: 'c'}
>>> a
{ 1: 'a', 2.5: 'b', True: 'c'} 
# Sử dụng key với int, float, boolean
```
Thậm chí có thể sử dụng các đối tượng tích hợp như `type` và `function`
```py
>>> a  = { int: 1, float: 2, bool : 3}
>>> a 
#{<class 'int'>: 1, <class 'float'>: 2, ​​<class 'bool'>: 3} 
>>> a[float]
2
>>> d  =  { bin :  1 ,  hex :  2 ,  oct :  3 } 
>>> d [ oct ] 
3
```
Tuy nhiên, càn lưu ý một số điều đối với việc đặt `key` dictionary:
+ Một `key` phải là duy nhất trong dictionary, không thể bị trùng lặp. Nếu bạn chỉ định khóa trùng với khóa đã có thì cặp `key:value` đầu tiên sẽ bị ghi đè.
```py
>>> a = {'a': 1, 'b': 2, 'c': 3, 'd':4, 'a':5}
>>> a
{'a': 5, 'b': 2, 'c': 3, 'd': 4}
```
+ `Key` của dictionary phải là loại [immutable](http://www.0xpan.blogspot.com/2018/11/mutable-va-immutable-trong-python.html) như `integer`, `float`, `string`, `boolean` hoặc có thể là `tuple`. Tuy nhiên `list` và `dict` khác không thể dùng để làm khóa vì chúng có thể thay đổi giá trị.
```py
>>> a  = { 'hello': 1, True: 2, (1, 2) : 3}
>>> a 
{'hello': 1, True: 2, (1, 2): 3}
>>> a = {[1, 2, 3 ]: 1, float: 2, bool : 3}
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: unhashable type: 'list'
```
`Value` trong dictionary

Ngược lại với `key`, `value` trong dictionary không có hạn chế nào cả. Nó có thể là bất kì loại đối tượng nào mà Python hỗ trọ, và một giá trị có thể xuất hiện nhiều lần.
```py
>>> d = { 0 : 'a', 1 : 'a', 2 : 'a', 3 : 'a'} 
>>> d 
{0: 'a', 1: 'a', 2: ' a ', 3:' a '} 
>>> d [ 0 ]  ==  d [ 1 ]  ==  d [ 2 ] 
True
```
Toán tử trong dictionary

Chúng ta có thể sử dụng toán tử `in` hoặc `not in` trong dictionary để trả về `True`  hoặc `False` để xác định xem một khóa có tồn tại trong từ điển hay không.
```py
>>> d = { 0 : 'a', 1 : 'a', 2 : 'a', 3 : 'a'} 
>>> 0 in d
True
>>> 4 in d
False
```
+ Toán tử `==` và `!=` 
So sánh hai hay nhiều list với nhau
```py
>>> a = {'a': 1, 'b': 2}
>>> b = {'a': 1, 'b': 2}
>>> a == b
True
>>> a != b
False
```

Các phương thức tính hợp sẵn của kiểu dữ liệu dictionary

| Phương thức | Miêu tả |
|-------------|---------|
| [dict.clear()](http://www.0xpan.blogspot.com/2018/12/dictionary-trong-python.html#load-h4-0) | Loại bỏ tất cả các phần tử của `dictionary` |
| [dict.copy()](http://www.0xpan.blogspot.com/2018/12/dictionary-trong-python.html#load-h4-1) | Trả về một bản sao của từ điển |
| [dict.fromkeys(seq[, v])](http://www.0xpan.blogspot.com/2018/12/dictionary-trong-python.html#load-h4-2) | Trả về một `dictionary` mới với các `key` từ `seq` và `value` bằng `v`, mặc định là `None` |
| [dict.get(key[,d])](http://www.0xpan.blogspot.com/2018/12/dictionary-trong-python.html#load-h4-3) | Trả về giá trị của `key`, nếu `key` không tồn tại trả về `d`, mặc định là `None` |
| [dict.items()](http://www.0xpan.blogspot.com/2018/12/dictionary-trong-python.html#load-h4-4) | Trả về một khung nhìn mới về các mục của `dictionary` (`key`, `value`) |
| [dict.keys()](http://www.0xpan.blogspot.com/2018/12/dictionary-trong-python.html#load-h4-5) | Trả về một khung nhìn mới về các `key` của `dictionary` |
| [dict.pop(key[,d])](http://www.0xpan.blogspot.com/2018/12/dictionary-trong-python.html#load-h4-6) | Xóa bỏ một mục có khóa `key` và trả về giá trị của `key` đó hoặc `d` nếu `key` không tồn tạo. Nếu `d` không được cung cấp và `key` không tồn tại, một ngoại lệ `KeyError` được tạo ra |
| [dict.popitem()](http://www.0xpan.blogspot.com/2018/12/dictionary-trong-python.html#load-h4-7) | Xóa bỏ và trả về một mục tùy ý (`key`, `value`). Tạo ra ngoại lệ `KeyError` nếu `dictionary` trống |
| [dict.setdefault(key[,d])](http://www.0xpan.blogspot.com/2018/12/dictionary-trong-python.html#load-h4-8) | Nếu có `key` trong `dictionary`, trả về giá trị của nó. Nếu không, thêm `key` với giá trị `d` và trả về `d`, mặc định `None` |
| [dict.update([other])](http://www.0xpan.blogspot.com/2018/12/dictionary-trong-python.html#load-h4-9) | Bổ sung `dictionary` với cặp `key/value` từ một dictionary `other`, ghi đề nếu `key` đã tồn tại |
| [dict.values()](http://www.0xpan.blogspot.com/2018/12/dictionary-trong-python.html#load-h4-10) | Trả về một khung nhìn mới về các `value` trong `dictionary` |

Chi tiết các phương thức dựng sẵn trong dictionary

Dict.clear()
Phương thức này sẽ loại bỏ tất cả các phần tử của `dictionary`. Phương thức không nhận bất kì tham số nào và cũng không trả về giá trị nào (trả về `None`)
```py
>>> d = { 0 : 'a', 1 : 'a', 2 : 'a', 3 : 'a'} 
>>> a.clear()
>>> d
{}
```
Bạn cũng có thể xóa tất cả các phần tử của `dictionary` bằng cách gán với `dictionary` rỗng. Tuy nhiên có sự khác biệt giữa 2 cách nếu có một biến khác đang tham chiếu đến. Hãy xem ví dụ sau:
```py
>>> a = { 0 : 'a', 1 : 'a', 2 : 'a', 3 : 'a'} 
>>> b = a
>>> a.clear
>>> a 
{}
>>> b
{}
# Với cách 2
>>> a = { 0 : 'a', 1 : 'a', 2 : 'a', 3 : 'a'} 
>>> b = a
>>> a = {}
>>> a 
{}
>>> b
{ 0 : 'a', 1 : 'a', 2 : 'a', 3 : 'a'} 
```

Dict.copy()

Phương thức trả về một bản sao của từ điển. Phương thức không nhận bất kì tham số nào
```py
>>> a = { 0 : 'a', 1 : 'a', 2 : 'a', 3 : 'a'}
>>> a.copy()
{0 : 'a', 1 : 'a', 2 : 'a', 3 : 'a'}
```

Dict.fromkeys(seq[,v])

Phương thức tạo ra một từ điển mới với `key` là các phần tử của `seq` với `value v` được cung cấp bởi người dùng. nếu `value` không được cung cấp thì nó sẽ nhận giá trị mặc định là `None`
```py
>>> keys = {'a', 'b', 'c', 'd'}
>>> a = dict.fromkeys(keys)
>>> a
{'d': None, 'c': None, 'a': None, 'b': None}
# Với v được cung cấp
>>> keys = {'a', 'b', 'c', 'd'}
>>> a = dict.fromkeys(keys, 1)
>>> a
{'d': 1, 'c': 1, 'a': 1, 'b': 1}
```

Dict.get(key[, value]) 

Phương thức trả về một `value` của một `key` đã cho. Và trả về `value` được cung cấp nếu `key` không tồn tại, mặc định là `None`.
```py
>>> a = {'a': 1, 'b': 2, 'c': 3, 'd':4}
>>> a.get('f')
#Không in ra gì <=> None
>>> a.get('f', 6)
6
```

Dict.items()

Phương thức trả về một khung nhìn mới về các mục của `dictionary` (`key`, `value`). Phương thức không nhận bất kì tham số nào.
```py
>>> a = {'a': 1, 'b': 2, 'c': 3, 'd':4}
>>> a.items()
dict_items([('a', 5), ('b', 2), ('c', 3), ('d', 4)])
```

Dict.keys()

Phương thứ trả về một khung nhìn mới về các tất cả các `key` của `dictionary`. Phương thức không nhận bất kì tham số nào. Khi `dictionary` thay đổi, khung nhìn cũng phản ánh nhưng thay đổi nào.
```py
>>> a = {'a': 1, 'b': 2, 'c': 3, 'd':4}
>>> a.keys()
dict_keys(['a', 'b', 'c', 'd'])
```

Dict.pop(key[,d])

Phương thức loại bỏ và trả về một phần tử của `dictionary` từ `key` đã cho. `d` sẽ được trả về nếu `key` không tồn tại trong `dictionary`. nếu `key` không tìm thấy và `d` cũng không được cung cấp, sẽ tạo ra một ngoại lê `KeyError`.
```py
>>> a = {'a': 1, 'b': 2, 'c': 3, 'd':4}
>>> a.pop('a')
5
>>> a.pop('f', 6)
6
>>> a.pop('e')
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
KeyError: 'e'
```

Dict.popitem()

Phương thức loại bỏ một cặp phần tử (`key`, `value`) tùy ý và trả về cặp giá trị đó. Phương thức không nhận bất kì đối số nào và trả về một ngoại lệ `KeyError` nếu từ điển trống.
```py
>>> a = {'a': 1, 'b': 2, 'c': 3, 'd':4}
>>> a.popitem()
('d', 4)
>>> b = {}
>>> b.popitem()
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
KeyError: 'popitem(): dictionary is empty'
```

Dict.setdefault(key[, default_value])

Phương thức trả về một `value` của `key` (nếu `key` tồn tại trong `dictionary`). Nếu không nó sẽ thêm một cặp `key,default_value` vào từ điển nếu `default_value` được cung cấp còn không là `key, None`.
```py
>>> a = {'a': 1, 'b': 2, 'c': 3, 'd':4}
>>> a.setdefault('a')
1
>>> a.setdefault('f', 6)
6
>>> a
{'a': 5, 'b': 2, 'c': 3, 'd': 4, 'f': 6}
>>> a.setdefault('e')
>>> a
{'a': 5, 'b': 2, 'c': 3, 'd': 4, 'f': 6, 'e': None}
```

Dict.update([other])

Phương thức cập nhật từ điển từ một dictionary `other` hoặc một `iterabel` các cặp `key, value` . Nếu `key` đã tồn tại trong từ điển nó sẽ cập nhật `value` mới cho `key` đó. Phương thức không trả về giá trị nào (trả về `None`), nếu `update()` được gọi mà không truyền tham số `dictionary` sẽ không thay đổi.
```py
>>> a = {'a': 1, 'b': 2, 'c': 3, 'd':4}
>>> b = {'e':5}
>>> a.update(b)
>>> a
{'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5}
# Hoặc với một iterable các cặp key,value
>>> a.update('f'=6, 'g'=7)
>>> a
{'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5, 'f': 6, 'g':7}
```

Dict.values()

Phương thức trả về một đối tượng khung nhìn hiển thị danh sách tất cả các giá trị trong `dictionary`.
Phương thức không nhận bất kì tham số nào
```py
>>> a = {'a': 1, 'b': 2, 'c': 3, 'd':4}
>>> a.values()
dict_values([1, 2, 3, 4])
```

Các hàm dững sẵn Python có thể sử dụng cho dictionary

| Hàm | Miêu tả |
|------|-------|
| [all()](http://www.0xpan.blogspot.com/2018/11/ham-built-in-trong-python.html#load-h4-1) | Trả về `True` nếu tât cả các khóa của `dictionary` là đúng(hoặc nếu `dictionary` rỗng) |
|[any()](http://www.0xpan.blogspot.com/2018/11/ham-built-in-trong-python.html#load-h4-2) | Trả về Truenếu bất kỳ khóa nào của `dictionary` là đúng. Nếu `dictionary` rỗng, trả về `False`. |
| [len()](http://www.0xpan.blogspot.com/2018/11/ham-built-in-trong-python.html#load-h4-37) | Trả về độ dài của`dictionary`. |
| [sorted()](http://www.0xpan.blogspot.com/2018/11/ham-built-in-trong-python.html#load-h4-59) | Trả về một danh sách sắp xếp mới của các `key` trong `dictionary`. |
