#### Các khái niệm
Hầu hết chúng ta đều nghĩ chuỗi kí tự là một chuỗi các kí tự (thực sự là các mã số nguyên của chúng) được dùng để biểu diễn văn bản. 
Ở hóa kì, tiêu chuẩn `ASCII` là định nghĩa khái niệm chuỗi văn bản của họ, định nghĩa mã kí tự `0...127`, và điều này cho phép mỗi kí tự được lưu trữ trong một `byte` (8 bit). 
Ví dụ, tiêu chuẩn `ASCII` sẽ ánh xạ kí tự `a` đến giá trị số nguyên `97` (`61` trong `hex`), có thể lưu trữ được trong một byte đơn của bộ nhớ hoặc các tệp. Chúng ta làm một phép thử nhỏ để xác nhận điều trên:
```py
>>> ord('a')
97
>>> hex(97)
'0x61'
>>> chr(97)
'a'
```
Nhưng đôi khi điều này là không đủ. Các kí tự khác nhau của các ngôn ngữ trên thế giới và các dấu trọng âm không thể biểu diễn trong `ASCII`. 
Để cho phép một số kí tự đặc biệt, một số tiêu chuẩn cho phép tất cả các giá trị có thể có trong 1 `byte` (8 bit), trong khoảng `0...255`, vàbiểu diễn các ký tự và gán giá trị `128...255` cho các kí tự đặc biệt. 
Tiêu chuẩn như vậy gọi là `Latin-1` và được sử dụng rộng rãi ở Tây Âu. Do đó trongg tiếng `latin-1`, mã kí tự `>127` được gán cho dấu trọng âm và các kí tự đặc biệt khác. 
Ví dụ, kí tự được gán cho byte `196` là một kí tự được đánh dấu là kí tự đặc biệt và không phải là `ASCII`.
```py
>>> 0xC4
196
>>> chr (196)
'Ä'
```
Tuy nhiên, một số bảng chữ cái xác định rất nhiều ký tự mà không thể biểu diễn chúng dưới dạng một mã cỡ byte cho mỗi kí tự. Văn unicode cho phép linh hoạt hơn nhiều, trên thực tế nó xác định đủ mã kí tự để đại diện cho hầu hết mọi ngôn ngữ tự nhiên được sử dụng, cộng với một bộ kí hiệu lớn. 
Đôi khi còn được gọi là các chuỗi kí tự `rộng`, vì phạm vi kí tự của nó quá rộng, đến mức cần nhiều byte để biểu diễn cho ngững kí tự riêng lẻ. 
Bảng mã `Unicode` chứa gần như toàn bộ các kí tự của hầu hết các ngôn ngữ trên thế giới, có nghĩa là gần như bất kì kí tự nào cũng có thể mã hóa được qua bảng `unicode`. Và mỗi ký tự sẽ tương ứng với `1 byte` mã hóa. 
Trong python, ký tự mã hóa `Unicod`e được bắt đầu bằng chữ `\u`. Ví dụ chữ `Tiếng việt` sẽ được mã hóa là `Ti\u1ebfng vi\u1ec7t`. Một điểm lưu ý đó là `str` và `unicode` ở Python2 sẽ chuyển thành `bytes` và `str` ở Python3.

#### Mã hóa kí tự
Chìa khóa để hiểu cách `unicode` hoạt động nằm trong mã ký tự của nó (hay còn gọi là `mã điểm`) trong bộ nhớ được ánh xạ tới các biểu mẫu được mã hóa của chúng khi cần truyền dữ liệu hoặc lưu trữ hiệu quả.Có 2 thuật ngữ ta cần lưu ý đó là:
+ `encoding` (mã hóa): là quá trình dịch chuỗi kí tự thành dạng byte thô của nó theo bất kỳ mã hóa mong muốn nào.
+ `decode` (giải mã): là quá trình dịch chuỗi byte thô thành định dạng chuỗi ký tự của nó, theo mã hóa ban đầu được sử dụng để tạo chuỗi byte. Unicode xác định cả mã kí tự và một bộ mã hóa tiêu chuẩn. `Unicode` chứa cả mã kí tự và bộ mã hóa tiêu chuẩn. Đối với một số mã bình thường `ASCII` và `Latin-1` ta có thể ánh xạ từng kí tự thành `1 byte` mà không cần phải thực hiện mã hóa và giả mã. Còn đối với các mã hóa khác, ánh xạ có thể phức tạp và cho ra nhiều byte cho mỗi kí tự.
Chúng ta đã hiểu `unicode` là cách duy nhất cho tất cả các kí tự dùng trong ngôn ngữ viết. Nhưng những con số đó được ghi thế nào trong các hệ thống xử lí văn bản lại là vấn đề khác. 
Do phần lớn các phần mềm chỉ biết tới các hệ thống mã hóa `8-bit` và không thể dùng nhiều hơn 256 điểm mã nếu không có những cách giải quyết đặc biệt. 
Do đó, người ta phải tạo ra nhiều cơ chế để dùng `unicode` và tùy thuộc vào khả năng lưu trữ, sự thích ứng với chương trình và sự tương tác hệ thống mà ta chọn cho phù hợp. Có các loại mã hóa `unicode` sau:

