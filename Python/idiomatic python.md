<h1 align="center"> Viết code Python theo kiểu Idiomatic </h1>

"idiomatic python" có nghĩa là viết code theo cách mà cộng đồng Python cho rằng code nên được viết như vậy.
Bài viết sau đây sẽ trình bày một số khái niệm cơ bản giúp viết code Python một cách chuyên nghiệp

## ▶ Cấu trúc điều khiển và hàm 

### ▶ Tránh việc so sánh trực tiếp với True, False hoặc None

Với mỗi đối tượng, luôn luôn sẵn có hoặc bạn có thể tự định nghĩa "đúng-sai" cho nó.Việc kiểm tra điều kiện là đúng hay sai phụ thuộc vào định nghĩa "đúng-sai"của đối tượng,

Những định nghĩa được xem là sai (False):

- `None`

- `False`

- `0` cho kiểu dữ liệu số.

- `[]` (list rỗng), `{}` ( dict rỗng), `()` ( tuple rỗng), `set()` ( set rỗng), `""` ( xẫu rỗng), `{}` (dict rỗng).

- Kết quả `0` hoặc `None` được trả về bởi phương thức `__len__` hoặc `__nonzero__`. hai phương thức này cho phép chúng ta tự định nghĩa đúng sai cho các đối tượng.

Tất cả các kết quả khác với kết quả ở trên đều được coi là đúng (`True`).

Câu lệnh `if` sử dụng `đúng-sai` nên bạn nên sử dụng đúng sai của chính đối tượng, ví dụ:

```py
if foo:
```

Thay vì

```py
if foo == True:
```

kết quả là bạn có thể tránh việc phải so sánh trược tiếp với những giá trị như `False`, `None` .

Tuy nhiên có một số trường hợp việc so sánh với `None` nên được thực hiện. Ví dụ, một hàm cần kiểm tra xem tham số có giá trị mặc định là `None` đã thực sự được truyền giá trị vào hay chưa. Ví dụ:

```py
>>> def insert_value(value, position=None):
...     if possition is not None:
...
```

Điều gì xảy ra khi chúng ta sử dụng `if possition:` ? Trong trường hợp này nếu chúng ta truyền vào giá trị `0` cho `possition` thì sẽ gây ra lỗi bởi vì hàm sẽ hoặt động như giá trị `possition` chưa được truyền vào, bởi vì `0` cũng được coi là sai.

