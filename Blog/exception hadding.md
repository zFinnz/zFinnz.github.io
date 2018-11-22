<h1>Python Exceptions Handling</h1>

Trong python cũng như tất các các ngôn ngữ lập trình khác, những trường hợp lỗi luôn có thể xảy ra gây ra lỗi không đáng có trong chương trình.
Các lỗi này ảnh hưởng đến hiệu suất của chương trình, đôi khi còn có thể gây nên `crash` hoặc `server downtime`.
Có ít nhất hai loại lỗi khác nhau: lỗi cú pháp (`Syntax Errors`) và ngoại lệ (`Exception`).

Syntax Errors là gì
Lỗi cú pháp, hay còn được biết tới là lỗi phân tích cú pháp (`parsing error`), có lẽ là lỗi phổ biến nhất đối với lập trình viên Python.
```py
>>> while True print 'Hello world'
  File "<stdin>", line 1, in ?
    while True print 'Hello world'
                   ^
SyntaxError: invalid syntax
```
Bộ phân tích cú pháp lặp lại dòng gây lỗi, và hiển thị một mũi tên hình con trỏ vào điểm đầu tiên lỗi được phát hiện. Lỗi được phát hiện nằm ở phía trước dấu mũi tên.
Ở ví dụ trên, lỗi được phát hiện tại hàm `print` vì bị thiếu dấu `:` trước đó. Tên file và số dòng cũng được thông báo để bạn có thể xác định được nơi cần sửa.

Exception là gì?

`Exception` có thể hiểu là các lỗi, biến cố khi thực thi chương trình khiến cho luồng thực thi bị phá vỡ ngay cả khi câu lệnh hoặc biểu thức có cú pháp chính xác. Lỗi được phát hiện trong quá trình thực thi. Ví dụ:
```py
>>> print(a)
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
NameError: name 'a' is not defined
```
```py
>>> '2' + 2
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: cannot concatenate 'str' and 'int' objects
```
Ngoại lệ có nhiều loại khác nhau và được in như một phần của thông báo lỗi, ngoại lệ trong ví dụ trên là `NameError` và `TypeError`. Cấu trúc chung của chuỗi thông báo lỗi được in ra có dạng tên của ngoại lệ được tính hợp sẵn của Python và lời giải thích nguyên nhân gây ra lỗi, trừ ngoại lệ do người dùng tự định nghĩa. Phần trước của thông báo lỗi cho thấy nơi ngoại lệ xảy ra, dưới dạng một truy xuất `stack`.
Ở ví dụ thứ nhất, chúng ta đã dùng hàm `print()` để in ra giá trị biến `a`, tuy nhiên biến `a` chưa được khai báo nên Python trả về cho chúng ta lỗi `NameError`.

Xử lý Exceptions

`Exceptions handling` là một phương thức hết sức đơn giản để các bạn quản lí những lỗi có thể xảy ra trong chương trình của mình. Khi bạn nghĩ đoạn `code` của bạn có thể gây ra lỗi, bạn có thể sử dụng `exceptions handling` để phát hiện và xử lí chúng.

Câu lệnh `raise`

Cấu trúc của câu lệnh `raise` được hiểu như sau:
```py
raise_stmt ::=  "raise" [expression ["from" expression]]
```
+ `raise expression`  được sử dụng để gọi một ngoại lệ (có thể là ngoại lệ được xây dựng sẵn của python hoặc ngoại lệ do người dùng tự định nghĩa) tùy thuộc vào một điều kiện nhất định, nó được xem như là một phần của `Exceptions handling`.
```py
>>> x = 10
>>> if x > 5:
>>>    raise Exception('x không nên bé hơn 5. Giá trị của x là: {}'.format(x))
Exception: x không nên bé hơn 5. Giá trị của x là: 10
```
+ Câu lệnh `raise` mà không có bất kỳ đối số nào là một cú pháp python đặc biệt được gọi là `reraise`. Nó có nghĩa là được ngoại lệ lại và tái nâng cao nó. Trình thông dịch sẽ tìm ngoại lệ cuối cùng và xử lý (chú ý ở đây sẽ là ngoại lệ cuối cùng được xử lí chứ không phải ngoại lệ cuối cùng được nêu ra trong mã nguồn). Sau đó, nó hoạt động giống như khi bạn sử dụng cú pháp `raise expression`, giá trị và truy xuất lại gần đây nhất được in ra thông báo lỗi. Điều này thực sự hữu ích khi trình xử lí lỗi phát hiện ra nó không thể xử lí một ngoại lệ mà nó nhận được, bằng câu lệnh `raise` nó sẽ quay ngược lại và tái nâng cao ngoại lệ.