##### UTF-32
Cách đơn giản nhất để lưu trữ `2^20+2^16` các điểm mã là sử dụng `32 bit` cho mỗi kí tự (nghĩa là `4 byte`), cách mã hóa này gọi là `UTF-32`. Vấn đề của cách mã hóa này là nó dùng gấp 4 lần số byte trước kia, nên nó ít được dùng trong các vật nhớ ngoài như băng, đĩa. Tuy nhiên, nó rất đơn giản nên một số chương trình sẽ sử dụng để mã hóa `32 bit` bên trong khi xử lí `Unicode`.

#####  UTF-16
Một cách mã hóa dùng Unicode `20 bit`. Ít được dùng

#####  UTF-8
`UTF-8` được thiết kế để tương thích với chuẩn `ASCII`. `UTF-8` có thể sử dụng từ `1` (cho những kí tự thuộc `ASCII`) cho đến `6 byte` để biểu diễn 1 kí tự. Các quy định của `UTF-8`:
+ Các kí tự có giá trị nhỏ hơn `0x80`, sử dụng `1 byte` có cùng giá trị.
+ Các kí tự nhỏ hơn `0x800`, sử dụng `2 byte`: byte thứ 1 có giá trị `0xC0` cộng với 5 bit từ 7 tới 11, byte thứ 2 có giá trị `0x80` cộng với các bit từ 1 tới 6.
+ Các kí tự nhỏ hơn `0x10000`, sử dụng 3 byte; byte thứ nhất có giá trị `0xE0` cộng với 4 bit từ thứ 13 tới 16, byte thứ 2 có giá trị `0x80` cộng với 6 bit thừ thứ 7 đến 12, byte thứ 3 có giá trị `0x80` cộng với 6 bit thừ 1 tới 6
+ Các ký tự có giá trị nhỏ hơn `0x200000`, sử dụng 4 byte: byte thứ nhất có giá trị `0xF0` cộng với 3 bit từ thứ 19 tới 21; byte thứ hai có giá trị `0x80` cộng với 6 bit từ thứ 13 tới 18; byte thứ ba có giá trị `0x80` cộng với 6 bit từ thứ 7 tới thứ 12; byte thứ tư có giá trị `0x80` cộng với 6 bit từ thứ 1 tới thứ 6.
Hiện nay các giá trị ngoài giá trị trên đều chưa được nhưng có thẽ sử dụng trong tương lai, chuỗi kí tự dài 5 byte hoặc 6 byte.

#####  UTF-7
Ít được sử dụng nhất.