Ví dụ trên ta sử dụng `is not` bở vì việc so sánh với `None` luôn phải sử dụng với `is` hoặc `is not` chứ không sử dụng `==`. Tham khảo [PEP 8](https://www.python.org/dev/peps/pep-0008/#programming-recommendations)

---

### ▶ Tránh việc lặp lại biến trong lệnh `if`:

Khi bạn muốn kiểm tra một biến với nhiều giá trị trong một lệnh, thay vì lặp lại biến bạn hãy sử dụng một `iterable`  sẽ giúp code của bạn sáng sủa hơn.

**Có hại:**

```py
>>> a = False
>>> name = 'An'
>>> if name == 'An' or name == 'Hoang' or name == 'Minh':
...     a = True
```

**Nên dùng:**

```py
>>> a = False
>>> name = 'An'
>>> if name in ('An','Hoang','Minh'):
...     a = True
```

### ▶ Tránh việc sử dụng lệnh con của câu điều kiện cùng dòng với hai dấu chấm

Hãy sử dụng `indent` để phân biệt các khối lệnh, Các câu lệnh `if`, `else`, `elif` nên ở riêng một dòng và không có câu lệnh nào sau dấu `:`.

**Có hại:**

```py
>>> if True: print "hello baby"
```

**Nên dùng:**

```py
>>> if True:
>>>		print "hello baby"
```

---

## ▶ Vòng lặp for 

### ▶ Sử dụng hàm enumerate thay vì tạo một biến "index"

Đối với các ngôn ngữ khác, ta thường tạo ra biến "index" cho vòng lặp, tuy nhiên Python sẽ giúp ta làm điều đó với `enumerate`.

**Có hại:**

```py
>>>a = ['a','b','c']
>>>index = 0
>>>for element in a:
>>>...print element, index
>>>...index +=1
```

**Nên dùng:**

```py
>>>a = ['a','b','c']
>>>for element,index in enumerate(a):
>>>...print element, index
```

### ▶ Sử dụng `else` để thực thi code sau khi vòng lặp `for` kết thúc

Một điều ít người biết đó là vòng lặp `for` cũng có thể có mệnh đề `else`.Mệnh đề `else` được thực hiện sau khi vòng lặp kết thúc, trừ khi nó được ngắt bằng lênh `break`.
Điều này cho phép bạn kiểm tra điều kiện bên trong vòng lặp `for`, `break` nếu thảo mãn điều kiện nào đó và câu lệnh `else` để thực thi nếu không có điều kiện thỏa mãn.

```py
>>>for x in range(10):
>>>		if x > 10:
>>>  		print x
>>> else:
>>>		print " Không có giá trị nào lớn hơn 10"
```

**Output***
```py
>>>Không có giá trị nào lớn hơn 10
```

---

## ▶ Hàm

### ▶ Tránh sử dụng '', [], và {} làm giá trị mặc định cho tham số

**Có hại:**

```py
>>> def f(a, L=[]):
>>>		L.append(a)
>>> 	return L
>>> print f(1)
>>> print f(2)
```

**Output**
```py
>>> [1]
>>> [1,2]
```

**Nên dùng:**

```py
>>> def f(a, L=None):
>>> 	if L is None:
>>> 		L=[]
>>>		L.append(a)
>>> 	return L
>>> print f(1)
>>> print f(2)
```

**Output**
```py
>>> [1]
>>> [2]
```

### ▶ Sử dụng `*args` và `**kwargs` để nhận tham số với ước lượng tùy ý

### ▶ Sử dụng `*` đại diện cho "phần còn lại" của `list`

---

## ▶ Làm việc với dữ liệu

### ▶ Sử dụng `dict comprehension` để xây dựng `dict` rõ ràng và hiệu quả

`list comprehension` còn được biết đến nhiều hơn là `dict comprehension` .Mục đích là xây dựng d`dict` mới từ `dict` cũ một cách dễ dàng với cú pháp `comprehension`.

**Có hại:**

```py
>>> user_name = {}
>>>for user in user_list:
>>>		if user.name:
>>>			user_name[user.id] = user.name
```

**Nên dùng:**


```py
>>> user_name = {user.id : user.name for user in users_list if user.name} 
```

Còn với list ta có thể dùng như sau:

```py
>>> [i for i in range(10) if i%2 == 0]
```

Hoặc:

```py
>>> [i if i%2==0 else i*2 for i in range(10)]
```


### ▶ Nên sử dụng hàm `format` để định dạng xâu

Có cách cơ bản để định dạng xâu. Cách làm tệ nhất là sử dụng toán tử `+` hoặc `,` để nấu xâu. Một cách khá hơn là sử dụng format "kiểu cũ", đó là định dạng chuỗi mà sử dụng `%` như các ngôn ngữ khác.

Nhưng với python nên sử dụng hàm `format`. Với hàm `format` chsung ta có thể đặt tên cho các `placehodel`, truy cập vào các thuộc tính, độ dài,độ rộng và nhiều thứ khác.

**Có hại:**

```py
>>> print 'Name:' + user.name + 'Age:' + str(user.age).
>>>print "Name: %s, Age: %i" %(user.name, user.age)
```

**Nên dùng:**

```py
>>> print "Name: {user.name}, Age: {user.age}".format(use)
```

### ▶ Sử dụng `''.join` để tạo xâu từ các phần tử của `list`

```py
>>> a = ['an','minh','do']
>>> b = ''.join(a)
```

**Output**

```py
>>> "an minh do"
```

### ▶ `Chain` các hàm của xâu giúp việc chuyển đổi xâu rõ ràng hơn.

Khi chúng ta áp dụng liên tiếp các chuyển đổi của 1 xấu, việc `chain` các hàm giúp chúng rõ ràng hơn là sử dụng các biến lưu tạm.Tuy nhiên, quá nhiều hàm liên tiếp lại khó theo dõi.

**Có hại:**

```py
>>> a = "Hôm nay là thứ 7"
>>> b = a.strip()
>>> b = b.upper()
>>> b= b.replace(':', 'by')
```

**Nên dùng:**

```py
>>> a = "Hôm nay là thứ 7"
>>> b = a.strip().upper().replace(':', 'by')
```

---

## ▶ Class

### ▶ Sử dụng dấu gạch dưới cho tên biến và phương thức để đánh dấu `private`.

Tất cả mọi thuộc tính của class đều là `public` trong python. Mọi người có thể dễ dàng thêm thuộc tính vào một class kể cả khi nó được định nghĩa rồi.Hơn nữa, nếu một class được kế thừa từ class cha, những class con có thể vô tình thay đổi thuộc tính trong class cha.

Thuộc tính `protected` nghĩa là không được dùng trực tiếp từ bên ngoài, sẽ bắt đầu bằng dấu gạch dưới (`_`).

Thuộc tính `private` nghĩa là không được truy cập từ các class con, sẽ bát đầu bằng 2 dấu gạch dưới (`__`).

### ▶ Định nghĩa phương thức `__str__` để hiển thị class dễ hiểu hơn.

Khi định nghĩa 1 class mà nó được sử dụng với hàm `print()`, thì mặc định Python sẽ in ra các thông tin không cần thiết. Vì vậy, bạn nên định nghĩa phuwong thức `__str__`, bạn có thể thay đổi việc hàm `print` đối với các đối tượng của clss mà bạn muốn.

**Có hại:**

```py
>>>class Point():
>>>		def __init(self,x,y):
>>>			self.x = x
>>>			self.y = y
>>>p = Point(1,2)
>>>print p
>>># Prints '<__main__.Point object at 0x91ebd0>'
```

**Nên dùng:**

```py
>>>class Point():
>>>    def __init__(self, x, y):
>>>        self.x = x
>>>        self.y = y
>>>    def __str__(self):
>>>        return '{0}, {1}'.format(self.x, self.y)
>>>p = Point(1, 2)
>>>print (p)
>>># Prints '1, 2
```

### ▶ Tránh việc sử dụng biến tạm khi `swap` hai giá trị

**Có hại:**

```py
>>>foo = 'Foo'
>>>bar = 'Bar'
>>>temp = foo
>>>foo = bar
>>>bar = temp
```

**Nên dùng:**
```py
>>>foo = 'Foo'
>>>bar = 'Bar'
>>>(foo, bar) = (bar, foo)
```

### ▶ Sử dụng ký tự hoa để định nghĩa hằng số global

Nên sử dụng ký tự hoa cho các hằng số được định nghĩa ở tầng module để tránh nhầm lẫn với các tên được import.

### ▶ Tránh sử dụng nhiều lệnh trên cùng một dòng

---

## ▶ Script thực thi

### ▶ Sử dụng `sys.exet` trong script để trả về đúng mã lỗi

Chúng ta có thể cho một loạt code vào bên trong `if __name__ == '__main__'` mà không trả về bất cứ thứ gì

Hãy sử dụng hàm chính chứa code để chạy. Sử dụng `sys.exit`  bên trong hàm `if __name__ == '__main__'` để tar về mã lỗi, và trả về 0 nếu mọi chuyện bình thường.

**Có hại:**

```py
>>>if __name__ == '__main__':
>>>    import sys
>>>    if len(sys.argv) > 1:
>>>        argument = sys.argv[1]
>>>        if result:
>>>           do_stuff_with_result(result)
```

**Nên dùng:**

```py
>>>def main():
>>>   import sys
>>>    if len(sys.argv) < 2:)
>>>        sys.exit('You forgot to pass an argument')
>>>    argument = sys.argv[1]
>>>    result = do_stuff(argument)
>>>    if not result:
>>>        sys.exit(1)
>>>    do_stuff_with_result(result)
>>>    return 0
>>>if __name__ == '__main__':
>>>    sys.exit(main())
```


### ▶ Sử dụng `if __name__ == '__main__'` để làm file vừa có thể chạy vừa có thể import vào file khác

### ▶ Sử dụng import tuyệt đối thay vì tương đối

-Import tuyệt đối là chỉ rõ vị trí của module( ví dụ `<package>.<module>.<submodule>`)

-Import tương đối là xác định vị trí của module so với module hiện tại trong hệ thống (ví dụ `from ... import ...`)

-Không sử dụng `from ... import *` để import nội dung module

### ▶ Sắp xếp các lệnh import theo thứ tự chuẩn

1. Các module thư viện chuẩn.
2. Các module thư viện bên thứ 3 được cài trong `site-packages`.
3. Các module trong dự án hiện tại.
