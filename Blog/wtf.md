Python là ngôn nhữ lập trình cấp cao và là ngôn ngữ thông dịch, cung cấp cho lập trình viên nhiều tính năng hấp dẫn.Nhưng đôi khi, kết quả của những đoạn mã Python lại không giống như người dùng thông thường nghĩ.
Nếu bạn là một lập trình viên Python có kinh nghiệm, bạn có thể quen thuộc với những ví dụ này còn nếu bạn là người học mới, bạn có thể tìm hiểu những lỗi sau để tránh mắc phải trong tương lai.

Tối ưu hóa Python

Chúng ta cùng xem qua các ví dụ sau:

```py
>>> a = '0xpan'
>>> id(a)
48541600
>>> b = '0x'+ 'pan'
>>> id(b)
48541600 
# 2 id trên là như nhau
```
```py
>>> a = "wtf"
>>> b = "wtf"
>>> a is b
True

>>> a = "wtf!"
>>> b = "wtf!"
>>> a is b
False
```
```py
>>> a = 256  
>>> b = 256  
>>> a is b   
True         
>>> a = 257  
>>> b = 257  
>>> a is b   
False               
```
```py
>>> a = tuple()
>>> b = tuple()  
>>> a is b   
True         
>>> a = tuple(2, 3)
>>> b = tuple(2, 3) 
>>> a is b   
False    
```
💡 Giải thích:
+ Hành vi như vậy là do tối ưu hóa CPython (gọi là chuỗi nội trú) cố gắng sử dụng các đối tượng không thay đổi hiện có trong một số trường hợp hơn là tạo đối tượng mới mỗi lần.
+ Python định nghĩa `NSMALLNEGINTS` là các số nguyên trong khoảng [`-5`, `0`] và `NSMALLPOSINTS` là các số nguyên trong khoảng [`0`, `256`]. Tuỳ vào phiên bản ngôn ngữ mà giá trị này có thể thay đổi đôi chút. Chúng ta có thể hiểu đơn giản rằng, Python định nghĩa một khoảng các số nguyên từ [`-5`, `256`].
+ Việc này có ý nghĩa là mỗi khi một chương trình Python khởi động, tất cả các giá trị trong khoảng đó sẽ được tạo ra và lưu sẵn trong bộ nhớ. Khi chúng ta tạo một biến với giá trị trong khoảng đó, sẽ không cần phải cấp phát bộ nhớ nữa, mà mọi việc chỉ đơn giản là lấy ra địa chỉ vùng nhớ chứa giá trị tương ứng là được.
Ví dụ: khi chúng ta gán `x = 100`, Python sẽ biết rằng, nó trong khoảng `[-5, 256]` nên tìm kiếm vùng nhớ chứa giá trị tương ứng. Khi chúng ta gán một biến nằm ngoài khoảng trên, một vùng nhớ mới được cấp phát chứa giá trị mới. Nếu sau đó chúng ta tiếp tục thay đổi giá trị biến này, một vùng nhớ khác sẽ được cấp phát, đồng thời trình dọn rác (`GC`) sẽ xoá đi vùng nhớ chứa giá trị cũ. Việc này tốn kha khá thời gian nên Python đã đơn giản hoá mọi việc với những giá trị số nguyên thường được sử dụng.
+ Sau khi được nội trú, nhiều biến có thể trỏ đến cùng một đối tượng chuỗi trong bộ nhớ (do đó tiết kiệm bộ nhớ).
+ Trong các đoạn mã trên, chuỗi nội trú được ngầm thực hiện. Một đối tượng có được nội tru hay không phụ thuộc vào các điều kiện sau:
+ `String` dưới `20` ký tự không có dấu cách.
+ Số nguyên trong khoảng [`-5`, `256`] như đã nói ở trên.
+ Các đối tương `immutable` trống ( ví dụ `tuple` trống).
+ Chuỗi được nội trú trong thời gian biên dịch (`wtf` sẽ được nội trú nhưng `''.join(['w', 't', 'f']` sẽ không được nội trú)
+ Các chuỗi không bao gồm kí tự `ASCII`, chữ số hoặc dấu gạch dưới, sẽ không được nội trú. Điều này giải thích tại sao `'wtf!'` không được nội trú do có kí tự `!`.


Vì sao 0.1 + 0.1 + 0.1 không bằng 0.3?

