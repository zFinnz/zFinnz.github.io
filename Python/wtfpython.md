<p align="center"><img src="/images/logo.png" alt=""></p>
<h1 align="center"> What the f*ck Python! 🐍 </h1>
<p align="center"> Một bộ sưu tập thú vị các đoạn mã gây ngạc nhiên và các tính năng Python ít được biết đến.</p>

Python, là ngôn nhữ lập trình cấp cao và là ngôn ngữ thông dịch, cung cấp cho lập trình viên nhiều tính năng hấp dẫn.Nhưng đôi khi, kết quả của những đoạn mã Python lại không giống như người dùng thông thường nghĩ.

Đây là một dự án thú vị để thu thập các ví dụ tiêu biểu và phản ánh trực quan các tính năng ít được biết đến hơn trong Python, cố gắng thảo luận chính xác những gì đang xảy ra !

Nếu bạn là một lập trình viên Python có kinh nghiệm, bạn có thể quen thuộc với những ví dụ này, và những ví dụ này sẽ giúp bạn hồi tưởng lại những kỷ niệm ngọt ngào của bạn về những lỗi bug này :sweat_smile:

Nếu bạn là người đọc mới, bạn có thể tìm hiểu những lỗi sau để tránh mắc phải trong tương lai.

Nào, chúng ta cùng bắt đầu...

# Mục Lục

