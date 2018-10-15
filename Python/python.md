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
| 2 | len(tuple) | Trả về độ dài của tuple |
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

- Nếu bạn thoát khỏi trình thông dịch và chạy lại nó, nhưng gì bạn đã định nghĩa (hàm và biến) đều bị mất. Do đó, nếu bạn muốn viết một chương trình dài hơn, thì tốt nhất bạn nên dùng một trình soạn thảo để chuẩn bị đầu vào cho trình thông dịch và chạy với tập tin này. Việc này được gọi là tạo `kịch bản`. Khi chương trình của bạn trở nên dài hơn, bạn sẽ muốn tách nó thành nhiều tập tin để dễ duy trì. bạn sẽ muốn dùng một hàm thuận tiện mà bạn đã viết trong một chương trình mà không cần phải định nghĩa lại nó vào chương trình đó.
- Để hỗ trợ việc này, Python có một cách đặt các định nghĩa vào một tập tin và dùng chúng trong một kịch bản hoặc một phiên làm việc với trình thông dịch, tập tin này được gọi là `module`. các định nghĩa từ một module có thể import vào các module khác
- Module là một tập tin chứa các định nghĩa của câu lệnh python. Tên tập tin là tên của modules với đuôi .py được gắn vào. Trong một module, tên của các module có thể truy cập được thông qua một biến toàn cục `__name__`. 
```py
def fib(n):
	a,b = 0, 1
	while b < n:
		print b
		a, b = b, a+b
```
- Chúng ta luu lại và đặt tên tập tin là fibo.py và chúng ta có thể import nó từ các module khác
```py
>>>import fibo
>>>fibo.fib(1000)
1 1 2 3 5 8 13 21 34 55 89 144 233 377 610 987
>>>fibo.__name__
'fibo'
>>> fib = fibo.fib # nếu bạn muốn dùng hàm thuwofng xuyên, bạn có thể gán nó ào một biến cục bộ.
>>> fib(500)
```
- Một module có thể nhập các module khác, các module bị nhập sẽ được đặ trong bảng kí hiệu toàn cục của module nhập nó.
```py
from fibo import fib # Câu lệnh này sẽ không đưa tên fibo vào bảng kí hiệu cục bộ nên fibo không được định nghĩa.
from fibo import * # Câu lệnh này nhập tất cả mọi tên trừ những tên bắt đầu bằng dấu gạch chân (_).
fib(100)
```
- Khi mập tập tim .py được biên dịch thành công, Python sẽ thử ghi phiên bản đã biên dịch ra .pyc, việc ghi này thất bại thì cũng không có lỗi xảy ra, nếu vì lí do gì mà tập tin không được ghi đầy đủ, tập tin pyc sẽ được đánh dấu là không hợp lệ và sẽ bị bỏ qua. Nội dung tập tin .pyc không phụ thuộc vào hệ thống, do đó một thư mục module python có thể được chia sẻ vời nhiều máy có kiến trúc khác nhau.
- Python có một thư việc các module chuẩn. Một vào modules được chuyển thẳng vào trình thông dịch, chúng cung cấp các tác vụ không nằm trong phạm vi chính của ngôn ngữ nhưng được tạo sẵn vì hiệu quả cao hoặc để truy cập vào những chức năng của hệ điều hành ví dụ các lệnh gọi hệ thống
- Hàm dir() được dùng để tìm ra tên các module định nghĩa, nó trả về danh sách các chuỗi đã sắp xếp.
```py
>>>import fibo
>>>dir(fibo)
['__name__', 'fib']
>>>dir() # Khi không có thông số, dir() liệt kê các tên bạn đã định nghĩa.
['__builtins__', '__doc__', '__file__', '__name__', 'fib']
```
- dir() không liệt kê tên của các hàm và biến có sẵn. Nếu bạn muốn có danh sách của chúng, thì chúng được định nghĩa trong module chuẩn `__builtin__`
```py
import __builtin__
dir(__builtin__)
['ArithmeticError', 'AssertionError', 'AttributeError', 'BaseException', 'BufferError', 'BytesWarning', 'DeprecationWarning', 'EOFError', 'Ellipsis', 'EnvironmentError', 'Exception', 'False', 'FloatingPointError', 'FutureWarning', 'GeneratorExit', 'IOError', 'ImportError', 'ImportWarning', 'IndentationError', 'IndexError', 'KeyError', 'KeyboardInterrupt', 'LookupError', 'MemoryError', 'NameError', 'None', 'NotImplemented', 'NotImplementedError', 'OSError', 'OverflowError', 'PendingDeprecationWarning', 'ReferenceError', 'RuntimeError', 'RuntimeWarning', 'StandardError', 'StopIteration', 'SyntaxError', 'SyntaxWarning', 'SystemError', 'SystemExit', 'TabError', 'True', 'TypeError', 'UnboundLocalError', 'UnicodeDecodeError', 'UnicodeEncodeError', 'UnicodeError', 'UnicodeTranslateError', 'UnicodeWarning', 'UserWarning', 'ValueError', 'Warning', 'WindowsError', 'ZeroDivisionError', '__debug__', '__doc__', '__import__', '__name__', '__package__', 'abs', 'all', 'any', 'apply', 'basestring', 'bin', 'bool', 'buffer', 'bytearray', 'bytes', 'callable', 'chr', 'classmethod', 'cmp', 'coerce', 'compile', 'complex', 'copyright', 'credits', 'delattr', 'dict', 'dir', 'divmod', 'enumerate', 'eval', 'execfile', 'exit', 'file', 'filter', 'float', 'format', 'frozenset', 'getattr', 'globals', 'hasattr', 'hash', 'help', 'hex', 'id', 'input', 'int', 'intern', 'isinstance', 'issubclass', 'iter', 'len', 'license', 'list', 'locals', 'long', 'map', 'max', 'memoryview', 'min', 'next', 'object', 'oct', 'open', 'ord', 'pow', 'print', 'property', 'quit', 'range', 'raw_input', 'reduce', 'reload', 'repr', 'reversed', 'round', 'set', 'setattr', 'slice', 'sorted', 'staticmethod', 'str', 'sum', 'super', 'tuple', 'type', 'unichr', 'unicode', 'vars', 'xrange', 'zip']
```
- Package là một cách để cấu trúc vùng tên của module bằng cách dùng "Tên module có chấm"
```
Sound/                          Package cao nhất
      __init__.py               khở tạo package con
      Formats/                  Các package con
              __init__.py
              wavread.py
              wavwrite.py
              aiffread.py
              aiffwrite.py
              auread.py
              auwrite.py
              ...
      Effects/                  Các package con
              __init__.py
              echo.py
              surround.py
              reverse.py
              ...
      Filters/                  Các package con
              __init__.py
              equalizer.py
              vocoder.py
              karaoke.py
              ...
```
- Khi nhập một package, Python sẽ tìm trong các thư mục từ `sys.path` để tìm thư mục con của package. Các tập tin `__init__.py` là cần thiết để cho Python biết các thư mục chứa các gói. Trong trường hợp đơn giản nhất, __init__.py có thể chỉ là một tập tin rỗng, nhưng nó cũng có thể thực thi các mã thiết lập của gói hoặc thiết lập biến __all__
```py
import Sound.Effects.echo
Sound.Effects.echo.echofilter(input, output, delay=0.7, atten=4)
#
from Sound.Effects import echo
echo.echofilter(input, output, delay=0.7, atten=4)
#
from Sound.Effects.echo import echofilter
echofilter(input, output, delay=0.7, atten=4)
```
**Lưu ý:** Khi sử dụng `form package import item`, item có thể hoặc là module con của gói hoặc là một tên nào khác được định nghĩa trong gói như hàm, lớp, biến. Câu lệnh import trước hết kiểm tra xem item có được định nghĩa trong gói, nếu không nó giả định rằng đó là module và thử nạp nó. Nếu không tìm thấy module, một biệt lệ `ImportError` sẽ được tạo ra.
Ngược lại, khi dùng cú pháp `import iteam.subitem.subsubitem`, mỗi tiểu mục trừ tiểu mục cuối cùng phải là một package, tiểu mục cuối cùng có thể là module hoặc package nhưng không thể là một lớp hay hàm, biến được định nghĩa trong tiểu mục trước.

##### Vào và Ra
Có một số cách để trình bày đầu ra của một chương trình, dữ liệu có thể được in dưới dạng người đọc có thể đọc được hoặc được ghi vào một tệp để sử dụng trong tương lai
- Thường thì chúng ta sử dụng hai cách viết các giá trị: các câu lệnh biểu thức và hàm `print()`, hoặc sử dụng phương thức `write()` của các đối tượng tệp, tệp đầu ra tiêu chuẩn có thể tham chiếu dưới dạng `sys.stdout`
- Để sử dụng các chuỗi kí tự được định dạng, ta có thể bắt đầu chuỗi có `f` hoặc `F` trước dấu ngoặc kép. Bên trong chuỗi này có thể viết biểu thức Python giữa `{và}` có thể là biến hoặc giá trị theo nghĩa đen.
```py
>>> a = 5
>>> b = 6
>>> f'{a} và {b}'
'5 và 6'
```
- Các phương pháp `str.format()` đòi hỏi nhiều thao tác bằng tay, bạn vẫn sẽ cung cấp `{và}` nơi một biến được thay thế nhưng bạn sẽ phải cung cấp thông tin được định dạng
```py
>>> a = 5
>>> b = 6
>>> '{} và {}'.format(a, b)
' a và b'
```
- Cuối cùng, bạn có thể tự làm tất cả các chuỗi bằng cách sử dụng các hoạt dộng nối chuỗi và ghép nối để tạo bất kì bố cục nào mà bạn muốn
- Khi bạn khoong quan tâm đầu ra mà chỉ muốn hiển thị nhanh một số biến cho mục đích gỡ lỗi, bạn có thể chuyển đổi bất kì giá trị nào thành chuỗi bằng hàm `repr()` hoặc `str()`.
- `str()` nhằm để trả về cách hiển thị giá trị dễ đọc còn `repr()` nhằm để tạo cách thể hiện mà trình thông dịch có thể đọc (hoặc sẽ sinh lỗi `SyntaxError` nếu không có cú pháp tương đương). Đối với các đối tượng không có cách thể hiện cho người đọc, `str()` sẽ trả về cùng giá trị với `repr()`
```py
>>> s ='Hello'
>>> str(s)    
'Hello'       
>>> repr(s)   
"'Hello'"   
```
- Các chuỗi ký hiệu chuỗi định dạng cho phép bạn bao gồm các giá trị biểu thức Python bên trong một chuỗi bằng cách thêm tiền tố `f` hoặc `F` và viết các biểu thức dưới dạng `{expression}`  
```py
>>> import math
>>> print(f'The value of pi is {math.pi: .3f}.') # Trường : sẽ chuyển đổi số nguyên với số kí tự tối thiểu .
```
- Các công cụ chuyển đổi khác có thể được sử dụng để chuyển đổi giá trị trước khi nó được định dạng `'!a'` áp dụng cho `ascii()`, `'!s'` áp dụng cho `str()` và `'!r'` áp dụng cho `repr()`.
```py
>>>a = 'Hello'
>>>print(f'Say: {a}')
Say: Hello
>>>print(f'Say: {a!r}')
Say: 'Hello'
```

###### Phương thức định dạng `string()`
Cách sử dụng cơ bản của phương thức `str.format()`
```py
>>> print('{} is a {}'.format('he', 'man'))
he is a man
```
- Các dấu ngoặc và các kí tự bên trong chúng được thay thế bằng các đối tượng được truyền vào phương thức `str.format()`, một số trong ngoặc đơn có thể được sử dụng để chỉ vị trí của đối tượng được truyền vào phương thức `str.format()`.
```py
>>> print('{0} and {1}'.format('apple', 'samsung'))
apple and samsung
>>> print('{1} and {0}'.format('apple', 'samsung'))
samsung and apple
```
- Nếu các đối số từ khóa được sử dụng trong `str.format()`, giá trị của chúng được tham chiếu bằng cách sử dụng tên của đối số.
```py
>>>print('This {object} is a {adjective}'.format(object='He', adjective='men'))
He is a men
```
- Đối số vị trí và từ khóa có thể kết hợp với nhau.
- Nếu bạn có một chuỗi địch dạng thực sự dài mà bạn không muốn chia nhỏ, bạn có thể tham khảo các biến được định dạng theo tên thay thì theo vị trí.
```py
>>> table = {'an': 100, 'be': 200, 'ce': 300}
>>> print('An: {0[an]:d},Be: {0[be]:d}, Ce: {0[ce]:d}'.format(table))
An: 100,Be: 200, Ce: 300
```
- Điều này đặc biệt hữu ích khi kết hợp với hàm dựng sẵn `vars()`, trả về từ điển chứa tất cả biến cục bộ
```py
>>> for x in range(1,11):
>>> 	print('{0:2d} {1:3d} {2:4d}'.format(x, x*x, x**x))
 1   1    1        
 2   4    4        
 3   9   27        
 4  16  256        
 5  25 3125        
 6  36 46656       
 7  49 823543      
 8  64 16777216    
 9  81 387420489   
10 100 10000000000 
```
- Ta có thể sử dụng định dạng chuỗi cũ đó là `%`
```py
>>> import math
>>> print('The value of pi is %5.3f' %math.pi)
The value of pi is 3.142
```

