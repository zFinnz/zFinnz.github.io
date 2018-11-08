`Memoization` là một kĩ thuật cache lại giá trị trả về của các hàm dựa trên tham số truyền vào nó.

#### Memoization là gì?
`Memoization` là một biến thể của thuật ngữ gốc latin `memoradum` với nghĩa là `to be remembered` (được nhớ). Kĩ thuật này sử dụng bộ nhớ `cache` để lưu trữ kết quả của một thao tác mà ta có thể tái sử dụng sau này.
Để dễ hình dung hơn, bạn hãy tưởng tượng nó như trình duyệt web của bạn, nó sẽ sử dụng bộ nhớ cache để lưu lại lịch sử, cookie, mật khẩu của các trang web bạn từng truy cập để có thể tải lại trang web nhanh hơn trong lần tới bạn truy cập. 
Trong Python, `Memoization` dùng để chỉ việc ghi nhớ hoặc lưu trữ đầu ra của hàm đã được tính toán dựa trên các đầu vào của hàm. Việc ghi nhớ cho phép bạn tối ưu hóa một hàm được gọi nhiều lần trong python bằng cách lưu vào bộ đệm giá trị các lần gọi của nó dựa trên các tham số mà bạn cung cấp. 
Khi bạn ghi nhớ một hàm, nó sẽ chỉ tính toán đầu ra của nó một lần cho mỗi tập hợp các tham số mà bạn gọi với nó, còn các lần gọi hàm sau thì sẽ được truy xuất giá trị từ bộ nhớ cache để tránh việc tính lại nhiều lần hàm cho các tham số giống nhau. 
Thuật toán cơ bản của `Memoization` có thể giải thích là ta sẽ thiết lập cấu trúc dữ liệu bộ nhớ cache cho các kết quả của hàm. Mỗi khi hàm được gọi, thực hiện một trong các thao tác sau: 
+ Trả về kết quả của hàm đã lưu trong bộ nhớ cache nếu có, hoặc gọi hàm để tính toán kết quả bị thiếu.
+ Sau đó cập nhật bộ nhớ cache đầy đủ trước khi trả về kết quả cho người gọi, điều này đảm bảo các kết quả hàm cho một tập hợp các đối số cụ thể sẽ chỉ được tính một lần, và có thể nạp được kết quả lưu trong bộ nhớ cache sau đó trả lại kết quả hàm ngay lập tức.
Hiểu đơn giản, trong python ta có thể áp dụng `memoization` với `dict` bằng cách lưu kết quả các lần gọi function `f` vào một `dict` theo dạng:
```py
{
    input1: result1, # f(input1)
    input2: result2, # f(input2)
    inputN: resultN  # f(inputN)
}
```
Ví dụ đối với bài toàn tìm số `finonacci`, thuật toán được sử dụng ở đây là kết quả của lời gọi hàm sau bằng kết quả của 2 lần gọi hàm liền trước, dễ thấy ta có thể sử dụng `memoization` để tránh việc tính lại (đồng thời tránh luôn cả việc `recursive call` (đẹ quy) quá nhiều khiến vượt quá kích thước của `stack`)
Với hàm tìm số fibonacci thường dùng:
```py
def fib(n):
    if n <= 2:
        return 1
    else:
        return fib(n-1) + fib(n-2)

fib(6)
8
fib(25)
75025
fib(75) # phải chờ rất lâu
...
```
Ta thấy đoạn code trên với những tham số `n` lớn thì chương chình chạy rất lâu do một khối lượng tính toán bị lặp lại khá nhiều khi chạy hàm `fib(n)`. Ví dụ đối với mỗi lần gọi `fib(10)`, `fib(5)`, `fib(3)` thì sẽ đòi hỏi `3 flow` tính toán riêng rẽ mà không có sự `tái sử dụng` (reuse). Nếu dùng `memoization` dưới dạng `dict` để tối ưu hóa, ta có thể viết:
```py
fib_memo = {} # Tạo dict để lưu trữ kết quả các lần gọi hàm như 1 bộ nhớ cache
def fib(n):
    if n <= 2:
        return 1
    else:
        if n not in fib_memo:
        fib_memo[n] = fib(n-1) + fib(n-2)
    return fib_memo[n]
fib(75)
2111485077978050 # thời gian chạy chương trình rất nhanh
```
Ở đây, biến `memo` đóng vai trò như 1 `cache` lưu lại giá trị của hàm mỗi lần gọi. `fac(3)` sẽ tạo ra 3 record trong `cache` lưu trữ 3 cặp giá trị tương ứng với 3 lần gọi hàm, `fac(4)` sẽ `hit` cache được lưu lại khi chạy `fac(3)` và `fac(4)` chỉ cần chạy đệ quy 1 lần duy nhất vì vậy thời gian chạy của chương chình trên sẽ rất nhanh, tiêu tốn ít tài nguyên hơn. 
`Memoization` cũng có thể triển khai dưới dạng hàm như sau:
```py
def fib(n):
    if n < 2: return 1
    return n * fac(n - 1)

def memoize(fn, arg):
    memo = {}
    if arg not in memo:
        memo[arg] = fn(arg)
    return memo[arg]

def fib_f(n):
    return memoize(fib,n)
```
hoặc triển khai dưới dạng lớp:
```py
def fib(n):
    if n < 2: return 1
    return n * fac(n - 1)

class Memoize:
    def __init__(self, f):
        self.f = f
        self.memo = {}
    def __call__(self, *args):
        if not args in self.memo:
            self.memo[args] = self.f(*args)
        return self.memo[args]

fib= Memoize(fib)
```
Để chuyên nghiệp hơn, ta cũng có thể dùng decorator cho ví dụ trên:
```py
class Memoize:
    def __init__(self, f):
        self.f = f
        self.memo = {}
    def __call__(self, *args):
        if not args in self.memo:
            self.memo[args] = self.f(*args)
        return self.memo[args]

@Memoize
def memoized_fibonacci(n):
    if n < 2: return 1
    return n * fac(n - 1)
```
Câu lệnh `@Memoize` ở trên sẽ tương đương với `fib = Memoize(fib)`.
Ở đây, `decorator` nhận vào một hàm và trả về một phiên bản `wrapped `của hàm đó, có khả năng thực hiện việc lưu trữ `cache`.
Chúng ta sử dụng kiểu lưu trữ `dict` Python để làm bộ nhớ `cache`. Bởi vì, trong Python, sử dụng một `key` để tra cứu giá trị trong một `dict` là rất nhanh.
Bất cứ khi nào hàm `decorator` được gọi, chúng sẽ kiểm tra xem các thông số đã có trong bộ nhớ cache chưa. Nếu có, thì kết quả được lưu trong bộ nhớ cache sẽ được trả về, thay vì phải tính toán lại. Tiếp theo chúng ta sẽ thử so sánh thời gian thực hiện giữa việc dùng hàm tính `fibonacci` cổ điển và hàm dùng `memoization` bằng module `timeit` của Python.
```py
>>> import timeit
>>> timeit.timeit('fib(35)', globals=globals(), number=1)
5.1729652720096055
#Như chúng ta thấy, phải mất đến 5s để tính số thứ 35 trong dãy fibonacci. Thử với memoization
```
Còn khi dùng `menoization`:
```py
>>> import timeit
>>> timeit.timeit('memoized_fibonacci(35)', globals=globals(), number=1)
4.941958484007046
>>> timeit.timeit('memoized_fibonacci(35)', globals=globals(), number=1)
1.9930012058466673e-06
```
Chúng ta mất 5 giây cho lần gọi đầu, tuy nhiên với lần gọi thứ 2 thì chỉ mất khoảng 2 micro giây, thật đáng ngạc nhiên 🙂. Với lần gọi thứ 2, thay vì tính đệ quy số `fibonacci` thứ `35`, `memoize decorator` chỉ đơn giản lấy kết quả đã lưu trong bộ nhớ cache của lần gọi thứ nhất và trả về.

