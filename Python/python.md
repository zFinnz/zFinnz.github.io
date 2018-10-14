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
