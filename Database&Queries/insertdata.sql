-- MySQL dump 10.13  Distrib 8.0.40, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: hoteldemo
-- ------------------------------------------------------
-- Server version	8.0.40

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Dumping data for table `addresses`
--

LOCK TABLES `addresses` WRITE;
/*!40000 ALTER TABLE `addresses` DISABLE KEYS */;
INSERT INTO `addresses` VALUES (15,'52 Trần Bình','Hà Nội','Cầu Giấy','Việt Nam','75389'),(16,'462 Nguyễn Quang Sứ','Hồ Chí Minh','Quận 1','Việt Nam','6541'),(17,'934 Lê Duẩn','Đà Nẵng','Liên Chiểu','Việt Nam','463'),(18,'Số 12 Phố Huế','Hà Nội','Thanh Xuân','Việt Nam','46847'),(19,'23 Đường Biển','TP. Hồ Chí Minh','Quận 7','Việt Nam','46896'),(20,'Số 5 Đỉnh Núi','Đà Nẵng','Hòa Vang','Việt Nam','461476'),(21,'456 Đại Lộ Hòa Bình','Hải Phòng','An Dương','Việt Nam','4984135'),(22,'12 Ngõ Hoa Lư','Hà Nội','Hà Nội','Việt Nam','7250'),(23,'Số 8 Đường Đinh Bộ Lĩnh','TP. Hồ Chí Minh','Hồ Chí Minh','Việt Nam','12345'),(24,'Khu Vực Phía Tây','Đà Nẵng','Đà Nẵng','Việt Nam','123456'),(25,'789 Đường Biển Đông','Nha Trang','Khánh Hòa','Việt Nam','54321'),(26,'125 Đường Lê Lợi','Huế','Thừa Thiên Huế','Việt Nam','530000'),(27,'45 Đường Trần Phú','Đà Lạt','Lâm Đồng','Việt Nam','670000'),(28,'789 Đường Nguyễn Trãi','Cần Thơ','Cần Thơ','Việt Nam','900000'),(29,'234 Đường Nguyễn Huệ','Hội An','Quảng Nam','Việt Nam','510000'),(30,'12 Đường Hùng Vương','Hà Nội','Hà Nội','Việt Nam','987654'),(31,'78 Đường Nguyễn Huệ','TP. Hồ Chí Minh','TP. Hồ Chí Minh','Việt Nam','4961496'),(32,'45 Đường Phạm Văn Đồng','Đà Nẵng','Đà Nẵng','Việt Nam','49626'),(33,'89 Đường Cách Mạng Tháng 8','Cần Thơ','Cần Thơ','Việt Nam','98765');
/*!40000 ALTER TABLE `addresses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `bookings`
--

LOCK TABLES `bookings` WRITE;
/*!40000 ALTER TABLE `bookings` DISABLE KEYS */;
INSERT INTO `bookings` VALUES (21,'Phạm Minh',23,44,'2024-12-10 14:00:00','2024-12-12 12:00:00',2000000.00,'confirm','2024-12-06 10:48:56','2024-12-06 10:48:56'),(22,'Vũ Thị Linh',24,45,'2024-12-15 15:00:00','2024-12-18 11:00:00',3000000.00,'reject','2024-12-06 10:48:56','2024-12-06 10:48:56'),(26,'Nguyễn Văn Thắng',25,52,'2024-12-20 14:00:00','2024-12-22 12:00:00',1200000.00,'confirm','2024-12-06 10:54:40','2024-12-06 10:54:40'),(27,'Trần Thị Tú',26,53,'2024-12-18 15:00:00','2024-12-21 12:00:00',1800000.00,'confirm','2024-12-06 10:54:40','2024-12-06 10:54:40'),(28,'Lê Minh Cu',27,54,'2024-12-25 13:00:00','2024-12-28 11:00:00',2500000.00,'reject','2024-12-06 10:54:40','2024-12-06 10:54:40'),(33,'Trần Quốc Anh',23,45,'2024-12-22 14:00:00','2024-12-25 12:00:00',1500000.00,'confirm','2024-12-10 13:08:16','2024-12-10 13:08:16'),(34,'Nguyễn Thị Mai',24,46,'2024-12-18 15:00:00','2024-12-22 12:00:00',2500000.00,'confirm','2024-12-10 13:08:16','2024-12-10 13:08:16'),(35,'Hoàng Nhật Tân',25,47,'2024-12-24 14:00:00','2024-12-28 12:00:00',2000000.00,'reject','2024-12-10 13:08:16','2024-12-10 13:08:16'),(36,'Phạm Hữu Lộc',26,48,'2024-12-30 14:00:00','2025-01-03 12:00:00',3000000.00,'confirm','2024-12-10 13:08:16','2024-12-10 13:08:16'),(37,'Nguyễn Văn Hưng',30,64,'2024-12-15 14:00:00','2024-12-18 12:00:00',1000000.00,'confirm','2024-12-10 13:30:01','2024-12-10 13:30:01'),(38,'Lê Minh Tú',29,50,'2024-12-20 15:00:00','2024-12-23 11:00:00',3000000.00,'confirm','2024-12-10 13:30:01','2024-12-10 13:30:01'),(39,'Trần Thị Hạnh',26,59,'2024-12-25 14:00:00','2024-12-28 12:00:00',5000000.00,'reject','2024-12-10 13:30:01','2024-12-10 13:30:01'),(40,'Phạm Quang Khải',23,51,'2024-12-30 14:00:00','2025-01-02 12:00:00',4000000.00,'confirm','2024-12-10 13:30:01','2024-12-10 13:30:01'),(41,'Trần Văn Hải',29,45,'2024-12-20 12:00:00','2024-12-22 14:00:00',1500000.00,'confirm','2024-12-10 13:39:42','2024-12-10 13:39:42'),(42,'Lê Thị Hương',24,47,'2024-12-23 15:00:00','2024-12-26 11:00:00',2500000.00,'reject','2024-12-10 13:39:42','2024-12-10 13:39:42'),(43,'Nguyễn Văn Cường',24,52,'2024-12-25 10:00:00','2024-12-28 12:00:00',3500000.00,'confirm','2024-12-10 13:39:42','2024-12-10 13:39:42'),(44,'Phạm Thanh Thảo',36,65,'2024-12-29 14:00:00','2024-12-31 12:00:00',4000000.00,'confirm','2024-12-10 13:39:42','2024-12-10 13:39:42');
/*!40000 ALTER TABLE `bookings` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `employees`
--

LOCK TABLES `employees` WRITE;
/*!40000 ALTER TABLE `employees` DISABLE KEYS */;
INSERT INTO `employees` VALUES (9,'Nguyễn','An','nguyen.an@hotel.com','0123456789','Manager',23),(10,'Trần','Bình','tran.binh@resort.com','0987654321','Receptionist',24),(11,'Lê','Chí','le.chi@retreat.com','0345678901','Housekeeper',25),(12,'Nguyễn','Hà','ha.nguyen@hotel.com','0987456321','Manager',24),(13,'Phạm','Tuấn','tuan.pham@hotel.com','0948675432','Receptionist',25),(14,'Lê','Hùng','hung.le@hotel.com','0934678291','Housekeeper',26),(15,'Vũ','Trang','trang.vu@hotel.com','0923456789','Chef',27),(16,'Lê','Mỹ Linh','linh.le@hotel.com','0934567891','Manager',24),(17,'Trần','Đức Hoàng','hoang.tran@hotel.com','0912345687','Receptionist',25),(18,'Nguyễn','Thùy Dương','duong.nguyen@hotel.com','0923456712','Housekeeper',26),(19,'Vũ','Minh Khôi','khoi.vu@hotel.com','0901234567','Chef',23),(20,'Trần','Thị Hoa','hoa.tran@hotel.com','0912345876','Receptionist',23),(21,'Nguyễn','Hoài Nam','nam.nguyen@resort.com','0943567890','Manager',34),(22,'Phạm','Anh Tuấn','tuan.pham@hotel.com','0921234567','Chef',23),(23,'Võ','Hồng Ngọc','ngoc.vo@hotel.com','0909876543','Housekeeper',31),(24,'Hoàng','Thanh Bình','binh.hoang@hotel.com','0912345678','Receptionist',35),(25,'Lê','Minh Phương','phuong.le@resort.com','0943567891','Manager',36),(26,'Phạm','Quỳnh Như','nhu.pham@hotel.com','0921234568','Chef',37),(27,'Vũ','Hồng Lan','lan.vu@hotel.com','0909876544','Housekeeper',38);
/*!40000 ALTER TABLE `employees` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `hotels`
--

LOCK TABLES `hotels` WRITE;
/*!40000 ALTER TABLE `hotels` DISABLE KEYS */;
INSERT INTO `hotels` VALUES (23,'Khách Sạn Bình Minh','0546149834','binhminh@hotel.com',15,'Khách sạn sang trọng tại trung tâm Hà Nội'),(24,'Resort View Biển','0964849378','viewbien@resort.com',16,'Resort ven biển tại TP. Hồ Chí Minh'),(25,'Nghỉ Dưỡng Trên Núi','0498416877','trennui@retreat.com',17,'Khu nghỉ dưỡng yên bình trên núi ở Đà Nẵng'),(26,'Khách Sạn Biển Vàng','0394857634','bienvang@hotel.com',21,'Khách sạn tiện nghi ven biển tại Hải Phòng'),(27,'Khách Sạn Mặt Trời','0456123987','mattroi@hotel.com',20,'Khách sạn cao cấp trên núi với tầm nhìn tuyệt đẹp tại Đà Nẵng'),(28,'Khách Sạn Đỉnh Núi','0954837461','dinhnui@hotel.com',17,'Khách sạn cao cấp với cảnh quan tuyệt đẹp tại Đà Nẵng'),(29,'Resort Đại Dương','0987612345','daiduong@resort.com',18,'Resort tiện nghi bên bờ biển Nha Trang'),(30,'Khách Sạn Mùa Thu','0912345678','muathu@hotel.com',15,'Khách sạn nhỏ yên bình tại trung tâm Hà Nội'),(31,'Khách Sạn Thiên Đường','0976543210','thienduong@hotel.com',26,'Khách sạn cổ kính tại trung tâm thành phố Huế'),(32,'Resort Hòa Bình','0965432198','hoabinh@resort.com',27,'Khu nghỉ dưỡng sang trọng tại Đà Lạt'),(33,'Khách Sạn Cần Thơ','0938765432','cantho@hotel.com',28,'Khách sạn tiện nghi ở trung tâm thành phố Cần Thơ'),(34,'Khách Sạn Hội An','0925678432','hoian@hotel.com',29,'Khách sạn gần biển ở Hội An'),(35,'Khách Sạn Ánh Dương','0976543211','anhduong@hotel.com',30,'Khách sạn cao cấp tại trung tâm Hà Nội'),(36,'Resort Bình Yên','0965432199','binhyen@resort.com',31,'Khu nghỉ dưỡng yên bình tại TP. Hồ Chí Minh'),(37,'Khách Sạn Biển Xanh','0938765433','bienxanh@hotel.com',32,'Khách sạn gần biển tại Đà Nẵng'),(38,'Khách Sạn Thành Phố Mới','0925678433','thanhphomoi@hotel.com',33,'Khách sạn mới xây dựng tại trung tâm Cần Thơ');
/*!40000 ALTER TABLE `hotels` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `payment`
--

LOCK TABLES `payment` WRITE;
/*!40000 ALTER TABLE `payment` DISABLE KEYS */;
INSERT INTO `payment` VALUES (7,21,'2024-12-11 10:00:00',2000000.00,'Completed','Cash','2024-12-06 10:49:40','2024-12-06 10:49:40'),(8,22,'2024-12-16 09:00:00',1500000.00,'Pending','Cash','2024-12-06 10:49:40','2024-12-06 10:49:40'),(9,26,'2024-12-23 15:00:00',1500000.00,'Completed','Cash','2024-12-10 13:10:20','2024-12-10 13:10:20'),(10,27,'2024-12-20 16:00:00',2500000.00,'Completed','Cash','2024-12-10 13:10:20','2024-12-10 13:10:20'),(11,28,'2024-12-27 12:00:00',2000000.00,'Pending','Cash','2024-12-10 13:10:20','2024-12-10 13:10:20'),(12,21,'2025-01-01 10:00:00',3000000.00,'Completed','Cash','2024-12-10 13:10:20','2024-12-10 13:10:20'),(13,21,'2024-12-16 15:00:00',1000000.00,'Completed','Cash','2024-12-10 13:33:43','2024-12-10 13:33:43'),(14,37,'2024-12-21 16:00:00',3000000.00,'Completed','Cash','2024-12-10 13:33:43','2024-12-10 13:33:43'),(15,22,'2024-12-26 12:00:00',5000000.00,'Cancelled','Cash','2024-12-10 13:33:43','2024-12-10 13:33:43'),(16,26,'2024-12-31 10:00:00',4000000.00,'Pending','Cash','2024-12-10 13:33:43','2024-12-10 13:33:43'),(17,41,'2024-12-21 15:00:00',1500000.00,'Completed','Cash','2024-12-10 13:41:07','2024-12-10 13:41:07'),(18,42,'2024-12-24 16:00:00',2500000.00,'Cancelled','Cash','2024-12-10 13:41:07','2024-12-10 13:41:07'),(19,43,'2024-12-26 12:00:00',3500000.00,'Completed','Cash','2024-12-10 13:41:07','2024-12-10 13:41:07'),(20,44,'2024-12-30 10:00:00',4000000.00,'Pending','Cash','2024-12-10 13:41:07','2024-12-10 13:41:07');
/*!40000 ALTER TABLE `payment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `rooms`
--

LOCK TABLES `rooms` WRITE;
/*!40000 ALTER TABLE `rooms` DISABLE KEYS */;
INSERT INTO `rooms` VALUES (44,23,101,'Single',1,'https://images.pexels.com/photos/29668197/pexels-photo-29668197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1','Available'),(45,23,102,'Double',2,'https://acihome.vn/uploads/15/mau-thiet-ke-noi-that-phong-2-giuong-don-ben-trong-khach-san-3-4-5-sao-2.JPG','Booked'),(46,24,201,'Suite',4,'https://ezcloud.vn/wp-content/uploads/2018/05/phong-suite-la-gi.webp','Available'),(47,24,202,'Family',5,'https://vuongquocnoithat.vn/images/2020/12/26/nhung-luu-y-chung-khi-treo-anh-gia-dinh-o-phong-khach.jpg','Maintenance'),(48,25,301,'Luxury',2,'https://sbsvilla.vn/wp-content/uploads/Phong-khach-biet-thu-Luxury-03-1.jpg','Available'),(49,24,101,'Single',1,'https://images.pexels.com/photos/29696164/pexels-photo-29696164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1','Available'),(50,24,102,'Double',2,'https://kientrucnamcuong.com/upload/image/images/thiet-ke-phong-khach-san-11.jpg','Booked'),(51,25,201,'Family',4,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsKNUXZP0IaIuMqidE09F9vQjq_mGWQu49Wg&s','Available'),(52,25,202,'Suite',2,'https://aeros.vn/upload/images/aeros-phong-suite-la-gi-3.webp','Available'),(53,26,301,'Luxury',2,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ3LHozzHo8sb0Npop0siDWmaLvh0mIV46Lg&s','Booked'),(54,27,401,'Single',1,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1MABibwRg1-QTQ2mq1Z36129YIkfEWaDXJw&s','Maintenance'),(55,23,103,'Single',2,'https://khachsanhoangoanh.com/public/userfiles/products/phong-don-vip-5.jpg','Available'),(56,24,203,'Luxury',4,'https://noithatmienbac.vn/wp-content/uploads/2023/12/phong-vip-nha-hang.jpg','Booked'),(57,25,302,'Suite',3,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE24InNpuWPmVrDhdzw0sSusoYrEPWOtF4Kw&s','Available'),(58,26,402,'Family',6,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7lT9EYbFuc1qby6mFVcTj3p56gWuGZA4_zw&s','Available'),(59,26,403,'Luxury',2,'https://acihome.vn/uploads/15/mau-thiet-ke-noi-that-buong-vip-khach-san-co-1-ngu-1-khach-tinh-te-sang-trong-2.JPG','Maintenance'),(60,30,402,'Single',1,'https://benhvienphuongdong.vn/public/uploads/thu-vien-anh/khong-gian-benh-vien/phong-noi-tru/phong-noi-tru-1.jpg','Available'),(61,23,502,'Double',2,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1MABibwRg1-QTQ2mq1Z36129YIkfEWaDXJw&s','Booked'),(62,27,601,'Family',5,'https://villaflc.vn/wp-content/uploads/2020/01/family-suite.jpg','Available'),(63,29,602,'Suite',3,'https://www.cet.edu.vn/wp-content/uploads/2018/01/phong-executive-stuido-suite-la-gi.jpg','Available'),(64,23,701,'Luxury',2,'https://vanangroup.com.vn/wp-content/uploads/2024/05/Trang-thiet-bi-tien-nghi.jpg','Booked'),(65,32,801,'Double',2,'https://media-cdn.tripadvisor.com/media/photo-s/0c/81/60/95/phong-conneting-47m2.jpg','Available'),(66,24,802,'Double',4,'https://vanangroup.com.vn/wp-content/uploads/2024/05/Thiet-ke-noi-that-phong-ngu-doi-2.jpg','Maintenance'),(67,24,901,'Single',1,'https://huyhoanhotel.com/wp-content/uploads/2017/05/phong-1-giuong-don.jpg','Available'),(68,31,902,'Suite',3,'https://media-cdn.tripadvisor.com/media/photo-s/1a/1b/60/5e/phong-suite-v-i-khong.jpg','Booked'),(69,31,1001,'Luxury',4,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsiNYKQDQO1heDeZYRVjK3OpSrwkApKdaNcQ&s','Available'),(70,37,1002,'Family',5,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbp6ks7N1XVtLLwFGD-8mDYy6CW773YTtNXA&s','Booked'),(71,24,1101,'Double',2,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ0hPDmy8Gb4uL6aYTqDPIwqUokfxnMd2QUQ&s','Maintenance'),(72,32,1201,'Single',4,'https://acihome.vn/uploads/15/mau-thiet-ke-noi-that-phong-2-giuong-don-ben-trong-khach-san-3-4-5-sao-4.jpg','Available'),(73,33,1202,'Single',1,'https://benhvienphuongdong.vn/public/uploads/thu-vien-anh/khong-gian-benh-vien/phong-noi-tru/phong-noi-tru-5.jpg','Booked');
/*!40000 ALTER TABLE `rooms` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `services`
--

LOCK TABLES `services` WRITE;
/*!40000 ALTER TABLE `services` DISABLE KEYS */;
INSERT INTO `services` VALUES (8,23,'Spa',500000.00,NULL),(9,23,'Đón từ sân bay',200000.00,NULL),(10,24,'Buffet sáng',150000.00,NULL),(11,25,'Tour leo núi',300000.00,NULL),(12,23,'Dịch vụ spa',300000.00,NULL),(13,24,'Thuê xe máy',150000.00,NULL),(14,25,'Phòng karaoke',500000.00,NULL),(15,26,'Tour hướng dẫn viên',200000.00,NULL),(16,26,'Dịch vụ xe đưa đón',500000.00,NULL),(17,25,'Hồ bơi',100000.00,NULL),(18,28,'Phòng gym',200000.00,NULL),(19,34,'Tour tham quan Hội An',300000.00,NULL),(20,35,'Dịch vụ giặt ủi',200000.00,NULL),(21,36,'Dịch vụ spa',400000.00,NULL),(22,37,'Tham quan du lịch',500000.00,NULL),(23,38,'Phòng họp hội nghị',700000.00,NULL);
/*!40000 ALTER TABLE `services` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-12-10 20:46:53