#### Hàm trả về giá trị bộ nhớ cache
Bây giờ chung ta sẽ thử quan sát xem hàm lấy kết qua bộ nhớ cache diễn ra như thế nào.
```py
>>> memoized_fibonacci.__closure__[0].cell_contents
{(35,): 9227465}
```
Để kiểm tra bộ nhớ cache, chúng ta truy cập vào bên trong hàm `memoized_fibonacci` bằng thuộc tính `closure` của nó.Bộ nhớ cache `dict` là biến cục bộ đầu tiên và được lưu trữ trong ô `0`. Đây là một kĩ thuật không nên dùng trong sản phẩm code nhưng nó là một mẹo cho việc gỡ lỗi. 
Chúng ta thấy, từ điển bộ nhớ cache ánh xạ các cặp tham số `tuples` cho mỗi lời gọi hàm `memoized_fibonacci` gửi đến và kết quả của lời gọi hàm đó (số `fibonacci` thứ `n`). 
Như vậy, với ví dụ trên `(35,)` là một đối số tuple cho lời gọi hàm `memoized_fibonacci()` và nó được kết hợp với số `9227465` là số `fibonacci` thứ `35`. 
Để chứng minh bộ nhớ cache kết quả của hàm hoạt động, ta sẽ làm thêm một ví dụ nhỏ, đó là gọi hàm `memoized_fibonacci` thêm vài lần và kiểm tra nội dung của nó.
```py
>>> memoized_fibonacci(1)
1
>>> memoized_fibonacci(2)
1
>>> memoized_fibonacci(3)
2
>>> memoized_fibonacci(4)
3
>>> memoized_fibonacci(5)
5
>>> memoized_fibonacci.__closure__[0].cell_contents
{(35,): 9227465, (1,): 1, (2,): 1, (3,): 2, (4,): 3, (5,): 5}
```
Như chúng ta thấy, bộ từ điển cache bây giờ cũng chứa các kết quả của mỗi lần với một đối số đầu vào khác nhau của hàm `memoized_fibonacci`. Điều này cho phép chung ta truy xuất các kết quả nhanh chóng từ bộ nhớ mà không phải tính lại từ đầu. Tuy nhiên, có một số lưu ý đối với việc dùng bộ nhớ cache như sau:
+ Ở ví dụ trên, kích thước của bộ nhớ `cache` không bị chặn, có nghĩa là bộ nhớ đệm có thể phát triển bao nhiêu tùy thích, điều này không tốt bời vì nó có thể dẫn đến sự quá tải bộ nhớ đệm trong các chương trình của bạn.
+ Vì thế, bạn nên đặt giới hạn về lượng dữ liệu được lưu trữ trong bộ nhớ cache cùng một lúc bằng cách có thiết lập một kích thước giới hạn cứng trên bộ nhớ cache hoặc xác định điều kiện hết hạn sẽ thu hồi một số mục cũ từ bộ nhớ cache tại một số chỗ.

