
Từ góc độ chức năng, các chuỗi có thể được sử dụng để biểu diễn bất kỳ thứ gì có thể được mã hóa dưới dạng văn bản hoặc byte.
Chuỗi trong Python có những đặc điểm chính sau:
+ Chuỗi trong python được biểu diễn theo nhiều cách, ví dụ trong cặp dấu ngoặc đơn (`' '`) hoặc cặp dấu ngoặc kép (`" "`) cũng có thể là trong cặp 3 dấu ngoặc đơn hoặc kép (`""" """`, `''' '''`).
+ Cả hai loại dấu đều sử dụng giống nhau, tuy nhiên chúng ta nên sử dụng `' '` nếu trong chuỗi kí tự có dấu `"` và ngược lại chúng ta nên sử dụng `" "` nếu trong chuỗi kí tự có dấu `'`.
Nếu chúng ta muốn sử dụng `" "` cho chuỗi có kí tự `"` hoặc `' '` cho cuối có kí tự `'` ta dùng `\'` hoặc `\"` tương ứng.
```py
>>> "My name's an"
>>> '"Yes", It\'s my'
```
+ Nếu bạn không muốn các kí tự mở đầu bằng cách sử dụng kí tự đặc biệt như `\`, bạn có thể sử dụng các chuỗi thô bằng cách thêm tiền tố `r` trước các trích dẫn.
+ Chuỗi kí tự có thể kéo dài trong nhiều dòng bằng cách sử dụng 3 dấu ngoặc đơn hoặc kép  (`""" """` hoặc `''' '''`), kết thúc dòng sẽ được tự động bao gồm trong chuỗi. Bạn cũng có thể theo cách khác đó là sử dụng `\`  đối với dấu ngoặc đơn hoặc kép ở cuối câu để nối dòng tiếp theo với dòng hiện tại. 
Lưu ý: dấu `\` chỉ dó tác dụng đối với dòng chứa kí tự và dòng tiếp theo sau đó, nếu muốn nối chuỗi nhiều dòng thành một, bạn sẽ phải sử dụng mỗi kí tự `\` cho mỗi cuối dòng.
```py
>>> print('C:\name') # \n ở đây sẽ được hiểu là xuống dòng mới
C:
ame
>>> print(r'C:\User\name') # sử dụng r để chuỗi kí tự được hiểu là chuỗi kí tự thô
# C:\User\name
>>> print('C:\\User\\name') # kí tự \\ se cho kết quả như trên
# C:\User\name
```
+ Các chuỗi có thể được nối với nhau bằng toán tử `+`, `*`.
+ Hai chuỗi đặt cạnh nhau được tự động nối với nhau.
```py
>>> 'Hello ' + 'World!'
'Hello World!'
>>> 'Hello' * 2
'Hello Hello'
>>> "Hello " "World!"
'Hello World!'
```
+ Chuỗi trong Python có thể được `iterable` bằng toán tử `in` và `not in`.
```py
>>> for i in "Hello":
>>>  print i
H
e
l
l
o
```
Các kí tự thoát trong python

| Kí tự | Kí tự trong mã Hexa | Miêu tả |
|-------|---------------------|---------|
| \a | 0x07 | Chuông hoặc thông báo |
| \b | 0x08 | Backspace |
| \n | 0x0a | Dòng mới |
| \t | 0x09 | Tab |
| \v | 0x0b | Tab theo chiều dọc |
| \r | 0x0d | Quay lại |
| \n | 0x0a | Dòng mới |

```py
print("Blog \t 0xpan.blogspot.com")
Blog 	0xpan.blogspot.com
```

| Stt | Hàm | Miêu tả |
| 1 | [S.capitalize()](https://0xpan.blogspot.com/2018/11/string-in-python.html#load-h4-1) | Hàm in hoa chữ cái đầu tiên của chuỗi. |
| 2 | [S.casefold()](https://0xpan.blogspot.com/2018/11/string-in-python.html#load-h4-2)| Hàm loại bỏ tất cả các phân biệt chữ hoa trong chuỗi |
| 3 | [S.center()](https://0xpan.blogspot.com/2018/11/string-in-python.html#load-h4-3)| Hàm trả về chuỗi được hiển thị ở giữa một chuỗi. |
| 4 | [S.count()](https://0xpan.blogspot.com/2018/11/string-in-python.html#load-h4-4)| Hàm đếm xem trong chuỗi có bao nhiêu ký tự cần tìm |
| 5 | [S.encode()](https://0xpan.blogspot.com/2018/11/string-in-python.html#load-h4-5)| Hàm `encode` (mã hóa) một chuỗi |
| 6 | [S.endswith()](https://0xpan.blogspot.com/2018/11/string-in-python.html#load-h4-6)| Hàm kiểm tra xem chuỗi hoặc khoảng chuỗi có được kết thúc bằng ký tự nào đó hay không |
| 7 | [S.expandtabs()](https://0xpan.blogspot.com/2018/11/string-in-python.html#load-h4-7)| Hàm tìm kiếm thay thế `\t` bằng các ký tự khoảng trắng |
| 8 | [S.find()](https://0xpan.blogspot.com/2018/11/string-in-python.html#load-h4-8)| Hàm tìm kiếm một chuỗi trong một chuỗi hoặc khoảng chuỗi |
| 9 | [S.format()](https://0xpan.blogspot.com/2018/11/string-in-python.html#load-h4-9)| Hàm đưa vào chuỗi các tham số với định dạng. |
| 10 | [S.format_map(mapping)](https://0xpan.blogspot.com/2018/11/string-in-python.html#load-h4-10)| Hàm tương tự như `str.format()`, ngoại trừ việc ánh xạ được sử dụng trực tiếp và không được sao chép vào `dict` |
| 11 | [S.index()](https://0xpan.blogspot.com/2018/11/string-in-python.html#load-h4-11)| Hàm tương tự như hàm `find()` chỉ khác duy nhất là nếu như không tìm thấy thì hàm này sẽ gọi exception. |
| 12 | [S.isalnum()](https://0xpan.blogspot.com/2018/11/string-in-python.html#load-h4-12)| Hàm  kiểm tra xem một chuỗi có phải là chứa duy nhất các ký tự chữ hoặc chuỗi hay không |
| 13 | [S.isalpha()](https://0xpan.blogspot.com/2018/11/string-in-python.html#load-h4-13)| Hàm này có tác dụng kiểm tra xem một chuỗi có phải là chứa duy nhất các ký tự chữ hay không |
| 14 | [S.isascii()](https://0xpan.blogspot.com/2018/11/string-in-python.html#load-h4-14)| Hàm kiểm tra xem một chuỗi có phải là chứa duy nhất các ký tự `ASCII` hay không |
| 15 | [S.isdecimal()](https://0xpan.blogspot.com/2018/11/string-in-python.html#load-h4-15)| Hàm kiểm tra ký tự trong một chuỗi có phải là các ký tự thập phân |
| 16 | [S.isdigit()](https://0xpan.blogspot.com/2018/11/string-in-python.html#load-h4-16)| Hàm kiểm tra xem một chuỗi có phải là chứa duy nhất các chữ số hay không |
| 17 | [S.isidentifier()](https://0xpan.blogspot.com/2018/11/string-in-python.html#load-h4-17)| Hàm kiểm tra chuỗi có phải là một định danh hợp lệ trong Python |
| 18 | [S.islower()](https://0xpan.blogspot.com/2018/11/string-in-python.html#load-h4-18)| Hàm kiểm tra xem một chuỗi có phải là in thường hay không |
| 19 | [S.isnumeric()](https://0xpan.blogspot.com/2018/11/string-in-python.html#load-h4-19)| Hàm kiểm tra xem một chuỗi có phải chỉ chứa duy nhất các ký tự số hay không |
| 20 | [S.isprintable()](https://0xpan.blogspot.com/2018/11/string-in-python.html#load-h4-20)| Hàm kiểm tra tất cả các ký tự trong chuỗi có thể in được hoặc chuỗi rỗng |
| 21 | [S.isspace()](https://0xpan.blogspot.com/2018/11/string-in-python.html#load-h4-21)| Hàm kiểm tra xem một chuỗi có phải chỉ chứa duy nhất các ký tự khoảng trắng không |
| 22 | [S.istitle()](https://0xpan.blogspot.com/2018/11/string-in-python.html#load-h4-22)| kiểm tra xem một chuỗi có phải là `title `hay không |
| 23 | [S.isupper()](https://0xpan.blogspot.com/2018/11/string-in-python.html#load-h4-23)| Hàm kiểm tra xem một chuỗi có phải là in Hoa hay không |
| 24 | [S.join()](https://0xpan.blogspot.com/2018/11/string-in-python.html#load-h4-24)| Hàm nối các phần tử `iterable` bởi string |
| 25 | [S.ljust()](https://0xpan.blogspot.com/2018/11/string-in-python.html#load-h4-25)|  trả về một chuỗi với độ dài `width` được xác định, nếu chuỗi được chọn nhỏ hơn `width` thì nó sẽ sử dụng `fill` để bù chỗ thiếu đó về phía bên phải của chuỗi |
| 26 | [S.lower()](https://0xpan.blogspot.com/2018/11/string-in-python.html#load-h4-26)| Hàm chuyển đổi chuỗi về dạng in thường |
| 27 | [S.lstrip()](https://0xpan.blogspot.com/2018/11/string-in-python.html#load-h4-27)| loại bỏ đi các ký tự `char` ở phía đầu của chuỗi |
| 28 | [S.maketrans()](https://0xpan.blogspot.com/2018/11/string-in-python.html#load-h4-28)| Hàm tạo ra các translation cho chuỗi. Dùng kết hợp với phương thức `translate()` |
| 29 | [S.partition()](https://0xpan.blogspot.com/2018/11/string-in-python.html#load-h4-29)| Hàm tách chuỗi tại lần xuất hiện đầu tiên của chuỗi đối số |
| 30 | [S.replace()](https://0xpan.blogspot.com/2018/11/string-in-python.html#load-h4-30)| Hàm tìm kiếm và thay thế chuỗi tìm được bằng chuỗi mới. |
| 31 | [S.rfind()](https://0xpan.blogspot.com/2018/11/string-in-python.html#load-h4-31)| Tương tự như hàm find(), nhưng hàm này nó sẽ trả về index của chuỗi cuối cùng tìm được trong chuỗi |
| 32 | [S.rindex()](https://0xpan.blogspot.com/2018/11/string-in-python.html#load-h4-32)| Tương tự như hàm index(),nhưng hàm này nó sẽ trả về index của chuỗi cuối cùng tìm được trong chuỗi |
| 33 | [S.rjust()](https://0xpan.blogspot.com/2018/11/string-in-python.html#load-h4-33)| Tương tự hàm ljust() nhưng chỉ có điều là nó sẽ bù về phía bên trái của chuỗi |
| 34 | [S.rpartition()](https://0xpan.blogspot.com/2018/11/string-in-python.html#load-h4-34)| Hàm tách chuỗi ở lần xuất hiện cuối cùng của chuỗi đối số |
| 35 | [S.rsplit()](https://0xpan.blogspot.com/2018/11/string-in-python.html#load-h4-35)| Hàm tách chuỗi từ bên phải tại dấu tách đã chỉ định |
| 36 | [S.rstrip()](https://0xpan.blogspot.com/2018/11/string-in-python.html#load-h4-36)| Tương tự như `lstrip()`, chỉ khác là `rstrip()` nó sẽ loại bỏ char ở phần cuối của chuỗi |
| 37 | [S.split()](https://0xpan.blogspot.com/2018/11/string-in-python.html#load-h4-37)| Hàm tách chuỗi thành mảng bởi các char. |
| 38 | [S.splitlines()](https://0xpan.blogspot.com/2018/11/string-in-python.html#load-h4-38)| Hàm tách chuỗi bởi các ký tự \n |
| 39 | [S.startswith()](https://0xpan.blogspot.com/2018/11/string-in-python.html#load-h4-39)| Hàm kiểm tra xem chuỗi hoặc khoảng chuỗi có được bắt đầu bằng ký tự nào đó hay không |
| 40 | [S.strip()](https://0xpan.blogspot.com/2018/11/string-in-python.html#load-h4-40)| hàm lại bỏ các ký tự char ở cả hai đầu của chuỗi. |
| 41 | [S.swapcase()](https://0xpan.blogspot.com/2018/11/string-in-python.html#load-h4-41)| Hàm chuyển đổi chuỗi sang dạng nghịch đảo của nó |
| 42 | [S.title()](https://0xpan.blogspot.com/2018/11/string-in-python.html#load-h4-42)| Hàm chuyển đổi chuỗi sang kiểu `title` |
| 43| [S.translate()](https://0xpan.blogspot.com/2018/11/string-in-python.html#load-h4-43)| Hàm thực thi việc dịch chuỗi. Dùng kết hợp với phương thức `makestrans()`. |
| 44 | [S.upper()](https://0xpan.blogspot.com/2018/11/string-in-python.html#load-h4-44)| Hàm chuyển đổi chuỗi sang dạng in hoa |
| 45 | [S.zfill()](https://0xpan.blogspot.com/2018/11/string-in-python.html#load-h4-45)| Hàm tác dụng như hàm `ljust()` , nhưng nó sẽ chỉ thêm được các ký tự `zero` (số `0`) và trước chuỗi thô. |


S.capitalize() 
Hàm trả về một bản sao của `S` với ký tự đầu tiên được chuyển thành chữ hoa và tất cả các ký tự khác được chuyển thành chữ thường.
```py
>>> s = "hello"
>>> s.capitalize()
Hello
```
S.casefold() 
Là phiên bản nâng cao của `lower()` để linh hoạt hơn trong việc xử lí kí tự `unicode`. `casefold()` trả về bản sao đã được sắp xếp của chuỗi. Ví dụ: chữ cái thường của chữ cái tiếng Đức `ß` tương đương với `ss`. Vì nó đã là chữ thường, `lower()` sẽ không làm gì với `ß`; `casefold()` chuyển đổi nó thành `ss`.
```py
>>> string= "HELLO"
>>> string.casefold()
hello
```

S.center(width [, fill])
Thực hiện đưa chuỗi vào giữa và lấp đầy 2 bên bằng kí tự fill với độ dài bằng width. Mặc định, phần thêm vào bao gồm ký tự khoảng trắng `ASCII`.
```py
>>>string = "i am finn"
>>>print(string.center(20));
      i am finn    

