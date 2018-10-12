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
My name's an
>>> '"Yes", It\'s my'
```
- Nếu bạn không muốn các kí tự mở đồng bằng cách sử dụng kí tự đặc biệt như `\`, bạn có thể sử dụng các `chuỗi thô` bằng cách thêm `r` trước các trích dẫn.
- Chuỗi kị tự có thể kéo dài trong nhiều dòng bằng cách sử dụng `"""..."""` hoặc `'''...'''`, kết thúc dòng sẽ được tự động bao gồm trong chuỗi, nếu bạn không muốn thì có thể sử dụng `\` để nối dòng tiếp theo với dòng hiện tại. Lưu ý: dấu `\` chỉ dó tác dụng đối với dòng chứa kí tự và dòng tiếp theo sau đó, nếu muốn nối chuỗi nhiều dòng thành một, bạn sẽ phải sử dụng mỗi kí tự `\` cho mỗi cuối dòng.
- Các chuỗi có thể được nối với nhau bằng toán tử `+`, `*`.
```py
>>> print('C:\User\name') # \n ở đây sẽ được hiểu là xuống dòng mới
C:\User
ame
>>> print('C:\\User\\name')
C:
>>> print(r'C:\User\name')
>>> 'Hello ' + 'World!'
>>> 'Hello World!'
>>> 'Hello' * 2
>>> 'Hello Hello'
```


