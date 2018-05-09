<h1 align="center"> Odoo ORM </h1>



# ▶ Danh sách các định nghĩa trong Odoo


| Định nghĩa | Cú pháp | Giải thích |
|---------|---------|-----|
| _name | _name="name.name" | Để tạo một đối tượng hoặc một bảng trong csdl |
| _description | _description="Name Model" | Cung cấp thông tin ngắn gọn về một đối tượng hoặc mô hình |
| _rec_name | _rec_name = 'complete_name' | Nếu chúng ta không có trường "name" thì điền vào thuộc tính này với trường thay thế.Theo mặc định, trường "name" sẽ được sử dụng làm giá trị trong phương thức name_get()(trường many2one) |
| _inherit | _inherit="model.model" | Dùng để thừa kế đối tượng liên quan |
| _inherits | _inherit={'res.partner': 'partner_id'} | Dùng để 'ủy nhiệm' các đối tượng liên quan.Ví dụ đối tượng 'res.users' kế thừa 'res.partner'.Khi tạo người dùng, cũng sẽ tự động tạo trường 'partner_id' làm cầu nối giữa 'res.users' và 'res.partner' |
| _order | _order = "date desc" | Cho quá trình sắp xếp, điền tên 1 trường .Mặc định thì đó là 'id' |
| _sql_contraints | _sql_contraints=[('code_uniq', 'unique(code)', 'thông báo!')] | Để ràng buộc giá trị duy nhất của một trường |
| _constraints | _constraint=[(_check_required_if_provider, 'Thông báo', [])] | Để kiểm tra giá trị một trường bằng phương thức python mà ta thực hiện |
| active | active= fields.Boolean('Active', default=True) | Mặc định các bản ghi active là True, nếu ta muốn ẩn bản ghi thì chuyển thành False |
| string(string) | string=u'' | Hoạt động như một nhãn trên GUI |
| size(integer)  | size="" | dùng để giới hạn số kí tự (chỉ trường Char) |
| help(string) | help='' | dùng để cung cấp chú giải nếu con trỏ ở gần |
| readonly(boolean) | readonly= | Nếu đó là True thì trường đó không thể chỉnh sửa được theo cách thủ công |
| required(boolean) | required= | Nếu là True thì trường đó bắt buộc phải có thông tin |
| index(int) | index= | phục vụ để cung cấp chỉ mục trên csdl, tăng tốc quá trình tìm kiếm nhưng tăng sự phân bổ dữ liệu |
| default | default= | Hàm cho giá trị mặc định khi người dùng tạo bản ghi |
| states(dictionary) | state={} | dùng để tạo trường chỉ đọc, bắt buộc và vô hình dựa trên giá trị của trường |
| domain(list) | domain=[] | Cung cấp bộ lọc giá trị đã chọn (thường dùng cho các trường uan hệ many2one, many2many) giống chức năng 'where' trong sql |
| digits(tuple) | digit=() | Dùng để xác định số chữ số thập phân trong các trườn gfloat và tiền tệ |
| groups(string) | group="" | Cung cấp quyền truy cập vào một trường cho nhóm có liên quan |
| copy(boolean) | copy= | Nếu nó là True, nó sẽ cho cùng một giá trị khi bản ghi được nhân đôi |
| translate(boolean) | translate= | Nếu nó là True, thì nhãn trường liên kết có thể được dịch |
| selection(list) | selection=[] | Dùng để chỉ định lựa chọn tĩnh hoặc động trong trường lựa chọn hoặc trường tham chiếu |
| change_default(boolean) | change_default= | Nếu là True , thì trường này có thể cung cấp giá trị mặc định của một trường khác(với một số cài đặt đặc biệt) |
| track_visibility('always', 'onchange') | track_visibility='' | Tạo nhật kí lịch sử xuất hiện bên dưới một biểu mẫu |
| company_dependent(boolean) | company_dependent= | Nếu là True, thì giá trị của trường này có thể là giá trị khác nhau cho mỗi công ty, thay thế thuộc tính 'property' |
| related(string) | related='' | Sao chép trường của các đối tượng, các trường có thuộc tính này luôn cập nhật giá trị nếu bất kỳ giá trị liên quan nào thay đổi |
| compute(string) | compute='fuc' | Tính toán giá trị của trường bằng hàm |
| inverse |  |  |
| store(boolean) | store= | Nếu là True thì giá trị của trường sẽ được lưu vào csdl, thường được sử dụng theo cặp với thuộc tính liên quan và tính toán |
| ondelete('set null', 'restrict', 'cascade') | ondelete= '' | Được sử dụng trong trường many2one, nếu nó là 'cascade' thì bản ghi chưa trường này sẽ bị xóa nếu bản ghi được chọn từ đối tượng tham chiếu bị xóa, nếu là 'restrict' thì bản ghi chứa đối tượng tham chiếu sẽ không bị xóa trước khi bản ghi chứa trường bị xóa, nếu là ' set null' thì trường sẽ tự động rỗng nếu bản ghi trên đối tượng tham chiếu bị xóa |
| search | search | cung cấp quy trình tìm kiếm trong các trường khác có liên quan đến trường này( thường là trường liên quan đến compute hoặc inverse) giống như domain |
----
## Các hàm trong Odoo
### Hàm search()
`a.search([])` 

