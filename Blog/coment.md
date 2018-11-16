Chú thích trong python dùng để làm rõ đoạn code của bạn hoặc sử dụng để vô hiệu hóa một đoạn code của chương trình mà bạn cần loại bỏ chúng tạm thời bởi vì chú thích sẽ bị bỏ qua khi chương trình được thực thi.
Ví dụ:
```py
# Một chú thích đơn giản, bạn có thể dùng để chú thích đoạn code của mình.
print("I love Python!") # Bạn cũng có thể chú thích như thế này.
# Sử dụng chú thích để loại bỏ đoạn code tạm thời:
# print("Hello World!")
# Chưa có ngoại lệ nào được gọi trước khi gọi raise
```
+ Chú thích trong Python sẽ bị bỏ qua khi chương trình được thực thi.
+ Một chú thích bắt đầu bằng dấu `#` cho đến hết `cuối dòng vật lí`, có thể đặt ở đầu dòng, sau khoảng trắng hoặc mã, nhưng không được đặt trong chuỗi kí tự.

💡 Lưu ý:
+ Đoạn mã `# -*- coding: utf-8 -*-` vẫn sẽ bị Python bỏ qua như một chú thích trong code, tuy nhiên nó vẫn được sử dụng cho việc thiết lập và định dạng file.
+ Chú thích như sau sẽ không được chấp nhận `print("hello #word !")`. Do dấu `#` được đặt trong chuỗi kí tự.
+ Bạn không nên nhầm lẫn giữa chú thích và `docstring`. Chú thích được đặt sau dấu `#` còn `docstring` được đặt trong dấu `""" """`.

Bạn có thể sử dụng chú thích như thế nào:
+ Chú thích trên 1 dòng
```py
# Gán giá trị cho biến a và b
a, b = 5, 6
print(a+b)
11
```
+ Chú thích trên nhiều dòng
```py
# Viết một hàm sumf
# Hàm tính tổng giữa 2 số a và b
# Sau đó in ra giá trị
def sumf(a, b):
	print(a+b)
sumf(5, 6)
11
```
+ Chú thích sau câu lệnh
```py
if True:
	print("Hello World!") # In ra câu "Hello World!"
```
+ Chú thích để loại bỏ đoạn code không cần thiết tạm thời mà không cần xóa nó
```py
if True:
	#print("Hello!")
	print("I am Finn")
```
Vậy tại sao ta nên dùng chú thích trong code của mình:
+ Chú thích sẽ giúp ta làm rõ rơn đoạn code của mình, như một ghi chú để thuận lợi cho việc cải tạo, nâng cấp code sau này. Bởi vì có những đoạn code, nếu không được chú thích thì sau này thì  `chỉ có chúa mới hiểu bạn viết gì `.
+ Thứ 2, trong code của bạn có chú thích rõ ràng sẽ trông chuyên nghiệp hơn, `đẳng cấp` 😅 hơn so với việc không có chú thích.
