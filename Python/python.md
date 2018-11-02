```py
# Ba phép toán sau đây là giống nhau và tương đương với a + b>>> a.__add__(b)
>>> import operator
>>> operator.add(a, b)
>>> operator.__add__(a, b)
```

```py
>>> 5 + 611
>>> 5 - 6-1
>>> 5 // 60
>>> 5 % 65
>>> 5 * 630
>>> 5 / 60.8333333333333334
>>> 5 ** 615625
```

```py
>>> 5 > 6
False
>>> 5 >= 6
False>>> 
5 < 6
True
>>> 5 <= 6
True
>>> 5 == 6
False>>> 5 != 6
True
```

```py
>>> a = 5
>>> a += 5 # Tương đương với a = a + 5
10
>>> a -= 5 # Tương đương với a = a - 5
0
>>> a *= 5 # Tương đương với a = a * 5
25
>>> a /= 5 # Tương đương với a = a / 5
1
>>> a //= 5 # Tương đương với a = a // 5
1
>>> a %= 5 # Tương đương với a = a % 5
0
```

```py
>>> True and True
True
>>> True and False
False
>>> True or False
True
>>> True or True
True
>>> not True
False
```

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

```py
>>> 2 in range(10)
True
>>> 2 not in range(10)
False
```

```py
>>> a = 5
>>> b = 4 + 1
>>> a is b
True
>>> a is 5
True
>>> a is 4
False
```
