

####  Memoization
Memoization là một biến thể của thuật ngữ gốc latin "memoradum" với nghĩa là "to be remembered" ( được nhớ).
Bộ nhớ cache lưu trữ kết quả của một thao tác để sử dụng sau này. Ví dụ như trình duyệt web sẽ sử dụng bộ nhớ cache để tải trang web nhanh hơn nếu bạn từng truy cập một trang web nào đó.
Trong Python, Memoization dùng để chỉ việc ghi nhớ hoặc lưu trữ đầu ra của hàm dựa trên các đầu vào của hàm.
Việc ghi nhớ cho phép bạn tối ưu hóa một hàm python bằng cách lưu vào bộ đẹm của nó dựa trên các tham số mà bạn cung cấp. Khi bạn ghi nhớ một hàm, nó sẽ chỉ tính toán đầu ra của nó một lần cho mỗi tập hợp các tham số mà bạn gọi với nó, còn các lần gọi hàm sau thì sẽ được truy xuất từ bộ nhớ cache.
Thuật toán cơ bản của Memoization có thể giải thích như sau: Thiết lập cấu trúc dữ liệu bộ nhớ cache cho các kết quả của hàm. Mỗi khi hàm được gọi, thực hiện một tong các thao tác sau: Trả về kết quả đã lưu trong bộ nhớ cache nếu có, hoặc gọi hàm để tính toán kết quả bị thiếu, sau đó cập nhật bộ nhớ cache đầy đủ trước khi trả về kết quả đầy đủ cho người gọi, điều này đảm bảo các kết quả hàm cho một tập hợp các đối số cụ thể sẽ chỉ được tính một lần, và có thể nạp được kết quả lưu trong bộ nhớ cache và trả lại kết quả hàm ngay lập tức
Hiểu đơn giản, trong python ta có thể implement memoization với dict bằng cách lưu kết quả gọi function f vào một dict theo dạng:
```py
{
    input1: result1, # f(input1)
    input2: result2, # f(input2)
    inputN: resultN  # f(inputN)
}
```
Ví dụ đối với bài toàn tìm số finonacci, thuật toán ở đây là kết quả của lời gọi hàm sau bằng kết quả của 2 lần gọi hàm liền trước, dễ thấy ta có thể sử dụng memoization để tránh việc tính lại ( đồng thời trách luôn cả việc recursive call quá nhiều khiến [vượt quá kích thước của stack ](https://stackoverflow.com/questions/8177073/python-maximum-recursion-depth-exceeded))

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
Ta thấy đoạn code trên với những tham số n lớn thì chương chình chạy rất lâu do một khối lượng tính toán bị lặp lại khá nhiều khi chạy hàm fib(n). Ví dụ đối với mỗi lần gọi fib(10), fib(5), fib(3) thì sẽ đòi hỏi 3 flow tính toán riêng rẽ mà không có sự tái sử dụng (reuse).
Nếu dùng memoization dưới dạng dict để tối ưu hóa, ta có thể viết:
```py
fib_memo = {}
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
Ở đây biến memo đóng vai trò như 1 cache lưu lại giá trị của hàm mỗi lần gọi. fac(3) sẽ tạo ra 3 record trong cache, fac(4) sẽ hit cache kho chạy fac(3) lưu lại và fac(4) chỉ cần chạy đệ quy 1 lần.
Memoization có thể triển khai dưới dạng hàm
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
hoặc class
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
hoặc dùng [decorator ](https://zfinnz.blogspot.com/2018/11/decorator-trong-python.html) cho ví dụ trên:
```py
@Memoize
def memoized_fibonacci(n):
    if n < 2: return 1
    return n * fac(n - 1)
```
Câu lệnh `@Memoize` sẽ tương đương với `fib = Memoize(fib)`

+ Ở đây, decorator giữ một hàm và trả về một phiên bản `wrapped` của cùng một hàm thực hiện việc lưu trữ cache (memoized_func).
+ Chúng ta sử dụng từ điển Python để làm bộ nhớ cache, bởi vì, trong Python, sử dụng một key để tra cứu giá trị trong một từ điển là rất nhanh.
+ Bất cứ khi nào hàm decorator được gọi, chúng sẽ kiểm tra xem các thông số đã có trong bộ nhớ cache chưa. Nếu có, thì kết quả được lưu trong bộ nhớ cache sẽ được trả về, thay vì phải tính toán lại.
Tiếp theo chúng ta sẽ thử so sánh thời gian thực hiện giữa việc dùng hàm tính fibonacci cổ điển và hàm dùng memoization.
```py
>>> import timeit
>>> timeit.timeit('fib(35)', globals=globals(), number=1)
5.1729652720096055
```
Trong máy tính của tôi, phải mất đến 5s để tính số thứ 35 trong dãy fibonacci.Thử với memoization
```py
>>> import timeit
>>> timeit.timeit('memoized_fibonacci(35)', globals=globals(), number=1)
4.941958484007046
>>> timeit.timeit('memoized_fibonacci(35)', globals=globals(), number=1)
1.9930012058466673e-06
```
Chúng ta mất 5 giây cho lần gọi đầu, tuy nhiên với lần gọi thứ 2 thì chỉ mất khoảng 2 micro giây, thật đáng ngạc nhiên 🙂
Với lần gọi thứ 2, thay vì tính đệ quy số fibnacci thứ 35, memoize decorator chỉ lấy kết quả đã lưu trong bộ nhớ cache và trả về.

#### Hàm trả về giá trị bộ nhớ cache
Bây giờ chung ta sẽ thử quan sát xem hàm lấy kết qua bộ nhớ cache diễn ra như thế nào
```py
>>> memoized_fibonacci.__closure__[0].cell_contents
{(35,): 9227465}
```
Để kiểm tra bộ nhớ cache, chúng ta truy cập vào bên trong hàm memoized_fibonacci bằng thuộc tính __closure__ của nó.Bộ nhớ cache dict là biến cục bộ đầu tiên và được lưu trữ trong ô 0. Đây là một kĩ thuạt không nên dùng trong sản phẩm code nhưng nó là một mẹo cho việc gỡ lỗi.
Chúng ta thấy, từ điển bộ nhớ cache ánh xạ các tham số tuples cho mỗi lời gọi hàm memoized_fibonacci gửi đến cho đến keest quả hàm ( số fibonacci thứ n).
Như vậy, với ví dụ trên (35,) là một đối số tuple cho lời gọi hàm memoized_fibonacci() và nó được kết hợp với số 9227465 là số fibonacci thứ 35.
Để chứng minh bộ nhớ cache kết quả của hàm hoạt động, ta sẽ làm thêm một ví dụ nhỏ, đó là gọi hàm memoized_fibonacci thêm vài lần và kiểm tra nội dung của nó
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
như chúng ta thấy , bộ từ điển cache bây giờ cũng chứa các kết quả của mỗi lần với một đối số đầu vào khác nhau của hàm memoized_fibonacci. Diều này cho phép chung ta truy xuất các kết quả nhanh chóng từ bộ nhớ mà không phải tính lại từ đầu.
Tuy nhiên, có một số lưu ý đối với việc dùng bộ nhớ cache như sau:
+ Ở ví dụ trên, kích thước của bộ nhớ cache không bị chặn, có nghĩa là bộ nhớ đệm có thể phát triển bao nhiêu tùy thích, điều này không tốt bời vì nó có thể dẫn đến sự quá tải bộ nhớ đệm trong các chương trình của bạn.
+ Vì thế, bạn nên đặt giới hạn về lượng dữ liệu được lưu trữ trong bộ nhớ cache cùng một lúc bằng cách có thiết lập một kích thước giới hạn cứng trên bộ nhớ cache hoặc xác định điều kiện hết hạn sẽ thu hồi một số mục cũ từ bộ nhớ cache tại một số chỗ.


####  Python Memoization với functools.lru_cache
Ở trên chúng ta đã nói nhiều đến cache, vậy chúng ta sẽ tìm hiểu tiếp một loại cache được Python sử dụng đó là LRU cache.
LRU (least recently used) cache là một trong các thuật toán cache phổ biến. Cache được dùng để lưu trữ các kết quả tính toán vào một nơi và khi cần tính lại thì lấy trực tiếp kết quả ra thay thì thực hiện tính. Cache thường có kích thước nhất định và khi đầy, cần bỏ đi một số kết quả đã tồn tại trong cache. Việc kết quả nào dẽ bị bỏ đi phân loại các thuật toán cache thành:
+ LRU (Least Recently Used): bỏ đi các item trong cache ít được dùng gần đây nhất.
+ MRU (Most Recently Used): bỏ đi các item trong cache được dùng gần đây nhất.
Trong python, standard library functools đã có sẵn function lru_cache giúp thực hiện công việc này ở dạng decorator. Khi gọi function với một bộ argument, lru_cache sẽ lưu các argument lại thành key của dict, và sử dụng kết quả gọi function làm value tương ứng. lru_cache có option để chỉnh kích thước của cache, phân biệt kiểu của argument.Khi bạn nhận ra khi nào sử dụng lru_cache, bạn có thể nhanh chóng tăng tốc ứng dụng của mình chỉ với một vài dòng mã.

Ví dụ với bài toán tính dãy fibonacci trên ta sẽ dử dụng thử functools.lru_cache decorator:
```py
import functools

@functools.lru_cache(maxsize=128)
def fib(n):
    if n == 0:
        return 0
    elif n == 1:
        return 1
    return fib(n - 1) + fib(n - 2)
```
Đối số maxsize được chuyển tới lru_cache để giới hạn số lượng các mục được lưu trữ trong bộ nhớ cache cùng một lúc.
Chúng ta thử sử dụng module timeit để đo tốc độ chạy của chương trình.
Một điểm đáng chú ý là các argument được gọi với function đều phải là immutable object (đối tượng không đổi) bởi chúng được dùng làm key của dict. Khi dùng decorator lru_cache, ta chỉ cần tập trung vào viết function cần viết, lru_cache sẽ lo việc thực hiện caching/memoization.
```py
>>> import timeit
>>> timeit.timeit('fib(35)', globals=globals(), number=1)
3.056201967410743e-05
>>> timeit.timeit('fib(35)', globals=globals(), number=1)
1.554988557472825e-06
```

#### Chúng ta có nên ưu tiên sử dụng functools.lru_cache
Câu trả lời là có, vì functools.lru_cache trong Python được cung cấp toàn diện toàn diện hơn chức năng ghi nhớ đặc biệt mà một chương trình cần.
Ví dụ, nó cung cấp một tính năng tiện dụng cho phép bạn truy xuất các số liệu thống kê bộ nhớ đệm bằng phương thức cache_info:
```py
>>> fibonacci.cache_info()
CacheInfo(hits=34, misses=36, maxsize=None, currsize=36)
```
Một tính năng hữu ích khác là khả năng thiết lập lại bộ nhớ cache kết quả bất cứ lúc nào bằng phương thức cache_clear:
```py
>>> fibonacci.cache_clear()
>>> fibonacci.cache_info()
CacheInfo(hits=0, misses=0, maxsize=128, currsize=0)
```
Nếu bạn muốn tìm hiểu kĩ hơn về việc sử dụng lru_cache bạn nên tham khảo [functools — Higher-order functions and operations on callable objects](https://docs.python.org/3/library/functools.html#functools.lru_cache) 
Tóm lại, bạn không bao giờ cần phải tạo hàm chức năng ghi nhớ của riêng bạn. Lru_cache() tích hợp sẵn của Python có sẵn, toàn diện hơn và được thử nghiệm để làm việc tốt hơn.

#### Những gì có thể sử dụng Memoized?
Đơn giản nhất, bạn sẽ muốn ghi nhớ các hàm xác định.
```py
def adder(x, y):
    return x + y
```
add() là một hàm xác định bởi vì nó sẽ luôn trả về cùng một kết quả cho cùng một cặp tham số. Ví dụ, nếu bạn vượt qua 2 và 3 vào hàm, nó sẽ luôn trả về 5.

Và không nên sử dụng cho những hàm không xác định sau:
```py
from datetime import datetime

def nondeterministic_adder(x, y):
    # Kiểm tra xem hôm nay có phải là thứ 2 (weekday 0)
    if datetime.now().weekday() == 0:
        return x + y + x
    return x + y
```
Hàm này không xác định bởi vì đầu ra của nó cho một đầu vào đã cho sẽ thay đổi tùy theo ngày trong tuần: Nếu bạn chạy hàm này vào thứ hai, bộ nhớ cache sẽ trả về dữ liệu cũ vào bất kỳ ngày nào khác trong tuần.

#### Tóm tắt 
+ Trong bài viết này, bạn đã thấy cách memoization là một kỹ thuật tối ưu hóa phần mềm lưu trữ và trả về kết quả của một cuộc gọi hàm dựa trên các tham số của nó.
+ Khi bạn memoize một hàm, nó sẽ chỉ tính toán đầu ra của nó một lần cho mỗi tập hợp các tham số mà bạn gọi cùng với nó. Mọi cuộc gọi sau lần gọi đầu tiên sẽ nhanh chóng được truy xuất từ ​​bộ nhớ cache.
+ Bạn đã thấy cách tự viết viết hàm decorator memoization và  đó cũng là lý do bạn nên sử dụng lru_cache () được tích hợp sẵn trong Python trong chương trình của mình 🙂.
