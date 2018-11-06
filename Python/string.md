<h1 align="center"> String trong Python </h1>



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

# Toán tử trong chuỗi

| Ki tự | Miêu tả | Ví dụ |
|-------|---------------------|---------|
| + | Phép cộng hai chuỗi | 'a' + 'b' = 'ab' | 
| * | Phép nhân chuỗi với toán hạng | 'a'* 2 = 'aa' |
| [] | Phép truy xuất phần tử chuỗi | 'abc'[1] = b |
| `in` | Trả về `True` nếu tồn tại kí tự đã cho trong chuỗi | 'a' in 'abc' = True |
| `not it` | Trả về `True` nếu không tồn tại kí tự đã cho trong chuỗi | 'a' not in 'abc' = False |
| % | Định dạng chuỗi | |
| Chr(x) | Chuyển kiểu `int` thành kí tự |
| Unichr(x) | Chuyển kiểu `int` thành kí tự unicode |
| Ord(x) | Chuyển `String` dang kiểu `int` |
| Hex(x) | Chuyển Kiểu `int` sang `hex` |
| oct(x) | Chuyển kiểu `int` sang kiểu số `oct` |

#  Các kiểu xuất chuỗi

| Kiểu | ví dụ|
|-------|-----|
| print "%x" %x | a = 5; print "%x" %a|
| print x | a = 5; print a|
| print "{x},{y}".format(x,y) | print "{x},{y}".format(x=5,y=6)|

#  Các định dạng chuỗi

| Kí hiệu định dạng | Kiểu Chuyển đổi |
|-------------------|-----------------|
| %c | Kí tự (Nhận đầu vào 1 kí tự hoặc chữ số) |
| %s | Chuyển đổi chuỗi qua Str() trước khi định dạng |
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

#  Các hàm dựng sẵn của Chuỗi
| STT | Hàm | Miêu tả |
|-----|-----|-----|
| 1 | capitalize() | Viết hoa kí tự đầu tiên của chuỗi |
| 2 | center(chiều rộng, kí tự lấp đầy) | Đưa chuỗi vào giữa và lấp đầy 2 bên bằng kí tự |
| 3 | count(str[, beg = 0, end = len(string)]) | đếm số lần kí tự xuất hiện trong chuỗi |
| 4 | encode(encoding='UTF-8', errors='strict') | Trả về chuỗi đã được mã hóa |
| 5 | decode(encoding='UTF-8', errors='strict') | Trả về chuỗi đã được giải mã |
| 6 | endswith(suffix[, beg =0, end =  len(string)]) | Trả về `True` nếu chuỗi được kết thúc bằng hậu tố |
| 7 | explandtabs(tabsize) | Mở rộng khoảng cách của kí tự `\t` theo `tabsize` |
| 8 | find(str[, beg = 0, end = len(string)]) | Tìm vị trí đầu tiên của một kí tự trong chuỗi |
| 9 | rfind(str[, beg = 0, end = len(string)]) | Giống `find` nhưng trả về chỉ mục cuối cùng |
| 10 | index(str[, beg = 0, end = len(string)]) | Giống `find()` nhưng sẽ đưa ra một ngoại lệ nếu không tìm thấy|
| 11 | rindex(str[, beg = 0, end = len(string)]) | Giống `rfind()` nhưng sẽ đưa ra một ngoại lệ nếu không tìm thấy|
| 12 | isalnum() | Kiểm tra xem chuỗi có chưa kí tự số hay không |
| 13 | isalpha() | Kiểm tra xem chuỗi chỉ chứa các kí tự chữ cái hay không |
| 14 | isdigit() | Kiểm tra xem chuỗi chỉ chứa các kí tự số hay không |
| 15 | isdemacial() | Trả về `True` nếu một chuỗi dạng `Unicode` chỉ chứa các ksi tự thập phân |
| 16 | islower() | Kiểm tra xem chuỗi chỉ chứa các kí tự chữ cái thường hay không |
| 17 | isnumberic() | Kiểm tra xem chuỗi chỉ chứa các kí tự số hay không(chỉ dùng với kiểu unicode) |
| 18 | isspace() | Kiểm tra xem chuỗi chỉ chứa kí tự `space` hay không |
| 19 | istitle() | Kiểm tra xem chuỗi ở dạng `titalcase` ( viết hoa các kí tự đầu tiên) hay không |
| 20 | join(seq) | Nối các phần tử của seq thành một chuỗi |
| 21 | len(str) | Trả về độ rộng của chuỗi |
| 22 | ljust(width, fillchar) | Trả về chuỗi mới được căn chỉnh vào bên trái,bên phải là các `fillchar` sao cho độ rộng của chuỗi bằng `width` |
| 23 | rjust(width, fillchar) | Trả về chuỗi mới được căn chỉnh vào bên phải,bên trái là các `fillchar` sao cho độ rộng của chuỗi bằng `width` |
| 24 | lower() | Chuyển đổi tất cả các chữ hoa trong chuỗi sang chữ thường |
| 25 | upper() | Chuyển đổi tất cả các chữ thường trong chuỗi sang chữ hoa |
| 26 | swapcase() | Đảo ngược kiểu của tất cả các kí tự trong chuỗi |
| 27 | lstrip() | Xóa tất cả các khoảng trắng ở đầu trong chuỗi |
| 28 | rstrip() | Xóa tất cả các khoảng trắng ở cuối trong chuỗi |
| 29 | strip() | Thực hiện cả 2 phương thức `lstrip()` và `rstrip()` |
| 30 | max(str) | Trả về chữ cái lớn nhất từ chuỗi đã cho |
| 31 | min(str) | Trả về chữ cái nhỏ nhất từ chuỗi đã cho |
| 32 | replace(old, new, [max]) | Thay thế tất cả sự xuất hiện của `old` bằng `new` trong chuỗi với số lần xuất hiện là `max` |
| 33 | split([str, num=string.count(str)) | Chia chuỗi theo `str` đã cho(`space` nếu `str` không được cung cấp; và `num` chuỗi con nếu được cung cấp) |
| 34 | startswith(str, beg=0, end =len(string)) | Xác định xem chuỗi có bắt đầu với chuỗi `str` hay không, trả về `True` hoặc `False` |
| 35 | title() | Trả về 1 bản sao chuỗi sao cho các kí tự đầu tiên của chuỗi đều viết hoa |
| 36 | zfill(width) | Trả về một chuỗi mới, bao gồm chuỗi ban đầu và được đệm thêm các số `0` vào bên trái sao cho độ dài chuỗi là `width` |