cũng giống như cấu lệnh 'select' trong sql, kết quả trả về là các bản ghi đối tượng 

**vd :**

```py
partner = self.env('res.partner').search([('is_company', '=', True), ('customer', '=', True)])
print partner # res.partner(7, 18, 12, 14, 17, 20)
 
partner = self.env('res.partner').search([('is_company', '=', True), ('customer', '=', True)], limit=3)
print partner # res.partner(7, 18, 12)
 
print partner[0].id # 7
print partner[0].name # Agrolait
print partner[1].id, partner[1].name # 18, Asustek
```  



`a.create({})`  
Tạo một bản ghi trên đối tượng cụ thể. Phương thức này yêu cầu một tham số(dict) chưa mỗi đối tượng trường và giá trị cụ thể 
**vd :**

```py
self.env('res.partner').create({'name': 'Umar'})
```



`a.write({})` 
Cập nhật một hoặc nhiều trường của một đối tượng, các thoogn số bắt buộc là id của bản ghi và giá trị của từ điển 
**vd :**

```py
partner = self.env('res.partner').search([('name', '=', 'Umar')], limit=1)
partner.write({'name': 'Abdullah', 'street': 'Jl. Gunung Salak'})
```

`a.unlink()`  
Dùng để xóa các bản ghi trên các đối tượng 

**vd :**

```py
partner = self.env('res.partner').browse([13, 14])
partner.unlink()
```

`a.copy()`  
Dùng để nhân đôi giá trị của một trường 

**vd :**

```py
partner = self.env('res.partner').browse([15])
partner.copy()
# ATAU
partner.copy({'name': 'Ukasyah'})
```

`a.browse()`  
Phục vụ lấy một bản ghi và chúng được sử dụng như một đối tượng, từ đó ta có thể kết nối đến tất cả cá trường và mối quan hệ trên csdl không giới hạn 

**vd :**

```py
partner = self.env('res.partner').browse([7, 18, 12])
print partner # res.partner(7, 18, 12)
print partner[0].account_receivable_id.company_id.currency_id.name # USD
```

`a.read()` 
Giống hàm select trong sql, kết qủa trả về là một dict các giá trị và từ khóa 

**vd :**

```py
partner = self.env('res.partner').browse([33, 34, 35])
 
data = partner.read(['nama'])
print data # [{'name': 'Ali'}, {'name': 'Abdurrahman'}, {'name': 'Uwais'}]
 
data = partner.read()
print data # [{'name': 'Ali', 'street': 'Jl. Danau Toba', 'city': 'Bekasi'}, {'name': 'Abdurrahman', 'street': 'Jl. Pisang Ambon', 'city': 'Depok'}, {'name': 'Uwais', 'street': 'Jl. Ahmad Yani', 'city': 'Jakarta'}]
```

a.ref()  
Ghi nhận id của bản ghi xml 

**vd :**

```py
address_form_id = self.env.ref('base.res_partner_1')
print address_form_id # res.partner(7)
```

## Các thừa kế trong view Odoo 

**vd :**

```xml
<field name="arch" type="xml">
        <notebook position="inside">
            <page string="Sessions">
                <group>
                    <field name="instructor"/>
                    <field name="session_ids"/>
                </group>
            </page>
        </notebook>
    </field>
```
hoặc

```xml
<xpath expr="//field[@name='description']" position="after">
    <field name="instructor" />
</xpath>
```

Các thuộc tính đi kèm :

- after 
- before
- replace
- inside
- attributes : Thêm 1 số thuộc tính : readonly, string, editable, domain, options, vv

## Domain in view Odoo 

**vd :**

