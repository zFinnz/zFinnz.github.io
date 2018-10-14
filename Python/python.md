<h1 align="center"> Giới thiệu tổng quan về Python </h1>

### ▶ Giới thiệu tổng quan về python

#### ▶ Comment trong python
Chú thích trong python dùng để làm rõ đoạn mã và sẽ bị bỏ qua khi thực thi.
- Chú thích trong python bắt đầu bằng dấu `#` cho đến hết cuối dòng vật lý, có thể đặt ở đầu dòng, sau khoảng trắng hoặc sau mã, nhưng không được đặt vào chuỗi kí tự.
- Với những chú thích dài, kéo dài trong nhiều dòng ta có thể đặt trong `"""  comment here """`.
```py
a = 5 # gán giá trị 5 cho biến a
b = a+6 
""" gán giá trị cho biến b
	với giá trị bằng a+5 """
print (a,b)
```

#### ▶ Số trong python
Trình thông dịch python hoạt động như một máy tính đơn giản, bạn có thể viết một biểu thức vào nó, nó sẽ cho ra giá trị.
- Các cú pháp cơ bản gồm có : `+`, `-`, `*`, `/`, dấu ngoặc đơn `(())` dùng để nhóm các biểu thức.
- Các số nguyên (ví dụ `2`, `4`, `20`) là kiểu `int`, các số thập phân (ví dụ `5.0`, `1.6`) là kiểu float.
- Phép chia (`/`) luôn trả về kiểu `float`.
- Tuy nhiên, python cũng cung cấp toán tử `//` có chức năng tương tự phép chia nhưng trẽ trả về số nguyên được làm tròn (kiểu `int`).
- Phép chia lấy phần dư `%` cũng sẽ trả về kiểu `int`.
- Phép bình phương với toán tử `**`.
- Dấu `=` được sử dụng để gán giá trị cho biến.
- Dấu `==` dùng để so sánh sẽ trả về kiểu `Boolean`.
```py
>>> a = 17 / 3   # gán giá trị cho biến a, phép chia sẽ trả về kiểu float
5.66666666666666666
>>> b = 17//3    # gán giá trị cho biến b, phép chia sẽ trả về kiểu int 
5
>>> a*b # thực hiện nhân a với b, kết quả trả về là biến kiểu float, int đối với python2
28.3333333333333336
>>> a == b
False
>>> a**a # bình phương số a
18571.918866404143
```
Ngoài kiểu `int` và `float`, Python cũng hỗ trợ các loại số khác, chẳng hạn `Decimal` và `Fraction`, `số phức` với hậu tố `j` để chỉ phần ảo (ví dụ `3+5j`)