>>>print(string.center(20, '*'));
*****i am finn****** 
```
Chú ý: Nếu `width` nhỏ hơn độ dài chuỗi cần xử lý thì, hàm này sẽ trả về chuỗi ban đầu. 

S.count(sub [, start [, end]]) 
Hàm này có tác dụng đếm xem trong chuỗi có bao nhiêu ký tự cần tìm. Trong đó:
+ `sub`: là chuỗi các bạn cần tìm kiếm và đếm.
+ `start`: là index bắt của chuỗi cần tìm. Mặc định thì `start = 0`.
+ `end`: là index kết thúc của chuỗi cần tìm. Mặc định thì `end = len()` của chuỗi.
```py
>>>string = "i am finn"
>>>print(string.count('i'));
2    
>>>print(string.count('i', 3));
1
```
S.encode([encoding [,errors]]) 
Hàm trả về phiên bản được mã hóa của chuỗi dưới dạng đối tượng `byte`. trong đó `type` là kiểu `encode` của `string` (mặc định sẽ là `utf-8`), `mode` là chế độ báo lỗi nếu có khi `encode`. Python hỗ trợ 6 dạng `mode` như sau:
+ `strict`: Chế độ nghiêm ngặt, nó sẽ hiển thị lỗi dưới `UnicodeDecodeError exception`. Đây là chế độ mặc định.
+ `ignore`: bỏ qua tất cả các lỗi nếu có.
+ `replace`: nó sẽ thay thế lỗi bằng dấu `?`.
+ `xmlcharrefreplace`: chèn tham chiếu `XML`.
+ `backslashreplace`: Chèn chuỗi `\uNNNN`.
+ `namereplace`: Chèn chuỗi `\N{...}`.
```py
>>> string = "i am finn"
>>> print(string.encode());
b'i am finn'
```

S.endswith(suffix [, start [, end]]) 
Hàm này có tác dụng kiểm tra xem chuỗi hoặc khoảng chuỗi có được kết thúc bằng ký tự nào đó hay không. Nó sẽ trả về `True` nếu đúng và `False` nếu sai.Trong đó:
+ `suffix`: là chuỗi các bạn cần xác thực xem có phải chuỗi kết thúc không.
+ `strart`: là index bắt đầu chuỗi cần so sánh. Mặc định thì `start = 0`.
+ `end`: là chỉ mục kết thúc chuỗi cần so sánh. Mặc định thì `end = len()`.
```py
>>> string = 'i am finn'
>>> print(string.endswith('n'));
True
>>> print(string.endswith('n', 1, 5));
False
```

S.expandtabs([tabsize]) 
Hàm này có tác dụng tìm kiếm thay thế `\t` bằng các ký tự khoảng trắng. Với `tabsize` là số lượng khoảng trắng mà bạn muốn thay thế cho một `\t`. Mặc định thì `len = 8`.
```py
>>> string = 'i am finn\thoc lap trinh'
>>> print(string.expandtabs());
i am finn        hoc lap trinh
```

S.find(sub [, start [, end]]) 
Hàm này có tác dụng tìm kiếm một chuỗi trong một chuỗi hoặc khoảng chuỗi. Nó sẽ trả về là vị trí bắt đầu của chuỗi tìm được trong chuỗi nếu tìm thấy và nếu không tìm thấy nó sẽ trả về `-1`.Trong đó:
+ sub: là chuỗi các bạn cần xác thực xem có phải chuỗi kết thúc không.
+ start: là index bắt đầu chuỗi cần so sánh. Mặc định thì `start = 0`.
+ end: là index kết thúc chuỗi cần so sánh. Mặc định thì `end = len()`.
```py
>>> string = 'i am finn'
>>> print(string.find('fi'));
5
```

S.format(fmtstr, `*args`, `**kwargs`) 
Hàm này sẽ đưa vào chuỗi các tham số với định dạng. Trong đó:
+ `fmtstr`: là tham số bất kì.
+ `*args` và `**kwargs`: là các tham số cần đưa vào chuỗi.`*args` đại diện cho 1 `list` còn `**kwargs` đại diện cho 1 `dict`.
```py
>>> print("Hello {0} and {1}".format('an', ['huy','ha']))
 Hello an and ['huy', 'ha']