```py
domain = ['|', ('product_type', '=', 'service'), ('unit_price', '>', 1000)]
 
# Tìm kiếm sản phẩm là dịch vụ hoặc giá lớn hơn 1000
 
domain = ['&', ('product_type', '=', 'service'), ('unit_price', '<', 1000)]
 
# Tìm kiếm sản phẩm là dịch vụ và giá lớn hơn 1000
 
domain = ['|', ('product_type', '=', 'service'), '!', '&', ('unit_price', '>=', 1000), ('unit_price', '<=', 2000)]
 
# Tìm kiếm sản phẩm là dịch vụ hoặc không  giá lớn hơn hoặc bằng 1000 và bé thua hoặc bằng 2000
 
domain = [('name','=','ABC'), ('language.code','!=','en_US'), '|',('country_id.code','=','be'), ('country_id.code','=','de')]
 
# Tìm kiếm đối tác có tên là ABC và ngôn ngữ là tiếng anh và có nguồn gốc là be hoặc de
```

Một số toán tử được được cung cấp sẵn :

- `=`, `!=`, `>`, `<`, `<=`, `>=`

- `=?` : Tạo giá trị `True` nếu giá trị của nó là `None` hoặc `False`.

- `=like` : giống toán tử `=` , có thể được thêm dấu gạch dưới, phần trăm , `-`.

- `like` : chứa (phân biệt chứ hoa và thường)

```
# [(‘name’, ‘like’, ‘apa’)], kết quả = ‘apa’, ‘bapak’, ‘apakah’, không phải ‘Apa’, ‘APA’, dst
# [(‘name’, ‘like’, ‘apa’)] giống như [(‘name’, ‘=like’, ‘%apa%’)]
```

- `not like` : Không chứa .

- `ilike` : có chứa (không phân biệt chữ hoa, chữ thường)

```
# [(‘name’, ‘ilike’, ‘apa’)], kết quả = ‘apa’, ‘Apa’, ‘APA’, ‘Apakah’, ‘bapak’, dst.
# [(‘name’, ‘ilike’, ‘apa’)] giống như [(‘name’, ‘=ilike’, ‘%apa%’)]
```

- `not ilike` : không chứa(không phân biệt chữ hoa, chữ thường)

- `=ilike` : Kết hợp giữa toán tử `=` và `ilike`.

```
# [(‘name’, ‘=ilike’, ‘apa’)], kết quả = ‘apa’, ‘APA’, ‘Apa’, ‘APa’, ApA’, ‘aPa’, không phải ‘Apakah’, ‘papah’, ‘Bapak’, dst
```

- `in, not in` : có hoặc không trong 1 list.

- `child_of` : con của `_parent_name`(bản ghi phân cấp).


## Attribut in view Odoo

**vd :**

```xml
<field name="partner_id" attrs="{'invisible': [('communication', '=', True)], 'required': [('payment_type', 'in', ('inbound', 'outbound'))], 'readonly': [('state', '!=', 'draft')]}}" />
```
Bao gồm các đối tượng :

- invisible : ẩn

- readonly : chỉ đọc

- required : trường bắt buộc


## Widget in view Odoo