+ Vì lí do trên, nếu `reraise` được thực hiện trong trường hợp không phải là một trường hợp ngoại lệ của một ngoại lệ khác, lỗi sau được hiển thị: `RuntimeError: No active exception to reraise`
```py
>>> x = 10
>>> if x > 5:
>>>	raise 
Traceback (most recent call last):
  File "<stdin>", line 2, in <module>
RuntimeError: No active exception to reraise
```

Sự khác nhau giữa `raise`, `raise expression`, `raise expression from expression`

Ví dụ 1
```py
try:
    raise ValueError
except:
    raise Exception 
```
Kết quả:
```py
Nhập vào một số: `                                                       
Traceback (most recent call last):
  File "C:\Users\Finn\Desktop\python.py", line 2, in <module>
    raise ValueError
ValueError

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "C:\Users\Finn\Desktop\python.py", line 4, in <module>
    raise Exception
Exception                                                 
```
Ví dụ 2
```py
try:
    raise ValueError
except:
    raise

```
Kết quả:
```py
Traceback (most recent call last):
  File "C:\Users\Finn\Desktop\python.py", line 2, in <module>
    raise ValueError
ValueError
```
Ví dụ 3
```py
try:
    raise ValueError
except Exception as e:
    raise NameError from e
```
Kết quả
```py
Traceback (most recent call last):
  File "C:\Users\Finn\Desktop\python.py", line 2, in <module>
    raise ValueError
ValueError

The above exception was the direct cause of the following exception:

Traceback (most recent call last):
  File "C:\Users\Finn\Desktop\python.py", line 4, in <module>
    raise NameError from e
NameError                                                                                                                       
```
Ví dụ 4
```py
try:
    raise ValueError
except Exception as e:
    raise NameError from None
```
Kết quả
```py
Traceback (most recent call last):
  File "C:\Users\Finn\Desktop\python.py", line 4, in <module>
    raise NameError from None
NameError
```
Python sử dụng một cách xây dựng `traceback` rất đặc biệt. Thay vì xây dựng toàn bộ dấu vết ngăn xếp (`stack`) trong việc tạo ngoại lệ( như Java) hoặc khi một ngoại lệ được tạo ra, Python đã xây dựng một khung `traceback từng phần` tại từng thời điểm khi ngoại lệ bật lên.
Mỗi khi một ngoại lệ mới phát sinh thì một khung ngăn xếp mới được tạo ra với lệnh `raise` có đối số , vòng lặp trình thông dịch bytecode Python thực hiện [PyTraceback_Here](https://github.com/python/cpython/blob/v3.7.0/Python/traceback.c#L229) để thêm mới đến danh sách liên kết của các đối tượng `traceback` đại diện cho `stack`. 
Python duy trì một chồng các ngoại lệ (và `traceback`) cho mỗi luồng và bị treo khi các khối `except` và `finally` chưa được thực hiện xong. Câu lệnh `raise` không có đối số sẽ khôi phục ngoại lệ (và `traceback`) được đại diện bởi mục nhập đầu tiên trên `stack` này, ngay cả khi `except` hoặc `finally` đang ở trong một hàm khác.

Khi thực hiện lệnh ở ví dụ 1:
```py
raise ValueError
```
Python xây dựng một `traceback` tương ứng với dòng đó:
```py
Traceback (most recent call last):
  File "C:\Users\Finn\Desktop\python.py", line 2, in <module>
    raise ValueError
ValueError
```
Khi thực hiện `raise` không có đối số ở ví dụ, `traceback` này được khôi phục, nhưng không có đối số nào đi với lệnh `raise`. Cho nên, khi ngoại lệ tạo ra, sẽ không có `trackback` được thêm vào theo dõi ngăn xếp, dẫn đến dấu vết ngăn xếp cuối cùng được hiển thị:
```py
Traceback (most recent call last):
  File "C:\Users\Finn\Desktop\python.py", line 2, in <module>
    raise ValueError