```

S.format_map(mapping)
Hàm tương tự như `str.format()`, ngoại trừ việc ánh xạ được sử dụng trực tiếp và không được sao chép vào `dict`. Điều này rất hữu ích nếu để ánh xạ ví dụ là một lớp con `dict`
```py
class Default(dict):
	def __missing__(self, key):
		return key
'{name} được sinh ra ở {country}'.format_map(Default(name='An'))
'An được sinh ra ở country'
```

S.index(sub [, start [, end]]) 
Hàm này tương tự như hàm `find()` chỉ khác duy nhất là nếu như không tìm thấy thì hàm này sẽ gọi `exception`.
```py
>>> string = 'i am finn'
>>> print(string.index('hello'));
ValueError: substring not found
```

S.isalnum() 
Hàm này có tác dụng kiểm tra xem một chuỗi có phải là chứa duy nhất các ký tự chữ hoặc chuỗi hay không? Nó sẽ trả về `True` nếu chuỗi chỉ chứa các ký tự chữ hoặc số. Và ngược lại nó sẽ trả về `False` nếu chuỗi chứa ký tự khác chuỗi và số.
```py
>>> string = 'i am finn'
>>> print(string.isalnum());
True
>>> string = 'i am finn!'
>>> print(string.isalnum());
False
```

S.isalpha() 
Hàm này có tác dụng kiểm tra xem một chuỗi có phải là chứa duy nhất các ký tự chữ hay không? Nó sẽ trả về `True` nếu chuỗi này chỉ chứa duy các ký tự chữ trong bảng chữ cái, và sẽ trả về `False` nếu nó chứa số hoặc ký tự đặc biệt khác.
```py
>>> string = 'i am finn69'
>>> print(string.isalpha());
False
>>> string = 'i am finn'
>>> print(string.isalpha());
True
```
S.isascii()
Hàm trả về true nếu chuỗi rỗng hoặc tất cả các ký tự trong chuỗi là `ASCII`, nếu không thì ngược lại. Các ký tự `ASCII` có các điểm mã trong phạm vi `U + 0000-U + 007F`.
```py
>>> string = 'i am finn'
>>> print(string.isascii());
True
>>> string = 'i am Phúc'
>>> print(string.isascii());
False
```

S.isdecimal() 
Hàm này trả về `True` nếu tất cả các ký tự trong một chuỗi là các ký tự thập phân. Nếu không, nó sẽ trả về `False`.
```py
>>> string = '69'
>>> print(string.isdecimal());
True
>>> string = '0x37'
>>> print(string.isdecimal());
False
```

S.isdigit() 
Hàm này có tác dụng kiểm tra xem một chuỗi có phải là chứa duy nhất các chữ số hay không? Nó sẽ trả về `True` nếu đúng và `False` nếu sai.
```py
>>> string = '69'
>>> print(string.isdigit());
True
>>> string = 'hello'
>>> print(string.isdigit());
False
```

S.isidentifier() 
Hàm trả về `True` nếu chuỗi là một định danh hợp lệ trong Python. Nếu không, nó sẽ trả về `False`.
```py
>>> str = 'Python'
>>> print(str.isidentifier())
True
>>> str = 'Py thon'
>>> print(str.isidentifier())
False
>>> str = '22Python'
>>> print(str.isidentifier())
False
>>> str = ''
>>> print(str.isidentifier())
False
```

S.islower() 
Hàm này có tác dụng kiểm tra xem một chuỗi có phải là in thường hay không? Nó sẽ trả về `True` nếu đúng và `False` nếu sai.
```py
string = 'i am finn'
print(string.islower());
True
string = '2018'
print(string.islower());
False
string = '9i am finn6'
print(string.islower());
True
string = '9i am finn6'
print(string.islower());
False
```

S.isnumeric() 
Hàm này có tác dụng kiểm tra xem một chuỗi có phải chỉ chứa duy nhất các ký tự số hay không? Nó sẽ trả về `True` nếu đúng và `False` nếu sai.
```py
string = 'I AM FINN'
print(string.isnumeric());
False
string = '2018'
print(string.isnumeric());
True
string = '9I AM FINN6'
print(string.isnumeric());
False
```

S.isprintable() 
Hàm trả về `True` nếu tất cả các ký tự trong chuỗi có thể in được hoặc chuỗi rỗng. Nếu không, nó sẽ trả về `False`. Các ký tự chiếm không gian in trên màn hình được gọi là các ký tự có thể in. Ví dụ:
+ Chữ cái và ký hiệu
+ Chữ số
+ Chấm câu
+ Khoảng trắng
```py
s = 'Xin chào'
print(s.isprintable())
True
s = '\nXin chào'
print(s.isprintable())
False # kí tự \n không in được lên màn hình
s = ''
print(s.isprintable())
True
```

S.isspace() 
Hàm này có tác dụng kiểm tra xem một chuỗi có phải chỉ chứa duy nhất các ký tự khoảng trắng không? Nó sẽ trả về `True` nếu đúng và `False` nếu sai.
```py
string = '         '
print (string.isspace());
True
string = 'Xin chào'
print (string.isspace());
False
```

S.istitle() 
Hàm này có tác dụng kiểm tra xem một chuỗi có phải là `title` hay không (chuỗi `title` là chuỗi có các chữ cái đầu đều được in hoa). Nó sẽ trả về `True` nếu đúng và ngược lại `False` nếu sai.
```py
string = 'xin chào'
print(string.istitle())
False
string = 'Xin Chào'
print(string.istitle())
True
```

S.isupper()
Trả về `True` nếu tất cả các ký tự trong chuỗi là chữ hoa , `False` nếu khác.
```py
>>> string = 'Hello'
>>> string.isupper()
False
>>> string = 'HELLO'
>>> string.isupper()
True

