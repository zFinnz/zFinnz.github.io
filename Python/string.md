<h1 align="center"> String trong Python </h1>

Từ góc độ chức năng, các chuỗi có thể được sử dụng để biểu diễn bất kỳ thứ gì có thể được mã hóa dưới dạng văn bản hoặc byte. Chuỗi trong Python có những đặc điểm chính sau:
+ Chuỗi trong python được biểu diễn theo nhiều cách, ví dụ trong cặp dấu ngoặc đơn (`' '`) hoặc cặp dấu ngoặc kép (`" "`) cũng có thể là trong cặp 3 dấu ngoặc đơn hoặc kép (`""" """`, `''' '''`).
+ Cả hai loại dấu đều sử dụng giống nhau, tuy nhiên chúng ta nên sử dụng `' '` nếu trong chuỗi kí tự có dấu `"` và ngược lại chúng ta nên sử dụng `" "` nếu trong chuỗi kí tự có dấu `'`.
+ Nếu chúng ta muốn sử dụng `" "` cho chuỗi có kí tự `"` hoặc `' '` cho cuối có kí tự `'` ta dùng `\'` hoặc `\"` tương ứng.
```py
>>> "My name's an"
>>> '"Yes", It\'s my'
```
+ Nếu bạn không muốn các kí tự mở đầu bằng cách sử dụng kí tự đặc biệt như `\`, bạn có thể sử dụng các chuỗi thô bằng cách thêm `r` trước các trích dẫn.
+ Chuỗi kí tự có thể kéo dài trong nhiều dòng bằng cách sử dụng 3 dấu ngoặc đơn hoặc kép cộng với dấu `...` ở kết thúc câu (`"""..."""` hoặc `'''...'''`), kết thúc dòng sẽ được tự động bao gồm trong chuỗi. Bạn cũng có thể theo cách khác đó là sử dụng `\` để nối dòng tiếp theo với dòng hiện tại. Lưu ý: dấu `\` chỉ dó tác dụng đối với dòng chứa kí tự và dòng tiếp theo sau đó, nếu muốn nối chuỗi nhiều dòng thành một, bạn sẽ phải sử dụng mỗi kí tự `\` cho mỗi cuối dòng.
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
+ Chuỗi trong Python có thể được interable bằng toán tử `in` và `not in`.
```py
>>> for i in "Hello":
>>> 	print i
H
e
l
l
o
```

# Các kí tự thoát trong python

| Ki tự | Kí tự trong mã hexa | Miêu rả |
|-------|---------------------|---------|
| \a | 0x07 | Chuông hoặc thông báo | 
| \b | 0x08 | Backspace |
| \n | 0x0a | Dòng mới |
| \t | 0x09 | Tab |
| \v | 0x0b | Tab theo chiều dọc |
| \r | 0x0d | Quay lại |
| \n | 0x0a | Dòng mới | 

```py
print("Website \t iamfinn.blogspot.com")
#Website          iamfinn.blogspot.com
```

# Fomat chuỗi
Ngoài những cách in ra dữ liệu ở trên thì mọi người cũng có thể sử dụng các keyword định dạng cho kiểu giá trị và binding nó vào chuỗi. Sử dụng với cú pháp:
```py
print("%type" %(binding))
```
Trong đó:
+ type là các kiểu dữ liệu các bạn muốn binding và thay thế vào vị trí đó.
+ binding là một tuple các giá trị mà các bạn muốn binding vào vị trí được xác định trong chuỗi.
Type là các kiểu sau:

| Kí hiệu định dạng | Kiểu Chuyển đổi |
|-------------------|-----------------|
| %c | Kí tự (Nhận đầu vào 1 kí tự hoặc chữ số) |
| %s | Chuyển đổi chuỗi qua `Str()` trước khi định dạng |
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

```py
>>> guy = "Ban"
>>> full = "Chao mung %s den voi blog cua toi" %(guy)
>>> print(full)
# Chao mung Ban den voi blog cua toi
>>> guy = "Ban"
>>> doamin = "blog cua toi"
>>> full = "Chao mung %s den voi %s" %(guy, doamin)
>>> print(full)
# Chao mung Ban den voi blog cua toi
```

# Truy cập chuỗi 

•	Các chuỗi có thể được lập chỉ mục, với số chỉ mục đầu tiên là 0, không chứa loại kí tự riêng biệt, mỗi kí tự chỉ đơn giản là một chuỗi có kích thước.
•	Các chỉ mục cũng có thể là số âm, sẽ được tính từ phải qua trái, với chỉ mục âm sẽ bắt đầu từ -1.
•	Bạn có thể cắt lấy chuỗi con bằng cách `string [start: end: step]` với string là chuỗi cần cắt, start là số chỉ mục bắt đầu end là số chỉ mục kết thúc, `step` là bước nhảy mạc định là 1, với `step` là số âm thì chuỗi sẽ cắt từ phải qua trái. Nếu `start` trống thì mặc định sẽ là `0`, nếu `end` trống thì mặc định sẽ là kích thước của chuỗi.
```py
>>>word = r'C:\python'
>>> word[0]
'C'
>>> word[2]
'\\'
>>>word[ -1]
'n'
>>> word[2: ]
'\\python'
>>> word[3::-1]
'p\\:C'
```
•	Ví dụ về chỉ mục của chuỗi
 +---+---+---+---+---+---+
 | P | y | t | h | o | n |
 +---+---+---+---+---+---+
 0   1   2   3   4   5   6
-6  -5  -4  -3  -2  -1

•	Chuỗi của python là một giá trị không đổi (immutable). Do đó, việc gán giá trị cho vi trị được lập chỉ mục sẽ dẫn đến lỗi.
```py
>>>a = 'Hello Word!'
>>>a[5] = 'c'
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: 'str' object does not support item assignment
```
# Các hàm xử lý chuỗi

Python là một ngôn ngữ khá là linh động và mềm dẻo nên nó cũng đã cung cấp cho chúng ta rất nhiều hàm có sẵn dùng để xử lý chuỗi. Sau đây mình sẽ liệt kê một số hàm hay dùng và ví dụ kèm theo để tham khảo và tìm kiếm khi cần dùng:
1. S.capitalize()
Hàm này có tác dụng in hoa chữ cái đầu tiên của chuỗi.
```py
>>> s = "hello"
>>> s.capitalize()
Hello
```
2. S.casefold()
Là phiên bản nâng cao của `lower()` để linh hoạt hơn trong việc xử lí kí tự unicode. `casefold ()` loại bỏ tất cả các phân biệt chữ hoa trong chuỗi và nó không nhận bất kì tham số nào.
```py
>>> string= "HELLO"
>>> string.casefold()
hello
```
3. S.center(width [, fill]) 
Thực hiện đưa chuỗi vào giữa và lấp đầy 2 bên bằng kí tự `fill` với độ dài bằng `width`.
```py
>>>string = "i am finn"
>>>print(string.center(20));
      i am finn    