Chúng ta thử xem xét ví dụ sau:
```py
>>> 0.1 + 0.1 + 0.1 == 0.3
False
```
💡 Giải thích:
Điều này là do, các số thập phân được thực hiện trong phần cứng máy tính dưới dạng phân số nhị phân, vì máy tính chỉ hiểu các số nhị phân (`0` và `1`) nên hầu hết các phân số thập phân mà chúng ta biết, không thể được lưu trữ chính xác trong máy tính.
Ví dụ, ta không thể biểu diễn phân số `1/3` dưới dạng số thập phân, vì nó là một số thập phân vô hạn tuần hoàn, với các số sau dấu thập phân dài vô hạn, nên ta chỉ có thể ước tính nó.
Khi chuyển đổi phần thập phân `0.1`, sẽ dẫn đến phần nhị phân dài vô hạn của `0.000110011001100110011...` và máy tính chỉ lưu trữ một phần số hữu hạn sau dấu `.` của nó thôi. Do đó, số được lưu trữ chỉ xấp xỉ `0.1` chứ không bao giờ bằng `0.1`. Đó là lý do vì sao, phép cộng chúng ta nói đến ở trên không đưa ra kết quả như chúng ta mong đợi. Đó là giới hạn của phần cứng máy tính chứ không phải lỗi của Python.
Để khắc phục vấn đề này, chúng ta có thể sử dụng module `Decimal` trong Python. Trong khi số `float` chỉ lấy `16` số sau dấu thập phân thì module `Decimal` cho phép tùy chỉnh độ dài của số.
```py
>>> import decimal
>>> print(0.1)
0.1
>>> print(decimal.Decimal(0.1))
0.1000000000000000055511151231257827021181583404541015625
```

Hàm băm trong Python

```py
>>> dict_a = {}
>>> dict_a[10.0] = 'I'
>>> dict_a[10.5] = 'am'
>>> dict_a[10] = 'Finn'
>>> dict_a[10] 
'Finn'
>>> dict_a[10.5]
'am'
>>> dict_a[10.0]
'Finn'
# Ở đây kết quả mong đợi là 'I' nhưng kết quả nhận được là 'Finn'
```
💡 Giải thích:
Kiểu dữ liệu `dict` trong python kiểm tra tính bình đẳng và so sánh giá trị của hàm băm (`hash`) để xác định xem hai khóa có giống nhau không.
Các đối tượng `immutable` có giá trị giống nhau luôn có cùng giá trị hàm băm.
```py
>>> 5.0 == 5
True
>>> hash(5.0) == hash(5)
True
```
Chú ý: Các giá trị khác nhau cũng có thể có cùng hàm băm (gọi là va chạm hàm băm).
Khi câu lệnh `dict_a[10] = 'Finn'` được thực hiện thì giá trị `'I'` được ghi đè bởi `'Finn'` bởi vì Python nhận định `5`và `5.0` là cùng một khóa trong `a`.


Sai lệch thời gian đánh giá

```py
>>> a = [1, 2, 3, 4]
>>> b = (x for x in a if a.count(x) >0 )
>>> a = [4, 5, 6, 7]
>>> print(list(b))
[4]
```
```py
a = [1, 2, 3, 4]
b = (x for x in a)
a = [1, 2, 3, 4, 5]
print(list(b))
# Trường hợp thứ 2
[1, 2, 3, 4]
a = [1, 2, 3, 4]
b = (x for x in a)
a[:] = [1, 2, 3, 4, 5]
print(list(b))
[1, 2, 3, 4, 5]
```
💡 Giải thích:
+ Trong biểu thức `Generator`, mệnh đề `in` được đánh giá tại thời điểm khai báo, nhưng mệnh đề điều kiện (ở đây là `if`) được đánh giá khi chạy chương trình.
+ Vì vậy, trước thời gian chạy, mảng được gán cho danh sách `[1, 2, 3, 4]`, và trong số `1`, `2`, `3` và `4`, chỉ có đếm `4` lớn hơn `0`, vì vậy `generator` chỉ tạo ra `4`.
+ Sự khác nhau giữa kết quả của list `b` trong ví dụ thứ 2 là do cách biến `a` được gán giá trị.
Trong trường hợp đầu tiên, `a` được gán với đối tượng mới là `[1, 2, 3, 4, 5]` và mệnh đề `in` được tính tại thời điểm khai báo nên nó vẫn tham chiếu đến đối tượng cũ là `[1, 2, 3, 4]`
Trong trường hợp thứ 2, việc thay đổi giá trị bằng `slice` đã thay đổi đối tượng cũ là `[1, 2, 3, 4]` thành `[1, 2, 3, 4, 5]` nên `a` và `b` cùng tham chiếu đến một đối tượng (ở đây là `[1, 2, 3, 4, 5]`)

Cấu trúc mở rộng của chuỗi