S.join(iterable) 
Hàm này có tác dụng nối các phần tử trong `iterable` bởi `string`
```py
string_one = ' '
string_two = 'FINN'
print(string_one.join(string_two))
F I N N
string_one = '-'
string_two = ['F','I','N', 'N']
print(string_one.join(string_two))
F-I-N-N
```

S.ljust(width [, fill]) 
Hàm này có tác dụng trả về một chuỗi với độ dài `width` được xác định, nếu chuỗi được chọn nhỏ hơn `width` thì nó sẽ sử dụng `fill` để bù chỗ thiếu đó về phía bên phải của chuỗi.
```py
string = "Xin Chào"
print(string.ljust(15, "-"))
'Xin Chào-------'
```

S.lower() 
Hàm này có tác dụng chuyển đổi chuỗi về dạng in thường.
```py
string = "Xin Chào"
print(string.lower())
xin chào
```

S.upper() 
Hàm này có tác dụng chuyển đổi chuỗi sang dạng in hoa.
```py
string = "Xin Chào"
print(string.upper())
XIN CHÀO
```

S.lstrip([chars]) 
Hàm này có tác dụng loại bỏ đi các ký tự `char` ở phía đầu của chuỗi. Mặc định thì `char` sẽ bằng khoảng trắng (`white space`)
```py
string = "  Xin Chào"
print(string.lstrip())
Xin Chào
string = "----Xin Chào"
print(string.lstrip('-'))
Xin Chào
```
S.maketrans(x[, y[, z]]) 
Hàm này có tác dụng tạo ra các `translation` cho chuỗi. Dùng kết hợp với phương thức `translate()`. Trong đó:
+ `in`: là chuỗi các ký tự các bạn cần tìm.
+ `out`: là chuỗi chứa các ký tự các bạn cần thay thế. Xem ví dụ ở mục `S.translate()`.