ValueError
```
Còn `raise expression from expression` là một cách xây dựng python mới từ [PEP 3134](https://www.python.org/dev/peps/pep-3134/) nó như là một kiểu mở rộng của `raise expression`.
khi bạn sử dụng `from`, thuộc tính `__cause__` được thiết lập và thông báo cho biết lí do trực tiếp gây ra ngoại lệ. Nếu bạn bỏ qua `from` thì thuộc tính  `__cause__` cũng sẽ không được thiết lập, nhưng thuộc tính `__context__`  vẫn thể được thiết lập, và `traceback` sau đó in ra màn hình `The above exception was the direct cause of the following exception:` (chính là cú pháp `raise expression`) .

Khi tạo một trình xử lý ngoại lệ mà bạn không muốn hiển thị ngữ cảnh (không muốn trong quá trình xử lý một ngoại lệ khác tạo ra thông báo), thì hãy sử dụng `raise ... from None` để đặt cờ hiệu `__suppress_context__` thành `True` khi đó `__context__` sẽ bị bỏ qua khi in ra màn hình một lần `traceback`.

Nói cách khác, Python đặt một`context` về các ngoại lệ để bạn có thể quan sát một ngoại lệ được tạo ra ở đâu, cho phép bạn xem liệu một ngoại lệ khác có đang được diễn ra hay không. Bạn cũng có thể thêm `cause` vào một ngoại lệ, làm cho `traceback` rõ ràng về những ngoại lệ có thể đang xảy ra đồng thời, và ngữ cảnh bị bỏ qua (nhưng vẫn có thể quan sát khi ở chế độ gỡ lỗi-`debugging`). Sử dụng `raise ... from None` để bỏ qua ngữ cảnh khi xử lí mọt ngoại lệ khác diễn ra đồng thời .


Câu lệnh assert
```py
assert:
	# Câu lệnh điều kiện
```
Câu lệnh trong assert dùng để kiểm tra điều kiện đó và ngay lập tức kích hoạt lỗi nếu điều kiện là `False`.
Câu lệnh `assert <expression>` có 2 dạng, tương đương với:
Dạng thứ 1:
```py
if __debug__:
    if not expression: raise AssertionError
```
Dạng thứ 2:
```py
if __debug__:
    if not expression1: raise AssertionError(expression2)
```
Vì sao ở đây chúng ta đặt điều kiện `if __debug__`. Bở vì Khi chạy python trong chế độ tối ưu hóa, nơi `__debug__` là `False`, `assert` sẽ bị bỏ qua. Chỉ cần thêm tùy chọn `-O` làm cờ:
```sh
python -O script.py
```
Ví dụ:
```py
>>> assert True # nothing happens
>>> assert False
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
AssertionError
```
Để tạo một thông báo tùy chọn ta có thể viết:
```py
a = 5
>>> assert(a==6), "sai"
AssertionError: Sai
# Tương đương với
>>> assert False, "sai"
```

Khối lệnh `try...except`

Câu hỏi được đặt ra ở đây là làm sao phát hiện được các ngoại lệ có thể phát sinh trong đoạn `code` của bạn. Đừng lo, trong python bạn có thể sử dụng từ khoá `try` và `except` để bắt toàn bộ ngoại lệ có thể xảy ra trong một khối code của bạn.
Các câu lệnh nằm trong khối lệnh `try` nếu xảy ra lỗi nó sẽ gọi ra `exception handling` trong khối lệnh nằm sau `except` và xử lí chúng. Cú pháp ta sử dụng ở đây là:
```py
try:
    # mã nguồn ở đây
except exceptionName:
    # mã xử lí lỗi
```
Python sẽ xử lý tất cả các câu lệnh trong khối lệnh `try` một cách bình thường, khi lỗi xảy ra các câu lệnh trong khối `except` sẽ được thực hiện.

```py
while True:
    try:
        number = int(input("Nhập vào một số: "))
        print(number)
    except Exception as e:
        # Xử lý khi dữ liệu đầu vào không chính xác
        print('Dữ liệu đầu vào không chính xác: ' + str(e))
```
Ở đây khi người dùng nhập vào một kí tự không chính xác, thay vì trả về lỗi và dừng chương trình, chương trình sẽ thông báo lỗi được khai báo ở khối lệnh `except` và tiếp tục chạy các vòng lặp `while`.

+ Xử lí lỗi xác định
```py
while True:
    try:
        number = int(input("Nhập vào một số: "))
        print(number)
    except NameError:
        # Xử lý khi dữ liệu đầu vào không chính xác
        print('Dữ liệu đầu vào không chính xác: ' + str(e))
