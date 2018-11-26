Để giải quyết vấn đề này, Python đã tích hợp `module gc` có chức năng phát hiện các tham chiếu và giải quyết nó. 

Tham chiếu xoay vòng chỉ xảy ra với các đối tượng `container` (ví dụ, trong các đối tượng có thể chứa các đối tượng khác), chẳng hạn như `list`, `dict`, `class`, `tuple`. 

Bộ gom rác phát sinh không theo dõi tất cả các loại `immutable` ngoại trừ `tuple`. Các `tuple` và `dict` cho dù chỉ chứa các đối tượng `immutable` nhưng cũng có thể không được theo dõi tùy thuộc vào các điều kiện nhất định.