#### ▶ Chuỗi trong python
Chuỗi trong python được biểu diễn theo nhiều cách, ví dụ `'...'` hoặc `"..."` cũng có thể là `"""..."""`, `'''...'''`.
- Cả hai dấu đều sử dụng giống nhau, tuy nhiên chúng ta nên sử dụng `'...'` nếu trong chuỗi kí tự có dấu `"` và ngược lại chúng ta nên sử dụng `"..."` nếu trong chuỗi kí tự có dấu `'`.
- Nếu chúng ta muốn sử dụng `"..."` cho chuỗi có kí tự `"` hoặc `'...'` cho cuối có kí tự `'` ta dùng `\'` hoặc `\"`.
```py
>>> "My name's An"
>>> '"Yes", It\'s my'
```
- Nếu bạn không muốn các kí tự mở đồng bằng cách sử dụng kí tự đặc biệt như `\`, bạn có thể sử dụng các `chuỗi thô` bằng cách thêm `r` trước các trích dẫn.
- Chuỗi kị tự có thể kéo dài trong nhiều dòng bằng cách sử dụng `"""..."""` hoặc `'''...'''`, kết thúc dòng sẽ được tự động bao gồm trong chuỗi, nếu bạn không muốn thì có thể sử dụng `\` để nối dòng tiếp theo với dòng hiện tại. Lưu ý: dấu `\` chỉ dó tác dụng đối với dòng chứa kí tự và dòng tiếp theo sau đó, nếu muốn nối chuỗi nhiều dòng thành một, bạn sẽ phải sử dụng mỗi kí tự `\` cho mỗi cuối dòng.
- Các chuỗi có thể được nối với nhau bằng toán tử `+`, `*`.
- Hai chuỗi ksi tự cạnh nhau được nối tự động
```py
>>> print('C:\User\name') # \n ở đây sẽ được hiểu là xuống dòng mới
>>> print(r'C:\User\name') # sử dụng r để chuỗi kí tự được hiểu là chuỗi kí tự thô
>>> print('C:\\User\\name') # kí tự \\ se cho kết quả như trên
>>> 'Hello ' + 'World!'
'Hello World!'
>>> 'Hello' * 2
'Hello Hello'
>>> "Hello " "World!"
'Hello World!'
```
- Các chuỗi có thể được`lập chỉ mục`, với số chỉ mục đầu tiên là `0`, không chứa loại kí tự riêng biệt, mỗi kí tự chỉ đơn giản là một chuỗi có kích thước.
- Các chỉ mục cũng có thể là số âm, sẽ được tính từ phải qua trái, với chỉ mục âm sẽ bắt đầu từ `-1`.
- Bạn có thể cắt lấy chuỗi con bằng cách `string[start:end:step]` với `string` là chuỗi cần cắt, `start` là số chỉ mục bắt đầu `end` là số chỉ mục kết thúc, `step` là bước nhảy mạc định là `1`, với `step` là số âm thì chuỗi sẽ cắt từ phải qua trái. Nếu `start` trống thì mặc định sẽ là `0`, nếu `end` trống thì mặc định sẽ là kích thước của chuỗi.
```py
>>>word = r'C:\python'
>>> word[0]
'C'
>>> word[2]
'\\'
>>>word[-1]
'n'
>>> word[2:]
'\\python'
>>> word[3::-1]
'p\\:C'
```
- Ví dụ về chỉ mục của chuỗi
```
 +---+---+---+---+---+---+
 | P | y | t | h | o | n |
 +---+---+---+---+---+---+
 0   1   2   3   4   5   6
