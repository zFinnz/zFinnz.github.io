Hiểu về cách khởi tạo lớp Python

Giả sử bạn có một lớp `Foo`:
```py
class Foo(object):
    def __init__(self, x, y=0):
        self.x = x
        self.y = y
```
Điều gì xảy ra khi bạn khởi tạo nó (tạo một `instance` của lớp đó)?
```py
f = Foo(1, y=2)
```
Câu hỏi đặt ra ở đây là khi thực hiện cuộc gọi `Foo()` - thì chức năng hoặc phương thức nào đang được gọi ở đó?
Hầu hết những người mới bắt đầu và thậm chí là nhiều lập trình viên python có kinh nghiệm sẽ trả lời ngay lập tức là `__init__` sẽ được gọi. Tuy nhiên, đây không phải là một câu trả lời đúng!
`__init__` không trả về một đối tượng, tuy nhiên, nếu gọi `Foo(1, y=2)` sẽ trả lại một đối tượng. Ngoài ra `__init__` mong đợi một tham số `self` nhưng không có tham số đó khi gọi `Foo(1, y=2)`. Có điều gì đó phức tạp hơn đã xảy ra ở đây?. Chúng ta sẽ tìm hiểu xem nhưng gì đã xảy ra khi khởi tạo một lớp trong Python.

#### Trình tự khởi tạo

Khởi tạo một lớp trong Python bao gồm một vài giai đoạn, bản thân nó chính là `Pythonic`, hiểu các giai đoạn này sẽ giúp cho ta hiểu thêm về Python.
`Foo` là một lớp và chúng chính là đối tượng! Ngoài ra, các lớp, các hàm, phương thức và instance cũng là các đối tượng. Bất cứ khi nào bạn đặt dấu ngoặc đơn sau tên của chúng thì đồng nghĩa với việc bạn gọi phương thức `__call__` của chúng.
Như vậy `Foo(1, y=2)` tương đương với `Foo.__call__(1, y=2)`. 

```py
>>> Foo.__class__
#<class 'type'>
```
Ta có thể thấy, `Foo` là một đối tượng của kiểu `type` và gọi `__call__` sẽ trả về một đối tượng của lớp `Foo`. Tếp theo, chúng ta sẽ xem phương thức `__call__` cho `type` sẽ như thế nào.
Chúng ta có thể tham khảo đoạn mã ban đầu của nó [TypeObject](https://github.com/python/cpython/blob/master/Objects/typeobject.c#L876)

Hoặc đoạn mã đã đơn giản hóa

```c
static PyObject *
type_call(PyTypeObject *type, PyObject *args, PyObject *kwds)
{
    PyObject *obj;

    if (type->tp_new == NULL) {
        PyErr_Format(PyExc_TypeError,
                     "cannot create '%.100s' instances",
                     type->tp_name);
        return NULL;
    }

    obj = type->tp_new(type, args, kwds);
    obj = _Py_CheckFunctionResult((PyObject*)type, obj, NULL);
    if (obj == NULL)
        return NULL;

    /* Ugly exception: when the call was type(something),
       don't call tp_init on the result. */
    if (type == &PyType_Type &&
        PyTuple_Check(args) && PyTuple_GET_SIZE(args) == 1 &&
        (kwds == NULL ||
         (PyDict_Check(kwds) && PyDict_Size(kwds) == 0)))
        return obj;

    /* If the returned object is not an instance of type,
       it won't be initialized. */
    if (!PyType_IsSubtype(Py_TYPE(obj), type))
        return obj;

    type = Py_TYPE(obj);
    if (type->tp_init != NULL) {
        int res = type->tp_init(obj, args, kwds);
        if (res < 0) {
            assert(PyErr_Occurred());
            Py_DECREF(obj);
            obj = NULL;
        }
        else {
            assert(!PyErr_Occurred());
        }
    }
    return obj;
}
```
Hoặc tóm gọn hơn trong Python thì điều này tương đương với:
```py
def __call__(obj_type, *args, **kwargs):
    obj = obj_type.__new__(*args, **kwargs)
    if obj is not None and issubclass(obj, obj_type):
        obj.__init__(*args, **kwargs)
    return obj
```
`__new__` cấp phát bộ nhớ cho đối tượng, xây dựng nó như một đối tượng rỗng và sau đó `__init__` được gọi để khởi tạo nó.

Cuối cùng:

+ `Foo(*args, **kwargs)` tương đương với `Foo.__call__(*args, **kwargs)`.
+ Vì Foo là một instance của `type`, `Foo.__call__(*args, **kwargs)` sẽ gọi `type.__call__(Foo, *args, **kwargs)`.
+ `type.__call__(Foo, *args, **kwargs)` sẽ gọi `type.__new__(Foo, *args, **kwargs)` mà trả về `obj`.
+ `obj` sau đó được khởi tạo bằng cách gọi `obj.__init__(*args, **kwargs)`.
+ `obj` Được trả về.

### Tùy chỉnh

Bây giờ chúng ta sẽ xem xét đến phương thức `__new__`. Về có bản, nó là phương thức chịu trách nhiệm tạo đối tượng thực tế hay nói cách khác nó phân bổ không gian cho đối tượng và trả về nó. Điều thú vị ở đây là khi bạn hiểu những gì `__new__` có thể làm, bạn có thể sử dụng nó để tùy chỉnh việc tạo đối tượng theo những cách thú vị. Cần lưu ý rằng, mặc dù `__new__` là một phương thức tĩnh, nhưng bạn không cần khai báo nó với `@staticmethod` - nó được trình thông dịch Python xử lý đặc biệt.

Một ví dụ điển hình về sức mạnh của `__new__` trong việc sử dụng nó để triển khai lớp Singleton sau:

```py
class Singleton(object):
    _instance = None
    
    def __new__(cls, *args, **kwargs):
        if cls._instance is None:
            cls._instance = super().__new__(cls, *args, **kwargs)
        return cls._instance
```
sau đó:
```py
>>> s1 = Singleton()
>>> s2 = Singleton()
>>> s1 is s2
True
```
Lưu ý rằng trong việc triển khai lớp singleton này, `__init__` sẽ được gọi mỗi làn `Singleton()` được gọi, vì vậy hãy cẩn thận.

Một ví dụ khác:
```py
class Borg(object):
    _dict = None

    def __new__(cls, *args, **kwargs):
        obj = super().__new__(cls, *args, **kwargs)
        if cls._dict is None:
            cls._dict = obj.__dict__
        else:
            obj.__dict__ = cls._dict
        return obj
```
Kết quả:
```py
>>> b1 = Borg()
    b2 = Borg()
    b1 is b2
False
>>> b1.x = 8
    b2.x
8
```

Một lưu ý cuối cùng - các ví dụ trên cho thấy sức mạnh của `__new__`, nhưng bạn có thể sử dụng nó, không có nghĩa là bạn nên dùng nó:

> `__new__` là một trong những tính năng dễ bị lạm dụng nhất trong Python. Nó tối nghĩa, bị đánh đố với những cạm bẫy và hầu hết mọi trường hợp sử dụng mà tôi tìm thấy cho nó đều được phục vụ tốt hơn bởi nhiều công cụ khác của Python. Tuy nhiên, khi bạn cần `__new__`, nó vô cùng mạnh mẽ và vô giá để hiểu.
- Arion Sprague, Python's Hidden New

### Kết luận 

Rất hiếm khi bạn cần giải quyết một vấn đề trong python mà cần sử dụng đến `__new__`. Tuy nhiên có những vấn đề mà `__new__` có thể giải quyết được ngay. Vì vậy hãy cẩn trọng khi sử dụng!