```py
>>> a = float('inf')
>>> b = float('nan')
>>> c = float('-iNf')  
>>> d = float('nan')
>>> a
inf
>>> b
nan
>>> c
-inf
>>> a == -c #inf==inf
True
>>> None == None # None==None
True
>>> b == d #nhưng nan!=nan
False
>>> 50/a
0.0
>>> a/a
nan
>>> 23 + b
nan
```
💡 Giải thích:
`inf` và `nan` là hai chuỗi đặc biệt, được hiển thị rõ ràng với kiểu `float`, được sử dụng để đại điện cho số vô cùng và không phải số.

Câu lệnh return

```py
def func():
	try:
		return 'try'
	finally:
		return 'finally'
>>> func()
'finally'
```
💡 Giải thích:
+ Cho dù có một câu lệnh thoát `return`, `break` hoặc `continue` được thực thi ở câu lệnh `try` trong khối lệnh `try...finally` thì mệnh đề `finally` cũng sẽ được thực thi.
+ Giá trị trả về của hàm được xác định bởi câu lệnh `return` cuối cùng được thực thi. Vì mệnh đề `finally` luôn được thực thi nên câu lệnh `return` trong mệnh đề `finally` sẽ là câu lệnh `return` cuối cùng được thực thi.

Tham chiếu đối khi gây nhầm lẫn

```py
>>> row = [""]*3
>>> board = [row]*3
>>> row
['', '', '']
>>> board
[['', '', ''], ['', '', ''], ['', '', '']]
>>> board[0][0] = "X"
>>> board
[['X', '', ''], ['X', '', ''], ['X', '', '']]
# Đãng nhẽ ra kết quả phải là [['X', '', ''], ['', '', ''], ['', '', '']]
```
💡 Giải thích:
Khi khởi tạo biến `board` bằng phép nhân biến `row` thì ba phần tử `board[0]`, `board[0]`, `board[0]` cùng tham chiếu đến giá trị biến `row` là `['', '', '']`.
Chúng ta có thể tránh kết quả không mong muốn như trên bằng cách không sử dụng biến `row`
```py
>>> board = [['']*3 for _ in range(3)]
>>> board[0][0] = "X"
>>> board
[['X', '', ''], ['', '', ''], ['', '', '']]
```

Hàm output mắc lỗi

```py
list_a = []
list_b = []
for x in range(7):
	def func():
		return x
	list_a.append(func)
	list_b.append(func())
list_a_results = [func() for func in list_a]
>>> list_b
[0, 1, 2, 3, 4, 5, 6]
>>> list_a_results
[6, 6, 6, 6, 6, 6, 6]
# Khác với kết quả mà ta mong đợi list a = [0, 1, 2, 3, 4, 5, 6]
```
Hoặc
```py
>>> list_x = [lambda x: x**i for i in range(10)]
>>> [f(2) for f in list_x]
[512, 512, 512, 512, 512, 512, 512, 512, 512, 512]
```
💡 Giải thích:
+ Khi một hàm được xác định bên trong một vòng lặp thì việc đóng vòng lặp của hàm được lặp ràng buộc với biến lặp chứ không phải giá trị của nó. Vì vậy tất cả các hàm sẽ dử dụng giá trị mới nhất được gán cho biến để tính toán.
+ Vì vậy, để có được kết quả mong muỗn bạn có sử dụng biến vòng lặp như là một biến được gán cho hàm, lúc này biến sẽ được định nghĩa một lần nữa bên trong hàm.
```py
list_a = []
for x in range(7):
	def func():
		return x
	list_a.append(func)
list_a_results = [func() for func in list_a]
>>> list_a_results
[0, 1, 2, 3, 4, 5, 6]
```

is not ... và is (not...) là khác nhau

```py
>>> '0xpan' is not None
True
>>> '0xpan' is (not None) # Tương đương với '0xpan' is True
False
```
💡 Giải thích:
+ `is not` là một toán tử nhị phân, nó có cách hoạt động khác với `is` và `not`.
+ `is not` sẽ đánh giá biểu thứ là `False` nếu ở cả hai bên toán tử đều cùng trỏ đến một đối tượng và `True` nếu không, ngược với `is`.

Chú ý thứ tự ưu tiên của các toán tử

```py
>>> x = True
>>> y = False
>>> not x == y
True
>>> x == not y
  File "<input>", line 1
    x == not y
           ^
SyntaxError: invalid syntax
```
💡 Giải thích:
+ Thứ tự ưu tiên của các toán tử ảnh hưởng đến sự ưu tiên của thuật toán, và toán tử `==` được ưu tiên hơn toán tử `not` trong Python.
+ Vì vậy `not x == y` không tương đương với `not (x == y)` và kết quả `not (True == False)` sẽ là `True`.
+ Nhưng `x == not y` sẽ sinh ra `SyntaxError` bởi vì nó được coi là tương đương với `(x == not) y` không phải là `x == (not y)`.