```
Khi chúng ta biết rõ chương trình của mình sẽ xảy ra lỗi gì (ở ví dụ trên là lỗi `NameError`), chúng ta có thể bắt ngay lỗi đó.

+ Xử lí lỗi không xác định
```py
try:
    try:
    	number = int(input("Nhập vào một số: "))
    	print(number)
    except NameError as e:
        print("Dữ liệu đầu vào không chính xác: " + str(e))
except Exception as e:
    print(str(e))

Nhập vào một số: a # ta nhập chữ cái a từ bàn phím thay vì 1 chữ số
#invalid literal for int() with base 10: 'a'
```
Ở ví dụ trên, ta định nghĩa một `except NameError` để bắt khi không tìm thấy tên biến và một `except Exception` để xử lí lỗi không xác định ngoài lỗi đó mà ta chưa biết rõ.

+ Một mệnh đề `try` có thể đi kèm 1 hay nhiều `except`:

```py
try:
	number = int(input("Nhập vào một số: "))
	print(number)
except NameError as e:
    print("Dữ liệu đầu vào không chính xác: " + str(e))
except ValueError:
    print("Không thể chuyển đổi dữ liệu về kiểu int.")
except:
    print("Lỗi không xác định:")
    raise
```
Ở đây, chúng ta khai báo 3 `except` là `NameError` với lỗi tên biến không xác định, `ValueError` với lỗi giá trị không chính xác và `except` cuối cùng sẽ được gọi đến nếu như không có ngoại lệ nào được xử lí ở trên.

+ Ta cũng có thể bắt nhiều `exception` cùng một lúc cách nhau bởi dấu phẩy.
```py
try:
	number = int(input("Nhập vào một số: "))
	print(number)
except (NameError, ValueError) as e:
    print(str(e))
```

+ Bạn cũng có thể lồng các khối `try...except` lại với nhau:
```py
try :
    # code
except ZeroDivisionError:
    try :
        # code
    except StandardError:
        # code
except RuntimeError:
    # code
```

+ Ngoài ra có thể thực hiện lệnh `else` trong trường hợp lệnh không có `exception` sinh ra khi thực hiện khối lệnh trong `try`.
Cú pháp:
```py
try:
	#code
except:
	#code
else:
	#code
```
Ví dụ:
```py
try:
	number = int(input("Nhập vào một số: "))
	print(number)
except (NameError, ValueError) as e:
    print(str(e))
else:
	print("Không có lỗi xảy ra")
```
+ Sử dụng lệnh `finally`
Trong trường hợp lệnh trong mệnh đề `try` đang được thực hiện thì xảy ra lỗi, chương trình khi đó sẽ nhảy tới thực hiện lệnh trong mệnh đề `except`, có thể việc một lệnh nào đó nằm mệnh đề `try` chưa được thực hiện hết khiến cho phần mềm có thể bị lỗi sau đó. Khi đó bạn cần dùng đến `finally`.
```py
try:
    # code
except:
    # code
else:
	#code
finally:
    # code
```
Ví dụ:
```py
try:
	number = int(input("Nhập vào một số: "))
	print(number)
except (NameError, ValueError) as e:
    print(str(e))
finally:
	print("Chương trình đã được chạy")
```
Hoặc
```py
try:
    f = open('filename','r')
    try:
        f_content = f.readline()
        i = int(f_content.strip())
    finally:
        f.close()
except IOError as e:
    print str(e)
```
Trong trường hợp đọc lỗi, file `f` vẫn sẽ được đóng lại trong `finally`. 
Chú ý sự khác biệt khi sử dụng của `else` và `finally`: lệnh trong `else` chỉ được gọi khi không có lỗi xảy ra, lệnh trong `finally` được gọi khi có lỗi xảy ra.


Tự định nghĩa Exceptions

Ngoài các `exceptions` được cung cấp sẵn, Python cũng cho phép lập trình viên tự định nghĩa các `exceptions` để sử dụng
Để tạo một `exception` trong Python thì bắt buộc `exception` này phải kế thừa lớp `Exception` trong Python, và còn lại ta có thể tùy biến cách xử lí xử lý như thế nào cũng được. Ví dụ:
```py
class ExceptionDemo(Exception):
    def __init__(self, value):
        print("Lỗi: " + value)