S.partition(sep) 
Hàm tách chuỗi tại lần xuất hiện đầu tiên của chuỗi đối số và trả về một bộ chứa phần phân tách trước, chuỗi đối số và phần sau dấu tách
```py
string = "Python is fun"
print(string.partition('is '))
('Python ', 'is ', 'fun')
print(string.partition('not '))
('Python is fun', '', '')
string = "Python is fun, isn't it"
print(string.partition('is'))
('Python ', 'is', " fun, isn't it")
```
S.replace(old, new [, count]) 
Hàm này có tác dụng tìm kiếm và thay thế chuỗi tìm được bằng chuỗi mới.Trong đó:
+ `old`: là chuỗi mà bạn cần tìm kiếm trong string.
+ `new`: là chuỗi mà bạn cần thay thế cho chuỗi `old` tìm được.
+ `count`: là số lượng từ có thể thay thế tối đa.
```py
string = "Hello *!"
print(string.replace('*', 'World'))
Hello World!
string = "A A A"
print(string.replace('A', 'Hello', 2))
Hello Hello A
```
S.rfind(sub [,start [,end]]) 
Tương tự như hàm `find()`, nhưng hàm này nó sẽ trả về `index` của chuỗi cuối cùng tìm được trong chuỗi. Cú pháp sử dụng tương tự hàm `find()`.
```py
string = "Xin chào"
print(string.rfind('c'))
4
```