-6  -5  -4  -3  -2  -1
```
- Chuỗi của python là một giá trị không đổi. Do đó, việc gán giá trị cho vi trị được lập chỉ mục sẽ dẫn đến lỗi.
```py
>>>a = 'Hello Word!'
>>>a[5] = 'c'
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: 'str' object does not support item assignment
```

#### ▶ Kiểu danh sách trong python (`list`)

Python hỗ trợ một số kiểu dữ liệu phức hợp, được sử dụng để nhóm các giá trị khác nhau lại với nhau. Linh hoạt nhất là `list`. `List` được biểu diễn dưới dạng các giá trị được phân cách nhau bằng dấu phẩy trong dấu ngoặc vuông. `list` có thể chứa các mục thuộc nhiều loại khác nhau, nhưng thường tất cả đều có cùng loại.
- List có thể lập số chỉ mục và cắt tương tự như chuỗi.
```py
>>>demo = [1,2,3,4,5]
>>>demo[0]
1
>>> demo[:]
[1,2,3,4,5]
```
- Ta có thể dùng toán tử `+` để nối 2 list, tuy nhiên nó sẽ không thay đổi giá trị của list cũ mà sẽ tạo một list mới
- Khác với chuỗi, list có thể thay đổi được bằng phép gán.
```py
>>> demo + [6,7,8,9]
[1,2,3,4,5,6,7,8,9]
>>> demo[0] = 0
>>>demo
[0,2,3,4,5,6,7,8,9]
>>> demo[:] = []
>>>demo
[]
```

**Ghi chú:** Các hàm dựng sẵn của chuỗi và list sẽ được đề cập đến trong phần sau

----
#### ▶ Các câu lệnh khác trong python

##### ▶ Câu lệnh `if`
- Là câu lệnh phổ biến nhất trong mọi ngôn ngữ lập trình.
- Có thể có hoặc không từ khóa `elif` và `else` là tùy chọn, từ khóa `elif` là viết tắt cho `else if`. Một chuỗi `if....elif....elif` có thể thay thế cho `switch` hay `case` ở các ngôn ngữ khác.
```py
>>> x = int(input("Hãy nhập vào một số:"))
Hãy nhập vào một số : 42
>>> if x < 0 :
...		print('xuống bé thua 0')
...	elif x == 0 :
...		print('x bằng 0')
... else:
...		print('x lớn hơn không')
```

##### ▶ Câu lệnh `for`
- Câu lệnh for trong python có thể lặp qua các mục của chuỗi hoặc danh sách bất kì nào theo thứ tự xuất hiện của chuỗi.
```py
>>> a= [1,2,3]
>>> for i in a:
>>>		print i
1
2
3
>>> for i in 'python':
>>>		print i
p
y
t
h
o
n
```

##### ▶ Câu lệnh `range()`
Câu lệnh `range()` được sử dụng khi bạn cần lặp qua một chuỗi các số
- Sử dụng với cú pháp `range(start, end, step)` với `start` là điểm bắt đầu mặc định là `0`, `step` là bước nhảy mặc định là `1`. Các tham số `start, step, en` có thể có giá trị âm.
```py
range(5,10)
5,6,7,8,9
range(-10, -100, -30)
-10, -40, -70
```
- `range()` thể hiện như một danh sách, tuy nhiên nó là một đối tượng trả về các mục liên tiếp của chuỗi mong muốn khi bạn muốn lặp lại, nhưng nó không tạo ra danh sách, điều này giúp tiết kiệm bộ nhớ, chúng thường được gọi là `iterable`
```py
>>>range(5,6)
range(5,6)
>>>type(range(5, 6))
class 'range'
```
- Chúng ta nói một đối tượng lặp lại, có nghĩa là nó như một mục tiêu cho các hàm và cấu trúc cần nhận các giá trị được lặp lại cho đến khi kết thúc. Như với cấu lệnh `for` là một `trình lặp`. Hàm `list()` là hàm tạo ra danh sách các lần lặp.
```py
>>>list(range(5))
[0, 1, 2, 3, 4]
```

##### ▶ Câu lệnh `break`, `continues`, `else` trên vòng lặp

Câu lệnh `break` sẽ làm đoạn mã thực thi thoát khỏi vòng bao `for` hoặc `while` bên trong.
- Các câu lệnh vòng lặp có thể có một mệnh đề `else`. Nó sẽ được thực hiện nếu trong vòng lặp `for` không có một câu lệnh thoát `break` hoặc khi điều kiện trở thành sai đối với `while`.
```py
for i in range(2,10):
	for j in range(2, i):
		if i % x == 0:
			print(i, '=', j, '*', i//j)
			break
	else:
		print(i, ' là số nguyên tố')
```
- Câu lệnh `continue` sẽ làm đoạn mã thực thi lại vòng lặp ở điều kiện tiếp theo, bỏ qua các đoạn mã phía sau câu lệnh.
```py
for i in range(2, 10):
	if i % 2 == 0:
		print("Tìm thấy số nguyên dương", i)
		continue
	print("Tìm thấy số nguyên âm", i)
```
- Câu lệnh `pass` dùng để tuyên bố không có gì, nó có thể được sử dụng khi câu lệnh được yêu cầu cú pháp nhưng chương trình không yêu cầu hành động nào. Nói tóm lại, lệnh pas không làm gì cả, chỉ giữ chỗ cho các hàm, vòng lặp mà bạn đã thêm vào nhưng chưa dùng ở hiện tại, có thể mở rộng trong tương lai.
```py
a = [1,2,3,4,5]
for i in a:
	pass
```

##### ▶ Định nghĩa hàm
- Hàm được định nghĩa bắt đầu từ từ khóa `def`, theo sau đó là tên hàm và danh sách các tham só chính được ghi trong ngoặc đơn, các câu lệnh của hàm ở các dòng tiếp theo và phải được thụt lề.
- Các câu lệnh đầu tiên của thân hàm có thể là chuỗi kí tự làm tài liệu cho hàm hoặc `docstring`.
```py
def demo():
	""" Hàm demo """
	pass
>>>demo.__doc__
'Hàm demo'
```
- Hàm nếu không trả dữ liệu thì mặc định sẽ trả về giá trị `None`.
- Hàm hỗ trợ giá trị mặc định cho tham số khi không truyền vào.
- Việc thực hiện một hàm sẽ sử dụng một bảng kí hiệu mới dùng cho các biến cục bộ của hàm. Chính xác hơn, tất cả các phép gán biến trong một hàm sẽ được lưu trữ trong bảng kí hiệu cục bộ. Các tham chiếu biến đầu tiên tìm trong bảng kí hiệu cục bộ, sau đó bảng kí hiệu cục bộ các hàm kèm theo, sau đó là bảng kí hiệu toàn cục, và cuối cùng là trong bảng các tên dựng sẵn. Do đó, các biến toàn cục không thể được gán trực tiếp một giá trị trong hàm (trừ khi được đặt sau tuyên bố `global`) mặc dù chúng có thể tham chiếu.
```py
def demo(a =7, b=6):
	print(a+b)
>>>demo()
13
>>>demo(10,5)
15
```
**Lưu ý:** Giá trị mặc định của đối số chỉ được sử dụng một lần, điều này tạo nên sự khác biệt khi giá trị mặc định là một đối tược có thể thay đổi được như `list`, `dict`, nếu không muốn cha sẻ giá trị mặc định giữa các lần gọi bạn có thể đặt giá trị mặc định cho đối số là `None`.
```py
def f(a, L=None):
    if L is None:
        L = []
    L.append(a)
    return L
```
- Các hàm cũng có thể gọi bằng các đối số từ khóa, tất cả các đối số từ khóa được truyền phải khớp với một trong các đối số được hàm chấp nhận và vị trí của chúng không quan trọng
```py
def demo(a, b=5, c=6, d=7) # a là đối số bắt buộc. b,c,d là đối số tùy chọn có thể có hoặc không
	pass
```
- Khi có một tham số chính thức cuối cùng của biểu mẫu `**name`, nó nhận được một từ điển chứa tất cả các đối số từ khóa ngoại trừ các đối số tương ứng với tham số chính thức. Điều này có thể kết hợp với một tham số chính thức của biểu mẫu `*name` .
- **Lưu ý:** Thứ tự các đối số từ khóa được in đảm bảo khớp với thứ tự mà chúng được cung cấp trong lời gọi hàm.
```py
def demo(name, *color, **child):
	pass
demo("Văn An", "Red", "Blue", son = "Văn B", girl= "Văn C")
# name sẽ nhận giá trị "Văn An", *color sẽ nhận 2 giá trị là "Red" và "Blue" theo dạng `tuple`, còn **child sẽ nhận 'son="Văn B"', girl="Văn C" theo dạng từ điển.
```
- Trong tình huống các đối số đã có trong danh sách hoặc bộ dữ liệu nhưng cần phải giải nén cho cuộc gọi của hàm yêu cầu các đối sô riêng biệt. Ví dụ, hàm `range()` yêu cầu các đối số `start` và `end` riêng biệt, chúng ta cần viết lời gọi hàm với cú pháp `*` để giải nén các đối số ra khỏi danh sách hoặc bộ dữ liệu.
```py
>>> list(range(2,4)) # gọi đối số bình thường
[2,3,4]
>>> args = [2,4]
>>> list(range(*args)) # gọi đối số từ một list
[2,3,4]
```
- Đối với danh sách dạng `dict` ta dùng từ khóa `**`
```py
def demo(a, b='A', c='B'):
	pass
d = {'a': "Hello", 'b': "World", 'c': "!"}
demo(**d)
```

###### ▶ Hàm `lambda`
- Hàm `lambda` hay còn gọi là hàm vô danh, có thể được sử dụng ở bất cứ nơi nào các đối tượng hàm được yêu cầu. Chúng có thể có nhiều đối số nhưng chỉ có một biểu thức duy nhất.Giống như các định nghĩa hàm lồng nhau, hàm `lambda` có thể tham chiếu các biến từ phạm vi chứa hàm.
```py
def demo(n):
	return lambda x: x + n 
>>>f = demo(10)
>>>f(20)
30
>>> a = [1,2,3,4]
>>> b = list(filter(lambda a : (a%2) == 0), a)
[10, 8, 6, 4, 2]
>>> c  = list(map(lambda a : a*2), a)
[2, 4, 6, 8]
```

###### ▶ Chú thích chức năng
Chú thích chức năng là thông tin siêu dữ liệu tùy chọn hoàn toàn về các loại sử dụng do người dùng định nghĩa.
Được lưu trữ trong `__annotations__` theo kiểu `dict` và không ảnh hưởng đến bất kì thành phần nào khác của hàm. Chú thích tham số được xác định bằng dấu `:` sau tên thông số, theo sau là biểu thức đánh giá giá trị của tham số. Các chú thích trả về được xác đinh bằng chữ `-->` đứng sau tên hàm và danh sách các tham số, trước dấu `:` của hàm.
```py
def demo(name: str, age: int= 15) --> str:  # biến name sẽ nhận giá trị kiểu str, biến age nhận giá trị kiểu int và return sẽ trả về giá trị kiểu str
	print("Chú thích chức năng", demo.__annotations__)
	print("Đối số: ",name, age)
	return name + str(age)
demo('Văn A')
'{'name': <class 'str'>, 'age': <class 'int'>, 'return': <class 'str'>}'
A 15
'A15'
```
###### ▶ Quy cách viết mã
- Sử dụng thụt lề bằng 4 dấu cách, không nên sử dụng tab.
- Kích thước mỗi dòng không nên vượt quá 79 kí tự.
- Sử dụng các dòng trống để phân tách lớp, hàm và cách khối mã, nên 2 dòng cho cách lớp, 1 dòng cho cách hàm.
- Nên chú thích trên mỗi dòng riêng của mình.
- cách sau dấu phẩy, nên có khoảng cách giữa các toán tử và.
- Bắt đầu bằng chữ hoa cho tên lớp và chữ thường cho tên hàm, phương thức.

----

##### ▶ Cấu trúc dữ liệu
- List là cấu trúc dữ liệu có khả năng lưu trữ các kiểu dữ liệu khác nhau
- List không tạo mới khi sửa một phần tử trong list
- List được tạo ra bởi lưu trữ một dãy các kiểu dữ liệu ngăn cách bằng dấu phẩy

###### ▶ Các hàm dựng sẵn trong list

| STT | Hàm | Miêu tả|
|-----|-----|--------|
| 1 | list1 =,<,> list2 | So sánh các phần tử trong 2 list trả về giá trị kiểu Boolean |
| 2 | len(list) 		| Trả về độ dài của list |
| 3 | max(list) 		| Trả về phần tử có giá trị lớn nhất trong list |
| 4 | min(list) 		| Trả về phần tử có giá trị nhỏ nhất trong list |
| 5 | list(seq) 		| Chuyển đổi tuple thành list |
| 6 | sum(list) 		| trả về tổng của các phần tử trong list |
| 7 | del list[index]   | xóa phần tử thứ `index` trong list hoặc cả list với cú pháp `del list` |

###### ▶ Các phương thức trong list

| STT | Phương thức | Miêu tả|
|-----|-----|--------|
| 1 | list.append(obj) | Thêm một đối tượng `obj` vào cuối list, tương đương với .list[len(list):] = [obj] |
| 2 | list.count(x) | Đếm số lần xuất hiện của `x` trong list |
| 3 | list.extend(L) | mở rộng danh sách bằng cách thêm các mục từ `interable`, tương đương với .list[len(list):] = interable |
| 4 | list.insert(i,x) | Thêm `x` vào vị trí `i` trong list |
| 5 | list.remove(x) | xóa mục đầu tiên có giá trị `x` khỏi list |
| 6 | list.pop([i]) | xóa 1 giá trị tại vị trí i và trả về giá trị đó, nếu không có i thì sẽ xóa mục cuối cùng trong danh sách, dấu `[]` biểu thị tham số là tùy chọn, có thể có hoặc không |
| 7 | list.index(x[, start[, end]]) | trả về vị trí của x trong list và sẽ tạo ra `ValueError` nếu không có mục nào, các chỉ mục `start` và `end` để giới hạn phạm vị tìm kiếm|
| 8 | list.sort(key=None, reverse=Fasle) | Sắp xếp list theo thứ tự tăng dần với khóa `key`, đảo ngượi lại với `reverse=True` |
| 9 | list.reverse() | Đảo chuỗi ngay tại chỗ |
| 10 | sorted(list) | Sắp xếp list theo thứ tự tăng dần |
| 11 | enumerate(list) | Duyệt qua index và các giá trị |
| 12 | map(func, list) | Thực thi `func` lần lượt bằng các phần tử của list và trả về list mới |
| 13 | reduce(func, list) | Giống `map` nhưng nhận 2 tham số đầu vào |
| 14 | filter(func,list) | Filter sẽ gọi hàm `func` với tham số lần lượt là các phần tử của list và trả về danh sách các phần tử mà `func` trả về `True` |
| 15 | lambda x : y | với x là tham số đầu vào, y là giá trị trả về |
| 16 | ví dụ đặc biệt  | `[i*2 for i in range(10) if i%2 ==0]` Hoặc `[i*2 if i %2==0 else i*3 for i in range(10)]` |
| 17 | list.clear()  | Xóa tất cả các mục khỏi danh sách. Tương đương với .del list[:] |
| 18 | list.copy()  | Trả về một bản sao của danh sách, tương đương với list[:] |

**Ghi chú:** Các phương thức như `insert`, `remove`, `sort` chỉ sửa đổi danh sách không có giá trị trả về được in ra, mặc đinh là `None`, đây là nguyên tắc thiết kế cho tất cả các cấu trúc dữ liệu có thể thay đổi được.

###### Tuple
- Tuple cũng chưa giá trị giống list nhưng tuple không thể bị thay đổi.

| STT | Hàm | Miêu tả|
|-----|-----|--------|
| 1 | tuple1,tuple2 | So sánh 2 tuple với nhau|
| 2 | len(tuple)    | Trả về độ dài của tuple |
| 3 | max(tuple) | Trả về phần tử có giá trị lớn nhất trong tuple |
| 4 | min(tuple) | Trả về phần tử có giá trị nhỏ nhất trong tuple |
| 5 | tuple(seq) | Chuyển đổi tuple thành tuple |

###### Dictionary
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

###### Kỹ thuật Looping
Khi lặp qua các `dict`, khóa và giá trị tương ứng có hể lấy ra cùng một lúc bằng cách sử dụng phương thức `items()`
```py
a = {'name': 'An', 'age': 15}
for k, v in a.items():
	print(k, v)
name An
age 15
```
Khi lặp qua một danh sách thứ tự, chỉ số vị trí và giá trị tương ứng có thể lấy cùng một lúc bằng cách sử dụng `enumerate()`
```py
for i, v in enumerate(['a', 'b', 'c']):
	print(i, v)
0 a
1 b
2 c
```
Để lặp lại hai hoặc nhiều danh sách cùng một lúc, ta có thể nối các danh sách bằng `zip()`.
```py
a = ['a', 'b', 'c']
b= ['d', 'e', 'f']
for i, j in zip(a,b):
	print i, qua
```
Để lặp lại một danh sách ngược lại ta dùng hàm `reversed()`
```py
for i in reversed(ra(1,10,2)):
	print i
```
Để lặp một danh sách theo thứ tự được sắp xếp ta dùng `sorted()`
```py
a = ['a', 'f', 'b']
for i in sorted(set(a)):
	print i
```

----
##### Modules