- [👀 Ví dụ](#-ví-dụ)
  - [Phần 1: Hãy căng não bạn ra!](#phần-1-hãy-căng-não-bạn-ra)
    - [▶ Thỉnh thoảng chuỗi rất khó vận dụng](#-thỉnh-thoảng-chuỗi-rất-khó-vận-dụng)
    - [▶ Thời gian cho hàm băm](#-thời-gian-cho-hàm-băm)
    - [▶ Trong sâu thẳm, chúng ta đều giống nhau!.](#-trong-sâu-thẳm-chúng-ta-đều-giống-nhau-)
    - [▶ Sai lệch thời gian đánh giá](#-sai-lệch-thời-gian-đánh-giá)
    - [▶ `is` `is not` là gì!](#-is-is-not-là-gì)
    - [▶ Hàm output bị dính](#-hàm-output-bị-dính)
    - [▶ `is not ...` không phải là `is (not ...)`](#-is-not--không-phải-là-is-not-)
    - [▶ Dấu phảy thú vị](#-dấu-phảy-thú-vị)
    - [▶ Không bắc cầu!!](#-không-bắc-cầu)
    - [▶ Một nửa ba - chuỗi trích dẫn](#-một-nửa-ba--chuỗi-trích-dẫn)
    - [▶ Chuyện gì xảy ra với kiểu Booleans?](#-chuyện-gì-xảy-ra-với-kiểu-booleans)
    - [▶ Thuộc tính Class và thuộc tính instance](#-thuộc-tính-class-và-thuộc-tính-instance)
    - [▶ Thay đổi sự bất biến!](#-thay-đổi-sự-bất-biến)
    - [▶ Biến bị xóa khỏi phạm vi bên ngoài](#-biến-bị-xóa-khỏi-phạm-vi-bên-ngoài)
    - [▶ Khi `True` lại là `False`](#-khi-true-lại-là-false)
    - [▶ Từ đầy đến không có gì trong một chỉ dẫn...](#-từ-đầy-đến-không-có-gì-trong-một-chỉ-dẫn)
    - [▶ Bạn có thể đoán được điều này không?](#-bạn-có-thể-đoán-được-điều-này-không)
  - [Phần 2: Cẩn thận sát thương diện rộng!](#phần-2-cẩn-thận-sát-thương-diện-rộng)
    - [▶ Chỉnh sửa một từ điển trong khi Iterating](#-chỉnh-sửa-một-từ-điển-trong-khi-iterating)
    - [▶ Xóa một phần tử trong list trong khi iterating](#-xóa-một-phần-tử-trong-list-trong-khi-iterating)
    - [▶ Rò rỉ biến vòng lặp!](#-rò-rỉ-biến-vòng-lặp)
    - [▶ Hãy coi chừng các đối số mặc định có thể thay đổi!](#-hãy-coi-chừng-các-đối-số-mặc-định-có-thể-thay-đổi)
    - [▶ Cùng toán hạng, nhưng là hai chuyện khác nhau!](#-cùng-toán-hạng-nhưng-là-hai-chuyện-khác-nhau)
    - [▶ Vượt qua khỏi phạm vi biến](#-vượt-qua-khỏi-phạm-vi-biến)
    - [▶ Hãy cẩn thận với toán tử](#-hãy-cẩn-thận-với-toán-tử)
    - [▶ Tên quyết định bỏ qua phạm vi biến](#-tên-quyết-định-bỏ-qua-phạm-vi-biến)
    - [▶ Cắt xẻ thời gian!](#-cắt-xẻ-thời-gian-)
    - [▶ += có nhanh hơn](#--có-nhanh-hơn)
    - [▶ Cấu trúc rõ ràng của chuối](#-cấu-trúc-rõ-ràng-của-chuối)


# 👀 Ví dụ



### ▶ Thỉnh thoảng chuỗi rất khó vận dụng! *

1\.
```py
>>> a = "hello_world"
>>> id(a)
91596096L
>>> id("hello" + "_" + "world") # 2 id trên đều giống nhau.
91596096L
```

2\.
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

3\.
```py
>>> 'a' * 20 is "aaaaaaaaaaaaaaaaaaaa"
True
>>> 'a' * 21 is "aaaaaaaaaaaaaaaaaaaaa"
False
>>>
```

Thật khó hiểu, đúng không?
#### 💡 Giải thích:
+ Hành vi như vậy là do tối ưu hóa CPython (gọi là chuỗi nội trú) cố gắng sử dụng các đối tượng không thay đổi hiện có trong một số trường hợp hơn là tạo đối tượng mới mỗi lần.
+ Sau khi được nội trú, nhiều biến có thể trỏ đến cùng một đối tượng chuỗi trong bộ nhớ (do đó tiết kiệm bộ nhớ).
+ Trong các đoạn mã trên, chuỗi nội trú được ngầm thực hiện. Quyết định khi tham chiếu vào một nội trú sẽ phụ thuộc vào một số điều kiện sau mà sẽ được nội trú hoặc không:
  * Tất cả chuỗi có chiều dài 0 và 1 sẽ được nội trú.
  * Chuỗi được nội trú trong thời gian biên dịch (`'wtf'` sẽ được nội trú nhưng `''.join(['w', 't', 'f']` sẽ không được nội trú)
  * Các chuỗi không bao gồm kí tự ASCII, chữ số hoặc dấu gạch dưới, sẽ không được nội trú. Điều này giải thích tại sao `'wtf!'` không được nội trú do có kí tự `!`.
  * Những chuỗi có chiều dài lớn hơn 20 sẽ không được nội trú.

  ---

  ### ▶ Thời gian cho hàm băm!

  1\.
```py
>>> some_dict = {}
>>> some_dict[5.5] = "Ruby"
>>> some_dict[5.0] = "Php"
>>> some_dict[5] = "Python"
```

**Output:**
```py
>>> some_dict[5.5]
'Ruby'
>>> some_dict[5.0]
'Python'
>>> some_dict[5]
'Python'
```

"Php" đã đi đâu?

#### 💡 Giải thích:

* Bộ từ điển python kiểm tra tính bình đẳng và so sánh giá trị của hàm băm để xác định xem hai khóa có giống nhau không.
* Các đối tượng bất biến có giá trị giống nhau luôn có cùng giá trị hàm băm.

```py
>>> 5.0 == 5
True
>>> hash(5.0) == hash(5)
True
>>>
```
  **Chú ý:** Các giá trị khác nhau cũng có thể có cùng hàm băm (gọi là va chạm hàm băm).
* Khi câu lệnh `some_dict[5] = "Python"` được thực hiện thì giá trị "Php" được ghi đè bởi "Python" bởi vì Python nhận định `5` và `5.0` là cùng một khóa trong `some_dict`.

---

### ▶ Trong sâu thẳm, chúng ta đều giống nhau! *

```py
class WTF:
	pass
```

**Output:**
```py
>>> WTF() == WTF() # 2 trường hợp khác nhau không thể bằng nhau
False
>>> WTF() is WTF() # danh tính cũng sẽ khác nhau
False
>>> hash(WTF()) == hash(WTF())
True
>>> id(WTF()) == id(WTF())
True
```

#### 💡 Giải thích:

* When `id` được gọi, Python đã tạo ra một đối tượng là lớp `WTF` và truyền nó tới hàm `id`. Các `id` chức năng mất đi `id` của nó (chính là vị trí bộ nhớ của nó), và xóa đi các đối tượng. Đối tượng sẽ bị phá hủy.

* Khi chúng ta thực hiện việc này hai lần liên tiếp, Python sẽ phân bổ vị trí bộ nhớ tương tự cho đối tượng thứ hai này.Kể từ khi (trong CPython) `id` sử dụng vị trí bộ nhớ như là `id` đối tượng, `id` của 2 đối tượng là như nhau.

* Vì vậy, `id` của một đối tượng là duy nhất trong suốt vòng đời của đối tượng. Sau khi đối tượng bị phá hủy, hoặc trước khi nó được tạo ra, có thể những đối tượng khác có thể có cùng một `id`.

* Nhưng tại sao `is` được đánh giá là sai? Hãy xem đoạn mã sau.
  ```py
  class WTF(object):
    def __init__(self): print("I ")
    def __del__(self): print("D ")
  ```

  **Output:**
  ```py
  >>> WTF() is WTF()
  I I D D
  >>> id(WTF()) == id(WTF())
  I D I D
  ```
  Như chúng ta có thể thấy, thứ tự mà các vật thể bị phá hủy là điều tạo ra sự khác biệt ở đây.

### ▶ Sai lệch thời gian đánh giá

```py
array = [1, 8, 15]
g = (x for x in array if array.count(x) > 0)
array = [2, 8, 22]
```

**Output:**
```py
>>> print(list(g))
[8]
```

#### 💡 Giải thích:

- Trong biểu thức Generator, mệnh đề `in` được đánh giá tại thời điểm khai báo, nhưng mệnh đề điều kiện được đánh giá khi chạy.
- Vì vậy, trước thời gian chạy, mảng được gán cho danh sách `[2, 8, 22]`, và trong số `1`, `8` và `15`, chỉ có đếm `8` lớn hơn 0, vì vậy Generator chỉ tạo ra `8`.

---

### ▶ `is` `is not` là gì!

Sau đây là một ví dụ kinh điển.

```py
>>> a = 256
>>> b = 256
>>> a is b
True

>>> a = 257
>>> b = 257
>>> a is b
False

>>> a = 257; b = 257
>>> a is b
True
```

#### 💡 Giải thích:

**Sự khác nhau giữa `is` và`==`**

* `is` là toán tử kiểm tra xem cả hai toán tử có cùng tham chiếu đến một đối tượng (nghĩa là nó kiểm tra xem danh tính của các toán hạng có khớp hay không).
* `==` là toán tử kiểm tra giá trị của hai toán hạng.
* Vậy `is` dành cho tham chiếu danh tính và `==` dành cho tham chiếu giá trị. Ví dụ sau sẽ chúng minh điều đó,
  ```py
  >>> [] == []
  True
  >>> [] is [] # Hai danh sách trống nằm ở hai vị trí bộ nhớ khác nhau.
  False
  ```

**`256` là một đối tượng sẵn có nhưng `257` thì không**

Khi bạn bắt đầu Python thì các số từ `-5` đến `256` sẽ được phân bổ. Những con số này được sử dụng rất nhiều nên nó sẽ được dựng sẵn.

```py
>>> id(256)
10922528
>>> a = 256
>>> b = 256
>>> id(a)
10922528
>>> id(b)
10922528
>>> id(257)
140084850247312
>>> x = 257
>>> y = 257
>>> id(x)
140084850247440
>>> id(y)
140084850247344
```

Ở đây trình thông dịch không đủ thông minh trong khi thực hiện `y = 257` để nhận ra rằng chúng ta đã tạo ra một số nguyên giá trị `257`, và nó sẽ tiếp tục tạo ra một đối tượng khác trong bộ nhớ.

**Cả `a` và `b` sẽ cùng tham khảo một đối tượng khi khởi tạo cùng một giá trị trên một dòng.**

```py
>>> a, b = 257, 257
>>> id(a)
140640774013296
>>> id(b)
140640774013296
>>> a = 257
>>> b = 257
>>> id(a)
140640774013392
>>> id(b)
140640774013488
```

* Khi `a` và `b` được thiết lập là 257 trong cùng một dòng, trình thông dịch Python tạo ra một đối tượng mới, sau đó tham khảo hai biến cùng một lúc. Nếu bạn khai báo trên 2 dòng riêng biệt, nó sẽ không "biết" rằng đã có 257 như một đối tượng.
* Đó là một trình biên dịch được tối ưu hóa và áp dụng cho môi trường tương tác.Khi bạn nhập vào 2 dòng và thông dịch trực tiếp, chúng sẽ được biên dịch riêng, do đó được tối ưu hóa riêng. Còn trong tệp tin `.py` bạn sẽ không thấy điều này bởi vì cả tập tin sẽ được biên dịch cùng một lúc.

### ▶ Hàm output bị dính

```py
funcs = []
results = []
for x in range(7):
    def some_func():
        return x
    funcs.append(some_func)
    results.append(some_func())

funcs_results = [func() for func in funcs]
```

**Output:**
```py
>>> results
[0, 1, 2, 3, 4, 5, 6]
>>> funcs_results
[6, 6, 6, 6, 6, 6, 6]
```
Ngay cả khi các giá trị của x là khác nhau trong mỗi lần lặp lại trước khi nối `some_func` vào `funcs`, tất cả các hàm trả về 6.

//Hoặc

```py
>>> powers_of_x = [lambda x: x**i for i in range(10)]
>>> [f(2) for f in powers_of_x]
[512, 512, 512, 512, 512, 512, 512, 512, 512, 512]
```

#### 💡 Giải thích:

- Khi xác định một hàm bên trong một vòng lặp sử dụng biến vòng lặp trong thân nó, việc đóng vòng lặp của hàm lặp với biến, chứ không phải giá trị của nó. Vì vậy, tất cả các chức năng sử dụng giá trị mới nhất được gán cho biến để tính toán.
- Để có được kết quả mong muốn bạn có thể vượt qua biến vòng lặp như một biến được đặt tên cho hàm.Tại sao nó hoạt động? Bởi vì điều này sẽ định nghĩa biến một lần nữa trong phạm vi hàm.

    ```py
    funcs = []
    for x in range(7):
        def some_func(x=x):
            return x
        funcs.append(some_func)
    ```

    **Output:**
    ```py
    >>> funcs_results = [func() for func in funcs]
    >>> funcs_results
    [0, 1, 2, 3, 4, 5, 6]
    ```

---
### ▶ `is not ...` không phải là `is (not ...)`

```py
>>> 'something' is not None
True
>>> 'something' is (not None)
False
```

#### 💡 Explanation

- `is not` là toán tử nhị phân duy nhất, và có hành vi khác với sử dụng `is` và `not` .
- `is not`đánh giá là `False` nếu các biến ở hai bên của toán tử cùng trỏ đến cùng một đối tượng và `True` nếu không.

---

### ▶ Dấu phảy thú vị

**Output:**
```py
>>> def f(x, y,):
...     print(x, y)
...
>>> def g(x=4, y=5,):
...     print(x, y)
...
>>> def h(x, **kwargs,):
  File "<stdin>", line 1
    def h(x, **kwargs,):
                     ^
SyntaxError: invalid syntax
>>> def h(*args,):
  File "<stdin>", line 1
    def h(*args,):
                ^
SyntaxError: invalid syntax
```

#### 💡 Giải thích:

- Trong Python dấu phẩy sau không phải là luôn luôn hợp lệ trong danh sách tham số chính thức.

---

### ▶ Không bắc cầu!

```py
x = True
y = False
```

**Output:**
```py
>>> not x == y
True
>>> x == not y
  File "<input>", line 1
    x == not y
           ^
SyntaxError: invalid syntax
```

#### 💡 Giải thích:

* Thứ tự ưu tiên của các toán tử ảnh hưởng đến sự ưu tiên của thuật toán, và toán tử `==` được ưu tiên hơn toán tử `not` trong Python.
* Vì vậy `not x == y` không tương đương với `not (x == y)`và kết quả `not (True == False)` sẽ là `True`.
* Nhưng `x == not y` sẽ sinh ra `SyntaxError` bởi vì nó được coi là tương đương với `(x == not) y` không phải là `x == (not y)`.

---

### ▶ Một nửa ba- chuỗi trích dẫn

**Output:**
```py
>>> print('wtfpython''')
wtfpython
>>> print("wtfpython""")
wtfpython
>>> # Những lệnh sau sẽ gây ra lỗi
>>> # print('''wtfpython')
>>> # print("""wtfpython")
```

#### 💡 Giải thích:
+ Python ngầm hỗ trợ [string literal concatenation](https://docs.python.org/2/reference/lexical_analysis.html#string-literal-concatenation), Ví dụ,
  ```
  >>> print("wtf" "python")
  wtfpython
  >>> print("wtf" "") # or "wtf"""
  wtf
  ```
+ `'''` và `"""` cũng là bộ phân tách chuỗi trong python gây ra lỗi bởi trình thông dịch mong đợi câu lệnh 3 kết thúc là dấu phân cách khi quét chuỗi kí tự.

---

### ▶ Chuyện gì xảy ra với kiểu Booleans?

1\.
```py
# Một ví dụ đếm số biến kiểu Int và Booleans
mixed_list = [False, 1.0, "some_string", 3, True, [], False]
integers_found_so_far = 0
booleans_found_so_far = 0

for item in mixed_list:
    if isinstance(item, int):
        integers_found_so_far += 1
    elif isinstance(item, bool):
        booleans_found_so_far += 1
```

**Output:**
```py
>>> booleans_found_so_far
0
>>> integers_found_so_far
4
```

2\.
```py
another_dict = {}
another_dict[True] = "JavaScript"
another_dict[1] = "Ruby"
another_dict[1.0] = "Python"
```

**Output:**
```py
>>> another_dict[True]
"Python"
```

3\.
```py
>>> some_bool = True
>>> "wtf"*some_bool
'wtf'
>>> some_bool = False
>>> "wtf"*some_bool
''
```

#### 💡 Giải thích:

* Booleans là một phân lớp `int`
  ```py
  >>> isinstance(True, int)
  True
  >>> isinstance(False, int)
  True
  ```

* Giá trị kiểu Int của `True` là `1` và `False` là `0`.
  ```py
  >>> True == 1 == 1.0 and False == 0 == 0.0
  True
  ```

---

### ▶ Thuộc tính Class và thuộc tính instance 

1\.
```py
class A:
    x = 1

class B(A):
    pass

class C(A):
    pass
```

**Ouptut:**
```py
>>> A.x, B.x, C.x
(1, 1, 1)
>>> B.x = 2
>>> A.x, B.x, C.x
(1, 2, 1)
>>> A.x = 3
>>> A.x, B.x, C.x
(3, 2, 3)
>>> a = A()
>>> a.x, A.x
(3, 3)
>>> a.x += 1
>>> a.x, A.x
(4, 3)
```

2\.
```py
class SomeClass:
    some_var = 15
    some_list = [5]
    another_list = [5]
    def __init__(self, x):
        self.some_var = x + 1
        self.some_list = self.some_list + [x]
        self.another_list += [x]
```

**Output:**

```py
>>> some_obj = SomeClass(420)
>>> some_obj.some_list
[5, 420]
>>> some_obj.another_list
[5, 420]
>>> another_obj = SomeClass(111)
>>> another_obj.some_list
[5, 111]
>>> another_obj.another_list
[5, 420, 111]
>>> another_obj.another_list is SomeClass.another_list
True
>>> another_obj.another_list is some_obj.another_list
True
```

#### 💡 Explanation:

* Các biến lớp và các biến trong Instances của lớp được xử lý bên trong các từ điển của một đối tượng lớp. Nếu tên biến không tìm thấy trong từ điển của lớp hiện tại, các lớp cha sẽ được tìm kiếm nó.
* Toán tử `+=` sửa đổi đối tượng có thể thay đổi tại chỗ mà không cần tạo đối tượng mới.Vì vậy, việc thay đổi thuộc tính của một Instances không ảnh hưởng đến các Instances khác và thuộc tính lớp.

---

### ▶ Thay đổi sự bất biến!

```py
some_tuple = ("A", "tuple", "with", "values")
another_tuple = ([1, 2], [3, 4], [5, 6])
```

**Output:**
```py
>>> some_tuple[2] = "change this"
TypeError: 'tuple' object does not support item assignment
>>> another_tuple[2].append(1000) #This throws no error
>>> another_tuple
([1, 2], [3, 4], [5, 6, 1000])
>>> another_tuple[2] += [99, 999]
TypeError: 'tuple' object does not support item assignment
>>> another_tuple
([1, 2], [3, 4], [5, 6, 1000, 99, 999])
```

Nhưng tuple đã thay đổi...

#### 💡 Giải thích:

* Toán tử `+=` thay đổi danh sách tại chỗ. Việc phân công mục không hoạt động, nhưng khi trường hợp ngoại lệ xảy ra, mục đã được thay đổi tại chỗ.

---

### ▶ Biến bị xóa khỏi phạm vi bên ngoài

```py
e = 7
try:
    raise Exception()
except Exception as e:
    pass
```

**Output (Python 2.x):**
```py
>>> print(e)
# prints nothing
```

**Output (Python 3.x):**
```py
>>> print(e)
NameError: name 'e' is not defined
```

#### 💡 Giải thích:

* Nguồn: https://docs.python.org/3/reference/compound_stmts.html#except

  Khi một exception được khai bảo sử dụng  `as` , nó sẽ được xóa vào cuối except. Như là

  ```py
  except E as N:
      foo
  ```

  sẽ tương đương với

  ```py
  except E as N:
      try:
          foo
      finally:
          del N
  ```

  Điều này có nghĩa ngoại lệ phải được gán cho một tên khác để có thể tham chiếu nó sau mệnh đề `except`. Ngoại lệ được xóa vì với truy vết gắn luyền với chúng, chúng tạo thành một chu kỳ tham chiếu với khung ngăn xếp, giữ tất cả biến địa phương trong khung đó còn sống cho đến khi tập hợp rác tiếp theo xảy ra.

* Các mệnh đề không phải là phạm vi trong python. Tất cả mọi thứ trong ví dụ đều có cùng phạm vi, và biến `e` đã bị xóa do thực hiện mệnh đề `except` Tương tự như vậy:

     ```py
     def f(x):
         del(x)
         print(x)

     x = 5
     y = [5, 4, 3]
     ```

     **Output:**
     ```py
     >>>f(x)
     UnboundLocalError: local variable 'x' referenced before assignment
     >>>f(y)
     UnboundLocalError: local variable 'x' referenced before assignment
     >>> x
     5
     >>> y
     [5, 4, 3]
     ```

* Trong Python 2.x biến `e` được gán cho `Exception()` , vì vậy khi bạn in, nó sẽ không hiện gì cả.

    **Output (Python 2.x):**
    ```py
    >>> e
    Exception()
    >>> print e
    # Không in ra gì cả!
    ```

---

### ▶ Khi `True` lại là `False`

```py
True = False
if True == False:
    print("Tôi đã mất niềm tin!")
```

**Output:**
```
Tôi đã mất niềm tin!
```

#### 💡 Explanation:

- Ban đầu, Python đã từng không có kiểu `Bool` ( người ta sử dụng `0` cho giá trị sai và `1` cho giá trị đúng). Sau đó họ thêm `True` và `False` như một kiểu `bool` , nhưng đối với sự tương thích ngược, họ không thể tạo ra các hằng số `True` và `False` - chúng chỉ là các biên được xây dựng.
- Python 3 sẽ khắc phục điều này.

---

### ▶ Từ đầy đến không có gì trong một chỉ dẫn...

```py
some_list = [1, 2, 3]
some_dict = {
  "key_1": 1,
  "key_2": 2,
  "key_3": 3
}

some_list = some_list.append(4)
some_dict = some_dict.update({"key_4": 4})
```

**Output:**
```py
>>> print(some_list)
None
>>> print(some_dict)
None
```

#### 💡 Giải thích:

Hầu hết các phương pháp sửa đổi các mục của các đối tượng tuần tự/ ánh xạ như `list.append, dict.update, list.sort,vv.` sửa đổi các phương thức tại chỗ và trả về `None`. Lý do đằng sau việc này là để cải thiện năng suất bằng cách tránh tạo ra một bản sao của đối tượng nếu thao tác có thể thực hiện tại chỗ (Thảm khảo [ở đây](http://docs.python.org/2/faq/design.html#why-doesn-t-list-sort-return-the-sorted-list))

---

### ▶ Bạn có thể đoán được điều này không?

```py
a, b = a[b] = {}, 5
```

**Output:**
```py
>>> a
{5: ({...}, 5)}
```

#### 💡 Giải thích:

* Ghi lại từ [Python language reference](https://docs.python.org/2/reference/simple_stmts.html#assignment-statements), một câu tuyên bố có dạng
  ```
  (target_list "=")+ (expression_list | yield_expression)
  ```
  và 
  > Một câu lệnh gán đánh giá danh sách biểu thức( hãy nhớ rằng đây có thể là một biểu thức đơn hoặc một danh sách được phân cách bằng dấu phẩy, sau đó sẽ cho ra một `tuple`) và chỉ định đối tượng kết quả duy nhất cho mỗi danh sách mục tiêu, từ trái sang phải.

* Dấu `+` trong `(target_list "=")+` có nghĩa là có thể **một hoặc nhiều** danh sách mục tiêu. Trong trường hợp này danh sách đích là `a, b` và `a[b]` (lưu ý rằng danh sách biểu thức là chính xác, trong trường hợp của chúng ta là `{}, 5`).

* Sau khi đánh giá biểu thức, giá trị của nó được gắn vào danh sách mục tiêu **từ trái qua phải**. Vì vậy, trong trường hợp của chúng ta, đầu tiên là `{}, 5` được gắn vào `a, b` và bây giờ chúng ta có `a = {}` và `b = 5`.

* `a` dược gán cho `{}` một đối tượng có thể thay đổi.

* Danh sách mục tiêu thứ hai là  `a[b]` (bạn có thể mong đợi điều này đưa ra một lỗi vì cả `a` và `b` chưa được định nghĩa trong các câu lệnh trước đó. Nhưng hãy nhớ chúng ta chỉ cần gán cho `a` với `{}` và `b` với `5`).

* Bây giờ, chúng ta thiết lập `5` trong `dict` và `tuple` `({}, 5)` tạo ra một tham chiếu xoay vòng ( `{...}` cùng đề cập đến một đối tywowjng mà `a` đã tham chiếu). một ví dụ khác của tham chiếu xoay vòng là
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
  Tuuwong tự trường hợp trong ví dụ trên (`a[b][0]` cùng là một đối tượng như `a`)

* Vì vậy để tổng hợp nó lên, bạn có thể làm như ví dụ sau
  ```py
  a, b = {}, 5
  a[b] = a, b
  ```
  Và tham chiếu xoay vòng được chứng minh bởi một thực tế là `a[b][0]` cũng tương tự với đối tượng `a`
  ```py
  >>> a[b][0] is a
  True
  ```

---

## Phần 2: Cẩn thận sát thương diện rộng!


### ▶ Chỉnh sửa một từ điển trong khi Iterating

```py
x = {0: None}

for i in x:
    del x[i]
    x[i+1] = None
    print(i)
```

**Output (Python 2.7- Python 3.5):**

```
0
1
2
3
4
5
6
7
```

Nó chạy đúng **8** lần và dừng lại.

#### 💡 Giải thích:

* Việc lặp lại một từ điển mà bạn đang chỉnh sửa cùng lúc không được hỗ trợ.
* Nó chạy tám lần bởi vì đó là điểm mà từ điển thay đổi kích cỡ để giữ nhiều khóa hơn( chúng ta đã có 8 mục xóa, vì vậy cần thay đổi kích thước). Đây là một chi tiết quan trọng.
* Khóa được xử lý như thế nào và khi thay đổi kích cỡ xảy ra có thể khác nhau với các phiên abrn Python khác nhau.
* Để biết thêm chi tiết, bạn có thể tham khảo bài viết StackOverflow [thread](https://stackoverflow.com/questions/44763802/bug-in-python-dict) sẽ giải quyết một ví dụ tương tự.

---

### ▶ Xóa một phần tử trong `list` trong khi `iterating`

```py
list_1 = [1, 2, 3, 4]
list_2 = [1, 2, 3, 4]
list_3 = [1, 2, 3, 4]
list_4 = [1, 2, 3, 4]

for idx, item in enumerate(list_1):
    del item

for idx, item in enumerate(list_2):
    list_2.remove(item)

for idx, item in enumerate(list_3[:]):
    list_3.remove(item)

for idx, item in enumerate(list_4):
    list_4.pop(idx)
```

**Output:**
```py
>>> list_1
[1, 2, 3, 4]
>>> list_2
[2, 4]
>>> list_3
[]
>>> list_4
[2, 4]
```


#### 💡 Giải thích:

* Cách tốt nhất để bạn thay đổi một đối tượng trong khi iterating nó đó là tạo một bản sao đối tượng như `list_3[:]` .

     ```py
     >>> some_list = [1, 2, 3, 4]
     >>> id(some_list)
     139798789457608
     >>> id(some_list[:]) # Lưu ý rằng python sẽ tạo ra một đối tượng mới cho danh sách này.
     139798779601192
     ```

**Sự khác nhau giữa `del`, `remove`, và `pop`:**
* `del var_name` sẽ loại bỏ các ràng buộc `var_name` từ tên biến cục bộ hoặc toàn cục (Điều đó lý giải tại sao `list_1` không bị ảnh hưởng).
* `remove` sẽ loại bỏ các giá trị phù hợp đầu tiên, không phải là một chỉ số cụ thể, sẽ tạo ra `ValueError` nếu giá trị không tìm thấy.
* `pop` sẽ loại bỏ các phần tử tại một chỉ mục cụ thể và trả về nó,và tạo ra `IndexError` nếu chỉ số không hợp lệ được chỉ định.

**Tại sao đầu ra là `[2, 4]`?**
- Việc iteration được thực hiện bằng chỉ mục, và khi chúng ta loại bỏ `1` từ `list_2` hoặc `list_4`, nội dung danh sách giờ là `[2, 3, 4]`. Các phần tử còn lại được chuyển xuống, nghĩa là, `2` sẽ có chỉ mục là 0, và `3` là 1. Kể từ lần lập kế tiếp sẽ xem chỉ số 1 (có giá trị `3`), khóa `2` được loại bỏ toàn. Một điều tương tự sẽ xảy ra với các phần tử luân phiên trong dãy danh sách.

* Tham khảo StackOverflow [thread](https://stackoverflow.com/questions/45946228/what-happens-when-you-try-to-delete-a-list-element-while-iterating-over-it) một ví dụ giải thích
* Cũng có thể tham khảo StackOverflow [thread](https://stackoverflow.com/questions/45877614/how-to-change-all-the-dictionary-keys-in-a-for-loop-with-d-items)cho một ví dụ liên quan đến từ điển trong Python.

---

### ▶ Rò rỉ biến vòng lặp!

1\.
```py
for x in range(7):
    if x == 6:
        print(x, ': x là biến vòng lặp')
print(x, ': x là biến toàn cục')
```

**Output:**
```py
6 : x là biến vòng lặp
6 : x là biến toàn cục
```

Nhưng `x` chưa từng được định nghĩa bên ngoài vòng lặp...

2\.
```py
# Lần này chúng ta sẽ khởi tạo x đầu tiên
x = -1
for x in range(7):
    if x == 6:
        print(x, ': x là biến vòng lặp')
print(x, ': x là biến toàn cục')
```

**Output:**
```py
6 : for x inside loop
6 : x là biến toàn cục
```

3\.
```
x = 1
print([x for x in range(5)])
print(x, ': x là biến toàn cục')
```

**Output (on Python 2.x):**
```
[0, 1, 2, 3, 4]
(4, ': x là biến toàn cục')
```

**Output (on Python 3.x):**
```
[0, 1, 2, 3, 4]
1 : x là biến toàn cục
```

#### 💡 Giải thích:

- Trong Python, vòng lặp for sử dụng phạm vi chúng tồn tại và để lại biến số vòng lặp xác định của chúng. Điều anfy cũng áp dụng nếu chúng ta xác định rõ ràng biến vòng lặp trong không gian toàn cục trước đó.Trong trường hợp này, nó sẽ rebline biến đã tồn tại.

- Điều này sẽ được thay đổi trong Python3

---

### ▶ Hãy coi chừng các đối số mặc định có thể thay đổi!

```py
def some_func(default_arg=[]):
    default_arg.append("some_string")
    return default_arg
```

**Output:**
```py
>>> some_func()
['some_string']
>>> some_func()
['some_string', 'some_string']
>>> some_func([])
['some_string']
>>> some_func()
['some_string', 'some_string', 'some_string']
```

#### 💡 Giải thích:

- Mặc định, các đối số của các hàm Python không thực sự được khởi tạo mỗi khi bạn gọi hàm. Thay vào đó, giá trị của hàm gần nhất được gán ngay cho chúng sử dụng làm giá trị mặc định. Khi chúng ta thông qua một cách rõ ràng `[]` để `some_func` như đối số, giá trị mặc định của biến `default_arg` không được sử dụng, do đó hàm trả về như mong đợi.

    ```py
    def some_func(default_arg=[]):
        default_arg.append("some_string")
        return default_arg
    ```

    **Output:**
    ```py
    >>> some_func.__defaults__ #This will show the default argument values for the function
    ([],)
    >>> some_func()
    >>> some_func.__defaults__
    (['some_string'],)
    >>> some_func()
    >>> some_func.__defaults__
    (['some_string', 'some_string'],)
    >>> some_func([])
    >>> some_func.__defaults__
    (['some_string', 'some_string'],)
    ```

- Một cách phổ biến để tránh lỗi đó là các đối số có thể thay đổi được gán cho `None` nhưu là một giá trị mặc định và sau đó kiểm tra nếu bất kỳ giá trị nào được truyền cho hàm tương ứng với đối số đó , Ví dụ:

    ```py
    def some_func(default_arg=None):
        if not default_arg:
            default_arg = []
        default_arg.append("some_string")
        return default_arg
    ```

---

### ▶ Cùng toán hạng, nhưng là hai chuyện khác nhau!

1\.
```py
a = [1, 2, 3, 4]
b = a
a = a + [5, 6, 7, 8]
```

**Output:**
```py
>>> a
[1, 2, 3, 4, 5, 6, 7, 8]
>>> b
[1, 2, 3, 4]
```

2\.
```py
a = [1, 2, 3, 4]
b = a
a += [5, 6, 7, 8]
```

**Output:**
```py
>>> a
[1, 2, 3, 4, 5, 6, 7, 8]
>>> b
[1, 2, 3, 4, 5, 6, 7, 8]
```

#### 💡 Gỉai thích:

*  `a += b` không phải luôn luôn giống `a = a + b`.  Các lớp *có thể* triển khai các toán tử  *`op=`* khác nhau, và `list` sẽ làm nó.

* Biểu thức `a = a + [5,6,7,8]` tạo ra một danh sách mới và đặt tham chiếu `a`'s đến danh sách mới đó, và `b` khoogn thay đổi.

* Biểu thức `a + =[5,6,7,8]` thực sự được ánh xạ đến hàm "extend" hoạt động trên danh sách sao chot `a` và `b` vẫn trỏ đến cùng một danh sách được bổ sung tại chỗ.

---

### ▶ Vượt qua khỏi phạm vi biến

```py
a = 1
def some_func():
    return a

def another_func():
    a += 1
    return a
```

**Output:**
```py
>>> some_func()
1
>>> another_func()
UnboundLocalError: local variable 'a' referenced before assignment
```

#### 💡 Giải thích:
* Để thay đổi một biến toàn cục bạn phải khai báo nó
  ```py
  def another_func()
      global a
      a += 1
      return a
  ```
  
  **Output:**
  ```py
  >>> another_func()
  2
  ```

---

### ▶ Hãy cẩn thận với toán tử

```py
>>> (False == False) in [False] 
False
>>> False == (False in [False]) 
False
>>> False == False in [False] 
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

#### 💡 Giải thích:

Theo https://docs.python.org/2/reference/expressions.html#not-in

* `False is False is False` tương đương với `(False is False) và (False is False)`
* `True is False == False` tương đương với `True is False and False == False` và phần đầu tuyên bố (`True is False`) đánh giá là `False`, và kết quả là `False`.
* `1 > 0 < 1` tương đương với `1 > 0 and 0 < 1` và kết quả là `True`.
* Biểu thức `(1 > 0) < 1` tương đương với `True < 1` 
  ```py
  >>> int(True)
  1
  >>> True + 1 #không liên quan đến ví dụ này,just fun!
  2
  ```
  Vậy, `1 < 1` tương đương với `False`

---

### ▶ Tên quyết định bỏ qua phạm vi biến

1\.
```py
x = 5
class SomeClass:
    x = 17
    y = (x for i in range(10))
```

**Output:**
```py
>>> list(SomeClass.y)[0]
5
```

2\.
```py
x = 5
class SomeClass:
    x = 17
    y = [x for i in range(10)]
```

**Output (Python 2.x):**
```py
>>> SomeClass.y[0]
17
```

**Output (Python 3.x):**
```py
>>> SomeClass.y[0]
5
```

#### 💡 Giải thích:
- Các phạm vi lồng bên trong định nghĩa lớp bỏ qua các ràng buộc ở cấp lớp.
- Các biểu thức generator có một phạm vi riêng.

---

### ▶ Cắt xẻ thời gian! *

```py
class Yo(object):
    def __init__(self):
        self.__honey = True
        self.bitch = True
```

**Output:**
```py
>>> Yo().bitch
True
>>> Yo().__honey
AttributeError: 'Yo' object has no attribute '__honey'
>>> Yo()._Yo__honey
True
```

Tại sao `Yo()._Yo__honey` hoạt động? Chỉ có người ấn độ mới hiểu :)).

#### 💡 Giải thích:

* [Name Mangling](https://en.wikipedia.org/wiki/Name_mangling) được sử dụng để tránh việc va chạm giữa các không gian tên khác nhau.
* Trong Python, trình thông (cắt xẻ) các tên thành viên lớp `__` (hai dấu gạch dưới) và kết thúc bằng nhiều dấu gạch dưới bằng cách thêm  `_NameOfTheClass` ở phía trước.
* Vì vậy, để truy cập thuộc tính `__honey` , chúng ta phải thêm `_Yo` vào phía trước nhằm ngăn ngừa xung đột với cùng một thuộc tính `name` được định nghĩa trong bất kì lớp nào khác.

---


### ▶ `+=` có nhanh hơn

```py
# sử dụng "+", ba chuỗi:
>>> timeit.timeit("s1 = s1 + s2 + s3", setup="s1 = ' ' * 100000; s2 = ' ' * 100000; s3 = ' ' * 100000", number=100)
0.25748300552368164
# sử dụng "+=", ba chuỗi:
>>> timeit.timeit("s1 += s2 + s3", setup="s1 = ' ' * 100000; s2 = ' ' * 100000; s3 = ' ' * 100000", number=100)
0.012188911437988281
```

#### 💡 Giải thích:
+ `+=` nhanh hơn `+` để ghép nối nhiều hơn hai chuỗi vì chuỗi đầu tiên (ví dụ, `s1` cho `s1 += s2 + s3`) không bị phá hủy trong khi tính toán chuỗi hoàn chỉnh.

---

### ▶ Cấu trúc rõ ràng của chuối

```py
a = float('inf')
b = float('nan')
c = float('-iNf')  
d = float('nan')
```

**Output:**
```py
>>> a
inf
>>> b
nan
>>> c
-inf
>>> float('some_other_string')
ValueError: could not convert string to float: some_other_string
>>> a == -c #inf==inf
True
>>> None == None # None==None
True
>>> b == d #but nan!=nan
False
>>> 50/a
0.0
>>> a/a
nan
>>> 23 + b
nan
```

#### 💡 Giải thích:

`'inf'` và `'nan'` là hai chuỗi đặc biệt (trường hợp nhạy cảm), mà khi được hiển thị rõ ràng với kiểu `float` , được sử dụng để đại điện cho `số vô cùng` và `không phải số`.

---
