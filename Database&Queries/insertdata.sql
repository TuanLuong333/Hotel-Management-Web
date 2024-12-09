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
INSERT INTO `addresses` VALUES (15,'52 Trần Bình','Hà Nội','Cầu Giấy','Việt Nam','75389'),(16,'462 Nguyễn Quang Sứ','Hồ Chí Minh','Quận 1','Việt Nam','6541'),(17,'934 Lê Duẩn','Đà Nẵng','Liên Chiểu','Việt Nam','463'),(18,'Số 12 Phố Huế','Hà Nội','Thanh Xuân','Việt Nam','46847'),(19,'23 Đường Biển','TP. Hồ Chí Minh','Quận 7','Việt Nam','46896'),(20,'Số 5 Đỉnh Núi','Đà Nẵng','Hòa Vang','Việt Nam','461476'),(21,'456 Đại Lộ Hòa Bình','Hải Phòng','An Dương','Việt Nam','4984135');
/*!40000 ALTER TABLE `addresses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `bookings`
--

LOCK TABLES `bookings` WRITE;
/*!40000 ALTER TABLE `bookings` DISABLE KEYS */;
INSERT INTO `bookings` VALUES (21,'Phạm Minh',23,44,'2024-12-10 14:00:00','2024-12-12 12:00:00',2000000.00,'confirm','2024-12-06 10:48:56','2024-12-06 10:48:56'),(22,'Vũ Thị Linh',24,45,'2024-12-15 15:00:00','2024-12-18 11:00:00',3000000.00,'reject','2024-12-06 10:48:56','2024-12-06 10:48:56'),(26,'Nguyễn Văn Thắng',25,52,'2024-12-20 14:00:00','2024-12-22 12:00:00',1200000.00,'confirm','2024-12-06 10:54:40','2024-12-06 10:54:40'),(27,'Trần Thị Tú',26,53,'2024-12-18 15:00:00','2024-12-21 12:00:00',1800000.00,'confirm','2024-12-06 10:54:40','2024-12-06 10:54:40'),(28,'Lê Minh Cu',27,54,'2024-12-25 13:00:00','2024-12-28 11:00:00',2500000.00,'reject','2024-12-06 10:54:40','2024-12-06 10:54:40');
/*!40000 ALTER TABLE `bookings` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `employees`
--

LOCK TABLES `employees` WRITE;
/*!40000 ALTER TABLE `employees` DISABLE KEYS */;
INSERT INTO `employees` VALUES (9,'Nguyễn','An','nguyen.an@hotel.com','0123456789','Manager',23),(10,'Trần','Bình','tran.binh@resort.com','0987654321','Receptionist',24),(11,'Lê','Chí','le.chi@retreat.com','0345678901','Housekeeper',25),(12,'Nguyễn','Hà','ha.nguyen@hotel.com','0987456321','Manager',24),(13,'Phạm','Tuấn','tuan.pham@hotel.com','0948675432','Receptionist',25),(14,'Lê','Hùng','hung.le@hotel.com','0934678291','Housekeeper',26),(15,'Vũ','Trang','trang.vu@hotel.com','0923456789','Chef',27);
/*!40000 ALTER TABLE `employees` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `hotels`
--

LOCK TABLES `hotels` WRITE;
/*!40000 ALTER TABLE `hotels` DISABLE KEYS */;
INSERT INTO `hotels` VALUES (23,'Khách Sạn Bình Minh','0546149834','binhminh@hotel.com',15,'Khách sạn sang trọng tại trung tâm Hà Nội'),(24,'Resort View Biển','0964849378','viewbien@resort.com',16,'Resort ven biển tại TP. Hồ Chí Minh'),(25,'Nghỉ Dưỡng Trên Núi','0498416877','trennui@retreat.com',17,'Khu nghỉ dưỡng yên bình trên núi ở Đà Nẵng'),(26,'Khách Sạn Biển Vàng','0394857634','bienvang@hotel.com',21,'Khách sạn tiện nghi ven biển tại Hải Phòng'),(27,'Khách Sạn Mặt Trời','0456123987','mattroi@hotel.com',20,'Khách sạn cao cấp trên núi với tầm nhìn tuyệt đẹp tại Đà Nẵng');
/*!40000 ALTER TABLE `hotels` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `payment`
--

LOCK TABLES `payment` WRITE;
/*!40000 ALTER TABLE `payment` DISABLE KEYS */;
INSERT INTO `payment` VALUES (7,21,'2024-12-11 10:00:00',2000000.00,'Completed','Cash','2024-12-06 10:49:40','2024-12-06 10:49:40'),(8,22,'2024-12-16 09:00:00',1500000.00,'Pending','Cash','2024-12-06 10:49:40','2024-12-06 10:49:40');
/*!40000 ALTER TABLE `payment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `rooms`
--

LOCK TABLES `rooms` WRITE;
/*!40000 ALTER TABLE `rooms` DISABLE KEYS */;
INSERT INTO `rooms` VALUES (44,23,101,'Single',1,'https://images.pexels.com/photos/29668197/pexels-photo-29668197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1','Available'),(45,23,102,'Double',2,'https://acihome.vn/uploads/15/mau-thiet-ke-noi-that-phong-2-giuong-don-ben-trong-khach-san-3-4-5-sao-2.JPG','Booked'),(46,24,201,'Suite',4,'https://ezcloud.vn/wp-content/uploads/2018/05/phong-suite-la-gi.webp','Available'),(47,24,202,'Family',5,'https://vuongquocnoithat.vn/images/2020/12/26/nhung-luu-y-chung-khi-treo-anh-gia-dinh-o-phong-khach.jpg','Maintenance'),(48,25,301,'Luxury',2,'https://sbsvilla.vn/wp-content/uploads/Phong-khach-biet-thu-Luxury-03-1.jpg','Available'),(49,24,101,'Single',1,'https://images.pexels.com/photos/29696164/pexels-photo-29696164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1','Available'),(50,24,102,'Double',2,'https://kientrucnamcuong.com/upload/image/images/thiet-ke-phong-khach-san-11.jpg','Booked'),(51,25,201,'Family',4,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsKNUXZP0IaIuMqidE09F9vQjq_mGWQu49Wg&s','Available'),(52,25,202,'Suite',2,'https://aeros.vn/upload/images/aeros-phong-suite-la-gi-3.webp','Available'),(53,26,301,'Luxury',2,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ3LHozzHo8sb0Npop0siDWmaLvh0mIV46Lg&s','Booked'),(54,27,401,'Single',1,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1MABibwRg1-QTQ2mq1Z36129YIkfEWaDXJw&s','Maintenance');
/*!40000 ALTER TABLE `rooms` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `services`
--

LOCK TABLES `services` WRITE;
/*!40000 ALTER TABLE `services` DISABLE KEYS */;
INSERT INTO `services` VALUES (8,23,'Spa',500000.00,NULL),(9,23,'Đón từ sân bay',200000.00,NULL),(10,24,'Buffet sáng',150000.00,NULL),(11,25,'Tour leo núi',300000.00,NULL);
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

-- Dump completed on 2024-12-09 20:51:19
