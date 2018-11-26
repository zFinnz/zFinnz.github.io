```py
import gc
# Chúng ta dung ctypes để truy cập các đối tượng không thể 
#truy cập của chúng ta theo địa chỉ bộ nhớ.
class PyObject(ctypes.Structure):
    _fields_ = [("refcnt", ctypes.c_long)]
gc.disable()  # Vô hiệu hóa gc
lst = []
lst.append(lst)
# Lưu địa chỉ của list
lst_address = id(lst)
# Phá hủy tham chiếu lst
del lst
object_1 = {}
object_2 = {}
object_1['obj2'] = object_2
object_2['obj1'] = object_1
obj_address = id(object_1)
# Phá hủy các tham chiếu
del object_1, object_2
# Bỏ ghi chú nếu bạn muốn chạy trình gom rác thủ công 
# gc.collect()
# Kiểm tra bộ đếm tham chiếu
print(PyObject.from_address(obj_address).refcnt)
print(PyObject.from_address(lst_address).refcnt)
```
