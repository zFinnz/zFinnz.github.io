<h1 align="center"> Odoo ORM </h1>


## Recordsets

Các phương thức được định nghĩa trên một mô hình được thực thi trên một recordset và bản thân chúng là một recordset.

Các bản ghi có thể lặp lại do đó các công cụ Python có sẵn có thể chuyển đổi.

1. `filtered()` 

Trả về một bản ghi chỉ thỏa mãn hàm vị ngữ được cung cấp, vị từ cũng có thể là một chuỗi để lọc theo trường là đúng hoặc sai.

```py
# chỉ giữ hồ sơ công ty là người dùng hiện tại
records.filtered(lambda r: r.company_id == user.company_id)

# chỉ giữ hồ sơ là một công ty
records.filtered("partner_id.is_company")
```

2. `sorted()`

Trả về một recordset được sắp xếp theo từ khóa đã cung cấp, nếu không có sẽ sắp xếp mặc định theo mô hình.

```py
records.sorted(key=lambda r: r.name)
```

3. `mapped()`

Trả về là kết quả của các bản ghi

```py
# Trả về danh sách tổng của các trường của recordset
records.mapped(lambda r: r.field1 + r.field2)

# Trả về danh sách tên
records.mapped('name')

# Trả về danh sách recordset partner
record.mapped('partner_id')

# Trả về tập hợp tất cả các ngân hàng thành viên, xóa dữ liệu trùng
record.mapped('partner_id.bank_ids')
```

## Hàm ORM chung

1. `search()`

Lấy một domain để tìm kiếm, trả về các bản ghi. Có thể trả về một tập con của các bản ghi khớp ( offset và limit) và được sắp xếp (order)

```py
>>> # searches the current model
>>> self.search([('is_company', '=', True), ('customer', '=', True)])
res.partner(7, 18, 12, 14, 17, 19, 8, 31, 26, 16, 13, 20, 30, 22, 29, 15, 23, 28, 74)
>>> self.search([('is_company', '=', True)], limit=1).name
'Agrolait'
```

2. `Create()`

Lấy một số giá trị của trường và trả về một bản ghi có chứa id của bản ghi được tạo.

```py
>>> self.create({'name': "New Name"})
res.partner(78)
```

3. `write()`

Đưa một số giá trị vào trường, ghi chúng vào tất cả bản ghi trong recordset của nó, vào không trả về gì cả

```py
self.write({'name': "Newer Name"})
```

4. `browse()`

Lấy một id csdl hoặc một danh sách các id và trả về một recordset, từ đó có thể truy cập không giới hạn.

```py
>>> self.browse([7, 18, 12])
res.partner(7, 18, 12)
```

5. `exists()`

Trả về một bản ghi mới chỉ chứa các bản ghi tồn tại trong csdl, có thể sử dụng để kiểm tra xem liệu một bản ghi vẫn tồn tại.

```py
if not record.exists():
    raise Exception("The record has been deleted")
```

6. `ref()`

Phương thức môi trường trả về bản ghi khớp với id bên ngoài được cung cấp.

```py
>>> env.ref('base.group_public')
res.groups(2)
```

7. `ensure_one()`

Kiểm tra rằng recordset chỉ chứa một bản ghi, nếu không sẽ báo lỗi

```py
records.ensure_one()
# Tương đương với:
assert len(records) == 1, "Expected singleton"
```


### Compute Fields


Các trường có thể tính toán(thay vì đọc trực tiếp từ csdl) bằng cách sử dụng `comput`. Nó phải gán giá trị tính toán cho trường. Nếu nó sử dụng giá trị của các trường khác, nó sẽ chỉ định các trường đó bằng `@api.depends()`.


```py
from odoo import api
total = fields.Float(compute='_compute_total')

@api.depends('value', 'tax')
def _compute_total(self):
    for record in self:
        record.total = record.value + record.value * record.tax
```

- Depends có thể có đường dẫn `.` khi sử dụng trường phụ thuộc.

```py
@api.depends('line_ids.value')
def _compute_total(self):
    for record in self:
        record.total = sum(line.value for line in record.line_ids)
```

- Các trường được tính toán không được lưu trữ theo mặc định, chúng được tính toán và trả về khi được yêu cầu. Setting store = True sẽ lưu chúng trong cơ sở dữ liệu và tự động kích hoạt tìm kiếm

- Tìm kiếm trên trường được tính cũng có thể được bật bằng cách đặt tham số tìm kiếm. Giá trị là tên phương thức trả về một Tên miền


