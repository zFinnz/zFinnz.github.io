Bài viết này sẽ giải thích rõ 2 khái niệm muable và immuabe trong Python.

Chúng ta hiểu rằng trong Python tất cả đều là đối tượng (`object`). Một số đối tượng như `list` và `dict` có thể thay đổi được (`mutable`), có nghĩa là bạn có thể thay đổi giá trị của chúng mà không thay đổi nhận dạng của chúng. 
Còn các đối tượng khác như `integer`, `float`, `string` và `tuple` lại là các đối tượng không thể thay đổi được (`immutable`), có nghĩa là việc thay đổi giá trị sẽ diễn ra trên một bản sao của đối tượng ban đầu còn giá trị và nhận dạng của đối tượng ban đầu không hề thay đổi. Chi tiết hơn ta sẽ nói đến ở phần sau.
Trước khi tìm hiểu về `mutable` và `immutable` chúng ta sẽ nói qua về 1 chút lý thuyết.

Object (đối tượng) 
Trong python, đối tượng được hiểu là một vùng bộ nhớ chứa tất cả dữ liệu thuộc về nó. Khi ta gán 1 biến cho một đối tượng, đơn giản là biến nó sẽ lấy thông tin dữ liệu từ vùng nhớ đó ra. 
Chúng ta sẽ cần phải phân biệt rõ một chút về cách lưu trữ dữ liệu trong Python so với một số ngôn ngữ khác (như `C++`). Đó là:
Trong python, phép gán không phải là sự thay đổi. Ví dụ như ở c++, nếu bạn viết `a = 2`, có nghĩa là bạn đang gọi `a.operator(2)` và nó sẽ thay đổi đối tượng được lưu trữ trong `a`, nếu `a` không có đối tượng nó sẽ sinh ra lỗi. Còn trong python `a = 2` sẽ không lưu trữ bất cứ thứ gì vào `a` mà sẽ chỉ `reference` biến a đến đối tượng `2`.
Và một điều khác biệt nữa đó là mỗi biến trong ngôn ngữ `c++` là chỉ một vị trí trong bộ nhớ. Ví dụ nếu `a` à một kiểu `int` thì bộ nhớ sẽ dành ra `4 byte` bộ nhớ để lưu trữ giá trị của `a`. Vì vậy khi bạn gán `a = 2` nó sẽ thay đổi giá trị đang được lưu ở `4 byte` bộ nhớ. Nếu có 1 biến `int` khác thì nó cũng sẽ có `4 byte` bộ nhớ riêng của nó.
Còn mỗi biến trong Python là tên cho một đối tượng có riêng. Có 1 đối tượng cho số `1`, 1 đối tượng cho số `2`.
Và a không phải là `4 byte` bộ nhớ được biểu diễn như một kiểu `int`, nó chỉ là một tên trỏ vào 1 đối tượng. Khi gán `a = 2` thì không có nghĩa là thay đổi giá trị thành `2` mà nó sẽ làm `a` quên đi đối tượng ban đầu và trỏ vào đối tượng `2`.
Vì vậy ta có thể dễ dàng gán biến cho bất kì đối tượng nào mặc dù kiểu dữ liệu có thể khác nhau.
```py
>>> a = 5
>>> a = "Python"
>>> a = [1, 2, 3, 4]
```
Mọi đối tượng trong Python đều được định danh rõ ràng, dùng để xác định địa chỉ vùng nhớ dữ liệu của nó, ngoài ra 1 thông tin cũng quan trọng nữa đó là kiểu dữ liệu của nó. 
Có 2 hàm được định nghĩa sẵn để lấy 2 thông tin của đối tượng là `id(object)` và `type(object)`.

Hashable

Một đối tượng được gọi là `hashable` nếu giá trị của nó không bao giờ thay đổi. `Hash` là một số nguyên đại diện cho giá trị của đối tượng đó. 
Python có hàm `hash()` để lấy về giá trị là `hash` của đối tượng và điều kiện bắt buộc là : Một đối tượng có giá trị `hash` khi mà chỉ khi nó là một đối tượng `hashable`. Những đối tượng không thuộc `hashable` sẽ gây ra lỗi khi cố dùng hàm `hash()` lên nó.
```py
>>> x = 5.0
>>> hash(x)
5
>>> x = [1, 2, 3, 4]
>>> hash(x)
TypeError: unhashable type: 'list'
```
id
Như đã nói ở trên, mỗi đối tượng trong Python sẽ có 1 `id` riêng dùng để định danh nó, `id` là một số nguyên dùng để chỉ địa chỉ bộ nhớ lưu trữ dữ liệu của đối tượng, giá trị định danh này luôn luôn là duy nhất đối với 1 đối tượng.
```py
>>> id(5.0)
15652176
>>> id([1, 2, 3, 4])
16235456
```
Mutable vs. Immutable