>>>print(string.center(20, '*'));
*****i am finn****** 
```
Chú ý: Nếu `width` nhỏ hơn độ dài chuỗi cần xử lý thì, hàm này sẽ trả về chuỗi ban đầu.
4. S.count(sub [, start [, end]])
Hàm này có tác dụng đếm xem trong chuỗi có bao nhiêu ký tự cần tìm. Trong đó:
+ `sub` là chuỗi các bạn cần tìm kiếm và đếm. 
+ `start` là index bắt của chuỗi cần tìm. Mặc định thì `strart = 0`. 
+ `end` là index kết thúc của chuỗi cần tìm.  Mặc định thì `end = len()` của chuỗi.
```py
>>>string = "i am finn"
>>>print(string.count('i'));
2    
>>>print(string.count('i', 3));
1
```
5. S.encode([encoding [,errors]]) 
Hàm này có tác dụng encode (mã hóa) một chuỗi.  trong đó `type` là kiểu encode của string. Mặc định sẽ là `utf-8`, `mode` là chế độ báo lỗi nếu có khi encode. Python hỗ trợ 6 dạng mode như sau:
- `strict` - Chế độ nghiêm ngặt, nó sẽ hiển thị lỗi dưới UnicodeDecodeError exception. Đây là chế độ mặc định.
- `ignore` - bỏ qua tất cả các lỗi nếu có.
- `replace` - nó sẽ thay thế lỗi bằng dấu ?.
- `xmlcharrefreplace` - chèn tham chiếu XML.
- `backslashreplace` - Chèn chuỗi \uNNNN.
- `namereplace` - Chèn chuỗi \N{...}.
```py
>>> string = "i am finn"
>>> print(string.encode());
b'i am finn'
```
6. S.decode(type, mode)
Hàm này có tác dụng decode (giải mã) chuỗi trông Python. các tham số `type` và `mode` thì hoàn toàn tương tự như `encode`.
```py
>>> string = b"i am finn"
>>> print(string.encode());
i am finn
```
7. S.endswith(suffix [, start [, end]])
Hàm này có tác dụng kiểm tra xem chuỗi hoặc khoảng chuỗi có được kết thúc bằng ký tự nào đó hay không. Nó sẽ trả về `True` nếu đúng và `False` nếu sai.Trong đó:
+ `suffix` là chuỗi các bạn cần xác thực xem có phải chuỗi kết thúc không.
+ `strart` là index bắt đầu chuỗi cần so sánh. Mặc định thì `start = 0`.
+ `end` là index kết thúc chuỗi cần so sánh.  Mặc định thì `end = len()`.
```py
>>> string = 'i am finn'
>>> print(string.endswith('n'));
True
>>> print(string.endswith('n', 1, 5));
False
```
8. S.expandtabs([tabsize]) 
Hàm này có tác dụng tìm kiếm thay thế \t bằng các ký tự khoảng trắng. Với `tabsize` là số lượng khoảng trắng mà bạn muốn thay thế cho một `\t`. Mặc định thì len = 8.
```py
>>> string = 'i am finn\thoc lap trinh'
>>> print(string.expandtabs());
i am finn        hoc lap trinh
```
9. S.find(sub [, start [, end]])
Hàm này có tác dụng tìm kiếm một chuỗi trong một chuỗi hoặc khoảng chuỗi. Nó sẽ trả về là vị trí bắt đầu của chuỗi tìm được trong chuỗi nếu tìm thấy và nếu không tìm thấy nó sẽ trả về `-1`.Trong đó:
+ `sub` là chuỗi các bạn cần xác thực xem có phải chuỗi kết thúc không.
+ `start` là index bắt đầu chuỗi cần so sánh. Mặc định thì `start = 0`.
+ `end` là index kết thúc chuỗi cần so sánh. Mặc định thì `end = len()`.
```py
>>> string = 'i am finn'
>>> print(string.find('fi'));
5
```
10. S.format(fmtstr, `*args`, `**kwargs`)
Hàm này sẽ đưa vào chuỗi các tham số với định dạng. Trong đó:
+ `fmtstr` là tham số bất kì.
+ `*args` và `**kwargs` là các tham số cần đưa vào chuỗi.`*args` đại diện cho 1 `list` còn `**kwargs` đại diện cho 1 `dict`
```py
>>> print("Hello {0} and {1}".format('an', ['huy','ha']))
 Hello an and ['huy', 'ha']