###### Phương thức định dạng chuỗi thủ công

Các kí tự thoát trong python:

| Ki tự | Kí tự trong mã hexa | Miêu rả |
|-------|---------------------|---------|
| \a | 0x07 | Chuông hoặc thông báo | 
| \b | 0x08 | Backspace |
| \n | 0x0a | Dòng mới |
| \t | 0x09 | Tab |
| \v | 0x0b | Tab theo chiều dọc |
| \r | 0x0d | Quay lại |
| \n | 0x0a | Dòng mới | 

 Toán tử trong kí tự, chuỗi:

| Ki tự | Miêu tả | Ví dụ |
|-------|---------------------|---------|
| + | Phép cộng hai chuỗi | 'a' + 'b' = 'ab' | 
| * | Phép nhân chuỗi với toán hạng | 'a'* 2 = 'aa' |
| [] | Phép truy xuất phần tử chuỗi | 'abc'[1] = b |
| `in` | Trả về `True` nếu tồn tại kí tự đã cho trong chuỗi | 'a' in 'abc' = True |
| `not it` | Trả về `True` nếu không tồn tại kí tự đã cho trong chuỗi | 'a' not in 'abc' = False |
| % | Định dạng chuỗi | |
| chr(x) | Chuyển kiểu `int` thành kí tự |
| unichr(x) | Chuyển kiểu `int` thành kí tự unicode |
| ord(x) | Chuyển `String` dang kiểu `int` |
| hex(x) | Chuyển Kiểu `int` sang `hex` |
| oct(x) | Chuyển kiểu `int` sang kiểu số `oct` |

Các định dạng chuỗi:

| Kí hiệu định dạng | Kiểu Chuyển đổi |
|-------------------|-----------------|
| %c | Kí tự (Nhận đầu vào 1 kí tự hoặc chữ số) |
| %s | Chuyển đổi chuỗi qua Str() trước khi định dạng |
| %i| Kiểu số nguyên Signed |
| %d | nt |
| %u | Kiểu số nguyên Unsigned |
| %o | Kiểu số Hệ Bát phân |
| %x | Kiểu hệ Thập lục phân(chữ thường) |
| %X | Kiểu hệ Thập lục phân(chữ hoa) |
| %e | Kiểu kí hiệu mũ(viết thường) |
| %E | Kiểu kí hiệu mũ(viết hoa) |
| %f | Số thực dấu phẩy động |
| %g | kiểu ngắn hơn của `%f` và `%e` |
| %G | kiểu ngắn hơn của `%f` và `%E` |

Các hàm dựng sẵn của Chuỗi:

