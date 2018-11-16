<h1>Python Exceptions Handling</h1>

Trong python cũng như tất các các ngôn ngữ lập trình khác, những trường hợp ngoại lệ luôn có thể xảy ra gây ra lỗi không đáng có trong chương trình.
Các lỗi này ảnh hưởng đến hiệu suất của chương trình, đôi khi còn có thể gây nên `crash` hoặc `server downtime`.

Exception là gì?

`Exception` có thể hiểu là các lỗi, biến cố khi thực thi chương trình khiến cho luồng thực thi bị phá vỡ. Ví dụ:
```py
>>> print(a)
NameError: name 'a' is not defined
```
Ở ví dụ trên, chúng ta đã dùng hàm `print()` để in ra giá trị biến `a`, tuy nhiên biến `a` chưa được khai báo nên Python trả về cho chúng ta lỗi `NameError`.

Xử lý Exceptions

`Exceptions` là một phương thức hết sức đơn giản để các bạn có thể quản lí những lỗi có thể xảy ra trong code của bạn. Khi bạn nghĩ đoạn `code` của bạn có thể gây ra lỗi bạn có thể sử dụng `exceptions` để phát hiện và xử lí chúng.

Câu lệnh `raise`
+ Nó được sử dụng để tạo ra ngoại lệ với một điều kiện xảy ra như một phần của kiểm tra lỗi.
```py
>>> x = 10
>>> if x > 5:
>>>    raise Exception('x không nên bé hơn 5. Giá trị của x là: {}'.format(x))
Exception: x không nên bé hơn 5. Giá trị của x là: 10
```
+ Chúng ta có thể sử dụng lệnh `raise` để gọi một ngoại lệ do người dùng tự định nghĩa.

+ `raise` mà không có bất kỳ đối số nào là một cú pháp python đặc biệt được gọi là `reraise`. Nó có nghĩa là có được ngoại lệ và tái nâng cao nó. Hiểu một cách đơn giản hơn, nó sẽ quay ngược lại đoạn mã để xử lí nó.
```py
>>> try:
>>>    f = open('file.txt', 'r')
>>> except IOError:
>>>    # code
>>>    raise
```
+ Nếu được thực hiện trong trường hợp không phải là một trường hợp ngoại lệ của một ngoại lệ khác, lỗi sau được hiển thị: `RuntimeError: No active exception to reraise`
```py
>>> x = 10
>>> if x > 5:
>>>	raise 
RuntimeError: No active exception to reraise
```

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
assert(a==6), "sai"
AssertionError: Sai
# Tương đương với
assert False, "sai"
```

Khối lệnh `try...except`

Để sử dụng `exception handling` trong Python, đầu tiên bạn cần phải làm sao phát hiện được các ngoại lệ có thể phát sinh trong đoạn `code` của bạn. Trong python bạn có thể sử dụng từ khoá `try` và `except` để bắt toàn bộ ngoại lệ có thể xảy ra trong một khối code của bạn.
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
# invalid literal for int() with base 10: 'a'
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

Phân cấp ngoại lệ trong Python
Bạn có thểm tham khảo [Exception hierarchy](https://docs.python.org/3/library/exceptions.html#exception-hierarchy)