Có gì sai với kiểu booleans

```py
mixed_list = [False, 1.0, "some_string", 3, True, [], False]
a = 0
b = 0
for item in mixed_list:
    if isinstance(item, int):
        a += 1
    elif isinstance(item, bool):
        b += 1
>>> a
4
>>> b
0
```
```py
>>> some_bool = True
>>> "wtf"*some_bool
'wtf'
>>> some_bool = False
>>> "wtf"*some_bool
''
```
💡 Giải thích:
+ `Booleans` là một phân lớp của `int`
```py
>>> isinstance(True, int)
True
>>> isinstance(False, int)
True
```
+ Giá trị kiểu `int` của `True` là `1` và `False` là `0`.
```py
>>> True == 1 == 1.0 and False == 0 == 0.0
True
```
Bạn có thể tham khảo thêm tại [StackOverflow](https://stackoverflow.com/questions/8169001/why-is-bool-a-subclass-of-int/8169049#8169049) về vấn đề này.

Biến bị xóa từ phạm vi bên ngoài

```py
e = 7
try:
    raise Exception()
except Exception as e:
    pass
>>> print(e)
NameError: name 'e' is not defined
```
💡 Giải thích:
+ Nguồn: https://docs.python.org/3/reference/compound_stmts.html#except
+ Khi một `exception` được khai bảo sử dụng `as` , nó sẽ được xóa vào cuối `except`. Như ví dụ sau:
```py
except E as N:
    foo
#sẽ tương đương với
except E as N:
    try:
        foo
    finally:
        del N
```
+ Điều này có nghĩa ngoại lệ phải được gán cho một tên khác để có thể tham chiếu nó sau mệnh đề `except`. Ngoại lệ được xóa vì với truy vết gắn liền với chúng, chúng tạo thành một chu kỳ tham chiếu với khung ngăn xếp, giữ tất cả biến địa phương trong khung đó còn sống cho đến khi tập hợp rác tiếp theo xảy ra.
+ Các mệnh đề không có phạm vi trong python nên tất cả mọi thứ trong ví dụ trên đều có cùng phạm vi, vì vậy biến `e` đã bị xóa do thực hiện mệnh đề `except`. Điều tương tự sẽ không xảy ra với các hàm có phạm vi bên trong riêng biệt:
```py
def f(x):
    del(x)
    print(x)
x = 5
y = [5, 4, 3]
>>>f(x)
UnboundLocalError: local variable 'x' referenced before assignment
>>>f(y)
UnboundLocalError: local variable 'x' referenced before assignment
>>> x
5
>>> y
[5, 4, 3]
```
Trương hợp trả về None

```py
some_list = [1, 2, 3]
some_dict = {
  "key_1": 1,
  "key_2": 2,
  "key_3": 3
}

some_list = some_list.append(4)
some_dict = some_dict.update({"key_4": 4})
>>> print(some_list)
None
>>> print(some_dict)
None
```
💡 Giải thích:
Hầu hết các phương pháp sửa đổi các mục của các đối tượng `tuần tự/ánh xạ` như `list.append`, `dict.update`, `list.sort`,vv. đều thực hiện sửa đổi các phương thức tại chỗ và trả về None. Lý do đằng sau việc này là để cải thiện năng suất bằng cách tránh tạo ra một bản sao của đối tượng nếu thao tác có thể thực hiện tại chỗ (Thảm khảo ở [đây](https://docs.python.org/3/faq/design.html#why-doesn-t-list-sort-return-the-sorted-list))

Bạn có thể đoán được điều này không?

```py
a, b = a[b] = {}, 5
>>> a
{5: ({...}, 5)}
```

💡 Giải thích:
Đạon trên tương đương với:
```py
a, b = {}, 5
a[b] = a, b
```
Ghi lại từ [Python language reference](https://docs.python.org/3/reference/simple_stmts.html#assignment-statements), một câu tuyên bố có dạng:
```py
(target_list "=")+ (expression_list | yield_expression)
```
và
> Một câu lệnh gán đánh giá danh sách biểu thức (hãy nhớ rằng đây có thể là một biểu thức đơn hoặc một danh sách được phân cách bằng dấu phẩy, sau đó sẽ cho ra một `tuple`) và chỉ định đối tượng kết quả duy nhất cho mỗi danh sách mục tiêu, từ trái sang phải.
+ Dấu `+` trong `(target_list "=")+` có nghĩa là có thể một hoặc nhiều danh sách mục tiêu. Trong trường hợp này danh sách đích là `a`,`b` và `a[b]` (lưu ý rằng danh sách biểu thức là chính xác, trong trường hợp của chúng ta là `{}`, `5`).
+ Sau khi đánh giá biểu thức, giá trị của nó được gắn vào danh sách mục tiêu từ trái qua phải. Vì vậy, trong trường hợp của chúng ta, đầu tiên là `{}`, `5` được gán vào `a`, `b` và bây giờ chúng ta có `a = {}` và `b = 5`. `a` được gán cho `{}` một đối tượng có thể thay đổi.
+ Danh sách mục tiêu thứ hai là `a[b]`.
+ Bây giờ, chúng ta thiết lập `5` trong `dict` và `tuple` `({}, 5)` tạo ra một tham chiếu xoay vòng ( bở vì `{...}` cũng tham chiếu đến một đối tượng mà `a` đã tham chiếu). một ví dụ khác của tham chiếu xoay vòng là:
```py
>>> some_list = some_list[0] = [0]
>>> some_list
[[...]]
>>> some_list[0]
[[...]]
>>> some_list is some_list[0]
True
>>> some_list[0][0][0][0][0][0] == some_list
True
```
Tượng tự trường hợp trong ví dụ trên (`a[b][0]` cùng là một đối tượng như `a`)
Và tham chiếu xoay vòng được chứng minh bởi một thực tế là `a[b][0]` cũng tương tự với đối tượng `a`
```py
>>> a[b][0] is a
True
```

Cẩn thận với các kí tự không thuộc ASCII

```py
>>> value = 11
>>> valuе = 32
>>> value
11
```
Bạn nên copy lại ví dụ từ đây, không nên đánh bằng bàn phím nếu không bạn sẽ không thấy được sự khác biệt.
💡 Giải thích:
Một số ký tự không phải `ascii` trông giống hệt các chữ cái trong bảng chữ cái `ascii` nhưng được trình biên dịch sẽ xem chúng là khác nhau.
Để rõ hơn chúng ta sẽ xem mã thập phân của 2 kí tự giống nhau:
```py
>>> ord('е') # đây không phải là kí tự `ascii` và không thể nhập từ bàn phím
1077
>>> ord('e') # kí tự 'e'
101
>>> 'е' == 'e'
False
```

Chỉnh sửa một từ điển trong khi Iterating

```py
x = {0: None}

for i in x:
    del x[i]
    x[i+1] = None
    print(i)
0
1
2
3
4
```
💡 Giải thích:
+ Việc lặp lại một từ điển mà bạn đang chỉnh sửa trong cùng lúc không được hỗ trợ.
Nó chạy 5 lần bởi vì đó là điểm mà từ điển thay đổi kích cỡ để giữ nhiều khóa hơn (chúng ta đã có 5 mục xóa, vì vậy cần thay đổi kích thước). Đây là một chi tiết quan trọng.
Khóa được xử lý như thế nào và khi thay đổi kích cỡ xảy ra có thể khác nhau với các phiên bản Python khác nhau.
Để biết thêm chi tiết, bạn có thể tham khảo bài viết [StackOverflow thread](https://stackoverflow.com/questions/44763802/modifying-a-dictionary-while-iterating-over-it-bug-in-python-dict) sẽ giải quyết một ví dụ tương tự.

Xóa toán tử cứng đầu

```py
class SomeClass:
    def __del__(self):
        print("Đã xóa!")
>>> x = SomeClass()
>>> y = x
>>> del x # Điều này đáng nhẽ phải in ra "Đã xóa!"
>>> y # kiểm tra nếu y tồn tại
<__main__.SomeClass instance at 0x7f98a1a67fc8>
>>> del y
>>> globals() # Ở đây, nó mới thực sự được xóa
Đã xóa!
```
💡 Giải thích:
+ `del x` không gọi trực tiếp `x.__del__()`.
+ Bất cứ khi nào `del x` được gọi, Python đều giảm số tham chiếu cho `x` một đơn vị và `x.__del__()` khi số tham chiếu của `x` đạt đến không.
+ `y.__del__()` cũng không được gọi vì câu lệnh trước ( `>>> y`) trong trình thông dịch tương tác đã tạo một tham chiếu khác cho cùng một đối tượng, do đó ngăn không cho số tham chiếu đạt đến 0 khi `del y` gặp phải.
+ Việc gọi `globals()` khiến tham chiếu hiện tại bị hủy và do đó chúng ta có thể thấy "Đã xóa!" được in ở cuối cùng.

Xóa một phần tử trong list trong khi iterating

```py
a = [1, 2, 3, 4]
b = [1, 2, 3, 4]
c = [1, 2, 3, 4]
d = [1, 2, 3, 4]

for idx, item in enumerate(a):
    del item
for idx, item in enumerate(b):
    b.remove(item)
for idx, item in enumerate(c[:]):
    c.remove(item)
for idx, item in enumerate(d):
    d.pop(idx)
>>> a
[1, 2, 3, 4]
>>> b
[2, 4]
>>> c
[]
>>> d
[2, 4]
```
Bạn có thể đoán tại sao đầu ra lại là `[2, 4]` ?
💡  Giải thích:
+ Không bao giờ là một ý tưởng tốt để thay đổi đối tượng bạn đang `interating`. Cách chính xác hơn để làm như vậy là `interating` trên một bản sao của đối tượng ví dụ như `list_3[:]`.
```py
>> > some_list = [ 1 , 2 , 3 , 4 ]
 >> >  id (some_list)
 139798789457608 
>> >  id (some_list [:]) # Chú ý rằng python tạo ra đối tượng mới cho danh sách slice. 
139798779601192
```
Sự khác nhau giữa `del`, `remove` và `pop`:
`del var_name` chỉ loại bỏ tham chiếu của `var_name` từ không gian lưu trữ cục bộ hoặc toàn cục (Đó là lý do tại sao list `a` không bị ảnh hưởng).
`remove` loại bỏ giá trị tìm thấy đầu tiên, không phải là một chỉ mục cụ thể, sẽ tạo ra `ValueError` nếu không tìm thấy giá trị.
`pop` loại bỏ phần tử tại một chỉ mục cụ thể và trả về nó, tạo ra `IndexError` nếu chỉ mục không hợp lệ được chỉ định.

Vậy tại sao đầu ra là `[2, 4]`?

Việc lặp lại danh sách được thực hiện theo chỉ mục và khi chúng ta xóa `1` khỏi list `a` hoặc list `d`, thì nội dung của các danh sách còn lại có `[2, 3, 4]`. Các phần tử còn lại được chuyển xuống, tức `2` bây giờ sẽ có số chỉ mục là `0` và `3` là `1`. Vì lần lặp tiếp theo sẽ xem xét chỉ số `1` (là `3`), mục `2`  bị bỏ qua hoàn toàn. Một điều tương tự sẽ xảy ra với mọi yếu tố thay thế trong chuỗi danh sách.
Tham khảo chủ đề [StackOverflow](https://stackoverflow.com/questions/45946228/what-happens-when-you-try-to-delete-a-list-element-while-iterating-over-it) này giải thích ví dụ
Xem thêm chủ đề [StackOverflow](https://stackoverflow.com/questions/45877614/how-to-change-all-the-dictionary-keys-in-a-for-loop-with-d-items) đẹp này để biết ví dụ tương tự liên quan đến từ điển trong Python.

Hãy coi chừng các đối số mặc định có thể thay đổi!

```py
def some_func(default_arg=[]):
    default_arg.append("0xpan")
    return default_arg

>>> some_func()
['0xpan']
>>> some_func()
['0xpan', '0xpan']
>>> some_func([])
['0xpan']
>>> some_func()
['0xpan', '0xpan', '0xpan']
```
💡  Giải thích:
+ Các đối số `mutable` mặc định của hàm trong Python không thực sự được tạo ra ở mỗi lần gọi hàm.
Thay vào đó, giá trị của hàm trả về gần nhất được gán ngay cho chúng làm giá trị mặc định. Khi chúng ta truyền đối số `[]` một cách rõ ràng thì giá trị mặc định của `default_arg` không được sử dụng và hàm trả về kết quả như mong đợi.
+ Một cách phổ biến để tránh lỗi trên đó là gán giá trị của đối số bằng `None` như là một giá trị mặc định.

Cùng toán hạng, nhưng là hai chuyện khác nhau!

```py
>>> a = [1, 2, 3, 4]
>>> b = a
>>> a = a + [5, 6, 7, 8]
>>> a
[1, 2, 3, 4, 5, 6, 7, 8]
>>> b
[1, 2, 3, 4]
# Trường hợp 2 với phép +=
>>> a = [1, 2, 3, 4]
>>> b = a
>>> a += [5, 6, 7, 8]
>>> a
[1, 2, 3, 4, 5, 6, 7, 8]
>>> b
[1, 2, 3, 4, 5, 6, 7, 8]
```
💡 Gỉai thích:
+ `a += b` không phải luôn luôn giống `a = a + b`. Các lớp có thể triển khai các toán tử `op=` khác nhau, và `list` sẽ làm nó.
+Biểu thức `a = a + [5,6,7,8]` tạo ra một danh sách mới và đặt tham chiếu `a` đến danh sách mới đó, và `b` không thay đổi.
+Biểu thức `a + =[5,6,7,8]` thực sự được ánh xạ đến hàm `extend` hoạt động trên danh sách sao cho `a` và `b` vẫn trỏ đến cùng một danh sách được bổ sung tại chỗ.

Hãy cẩn thận với toán tử logic

```py
>>> (False == False) in [False] # makes sense
False
>>> False == (False in [False]) # makes sense
False
>>> False == False in [False] # now what?
True

>>> True is False == False
False
>>> False is False is False
True

>>> 1 > 0 < 1
True
>>> (1 > 0) < 1
False
>>> 1 > (0 < 1)
False
```
Nếu như theo quy tắc thứ tự ưu tiên của toán tử thì kết quả sẽ khác với trên.
💡 Giải thích:
Theo https://docs.python.org/3/reference/expressions.html#not-in

`False is False is False` tương đương với `(False is False) and (False is False)`.
`True is False == False` tương đương với `True is False and False == False` và phần đầu câu lệnh (`True is False`) đánh giá là `False`, và kết quả là `False`.
`1 > 0 < 1` tương đương với `1 > 0 and 0 < 1` và kết quả là `True`.
Biểu thức `(1 > 0) < 1` tương đương với `True < 1`.
```py
>>> int(True)
1
>>> True + 1 #không liên quan đến ví dụ này,just fun!
2
```

Tên quyết định bỏ qua phạm vi biến

```py
x = 5
class SomeClass:
    x = 17
    y = [x for i in range(10)]
>>> SomeClass.y[0]
5
```
💡 Giải thích:
+ Các phạm vi lồng được định nghĩa bên trong lớp bỏ qua các ràng buộc tên ở cấp lớp.
+ Các biểu thức `generator` có một phạm vi riêng.

Lỗi khi unpack dữ liệu

```py
>>> x, y = (0, 1) if True else None, None
>>> x, y  # kết quả mong đợi (0, 1)
((0, 1), None)
```

Python, bạn có thể làm cho tôi bay? Fun!

```py
import antigravity
```
Òa kết quả là: .....(bí mật) :))
Đây là một trong vài điều thú vị ít được biết đến về Python mà hầu hết những người mới bắt đầu như tôi không biết.
💡 Giải thích:
+ module `antigravity` là một trong số ít `easter eggs` được phát triển bởi các nhà phát triển Python.
+ `import antigravity` mở ra một trình duyệt web trỏ đến [truyện tranh `XKCD` cổ điển](https://xkcd.com/353/) về Python.
+ Còn có một điều thú vị nữa đó là. Có một `easter eggs` khác bên trong `easter eggs`. Nếu bạn nhìn vào [đọan mã](https://github.com/python/cpython/blob/master/Lib/antigravity.py#L7-L17), có một hàm được xác định là có ý định thực hiện [XKCD's geohashing algorithm](https://xkcd.com/426/).

Không có cơ hội trong tương lai ư?

```py
from __future__ import braces
  File "some_file.py", line 1
    from __future__ import braces
SyntaxError: not a chance # Không có cơ hội
```
💡 Giải thích:
+ Module `__future__` thường được sử dụng để cung cấp các tính năng từ các phiên bản tương lai của Python.
+ thường với những tên module không tồn tại thì trình thông dịch sẽ đưa ra thông báo `SyntaxError: future feature 'x' is not defined` nhưng ở đây với `braces` thì sẽ là `not a chance` để hiểu được điều này thì chỉ có mấy ông phát triển Python :)).

Ngay cả Python cũng hiểu rằng tình yêu rất phức tạp.
```
import this
The Zen of Python, by Tim Peters

Beautiful is better than ugly.
Explicit is better than implicit.
Simple is better than complex.
Complex is better than complicated.
Flat is better than nested.
Sparse is better than dense.
Readability counts.
Special cases aren't special enough to break the rules.
Although practicality beats purity.
Errors should never pass silently.
Unless explicitly silenced.
In the face of ambiguity, refuse the temptation to guess.
There should be one-- and preferably only one --obvious way to do it.
Although that way may not be obvious at first unless you're Dutch.
Now is better than never.
Although never is often better than *right* now.
If the implementation is hard to explain, it's a bad idea.
If the implementation is easy to explain, it may be a good idea.
Namespaces are one honking great idea -- let's do more of those!
```
Đây là chân lý của Python!
```py
>>> love = this
>>> this is love
True
>>> love is True
False
>>> love is False
False
>>> love is not True or False
True
>>> love is not True or False; love is love  # Tình yêu thật là phức tạp
True
```
💡 Giải thích:
+ module `this` trong Python là một `easter egg` cho `The Zen Of Python` ([PEP 20](https://www.python.org/dev/peps/pep-0020/)).
Và nếu bạn nghĩ rằng điều đó đã đủ thú vị, hãy xem việc triển khai [this.txt](https://hg.python.org/cpython/file/c3896275c0f6/Lib/this.py). Thật thú vị, mã cho Zen vi phạm chính nó (và đó có lẽ là nơi duy nhất xảy ra điều này).
+ Về tuyên bố `love is not True or False; love is love`, trông thật mỉa mai nhưng nó là lời tự giải thích.

Định nghĩa tên trong class

```py
class Yo(object):
    def __init__(self):
        self.__honey = True
        self.bitch = True
>>> Yo().bitch
True
>>> Yo().__honey
AttributeError: 'Yo' object has no attribute '__honey'
>>> Yo()._Yo__honey
True
```
Tại sao `Yo()._Yo__honey` hoạt động? 
💡 Giải thích:
+ [Name Mangling](https://en.wikipedia.org/wiki/Name_mangling) được sử dụng để tránh việc va chạm giữa các không gian tên khác nhau.
+ Trong Python, trình thông dịch định nghĩa các tên thành viên lớp với `__` (hai dấu gạch dưới) và không kết thúc bằng nhiều hơn 1 dấu gạch dưới, bằng cách thêm `_NameOfTheClass` ở phía trước.
+ Vì vậy, để truy cập thuộc tính `__honey` , chúng ta phải thêm `_Yo` vào phía trước nhằm ngăn ngừa xung đột với cùng một thuộc tính `name` được định nghĩa trong bất kì lớp nào khác.

Toán tử += có nhanh hơn
```py
# sử dụng "+", ba chuỗi:
>>> timeit.timeit("s1 = s1 + s2 + s3", setup="s1 = ' ' * 100000; s2 = ' ' * 100000; s3 = ' ' * 100000", number=100)
0.25748300552368164
# sử dụng "+=", ba chuỗi:
>>> timeit.timeit("s1 += s2 + s3", setup="s1 = ' ' * 100000; s2 = ' ' * 100000; s3 = ' ' * 100000", number=100)
0.012188911437988281
```
💡 Giải thích:
`+=` nhanh hơn `+` để ghép nối nhiều hơn hai chuỗi bởi vì chuỗi đầu tiên (ví dụ, `s1` cho `s1 += s2 + s3`) không bị phá hủy trong khi tính toán chuỗi hoàn chỉnh.

Một số điều thú vị nhỏ

`[] = ()` là một câu lệnh đúng về mặt ngữ nghĩa (`unpack` một `tuple` rỗng thành một `list` rỗng)
`'a'[0][0][0][0][0]` cũng là một câu lệnh đúng về mặt ngữ nghĩa vì các chuỗi cũng là [ sequences](https://docs.python.org/3/glossary.html#term-sequence)(`iterables` hỗ trợ truy cập phần tử bằng các chỉ số nguyên) trong Python.
`3 --0-- 5 == 8` và `--5 == 5` là cả hai câu lệnh chính xác về ngữ nghĩa và được đánh giá `True`.
`++a`và `--a` cả hai câu lệnh Python hợp lệ nhưng không hành xử giống như so với các câu lệnh tương tự trong các ngôn ngữ như `C`, `C ++` hoặc `Java`.
```py
>>> a = 5
>>> a
5
>>> ++a # Trong python câu lệnh này tương đương với +(+a)
5
>>> --a # Trong python câu lệnh này tương đương với -(-a)
5
```
Python sử dụng `2 byte` để lưu trữ biến cục bộ trong các hàm. Về lý thuyết, điều này có nghĩa là chỉ `65536` biến có thể được xác định trong một hàm. Tuy nhiên, python có một giải pháp tiện dụng được tích hợp sẵn có thể được sử dụng để lưu trữ hơn `2 ^ 16` tên biến. Đoạn mã sau minh họa những gì xảy ra trong ngăn xếp khi có hơn `65536` biến cục bộ được xác định (Cảnh báo: Mã này in khoảng 2 ^ 18 dòng văn bản, vì vậy hãy chuẩn bị tinh thần trước!):
```py
import dis
exec("""
def f():
    """ + """
    """.join(["X"+str(x)+"=" + str(x) for x in range(65539)]))

f()

print(dis.dis(f))
```


Nguồn bài viết : https://github.com/satwikkansal/wtfpython