| STT | Hàm | Miêu tả |
|-----|-----|-----|
| 1 | capitalize() | Viết hoa kí tự đầu tiên của chuỗi |
| 2 | center(chiều rộng, kí tự lấp đầy) | Đưa chuỗi vào giữa và lấp đầy 2 bên bằng kí tự |
| 3 | count(str[, beg = 0, end = len(string)]) | đếm số lần kí tự xuất hiện trong chuỗi |
| 4 | encode(encoding='UTF-8', errors='strict') | Trả về chuỗi đã được mã hóa |
| 5 | decode(encoding='UTF-8', errors='strict') | Trả về chuỗi đã được giải mã |
| 6 | endswith(suffix[, beg =0, end =  len(string)]) | Trả về `True` nếu chuỗi được kết thúc bằng hậu tố |
| 7 | explandtabs(tabsize) | Mở rộng khoảng cách của kí tự `\t` theo `tabsize` |
| 8 | find(str[, beg = 0, end = len(string)]) | Tìm vị trí đầu tiên của một kí tự trong chuỗi |
| 9 | rfind(str[, beg = 0, end = len(string)]) | Giống `find` nhưng trả về chỉ mục cuối cùng |
| 10 | index(str[, beg = 0, end = len(string)]) | Giống `find()` nhưng sẽ đưa ra một ngoại lệ nếu không tìm thấy|
| 11 | rindex(str[, beg = 0, end = len(string)]) | Giống `rfind()` nhưng sẽ đưa ra một ngoại lệ nếu không tìm thấy|
| 12 | isalnum() | Kiểm tra xem chuỗi có chưa kí tự số hay không |
| 13 | isalpha() | Kiểm tra xem chuỗi chỉ chứa các kí tự chữ cái hay không |
| 14 | isdigit() | Kiểm tra xem chuỗi chỉ chứa các kí tự số hay không |
| 15 | isdemacial() | Trả về `True` nếu một chuỗi dạng `Unicode` chỉ chứa các ksi tự thập phân |
| 16 | islower() | Kiểm tra xem chuỗi chỉ chứa các kí tự chữ cái thường hay không |
| 17 | isnumberic() | Kiểm tra xem chuỗi chỉ chứa các kí tự số hay không(chỉ dùng với kiểu unicode) |
| 18 | isspace() | Kiểm tra xem chuỗi chỉ chứa kí tự `space` hay không |
| 19 | istitle() | Kiểm tra xem chuỗi ở dạng `titalcase` ( viết hoa các kí tự đầu tiên) hay không |
| 20 | join(seq) | Nối các phần tử của seq thành một chuỗi |
| 21 | len(str) | Trả về độ rộng của chuỗi |
| 22 | ljust(width, fillchar) | Trả về chuỗi mới được căn chỉnh vào bên trái,bên phải là các `fillchar` sao cho độ rộng của chuỗi bằng `width` |
| 23 | rjust(width, fillchar) | Trả về chuỗi mới được căn chỉnh vào bên phải,bên trái là các `fillchar` sao cho độ rộng của chuỗi bằng `width` |
| 24 | lower() | Chuyển đổi tất cả các chữ hoa trong chuỗi sang chữ thường |
| 25 | upper() | Chuyển đổi tất cả các chữ thường trong chuỗi sang chữ hoa |
| 26 | swapcase() | Đảo ngược kiểu của tất cả các kí tự trong chuỗi |
| 27 | lstrip() | Xóa tất cả các khoảng trắng ở đầu trong chuỗi |
| 28 | rstrip() | Xóa tất cả các khoảng trắng ở cuối trong chuỗi |
| 29 | strip() | Thực hiện cả 2 phương thức `lstrip()` và `rstrip()` |
| 30 | max(str) | Trả về chữ cái lớn nhất từ chuỗi đã cho |
| 31 | min(str) | Trả về chữ cái nhỏ nhất từ chuỗi đã cho |
| 32 | replace(old, new, [max]) | Thay thế tất cả sự xuất hiện của `old` bằng `new` trong chuỗi với số lần xuất hiện là `max` |
| 33 | split([str, num=string.count(str)) | Chia chuỗi theo `str` đã cho(`space` nếu `str` không được cung cấp; và `num` chuỗi con nếu được cung cấp) |
| 34 | startswith(str, beg=0, end =len(string)) | Xác định xem chuỗi có bắt đầu với chuỗi `str` hay không, trả về `True` hoặc `False` |
| 35 | title() | Trả về 1 bản sao chuỗi sao cho các kí tự đầu tiên của chuỗi đều viết hoa |
| 36 | zfill(width) | Trả về một chuỗi mới, bao gồm chuỗi ban đầu và được đệm thêm các số `0` vào bên trái sao cho độ dài chuỗi là `width` |


###### Đọc và viết tập tin
- Hàm `open()` trả về một đối tược tập tin, và thường được sử dụng với hai đối số `.open(filename, mode)`
```py
>>> f = open('workfile', 'w')
```
- Đối số đầu tiên là một chuỗi chứa tên tệp, đối số thứ hai là một chuỗi khác chưa một vài kí tự mô tả cách thức tệp sẽ được sử dụng

| Mode |Mô tả |
|-----|-----|
| r	| Mở file chỉ để đọc |
| r+ | Mở file để đọc và ghi |
| rb | Mở file trong chế độ đọc cho định dạng nhị phân, đây là chế độ mặc định. Con trỏ tại phần bắt đầu của file |
| rb+ | Mở file để đọc và ghi trong định dạng nhị phân. Con trỏ tại phần bắt đầu của file |
| w	| Tạo một file mới để ghi, nếu file đã tồn tại thì sẽ bị ghi mới |
| w+ | Tạo một file mới để đọc và ghi, nếu file tồn tại thì sẽ bị ghi mới |
| wb | Mở file trong chế độ ghi trong định dạng nhị phân. Nếu file đã tồn tại, thì ghi đè nội dung của file đó, nếu không thì tạo một file mới |
| wb+ | Mở file để đọc và ghi trong định dạng nhị phân. Nếu file tồn tại thì ghi đè nội dung của nó, nếu file không tồn tại thì tạo một file mới để đọc và ghi | |
| a | Mở file để ghi thêm vào cuối file, nếu không tìm thấy file sẽ tạo mới một file để ghi mới |
| a+ | Mở file để đọc và ghi thêm vào cuối file, nếu không tìm thấy file sẽ tạo mới một file để đọc và ghi mới |
| ab | Mở file trong chế độ append trong chế độ nhị phân. Con trỏ là ở cuối file nếu file này đã tồn tại. Nếu file không tồn tại, thì tạo một file mới để ghi |
| ab+ | Mở file trong để đọc và append trong định dạng nhị phân. Con trỏ file tại cuối nếu file đã tồn tại. Nếu không tồn tại thì tạo một file mới để đọc và ghi |

- Các thuộc tính của file:

| Thuộc tính|Mô tả |
|-----|-----|
| file.closed | Trả về True nếu file đã đóng, ngược lại là False |
| file.mode	| Trả về chế độ truy cập của file đang được mở |
| file.name	| Trả về tên của file |

- Các để sử dụng tốt nhất là sử dụng từ khóa `with` khi xử lí các đối tượng tệp. Ưu điểm là tập tin được đóng đúng sau khi bộ phần mềm kết thúc, ngay cả khi một ngoại lệ xuất hiện ở một số chỗ. Việc sử dụng with cũng ngắn hơn sử dụng khối lệnh tương đương `try-finally'`
```py
>>> with open('workfile') as f:
>>> 	read_data = f.read()
>>>f.closed
True
```
- Nếu bạn không sử dụng từ khóa `with`, thì bạn nên gọi `f.close()` để đóng tệp và ngay lập tức giải phóng mọi tài nguyên hệ thống sử dụng bởi nó. Nếu bạn không đóng tệp một cách rõ ràng thì trình dọn rác của Python sẽ phá hủy đối tượng và đóng tệp đang mở cho bạn, nhưng tệp có thể vẫn mở trong một thời gian.
- Sau khi một tập tin được đóng bằng cách sử dụng `with` hoặc gọi hàm `f.close()`, thì việc sử dụng tập tin tại thời điểm đó sẽ thất bại.
```py
>>> f.close()
>>> f.read()
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
ValueError: I/O operation on closed file.
```
- Để đọc được nội dung của một tập tin, ta gọi `f.read(size)`, số liệu được trả về như là một chuỗi ( trong chế độ văn bản hoặc đố tượng byte (ở chế độ nhị phân)). `size` là dối số tùy chọn, khi `size` không được thiết lập hoặc thiếp lập với giá trị `False, None` thì toàn bộ nội dung của tệp sẽ được đọc và trả về, nếu đã kết thúc tệp, `f.read()` sẽ trả về một chuỗi rỗng `('')`
```py
>>> f.read()
'This is the entire file.\n'
>>> f.read()
''
```
- Hàm `f.readline()` đọc một dòng từ tệp, một kí tự dòng mới `(\n)` được để ở cuối chuỗi và chỉ bị bỏ qua trên dòng cuối cùng của tệp nếu tệp không kết thúc bằng một dòng mới, nếu `f.readline()` trả về một chuỗi rỗng thì có nghĩa phần cuối của tệp đã được đọc, lí do là mỗi dòng trống được biểu diễn bằng `\n`, và tệp chỉ chứa duy nhất một dòng mới.
```py
>>> f.readline()
'This is the first line of the file.\n'
>>> f.readline()
'Second line of the file\n'
>>> f.readline()
''
```
- Để đọc được các dòng từ tệp, bạn có thể lặp lại đối tượng tệp
```py
>>> for line in f:
...     print(line, end='')
...
This is the first line of the file.
Second line of the file
```
- nếu bạn muốn đọc tất cả các dòng của một tập tin trong danh sách, bạn cũng có thể dử dụng `list(f)` hoặc `f.readlines()`.
- `f.write(string)` ghi nội dung của chuỗi vào tệp, và trả về số kí tự được viết.
```py
>>> f.write('This is a test\n')
15
```
- Các đối tượng khác cần được chuyển đổi thành chuỗi (trong chế dộ văn bản) hoặc thành đối tượng byte ( ở chế độ nhị phân) trước khi ghi chúng vào tệp.
```py
>>> value = ('the answer', 42)
>>> s = str(value)  # chuyển đổi kiểu tuple thành tring
>>> f.write(s)
18
```
- `f.tell()` trả về một số nguyên cho vị trí hiện tại của đối tượng trong tệp, được tính bằng số byte từ đầu tệp khi ở chế độ nhị phân và số mờ khi ở chế độ văn bản.
- Để thay đổi vị trí của đối tượng tệp , hãy sử dụng ` f.seek(offset, from_what)`. Vị trí được tính từ việc thêm `offset` vào điểm tham chiếu, điểm tham số được chọn bởi đối số `from_what`. Giá trị `0` của `from_what` được tính từ điểm bắt đầu của file, giá trị `1` sử dụng vị trí con trỏ tệp hiện tại, giá trị 2 được tính ở cuối tập tin như một điểm tham chiếu. `from_what` có thể được bỏ qua và mặc định là 0, sử dụng phần đầu của tệp làm điểm tham chiếu.
```py
>>> f = open('workfile', 'rb+')
>>> f.write(b'0123456789abcdef')
16
>>> f.seek(5)      # Đi tới byte thứ 6 của file
5
>>> f.read(1)
b'5'
>>> f.seek(-3, 2)  # Đi tới byte thứ 3 của file tính từ điểm kết thúc
13
>>> f.read(1)
b'd'
```
- Ta có thể lưu dữ liệu có cấu trúc với `json` bạn có thể tham khảo các tài liệu khác.

##### Lỗi và biệt lệ
- Có ít nhất hai loại lỗi khác biệt : ` lỗi cú pháp` và ` biệt lệ`.
- Lỗi cú pháp còn được biết đến như lỗi phân tích (parsing error).
```py
>>> while True print 'Hello world'
  File "<stdin>", line 1, in ?
    while True print 'Hello world'
                   ^
SyntaxError: invalid syntax
```
- Bộ phân tích lặp lại dòng gây lỗi và hiển thị một mũi tên con trỏ vào điểm đầu tiên lỗi được phát hiện. Lỗi nằm ở phía trước mũi tên.
- Cho dù mỗi câu lệnh hoặc biểu thức là đúng đắn, nó vẫn có thể tạo ra lỗi khi thực thi, nhưng lỗi phát hiện trong lúc thực thi được gọi là ` biệt lệ `, bạn sẽ học cách xử lí chúng trong các chuwong trình Python, hầu hết các biệt lệ đầu được xử lí bởi chương trình và dẫn đến kết quả là các thông điệp lỗi
```py
>>> 10 * (1/0)
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
ZeroDivisionError: division by zero
>>> 4 + spam*3
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
NameError: name 'spam' is not defined
>>> '2' + 2
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: Can't convert 'int' object to str implicitly'
```
- Dòng cuối của thông báo lỗi cho biết điều gì đã xảy ra. Ngoại lệ có nhiều loại khác nhau và loại được in như một phần của thông báo, các loại trong ví dụ trên là `ZeroDivisionError`, `NameError`, `TypeError`. Chuỗi được in dưới dạng loại ngoại lệ và tên của ngoại lệ được tích hợp đã xảy ra. Điều này đúng với tất cả ngoại lệ tích hợp sẵn trừ ngoại lệ do người dùng định nghĩa.
- Phần còn lại của dòng cung cấp chi tiết dựa trên loại ngoại lệ và những gì gây ra nó.
- Phần trước của thông báo lỗi cho thấy bối cảnh nơi ngoại lệ xảy ra, dưới dạng một truy xuất stack

##### Xử lí biệt lệ
- Có thể viết các chương trình xử lí các ngoại lệ được chọn, ví dụ sau yêu cầu người dùng nhập vào cho đến khi số nguyên hợp lệ được nhập vào nhưng cho phép người dùng ngắt chương trình.
```py
>>> while True:
...     try:
...         x = int(input("Please enter a number: "))
...         break
...     except ValueError:
...         print("Oops!  That was no valid number.  Try again...")
```
- Đầu tiên, mệnh đề `try` ( các câu lệnh giữa từ khóa `try` và `except`) được thực hiện, nếu không có ngoại lệ nào xảy ra, mệnh đề `exept` bị bỏ qua và việc thực hiện câu lệnh `try` hoàn tất. Nếu một ngoại lệ xảy ra trong khi thực thi mệnh đề try, thì phần còn lại của mệnh đề sẽ bị bỏ qua. Sau đó, nếu kiểu của biệt lệ khớp với tên của biệt lệ được đặt theo từ khóa `exept` thì mệnh đề except được thực hiện và sau đó thực hiện tiếp tục sau câu lệnh try. Còn nếu không khớp, nó được chuyển cho câu lệnh `try` ngoài, nếu không có trình xử lí nào tìm thấy, nó là `unhandled exception` và việc thực hiện dừng lại với một thông báo hiển thị như trên
- Một câu lệnh `try` có thể có nhiều hơn một mệnh đề ngoại trừ, để chỉ định trình xử lí cho các ngoại lệ khác nhau, tối đa một xử lí sẽ được thực hiện. Trình xử lí chỉ xử lí các ngoại lệ xảy ra trong các mệnh đề try tương ứng, một mệnh đề `exept` có thể đặt tên cho nhiều biệt lệ như một bộ dữ liệu được tạo bởi dấu ngoặc đơn. 
```py
... except (RuntimeError, TypeError, NameError):
...     pass
```
- Một lớp trong một mệnh đề `exept` tương thích với một ngoại lệ nếu nó cùng một lớp hoặc một cơ sở.
```py
class B(Exception):
    pass

class C(B):
    pass

class D(C):
    pass

for cls in [B, C, D]:
    try:
        raise cls()
    except D:
        print("D")
    except C:
        print("C")
    except B:
        print("B")
```
**Lưu ý:** Nếu các mệnh đề ngoại trừ đảo ngược, nó sẽ dduwwojc in `B, B, B` vì mệnh đề biệt lệ đầu tiên khớp với `exept B`.
- Vế except cuối cùng có thể bỏ qua tên biệt lệ, có tác dụng như là một thay thế (wildcard). Phải hết sức cẩn trọng khi dùng nó, vì nó có thể dễ dàng che đi lỗi lập trình thật! Nó cũng có thể được dùng để in thông báo lỗi và sau đó nâng biệt lệ lại (re-raise exception) (nhằm cho phép nơi gọi xử lý biệt lệ)
```py
import sys

try:
    f = open('myfile.txt')
    s = f.readline()
    i = int(s.strip())
except OSError as err:
    print("OS error: {0}".format(err))
except ValueError:
    print("Could not convert data to an integer.")
except:
    print("Unexpected error:", sys.exc_info()[0])
    raise
```
- `try ... except` (câu lệnh) có một vế elsekhông bắt buộc, mà khi có mặt sẽ phải đi sau tất cả các vế except. Nó dùng cho mã sẽ được thực thi nếu vế try không nâng biệt lệ nào
```py
for arg in sys.argv[1:]:
    try:
        f = open(arg, 'r')
    except OSError:
        print('cannot open', arg)
    else:
        print(arg, 'has', len(f.readlines()), 'lines')
        f.close()
```
- Việc dùng vế else tốt hơn là thêm mã vào vế try vì nó tránh việc vô tình bắt một biệt lệ không được nâng từ mã được bảo vệ trong câu lệnh try ... except .

- Khi một biệt lệ xảy ra, nó có thể có một giá trị gắn liền, còn được biết đến như là thông sốcủa biệt lệ. Sự có mặt và kiểu của thông số phụ thuộc vào kiểu biệt lệ.

- Vế except có thể chỉ định một biến sau một (hoặc một bộ) tên biệt lệ. Biến đó được gán với một trường hợp biệt lệ (exception instance) với các thông số chứa trong instance.args. Để thuận tiện, trường hợp biệt lệ định nghĩa __getitem__ và __str__ để cho các thông số có thể được truy xuất và in ra trực tiếp mà không phải tham chiếu .args.

- Nhưng việc dùng .args đã không được khuyến khích. Thay vào đó, cách dùng tốt nhất là truyền một thông số đơn lẻ vào một biệt lệ (có thể là một bộ nếu có nhiều thông số) và gán nó vào thuộc tính message . Ta cũng có thể tạo một biệt lệ trước và thêm các thuộc tính vào nó trước khi nâng
```py
>>> try:
...     raise Exception('spam', 'eggs')
... except Exception as inst:
...     print(type(inst))    # the exception instance
...     print(inst.args)     # arguments stored in .args
...     print(inst)          # __str__ allows args to be printed directly,
...                          # but may be overridden in exception subclasses
...     x, y = inst.args     # unpack args
...     print('x =', x)
...     print('y =', y)
...
class 'Exception'
('spam', 'eggs')
('spam', 'eggs')
x = spam
y = eggs
```
- Nếu biệt lệ có một thông số, nó sẽ được in ra như là phần cuối ('chi tiết') của thông điệp của những biệt lệ không được xử lý.
- Các phần xử lý biệt lệ không chỉ xử lý các biệt lệ xảy ra ngay trong vế try, mà còn xử lý cả biệt trong những hàm được gọi (trực tiếp hoặc gián tiếp) trong vế try
```py
>>> def this_fails():
...     x = 1/0
...
>>> try:
...     this_fails()
... except ZeroDivisionError as err:
...     print('Handling run-time error:', err)
...
Handling run-time error: division by zero
```

##### Nâng biệt lệ
- raise (câu lệnh) cho phép nhà lập trình ép xảy ra một biệt lệ được chỉ định
```py
>>> raise NameError('HiThere')
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
NameError: HiThere
```
- Thông số đầu tiên cho raise chỉ định biệt lệ sẽ được nâng. Thông số (tùy chọn) thứ hai chỉ định thông số của biệt lệ. Hoặc là, các dòng trên có thể được viết raise NameError('HiThere'). Cả hai dạng đều đúng, nhưng người ta có vẻ chuộng dạng thứ hai hơn.
- Nếu bạn cần xác định xem một biệt lệ có được nâng chưa nhưng không định xử lý nó, dạng đơn giản hơn của câu lệnh raise cho phép bạn nâng lại (re-raise) biệt lệ
```py
>>> try:
...     raise NameError('HiThere')
... except NameError:
...     print('An exception flew by!')
...     raise
...
An exception flew by!
Traceback (most recent call last):
  File "<stdin>", line 2, in <module>
NameError: HiThere
```

##### Các biệt lệ do người dùng định nghĩa
- Các chương trình có thể đặt tên biệt lệ riêng bằng cách tạo một lớp biệt lệ mới. Các biệt lệ thường nên kế thừa từ lớp Exception , trực tiếp hoặc gián tiếp.
- Các lớp biệt lệ có thể được định nghĩa để làm bất kỳ việc gì như các lớp khác, nhưng chúng thường là đơn giản và chỉ cung cấp một số thuộc tính để chứa thông tin về lỗi cho các phần xử lý biệt lệ. Khi tạo một mô-đun mà có thể nâng vài lỗi khác biệt, cách thông thường là tạo một lớp cơ sở cho các biệt lệ được định nghĩa bởi mô-đun đó, và kế thừa từ đó để tạo những lớp biệt lệ cụ thể cho những trường hợp lỗi khác nhau.
- Đa số biệt lệ được định nghĩa với tên tận cùng bằng 'Error', tương tự như cách đặt tên của các biệt lệ chuẩn.
```py
class Error(Exception):
    """Lớp cở sở cho các biệt lệ trong module này."""
    pass

class InputError(Error):
    """Ngoại lệ được nêu ra cho các lỗi trong đầu vào.

    Thuộc tính:
        expression -- biểu thức đầu vào trong đó xảy ra lỗi
        message -- giải thích về lỗi
    """

    def __init__(self, expression, message):
        self.expression = expression
        self.message = message

class TransitionError(Error):
    """Nâng biệt lệ khi một hoạt động cố gắng chuyển đổi trạng thái không được phép.

    Thuộc tính:
        previous -- trạng thái lúc bắt đầu chuyển đổi
        next -- cố gắng chuyển trạng thsái mới
        message -- giải thích lý do tại sao chuyển đổi cụ thể không được phép
    """

    def __init__(self, previous, next, message):
        self.previous = previous
        self.next = next
        self.message = message
```

##### Định nghĩa cách xử lí
- try (câu lệnh) có một vế không bắt buộc khác với mục đích định nghĩa những tác vụ dọn dẹp (clean-up action) mà sẽ được thực hiện trong mọi trường hợp
```py
>>> try:
...     raise KeyboardInterrupt
... finally:
...     print('Goodbye, world!')
...
Goodbye, world!
KeyboardInterrupt
Traceback (most recent call last):
  File "<stdin>", line 2, in <module>
```
- 1 vế `finally` luôn được thực thi trước khi rời khỏi câu lệnh try , cho dù có xảy ra biệt lệ hay không. Khi một biệt lệ đã xảy ra trong vế `try` và không được xử lý bởi vế` except` (hoặc nó đã xảy ra trong một vế except hay else ), nó sẽ được nâng lại sau khi vế` finally` đã được thực thi. Vế `finally` cũng được thực thi 'trên đường ra' khi bất kỳ vế nào của câu lệnh try được bỏ lại thông qua câu lệnh `break`, `continue` hay `return`. 
```py
>>> def divide(x, y):
...     try:
...         result = x / y
...     except ZeroDivisionError:
...         print("division by zero!")
...     else:
...         print("result is", result)
...     finally:
...         print("executing finally clause")
...
>>> divide(2, 1)
result is 2.0
executing finally clause
>>> divide(2, 0)
division by zero!
executing finally clause
>>> divide("2", "1")
executing finally clause
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
  File "<stdin>", line 3, in divide
TypeError: unsupported operand type(s) for /: 'str' and 'str'
```
- Như bạn có thể thấy, vế finally được thực thi trong mọi trường hợp. TypeError được nâng vì chia hai chuỗi không được xử lý bởi vế except và vì thế nên được nâng lại sau khi vế finally đã được thực thi.
- Trong các ứng dụng thực thế, vế finally được dùng để trả lại những tài nguyên ngoài (như tập tin, hoặc kết nối mạng), cho dù việc sử dụng tài nguyên có thành công hay không.

#####  Định nghĩa xử lý có sẵn
- Một số đối tượng định nghĩa các tác vụ dọn dẹp chuẩn để thực thi khi một đối tượng không còn được cần đến, cho dù việc xử dụng đối tượng là thành công hay thất bại. Xem qua ví dụ sau, nó thử mở một tập tin và viết nội dung của nó ra màn hình.
```py
for line in open("myfile.txt"):
    print(line, end="")
```
- Vấn đề với đoạn mã trên là nó để tập tin ngỏ trong một thời gian không xác định sau khi đoạn mã đã kết thúc. Đây không phải là vấn đề gì trong các đoạn kịch bản đơn giản, nhưng có thể là một vấn đề phức tạp đối với các ứng dụng lớn hơn. Câu lệnh with cho phép các đối tượng như tập tin được dùng theo một cách đảm bảo chúng sẽ được dọn dẹp đúng lúc và đúng đắn.
```py
with open("myfile.txt") as f:
    for line in f:
        print(line, end="")
```
- Sau khi câu lệnh được thực thi, tập tin f luôn được đóng lại, cho dù gặp phải vấn đề trong khi xử lý các dòng. Các đối tượng khác mà cung cấp những tác vụ dọn dẹp định nghĩa sẵn sẽ cho biết về điểm này trong tài liệu của chúng.

----

#### Lớp

##### Thuật ngữ
- Các đối tượng có tính cá thể (individuality), và nhiều tên (trong nhiều phạm vi, scope) có thể được gắn vào cùng một đối tượng. Trong các ngôn ngữ khác được gọi là tên lóng (alias). Nó thường không được nhận ra khi dùng Python lần đầu, và có thể được bỏ qua khi làm việc với các kiểu bất biến cơ bản (số, chuỗi, bộ). Tuy nhiên, tên lóng có một ảnh hưởng đối với ý nghĩa của mã Python có sử dụng các đối tượng khả biến như danh sách, từ điển, và đa số các kiểu thể hiện các vật ngoài chương trình (tập tin, cửa sổ, v.v...). Nó thường được dùng vì tên lóng có tác dụng như là con trỏ theo một vài khía cạnh nào đó. Ví dụ, truyền một đối tượng vào một hàm rẻ vì chỉ có con trỏ là được truyền, và nếu một hàm thay đổi một đối tượng được truyền vào, thì nơi gọi sẽ thấy các thay đổi đó -- thay vì cần hai kiểu truyền thông số như trong Pascal.

##### Phạm vi trong Python và vùng tên

- Trước khi giới thiệu lớp, chúng ta sẽ cần hiểu phạm vi (scope) và vùng tên (namespace) hoạt động như thế nào vì các định nghĩa lớp sẽ sử dụng chúng. Kiến thức về vấn đề này cũng rất hữu dụng với những nhà lập trình Python chuyên nghiệp.
- A namespace (vùng tên) (vùng tên) là ánh xạ từ tên vào đối tượng. Đa số các vùng tên được cài đặt bằng từ điển Python, nhưng điều đó thường là không quan trọng (trừ tốc độ), và có thể sẽ thay đổi trong tương lai. Các ví dụ vùng tên như: tập hợp các tên có sẵn (các hàm như abs(), và các tên biệt lệ có sẵn); các tên toàn cụ trong một mô-đun; các tên nội bộ trong một phép gọi hàm. Theo nghĩa đó tập hợp các thuộc tính của một đối tượng cũng là một vùng tên. Điều quan trọng cần biết về vùng tên là tuyệt đối không có quan hệ gì giữa các vùng tên khác nhau; ví dụ hai mô-đun khác nhau có thể cùng định nghĩa hàm 'maximize' mà không sợ lẫn lộn -- người dùng mô-đun phải thêm tiền tố tên mô-đun trước khi gọi hàm.
- Cũng xin nói thêm là từ thuộc tính được dùng để chỉ mọi tên theo sau dấu chấm -- ví dụ, trong biểu thức z.real, real là một thuộc tính của đối tượng z. Nói đúng ra, tham chiếu tới tên trong một mô-đun là các tham chiếu tới thuộc tính: trong biểu thức modname.funcname, modname là một đối tượng mô-đun và funcname là một thuộc tính của nó. Trong trường hợp này, việc ánh xạ giữa các thuộc tính của mô-đun và các tên toàn cục được định nghĩa trong mô-đun thật ra rất đơn giản: chúng dùng chung một vùng tên! 9.1
- Thuộc tính có thể là chỉ đọc, hoặc đọc ghi. Trong trường hợp sau, phép gán vào thuộc tính có thể được thực hiện. Các thuộc tính mô-đun là đọc ghi: bạn có thể viết "modname.the_answer = 42". Các thuộc tính đọc ghi cũng có thể được xóa đi với câu lệnh del . Ví dụ, "del modname.the_answer" sẽ xóa thuộc tính the_answer từ đối tượng tên modname.
- Các vùng tên được tạo ra vào những lúc khác nhau và có thời gian sống khác nhau. Vùng tên chứa các tên có sẵn được tạo ra khi trình thông dịch Python bắt đầu, và không bao giờ bị xóa đi. Vùng tên toàn cục của một mô-đun được tạo ra khi định nghĩa mô-đun được đọc; bình thường, vùng tên mô-đun cũng tồn tại cho tới khi trình thông dịch thoát ra. Các câu lệnh được thực thi bởi lời gọi ở lớp cao nhất của trình thông dịch, vì đọc từ một kịch bản hoặc qua tương tác, được coi như một phần của mô-đun gọi là __main__, cho nên chúng cũng có vùng tên riêng. (Các tên có sẵn thật ra cũng tồn tại trong một mô-đun; được gọi là __builtin__.)
- Vùng tên nội bộ của một hàm được tạo ra khi hàm được gọi, và được xóa đi khi hàm trả về, hoặc nâng một biệt lệ không được xử lý trong hàm. Dĩ nhiên, các lời gọi hàm đệ quy có vùng tên riêng của chúng.
- Một phạm vi là một vùng văn bản của một chương trình Python mà một vùng tên có thể được truy cập trực tiếp. Có thể 'truy cập trực tiếp' có nghĩa là một tham chiếu không đầy đủ (unqualifed reference) tới một tên sẽ thử tìm tên đó trong vùng tên.
- Mặc dù phạm vi được xác định tĩnh, chúng được dùng một cách động. Vào bất kỳ một lúc nào, có ít nhất ba phạm vi lồng nhau mà vùng tên của chúng có thể được truy cập trực tiếp: phạm vi bên trong cùng, được tìm trước, chứa các tên nội bộ; các vùng tên của các hàm chứa nó, được tìm bắt đầu từ phạm vi chứa nó gần nhất (nearest enclosing scope); phạm vi giữa (middle scope), được tìm kế, chứa các tên toàn cục của mô-đun; và phạm vi ngoài cùng (được tìm sau cùng) là vùng tên chứa các tên có sẵn.
- Nếu một tên được khai báo là toàn cục, thì mọi tham chiếu hoặc phép gán sẽ đi thẳng vào phạm vi giữa chứa các tên toàn cục của mô-đun. Nếu không, mọi biến được tìm thấy ngoài phạm vi trong cùng chỉ có thể được đọc (nếu thử khi vào các biến đó sẽ tạo một biến cục bộ mới trong phạm vi trong vùng, và không ảnh hưởng tới biến cùng tên ở phạm vi ngoài).
- Thông thường, phạm vi nội bộ tham chiếu các tên nội bộ của hàm hiện tại (dựa vào văn bản). Bên ngoài hàm, phạm vi nội bộ tham chiếu cùng một vùng tên như phạm vi toàn cục: vùng tên của mô-đun. Các định nghĩa lớp đặt thêm một vùng tên khác trong phạm vi nội bộ.
- Điểm quan trọng cần ghi nhớ là phạm vi được xác định theo văn bản: phạm vi toàn cục của một hàm được định nghĩa trong một mô-đun là vùng tên của mô-đun đó, cho dù mô-đun đó được gọi từ đâu, hoặc được đặt tên lóng nào. Mặt khác, việc tìm tên được thực hiện lúc chạy -- tuy nhiên, định nghĩa ngôn ngữ đang phát triển theo hướng xác định tên vào 'lúc dịch', cho nên đừng dựa vào việc tìm tên động! (Thực ra thì các biến nội bộ đã được xác định tĩnh.)
- Một điểm ngộ của Python là các phép gán luôn gán vào phạm vi trong cùng. Phép gán không chép dữ liệu -- chú chỉ buộc các tên và các đối tượng. Xóa cũng vậy: câu lệnh "del x" bỏ ràng buộc x khỏi vùng tên được tham chiếu tới bởi phạm vi nội bộ. Thực tế là mọi tác vụ có thêm các tên mới đều dùng phạm vi nội bộ: điển hình là các câu lệnh nhập và các định nghĩa hàm buộc tên mô-đun hoặc tên hàm vào phạm vi nội bộ. (Lệnh global có thể được dùng để cho biết một biến cụ thể là ở phạm vi toàn cục.)

##### Giới thiệu về lớp
- Kiểu đơn giản nhất của việc định nghĩa lớp nhìn giống 
```py
class ClassName:
    <statement-1>
    .
    .
    .
    <statement-N>
```
- Định nghĩa lớp, cũng như định nghĩa hàm (câu lệnh def ) phải được thực thi trước khi chúng có hiệu lực. (Bạn có thể đặt một định nghĩa hàm trong một nhánh của lệnh if , hoặc trong một hàm.)
- Trong thực tế, các câu lệnh trong một định nghĩa lớp thường là định nghĩa hàm, nhưng các câu lệnh khác cũng được cho phép, và đôi khi rất hữu dụng. Các định nghĩa hàm trong một lớp thường có một dạng danh sách thông số lạ, vì phải tuân theo cách gọi phương thức.
- Khi gặp phải một định nghĩa lớp, một vùng tên mới được tạo ra, và được dùng như là phạm vi nội bộ -- do đó, mọi phép gán vào các biến nội bộ đi vào vùng tên này. Đặc biệt, các định nghĩa hàm buộc tên của hàm mới ở đây.
- Khi rời khỏi một định nghĩa lớp một cách bình thường, một đối tượng lớp được tạo ra. Đây cơ bản là một bộ gói (wrapper) của nội dung của vùng tên tạo ra bởi định nghĩa lớp. Phạm vi nội bộ ban đầu (trước khi vào định nghĩa lớp) được thiết lập lại, và đối tượng lớp được buộc vào đây qua tên lớp đã chỉ định ở định nghĩa lớp, (ClassName trong ví dụ này).

##### Đối tượng lớp
- Các đối tượng lớp hỗ trợ hai loại tác vụ: tham chiếu thuộc tính và tạo trường hợp (instantiation).
- Tham chiếu thuộc tính dùng cú pháp chuẩn được dùng cho mọi tham chiếu thuộc tính trong Python: obj.name. Các tên thuộc tính hợp lệ gồm mọi tên trong vùng tên của lớp khi đối tượng lớp được tạo ra. Do đó, nếu định nghĩa lớp có dạng như sau
```py
class MyClass:
    """A simple example class"""
    i = 12345

    def f(self):
        return 'hello world'
```
- MyClass.i và MyClass.f là những tham chiếu thuộc tính hợp lệ, trả về một số nguyên và một đối tượng hàm, theo thứ tự đó. Các thuộc tính lớp cũng có thể gán vào, cho nên bạn có thể thay đổi giá trị của MyClass.i bằng phép gán. __doc__ cũng là một thuộc tính hợp lệ, trả về chuỗi tài liệu của lớp: "A simple example class".
- Class instantiation (tạo trường hợp lớp) dùng cùng cách viết như gọi hàm. Hãy tưởng tượng một đối tượng lớp là một hàm không thông số trả về một trường hợp của lớp.
```py
x = MyClass()
```
tạo một trường hợp mới của lớp và gán đối tượng này vào biến nội bộ x.
- Tác vụ tạo trường hợp ('gọi' một đối tượng lớp) tạo một đối tượng rỗng. Nhiều lớp thích tạo đối tượng với các trường hợp được khởi tạo ở một trạng thái đầu nào đó. Do đó một lớp có thể định nghĩa một phương thức đặc biệt tên __init__(), như sau:
```py
def __init__(self):
    self.data = []
```
- Khi một lớp định nghĩa một phương thức __init__() , việc tạo trường hợp lớp sẽ tự động gọi __init__() ở trường hợp lớp mới vừa được tạo. Trong ví dụ nạy, một trường hợp đã khởi tạo mới có thể được tại ra từ
```py
x = MyClass()
```
- Dĩ nhiên, __init__() (phương thức) có thể nhận thêm thông số. Trong trường hợp đó, các thông số đưa vào phép tạo trường hợp lớp sẽ được truyền vào __init__(). Ví dụ
```py
>>> class Complex:
...     def __init__(self, realpart, imagpart):
...         self.r = realpart
...         self.i = imagpart
...
>>> x = Complex(3.0, -4.5)
>>> x.r, x.i
(3.0, -4.5)
```

##### Đối tượng Instance

- Chúng ta có thể làm được gì với những đối tượng trường hợp? Tác vụ duy nhất mà các đối tượng trường hợp hiểu được là tham chiếu thuộc tính. Có hai loại tên thuộc tính hợp lệ, thuộc tính dữ liệu và phương thức.
- data attributes (thuộc tính dữ liệu lớp) tương ứng với 'biến trường hợp' trong Smalltalk, và ''thành viên dữ liệu'' trong C++. Thuộc tính dữ liệu không cần được khai báo; như các biến nội bộ, chúng tự động tồn tại khi được gán vào. Ví dụ, nếu x là một trường hợp của MyClass được tạo ra ở trên, đoạn mã sau in ra giá trị 16, mà không chừa lại dấu vết
```py
x.counter = 1
while x.counter < 10:
    x.counter = x.counter * 2
print(x.counter)
del x.counter
```
- Loại tham chiếu thuộc tính trường hợp khác là một method (phương thức). Một phương thức là một hàm 'của' một đối tượng. (Trong Python, từ phương thức không chỉ riêng cho trường hợp lớp: các kiểu đối tượng khác cũng có thể có phương thức. Ví dụ, đối tượng danh sách có phương thức tên append, insert, remove, sort, v.v... Tuy nhiên, trong phần sau chúng ta sẽ chỉ dùng từ phương thức dể chỉ các phương thức của đối tượng trường hợp lớp, trừ khi được chỉ định khác đi.)
- Các tên phương thức hợp lệ của một đối tượng trường hợp phụ thuộc vào lớp của nó. Theo định nghĩa, mọi thuộc tính của một lớp mà là những đối tượng hàm định nghĩa các phương thức tương ứng của các trường hợp của lớp đó. Trong ví dụ của chúng ta, x.f là một tham chiếu phương thức hợp lệ, vì MyClass.f là một hàm, nhưng x.i không phải, bởi vì MyClass.i không phải. Nhưng x.f không phải là một thứ như MyClass.f -- nó là một method object (đối tượng phương thức), không phải là một đối tượng hàm.

##### Đối tượng phương thức
- Thông thường, một phương thức được gọi ngay sau khi nó bị buộc:
```py
x.f()
```
- Trong MyClass , nó sẽ trả về chuỗi 'hello world'. Tuy nhiên, cũng không nhất thiết phải gọi một phương thức ngay lập tức: x.f là một đối tượng phương thức, và có thể được cất đi và gọi vào một thời điểm khác. Ví dụ:
```py
xf = x.f
while True:
    print xf()
```
sẽ tiếp tục in "hello world" mãi mãi.
- Chuyện gì thật sự xảy ra khi một phương thức được gọi? Bạn có thể đã nhận ra rằng x.f() được gọi với không thông số, mặc dù định nghĩa hàm của f chỉ định một thông số. Chuyện gì xảy ra với thông số đó? Python chắc chắn nâng một biệt lệ khi một hàm cần một thông số được gọi suông -- cho dù thông số đó có được dùng hay không đi nữa...
- Thật ra, bạn cũng có thể đã đoán ra được câu trả lời: điểm đặc biệt của phương thức là đối tượng đó được truyền vào ở thông số đầu tiên của hàm. Trong ví dụ của chúng ta, lời gọi x.f() hoàn toàn tương đương với MyClass.f(x). Nói chung, gọi một hàm với một danh sách n thông số thì tương đương với việc gọi hàm tương ứng với một danh sách thông số được tạo ra bằng cách chèn đối tượng của phương thức vào trước thông số thứ nhất.
- (Hiểu đơn giản là obj.name(arg1, arg2) tương đương với Class.name(obj, arg1, arg2) trong đó obj là đối tượng trường hợp của lớp Class, name là một thuộc tính hợp lệ không phải dữ liệu, tức là đối tượng hàm của lớp đó.)

##### Một vài lời bình
- Thuộc tính dữ liệu sẽ che thuộc tính phương thức cùng tên; để tránh vô tình trùng lặp tên, mà có thể dẫn đến các lỗi rất khó tìm ra trong các chương trình lớn, bạn nên có một quy định đặt tên nào đó để giảm thiểu tỉ lệ trùng lặp. Các quy định khả thi có thể gồm viết hoa tên phương thức, đặt tiền tố vào các tên thuộc tính dữ liệu (ví dụ như dấu gạch dưới _), hoặc dùng động từ cho phương thức và danh từ cho các thuộc tính dữ liệu.
- Các thuộc tính dữ liệu có thể được tham chiếu tới bởi cả phương thức lẫn người dùng đối tượng đó. Nói một cách khác, lớp không thể được dùng để cài đặt các kiểu dữ liệu trừu tượng tuyệt đối. Trong thực tế, không có gì trong Python có thể ép việc che dấu dữ liệu -- tất cả đều dựa trên nguyên tắc. (Mặt khác, cài đặt Python, được viết bằng C, có thể dấu các chi tiết cài đặt và điểu khiển truy cập vào một đối tượng nếu cần; điều này có thể được dùng trong các bộ mở rộng Python viết bằng C.)
- Người dùng nên dùng các thuộc tính dữ liệu một cách cẩn thận -- người dùng có thể phá hỏng những bất biến (invariant) được giữ bởi các phương thức nếu cố ý sửa các thuộc tính dữ liệu. Lưu ý rằng người dùng có thể thêm các thuộc tính dữ liệu riêng của hộ vào đối tượng trường hợp mà không làm ảnh hưởng tính hợp lệ của các phương thức, miễn là không có trùng lặp tên -- xin nhắc lại, một quy tắc đặt tên có thể giảm bớt sự đau đầu ở đây.
- Không có cách ngắn gọn để tham chiếu tới thuộc tính dữ liệu (hoặc các phương thức khác!) từ trong phương thức. Điều này thật ra giúp chúng ta dễ đọc mã vì không có sự lẫn lộn giữa biến nội bộ và biến trường hợp.
- Thông số đầu tiên của phương thức thường được gọi là self. Đây cũng chỉ là một quy ước: tên self hoàn toàn không có ý nghĩa đặc biệt trong Python. (Tuy nhiên xin nhớ nếu bạn không theo quy ước thì mã của bạn sẽ có thể trở nên khó đọc đối với người khác, và có thể là trình duyệt lớp được viết dựa trên những quy ước như vậy.)
- Bất kỳ đối tượng hàm nào mà là thuộc tính của một lớp sẽ định nghĩa một phương thức cho các trường hợp của lớp đó. Không nhất thiết định nghĩa hàm phải nằm trong định nghĩa lớp trên văn bản: gán một đối tượng hàm vào một biến nội bộ trong lớp cũng được. Ví dụ:
```py
# Function defined outside the class
def f1(self, x, y):
    return min(x, x+y)

class C:
    f = f1
    def g(self):
        return 'hello world'
    h = g
```
- Bây giờ f, g và h đều là thuộc tính của lớp C mà tham chiếu tới các đối tượng hàm, và do đó chúng đều là phương thức của các trường hợp của C -- h hoàn toàn tương đương với g. Chú ý rằng kiểu viết này thường chỉ làm người đọc càng thêm khó hiểu mà thôi.
- Phương thức có thể gọi phương thức khác thông qua thuộc tính phương thức của thông số self :
```py
class Bag:
    def __init__(self):
        self.data = []
    def add(self, x):
        self.data.append(x)
    def addtwice(self, x):
        self.add(x)
        self.add(x)
```
- Phương thức có thể tham chiếu tới các tên toàn cục theo cùng một cách như các hàm thông thường. Phạm vi toàn cục của một phương thức là mô-đun chứa định nghĩa lớp. (Phạm vi toàn cục không bao giờ là lớp!) Trong khi bạn ít gặp việc sử dụng dữ liệu toàn cục trong một phương thức, có những cách dùng hoàn toàn chính đáng: ví dụ như hàm và mô-đun được nhập vào phạm vi toàn cục có thể được sử dụng bởi phương thức, cũng như hàm và lớp được định nghĩa trong đó. Thông thường, lớp chứa các phương thức này được định nghĩa ngay trong phạm vi toàn cục, và trong phần kế đây chúng ta sẽ thấy tại sao một phương thức muốn tham chiếu tới chính lớp của nó!

##### Kế thừa
Dĩ nhiên, một tính năng ngôn ngữ sẽ không đáng được gọi là 'lớp' nếu nó không hỗ trợ kế thừa. Cú pháp của một định nghĩa lớp con như sau:
```py
class DerivedClassName(BaseClassName):
    <statement-1>
    .
    .
    .
    <statement-N>
```
- Tên BaseClassName phải đã được định nghĩa trong một phạm vi chứa định nghĩa lớp con. Thay vì tên lớp cơ sở, các biểu thức khác cũng được cho phép. Điều này rất hữu ích, ví dụ, khi mà lớp cơ sở được định nghĩa trong một mô-đun khác:
```py
class DerivedClassName(modname.BaseClassName):
```
- Việc thực thi định nghĩa lớp con tiến hành như là lớp cơ sở. Khi một đối tượng lớp được tạo ra, lớp cơ sở sẽ được nhớ. Nó được dùng trong việc giải các tham chiếu thuộc tính: nếu một thuộc tính không được tìm thấy ở trong lớp, việc tìm kiếm sẽ tiếp tục ở lớp cơ sở. Luật này sẽ được lặp lại nếu lớp cơ sở kế thừa từ một lớp khác.
- Không có gì đặc biệt trong việc tạo trường hợp của các lớp con: DerivedClassName() tạo một trường hợp của lớp. Các tham chiếu hàm được giải như sau: thuộc tính lớp tương ứng sẽ được tìm, đi xuống chuỗi các lớp cơ sở nếu cần, và tham chiếu phương thức là hợp lệ nếu tìm thấy một đối tượng hàm.
- Lớp con có thể định nghĩa lại các phương thức của lớp cơ sở. Bởi vì phương thức không có quyền gì đặc biệt khi gọi một phương thức của cùng một đối tượng, một phương thức của lớp cơ sở gọi một phương thức khác được định nghĩa trong cùng lớp cơ sở có thể là đang gọi một phương thức do lớp con đã định nghĩa lại. (Người dùng C++ có thể hiểu là mọi phương thức của Python là virtual.)
- Một phương thức được định nghĩa lại trong lớp con có thể muốn mở rộng thay vì thay thế phương thức cùng tên của lớp cơ sở. Có một cách đơn giản để gọi phương thức của lớp sơ sở: chỉ việc gọi "BaseClassName.methodname(self, arguments)". Đôi khi điều này cũng có ích cho người dùng. (Lưu ý rằng đoạn mã chỉ hoạt động nếu lớp cơ sở được định nghĩa hoặc nhập trực tiếp vào phạm vi toàn cục.)
Python có hai hàm dựng sẵn hoạt động với thừa kế:
- Sử dụng isinstance()để kiểm tra kiểu của một thể hiện: sẽ chỉ khi có hoặc một số lớp bắt nguồn từ đó .isinstance(obj, int) sẽ là 'True'chỉ khi nếu obj.__class__ là `int` hoặc một số lớp có nguồn gốc từ `int`
- Sử dụng issubclass()để kiểm tra lớp thừa kế: là kể từ khi là một lớp con của . Tuy nhiên, là kể từ khi không phải là một lớp con của .issubclass(bool, int) là `True` từ khi `bool` là lớp con của `int`. Tuy nhiên , `issubclass(float, int)` là `False` từ khi `float` không phải là lớp con của `int`.

##### Đa kế thừa
- Python cũng hỗ trợ một dạng đa kế thừa hạn chế. Một định nghĩa lớp với nhiều lớp cơ sở có dạng sau:
```py
class DerivedClassName(Base1, Base2, Base3):
    <statement-1>
    .
    .
    .
    <statement-N>
```
- Luật duy nhất cần để giải thích ý nghĩa là luật giải các tham chiếu thuộc tính của lớp. Nó tuân theo luật tìm theo chiều sâu, và tìm trái qua phải. Do đó, nếu một thuộc tính không được tìm ra trong DerivedClassName, nó sẽ được tìm trong Base1, rồi (đệ quy) trong các lớp cơ sở của Base1, rồi chỉ khi nó không được tìm thấy, nó sẽ được tìm trong Base2, và cứ như vậy.
- (Đối với một số người tìm theo chiều rộng -- tìm Base2 và Base3 trước các lớp cơ sở của Base1 -- có vẻ tự nhiên hơn. Nhưng, điều này yêu cầu bạn biết một thuộc tính nào đó của Base1 được thật sự định nghĩa trong Base1 hay trong một trong các lớp cơ sở của nó trước khi bạn có thể biết được hậu quả của sự trùng lặp tên với một thuộc tính của Base2. Luật tìm theo chiều sâu không phân biệt giữa thuộc tính trực tiếp hay kế thừa của Base1.)
- Ai cũng biết rằng việc dùng đa kế thừa bừa bãi là một cơn ác mộng cho bảo trì, đặc biệt là Python dựa vào quy ước để tránh trùng lặp tên. Một vấn đề cơ bản với đa kế thừa là một lớp con của hai lớp mà có cùng một lớp cơ sở. Mặc dù dễ hiểu chuyện gì xảy ra trong vấn đề này (trường hợp sẽ có một bản chép duy nhất của 'các biến trường hợp' của các thuộc tính dữ liệu dùng bởi lớp cơ sở chung), nó không rõ cho lắm nếu các ý nghĩa này thật sự hữu ích.

##### Biến riêng
- Có một dạng hỗ trợ nho nhỏ nho các từ định danh riêng của lớp (class-private identifier). Các từ định danh có dạng __spam (ít nhất hai dấu gạch dưới ở đầu, nhiều nhất một dấu dạch dưới ở cuối) được thay thế văn bản (textually replace) bằng _classname__spam, trong đó classname là tên lớp hiện tại với các gạch dưới ở đầu cắt bỏ. Việc xáo trộn tên (mangling) được thực hiện mà không quan tâm tới vị trí cú pháp của định danh, cho nên nó có thể được dùng để định nghĩa các trường hợp, biến, phương thức, riêng của lớp, hoặc các biến toàn cục, và ngay cả các biến của trường hợp, riêng với lớp này trên những trường hợp của lớp khác . Nếu tên bị xáo trộn dài hơn 255 ký tự thì nó sẽ bị cắt đi. Bên ngoài lớp, hoặc khi tên lớp chỉ có ký tự gạch dưới, việc xáo trộn tên sẽ không xảy ra.
```py
class Mapping:
    def __init__(self, iterable):
        self.items_list = []
        self.__update(iterable)

    def update(self, iterable):
        for item in iterable:
            self.items_list.append(item)

    __update = update   # bản sao riêng của phương thức update () gốc

class MappingSubclass(Mapping):

    def update(self, keys, values):
        # cung cấp chữ ký mới để  pdate()
        # nhưng không phá vỡ __init__()
        for item in zip(keys, values):
            self.items_list.append(item)
```
- Xáo trộn tên nhằm cung cấp cho các lớp một cách định nghĩa dễ dàng các biến và phương thức 'riêng', mà không phải lo về các biến trường hợp được định nghĩa bởi lớp con, hoặc việc sử dụng biến trường hợp bởi mã bên ngoài lớp. Lưu ý rằng việc xáo trộn tên được thiết kế chủ yếu để tránh trùng lặp; người quyết tâm vẫn có thể truy cập hoặc thay đổi biến riêng. Và điều này cũng có thể có ích trong các trường hợp đặc biệt, như trong trình gỡ rối, và đó là một lý do tại sao lỗ hổng này vẫn chưa được vá.
- Lưu ý rằng mã truyền vào exec, eval() hoặc execfile() không nhận tên lớp của lớp gọi là tên lớp hiện tại; điều này cũng giống như tác dụng của câu lệnh global , tác dụng của nó cũng bị giới hạn ở mã được biên dịch cùng. Cùng giới hạn này cũng được áp dụng vào getattr(), setattr() và delattr(), khi tham chiếu __dict__ trực tiếp.

##### Những điều khác
- Đôi khi nó thật là hữu ích khi có một kiểu dữ liệu giống như Pascal 'record' hoặc C 'struct', gói gọn vài mẩu dữ liệu vào chung với nhau. Một định nghĩa lớp rỗng thực hiện được việc này:
```py
class Employee:
    pass

john = Employee() # Tạo bản ghi nhân viên trống

# Điền vào các trường của bản ghi
john.name = 'John Doe'
john.dept = 'computer lab'
john.salary = 1000
```
- Với mã Python cần một kiểu dữ liệu trừu tượng, ta có thể thay vào đó một lớp giả lập các phương thức của kiểu dữ liệu đó. Ví dụ, nếu bạn có một hàm định dạng một vài dữ liệu trong một đối tượng tập tin, bạn có thể định nghĩa một lớp với các phương thức read() và readline() lấy dữ liệu từ một chuỗi, và truyền vào nó một thông số.
- Các đối tượng phương trức trường hợp cũng có thuộc tính: m.im_self là một đối tượng trường hợp với phương thức m, và m.im_func là đối tượng hàm tương ứng với phương thức.

##### Bộ lặp (Iterators)
- Bây giờ có lẽ bạn đã lưu ý rằng hầu hết các đối tượng chứa (container object) có thể được lặp qua bằng câu lệnh for :
```py
for element in [1, 2, 3]:
    print element
for element in (1, 2, 3):
    print element
for key in {'one':1, 'two':2}:
    print key
for char in "123":
    print char
for line in open("myfile.txt"):
    print line
```
- Kiểu truy xuất này rõ ràng, xúc tích, và tiện lợi. Bộ lặp (iterator) được dùng khắp nơi và hợp nhất Python. Đằng sau màn nhung, câu lệnh for gọi iter() trên đối tượng chứa. Hàm này trả về một đối tượng bộ lặp có định nghĩa phương thức next() để truy xuất và các phần tử trong bộ chứa (container). Khi không còn phần tử nào, next() nâng biệt lệ StopIteration để yêu cầu vòng lặp for kết thúc. Ví dụ sau cho thấy cách hoạt động:
```py
>>> s = 'abc'
>>> it = iter(s)
>>> it
<iterator object at 0x00A1DB50>
>>> it.next()
'a'
>>> it.next()
'b'
>>> it.next()
'c'
>>> it.next()

Traceback (most recent call last):
  File "<stdin>", line 1, in ?
    it.next()
StopIteration
```
- Chúng ta đã hiểu giao thức bộ lặp, nên chúng ta có thể thêm cách thức bộ lặp (iterator behavior) vào lớp của chúng ta một cách dễ dàng. Định nghĩa một phương thức __iter__() trả về một đối tượng với một phương thức next() . Nếu lớp có định nghĩa next(), thì __iter__() chỉ cần trả về self:
```py
class Reverse:
    "Iterator for looping over a sequence backwards"
    def __init__(self, data):
        self.data = data
        self.index = len(data)
    def __iter__(self):
        return self
    def next(self):
        if self.index == 0:
            raise StopIteration
        self.index = self.index - 1
        return self.data[self.index]

>>> for char in Reverse('spam'):
...     print char
...
m
a
p
s
```

##### Bộ tạo (Generator)
- Bộ sinh (generator) là một công cụ đơn giản và mạnh mẽ để tạo các bộ lặp. Chúng được viết như những hàm thông thường nhưng dùng câu lệnh yield khi nào chúng muốn trả về dữ liệu. Mỗi lần next() được gọi, bộ sinh trở lại nơi nó đã thoát ra (nó nhớ mọi dữ liệu và câu lệnh đã được thực thi lần cuối). Một ví dụ cho thấy bộ sinh có thể được tạo ra rất dễ dàng:
```py
def reverse(data):
    for index in range(len(data)-1, -1, -1):
        yield data[index]
	
>>> for char in reverse('golf'):
...     print char
...
f
l
o
g
```
- Bất kỳ việc gì có thể được thực hiện với bộ sinh cũng có thể được thực hiện với các bộ lặp dựa trên lớp như đã bàn đến ở phần trước. Điều khiến bộ sinh nhỏ gọn là các phương thức __iter__() và next() được tự động tạo ra.
- Một tính năng chính khác là các biến nội bộ và trạng thái thực thi được tự động lưu giữa các lần gọi. Điều này làm cho hàm dễ viết hơn và rõ ràng hơn là cách sử dụng biến trường hợp như self.index và self.data.
- Thêm vào việc tự động tạo và lưu trạng thái chương trình, khi các bộ tạo kết thúc, chúng tự động nâng StopIteration. Cộng lại, các tính năng này làm cho việc tạo các bộ lặp không có gì khó hơn là viết một hàm bình thường

##### Biểu thức bộ tạo (Generator Expressions)
Một vài bộ sinh đơn giản có thể được viết một cách xúc tích như các biểu thức bằng cách dùng một cú pháp giống như gộp danh sách (list comprehension) nhưng với ngoặc tròn thay vì ngoặc vuông. Các biểu thức này được thiết kế cho những khi bộ sinh được sử dụng ngay lập tức bởi hàm chứa nó. Biểu thức bộ sinh gọn hơn nhưng ít khả chuyển hơn là các định nghĩa bộ sinh đầy đủ và thường chiếm ít bộ nhớ hơn là gộp danh sách tương đương.
```py
>>> sum(i*i for i in range(10))                 # tổng bình phuwong
285

>>> xvec = [10, 20, 30]
>>> yvec = [7, 5, 3]
>>> sum(x*y for x,y in zip(xvec, yvec))         # chấm sản phẩm
260

>>> from math import pi, sin
>>> sine_table = {x: sin(x*pi/180) for x in range(0, 91)}

>>> unique_words = set(word  for line in page  for word in line.split())

>>> valedictorian = max((student.gpa, student.name) for student in graduates)

>>> data = 'golf'
>>> list(data[i] for i in range(len(data)-1, -1, -1))
['f', 'l', 'o', 'g']
```

#### Giới thiệu sơ về bộ thư viện chuẩn

##### Giao tiếp với hệ thống
Các module os cung cấp hàng chục chức năng để tương tác với các hệ điều hành:
```py
>>>
>>> import os
>>> os.getcwd()      # Trả về thư mục làm việc hiện tại
'C:\\Python37'
>>> os.chdir('/server/accesslogs')   # Thay đổi thư mục làm việc hiện tại
>>> os.system('mkdir today')   # Chạy lệnh mkdir trong system shell
0
```
- Nhớ dùng kiểu lệnh "import os" thay vì `from os import *`. Điều này khiến cho os.open() không che hàm open() sẵn có của python. Hai hàm này hoạt động khác nhau rất nhiều.
- Các hàm sẵn có dir() và help() là các công cụ trợ giúp tương tác hữu ích khi làm việc với các mô-đun lớn như os:
```py
>>>
>>> import os
>>> dir(os)
<returns a list of all module functions>
>>> help(os)
<returns an extensive manual page created from the module's docstrings'>
```
- Đối với các tác vụ quản lý thư mục và tệp hàng ngày, shutilmô-đun cung cấp giao diện cấp cao hơn dễ sử dụng hơn:
```py
>>>
>>> import shutil
>>> shutil.copyfile('data.db', 'archive.db')
'archive.db'
>>> shutil.move('/build/executables', 'installdir')
'installdir'
```

##### Ký tự thay thế tập tin
- glob (mô-đun) cũng hỗ trợ việc tạo danh sách các tập tin từ việc tìm kiếm thư mục dùng ký tự thay thế (wildcard):
```py
>>> import glob
>>> glob.glob('*.py')
['primes.py', 'random.py', 'quote.py']
```

##### Thông số dòng lệnh
- Các kịch bản phổ dụng thường phải xử lý các tham số dòng lệnh. Các tham số này được lưu thành một danh sách ở mô-đun sys trong thuộc tính argv . Ví dụ, kết quả sau đây thu được từ việc chạy lệnh "python demo.py one two three" từ dòng lệnh:

>>> import sys
>>> print sys.argv
['demo.py', 'one', 'two', 'three']
getopt (mô-đun) xử lý sys.argv theo các nguyên tắc của hàm Unix getopt() . Nếu cần các thao tác linh hoạt và hữu hiệu hơn, chúng ta có thể dùng mô-đun optparse .

##### Chuyển hướng luồng ra và kết thúc chương trình
- sys (mô-đun) cũng có các thuộc tính cho stdin, stdout, và stderr. Cái cuối rất hữu dụng trong việc sinh ra các cảnh báo và thông báo lỗi và việc hiển thị chúng ngay cả khi stdout đã được định hướng lại:
```py
>>> sys.stderr.write('Warning, log file not found starting a new one\n')
Warning, log file not found starting a new one
```
- Cách thoát khỏi một kịch bản một cách trực tiếp nhất là dùng "sys.exit()".

##### Khớp mẫu chuỗi
- re (mô-đun) cung cấp các công cụ biểu thức chính quy dùng cho việc xử lý chuỗi ở mức cao. Biểu thức chính quy cung cấp các phương án súc tích và tối ưu cho các thao tác tìm kiếm và xử lý chuỗi phức tạp:
```py
>>> import re
>>> re.findall(r'\bf[a-z]*', 'which foot or hand fell fastest')
['foot', 'fell', 'fastest']
>>> re.sub(r'(\b[a-z]+) \1', r'\1', 'cat in the the hat')
'cat in the hat'
```
- Đối với các chức năng xử lý chuỗi cơ bản thì các phương thức của đối tượng chuỗi được ưa chuộng hơn bởi chúng dễ đọc và dễ gỡ rối hơn:
```py
>>> 'tea for too'.replace('too', 'two')
'tea for two'
```

##### Toán học
- math (mô-đun) cung cấp các hàm xử lý về toán dấu chấm động của thư viện C mức dưới:
```py
>>> import math
>>> math.cos(math.pi / 4.0)
0.70710678118654757
>>> math.log(1024, 2)
10.0
```

#####  random (mô-đun) hỗ trợ việc tạo ra các lựa chọn ngẫu nhiên:
```py
>>> import random
>>> random.choice(['apple', 'pear', 'banana'])
'apple'
>>> random.sample(xrange(100), 10)   # lấy mẫu mà không cần thay thế
[30, 83, 16, 4, 8, 81, 41, 50, 18, 33]
>>> random.random()    # random float
0.17970987693706186
>>> random.randrange(6)    # số nguyên ngẫu nhiên được chọn từ range(6)
4
```

##### Truy cập internet
- Python cung cấp một vài mô-đun khác nhau cho việc truy cập internet và xử lý các giao thức internet. Hai mô-đun đơn giản nhất là urllib2 dành cho việc thu thập dữ liệu từ các URL và smtplib dành cho việc gửi thư điện tử:
```py
>>> import urllib2
>>> for line in urllib2.urlopen('http://tycho.usno.navy.mil/cgi-bin/timer.pl'):
...     if 'EST' in line or 'EDT' in line:  # look for Eastern Time
...         print line
    
<BR>Nov. 25, 09:43:32 PM EST

>>> import smtplib
>>> server = smtplib.SMTP('localhost')
>>> server.sendmail('soothsayer@example.org', 'jcaesar@example.org',
"""To: jcaesar@example.org
From: soothsayer@example.org

Beware the Ides of March.
""")
>>> server.quit()
```

##### Ngày và giờ
- datetime (mô-đun) cung cấp các lớp dành cho viêc xử lý ngày tháng và thời gian từ đơn giản tới phức tạp. Mô-đun này có hỗ trợ các phép toán về ngày tháng, tuy nhiên nó chú trọng tới việc truy cập các thành phần ngày tháng một cách hiệu quả giúp cho việc định dạng chúng. Mô-đun này cũng hỗ trợ các đối tượng có thể phân biệt được các vùng thời gian.
```py
# dates được xây dựng và định dạng dễ dàng
>>> from datetime import date
>>> now = date.today()
>>> now
datetime.date(2003, 12, 2)
>>> now.strftime("%m-%d-%y. %d %b %Y is a %A on the %d day of %B.")
'12-02-03. 02 Dec 2003 is a Tuesday on the 02 day of December.'
# dates hỗ trợ lịch số
>>> birthday = date(1964, 7, 31)
>>> age = now - birthday
>>> age.days
14368
```

##### Nén dữ liệu
- Python cung cấp một số mô-đun hỗ trợ trực tiếp các định dạng nén và lưu trữ dữ liệu phổ biến như: zlib, gzip, bz2, zipfile, và tarfile.
```py
>>> import zlib
>>> s = 'witch which has which witches wrist watch'
>>> len(s)
41
>>> t = zlib.compress(s)
>>> len(t)
37
>>> zlib.decompress(t)
'witch which has which witches wrist watch'
>>> zlib.crc32(s)
226805979
```

##### Đo lường hiệu suất
- Một vài người dùng Python rất quan tâm đến việc tìm hiểu sự khác bệt về hiệu năng giữa các phương án khác nhau của cùng một vấn đề. Python cung cấp một công cụ đo đạc để thỏa mãn nhu cầu này.
- Ví dụ, chúng ta thường muốn sử dụng tính năng gói bộ và mở gói bộ thay cho phương pháp thông thường trong việc hoán đổi tham số. Mô-đun timeit cho thấy phương pháp này có hiệu năng nhỉnh hơn phương pháp thông thường:
```py
>>> from timeit import Timer
>>> Timer('t=a; a=b; b=t', 'a=1; b=2').timeit()
0.57535828626024577
>>> Timer('a,b = b,a', 'a=1; b=2').timeit()
0.54962537085770791
```
So sánh với độ phân biệt về thời gian và sự chính xác cao của timeit, các mô-đun profile và pstats cung cấp các công cụ cho việc xác định các đoạn mã tiêu tốn nhiều thời gian trong các khối mã lớn hơn.

##### Quản lý chất lượng
- Một phương pháp để phát triển phần mềm chất lượng cao là viết các hàm kiểm tra cho từng hàm khi viết các hàm và chạy các hàm kiểm tra một cách thường xuyên trong quá trình phát triển phần mềm. 
- doctest (mô-đun) cung cấp công cụ cho việc rà soát một mô-đun và thẩm định các hàm kiểm tra nhúng trong tài liệu của chương trình. Việc xây dựng các đoạn kiểm tra được thực hiện đơn giản bằng cách cắt và dán một đoạn gọi hàm thông thường kèm theo kết quả của hàm đó vào tài liệu chương trình. Việc này cải thiện đáng kể tài liệu chương trình bởi nó cung cấp cho người dùng một ví dụ về việc sử dụng hàm và cho phép mô-đun doctest kiểm tra tính đúng đắn của hàm này so với tài liệu:
```py
def average(values):
    """Tính trung bình số học của một danh sách các số.

    >>> print(average([20, 30, 70]))
    40.0
    """
    return sum(values) / len(values)

import doctest
doctest.testmod()   # tự động xác nhận các test nhúng
```
unittest (mô-đun) không dễ dùng như mô-đun doctest , nhưng nó hỗ trợ các hàm kiểm tra toàn diện hơn và lưu giữ chúng trong một tập tin riêng biệt:
```py
import unittest

class TestStatisticalFunctions(unittest.TestCase):

    def test_average(self):
        self.assertEqual(average([20, 30, 70]), 40.0)
        self.assertEqual(round(average([1, 5, 7]), 1), 4.3)
        with self.assertRaises(ZeroDivisionError):
            average([])
        with self.assertRaises(TypeError):
            average(20, 30, 70)

unittest.main()  # Gọi từ dòng lệnh gọi tất cả các kiểm tra
```

##### Kèm cả pin
Python được gắn với ý tưởng 'kèm pin'. Điều này được thể hiện bởi các tính năng mạnh mẽ và đa dạng của các gói lớn hơn của nó. Ví dụ như:
- xmlrpclib và SimpleXMLRPCServer (mô-đun) giúp cho việc cài đặt các lệnh gọi thủ tục từ xa (remote procedure call) trở nên dễ dàng hơn bao giờ hết. Khác với cái tên, chúng ta có thể sử dụng mô-đun này mà không cần các kiến thức cụ thể về xử lý XML.
email (gói) là một thư viện hỗ trợ việc quản lý các thư điện tử, bao gồm các văn bản MIME và các văn bản dựa trên RFC 2822 khác. Không trực tiếp gửi và nhận thông điệp như smtplib và poplib , gói email có một tập các công cụ dành cho việc xây dựng và mã hóa các cấu trúc thông điệp phức tạp (bao gồm cả tập tin đính kèm) và cài đặt mã hóa internet và giao thức tiêu đề.
xml.dom và xml.sax (gói) hỗ trợ rất tốt cho việc phân tích định dạng phổ biến này. Tương tự, mô-đun csv hỗ trợ việc đọc ghi trực tiếp trên một định dạng văn bản chung. Kết hợp lại, các mô-đun và gói kể trên đơn giản hóa rất nhiều việc trao đổi dữ liệu giữa các trình ứng dụng của python và các chương trình khác.
- Việc hỗ trợ quốc tế hóa được thực hiện bởi một vài mô-đun, bao gồm gettext, locale, và gói codecs .

##### Định dạng ra
repr (mô-đun)cung cấp một phiên bản repr() đã được tùy biến để hiển thị vắn tắt các đối tượng chứa (container) lớn hoặc lồng nhau nhiều mức:
```py
>>> import reprlib
>>> reprlib.repr(set('supercalifragilisticexpialidocious'))
"{'a', 'c', 'd', 'e', 'f', 'g', ...}"
```
pprint (mô-đun) hỗ trợ việc kiểm soát việc in các đối tượng sẵn có hoặc các đối tượng do người dùng định nghĩa một cách tinh vi hơn theo một phương thúc mà rình thông dịch có thể hiểu được. Khi kết quả hiển thị ngắn hơn một dòng thì "pretty printer" sẽ thêm các dấu xuống dòng và dấu thụt vào đầu dòng khiến cho cấu trúc dữ liệu được thể hiện rõ rệt hơn:
```py
>>> import pprint
>>> t = [[[['black', 'cyan'], 'white', ['green', 'red']], [['magenta',
...     'yellow'], 'blue']]]
...
>>> pprint.pprint(t, width=30)
[[[['black', 'cyan'],
   'white',
   ['green', 'red']],
  [['magenta', 'yellow'],
   'blue']]]
```
textwrap (mô-đun) định dạng đoạn văn bản sao cho vừa với độ rộng của màn hình:
```py
>>> import textwrap
>>> doc = """The wrap() method is just like fill() except that it returns
... a list of strings instead of one big string with newlines to separate
... the wrapped lines."""
...
>>> print(textwrap.fill(doc, width=40))
The wrap() method is just like fill()
except that it returns a list of strings
instead of one big string with newlines
to separate the wrapped lines.
```
locale (mô-đun) sử dụng một cơ sở dữ liệu các định dạng dữ liệu dựa trên đặc điểm của từng khu vực. Hàm định dạng của locale có thuộc tính tạo nhóm, cho phép định dạng trực tiếp các con số với các dấu phân chia nhóm:
```py
>>> import locale
>>> locale.setlocale(locale.LC_ALL, 'English_United States.1252')
'English_United States.1252'
>>> conv = locale.localeconv()          # get a mapping of conventions
>>> x = 1234567.8
>>> locale.format("%d", x, grouping=True)
'1,234,567'
>>> locale.format_string("%s%.*f", (conv['currency_symbol'],
...                      conv['frac_digits'], x), grouping=True)
'$1,234,567.80'
```

##### Tạo mẫu
- string (mô-đun) cung cấp một lớp Template với một cú pháp đơn giản, có thể dễ dàng thay đổi bởi người dùng. Điều này cho phép người dùng có thể tùy biến trình ứng dụng mà không phải thay đổi nó.
- Định dạng này sử dụng các tên biến giữ chỗ bắt đầu với "$" sau đó là một tên biến hợp lệ của Python (chữ cái, chữ số và dấu gạch dưới). Tên giữ chỗ được đặt trong ngoặc, điều này khiến nó có thể được nối tiếp bởi các ký tự khác mà không cần có khoảng trống ở giữa. Viết "$$" sẽ tạo ra một ký tự thoát đơn "$":
```py
>>> from string import Template
>>> t = Template('${village}folk send $$10 to $cause.')
>>> t.substitute(village='Nottingham', cause='the ditch fund')
'Nottinghamfolk send $10 to the ditch fund.'
```
substitute (phương thức) nâng KeyError nếu biến giữ chỗ không được cung cấp bởi một từ điển hay một tham số nhập từ bàn phím. Đối với các trình ứng dụng kiểu nhập liệu vào thư điện tử, dữ liệu nhập bởi người dùng có thể có thiếu sót, khi đó phương thức safe_substitute sẽ thích hợp hơn -- nó giữ nguyên các biến giữ chỗ nếu dữ liệu bị thiếu:
```py
>>> t = Template('Return the $item to $owner.')
>>> d = dict(item='unladen swallow')
>>> t.substitute(d)
Traceback (most recent call last):
  ...
KeyError: 'owner'
>>> t.safe_substitute(d)
'Return the unladen swallow to $owner.'
```
Các lớp con của Template có thể định nghĩa một phần tử phân chia tùy biến. Ví dụ một ứng dụng đổi tên ảnh hàng loạt của một trình duyệt ảnh có thể sử dụng dấu phần trăm để làm các biến giữ chỗ ngày tháng, số thứ tự ảnh, hay định dạng ảnh:
```py
>>> import time, os.path
>>> photofiles = ['img_1074.jpg', 'img_1076.jpg', 'img_1077.jpg']
>>> class BatchRename(Template):
...     delimiter = '%'
>>> fmt = raw_input('Enter rename style (%d-date %n-seqnum %f-format):  ')
Enter rename style (%d-date %n-seqnum %f-format):  Ashley_%n%f

>>> t = BatchRename(fmt)
>>> date = time.strftime('%d%b%y')
>>> for i, filename in enumerate(photofiles):
...     base, ext = os.path.splitext(filename)
...     newname = t.substitute(d=date, n=i, f=ext)
...     print '%s --> %s' % (filename, newname)

img_1074.jpg --> Ashley_0.jpg
img_1076.jpg --> Ashley_1.jpg
img_1077.jpg --> Ashley_2.jpg
```
Một ứng dụng khác của tạo mẫu là việc tách biệt lô-gíc chương trình ra khỏi các chi tiết về các định dạng đầu ra khác nhau. Điều này giúp cho việc thay thế các khuôn mẫu tùy biến cho các tập tin XML, các báo cáo bằng văn bản thông thường và các báo cáo bằng HTML.

##### Làm việc với bản ghi dữ liệu nhị phân
struct (mô-đun) cung cấp các hàm pack() và unpack() để dùng với các định dạng bản ghi nhị phân với chiều dài không cố định. Ví dụ sau đây minh họa phương pháp lặp qua các thông tin trong phần tiêu đề của một tập tin ZIP (ký hiệu "H" và "L" biểu diễn các số không dấu hai byte và bốn byte):
```py
import struct

with open('myfile.zip', 'rb') as f:
    data = f.read()

start = 0
for i in range(3):                      # show the first 3 file headers
    start += 14
    fields = struct.unpack('<IIIHH', data[start:start+16])
    crc32, comp_size, uncomp_size, filenamesize, extra_size = fields

    start += 16
    filename = data[start:start+filenamesize]
    start += filenamesize
    extra = data[start:start+extra_size]
    print(filename, hex(crc32), comp_size, uncomp_size)

    start += extra_size + comp_size     # skip to the next header
```

##### Đa luồng
Phân luồng là kỹ thuật phân tách các tác vụ khác nhau của một chương trình khi chúng không bị ràng buộc trật tự với nhau. Các luồng được sử dụng để tăng tính đáp ứng của các chương trình ứng dụng đòi hỏi việc nhập liệu từ người dùng diễn ra cùng lúc với các tiến trình nền khác. Một trường hợp tương tự là việc chạy các tác vụ vào ra song song với các tác vụ tính toán ở một luồng khác.
- Đoạn mã sau đây minh họa cách mô-đun threading chạy các tác vụ nền trong khi chương trình chính vẫn đang chạy:
```py
import threading, zipfile

class AsyncZip(threading.Thread):
    def __init__(self, infile, outfile):
        threading.Thread.__init__(self)
        self.infile = infile
        self.outfile = outfile

    def run(self):
        f = zipfile.ZipFile(self.outfile, 'w', zipfile.ZIP_DEFLATED)
        f.write(self.infile)
        f.close()
        print('Finished background zip of:', self.infile)

background = AsyncZip('mydata.txt', 'myarchive.zip')
background.start()
print('The main program continues to run in foreground.')

background.join()    # Wait for the background task to finish
print('Main program waited until background was done.')
```
- Khó khăn lớn nhất của các chương trình ứng dụng đa luồng là việc điều phối các luồng phải chia sẻ dữ liệu hay các tài nguyên khác. Về mặt này, mô-đun threading hỗ trợ một số hàm đồng bộ sơ cấp như các khóa (lock), các sự kiện (event), các biến điều kiện (condition) và các cờ hiệu (semaphore).
- Mặc dù các công cụ kể trên rất mạnh, nhung những lỗi thiết kế nhỏ có thể dẫn tới các vấn đề rất khó có thể tái tạo được. Do đó, phương pháp được ưa chuộng trong việc điều phối các tác vụ là tập hợp các truy cập tới một tài nguyên vào một luồng, sau đó sử dụng mô-đun Queue để nạp các yêu cầu từ các luồng khác tới luồng đó. Các trình ứng dụng sử dụng đối tượng Queue cho việc giao tiếp và điều phối giữa các luồng có ưu điểm là dễ thiết kể hơn, dễ đọc hơn và đáng tin cậy hơn.

##### Nhật ký
logging (mô-đun) cung cấp một hệ thống ghi nhật ký (logging) linh hoạt và có đầy đủ các tính năng. Trong trường hợp đơn giản nhất, một thông điệp nhật ký được gửi tới một tập tin hay tới sys.stderr:
```py
import logging
logging.debug('Debugging information')
logging.info('Informational message')
logging.warning('Warning:config file %s not found', 'server.conf')
logging.error('Error occurred')
logging.critical('Critical error -- shutting down')
```
Đoạn mã trên sẽ cho kết quả sau:
```py
WARNING:root:Warning:config file server.conf not found
ERROR:root:Error occurred
CRITICAL:root:Critical error -- shutting down
```
- Theo mặc định, các thông điệp chứa thông tin dành cho việc gỡ rối bị chặn lại và đầu ra được gửi tới kênh báo lỗi chuẩn. Các thông điệp này còn có thể được chuyển tiếp tới thư điện tử, gói tin, socket hay máy chủ HTTP. Các bộ lọc có thể chọn các cơ chế chuyển tiếp tùy theo mức độ ưu tiên của thông điệp: DEBUG, INFO, WARNING, ERROR, và CRITICAL.
- Hệ thống nhật ký có thể được cấu hình trực tiếp bên trong Python hoặc nạp từ một tập tin cấu hình mà người dùng có thể sửa đổi được, nhằm tùy biến việc ghi nhật ký mà không phải sửa đổi trình ứng dụng.

##### Tham chiếu yếu
- Python hỗ trợ việc quản lý bộ nhớ một cách tự động (bao gồm việc đếm tham chiếu với hầu hết các đối tượng và việc thu dọn rác). Vùng nhớ được giải phóng nhanh chóng sau khi tham chiếu cuối cùng đến nó kết thúc.
- Phương pháp này tỏ ra hiệu quả với hầu hết các trình ứng dụng sử dụng Python, tuy vậy đôi khi ta có nhu cầu theo dõi một đối tượng chừng nào chúng được sử dụng ở một chỗ khác. Tuy vậy việc theo dõi này lại tạo ra một tham chiếu đến đối tượng đó, khiến bản thân nó trở thành một tham chiếu vĩnh viễn. Mô-đun weakref cho phép theo dỗi một đối tượng mà không cần phải tạo một tham chiếu tới đối tượng đó. Khi đối tượng không còn cần dùng nữa, nó sẽ tự động bị loại ra khỏi bảng tham chiếu yếu và một hàm gọi ngược (callback) sẽ được gọi tới đối tượng weakref. Các ứng dụng phổ biến có chứa các đối tượng được lưu tạm và đòi hỏi chi phí khởi tạo cao:
```py
>>> import weakref, gc
>>> class A:
...     def __init__(self, value):
...         self.value = value
...     def __repr__(self):
...         return str(self.value)
...
>>> a = A(10)                   # create a reference
>>> d = weakref.WeakValueDictionary()
>>> d['primary'] = a            # does not create a reference
>>> d['primary']                # fetch the object if it is still alive
10
>>> del a                       # remove the one reference
>>> gc.collect()                # run garbage collection right away
0
>>> d['primary']                # entry was automatically removed
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
    d['primary']                # entry was automatically removed
  File "C:/python37/lib/weakref.py", line 46, in __getitem__
    o = self.data[key]()
KeyError: 'primary'
```

##### Công cụ làm việc với danh sách
- Kiểu danh sách sẵn có của Python có thể đáp ứng được nhu cầu về nhiều kiểu cấu trúc dữ liệu khác nhau. Tuy vậy chúng ta đôi khi cần tới các kiểu cấu trúc khác, tùy thuộc vào các mục tiêu cụ thể về hiệu năng.
- array (mô-đun) cung cấp đối tượng array() giống như một danh sách chứa các dữ liệu cùng kiểu và lưu giữ chúng gọn hơn. Ví dụ sau cho thấy một mảng các con số được lưu giữ dưới dạng các số không dấu hai byte (mã "H") thay vì mỗi phần tử chiếm 16 byte như trong một danh sách thông thường chứa các đối tượng số nguyên của Python:
```py
>>> from array import array
>>> a = array('H', [4000, 10, 700, 22222])
>>> sum(a)
26932
>>> a[1:3]
array('H', [10, 700])
```
collections (mô-đun) cung cấp đối tượng deque() giống như một danh sách nhưng có các thao tác thêm vào và lấy ra đầu bên trái nhanh hơn, nhưng việc tìm kiếm ở giữa thì lại chậm hơn. Các đối tượng này thích hợp cho việc cài đặt các hàng đợi và tìm kiếm cây theo chiều rộng:
```py
    >>> from collections import deque
    >>> d = deque(["task1", "task2", "task3"])
    >>> d.append("task4")
    >>> print "Handling", d.popleft()
    Handling task1

    unsearched = deque([starting_node])
    def breadth_first_search(unsearched):
        node = unsearched.popleft()
        for m in gen_moves(node):
            if is_goal(m):
                return m
            unsearched.append(m)
```
Ngoài các cấu trúc thay thế cho danh sách, thư viện chuẩn còn cung cấp các công cụ như mô-đun bisect chứa các hàm thao tác trên danh sách đã được sắp xếp:
```py
    >>> import bisect
    >>> scores = [(100, 'perl'), (200, 'tcl'), (400, 'lua'), (500, 'python')]
    >>> bisect.insort(scores, (300, 'ruby'))
    >>> scores
    [(100, 'perl'), (200, 'tcl'), (300, 'ruby'), (400, 'lua'), (500, 'python')]
```
heapq (mô-đun) cung cấp các hàm để cài đặt đống (heap) dựa trên các danh sách thông thường. Phần tử có giá trị thấp nhất luôn được giữ ở vị trí đầu tiên. Hàm này rất có ích trong các trình ứng dụng đòi hỏi việc truy cập tới phần tử nhỏ nhất mà không cần phải sắp xếp lại toàn bộ danh sách:
```py
    >>> from heapq import heapify, heappop, heappush
    >>> data = [1, 3, 5, 7, 9, 2, 4, 6, 8, 0]
    >>> heapify(data)                      # rearrange the list into heap order
    >>> heappush(data, -5)                 # add a new entry
    >>> [heappop(data) for i in range(3)]  # fetch the three smallest entries
    [-5, 0, 1]
```

##### Số học dấu chấm động thập phân
- decimal (mô-đun) cung cấp kiểu dữ liệu Decimal cho các phép toán dấu chấm động hệ thập phân. So với cấu trúc dấu chấm động nhị phân float sẵn có của Python, lớp này rất có ích trong các trình ứng dụng về tài chính và các công việc đòi hỏi việc biểu diễn chính xác các số thập phân, kiểm soát mức độ chính xác cũng như việc làm tròn các con số theo các quy định đề ra, theo dõi vị trí của dấu chấm động hay trong các trình ứng dụng mà người sử dụng mong muốn thu được kết quả khớp với kết quả tính toán bằng tay.
- Ví dụ như, việc tính 5% thuế trên một cuộc gọi điện giá 70 cent sẽ cho kết quả khác nhau nếu sử dụng các phép toán dấy chấm động hệ thập phân và nhị phân. Sự khác biệt trở nên rõ rệt nếu kết quả được làm tròn tới cent:
```py
>>> from decimal import *       
>>> Decimal('0.70') * Decimal('1.05')
Decimal("0.7350")
>>> .70 * 1.05
0.73499999999999999
```
- Decimal giữ một số không ở vị trí cuối cùng, nó tự động quy kết quả kiểu có bốn chữ số sau dấu chấm nếu các thừa số của phép nhân có hai chữ số sau dấu chấm. Decimal thực hiện các phép toán tương tự như cách chúng được tính bằng tay, nhờ đó tránh được các vấn đề gặp phải khi dấu chấm động hệ nhị phân không thể biểu diễn chính xác các giá trị thập phân.
- Việc biểu diễn chính xác các con số giúp cho lớp Decimal có thể thực hiện được các phép tính modulo và các so sánh bằng, điều mà dấu chấm động hệ nhị phân không làm được:
```py
>>> Decimal('1.00') % Decimal('.10')
Decimal("0.00")
>>> 1.00 % 0.10
0.09999999999999995
       
>>> sum([Decimal('0.1')]*10) == Decimal('1.0')
True
>>> sum([0.1]*10) == 1.0
False
```
decimal (mô-đun) cung cấp các phép toán với độ chính xác cao, tùy thuộc vào đòi hỏi của người dùng:
```py
>>> getcontext().prec = 36
>>> Decimal(1) / Decimal(7)
Decimal("0.142857142857142857142857142857142857")
```