`Mutable` là dùng để chỉ đối tượng có thể thay đổi giá trị, nghĩa là giá trị của chúng được lưu trữ trong vùng nhớ có thể thay đổi được, còn biến được gán với nó sẽ không thay đổi. 
Nói một cách giá giá trị `hash` của đối tượng `mutable` có thể thay đổi tuy nhiên `id` (địa chỉ vùng nhớ dữ liệu) của nó vẫn giữ nguyên. 
Ngược lại với đối tượng `imutable`, giá trị của nó là không thể thay đổi. Khi ta cố thực hiện thay đổi ở code thì một bản sao giá trị của nó được tạo ra thực hiện tính toán và trả về một đối tượng mới và được gán cho biến ban đầu.
Nói một cách giá trị `hash` và `id` của đối tượng là không đổi, tuy nhiên biến gán giá trị sẽ được gán cho một đối tượng khác. 
Một số loại đối tượng `immutable` phổ biến:
int
float
decimal
complex
bool
string
tuple
range
frozenset
bytes
```py
>>> a = 5.0
>>> id(a)
15652176
>>> a += 3
>>> id(a)
15652236 # id đã thay đổi, khi này a đã được gán cho một đối tượng khác
```
Một số loại `mutable` phổ biến (hầu hết là những đối tượng khác ngoài những đối tượng trên):

list
Dictionary
Set
bytearray
Lớp được định nghĩa bởi người dùng
```py
>>> a = [1, 2, 3, 4]
>>> id(a)
16235456
>>> a.append(5)
>>> id(a)
16235456 # id của đối tượng không đổi
```
Có một điều lưu ý nữa đó là, mặc dù `tuple` là `immutable` nhưng các phần tử của nó vẫn có thể là `mutable` do đặc trưng dữ liệu của kiểu `tuple`. Và lúc đó `tuple` không thể `hash` được nữa.
```py
>>> a = (1, 2, [3, 4])
>>> hash(a)
TypeError: unhashable type: 'list'
```
Như vậy, một đối tượng `immutable` có thể là đối tượng `hashable` nhưng ngược lại thì chưa chắc.

Truyền các đối tượng làm tham số của hàm

Các đối tượng `mutable` hoặc `immutable` sẽ có những cách thức rất khác nhau khi được truyền làm tham số của hàm. Tham số được truyền vào hàm luôn luôn là đối tượng. 

Với những đối tượng là `immutable` (số nguyên, số thực, tuple, v.v...) thì giá trị của nó sẽ không thể thay đổi được bởi hàm, nhưng nếu là `mutable` (list, dict) thì hàm lại có thể thay đổi giá trị bên ngoài.

Tham số của hàm là immutable 
Với các đối tượng `immutable` khi được truyền vào hàm , nó sẽ chỉ truyên `reference` chứ không truyền giá trị, tức là chỉ truyền địa chỉ bộ nhớ. 
Khi hàm có sự thay đổi giá trị của tham số truyền vào thì một vùng nhớ mới sẽ được cấp phát, nó được gán cho tham số chứ không gán cho biến bên ngoài, do đó sẽ không thể làm thay đổi giá trị của biến bên ngoài.
```py
def func(a):
 a += 1
 return id(a)

>>> x = 100
>>> id(x) # id ban đầu của x
1737506608
>>> func(x)
1737506624 # x trong hàm đã được gán cho vùng nhớ mới chứa giá trị mới
>>> id(x)
1737506608 # id của x sau khi thực hiện hàm không thay đổi
```
Trong ví dụ trên x là một đối tượng `immutable`, khi ta truyền `x` vào hàm `func` thì vùng nhớ mà `x` trỏ tới sẽ được truyền cho tham số `a`. Vì `a` được thay đổi giá trị nên `a` sẽ được trỏ tới vùng nhớ mới. Còn `x` bên ngoài thì vẫn trỏ đến vùng nhớ cũ nên giá trị và địa chỉ bộ nhớ không thay đổi.

Tham số của hàm là mutable 
Các đối tượng `mutable` cũng được truyền vào hàm qua `reference`, tức là địa chỉ vùng nhớ, không khác gì các đối tượng `immutable` cả. Thế nhưng vì tính chất của `mutable`, nên vùng nhớ này hoàn toàn có thể chứa giá trị mới mà không cần cấp phát mới gì cả. 

Vì vậy, nếu một `mutable` được truyền vào hàm mà bị thay đổi giá trị, thì biến bên ngoài cũng sẽ chưa giá trị mới:
```py
def func(a):
 a.append(5)
 return id(a)

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
Ở ví dụ này, khi chúng ta truyền tham số `x` cho hàm `func` thì thì vùng nhớ mà `x` trỏ tới sẽ được truyền cho tham số `a`, tuy nhiên do ở đây `x` là một đối tượng `mutable` nên việc thay đổi giá trị của `a` sẽ không tạo ra vùng nhớ mới mà thay đổi trực tiếp trên vùng nhớ mà `a` và `x` cùng trỏ tới dẫn đến việc giá trị của `x` thay đổi nhưng địa chỉ vùng nhớ không thay đổi.

Kết luận 
Bạn sẽ nghĩ đến vấn lưu trữ bộ nhớ đối với các đối tượng `immuable` khi đọc bài viết trên nhưng bạn đừng lo. Sau khi kết thúc chương trình, trình dọn rác của Python sẽ xử lí những vùng nhớ này và chúng ta không cần quan tâm đến nó. 
`Mutable` và `immutable` là những kiến thức cơ bản trong Python, bài viết này sẽ giúp các bạn khi giải quyết 1 bài toán thì nên chọn kiểu dữ liệu phù hợp để tăng hiệu suất và tối ưu bộ nhớ chương trình.