```py
upper_name = field.Char(compute='_compute_upper', search='_search_upper')

def _search_upper(self, operator, value):
    if operator == 'like':
        operator = 'ilike'
    return [('name', operator, value)]
```

- Để cho phép các giá trị cài đặt trên một trường được tính toán, hãy sử dụng tham số nghịch đảo. Đó là tên của một hàm đảo ngược tính toán và thiết lập các trường có liên quan

```py
name = fields.Char(string="Name")
upper = fields.Char(compute='_compute_upper', inverse='_inverse_upper')

@api.depends('name')
def _compute_upper(self):
   for rec in self:
      self.upper = self.name.upper() if self.name else False

def _inverse_upper(self):
   for rec in self:
      self.name = self.upper.lower() if self.upper else False 
```

- Nhiều trường có thể được tính cùng một lúc bằng cùng một phương thức, chỉ cần sử dụng cùng một phương thức trên tất cả các trường.


### Related Fields

Trường hợp đặc biệt của trường được tính toán là các trường có liên quan, cung cấp giá trị của trường con trên bản ghi hiện tại. Chúng được xác định bằng cách đặt tham số liên quan và giống như các trường được tính toán thông thường mà chúng có thể được lưu trữ.

### Onchage 

Cập nhật giá trị trường khi có sự thay đổi trên views
Phương thức onchange làm việc trên việc gán bản ghi ảo trên các bản ghi này không được ghi vào cơ sở dữ liệu, chỉ được sử dụng để biết giá trị nào để gửi lại cho máy khách

Có thể chặn trình kích hoạt từ một trường cụ thể bằng cách thêm on_change = "0" vào view

```xml
<field name="name" on_change="0"/>
```



## CRUD

1. `create(vals) -> record`

Tạo một bản ghi mới cho mô hình.

Bản ghi mới được tạo ra bằng cách sử dụng các giá trị từ `vals` và nếu các giá trị cần thiết từ `default_get()`.

2. `browse([ids]) -> record`

3. `unlink()`

4. `write(vals)`

Các tùy chọn đối với trường `one2many` và `many2many` :

- `(0, _, values)`  thêm một bản ghi mới được tạo từ danh sách giá trị cung cấp.

- `(1, id, values)`  chỉnh sửa giá trị của bản ghi với giá trị cung cấp, không thể sử dụng trong `create()`.

- `(2, id, _)`  xóa bản ghi với `id` từ recordset và xóa nó trong csdl, không thể sử dụng `create()`.

- `(3, id, _)`  xóa một bản ghi `id` từ set nhưng không xóa nó trong csdl, không thể sử dụng cho `one2many` và `create()`.

- `(4, id, _)`  Thêm vào một bản ghi có sẵn với `id` , không thể sử dụng cho `one2many`.

- `(5, _, _)` Xóa tất cả bản ghi khỏi set, tương đương với việc sử dụng `3` trên mỗi bản ghi, không thể sử dụng cho `one2many` và `create()`.

- `(6, _, ids)` Thay thế tât cả bản ghi trong set bằng `ids` giống như việc sử dụng 5 và 4 cho mooci `id` trong `ids`.

5. `read([fields])` đọc các trường được yêu cầu cho các bản ghi, tương thích với `browser()`.

6. `read_group((domain, fields, groupby, offset=0, limit=None, orderby=False, lazy=True)` 

```py
read_group([['state','=','total'],['bid_or_no','=', 1 ]], ['quant','value','total','asset_name'], ['asset_name'], offset=0, limit=None, orderby=False, lazy=True)
```


8. `search(args[, offset=0][, limit=None][, order=None][, count=False])` 

- args - Tên miền tìm kiếm. Sử dụng danh sách trống để khớp với tất cả các bản ghi.
- offset (int) - số kết quả bỏ qua (mặc định: none)
- limit (int) - số bản ghi tối đa cần trả lại (mặc định: tất cả)
- order (str) - sắp xếp chuỗi
- count (bool) - nếu True, chỉ đếm và trả về số bản ghi trùng khớp (mặc định: False)

9. `search_count(argv)`

Trả về số lượng bản ghi trong mô hình hiện tại với miền xác định (int).



### Truy vấn trường và khung nhìn

1. `fields_get([fields][, attributes])`

Trả về định nghĩa của mỗi `fields`

2. `fields_view_get([view_id | view_type='form'])`


