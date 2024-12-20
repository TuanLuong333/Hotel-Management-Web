DROP DATABASE hotelmanagement;

CREATE DATABASE hotelmanagement;
USE hotelmanagement;

CREATE TABLE `addresses` (
  `address_id` int NOT NULL AUTO_INCREMENT,
  `address_line1` varchar(100) DEFAULT NULL,
  `city` varchar(45) DEFAULT NULL,
  `state` varchar(45) DEFAULT NULL,
  `country` varchar(45) DEFAULT NULL,
  `zipcode` varchar(8) DEFAULT NULL,
  PRIMARY KEY (`address_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

CREATE TABLE `hotels` (
  `hotel_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `contact_number` varchar(20) DEFAULT NULL,
  `email_address` varchar(100) DEFAULT NULL,
  `address_id` int DEFAULT NULL,
  `description` text,
  PRIMARY KEY (`hotel_id`),
  KEY `address_id` (`address_id`),
  CONSTRAINT `hotels_ibfk_1` FOREIGN KEY (`address_id`) REFERENCES `addresses` (`address_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

CREATE TABLE `rooms` (
  `room_id` int NOT NULL AUTO_INCREMENT,
  `hotel_id` int DEFAULT NULL,
  `room_number` int DEFAULT NULL,
  `room_type` enum('Single','Double','Suite','Family','Luxury') NOT NULL,
  `capacity` int DEFAULT NULL,
  `thumbnail` text,
  `status` enum('Available','Booked','Maintenance') DEFAULT 'Available',
  `price` decimal(10,2) NOT NULL,
  PRIMARY KEY (`room_id`),
  KEY `rooms_ibfk_1` (`hotel_id`),
  CONSTRAINT `rooms_ibfk_1` FOREIGN KEY (`hotel_id`) REFERENCES `hotels` (`hotel_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

CREATE TABLE `bookings` (
  `booking_id` int NOT NULL AUTO_INCREMENT,
  `guest_name` varchar(100) DEFAULT NULL,
  `hotel_id` int DEFAULT NULL,
  `room_id` int DEFAULT NULL,
  `check_in_date` datetime DEFAULT NULL,
  `check_out_date` datetime DEFAULT NULL,
  `total_amount` decimal(10,2) DEFAULT NULL,
  `status` enum('confirm','reject') DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`booking_id`),
  KEY `room_id` (`room_id`),
  KEY `bookings_ibfk_1` (`hotel_id`),
  KEY `idx_guest_name` (`guest_name`),
  KEY `idx_check_in_out` (`check_in_date`,`check_out_date`),
  CONSTRAINT `bookings_ibfk_1` FOREIGN KEY (`hotel_id`) REFERENCES `hotels` (`hotel_id`) ON DELETE CASCADE,
  CONSTRAINT `bookings_ibfk_2` FOREIGN KEY (`room_id`) REFERENCES `rooms` (`room_id`) ON DELETE CASCADE,
  CONSTRAINT `check_date` CHECK ((`check_in_date` < `check_out_date`))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

CREATE TABLE `employees` (
  `employee_id` int NOT NULL AUTO_INCREMENT,
  `first_name` varchar(45) DEFAULT NULL,
  `last_name` varchar(45) DEFAULT NULL,
  `email_address` varchar(100) DEFAULT NULL,
  `contact_number` varchar(20) DEFAULT NULL,
  `position` enum('Manager','Receptionist','Housekeeper','Chef','Security','Maintenance','Other') DEFAULT 'Other',
  `hotel_id` int DEFAULT NULL,
  PRIMARY KEY (`employee_id`),
  KEY `employees_ibfk_1` (`hotel_id`),
  CONSTRAINT `employees_ibfk_1` FOREIGN KEY (`hotel_id`) REFERENCES `hotels` (`hotel_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

CREATE TABLE `payment` (
  `payment_id` int NOT NULL AUTO_INCREMENT,
  `booking_id` int DEFAULT NULL,
  `payment_date` datetime DEFAULT NULL,
  `payment_amount` decimal(10,2) DEFAULT NULL,
  `status` enum('Pending','Completed','Cancelled') DEFAULT 'Pending',
  `payment_method` enum('Cash','Credit Card','Online Payment') DEFAULT 'Cash',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`payment_id`),
  KEY `booking_id` (`booking_id`),
  CONSTRAINT `payment_ibfk_1` FOREIGN KEY (`booking_id`) REFERENCES `bookings` (`booking_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

CREATE TABLE `services` (
  `service_id` int NOT NULL AUTO_INCREMENT,
  `hotel_id` int DEFAULT NULL,
  `service_name` varchar(100) DEFAULT NULL,
  `cost` decimal(10,2) DEFAULT NULL,
  `booking_id` int DEFAULT NULL,
  PRIMARY KEY (`service_id`),
  KEY `services_ibfk_1` (`hotel_id`),
  KEY `services_ibfk_2` (`booking_id`),
  CONSTRAINT `services_ibfk_1` FOREIGN KEY (`hotel_id`) REFERENCES `hotels` (`hotel_id`) ON DELETE CASCADE,
  CONSTRAINT `services_ibfk_2` FOREIGN KEY (`booking_id`) REFERENCES `bookings` (`booking_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

INSERT INTO addresses (address_line1, city, state, country, zipcode) 
VALUES 
    ('52 Trần Bình', 'Hà Nội', 'Cầu Giấy', 'Việt Nam', '75389'),
    ('462 Nguyễn Quang Sứ', 'Hồ Chí Minh', 'Quận 1', 'Việt Nam', '6541'),
    ('934 Lê Duẩn', 'Đà Nẵng', 'Liên Chiểu', 'Việt Nam', '463'),
    ('Số 12 Phố Huế', 'Hà Nội', 'Thanh Xuân', 'Việt Nam', '46847'),
    ('23 Đường Biển', 'TP. Hồ Chí Minh', 'Quận 7', 'Việt Nam', '46896'),
    ('Số 5 Đỉnh Núi', 'Đà Nẵng', 'Hòa Vang', 'Việt Nam', '461476'),
    ('456 Đại Lộ Hòa Bình', 'Hải Phòng', 'An Dương', 'Việt Nam', '4984135'),
    ('12 Ngõ Hoa Lư', 'Hà Nội', 'Hà Nội', 'Việt Nam', '7250'),
    ('Số 8 Đường Đinh Bộ Lĩnh', 'TP. Hồ Chí Minh', 'Hồ Chí Minh', 'Việt Nam', '12345'),
    ('Khu Vực Phía Tây', 'Đà Nẵng', 'Đà Nẵng', 'Việt Nam', '123456'),
    ('789 Đường Biển Đông', 'Nha Trang', 'Khánh Hòa', 'Việt Nam', '54321'),
    ('125 Đường Lê Lợi', 'Huế', 'Thừa Thiên Huế', 'Việt Nam', '530000'),
    ('45 Đường Trần Phú', 'Đà Lạt', 'Lâm Đồng', 'Việt Nam', '670000'),
    ('789 Đường Nguyễn Trãi', 'Cần Thơ', 'Cần Thơ', 'Việt Nam', '900000'),
    ('234 Đường Nguyễn Huệ', 'Hội An', 'Quảng Nam', 'Việt Nam', '510000'),
    ('12 Đường Hùng Vương', 'Hà Nội', 'Hà Nội', 'Việt Nam', '987654'),
    ('78 Đường Nguyễn Huệ', 'TP. Hồ Chí Minh', 'TP. Hồ Chí Minh', 'Việt Nam', '4961496'),
    ('45 Đường Phạm Văn Đồng', 'Đà Nẵng', 'Đà Nẵng', 'Việt Nam', '49626'),
    ('89 Đường Cách Mạng Tháng 8', 'Cần Thơ', 'Cần Thơ', 'Việt Nam', '98765');

INSERT INTO `hotels` (name, contact_number, email_address, address_id, description) 
VALUES 
    ('Khách Sạn Bình Minh', '0546149834', 'binhminh@hotel.com', 1, 'Khách sạn sang trọng tại trung tâm Hà Nội'),
    ('Resort View Biển', '0964849378', 'viewbien@resort.com', 2, 'Resort ven biển tại TP. Hồ Chí Minh'),
    ('Nghỉ Dưỡng Trên Núi', '0498416877', 'trennui@retreat.com', 3, 'Khu nghỉ dưỡng yên bình trên núi ở Đà Nẵng'),
    ('Khách Sạn Biển Vàng', '0394857634', 'bienvang@hotel.com', 4, 'Khách sạn tiện nghi ven biển tại Hải Phòng'),
    ('Khách Sạn Mặt Trời', '0456123987', 'mattroi@hotel.com', 5, 'Khách sạn cao cấp trên núi với tầm nhìn tuyệt đẹp tại Đà Nẵng'),
    ('Khách Sạn Đỉnh Núi', '0954837461', 'dinhnui@hotel.com', 6, 'Khách sạn cao cấp với cảnh quan tuyệt đẹp tại Đà Nẵng'),
    ('Resort Đại Dương', '0987612345', 'daiduong@resort.com', 7, 'Resort tiện nghi bên bờ biển Nha Trang'),
    ('Khách Sạn Mùa Thu', '0912345678', 'muathu@hotel.com', 8, 'Khách sạn nhỏ yên bình tại trung tâm Hà Nội'),
    ('Khách Sạn Thiên Đường', '0976543210', 'thienduong@hotel.com', 9, 'Khách sạn cổ kính tại trung tâm thành phố Huế'),
    ('Resort Hòa Bình', '0965432198', 'hoabinh@resort.com', 10, 'Khu nghỉ dưỡng sang trọng tại Đà Lạt'),
    ('Khách Sạn Cần Thơ', '0938765432', 'cantho@hotel.com', 11, 'Khách sạn tiện nghi ở trung tâm thành phố Cần Thơ'),
    ('Khách Sạn Hội An', '0925678432', 'hoian@hotel.com', 12, 'Khách sạn gần biển ở Hội An'),
    ('Khách Sạn Ánh Dương', '0976543211', 'anhduong@hotel.com', 13, 'Khách sạn cao cấp tại trung tâm Hà Nội'),
    ('Resort Bình Yên', '0965432199', 'binhyen@resort.com', 14, 'Khu nghỉ dưỡng yên bình tại TP. Hồ Chí Minh'),
    ('Khách Sạn Biển Xanh', '0938765433', 'bienxanh@hotel.com', 15, 'Khách sạn gần biển tại Đà Nẵng'),
    ('Khách Sạn Thành Phố Mới', '0925678433', 'thanhphomoi@hotel.com', 16, 'Khách sạn mới xây dựng tại trung tâm Cần Thơ'),
	('Khách Sạn Biển Hát', '0911112222', 'bienhat@hotel.com', 17, 'Khách sạn sang trọng với view biển tại Phú Quốc'),
    ('Resort Rừng Xanh', '0922223333', 'rungxanh@resort.com', 18, 'Khu nghỉ dưỡng giữa rừng nguyên sinh ở Cát Bà'),
    ('Khách Sạn Ánh Sao', '0933334444', 'anhcao@hotel.com', 19, 'Khách sạn nhỏ nhưng tiện nghi tại trung tâm Sapa');

INSERT INTO `rooms` VALUES
    (1, 1, 101, 'Single', 1, 'https://images.pexels.com/photos/29668197/pexels-photo-29668197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'Available', 500.00),
    (2, 1, 102, 'Double', 2, 'https://acihome.vn/uploads/15/mau-thiet-ke-noi-that-phong-2-giuong-don-ben-trong-khach-san-3-4-5-sao-2.JPG', 'Booked', 800.00),
    (3, 2, 201, 'Suite', 4, 'https://ezcloud.vn/wp-content/uploads/2018/05/phong-suite-la-gi.webp', 'Available', 1000.00),
    (4, 2, 202, 'Family', 5, 'https://vuongquocnoithat.vn/images/2020/12/26/nhung-luu-y-chung-khi-treo-anh-gia-dinh-o-phong-khach.jpg', 'Maintenance', 1500.00),
    (5, 3, 301, 'Luxury', 2, 'https://sbsvilla.vn/wp-content/uploads/Phong-khach-biet-thu-Luxury-03-1.jpg', 'Available', 2000.00),
    (6, 3, 302, 'Double', 2, 'https://kientrucnamcuong.com/upload/image/images/thiet-ke-phong-khach-san-11.jpg', 'Booked', 750.00),
    (7, 4, 101, 'Single', 1, 'https://images.pexels.com/photos/29696164/pexels-photo-29696164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'Available', 500.00),
    (8, 4, 102, 'Suite', 3, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE24InNpuWPmVrDhdzw0sSusoYrEPWOtF4Kw&s', 'Available', 1200.00),
    (9, 5, 201, 'Family', 4, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7lT9EYbFuc1qby6mFVcTj3p56gWuGZA4_zw&s', 'Available', 1400.00),
    (10, 5, 202, 'Luxury', 2, 'https://acihome.vn/uploads/15/mau-thiet-ke-noi-that-buong-vip-khach-san-co-1-ngu-1-khach-tinh-te-sang-trong-2.JPG', 'Maintenance', 2500.00),
    (11, 6, 301, 'Double', 2, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ3LHozzHo8sb0Npop0siDWmaLvh0mIV46Lg&s', 'Booked', 800.00),
    (12, 6, 302, 'Single', 1, 'https://benhvienphuongdong.vn/public/uploads/thu-vien-anh/khong-gian-benh-vien/phong-noi-tru/phong-noi-tru-1.jpg', 'Available', 500.00),
    (13, 7, 401, 'Suite', 4, 'https://media-cdn.tripadvisor.com/media/photo-s/1a/1b/60/5e/phong-suite-v-i-khong.jpg', 'Available', 1600.00),
    (14, 7, 402, 'Luxury', 2, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsiNYKQDQO1heDeZYRVjK3OpSrwkApKdaNcQ&s', 'Available', 2200.00),
    (15, 8, 101, 'Family', 5, 'https://villaflc.vn/wp-content/uploads/2020/01/family-suite.jpg', 'Booked', 1800.00),
    (16, 8, 102, 'Single', 1, 'https://huyhoanhotel.com/wp-content/uploads/2017/05/phong-1-giuong-don.jpg', 'Available', 600.00),
    (17, 9, 201, 'Double', 2, 'https://media-cdn.tripadvisor.com/media/photo-s/0c/81/60/95/phong-conneting-47m2.jpg', 'Booked', 850.00),
    (18, 9, 202, 'Luxury', 4, 'https://noithatmienbac.vn/wp-content/uploads/2023/12/phong-vip-nha-hang.jpg', 'Booked', 2500.00),
    (19, 10, 301, 'Suite', 3, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE24InNpuWPmVrDhdzw0sSusoYrEPWOtF4Kw&s', 'Available', 1500.00),
    (20, 10, 302, 'Family', 6, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7lT9EYbFuc1qby6mFVcTj3p56gWuGZA4_zw&s', 'Available', 2500.00),
    (21, 11, 401, 'Luxury', 2, 'https://vanangroup.com.vn/wp-content/uploads/2024/05/Trang-thiet-bi-tien-nghi.jpg', 'Booked', 3000.00),
    (22, 11, 402, 'Single', 1, 'https://benhvienphuongdong.vn/public/uploads/thu-vien-anh/khong-gian-benh-vien/phong-noi-tru/phong-noi-tru-1.jpg', 'Available', 500.00),
    (23, 12, 501, 'Double', 2, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ3LHozzHo8sb0Npop0siDWmaLvh0mIV46Lg&s', 'Booked', 750.00),
    (24, 12, 502, 'Suite', 4, 'https://media-cdn.tripadvisor.com/media/photo-s/1a/1b/60/5e/phong-suite-v-i-khong.jpg', 'Available', 1200.00),
    (25, 13, 601, 'Luxury', 5, 'https://vanangroup.com.vn/wp-content/uploads/2024/05/Thiet-ke-noi-that-phong-ngu-doi-2.jpg', 'Maintenance', 3000.00),
    (26, 13, 602, 'Family', 6, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7lT9EYbFuc1qby6mFVcTj3p56gWuGZA4_zw&s', 'Available', 1800.00),
    (27, 14, 701, 'Double', 2, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1MABibwRg1-QTQ2mq1Z36129YIkfEWaDXJw&s', 'Booked', 800.00),
    (28, 14, 702, 'Suite', 4, 'https://ezcloud.vn/wp-content/uploads/2018/05/phong-suite-la-gi.webp', 'Available', 1500.00),
    (29, 15, 801, 'Luxury', 3, 'https://media-cdn.tripadvisor.com/media/photo-s/1a/1b/60/5e/phong-suite-v-i-khong.jpg', 'Available', 2200.00),
    (30, 15, 802, 'Single', 1, 'https://images.pexels.com/photos/29668197/pexels-photo-29668197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'Available', 600.00);

INSERT INTO `employees` VALUES 
(1, 'Nguyễn', 'An', 'nguyen.an@hotel.com', '0123456789', 'Manager', 3),
(2, 'Trần', 'Bình', 'tran.binh@resort.com', '0987654321', 'Receptionist', 3),
(3, 'Lê', 'Chí', 'le.chi@retreat.com', '0345678901', 'Housekeeper', 8),
(4, 'Nguyễn', 'Hà', 'ha.nguyen@hotel.com', '0987456321', 'Manager', 10),
(5, 'Phạm', 'Tuấn', 'tuan.pham@hotel.com', '0948675432', 'Receptionist', 10),
(6, 'Lê', 'Hùng', 'hung.le@hotel.com', '0934678291', 'Housekeeper', 10),
(7, 'Vũ', 'Trang', 'trang.vu@hotel.com', '0923456789', 'Chef', 12),
(8, 'Lê', 'Mỹ Linh', 'linh.le@hotel.com', '0934567891', 'Manager', 7),
(9, 'Trần', 'Đức Hoàng', 'hoang.tran@hotel.com', '0912345687', 'Receptionist', 7),
(10, 'Nguyễn', 'Thùy Dương', 'duong.nguyen@hotel.com', '0923456712', 'Housekeeper', 13),
(11, 'Vũ', 'Minh Khôi', 'khoi.vu@hotel.com', '0901234567', 'Chef', 6),
(12, 'Trần', 'Thị Hoa', 'hoa.tran@hotel.com', '0912345876', 'Receptionist', 9),
(13, 'Nguyễn', 'Hoài Nam', 'nam.nguyen@resort.com', '0943567890', 'Manager', 11),
(14, 'Phạm', 'Anh Tuấn', 'tuan.pham@hotel.com', '0921234567', 'Chef', 4),
(15, 'Võ', 'Hồng Ngọc', 'ngoc.vo@hotel.com', '0909876543', 'Housekeeper', 4),
(16, 'Hoàng', 'Thanh Bình', 'binh.hoang@hotel.com', '0912345678', 'Receptionist', 18),
(17, 'Lê', 'Minh Phương', 'phuong.le@resort.com', '0943567891', 'Manager', 18),
(18, 'Phạm', 'Quỳnh Như', 'nhu.pham@hotel.com', '0921234568', 'Chef', 19),
(19, 'Vũ', 'Hồng Lan', 'lan.vu@hotel.com', '0909876544', 'Housekeeper', 19),
(20, 'Nguyễn', 'Văn Hải', 'hai.nguyen@hotel.com', '0912456789', 'Receptionist', 3),
(21, 'Trần', 'Thị Minh', 'minh.tran@hotel.com', '0923456710', 'Housekeeper', 7),
(22, 'Lê', 'Tuấn Anh', 'tuananh.le@hotel.com', '0912349876', 'Chef', 10),
(23, 'Phạm', 'Thu Hương', 'huong.pham@hotel.com', '0934567892', 'Receptionist', 10),
(24, 'Vũ', 'Hải Yến', 'yen.vu@hotel.com', '0945678901', 'Housekeeper', 18),
(25, 'Nguyễn', 'Thành Công', 'cong.nguyen@hotel.com', '0912345673', 'Chef', 18),
(26, 'Nguyễn', 'Văn Hải', 'hai.nguyen@hotel.com', '0912456789', 'Receptionist', 1),
(27, 'Trần', 'Thị Minh', 'minh.tran@hotel.com', '0923456710', 'Manager', 2),
(28, 'Lê', 'Thành Công', 'cong.le@hotel.com', '0934567892', 'Chef', 5),
(29, 'Phạm', 'Hoàng Yến', 'yen.pham@hotel.com', '0945678901', 'Housekeeper', 6),
(30, 'Vũ', 'Quang Minh', 'minh.vu@hotel.com', '0912345699', 'Receptionist', 11),
(31, 'Nguyễn', 'Hồng Phúc', 'phuc.nguyen@hotel.com', '0923456781', 'Manager', 13),
(32, 'Trần', 'Khánh Linh', 'linh.tran@hotel.com', '0912456788', 'Chef', 14),
(33, 'Lê', 'Mạnh Tuấn', 'tuan.le@hotel.com', '0901234565', 'Receptionist', 15),
(34, 'Phạm', 'Ngọc Hà', 'ha.pham@hotel.com', '0934678292', 'Housekeeper', 16),
(35, 'Vũ', 'Thanh Thảo', 'thao.vu@hotel.com', '0943567892', 'Chef', 17),
(36, 'Nguyễn', 'Thị Hằng', 'hang.nguyen@hotel.com', '0923456782', 'Receptionist', 12),
(37, 'Trần', 'Anh Quân', 'quan.tran@hotel.com', '0912345799', 'Manager', 8),
(38, 'Lê', 'Nhật Minh', 'minh.le@hotel.com', '0901234577', 'Chef', 9),
(39, 'Phạm', 'Minh Anh', 'anh.pham@hotel.com', '0921234569', 'Receptionist', 4),
(40, 'Vũ', 'Huyền Trang', 'trang.vu@hotel.com', '0912456783', 'Housekeeper', 18),
(41, 'Nguyễn', 'Bảo Ngọc', 'ngoc.nguyen@hotel.com', '0909876546', 'Manager', 19);

INSERT INTO `bookings` VALUES 
(1, 'Phạm Minh', 3, 5, '2024-12-10 14:00:00', '2024-12-12 12:00:00', 2000.00, 'confirm', '2024-12-06 10:48:56', '2024-12-06 10:48:56'),
(2, 'Vũ Thị Linh', 4, 7, '2024-12-15 15:00:00', '2024-12-18 11:00:00', 500.00, 'reject', '2024-12-06 10:48:56', '2024-12-06 10:48:56'),
(3, 'Nguyễn Văn Thắng', 5, 9, '2024-12-20 14:00:00', '2024-12-22 12:00:00', 1400.00, 'confirm', '2024-12-06 10:54:40', '2024-12-06 10:54:40'),
(4, 'Trần Thị Tú', 6, 12, '2024-12-18 15:00:00', '2024-12-21 12:00:00', 500.00, 'confirm', '2024-12-06 10:54:40', '2024-12-06 10:54:40'),
(5, 'Lê Minh Cu', 7, 14, '2024-12-25 13:00:00', '2024-12-28 11:00:00', 2500.00, 'reject', '2024-12-06 10:54:40', '2024-12-06 10:54:40'),
(6, 'Trần Quốc Anh', 3, 6, '2024-12-22 14:00:00', '2024-12-25 12:00:00', 750.00, 'confirm', '2024-12-10 13:08:16', '2024-12-10 13:08:16'),
(7, 'Nguyễn Thị Mai', 4, 8, '2024-12-18 15:00:00', '2024-12-22 12:00:00', 1200.00, 'confirm', '2024-12-10 13:08:16', '2024-12-10 13:08:16'),
(8, 'Hoàng Nhật Tân', 5, 10, '2024-12-24 14:00:00', '2024-12-28 12:00:00', 2500.00, 'reject', '2024-12-10 13:08:16', '2024-12-10 13:08:16'),
(9, 'Phạm Hữu Lộc', 6, 11, '2024-12-30 14:00:00', '2025-01-03 12:00:00', 800.00, 'confirm', '2024-12-10 13:08:16', '2024-12-10 13:08:16'),
(10, 'Nguyễn Văn Hưng', 7, 13, '2024-12-15 14:00:00', '2024-12-18 12:00:00', 1600.00, 'confirm', '2024-12-10 13:30:01', '2024-12-10 13:30:01'),
(11, 'Lê Minh Tú', 8, 15, '2024-12-20 15:00:00', '2024-12-23 11:00:00', 2000.00, 'confirm', '2024-12-10 13:30:01', '2024-12-10 13:30:01'),
(12, 'Trần Thị Hạnh', 10, 19, '2024-12-25 14:00:00', '2024-12-28 12:00:00', 2000.00, 'reject', '2024-12-10 13:30:01', '2024-12-10 13:30:01'),
(13, 'Phạm Quang Khải', 11, 21, '2024-12-30 14:00:00', '2025-01-02 12:00:00', 4000.00, 'confirm', '2024-12-10 13:30:01', '2024-12-10 13:30:01'),
(14, 'Trần Văn Hải', 8, 16, '2024-12-20 12:00:00', '2024-12-22 14:00:00', 1000.00, 'confirm', '2024-12-10 13:39:42', '2024-12-10 13:39:42');

INSERT INTO `services` VALUES 
(1,1,'Spa',1000.00,NULL),
(2,2,'Đón từ sân bay',1200.00,NULL),
(3,3,'Buffet sáng',1400.00,NULL),
(4,4,'Tour leo núi',1300.00,NULL),
(5,5,'Dịch vụ spa',1100.00,NULL),
(6,6,'Thuê xe máy',900.00,NULL),
(7,7,'Phòng karaoke',300.00,NULL),
(8,8,'Tour hướng dẫn viên',200.00,NULL),
(9,9,'Dịch vụ xe đưa đón',600.00,NULL),
(10,10,'Hồ bơi',500.00,NULL),
(11,11,'Phòng gym',1000.00,NULL),
(12,12,'Tour tham quan Hội An',300.00,NULL),
(13,13,'Dịch vụ giặt ủi',200.00,NULL),
(14,14,'Dịch vụ spa',100.00,NULL),
(15,15,'Tham quan du lịch',150.00,NULL),
(16,16,'Phòng họp hội nghị',1400.00,NULL),
(17,17,'Trò chơi trẻ em',1300.00,NULL),
(18,18,'Sân bóng chuyền',1100.00,NULL),
(19,19,'Phòng yoga',1400.00,NULL),
(20,8,'Thuê xe máy',400.00,NULL);

INSERT INTO `payment` VALUES 
(1,1,'2024-12-11 10:00:00',2000.00,'Completed','Cash','2024-12-06 10:49:40','2024-12-06 10:49:40'),
(2,3,'2024-12-16 09:00:00',1400.00,'Completed','Cash','2024-12-06 10:49:40','2024-12-06 10:49:40'),
(3,4,'2024-12-23 15:00:00',500.00,'Completed','Cash','2024-12-10 13:10:20','2024-12-10 13:10:20'),
(4,6,'2024-12-20 16:00:00',750.00,'Completed','Cash','2024-12-10 13:10:20','2024-12-10 13:10:20'),
(5,7,'2024-12-27 12:00:00',1200.00,'Completed','Cash','2024-12-10 13:10:20','2024-12-10 13:10:20'),
(6,9,'2025-01-01 10:00:00',800.00,'Completed','Cash','2024-12-10 13:10:20','2024-12-10 13:10:20'),
(7,10,'2024-12-16 15:00:00',1600.00,'Completed','Cash','2024-12-10 13:33:43','2024-12-10 13:33:43'),
(8,11,'2024-12-21 16:00:00',2000.00,'Completed','Cash','2024-12-10 13:33:43','2024-12-10 13:33:43'),
(9,13,'2024-12-26 12:00:00',4000.00,'Completed','Cash','2024-12-10 13:33:43','2024-12-10 13:33:43'),
(10,14,'2024-12-31 10:00:00',1000.00,'Completed','Cash','2024-12-10 13:33:43','2024-12-10 13:33:43');