S.rindex(sub [, start [, end]]) 
Tương tự như hàm `index()`,nhưng hàm này nó sẽ trả về `index` của chuỗi cuối cùng tìm được trong chuỗi. Cú pháp sử dụng tương tự hàm `index()`.
```py
string = "Hello"
print(string.rindex('l'))
4
```
S.rjust(width [, fill]) 
Tương tự hàm `ljust()` nhưng chỉ có điều là nó sẽ bù về phía bên trái của chuỗi.
```py
string = "Hello"

print(string.rjust(10, "-"))
#-----Hello
```
S.rpartition(sep)
Hàm tách chuỗi tại lần xuất hiện cuối cùng của `sep`, và trả về một `tuple ` chứa phần trước dấu phân tách, chính dấu phân cách và phần sau dấu tách. Nếu không tìm thấy dấu tách, hãy trả về một bộ ba chứa hai chuỗi rỗng, theo sau là chính chuỗi đó.
```py
string = "Python is fun"
print(string.rpartition('is '))
('Python ', 'is ', 'fun')
print(string.rpartition('not '))
('', '', 'Python is fun')
string = "Python is fun, isn't it"
print(string.rpartition('is'))
('Python is fun, ', 'is', "n't it")
```
S.rsplit([sep[, maxsplit]]) 
Hàm tách chuỗi từ bên phải tại dấu tách đã chỉ định và trả về một danh sách các chuỗi. Trong đó:
+ `sep`: Dấu phân tách. Phương thức `rsplit()` tách chuỗi bắt đầu từ bên phải tại dấu tách được chỉ định. Nếu dấu phân cách không được chỉ định, bất kỳ khoảng trắng (khoảng trống, dòng mới, v.v.) là một dấu tách.
+ `maxsplit`: xác định số lượng chia tách tối đa. Giá trị mặc định của `maxsplit` là `-1`, có nghĩa là, không có giới hạn về số lượng phân chia.
```py
text= 'Love thy neighbor'
print(text.rsplit())
['Love', 'thy', 'neighbor']
grocery = 'Milk, Chicken, Bread'
print(grocery.rsplit(', '))
['Milk', 'Chicken', 'Bread']
print(grocery.rsplit(':'))
['Milk, Chicken, Bread']
```
S.rstrip([chars]) 
Tương tự như `lstrip()`, chỉ khác là `rstrip()` nó sẽ loại bỏ `char` ở phần cuối của chuỗi.
```py
string = "Hello World    "
print(string.rstrip())
Hello World
string = "Hello World----"
print(string.rstrip('-'))
Hello World
```
S.split([sep [,maxsplit]]) 
Hàm này có tác dụng tác chuỗi thành mảng bởi các `seq`. Trong đó:
+ `seq`: là ký tự các bạn tìm và tách chuỗi bởi nó. Mặc định thì `seq = ' '`.
+ `maxsplit`: là số lượng chuỗi tách tối đa.
```py
string = "Hello World"
print(string.split())
['Hello', 'World']
string = "Hello World"
print(string.split('l'))
['He', 'o Wor', 'd']
string = "Hello World !"
print(string.split(' ', 1))
['Hello', 'World !']
```
S.splitlines([keepends]) 
Hàm này sẽ tách chuỗi bởi các ký tự `\n`.Trong đó: `keepends` là số lần có thể cắt tối đa.
```py
string = "Hello\nWorld\n!"
print(string.splitlines())
['Hello', 'World', '!']
```
S.startswith(prefix [, start [, end]]) 
Hàm này có tác dụng kiểm tra xem chuỗi hoặc khoảng chuỗi có được bắt đầu bằng ký tự nào đó hay không. Nó sẽ trả về `True` nếu đúng và `False` nếu sai.Trong đó:
+ `str`: là chuỗi các bạn cần xác thực xem có phải chuỗi bắt đầu không.
+ `start`: là chỉ mục bắt đầu chuỗi cần so sánh. Mặc định thì `start = 0`.
+ `end`: là chỉ mục kết thúc chuỗi cần so sánh. Mặc định thì `end = len()`.
```py
string = 'I am finn'
print(string.startswith('I'));
True
print(string.startswith('m', 3, 10));
False
```
S.strip([chars]) 
Hàm này là sự kết hợp của `lstrip()` và `rstrip()`. Nó sẽ lại bỏ các ký tự `char` ở cả hai đầu của chuỗi.
```py
string = "   Hello World    "
print(string.strip())
Hello World
string = "----Hello World----"
print(string.strip('-'))
Hello World
```
S.swapcase() 
Hàm này có tác dụng chuyển đổi chuỗi sang dạng nghịch đảo của nó (nghịch đảo ở đây là hoa - thường).
```py
string = "hello world"
print(string.swapcase())
HELLO WORLD
string = "HELLO WORLD"
print(string.swapcase())
hello world
```
S.title() 
Hàm này có tác dụng chuyển đổi chuỗi sang kiểu `title` ( viết hoa kí tự đầu của 1 từ).
```py
string = "hello world"
print(string.title())
Hello World
```
S.translate(map) 
Hàm này có tác dụng thực thi việc dịch chuỗi. Dùng kết hợp với phương thức `makestrans()`.
```py
inputs = "abcdefghijklmnopqrstuxyz";
outputs = "ABCDEFGHIJKLMNOPQRSTUXYZ";
string = "Hello World";
trans = string.maketrans(inputs, outputs)
print(string.translate(trans))
HELLO WORLD
```
S.isupper(). 
Hàm này có tác dụng kiểm tra xem một chuỗi có phải là in hoa hay không? Nó sẽ trả về `True` nếu đúng và `False` nếu sai.
```py
string = 'I AM FINN'
print(string.isupper());
True
string = '2018'
print(string.isupper());
False
string = '9I AM FINN6'
print(string.isupper());
True
string = '9I AM FINN6'
print(string.isupper());
False
```

