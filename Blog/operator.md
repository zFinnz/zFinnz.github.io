Toán tử trong Python là một kí tự hay dấu, có chức năng thực hiện một số hoạt động trên một hay nhiều biến để tạo ra kết quả.
#### Toán tử
Trong Python, các toán tử được cung cấp trong module `Operator (Lib/operator.py)` bởi thư viện chuẩn của Python: Là một bộ các hàm chức năng, tương ứng với các toán tử của Python. Ví dụ, `operator.add (x, y)` hoặc `x.__add__(y)` tương đương với biểu thức `x + y`.
Tên của các hàm chức năng này khá đặc biệt với các dấu gạch dưới (ví dụ có thể viết `operator.__add__(x, y)`). Tuy nhiên, có các biến thể không bắt đầu hoặc kết thúc bằng `__` để cho việc sử dụng được tiện lợi.
Toán tử là một trong số các thành phần cơ bản nhất trong một ngôn ngữ lập trình. Mỗi toán tử là một ký hiệu đặc biệt như: `+`, `-`, `*`, `/`, `%`... được `map` với các hàm (functions) tương ứng trong `module operator` vừa đề cập ở trên. Giúp cho việc sử dụng dễ dàng, đơn giản và ngắn gọn hơn.
Ví dụ: `1 + 2`, thì chữ số `1` và chữ số `2` được coi là toán hạng, ký hiệu `+` được gọi là toán tử. Toán tử này sẽ thực hiện phép toán cộng hai toán hạng `1` và `2`, trả về kết quả là `3`. Và nó được map với hàm `add(1, 2)` của `module operator`.
Ví dụ:
```py
# Ba phép toán sau đây là giống nhau và tương đương với a + b
a, b = 5, 6
>>> a.__add__(b)
11
>>> import operator
>>> operator.add(a, b)
11
>>> operator.__add__(a, b)
11
```
#### Phân loại
Python hỗ trợ các loại toán tử sau:
+ [Toán tử số học](https://0xpan.blogspot.com/2018/11/toan-tu-trong-python.html#load-h4-0)
+ [Toán tử quan hệ (còn gọi là toán tử so sánh)](https://0xpan.blogspot.com/2018/11/toan-tu-trong-python.html#load-h4-1)
+ [Toán tử gán](https://0xpan.blogspot.com/2018/11/toan-tu-trong-python.html#load-h4-2)
+ [Toán tử logic](https://0xpan.blogspot.com/2018/11/toan-tu-trong-python.html#load-h4-3)
+ [Toán tử membership](https://0xpan.blogspot.com/2018/11/toan-tu-trong-python.html#load-h4-4)
+ [Toán tử identify](https://0xpan.blogspot.com/2018/11/toan-tu-trong-python.html#load-h4-5)
+ [Toán tử thao tác bit](https://0xpan.blogspot.com/2018/11/toan-tu-trong-python.html#load-h4-6)

Định nghĩa và ví dụ cụ thể các loại toán tử như sau:

##### Nhóm toán tử số học
| Toán tử | Cú pháp | Hàm | Miêu tả |
|---------|---------|------|----------|
| `+` | a+b | add(a, b) | Phép cộng |
| `-` | a-b | sub(a, b) | Phép trừ |
| `*` | a*b | mul(a, b) | Phép nhân |
| `/` | a/b | truediv(a, b) | Phép chia |
| `//` | a//b | floordiv(a, b) | Phép chia làm tròn |
| `%` | a%b | mod(a, b) | Phép chia lấy phần dư |
| `**` | a**b | pow(a, b) | Phép lũy thừa |

Ví dụ:
```py
>>> a, b = 5, 6
>>> a + b #Phép cộng
11
>>> a - b #Phép trừ
-1
>>> a * b #Phép nhân
30
>>> a / b #Phép chia
0.8333333333333334
>>> a // b #Phép chia làm tròn
0
>>> a % b #Phép chia lấy phần dư
5
>>> a ** b #Phép lũy thừa
15625
```

##### Nhóm toán tử quan hệ
Toán tử quan hệ trong Python dùng để so sánh các giá trị tương ứng và trả về giá trị kiểu `bool` (`True`/`False`).

| Toán tử | Cú pháp | Hàm | Miêu tả |
|---------|---------|------|----------|
| `>` | a > b | gt(a, b) | So sánh lớn hơn |
| `>=` | a >= b | ge(a, b) | So sánh lớn hơn hoặc bằng |
| `<` | a < b | lt(a, b) | So sánh bé hơn |
| `<=` | a <= b | le(a, b) | So sánh bé hơn hoặc bằng|
| `==` | a == b | eq(a, b) | So sánh bằng |
| `!=` | a != b | ne(a, b) | So sánh khác |

Ví dụ:
```py
>>> a, b = 5, 6
>>> a > b # So sánh lớn hơn 
False
>>> a >= b # So sánh lớn hơn hoặc bằng
False
>>> a < b # So sánh bé hơn
True
>>> a <= b # So sánh bé hơn hoặc bằng
True
>>> a == b # So sánh bằng
False
>>> a != b # So sánh khác 
True
```

##### Nhóm toán tử gán

| Toán tử | Cú pháp | Miêu tả |
|---------|---------|---------|
| `=` | a = b | Phép gán b cho a |
| `/=` | a /= b | Phép chia a cho b và gán giá trị cho a |
| `*=` | a *= b | Phép nhân a và b rồi gán giá trị cho a |
| `%=` | a %= b | Phép chia lấy phần dư a cho b và gán giá trị cho a |
| `+=` | a += b | Phép cộng a với b và gán giá trị cho a |
| `-=` | a -= b | Phép trừ, trừ a cho b và gán giá trị cho a |
| `//=` | a //= b | Phép chia làm tròn a cho b và gán giá trị cho a |
| `**=` | a **= b | Phép tính a lũy thừa b và gán giá trị cho a |

Ví dụ:
```py
>>> a, b = 5, 6
>>> a += b # tương đương với a = a + b
>>> a 
11
>>> a -= b # tương đương với a = a - b
>>> a 
-1
>>> a *= b # tương đương với a = a * b
>>> a 
30
>>> a /= b # tương đương với a = a / b
>>> a 
0.8333333333333334
>>> a //= b # tương đương với a = a // b
>>> a 
0
>>> a %= b # tương đương với a = a % b
>>> a 
5
>>> a **= b # tương đương với a = a ** b
>>> a 
15625
```

##### Nhóm toán tử logic
Là những toán tử thể hiện có mệnh đề AND, OR, NOT. Thường được sử dụng trong các biểu thức logic, có thể đi kèm với các toán tử quan hệ.

| Toán tử | Cú pháp | Miêu tả |
|---------|---------|---------|
| `and` | a and b | Phép và, True nếu cả 2 điều kiện đều đúng, ngược lại False |
| `or` | a or b | Phép hoặc, True nếu 1 trong 2 điều kiện đúng, ngược lại False |
| `not` | a not b | Phép phủ định, đảo ngược trạng thái logic của toán hạng |

Ví dụ:
```py
>>> 5 < 6 and 2 < 3
True
>>> 5 < 6 and 2 > 3
False
>>> 5 < 6 or 2 > 3
True
>>> 5 > 6 or 2 > 3
False
>>> not (5 > 6 or 2 > 3)
True
```

##### Nhóm toán tử membership
| Toán tử | Cú pháp | Miêu tả |
|---------|---------|----------|
| `in` | a in b | Trả về True nếu biến a thuộc biến b, ngược lại False |
| `not in` | a not in b | Trả về True nếu biến a không thuộc biến b, ngược lại False |

Ví dụ:
```py
>>> a, b = 5, [1, 2, 3, 4, 5]
>>> a in b
True
>>> a not in b
False
```

##### Nhóm toán tử identify
| Toán tử | Cú pháp | Miêu tả |
|---------|---------|----------|
| `is` | a is b | Trả về True nếu a và b cùng trỏ về một đối tượng, ngượi lại False |
| `is not` | a is not b | Trả về True nếu a và b không cùng trỏ về một đối tượng, ngượi lại False |

Ví dụ;
```py
>>> a = 5
>>> b = 4 + 1
>>> a is b
True
>>> a is not b
False
```

##### Nhóm toán tử thao tác bit
| Toán tử | Cú pháp | Miêu tả |
|---------|---------|----------|
| `&` | a & b | Sao chép một bit tới kết quả nếu bit này tồn tại trong cả 2 toán hạng |
| `|` | a `|` b |  Sao chép một bit tới kết quả nếu bit này tồn tại trong bất kì toán hạng nào. |
| `^` | a ^ b |  Sao chéo bit nếu nó được set (chỉ bit 1) chỉ trong một toán hạng. |
| `~` | a ~ b |  Toán tử một ngôi, dung để đảo ngược bit. |
| `>>` | a >> b | Toán tử dịch trái nhị phân, giá trị của toán hạng trái được dịch sang trái một số lượng bit bằng toán hạng phải. |
| `<<` | a << b |  Toán tử dịch phải nhị phân, giá trị của toán hạng trái được dịch sang phải một số lượng bit bằng toán hạng phải. |

`|`
Ví dụ:
```py
>>> a = 60 # 60 = 0011 1100
>>> b = 13 # 13 = 0000 1101
>>> a & b
12 # 0000 1100
>>> a | b
61 # 0011 1101
>>> a ^ b
49 # 0011 0001
>>> ~a
-61 # 1100 0011
>>> a << 2240 # 1111 0000
>>> a << 215 # 0000 1111
```

#### Thứ tự ưu tiên của các toán tử

| Thứ tự | Toán tử |
|---------|---------|
| 1 | `**` |
| 2 | `~`, `+` , `-` |
| 3 | `*`, `/`, `%`, `//` |
| 4 | `+`, `-` |
| 5 | `>>`, `<<` |
| 6 | `&` |
| 7 | `^`, `|` |
| 8 | `<=`, `<`, `>`, `>=` |
| 9 | `==`, `!=` |
| 10 | `=`, `%=`, `+=`, `-=`, `*=`, `**=`, `/=`, `//=` |
| 11 | `is`, `is not` |
| 12 | `in`, `not in` |
| 13 | `not`, `or`, `and` |

Trên đấy là những ghi chép tổng quát về toán tử trong Python. Chi tiết hơn, bạn có thể tham khảo [operator — Standard operators as functions](https://docs.python.org/3/library/operator.html)
