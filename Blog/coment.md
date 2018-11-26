Có 2 cách thường dùng để chuyển đổi 1 số về số nhị phân
+ Sử dụng hàm đệ quỵ
```py
def decimalToBinary(n): 
  if n > 1: 
    decimalToBinary(n//2)  
  print (n%2,end="")          
>>> decimalToBinary(8) 
1000
>>> decimalToBinary(18) 
10010
>>> decimalToBinary(7) 
111
```
+ Sử dụng vòng lặp
```py
def Binary(n): 
  binary = "" 
  i = 0
  while n > 0 and i<=8: 
    s1 = str(int(n%2)) 
    binary = binary + s1 
    n /= 2
    i = i+1
    d = binary[::-1] 
  return d 
print(Binary(100))
001
```
