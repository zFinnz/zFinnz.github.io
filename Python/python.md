Bài này hướng dẫn sử dụng tính năng `HTTP server` của Python để tạo một web server chia sẻ file.
Bạn có thể sử dụng trên cả Windowns, Linux, MacOs chỉ cần máy có cài đặt Python
Giả sử tôi muốn chia sẻ thư mục `C:\Users\Finn\Music`, trước hết tôi sẽ cd đến thư mục này:
```sh
C:\Users\Finn\Music
```
Sau đó chạy lệnh sau để tạo `HTTP server`:

```sh
python -m SimpleHTTPServer
```
Còn với Python3 các bạn chạy lệnh:
```sh
python -m http.server
```
Bạn có thể thay đổi cổng của server bằng cách thêm một số nguyên trong khoảng 1024 - 65535 ở cuối lệnh.
Bùm! Bạn đã có một `HTTP server` chia sẻ tất cả những file bạn có trong thư mục `C:\Users\Finn\Music` đang listen trên cổng 8000. Ngay bây giờ bạn có thể kiểm tra bằng cách bật Firefox hoặc Chrome, truy cập địa chỉ `0.0.0.0:8000` (hoặc `localhost:8000`) sẽ thấy kết quả hiện ra như sau:

Click vào bất cứ file nào để tải về.
Nhưng sau đó thì bạn cần phải truy cập trang web này từ một máy khác trong mạng LAN. Để làm vậy, bạn cần biết địa chỉ IP hiện tại của máy mình trong mạng nội bộ bằng cách chạy lệnh sau:
```sh
$ ipconfig # Với windowns
#hoặc
$ ifconfig # Với linux
```
Kết quả sẽ cho dạng thế này
```sh
Wireless LAN adapter Wi-Fi:                                       
                                                                  
   Connection-specific DNS Suffix  . :                            
   Link-local IPv6 Address . . . . . : fe80::707b:a05e:d5a3:159%8 
   IPv4 Address. . . . . . . . . . . : 192.168.0.101              
   Subnet Mask . . . . . . . . . . . : 255.255.255.0              
   Default Gateway . . . . . . . . . : 192.168.0.1                
```
Tôi đang dùng mạng Wifi nên tôi quan tâm đến mục Wireless LAN adapter Wi-Fi, để ý dòng inet addr:192.168.0.101 là địa chỉ IP hiện tại của máy tôi trong mạng LAN (nếu bạn dùng Ethernet cắm dây thì xem mục eth0).
Như vậy, ở những máy còn lại, tôi chỉ cần truy cập địa chỉ http://192.168.29.171:8000 là có thể tải được những file đang được chia sẻ ở máy tôi.
Có một điều cần chú ý với phương pháp này. Trước hết là nó rất không an toàn, không có quản lý phân quyền gì hết nên chỉ dùng trong mạng nội bộ mà bạn tin tưởng.
