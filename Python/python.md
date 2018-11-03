
<h1>Garbage collection in Python</h1>

Thông thường trong Python, bạn không cần phải quan tâm về quản lí bộ nhớ. Bởi vì khi các đối tượng không còn cần thiết nữa, Python sẽ tự động thu hồi bộ nhớ từ chúng. 
Tuy nhiên, hiểu cách trình dọn dẹp của Pyhon hoạt động có thể giúp chúng ta viết các chương trình Python tốt hơn.

####  Quản lý bộ nhớ


Không giống như nhiều ngôn ngữ khác, Python không nhất thiết phải giải phóng bộ nhớ trở lại hệ điều hành. 
Thay vào đó, nó có một cơ chế phân bổ đối tượng chuyên biệt cho các đối tượng nhỏ (<= 521 byte), mà giữa một phần của bộ nhớ đã được cấp phát để sử dụng trong tương lai.
Dung lượng bộ nhớ mà Python nắm giữ tùy thuộc vào các mẫu sử dụng, trong một số trường hợp, tất cả bộ nhớ được cấp phát sẽ không bao giờ được giải phóng.
Do đó, nếu một quá trình Python chạy dài mất nhiều bộ nhớ theo thời gian, nó không nhất thiết có nghĩa là bạn bị rò rỉ bọ nhớ.