```
11. S.index(sub [, start [, end]]) 
Hàm này tương tự như hàm find() chỉ khác duy nhất là nếu như không tìm thấy thì hàm này sẽ gọi `exception`.
```py
>>> string = 'i am finn'
>>> print(string.index('hello'));
ValueError: substring not found
```
12. S.isalnum() 
Hàm này có tác dụng kiểm tra xem một chuỗi có phải là chứa duy nhất các ký tự chữ hoặc chuỗi hay không? Nó sẽ trả về `True` nếu chuỗi chỉ chứa các ký tự chữ hoặc số. Và ngược lại nó sẽ trả về `False` nếu chuỗi chứa ký tự khác chuỗi và số.
```py
>>> string = 'i am finn'
>>> print(string.isalnum());
True
>>> string = 'i am finn!'
>>> print(string.isalnum());
False
```
13. S.isalpha()
Hàm này có tác dụng kiểm tra xem một chuỗi có phải là chứa duy nhất các ký tự chữ hay không? Nó sẽ trả về `True` nếu chuỗi này chỉ chứa duy các ký tự chữ trong bảng chữ cái, và sẽ trả về `False` nếu nó chứa số hoặc ký tự đặc biệt khác.
```py
>>> string = 'i am finn69'
>>> print(string.isalpha());
False
>>> string = 'i am finn'
>>> print(string.isalpha());
True
```
14. S.isdecimal()
Hàm này trả về `True` nếu tất cả các ký tự trong một chuỗi là các ký tự thập phân. Nếu không, nó sẽ trả về `False`.
```py
>>> string = '69'
>>> print(string.isdecimal());
True
>>> string = '0x37'
>>> print(string.isdecimal());
False
```
15. S.isdigit()
Hàm này có tác dụng kiểm tra xem một chuỗi có phải là chứa duy nhất các chữ số hay không? Nó sẽ trả về `True` nếu đúng và `False` nếu sai.
```py
>>> string = '69'
>>> print(string.isdigit());
True
>>> string = 'hello'
>>> print(string.isdigit());
False
```
16. S.isidentifier() 
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
17. S.islower() 
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
18. S.isupper().
Hàm này có tác dụng kiểm tra xem một chuỗi có phải là in Hoa hay không? Nó sẽ trả về `True` nếu đúng và `False` nếu sai.
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
19. S.isnumeric() 
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
20. S.isprintable() 
Hàm trả về `True` nếu tất cả các ký tự trong chuỗi có thể in được hoặc chuỗi rỗng. Nếu không, nó sẽ trả về `False`.
Các ký tự chiếm không gian in trên màn hình được gọi là các ký tự có thể in. Ví dụ:
+ chữ cái và ký hiệu
+ chữ số
+ chấm câu
+ khoảng trắng
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
21. S.isspace()
Hàm này có tác dụng kiểm tra xem một chuỗi có phải chỉ chứa duy nhất các ký tự khoảng trắng không? Nó sẽ trả về `True` nếu đúng và `False` nếu sai.
```py
string = '         '
print (string.isspace());
True
string = 'Xin chào'
print (string.isspace());
False
```
22. S.istitle()
Hàm này có tác dụng kiểm tra xem một chuỗi có phải là title hay không, chuỗi title là chuỗi có các chữ cái đầu đều được in hoa. Nó sẽ trả về `True` nếu đúng và ngược lại `False` nếu sai.
```py
string = 'xin chào'
print(string.istitle())
False
string = 'Xin Chào'
print(string.istitle())
True
```
23. S.join(iterable)
Hàm này có tác dụng join iterable bởi string
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
24. S.ljust(width [, fill])
Hàm này có tác dụng trả về một chuỗi với độ dài `width` được xác định, nếu chuỗi được chọn nhỏ hơn `width` thì nó sẽ sử dụng `fill` để bù chỗ thiếu đó về phía bên phải của chuỗi.
```py
string = "Xin Chào"
print(string.ljust(15, "-"))
'Xin Chào-------'
```
25. S.lower()
Hàm này có tác dụng chuyển đổi chuỗi về dạng in thường.
```py
string = "Xin Chào"
print(string.lower())
xin chào
```
26. S.upper()
Hàm này có tác dụng chuyển đổi chuỗi sang dạng in hoa.
```py
string = "Xin Chào"
print(string.upper())
XIN CHÀO
```
27. S.lstrip([chars])
Hàm này có tác dụng loại bỏ đi các ký tự `char` ở phía đầu của chuỗi.Mặc định thì `char` sẽ bằng `khoảng trắng` (white space)
```py
string = "  Xin Chào"
print(string.lstrip())
Xin Chào
string = "----Xin Chào"
print(string.lstrip('-'))
Xin Chào
```
28. S.maketrans(x[, y[, z]])
Hàm này có tác dụng tạo ra các translation cho chuỗi. Dùng kết hợp với phương thức `translate()`.
Trong đó:
+ `in` là chuỗi các ký tự các bạn cần tìm.
+ `out` là chuỗi chứa các ký tự các bạn cần thay thế.
Xem ví dụ ở mục `S.translate()`
29. S.partition(sep)
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
30. S.replace(old, new [, count])
Hàm này có tác dụng tìm kiếm và thay thế chuỗi tìm được bằng chuỗi mới.Trong đó:
+ `old` là chuỗi mà bạn cần tìm kiếm trong string.
+ `new` là chuỗi mà bạn cần thay thế cho chuỗi old tìm được.
+ `count` là số lượng từ có thể thay thế tối đa.
```py
string = "Hello *!"
print(string.replace('*', 'World'))
Hello World!
string = "A A A"
print(string.replace('A', 'Hello', 2))
Hello Hello A
```
31. S.rfind(sub [,start [,end]])
Tương tự như hàm `find()`, nhưng hàm này nó sẽ trả về `index` của chuỗi cuối cùng tìm được trong chuỗi. Cú pháp sử dụng tương tự hàm `find()`.
```py
string = "Xin chào"
print(string.rfind('c'))
4
```
32. S.rindex(sub [, start [, end]])
Tương tự như hàm `index()`,nhưng hàm này nó sẽ trả về `index` của chuỗi cuối cùng tìm được trong chuỗi. Cú pháp sử dụng tương tự hàm `index()`.
```py
string = "Hello"
print(string.rindex('l'))
4
```
33. S.rjust(width [, fill])
Tương tự hàm `ljust()` nhưng chỉ có điều là nó sẽ bù về phía bên trái của chuỗi.
```py
string = "Hello"