S.zfill(width) 
Hàm này có tác dụng như hàm `ljust()` , nhưng nó sẽ chỉ thêm được các ký tự `zero` (số `0`) và trước chuỗi thôi.
```py
>>> string = "hello"
>>> print(string.zfill(10))
'00000hello'
```

Các hàm dựng sẵn cho kiểu dữ liệu chuỗi

| Hàm | Miêu tả |
|-------|-----------|
| [any()](https://0xpan.blogspot.com/2018/11/danh-sach-cac-ham-dung-san-python.html#load-h4-2) | Trả về `True` nếu bất kì phần tử nào của chuỗi là `True` |
| [all()](https://0xpan.blogspot.com/2018/11/danh-sach-cac-ham-dung-san-python.html#load-h4-1) | Trả về `True` nếu tất cả phần tử nào của chuỗi là `True` |
| [ascii()](https://0xpan.blogspot.com/2018/11/danh-sach-cac-ham-dung-san-python.html#load-h4-3) | Trả về chuỗi có chứa đối tượng có thể in được |
| [bool()](https://0xpan.blogspot.com/2018/11/danh-sach-cac-ham-dung-san-python.html#load-h4-5) | Chuyển đổi chuỗi sang kiểu boolean |
| [bytearray()](https://0xpan.blogspot.com/2018/11/danh-sach-cac-ham-dung-san-python.html#load-h4-7) | Trả về mảng giữ một kích thước `byte` |
| [bytes()](https://0xpan.blogspot.com/2018/11/danh-sach-cac-ham-dung-san-python.html#load-h4-8) | Trả về đối tượng không thể thay đổi `byte` |
| [compile()](https://0xpan.blogspot.com/2018/11/danh-sach-cac-ham-dung-san-python.html#load-h4-12) | Trả về một đối tượng mã Python |
| [complex()](https://0xpan.blogspot.com/2018/11/danh-sach-cac-ham-dung-san-python.html#load-h4-13) | Trả về một số phức |
| [enumerate()](https://0xpan.blogspot.com/2018/11/danh-sach-cac-ham-dung-san-python.html#load-h4-18) | Trả về một đối tượng `Enumerate` |
| [filter()](https://0xpan.blogspot.com/2018/11/danh-sach-cac-ham-dung-san-python.html#load-h4-21) | xấy dựng `iterator` từ phần tử của chuỗi nếu chúng là `True` |
| [float()](https://0xpan.blogspot.com/2018/11/danh-sach-cac-ham-dung-san-python.html#load-h4-22) | Trả về một số `float` từ `string` |
| [input()](https://0xpan.blogspot.com/2018/11/danh-sach-cac-ham-dung-san-python.html#load-h4-32) | Đọc và trả về 1 dòng đầu vào |
| [int()](https://0xpan.blogspot.com/2018/11/danh-sach-cac-ham-dung-san-python.html#load-h4-33) | Trả về số nguyên của kí tự |
| [iter()](https://0xpan.blogspot.com/2018/11/danh-sach-cac-ham-dung-san-python.html#load-h4-36) | trả về `iterator` cho một đối tượng |
| [len()](https://0xpan.blogspot.com/2018/11/danh-sach-cac-ham-dung-san-python.html#load-h4-37) | Trả về độ lớn của chuỗi |
| [max()](https://0xpan.blogspot.com/2018/11/danh-sach-cac-ham-dung-san-python.html#load-h4-41) | Trả về phần tử lớn nhất của chuỗi |
| [min()](https://0xpan.blogspot.com/2018/11/danh-sach-cac-ham-dung-san-python.html#load-h4-43) | Trả về phần tử nhỏ nhất của chuỗi |
| [map()](https://0xpan.blogspot.com/2018/11/danh-sach-cac-ham-dung-san-python.html#load-h4-40) | Áp dụng từng phần tử của chuỗi vào hàm và trả về một `list` |
| [ord()](https://0xpan.blogspot.com/2018/11/danh-sach-cac-ham-dung-san-python.html#load-h4-48) | Trả về mã `unicode` cho kí tự `unicode` |
| [reversed()](https://0xpan.blogspot.com/2018/11/danh-sach-cac-ham-dung-san-python.html#load-h4-54) | Trả về đảo ngược `iterator` của 1 `sequence` |
| [slice()](https://0xpan.blogspot.com/2018/11/danh-sach-cac-ham-dung-san-python.html#load-h4-58) | Tạo một đoạn cắt bởi hàm `range()` |
| [sorted()](https://0xpan.blogspot.com/2018/11/danh-sach-cac-ham-dung-san-python.html#load-h4-59) | Trả về 1 danh sách được sắp xếp từ 1 `iterable` |
| [sum()](https://0xpan.blogspot.com/2018/11/danh-sach-cac-ham-dung-san-python.html#load-h4-62) | Thêm `items` của một `Iterable` |
| [zip()](https://0xpan.blogspot.com/2018/11/danh-sach-cac-ham-dung-san-python.html#load-h4-67) | Trả về 1 `iterable` của `tuple` |