```
Sau khi đã tạo ra được `exception` cho riêng mình rồi, thì khi thực hiện mà bạn muốn gọi ra gọi `exception` ra bạn chỉ cần sử dụng keyword `raise` để gọi `exception` theo cú pháp sau:
```py
raise exceptionName
```
Trong đó, `exceptionName` là tên của `exception` bạn muốn gọi. Ví dụ:
```py
class ExceptionDemo(Exception):
    def __init__(self, value):
        print("Loi: " + value)

def sum(a, b):
    if (b == 0):
        raise ExceptionDemo('b phải khác 0')
    return a / b
sum(6, 0)
```

Các exception có sẵn trong Python

| Tên exception | miêu tả|
|--------------|---------|
| `Exception` | Đây là lớp cơ sở cho tất cả các `exception`, nó sẽ xuất hiện khi có bất cứ một lỗi nào xảy ra. |
| `StopIteration` | Xuất hiện khi phương thức `next()` của `iterator` không trỏ đến một đối tượng nào. |
| `SystemExit` | Xuất hiện khi dùng phương thức `sys.exit()` |
| `StandardError` | Lớp cơ sở cho tất cả các `exception` ngoại trừ `StopIteration` và `SystemExit`. |
| `ArithmeticError` | Xuất hiện khi có lỗi tính toán giữa các số với nhau |
| `OverflowError` | Xuất hiện khi thực hiện tính toán và giá trị của nó vượt quá ngưỡng giới hạn cho phép của kiểu dữ liệu. |
| `FloatingPointError` | Xuất hiện khi tính toán `float` thất bại. |
| `ZeroDivisonError` | Xuất hiện khi thực hiện phép chia cho `0`. |
| `AssertionError` | Xuất hiện trong trường hợp lệnh `assert` thất bại. |
| `AttributeError` | Xuất hiện khi không tồn tại thuộc tính này, hoặc thiếu tham số truyền vào nó. |
| `EOFError` | Xuất hiện khi không có dữ liệu từ hàm `input()` hoặc cuối file. |
| `ImportError` | Xuất hiện khi lệnh `import` thất bại. |
| `KeyboardInterrupt` | Xuất hiện khi ngắt trình biên dịch. |
| `LookupError` | Lớp cơ sở cho tất cả các lỗi về `lookup`. |
| `IndexError` | Xuất hiện khi `index` không tồn tại trong `list`, `string`,... |
| `KeyError` | Xuất hiện khi `key` không tồn tại trong `dictionary`. |
| `NameError` | Xuất hiện khi một biến không tồn tại trong phạm vi bạn gọi nó. |
| `EnvironmentError` | Xuất hiện khi có bất kỳ một lỗi nào ngoài phạm vị của Python. |
| `IOError` | Xuất hiện khi xử dụng `input/output` thất bại, hoặc  mở file không thành công. |
| `OSError` | Xuất hiện khi có lỗi từ hệ điều hành. |
| `SyntaxError` | Xuất hiện khi chương trình có lỗi cú pháp. |
| `IndentationError` | Xuất hiện khi bạn thụt dòng không đúng. |
| `SystemError` | Xuất hiện khi trình biên dịch có vấn đề nhưng mà nó lại không tự động `exit`. |
| `SystemExit` | Xuất hiện khi trình biên dịch được thoát bởi `sys.exit()`. |
| `TypeError` | Xuất hiện khi thực thi toán tử hoặc hàm mà kiểu dữ liệu bị sai so với kiểu dữ liệu đã định nghĩa ban đầu. |
| `ValueError` | Xuất hiện khi chúng ta xây dựng 1 `function` mà kiểu dữ liệu đúng nhưng khi chúng ta thiết lập ở tham số là khác so với khi truyền vào. |
| `RuntimeError` | Xuất hiện khi lỗi được sinh ra không thuộc một danh mục nào. |
| `NotImplementedError` | Xuất hiện khi một phương thức trừu tượng cần được thực hiện trong lớp kế thừa chứ không phải là lớp thực thi |
| `UnboundLocalError` | Xuất hiện khi chúng ta cố tình truy cập vào một biến trong hàm hoặc phương thức, nhưng không thiết lập giá trị cho nó. |


Ngoài ra bạn có thể tham khảo thêm các exceptions được xây dựng sẵn ở [Built-in Exceptions](https://docs.python.org/3/library/exceptions.html) và phân cấp của nó [Exception hierarchy](https://docs.python.org/3/library/exceptions.html#exception-hierarchy)