| Định nghĩa | Hiển thị | Hình ảnh |
|---------|---------|---------|
| many2many_checkboxes | Hiển thị hiệu ứng checkbox cho trường many2many | ![](https://github.com/zFinnz/zFinnz.github.io/blob/master/Odoo/Picture/many2many_checkboxe.png)  |
| guage | style="width:120px;height:90px;cursor:pointer;" options="{'max_field': 'your_field_to_set_limit'}" | ![](https://github.com/zFinnz/zFinnz.github.io/blob/master/Odoo/Picture/gauge.png) |
| many2many_binary | Dùng để cho việc upload file | ![](https://github.com/zFinnz/zFinnz.github.io/blob/master/Odoo/Picture/many2many_binary.png) |
| many2many_kanban | Hiển thị kiểu kanban cho trường many2many | ![](https://github.com/zFinnz/zFinnz.github.io/blob/master/Odoo/Picture/many2many_kanban.png) |
| many2many_attendee | Hiển thị trường many2many kiểu chọn nhiều | ![](https://github.com/zFinnz/zFinnz.github.io/blob/master/Odoo/Picture/many2many_attende.png) |
| mail_folowers| Hiển thị dạng mail ở phía cuối form | ![](https://github.com/zFinnz/zFinnz.github.io/blob/master/Odoo/Picture/mail_folowers.png) |
| html | Hiển thị bảng soạn thảo | ![](https://github.com/zFinnz/zFinnz.github.io/blob/master/Odoo/Picture/html.png) |
| html_frame | Hiển thi nhiều bảng soạn thảo trên 1 form | ![](https://github.com/zFinnz/zFinnz.github.io/blob/master/Odoo/Picture/html_frame.png) |
| one2many | Chọn kiểu one2many | ![](https://github.com/zFinnz/zFinnz.github.io/blob/master/Odoo/Picture/one2many.png) |
| one2many_list |  Hiển thị danh sách bảng one2many | ![](https://github.com/zFinnz/zFinnz.github.io/blob/master/Odoo/Picture/one2many_list.png) |
| one2many_selectable |  |  |
| widgetonbutton |  Để tạo danh sách nút có đèn | ![](https://github.com/zFinnz/zFinnz.github.io/blob/master/Odoo/Picture/widgetonbutton.png) |
| website_button | tạo một link website kiểu button | ![](https://github.com/zFinnz/zFinnz.github.io/blob/master/Odoo/Picture/website_button.png) |
| char | kiểu kí tự cho trường |  |
| id |   |  |
| email | Dùng để hiện thị `email link` |  |
| phone | Nếu abrn sử dụng ứng dụng điện thoại , bạn có thể trích số ra để gọi |  |
| url | Hiển thị url của website | ![](https://github.com/zFinnz/zFinnz.github.io/blob/master/Odoo/Picture/url.png) |
| check_box | hiển thị dạng checkbox |  |
| text | kiểu text cho trường |  |
| char_domain | Chúng ta có thể set `domain` cho trường |  |
| date | Dùng để chuyển đổi `datetime` trong trường `date` |  |
| datetime |  | ![](https://github.com/zFinnz/zFinnz.github.io/blob/master/Odoo/Picture/date.png)  |
| selection | chỉ áp dụng cho many2one , dùng để lựa chọn trường | ![](https://github.com/zFinnz/zFinnz.github.io/blob/master/Odoo/Picture/selection.png) |
| radio | hiển thị kiểu nút | ![](https://github.com/zFinnz/zFinnz.github.io/blob/master/Odoo/Picture/radio.png) |
| upgrade_radio | Kích để hiện một danh sách nút bấm | ![](https://github.com/zFinnz/zFinnz.github.io/blob/master/Odoo/Picture/upgrade_radio.png) |
| reference |   |  |
| boolean  |   |  |
| boolean_button | Hiển thị nút Active |  |
| upgrade_boolean | khi kích vào field nó sẽ hiện 1 bảng windown | ![](https://github.com/zFinnz/zFinnz.github.io/blob/master/Odoo/Picture/upgrade_boolean.png) |
| toggle_button |   |  |
| float | |  |
| percentpie | Hiển thị đồ thị process, dùng để hiện thi cho trường `integer` và `float` | ![](https://github.com/zFinnz/zFinnz.github.io/blob/master/Odoo/Picture/percentpie.png) |
| integer | Chỉ dùng ở trường `integer` |  |
| float_time | Định dạng trường kiểu `float` | ![](https://github.com/zFinnz/zFinnz.github.io/blob/master/Odoo/Picture/float_time.png) |
| progressbar | Hiển thị theo thanh trạng thái nằm ngang | ![](https://github.com/zFinnz/zFinnz.github.io/blob/master/Odoo/Picture/progressbar.png) |
| image | Dùng cho trường `binary` để hiện thị ảnh |  |
| binary |  |  |
| statusbars | Hiển thị trang thái trên thanh `process` | ![](https://github.com/zFinnz/zFinnz.github.io/blob/master/Odoo/Picture/statusbar.png) |
| monetary | Dùng để hiện thi tiền tệ dạng tính toán | ![](https://github.com/zFinnz/zFinnz.github.io/blob/master/Odoo/Picture/monetary.png) |
| priority | Dùng để hiển thị độ ưu tiên dưới dạng hình sao | ![](https://github.com/zFinnz/zFinnz.github.io/blob/master/Odoo/Picture/priority.png) |
| kanban_state_selection |  |  |
| many2many_tags | Hiển thị các tags trong 1 ô | ![](https://github.com/zFinnz/zFinnz.github.io/blob/master/Odoo/Picture/many2many_tags.png) |
| kanban_label_selection |   |  |
| handle | Dùng để di chuyển các dòng lên hoặc xuống, được sử dùng ở `tree view` |  |
| statinfo | Dùng để hiện thị khi có một trường là động | ![](https://github.com/zFinnz/zFinnz.github.io/blob/master/Odoo/Picture/statinfo.png) |
| timezone_mismatch |   |  |
| label_selection  |    |  |
|  ace   |   |  |



### Onchange in Odoo

- Value

- Domain

- Warning 

**Vd:**

```py
class Sesi(models.Model):
    ...
 
     
    @api.onchange('seats', 'attendee_ids')
    def _verify_valid_seats(self):
        if self.seats <= 0: # cek nilai field seats, jika dibawah 0 (negatif), maka masuk kondisi if
            return {
                    'value': {
                              'seats': len(self.attendee_ids) or 1 # mengisi field seats dengan nilai jumlah peserta atau 1
                              },
                    'warning': {
                                'title': "Nilai Jumlah Kursi Salah", # judul pop up
                                'message': "Jumlah Kursi Tidak Boleh Negatif" # pesan pop up
                                }
                    }
             
        if self.seats < len(self.attendee_ids): # cek nilai field seats (jumlah kursi) apakah lebih kecil dari field attendee_ids (jumlah peserta), jika iya maka masuk kondisi if
            return {
                    'value': {
                              'seats': len(self.attendee_ids) # mengisi field seats dengan nilai jumlah peserta
                              },
                    'warning': {
                                'title': "Peserta Terlalu Banyak", # judul pop up
                                'message': "Tambahkan Kursi atau Kurangi Peserta" # pesan pop up
                                }
                    }

            return {'domain':{'name_id':[('id', 'in', domain_list)]}}


           self.update({'nama_field': 'nilai'})
 
			self.update({'partner_id': self.partner_id.id, 'fiscalyear_id': self.partner_id.fiscalyear_id.id})
```


### Constraints in Odoo

1. Python Contraints

Một ràng buộc tạo ra bởi phương thức Python.Thường sử dụng để kiểm tra giá trị của các trường trên cùng bản ghi.

**VD:**

```py
@api.constrains('umur')
def _cek_umur(self):
    for r in self:
        if r.umur < 17:
            raise ValidationError("Tổi của bạn quá trẻ")
 
#  ATAU
 
@api.constrains('name', 'code')
def _cek_name_code(self):
    for r in self:
        if r.name == r.code:
            raise ValidationError("Name và code không thể giống nhau")
```

2. Sql Contraints

**Vd:**

```py
_sql_constraints = [
                    ('name_constraints_des', 'CHECK(name != description)', 'Thông báo lỗi kiểm tra tên trường và mô tả trên cùng bản ghi')
]
 
# ATAU
 
_sql_constraints = [
                    ('name_constraints', 'UNIQUE(name)', 'Thông báo lỗi kiểm tra tên trùng nhau')
]
 
# ATAU
 
 
_sql_constraints = [
                    ('name_description_check', 'CHECK(name != description)', 'Thông báo lỗi kiểm tra tên trường và mô tả trên cùng bản ghi'),
                    ('name_unique', 'UNIQUE(name)', 'The course title must be unique')
]
```

### Tree view in Odoo

1. Thay đổi font chữ thành đậm

```xml
decoration-bf="[name_field][operator][value_field]"
```

2. Thay đổi font chữ thành in nghiêng

```xml
decoration-it="[name_field][operator][value_field]"
```

3. Thay đổi font chữ theo nhiều trường hợp

```xml
decoration-info="[name_field][operator][value_field]"
decoration-muted="[name_field][operator][value_field]"
decoration-danger="[name_field][operator][value_field]"
decoration-primary="[name_field][operator][value_field]"
decoration-success="[name_field][operator][value_field]"
decoration-warning="[name_field][operator][value_field]"
```

```
&lt; = <
&gt; = >
&le; = <=
&ge; = >=
```

4. Các thuộc tính

- `editable="bottom"` : Loại bỏ các biểu mẫu bật lên khi tạo và chỉnh sửa.

- `default_order="name_desc"` : Sắp xếp bảng theo tên trường.

- `create="false"` : Loại bỏ nút tạo.

- `edit="false"` : Loại bỏ nút sửa.

- `delete="false"` : Loại bỏ nút xóa.

- `color` : Thay đổi màu theo điều kiện.

**Vd:**

```xml
<tree colors="blue:state == 'draft';gray:state in ('cancel','done');black:state == 'open'" >
```



### Calender Views

Các thuộc tính đi kèm :

- color

- date_start

- date_stop

- date_delay

- event_open_popup

- quick_add

- display

- all_day

- mode