print(string.rjust(10, "-"))
-----Hello
```
34. S.rpartition(sep)
35. S.rsplit([sep[, maxsplit]])
Hàm tách chuỗi ở lần xuất hiện cuối cùng của chuỗi đối số và trả về một tuple chứa phần trước dấu phân tách, chuỗi đối số và phần sau dấu tách.
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
36. S.rsplit([sep[, maxsplit]])
Hàm tách chuỗi từ bên phải tại dấu tách đã chỉ định và trả về một danh sách các chuỗi.
+ `sep`: Dấu phân tách. Phương thức `rsplit()` tách chuỗi bắt đầu từ bên phải tại dấu tách được chỉ định. Nếu dấu phân cách không được chỉ định, bất kỳ khoảng trắng (khoảng trống, dòng mới, v.v.) là một dấu tách.
+ `maxsplit`: xác định số lượng chia tách tối đa. 
Giá trị mặc định của maxsplit là -1, có nghĩa là, không có giới hạn về số lượng phân chia.
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
37. S.rstrip([chars])
Tương tự như lstrip(), chỉ khác là `rstrip()` nó sẽ loại bỏ `char` ở phần cuối của chuỗi.
```py
string = "Hello World    "
print(string.rstrip())
Hello World
string = "Hello World----"
print(string.rstrip('-'))
Hello World
```
38. S.split([sep [,maxsplit]])
Hàm này có tác dụng tác chuỗi thành mảng bởi các char.
Trong đó:
+ char là ký tự các bạn tìm và tách chuỗi bởi nó. Mặc định thì `char = khoảng trắng`.
+ max là số lượng chuỗi tách tối đa.
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
39. S.splitlines([keepends])
Hàm này sẽ tách chuỗi bởi các ký tự \n.Trong đó: `keepends` là số lần có thể cắt tối đa.
```py
string = "Hello\nWorld\n!"
print(string.splitlines())
['Hello', 'World', '!']
```
40. S.startswith(prefix [, start [, end]])
Hàm này có tác dụng kiểm tra xem chuỗi hoặc khoảng chuỗi có được bắt đầu bằng ký tự nào đó hay không. Nó sẽ trả về `True` nếu đúng và `False` nếu sai.Trong đó:
+ `str` là chuỗi các bạn cần xác thực xem có phải chuỗi bắt đầu không.
+ `strart` là index bắt đầu chuỗi cần so sánh. Mặc định thì `start = 0`.
+ `end` là index kết thúc chuỗi cần so sánh.  Mặc định thì `end = len()`.
```py
string = 'I am finn'
print(string.startswith('I'));
True
print(string.startswith('m', 3, 10));
False
```
41. S.strip([chars])
Hàm này là sự kết hợp của `lstrip()` và `rstrip()`. Nó sẽ lại bỏ các ký tự char ở cả hai đầu của chuỗi.
```py
string = "   Hello World    "
print(string.strip())
Hello World
string = "----Hello World----"
print(string.strip('-'))
Hello World
```
41. S.swapcase()
Hàm này có tác dụng chuyển đổi chuỗi sang dạng nghịch đảo của nó (nghịch đảo ở đây là hoa - thường).
```py
string = "hello world"
print(string.swapcase())
HELLO WORLD
string = "HELLO WORLD"
print(string.swapcase())
hello world
```
42. S.title()
Hàm này có tác dụng chuyển đổi chuỗi sang kiểu `title` (xem ở trên).
```py
string = "hello world"
print(string.title())
Hello World
```
43. S.translate(map)
Hàm này có tác dụng thực thi việc dịch chuỗi. Dùng kết hợp với phương thức `makestrans()`.
```py
inputs = "abcdefghijklmnopqrstuxyz";
outputs = "ABCDEFGHIJKLMNOPQRSTUXYZ";
string = "Hello World";
trans = string.maketrans(inputs, outputs)
print(string.translate(trans))
HELLO WORLD
```
44. S.zfill(width)
Hàm này có tác dụng như hàm `ljust()` , nhưng nó sẽ chỉ thêm được các ký tự zero (số 0) và trước chuỗi thôi.
```py
>>> string = "hello"
>>> print(string.zfill(10))
'00000hello'
```

# Hàm dựng sẵn string
