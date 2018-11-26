```py
o1 = type('X', (object,), dict(a='Foo', b=12))
print(type(o1))
#<class 'type'>
print(vars(o1))
{'b': 12, 'a': 'Foo', '__dict__': <attribute '__dict__' of 'X' objects>, 
'__doc__': None, '__weakref__': <attribute '__weakref__' of 'X' objects>}
class test:
  a = 'Foo'
  b = 12
  
o2 = type('Y', (test,), dict(a='Foo', b=12))
print(type(o2))
#<class 'type'>
print(vars(o2))
{'b': 12, 'a': 'Foo', '__doc__': None}
```