#### Thuật toán thu gom rác
Bộ thu gom rác của Cpython tiêu chuẩn có hai thành phần, [Tính toán tham chiếu  (reference counting )](https://en.wikipedia.org/wiki/Reference_counting) và bộ gom rác phát sinh (generational garbage collector), được gọi là [module gc ](https://docs.python.org/3.6/library/gc.html)
Các `tính toán tham chiếu ` là thuật toán vô cùng hiệu quả và đơn giản, nhưng nó không thể phát hiện `reference cycle` (reference cycle có nghĩa là một hoặc nhiều đối tượng tham chiếu lẫn nhau). Dó là lí do tại sao Python có một thuật toán bổ sung được gọi là ` bộ gom rác phát sinh `, nó sẽ làm việc với `reference cycle`.
Vệctính toán tham chiếu  tham chiếu là cơ sở của Python và không thể bị vô hiệu hóa, trong khi bộ thu gom rác phát sinh là tùy chọn và có thể sử dụng thủ công.

#### Tính toán tham chiếu
Tính toán tham chiếu là một kĩ thuật đơn giản mà trong đó các đối tượng được giải phóng khi không có tham chiếu đến chúng trong chương trình.
Mỗi đối tượng trong Python chứa một số tham chiếu - tức là số lần nó được tham chiếu bởi một đối tượng khác hoặc bởi một biến. Khi số tham chiếu này đạt đến 0, nó sẽ bị xóa ngay tại chỗ. Vì đối tượng đó có thể tham chiếu đến các đối tượng khác (do đó làm giảm số lượng tham chiếu của chúng), điều này có thể kích hoạt phản ứng dây chuyền khi nhiều đối tượng bị xóa liên tiếp.

Mỗi biến trong python là một tham chiếu ( một con trỏ) đến đối tượng và không phải là giá trị thật. Ví dụ, câu lệnh gán chỉ thêm một tham chiếu mới về phía bên tay phải.
Để theo dõi tham chiếu của mỗi đối tượng (kể cả số nguyên) có một trường thừa gọi là số tham chiếu, được tăng hay giảm khi con trỏ trỏ tới đối tượng được sao chép hoặc xóa. Xem thêm phần [Đối tượng, Loại và Tham chiếu](https://docs.python.org/3.7/c-api/intro.html#objects-types-and-reference-counts), để có thể hiểu thêm chi tiết.

Ví dụ, nơi số lượng tham chiếu tăng:
+ Toán tử gán
+ Chuyển đổi số
+ Thêm một đối tượng vào một danh sách (số tham chiếu của đối tượng sẽ được tăng lên)
Nếu trường đếm tham chiếu đạt đến số không. Cpython sẽ tự động gọi hàm deallocation của đối tượng đặc biệt. Nếu đối tượng chứa tham chiếu đến các đối tượng khác, thì số lượng tham chiếu của chúng cũng bị giảm đi. Ví dụ, khi một danh sách bị xóa, số tham chiếu của tất cả các mục của nó sẽ bị giảm đi.
Các biến được khai báo bên ngoài hàm, lớp và các khối lệnh được gọi là biến toàn cục. Thông thường các biến này tồn tại cho đến khi kết thúc quá trình Python. Do đó, số lượng tham chiếu của đối tượng nơi được định nghĩa bởi biến toàn cục, không bao giờ giảm xuống 0.
Các biến được định nghĩa bên trong các khối lệnh, hàm, lớp gọi là biến cục bộ. Nếu trình thông dịch Python thoát ra khỏi khối, nó sẽ phá hủy tất cả các tham chiếu được tạo bên trong khối.
Bạn luôn có thể kiểm tra số tham chiếu hiện tại bằng cách sử dụng hàm `sys.getrefcount`.
Ví dụ:
```py
foo = []
# 2 thám chiếu, 1 từ biến var, 1 từ getrefcount
print(sys.getrefcount(foo))
def bar(a):
    # 4 tham chếu
    # từ biến var, tham số hàm, getrefcount và hàm stack của Python
    print(sys.getrefcount(a))
bar(foo)
# 2 tham chiếu, phạm vi của hàm bị phá hủy
print(sys.getrefcount(foo))
```
Lí do chính tại sao Cpython sử dụng tính toán tham chiếu là đã cũ. Có rất nhiều cuộc tranh luận về điểm yếu của kĩ thuật này. Một số người cho rằng các thuật toán thu gom rác hiện đại có thể hiệu quả hơn mà không cần tính toán tham chiếu. Thuật toán này có rất nhiều vấn đề, chẳng hạn như tham chiếu xoay vòng, khóa luồng và bộ nhớ, hiệu suất hoạt động. Ví dụ đối với đoạn mã đơn giản sau:
```py
number = 42
number += 1
```
Trước tiên, Python cần tăng số tham chiếu của 42 (dòng 1), sau đó trong dòng 2 giảm nó và tăng số tham chiếu của 43. Nhưng quá trình xử lý bổ sung này thực sự nhỏ so với quá trình xử lý mà Python thực hiện chỉ để tìm biến "number", xác định loại của nó, v.v.

Tuy nhiên, ưu điểm chính của cách tiếp cận này đó là các đối tượng có thể bị phá hủy ngay lập tức sau khi chúng không còn cần thiết nữa.

#### Bộ gom rác phát sinh
Tại sao chũng ta cần thêm bộ thu gom rác phát sinh:
Do thuật toán tính toán tham chiếu ở trên có một vấn đề cơ bản đó là nó không thể phát hiện ra chu trình tham chiếu xoay vòng (xảy ra khi có một hoặc nhiều đối tượng tham chiếu lẫn nhau).
Ví dụ:
[Hình ảnh]
Như chúng ta thấy, đối tược `lst` đang trỏ đến chính nó, `object1` và `object2` đang trỏ đến nhau. Số lượng tham chiếu cho các đối tượng như trên luôn ít nhất là 1.
Ví dụ:
```py
import gc
# Chúng ta dung ctypes để truy cập các đối tượng không thể truy cập của chúng ta theo địa chỉ bộ nhớ.
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
Ở ví dụ trên, câu lệnh `del` đã loại bỏ các tham chiếu đến các đối tượng của chúng ta và chúng ta không còn truy cập được từ mã Python nữa. Tuy nhiên, các đối tượng vẫn còn trong bộ nhớ, đó à vì chúng vẫn đang được tham chiếu lẫn nhau với số lượng tham chiếu của mỗi đối tượng là 1.
Để giải quyết vấn đề này, Python đã tích hợp module gc có chức năng phát hiện các tham chiếu và giải quyết nó.
Tham chiếu xoay vòng chỉ xảy ra với các đối tượng container (ví dụ, trong các đối tượng có thể chứa các đối tượng khác), chẳng hạn như list, dict, class, tuple. Bộ gom rác phát sinh không theo dõi tất cả các loại immutable ngoại trừ tuple. Các tuple và dict cho dù chỉ chứa các đối tượng immutable nhưng cũng có thể không được theo dõi tùy thuộc vào các điều kiện nhất định.Do đó thuật toán đếm tham chiếu không thực sự hoàn hảo.

#### Khi nào sử dụng Bộ gom rác phát sinh(GC)
Không giống như bộ đếm tham chiếu, GC không hoạt động trong thời gian thực và chạy theo chu kì. Vì vậy, để giảm tần suất các cuộc gọi GC và tạm dừng nó, Cpython sử dụng các trình chẩn đoán khác nhau.
GC phân loại các đối tượng container thành 3 thế hệ. Mỗi đối tượng mới sẽ được bắt đầu trong thế hệ đầu tiên. Nếu như một đối tượng qua vòng thu gom rác đầu tiên, nó sẽ được chuyển sang thế hệ cao hơn. Thế hệ thấp hơn được thu thập thường xuyên hơn. Bởi vì, hầu hết các đối tượng mới được tạo đều bị xóa bỏ rất sớm, nó cải thiện hiệu suất và giảm thời gian tạm dừng GC.
Để quyết định thời điểm chạy, mỗi thế hệ có bộ truy cập cá nhân và ngưỡng riêng của nó(có thể được định cấu hình thông qua `gc.set_threshold ()`). Bộ đếm lưu trữ số lượng phân bổ đối tượng trừ deallocations từ bộ tập hợp cuối cùng. Mỗi khi bạn phân bổ một đối tượng container mới, Cpython sẽ kiểm tra bất cứ khi nào bộ đếm của thế hệ đầu tiên vượt qua ngưỡng.
Nếu chúng ta có hai hoặc nhiều thế hệ vượt quá ngưỡng, GC chọn cái cũ nhất. Đó là bởi vì các thế hệ lâu đời nhất cũng tập hợp tất cả các thế hệ mới hơn.Để giảm sự suy giảm hiệu suất đối với các đối tượng sống lâu, thế hệ thứ ba có [các yêu cầu bổ sung](https://github.com/python/cpython/blob/051295a8c57cc649fa5eaa43526143984a147411/Modules/gcmodule.c#L94) để được lựa chọn
Giá trị ngưỡng tiêu chuẩn được đặt thành (700, 10, 10) tương ứng, nhưng bạn luôn có thể kiểm tra chúng bằng cách sử dụng hàm` gc.get_threshold`.


#### Sự nguy hiểm của finalizers
Tuy nhiên, có một vấn đề khác. Trong bất kỳ ngôn ngữ nào, kẻ thù tồi tệ nhất của trình thu gom rác là finalizers - các phương thức do người dùng định nghĩa được gọi khi GC muốn thu thập một đối tượng (trong Python một finalizer được tạo ra bằng cách định nghĩa phương thức __del__). Điều gì xảy ra nếu trình kết thúc làm cho một hoặc nhiều đối tượng có thể truy cập lại? Đây là lý do tại sao, lên đến Python 3.3, các đối tượng chứa bên trong một tham chiếu vòng tròn với trình hoàn thiện không bao giờ được `thu gom rác`.
Trong đoạn mã dưới đây, chúng ta định nghĩa một lớp với trình hoàn thiện. Chúng tôi sau đó khởi tạo lớp và thêm một tham chiếu tự đến đối tượng `để gây rối` với kiểm tra GC.
```py
class MyClass(object):
    def __del__(self):
        pass
my_obj = MyClass()
my_obj.ref = my_obj
my_obj
<__main__.MyClass object at 0x00000000025FCEF0>
```
Sau đó chúng ta xóa tham chiếu đến đối tượng và có thể chạy bộ thu gom rác.
```py
del my_obj
gc.collect()
2
gc.garbage
[<__main__.MyClass object at 0x00000000025FCEF0>]
```
`gc.garbage` trả về một danh sách các đối tượng không thể thu thập được (các đối tượng được đánh dấu là không thể truy cập nhưng không thể được thu thập), bây giờ chứa đối tượng mà chúng ta đã cố xóa.

Các [PEP 442](https://www.python.org/dev/peps/pep-0442/) (Python Enhancement Proposal), thực hiện với Python 3.4, tuy nhiên thay đổi hành vi đó. Bắt đầu với Python 3.4, trong một bộ sưu tập, finalizers cho tất cả các đối tượng thuộc nhóm không thể tiếp cận của một tham chiếu xoay vòng được gọi. Những đối tượng đó trở nên có thể tiếp cận lại được "phục hồi" . Sau đó, miễn là các finalizers không làm cho nhóm có thể truy cập được nữa, tất cả các tham chiếu sẽ bị xóa và tất cả các đối tượng được thu thập. Lưu ý rằng điều này không hoạt động nếu bạn thiết lập chế độ gỡ lỗi GC 

Nhưng Python 3.4 không phải là một cơ sở để làm bất cứ điều gì với finalizers. Nếu finalizer làm cho một đối tượng có thể truy cập một lần nữa, các hiệu ứng phụ của nó (như ghi vào một tập tin) sẽ không được khôi phục.

Vì vậy, tinh thần của câu chuyện là bạn nên rất cẩn thận với finalizers và chỉ sử dụng chúng khi bạn không thể làm khác. Hãy nhớ rằng bạn không thể biết khi nào đối tượng thực sự sẽ bị xóa, ngay cả khi bạn chạy một cách rõ ràng GC (đối tượng vẫn có thể truy cập được từ một nơi khác). Tương tự như vậy, thực tế là finalizer được gọi là thậm chí không đảm bảo rằng đối tượng thực sự sẽ được thu thập.

#### Cách tìm tham chiếu xoay vòng
Thật khó để giải thích thuật toán phát hiện tham chiếu xoay vòng trong một vài đoạn văn. Nhưng về cơ bản, GC lặp lại trên mỗi đối tượng container và tạm thời loại bỏ tất cả các tham chiếu đến các đối tượng container mà nó tham chiếu. Sau khi lặp lại đầy đủ, tất cả các đối tượng mà số tham chiếu đếm nhỏ hơn hai là không thể truy cập từ mã của Python và do đó có thể được thu thập.

#### Mẹo về hiệu suất
Chu kỳ có thể dễ dàng xảy ra trong cuộc sống thực. Thông thường, bạn gặp phải chúng trong đồ thị, danh sách liên kết hoặc trong cấu trúc, trong đó bạn cần phải theo dõi các mối quan hệ giữa các đối tượng. Nếu chương trình của bạn có khối lượng công việc lớn và yêu cầu độ trễ thấp, bạn nên tránh các chu trình tham chiếu nhất có thể.

Để tránh tham chiếu vòng tròn trong mã của bạn, bạn cần sử dụng các tham chiếu yếu, được thực hiện trong module `weakref`. Không giống như các tham chiếu thông thường, `weakref.ref` không tăng số tham chiếu và trả về `None` nếu một đối tượng đã bị hủy.

Trong một số trường hợp, rất hữu ích khi vô hiệu hóa GC và sử dụng nó theo cách thủ công. Bộ sưu tập tự động có thể bị tắt bằng cách gọi `gc.disable()`. Để chạy thủ công quá trình thu thập, bạn cần sử dụng `gc.collect()`.

#### Cách tìm và gỡ lỗi các tham chiếu xoay vòng

Gỡ lỗi các chu trình tham chiếu có thể rất khó khăn, đặc biệt là khi bạn sử dụng nhiều thư viện của bên thứ ba.
[Module gc](https://docs.python.org/3.7/library/gc.html) chuẩn cung cấp rất nhiều trình trợ giúp hữu ích có thể giúp gỡ lỗi. Nếu bạn đặt cờ gỡ lỗi `DEBUG_SAVEALL`, tất cả các đối tượng không thể truy cập được tìm thấy sẽ được nối vào danh sách `gc.garbage`.
```py
import gc
gc.set_debug(gc.DEBUG_SAVEALL)
print(gc.get_count())
lst = []
lst.append(lst)
list_id = id(lst)
del lst
gc.collect()
for item in gc.garbage:
    print(item)
    assert list_id == id(item)
```

#### Phần kết luận
+ Không sử dụng finalizers trừ khi bạn thực sự, thực sự, thực sự phải.
+ Nếu bạn không sử dụng tham chiếu xoay vòng, bạn có thể vô hiệu hóa GC hoàn toàn bằng cách gọi `gc.disable ()`.
+ Hãy nhớ rằng một GC không hoàn toàn thoát khỏi tất cả các rò rỉ bộ nhớ. Nếu bạn lưu trữ rất nhiều dữ liệu trong các biến toàn cầu và quên xóa chúng, bạn sẽ mãi mãi giữ một tham chiếu đến một số đối tượng - và không có gì GC có thể làm. Bạn cũng có thể sử dụng các tham [weak references](https://docs.python.org/3/library/weakref.html).
+ Bạn có thể điều chỉnh GC bằng [module gc](https://docs.python.org/3/library/gc.html) .
Hầu hết các bộ sưu tập rác được thực hiện bằng thuật toán đếm tham chiếu, mà chúng ta không thể điều chỉnh được. Vì vậy, hãy lưu ý các chi tiết cụ thể về triển khai, nhưng đừng lo lắng về các vấn đề GC tiềm ẩn sớm.
Hy vọng rằng, bạn đã học được điều gì đó mới mẻ. Nếu bạn có bất kỳ câu hỏi còn lại, tôi sẽ rất vui khi trả lời chúng.

#### Xử lý các tham chiếu xoay vòng
Một điều mà bộ đếm tham chiếu không xử lý được đó là các chu trình tham chiếu. Hãy tưởng tượng một danh sách liên kết xoay vòng, hoặc một đối tượng tham chiếu chính nó. Ngay cả khi các đối tượng này không thể truy cập được, số lượng tham chiếu của chúng vẫn sẽ là 1.

Đây là lý do tại sao CPython có một thuật toán để phát hiện các chu trình tham chiếu đó, được thực hiện trong hàm thu thập. Trước hết, nó chỉ tập trung vào các đối tượng container (tức là các đối tượng có thể chứa tham chiếu đến một hoặc nhiều đối tượng): mảng, từ điển, cá thể lớp người dùng, v.v. Như một tối ưu hóa bổ sung, GC bỏ qua các bộ chứa chỉ các loại bất biến (int , chuỗi,… hoặc tuples chỉ chứa các loại không thay đổi)

CPython cho việc này duy trì hai danh sách được liên kết kép: một danh sách các đối tượng cần quét và một danh sách dự kiến ​​không thể truy cập được.

Hãy lấy trường hợp của một danh sách liên kết vòng tròn có một liên kết được tham chiếu bởi một biến A và một đối tượng tự tham chiếu hoàn toàn không thể truy cập được.

+ Khi GC bắt đầu, nó có tất cả các đối tượng vùng chứa mà nó muốn quét trên danh sách đầu tiên (nhiều hơn về sau). Bởi vì hầu hết các đối tượng hóa ra đều có thể truy cập được, nên để hiệu quả hơn ta giả định tất cả các đối tượng đều có thể truy cập và di chuyển chúng đến một danh sách không thể truy cập nếu cần, thay vì theo cách khác. Ngày đầu có số lượng tham chiếu (số đối tượng tham chiếu đến chúng), mỗi vùng chứa đối tượng cũng có trường `gc_ref` ban đầu được đặt thành số tham chiếu :


+ GC sau đó đi qua mỗi đối tượng container và decrements bởi 1 `gc_ref` của bất kỳ đối tượng khác nó đang tham khảo. Nói cách khác, chúng tôi chỉ quan tâm đến các tham chiếu từ bên ngoài danh sách "đối tượng cần quét" (như biến) và không tham chiếu từ các đối tượng vùng chứa khác bên trong danh sách đó.

+ GC quét lại các đối tượng vùng chứa . Các đối tượng có gc_ref bằng 0 được đánh dấu là `GC_TENTATIVELY_REACHABLE` và được chuyển đến danh sách dự kiến ​​không thể truy cập được. Trong biểu đồ sau, GC xử lý các đối tượng “link 3” và “link 4” nhưng chưa xử lý “link 1” và “link 2”.

+ Giả sử rằng GC quét bên cạnh đối tượng “link 1”. Bởi vì gc_ref của nó bằng 1, nó được đánh dấu là `GC_REACHABLE` .

+ Khi GC gặp một đối tượng có thể truy cập, nó duyệt qua các tham chiếu của nó để tìm tất cả các đối tượng có thể truy cập từ nó, đánh dấu chúng cũng như `GC_REACHABLE`. Đây là những gì xảy ra với "link 2" và "link 3" bên dưới khi chúng có thể truy cập từ "link 1". Bởi vì "link 3" có thể truy cập sau khi tất cả, nó được chuyển trở lại danh sách ban đầu.

+ Khi tất cả các đối tượng được quét, các đối tượng chứa trong danh sách dự kiến ​​không thể truy cập thực sự không thể truy cập được và do đó có thể được thu gom rác .
