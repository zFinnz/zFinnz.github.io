<h1> MUTABLE VÀ IMMUTABLE TRONG PYTHON</h1>

Trước giờ trong mấy bài viết vẫn dùng đến từ `mutable` và `immutable` mà chưa rõ hoàn toàn nó là gì.
Hôm nay quyết định tìm hiểu rõ 2 khái niệm này mới được.

Chúng ta hiểu rằng Python đại diện cho tất cả dữ liệu của nó như là các đối tượng. Một số đối tượng như `list` và `dict` có thể thay đổi được, có nghĩa là bạn có thể thay đổi nội dung của chúng mà không thay đổi nhận dạng của chúng. Các đối tượng khác như `integer`, `float`, `string` và `tuple` là các đối tượng không thể thay đổi được. Một cách dễ hiểu là nếu bạn nhìn vào một `ID` đối tượng.
Trước khi tìm hiểu về mutable và immutable chúng ta sẽ nói qua về 1 chút lý thuyết

Object (đối tượng)
Trong python, đối tượng được hiểu là một vùng bộ nhớ chứa tất cả dữ liệu thuộc về nó. Khi ta gán 1 biến cho một đối tượng, đơn giản là biến nó sẽ lấy thông tin dữ liệu từ vùng nhớ đó ra. Vì vậy ta có thể dễ dàng gán biến cho bất kì tối tượng nào mặc dù kiểu dữ liệu có thể khác nhau.
```py
>>> a = 5
>>> a = "Python"
>>> a = [1, 2, 3, 4]
```
Mọi đối tượng trong Python đều được định danh rõ ràng, dùng để xác định địa chỉ vùng nhớ dữ liệu của nó, ngoài ra 1 thông tin cũng quan trọng nữa đó là kiểu dữ liệu của nó. Có 2 hàm được định nghĩa sẵn để lấy 2 thông tin của đối tượng là `id(object)` và `type(object)`.

Hashable

Một đối tượng được gọi là `hashable` nếu giá trị của nó không bao giờ thay đổi. `Hash` là một số nguyên đại diên cho giá trị của đối tượng đó. Python có hàm `hash()` để lấy về giá trị là `hash của đối tượng ` và điều kiện bắt buộc là : Một đối tượng có giá trị hash khi mà chỉ khi nó là một đối tượng `hashable`. Những đối tượng không thuộc `hashable` sẽ gây ra lỗi khi cố dùng hàm `hash()` lên nó.
```py
>>> x = 5.0
>>> hash(x)
5
>>> x = [1, 2, 3, 4]
>>> hash(x)
TypeError: unhashable type: 'list'
```
id

Như đã nói ở trên, mỗi đối tượng trong Python sẽ có 1 `id` riêng dùng để định danh nó, `id` là một số nguyên dùng để chỉ vùng nhớ lưu trữ dữ liệu của đối tượng, giá trị định danh này luôn luôn là duy nhất đối với 1 đối tượng.
```py
>>> id(5.0)
15652176
>>> id([1, 2, 3, 4])
16235456
```

Mutable vs. Immutable