#### Văn bản và tệp nhị phân
File I/O cũng được xác định rõ rành trong python3 để phản ánh `str/bytes` khác nhau. Thực sự, văn bản thực chất chỉ là các mã kí tự số nguyên được giải mã khi nó nằm trong bộ nhớ.
Khi một tệp được mở ở chế độ văn bản , việc đọc dữ liệu của nó sẽ tự động giải mã nội dung của nó (theo mặc định nền tảng hoặc mã hóa được cung cấp) và trả về nó dưới dạng `str`, và tự động mã hóa nó trước khi chuyển vào tập tin. Các tệp chế độ văn bản cũng hỗ trợ dịch thuật cuối dòng phổ biến và các đối số đặc tả mã hóa.
Khi một tệp được mở ở chế độ nhị phân bằng cách thêm `b` vào đối số chuỗi chế độ trong lời gọi `open()`, việc đọc dữ liệu của nó không giải mã nó theo bất kỳ cách nào và chỉ trả về nội dung thô và không thay đổi. Các tệp chế độ nhị phân cũng chấp nhận một đối tượng `bytearray` cho nội dung được ghi vào tệp.
Nếu bạn đang xử lý các tệp hình ảnh, dữ liệu được tạo bởi các chương trình khác có nội dung bạn phải trích xuất và một số luồng dữ liệu của thiết bị, rất có thể bạn sẽ muốn xử lý nó bằng `bytes` các tệp chế độ nhị phân. Bạn cũng có thể chọn `bytearray` để cập nhật dữ liệu mà không cần sao chép dữ liệu trong bộ nhớ.
Thay vào đó, nếu bạn đang xử lý thứ gì đó có tính chất văn bản như đầu ra chương trình, `HTML`, `JSON`, văn bản quốc tế và `CVS` hoặc tệp `XML`, bạn có thể muốn sử dụng `str` và các tệp chế độ văn bản.
Ngôn ngữ Python phân biệt rõ ràng giữa `str` và `bytes` nên bạn phải quyết định nên dùng định dạng văn bản nào cho đối tượng mà bạn sẽ thực hiện nội dung trên nó.
Các kiểu chuỗi của Python
Trong Python3 có 3 loại đối tượng chuỗi:
+ `str`: Đại diện cho văn bản Unicode (Các điểm mã được giải mã)
Bạn có thể tham khảo cú pháp cách thức xây dựng một đối tượng `str` ở bài viết [Str](https://0xpan.blogspot.com/2018/11/ham-built-in-trong-python.html#load-h4-61).
```py
>>> a = "hello" # tạo một đối tượng str (kí tự unicode, 8bit hoặc rộng hơn)
>>> print a
'hello'
>>> type(a)
'<class 'str'>'
>>> a[0] # index trả về một str cho str
'h'
```
+ `bytes`: Đại diện cho dữ liệu nhị phân (bao gồm cả văn bản được mã hóa)
Bạn có thể tham khảo cú pháp cách thức xây dựng một đối tượng `byte` ở bài viết [Bytes](https://0xpan.blogspot.com/2018/11/ham-built-in-trong-python.html#load-h4-8).
```py
>>> a = b"hello" # Tạo một đối tượng byte (byte 8 bit)
>>> print a # In dưới dạng chuỗi kí tự, thực ra là chuỗi int
b'hello'
>>> type(a)
'<class 'bytes'>'
>>> a[0] # index trả về một int cho byte
104
```
+ `bytearray`: Một đối tượng của mảng byte cho trước. 
Bạn có thể tham khảo cú pháp cách thức xây dựng một đối tượng `bytearray` ở bài viết [Bytearray](https://0xpan.blogspot.com/2018/11/ham-built-in-trong-python.html#load-h4-7).
```py
# Ví dụ 1: source là chuỗi
string1 = "i am finn"
# encoding là 'utf-8'
mang1 = bytearray(string1, 'utf-8')
print(mang1)
# Ví dụ 2: source là số
string2 = 10
mang2 = bytearray(string2)
print(mang2)
#Ví dụ 3: source là list
ListSo = [2,4,6,8,10]
mang3 = bytearray(ListSo)
print(mang3)
# Kết quả
bytearray(b'i am finn')
bytearray(b'\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00')
bytearray(b'\x02\x04\x06\x08\n') 
```

#### Chuyển đổi
Ở python3 yêu cầu bạn thực hiện chuyển đổi giữa các định dạng một cách thủ công và rõ ràng:
+ `str.encode()` tương đương với `bytes(str, encoding)`: Tạo một `bytes` từ `str`.
+ `byte.encode()` tương đương với `str(bytes, encoding)`: Tạo một `str` từ `bytes`.
```py
>>> s = 'hello'
>>> s.encode() # str thành byte: mã hóa văn bản thành byte thô
b'hello'
>>> byte(s, encoding='ascii') # str thành byte, thay thế b'hello'
>>> b = b'helo' 
>>> b.decong() # byte thành str: giải mã byte thô thành văn bản
'hello'
>>> str(b, encoding='ascii') # bytes thành str, thay thế 'hello'
```
Lưu ý rằng, các mã hóa mặc định khá nhau cho mỗi nền tảng của bạn có sẵn trong các module `sys` và `locale`, nhưng đối số của mã hóa `bytes()` không phải là tùy chọn mặc dù nó nằm trong `str.encode()` và `bytes.decode()`Và mặc dù `str()` không yêu cầu đối số mã hóa nhưng không có nghĩa là mặc định, thay vào đó, `str()` mã hóa trả về chuỗi in `bytes` không phải là `str`.
```py
>>> import sys, locale # Xác định miền địa phương
>>> sys.platform  # xem nền tảng 
'win32'
>>> locale.getpreferredencoding(False) # Mặc định là cp1252
'cp1252'
>>> sys.getdefaultencoding() # Nhưng str() không sử dụng mặc định
'utf-8'
>>> bytes(S)
TypeError: string argument without an encoding
>>> str(B)     # str không có encoding
b'spam'     # in chuỗi, không có dự chuyển đổi!
>>> len(str(B))
7
>>> len(str(B, encoding='ascii')) # sử sụng encoding để mã hóa
4
```