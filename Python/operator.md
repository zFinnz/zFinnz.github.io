<h1 align="center"> Toán tử trong Python </h1>



Trong Python các toán tử được cung cấp trong module Operator(Lib/operator.py).

Ví dụ : `1+2`, thì `1` và `2` được gọi là toán hạng, còn `+` là toán tử. Toán tử này sẽ được map với hàm `add(1,2)`.


# ▶ Danh sách các toán tử trong python

```py
import operator
operator.func(a,b)
```

| Toán tử | Cú pháp | Hàm |
|---------|---------|-----|
| Phép cộng | a+b | add(a+b) |
| Nối chuỗi | seq1+seq2 | concat(seq1+seq2) |
| Kiểm tra chứa chuỗi |	obj in seq | contains(seq, obj) |
| Chia | a / b | truediv(a, b) |
| Chia | a // b	| floordiv(a, b) |
| And | a & b | and_(a, b) |
| Xor |	a ^ b |	xor(a, b) |
| Đảo bit |	~ a	| invert(a) |
| Or | a l b | or_(a, b) |
| Lũy thừa | a ** b | pow(a, b) |
| Nhân | a * b | mul(a, b) |
| Đảo dấu |	- a | neg(a) |
| Cắt mảng | seq[i:j] |	getitem(seq, slice(i, j)) |
| Trừ |	a - b |	sub(a, b) |
| Nhỏ hơn |	a < b |	lt(a, b) |
| Nhỏ hơn hoặc bằng | a <= b | le(a, b) |
| So sánh bằng | a == b | eq(a, b) |
| So sánh khác | a != b | ne(a, b) |
| So sánh lớn hơn hoặc bằng | a >= b | ge(a, b) |
| So sánh lớn hơn |	a > b |	gt(a, b) | 