Mutable là dùng để chỉ đối tượng có thể thay đổi giá trị, nghĩa là giá trị của chúng được lưu trữ trong vùng nhớ có thể thay đổi được, còn biến được gán với nó sẽ không thay đổi. Nói một cách giá giá trị `hash` của đối tượng `mutable` có thể thay đổi tuy nhiên `id` (địa chỉ vùng nhớ duex liệu) của nó vẫn giữ nguyên.
Ngược lại với đối tượng `imutable`, giá trị của nó là không thể thay đổi. Khi ta cố thực hiện thay đổi ở code thì một bản sao giá trị của nó được tạo ra thực hiện tính toán và trả về một đối tượng mới và được gán cho biến ban đầu. Nói một cách giá trị `hash` và `id` của đối tượng là không đổi, tuy nhiên biến gán giá trị sẽ được gán cho một đối tượng khác.
Một cách khác mà ta có thể sử dụng để phân biệt `mutable` và `immutable` đó là 2 biến trỏ đến 2 đối tượng có giá trị bằng nhau, với `immutable` thì 2 đối tượng là 1, với `mutable` thì sẽ là 2 đối tược khác nhau 
```py
>>> a = 5
>>> b = 5 # 5 là đối tượng immutable
a is b
True
>>> a = [1, 2, 3]
>>> b = [1, 2, 3] # [1, 2, 3] là đối tượng mutable
a is b
False
```
Một số loại đối tượng `immutable` phổ biến:
+ `int`
+ `float`
+ `decimal`
+ `complex`
+ `bool`
+ `string`
+ `tuple`
+ `range`
+ `frozenset`
+ `bytes`
```py
>>> a = 5.0
>>> id(a)
15652176
>>> a += 3
>>> id(a)
15652236 # id đã thay đổi, khi này a đã được gán cho một đối tượng khác
```
Một số loại `mutable` phổ biến (hầu hết là những đối tượng khác ngoài những đối tượng trên):
+ `list`
+ `Dictionary`
+ `Set`
+ `bytearray`
+ `Lớp được định nghĩa bởi người dùng`
```py
>>> a = [1, 2, 3, 4]
>>> id(a)
16235456
>>> a.append(5)
>>> id(a)
16235456 # id của đối tượng không đổi
```
Có một điều lưu ý nữa đó là, mặc dù `tuple` là `immutable` nhưng các phần tử của nó vẫn có thể là `mutable` do đặc trưng dữ liệu của kiểu `tuple`. Và lúc đó `tuple` không thể `hash` được nữa
```py
>>> a = (1, 2, [3, 4])
>>> hash(a)
TypeError: unhashable type: 'list'
```
Như vậy, một đối tượng `immutable` có thể là đối tượng `hashable` nhưng ngược lại thì chưa chắc.

Truyền các đối tượng làm tham số của hàm

Các đối tượng `mutable` hoặc `immutable` sẽ có những cách thức rất khác nhau khi được truyền làm tham số của hàm.
Tham số được truyền vào hàm luôn luôn là đối tượng. Với những đối tượng là `immutable` (số nguyên, số thực, tuple, v.v...) thì giá trị của nó sẽ không thể thay đổi được bởi hàm, nhưng nếu là `mutable` (list, dict) thì hàm lại có thể thay đổi giá trị bên ngoài.
Tham số của hàm là immutable
Với các đối tượng `immutable` khi được truyền vào hàm , nó sẽ chỉ truyên `reference` chứ không truyền giá trị, tức là chỉ truyền giá bị bộ nhớ. 
Khi hàm có sự thay đổi giá trị của tham số truyền vào thì một vùng nhớ mới sẽ được cấp phát, nó được gán cho tham số chứ không gán cho biến bên ngoài, do đó sẽ không thể làm thay đổi giá trị của biến bên ngoài.
```py
def func(x):
	x += 1
	return id(x)

>>> x = 100
>>> id(x) # id ban đầu của x
1737506608
>>> func(x)
1737506624 # x trong hàm đã được gán cho vùng nhớ mới chứa giá trị mới
>>> id(x)
1737506608 # id của x sau khi thực hiện hàm không thay đổi
```
Tham số của hàm là mutable
Các đối tượng `mutable` cũng được truyền vào qua qua `reference`, tức là địa chỉ vùng nhớ, không khác gì các đối tượng `immutable` cả. Thế nhưng vì tính chất của `mutable`, nên vùng nhớ này hoàn toàn có thể chứa giá trị mới mà không cần cấp phát gì cả. Vì vậy, nếu một `mutable` được truyền vào hàm mà bị thay đổi giá trị, thì biến bên ngoài cũng sẽ chưa giá trị mới:
```py
```py
def fuc(x):
	x.append(5)
	return id(x)

>>> x = [1, 2, 3, 4]
>>> id(x) # id ban đầu của x
16234216
>>> func(x)
16234216 # id của x bên trong hàm không thay đổi
>>> id(x)
16234216 # id của x sau khi thực hiện hàm không thay đổi nhưng giá trị thay đổi
>>> x
[1, 2, 3, 4, 5]
```
Kết luận
Bạn sẽ nghĩ đến vấn lưu trữ bộ nhớ khi đọc bài viết trên nhưng bạn đừng lo. Sau khi kết thúc chương trình, [trình dọn rác](http://www.0xpan.blogspot.com/2018/11/bo-thu-gom-rac-trong-python.html) của Python sẽ xử lí những vùng nhớ này và chúng ta không cần quan tâm đến nó.
`Mutable` và `immutable` là những kiến thức cơ bản trong Python, bài viết này sẽ giúp các bạn khi giải quyết 1 bài toán thì nên chọn kiểu dữ liệu phù hợp để tăng hiệu suất và tối ưu bộ nhớ chương trình.