#### Python Memoization với functools.lru_cache
Ở trên chúng ta đã nói nhiều đến `cache`, vậy chúng ta sẽ tìm hiểu tiếp một loại cache được Python sử dụng đó là `LRU cache`. `LRU (least recently used) cache` là một trong các thuật toán cache phổ biến. 
`Cache` thường có kích thước nhất định và khi đầy, cần bỏ đi một số kết quả đã tồn tại trong `cache`. Vì vậy, việc kết quả nào dẽ bị bỏ đi phân loại các thuật toán `cache` thành:
+ `LRU (Least Recently Used)`: bỏ đi các `item` trong cache ít được dùng gần đây nhất.
+ `MRU (Most Recently Used)`: bỏ đi các `item` trong cache được dùng gần đây nhất. 
Trong python, thư viện chuẩn `functools` đã có sẵn hàm `lru_cache` giúp thực hiện công việc này ở dạng `decorator`. Khi gọi hàm với một `tuple` các tham số, `lru_cache` sẽ lưu các `tuple` tham số lại thành `key` của `dict`, và sử dụng kết quả gọi hàm làm `value` tương ứng. 
`lru_cache` còn có lựa chọn để có thể điều chỉnh kích thước của `cache`, phân biệt kiểu của tham số. Nếu bạn có thể sử dụng lru_cache đúng lúc và chính xác, bạn có thể nhanh chóng tăng tốc ứng dụng của mình chỉ với một vài dòng mã.
Ví dụ với bài toán tính dãy `fibonacci` ở trên ta sẽ dử dụng thử [`functools.lru_cache decorator`](https://docs.python.org/3/library/functools.html#functools.lru_cache):
```py
import functools

@lru_cache(maxsize=None)
def fib(n):
    if n < 2:
        return n
    return fib(n-1) + fib(n-2)

>>> [fib(n) for n in range(16)]
[0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610]

>>> fib.cache_info()
CacheInfo(hits=28, misses=16, maxsize=None, currsize=16)
```
Đối số `maxsize` được chuyển tới `lru_cache` để giới hạn số lượng các mục được lưu trữ trong bộ nhớ `cache` cùng một lúc. Và chúng ta thử sử dụng module `timeit` để đo tốc độ chạy của chương trình. Một điểm đáng chú ý là các tham số được gọi với hàm đều phải là `immutable object` (đối tượng không đổi) bởi chúng sẽ được dùng làm `key` của `dict` (đóng vai trò là bộ nhớ cache). Khi dùng decorator `lru_cache`, ta chỉ cần tập trung vào viết hàm của mình, còn việc thực hiện `caching/memoization` thì đã có `lru_cache` lo 🙂.
```py
>>> import timeit
>>> timeit.timeit('fib(35)', globals=globals(), number=1)
3.056201967410743e-05
>>> timeit.timeit('fib(35)', globals=globals(), number=1)
1.554988557472825e-06
```

#### Chúng ta có nên ưu tiên sử dụng [`functools.lru_cache`](https://docs.python.org/3/library/functools.html#functools.lru_cache)
Câu trả lời là có, vì `functools.lru_cache` trong Python được cung cấp chức năng ghi nhớ đặc biệt toàn diện mà một chương trình cần và bạn sẽ không bao giờ cần phải tạo hàm chức năng ghi nhớ của riêng mình. `Lru_cache()` tích hợp sẵn của Python có sẵn, toàn diện hơn và được thử nghiệm để làm việc tốt hơn. Ví dụ, nó cung cấp một tính năng tiện dụng cho phép bạn truy xuất các số liệu thống kê bộ nhớ đệm bằng phương thức `cache_info`:
```py
>>> fibonacci.cache_info()
CacheInfo(hits=34, misses=36, maxsize=None, currsize=36)
```
Một tính năng hữu ích khác là khả năng thiết lập lại bộ nhớ kết quả `cache` bất cứ lúc nào bằng phương thức `cache_clear`:
```py
>>> fibonacci.cache_clear()
>>> fibonacci.cache_info()
CacheInfo(hits=0, misses=0, maxsize=128, currsize=0)
```

#### Khi nào thì ta sử dụng Memoized?
Đơn giản nhất, bạn sẽ muốn ghi nhớ các `hàm xác định`.
```py
def adder(x, y):
    return x + y
```
`add()` là một hàm xác định bởi vì nó sẽ luôn trả về cùng một kết quả cho cùng một cặp tham số. Ví dụ, nếu bạn đưa tham số `2` và `3` hàm, nó sẽ luôn trả về `5`.
Và không nên sử dụng cho những `hàm không xác định` sau:
```py
from datetime import datetime

def nondeterministic_adder(x, y):
    # Kiểm tra xem hôm nay có phải là thứ 2 (weekday 0)
    if datetime.now().weekday() == 0:
        return x + y + x
    return x + y
```
Hàm này không xác định bởi vì đầu ra của nó cho một đầu vào đã cho sẽ thay đổi tùy theo ngày trong tuần: Nếu bạn chạy hàm này vào thứ hai, bộ nhớ `cache` sẽ trả về dữ liệu cũ vào bất kỳ ngày nào khác trong tuần.

#### Tóm tắt
+ Trong bài viết này, bạn đã thấy `memoization` là một kỹ thuật tối ưu hóa phần mềm lưu trữ và trả về kết quả của một cuộc gọi hàm dựa trên các tham số của nó.
+ Khi bạn `memoize` một hàm, nó sẽ chỉ tính toán đầu ra của nó một lần cho mỗi tập hợp các tham số mà bạn gọi cùng với nó. Mọi cuộc gọi sau lần gọi đầu tiên sẽ nhanh chóng được truy xuất từ ​​bộ nhớ `cache`.
+ `Memoize` cũng là `caching`, tức là dữ liệu tính toán xong được lưu lại và nằm đó luôn, không mất đi đâu cả, cho nên khi chạy chương trình trong một khoản thời gian dài, thì dung lưọng bộ nhớ cũng vì thế mà tăng lên. Cho nên cần phải giải phóng bộ nhớ cache của hàm `memoize` sau một khoản thời gian nhất định, nếu không sẽ dẫn tới tràn bộ nhớ hoặc `memleak` (rò rỉ bộ nhớ).
+ Việc sử dụng `memoize` tức là bạn đang đánh đổi `memory` để lấy tốc độ, chứ không có cái gì là `free` cả, nên nếu biết chừng mực và dùng đúng lúc đúng chỗ thì sẽ đem lại hiệu quả cao, còn ngược lại, lạm dụng quá mức thì hậu quả sẽ khó lường.
+ Bạn đã thấy cách tự viết viết hàm `decorator memoization` và đó cũng là lý do bạn nên sử dụng `lru_cache()` được tích hợp sẵn trong Python trong chương trình của mình 🙂.
