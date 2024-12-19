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
INSERT INTO `addresses` VALUES (15,'52 Trần Bình','Hà Nội','Cầu Giấy','Việt Nam','75389'),(16,'462 Nguyễn Quang Sứ','Hồ Chí Minh','Quận 1','Việt Nam','6541'),(17,'934 Lê Duẩn','Đà Nẵng','Liên Chiểu','Việt Nam','463'),(18,'Số 12 Phố Huế','Hà Nội','Thanh Xuân','Việt Nam','46847'),(19,'23 Đường Biển','TP. Hồ Chí Minh','Quận 7','Việt Nam','46896'),(20,'Số 5 Đỉnh Núi','Đà Nẵng','Hòa Vang','Việt Nam','461476'),(21,'456 Đại Lộ Hòa Bình','Hải Phòng','An Dương','Việt Nam','4984135'),(22,'12 Ngõ Hoa Lư','Hà Nội','Hà Nội','Việt Nam','7250'),(23,'Số 8 Đường Đinh Bộ Lĩnh','TP. Hồ Chí Minh','Hồ Chí Minh','Việt Nam','12345'),(24,'Khu Vực Phía Tây','Đà Nẵng','Đà Nẵng','Việt Nam','123456'),(25,'789 Đường Biển Đông','Nha Trang','Khánh Hòa','Việt Nam','54321'),(26,'125 Đường Lê Lợi','Huế','Thừa Thiên Huế','Việt Nam','530000'),(27,'45 Đường Trần Phú','Đà Lạt','Lâm Đồng','Việt Nam','670000'),(28,'789 Đường Nguyễn Trãi','Cần Thơ','Cần Thơ','Việt Nam','900000'),(29,'234 Đường Nguyễn Huệ','Hội An','Quảng Nam','Việt Nam','510000'),(30,'12 Đường Hùng Vương','Hà Nội','Hà Nội','Việt Nam','987654'),(31,'78 Đường Nguyễn Huệ','TP. Hồ Chí Minh','TP. Hồ Chí Minh','Việt Nam','4961496'),(32,'45 Đường Phạm Văn Đồng','Đà Nẵng','Đà Nẵng','Việt Nam','49626'),(33,'89 Đường Cách Mạng Tháng 8','Cần Thơ','Cần Thơ','Việt Nam','98765'),(34,'56 Đường Hoàng Diệu','Hà Nội','Hà Nội','Việt Nam','100001'),(35,'23 Đường Trần Hưng Đạo','TP. Hồ Chí Minh','TP. Hồ Chí Minh','Việt Nam','700001'),(36,'67 Đường Nguyễn Thị Minh Khai','Đà Nẵng','Đà Nẵng','Việt Nam','550001'),(37,'45 Đường Lê Lợi','Cần Thơ','Cần Thơ','Việt Nam','900001'),(38,'123 Phố Minh Khai','Hà Nội','Hà Nội','Việt Nam','100000'),(39,'456 Nguyễn Văn Linh','TP. Hồ Chí Minh','Hồ Chí Minh','Việt Nam','700000'),(40,'789 Đường Sơn Trà','Đà Nẵng','Đà Nẵng','Việt Nam','550000'),(41,'12 Shibuya','Tokyo','Tokyo','Nhật Bản','1500001'),(42,'34 Kyoto Street','Kyoto','Kyoto','Nhật Bản','600000'),(43,'567 Times Square','New York','New York','Hoa Kỳ','10036'),(44,'89 Hollywood Blvd','Los Angeles','California','Hoa Kỳ','90028'),(45,'23 Champs Elysees','Paris','Ile-de-France','Pháp','75008'),(46,'45 Rue Lyon','Lyon','Auvergne-Rhône-Alpes','Pháp','69001'),(47,'12 Nguyen Trai','Hà Nội','Hà Nội','Việt Nam','100001'),(48,'34 Le Loi','Huế','Thừa Thiên-Huế','Việt Nam','530000'),(49,'98 Vo Nguyen Giap','Đà Nẵng','Đà Nẵng','Việt Nam','550001'),(50,'56 Orchard Road','Singapore','Central','Singapore','238883'),(51,'789 Nathan Road','Hong Kong','Kowloon','Hong Kong','999077'),(52,'10 Downing Street','London','England','Vương Quốc Anh','SW1A 2AA'),(53,'1600 Pennsylvania Ave','Washington','DC','Hoa Kỳ','20500'),(54,'345 Queen Street','Toronto','Ontario','Canada','M5V 2W6'),(55,'67 Sydney Harbour','Sydney','New South Wales','Úc','2000');
/*!40000 ALTER TABLE `addresses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `bookings`
--

LOCK TABLES `bookings` WRITE;
/*!40000 ALTER TABLE `bookings` DISABLE KEYS */;
INSERT INTO `bookings` VALUES (21,'Phạm Minh',23,44,'2024-12-10 14:00:00','2024-12-12 12:00:00',2000000.00,'confirm','2024-12-06 10:48:56','2024-12-06 10:48:56'),(22,'Vũ Thị Linh',24,45,'2024-12-15 15:00:00','2024-12-18 11:00:00',3000000.00,'reject','2024-12-06 10:48:56','2024-12-06 10:48:56'),(26,'Nguyễn Văn Thắng',25,52,'2024-12-20 14:00:00','2024-12-22 12:00:00',1200000.00,'confirm','2024-12-06 10:54:40','2024-12-06 10:54:40'),(27,'Trần Thị Tú',26,53,'2024-12-18 15:00:00','2024-12-21 12:00:00',1800000.00,'confirm','2024-12-06 10:54:40','2024-12-06 10:54:40'),(28,'Lê Minh Cu',27,54,'2024-12-25 13:00:00','2024-12-28 11:00:00',2500000.00,'reject','2024-12-06 10:54:40','2024-12-06 10:54:40'),(33,'Trần Quốc Anh',23,45,'2024-12-22 14:00:00','2024-12-25 12:00:00',1500000.00,'confirm','2024-12-10 13:08:16','2024-12-10 13:08:16'),(34,'Nguyễn Thị Mai',24,46,'2024-12-18 15:00:00','2024-12-22 12:00:00',2500000.00,'confirm','2024-12-10 13:08:16','2024-12-10 13:08:16'),(35,'Hoàng Nhật Tân',25,47,'2024-12-24 14:00:00','2024-12-28 12:00:00',2000000.00,'reject','2024-12-10 13:08:16','2024-12-10 13:08:16'),(36,'Phạm Hữu Lộc',26,48,'2024-12-30 14:00:00','2025-01-03 12:00:00',3000000.00,'confirm','2024-12-10 13:08:16','2024-12-10 13:08:16'),(37,'Nguyễn Văn Hưng',30,64,'2024-12-15 14:00:00','2024-12-18 12:00:00',1000000.00,'confirm','2024-12-10 13:30:01','2024-12-10 13:30:01'),(38,'Lê Minh Tú',29,50,'2024-12-20 15:00:00','2024-12-23 11:00:00',3000000.00,'confirm','2024-12-10 13:30:01','2024-12-10 13:30:01'),(39,'Trần Thị Hạnh',26,59,'2024-12-25 14:00:00','2024-12-28 12:00:00',5000000.00,'reject','2024-12-10 13:30:01','2024-12-10 13:30:01'),(40,'Phạm Quang Khải',23,51,'2024-12-30 14:00:00','2025-01-02 12:00:00',4000000.00,'confirm','2024-12-10 13:30:01','2024-12-10 13:30:01'),(41,'Trần Văn Hải',29,45,'2024-12-20 12:00:00','2024-12-22 14:00:00',1500000.00,'confirm','2024-12-10 13:39:42','2024-12-10 13:39:42'),(42,'Lê Thị Hương',24,47,'2024-12-23 15:00:00','2024-12-26 11:00:00',2500000.00,'reject','2024-12-10 13:39:42','2024-12-10 13:39:42'),(43,'Nguyễn Văn Cường',24,52,'2024-12-25 10:00:00','2024-12-28 12:00:00',3500000.00,'confirm','2024-12-10 13:39:42','2024-12-10 13:39:42'),(44,'Phạm Thanh Thảo',36,65,'2024-12-29 14:00:00','2024-12-31 12:00:00',4000000.00,'confirm','2024-12-10 13:39:42','2024-12-10 13:39:42'),(45,'Nguyễn Hải Yến',39,71,'2024-12-20 14:00:00','2024-12-22 12:00:00',2500000.00,'confirm','2024-12-19 16:08:50','2024-12-19 16:08:50'),(46,'Phạm Văn Quân',39,72,'2024-12-21 15:00:00','2024-12-23 12:00:00',3000000.00,'confirm','2024-12-19 16:08:50','2024-12-19 16:08:50'),(47,'Trần Quốc Bảo',40,72,'2024-12-25 12:00:00','2024-12-28 11:00:00',4500000.00,'confirm','2024-12-19 16:08:50','2024-12-19 16:08:50'),(48,'Lê Hồng Nhung',42,73,'2024-12-27 14:00:00','2024-12-30 12:00:00',4000000.00,'reject','2024-12-19 16:08:50','2024-12-19 16:08:50'),(53,'Nguyễn Văn An',43,105,'2024-12-20 14:00:00','2024-12-22 12:00:00',2000000.00,'confirm','2024-12-19 16:17:35','2024-12-19 16:17:35'),(54,'Trần Thị Hoa',44,106,'2024-12-25 15:00:00','2024-12-28 11:00:00',3000000.00,'reject','2024-12-19 16:17:35','2024-12-19 16:17:35'),(55,'Akira Suzuki',46,107,'2024-12-18 13:00:00','2024-12-20 12:00:00',5000000.00,'confirm','2024-12-19 16:17:35','2024-12-19 16:17:35'),(56,'Jane Smith',48,109,'2024-12-30 16:00:00','2025-01-02 11:00:00',6000000.00,'confirm','2024-12-19 16:17:35','2024-12-19 16:17:35'),(57,'An Tran',54,113,'2024-12-20 14:00:00','2024-12-22 12:00:00',1500000.00,'confirm','2024-12-19 16:22:44','2024-12-19 16:22:44'),(58,'Linh Vu',55,114,'2024-12-25 15:00:00','2024-12-28 11:00:00',2500000.00,'confirm','2024-12-19 16:22:44','2024-12-19 16:22:44'),(59,'Chris Wang',57,116,'2024-12-18 13:00:00','2024-12-20 12:00:00',5000000.00,'reject','2024-12-19 16:22:44','2024-12-19 16:22:44'),(60,'Emily White',60,119,'2024-12-30 16:00:00','2025-01-02 11:00:00',6000000.00,'confirm','2024-12-19 16:22:44','2024-12-19 16:22:44');
/*!40000 ALTER TABLE `bookings` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `employees`
--

LOCK TABLES `employees` WRITE;
/*!40000 ALTER TABLE `employees` DISABLE KEYS */;
INSERT INTO `employees` VALUES (9,'Nguyễn','An','nguyen.an@hotel.com','0123456789','Manager',23),(10,'Trần','Bình','tran.binh@resort.com','0987654321','Receptionist',24),(11,'Lê','Chí','le.chi@retreat.com','0345678901','Housekeeper',25),(12,'Nguyễn','Hà','ha.nguyen@hotel.com','0987456321','Manager',24),(13,'Phạm','Tuấn','tuan.pham@hotel.com','0948675432','Receptionist',25),(14,'Lê','Hùng','hung.le@hotel.com','0934678291','Housekeeper',26),(15,'Vũ','Trang','trang.vu@hotel.com','0923456789','Chef',27),(16,'Lê','Mỹ Linh','linh.le@hotel.com','0934567891','Manager',24),(17,'Trần','Đức Hoàng','hoang.tran@hotel.com','0912345687','Receptionist',25),(18,'Nguyễn','Thùy Dương','duong.nguyen@hotel.com','0923456712','Housekeeper',26),(19,'Vũ','Minh Khôi','khoi.vu@hotel.com','0901234567','Chef',23),(20,'Trần','Thị Hoa','hoa.tran@hotel.com','0912345876','Receptionist',23),(21,'Nguyễn','Hoài Nam','nam.nguyen@resort.com','0943567890','Manager',34),(22,'Phạm','Anh Tuấn','tuan.pham@hotel.com','0921234567','Chef',23),(23,'Võ','Hồng Ngọc','ngoc.vo@hotel.com','0909876543','Housekeeper',31),(24,'Hoàng','Thanh Bình','binh.hoang@hotel.com','0912345678','Receptionist',35),(25,'Lê','Minh Phương','phuong.le@resort.com','0943567891','Manager',36),(26,'Phạm','Quỳnh Như','nhu.pham@hotel.com','0921234568','Chef',37),(27,'Vũ','Hồng Lan','lan.vu@hotel.com','0909876544','Housekeeper',38),(28,'Đỗ','Hải Nam','nam.do@hotel.com','0923456781','Receptionist',39),(29,'Nguyễn','Thanh Tùng','tung.nguyen@resort.com','0919876543','Chef',40),(30,'Trần','Minh Hà','ha.tran@hotel.com','0934567890','Manager',41),(31,'Phạm','Văn Lợi','loi.pham@resort.com','0945678901','Housekeeper',42),(32,'Minh','Phạm','minhpham@hotel.com','0987654321','Manager',44),(33,'Linh','Vũ','linhvu@hotel.com','0988888888','Receptionist',45),(34,'Takashi','Ito','takashi@hotel.jp','8181818181','Chef',46),(35,'Yuki','Tanaka','yuki@hotel.jp','8282828282','Manager',47),(36,'John','Doe','johndoe@hotel.us','1212121212','Maintenance',48),(37,'Emily','Smith','emily@hotel.us','3233233233','Receptionist',49),(38,'Pierre','Dupont','pierre@hotel.fr','3313313313','Manager',50),(39,'Claire','Fontaine','claire@hotel.fr','3343343344','Housekeeper',51),(48,'Hoa','Nguyen','hoanguyen@hotel.com','0911122233','Manager',53),(49,'Thinh','Le','thinhle@hotel.com','0922233344','Receptionist',54),(50,'Huy','Tran','huytran@hotel.com','0933344455','Chef',55),(51,'Liang','Chow','liangchow@hotel.hk','8529876543','Manager',56),(52,'Alice','Johnson','alicejohnson@hotel.uk','442071234999','Housekeeper',57),(53,'George','Brown','georgebrown@hotel.us','12025550999','Receptionist',58),(54,'Amelia','Clark','ameliac@hotel.ca','14161234567','Manager',59),(55,'Ethan','Smith','ethansmith@hotel.au','61212349876','Maintenance',60);
/*!40000 ALTER TABLE `employees` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `hotels`
--

LOCK TABLES `hotels` WRITE;
/*!40000 ALTER TABLE `hotels` DISABLE KEYS */;
INSERT INTO `hotels` VALUES (23,'Khách Sạn Bình Minh','0546149834','binhminh@hotel.com',15,'Khách sạn sang trọng tại trung tâm Hà Nội'),(24,'Resort View Biển','0964849378','viewbien@resort.com',16,'Resort ven biển tại TP. Hồ Chí Minh'),(25,'Nghỉ Dưỡng Trên Núi','0498416877','trennui@retreat.com',17,'Khu nghỉ dưỡng yên bình trên núi ở Đà Nẵng'),(26,'Khách Sạn Biển Vàng','0394857634','bienvang@hotel.com',21,'Khách sạn tiện nghi ven biển tại Hải Phòng'),(27,'Khách Sạn Mặt Trời','0456123987','mattroi@hotel.com',20,'Khách sạn cao cấp trên núi với tầm nhìn tuyệt đẹp tại Đà Nẵng'),(28,'Khách Sạn Đỉnh Núi','0954837461','dinhnui@hotel.com',17,'Khách sạn cao cấp với cảnh quan tuyệt đẹp tại Đà Nẵng'),(29,'Resort Đại Dương','0987612345','daiduong@resort.com',18,'Resort tiện nghi bên bờ biển Nha Trang'),(30,'Khách Sạn Mùa Thu','0912345678','muathu@hotel.com',15,'Khách sạn nhỏ yên bình tại trung tâm Hà Nội'),(31,'Khách Sạn Thiên Đường','0976543210','thienduong@hotel.com',26,'Khách sạn cổ kính tại trung tâm thành phố Huế'),(32,'Resort Hòa Bình','0965432198','hoabinh@resort.com',27,'Khu nghỉ dưỡng sang trọng tại Đà Lạt'),(33,'Khách Sạn Cần Thơ','0938765432','cantho@hotel.com',28,'Khách sạn tiện nghi ở trung tâm thành phố Cần Thơ'),(34,'Khách Sạn Hội An','0925678432','hoian@hotel.com',29,'Khách sạn gần biển ở Hội An'),(35,'Khách Sạn Ánh Dương','0976543211','anhduong@hotel.com',30,'Khách sạn cao cấp tại trung tâm Hà Nội'),(36,'Resort Bình Yên','0965432199','binhyen@resort.com',31,'Khu nghỉ dưỡng yên bình tại TP. Hồ Chí Minh'),(37,'Khách Sạn Biển Xanh','0938765433','bienxanh@hotel.com',32,'Khách sạn gần biển tại Đà Nẵng'),(38,'Khách Sạn Thành Phố Mới','0925678433','thanhphomoi@hotel.com',33,'Khách sạn mới xây dựng tại trung tâm Cần Thơ'),(39,'Khách Sạn Hòa Bình','0912345679','hoabinh@hotel.com',34,'Khách sạn gần hồ tại Hà Nội'),(40,'Resort Nam Sài Gòn','0936543210','namsaigon@resort.com',35,'Resort nghỉ dưỡng sang trọng ở phía Nam Sài Gòn'),(41,'Khách Sạn Mặt Trời','0978412376','mattroi@hotel.com',36,'Khách sạn với kiến trúc hiện đại tại Đà Nẵng'),(42,'Resort Miền Tây','0954627812','mientay@resort.com',37,'Resort ven sông tại Cần Thơ'),(43,'Khách Sạn Bình Minh','0546149834','binhminh@hotel.com',38,'Khách sạn sang trọng tại trung tâm Hà Nội'),(44,'Resort View Biển','0964849378','viewbien@resort.com',39,'Resort ven biển tại TP. Hồ Chí Minh'),(45,'Nghỉ Dưỡng Trên Núi','0498416877','trennui@retreat.com',40,'Khu nghỉ dưỡng yên bình trên núi ở Đà Nẵng'),(46,'Tokyo Grand Hotel','8184849394','tokyogrand@hotel.jp',41,'Khách sạn sang trọng tại Tokyo, Nhật Bản'),(47,'Kyoto Tranquility','9193847748','kyototranq@hotel.jp',42,'Khu nghỉ dưỡng tại Kyoto, Nhật Bản'),(48,'New York Central','1212121212','nycentral@hotel.us',43,'Khách sạn hiện đại tại New York, Mỹ'),(49,'Hollywood Paradise','3233233233','hollywood@hotel.us',44,'Khách sạn cao cấp tại Los Angeles, Mỹ'),(50,'Paris Elegance','3313313313','pariselegance@hotel.fr',45,'Khách sạn cổ điển tại Paris, Pháp'),(51,'Lyon Serenity','3343343344','lyonserenity@hotel.fr',46,'Khách sạn nghỉ dưỡng tại Lyon, Pháp'),(52,'Sunrise Hotel','0912345678','sunrise@hotel.com',47,'Khách sạn tầm trung tại trung tâm Hà Nội'),(53,'Imperial Resort','0934567890','imperial@resort.com',48,'Resort 5 sao tại Huế'),(54,'Ocean Blue Hotel','0945678901','oceanblue@hotel.com',49,'Khách sạn ven biển tại Đà Nẵng'),(55,'Singapore City Inn','6567889898','cityinn@hotel.sg',50,'Khách sạn hiện đại tại trung tâm Singapore'),(56,'Harbour View','8521234567','harbourview@hotel.hk',51,'Khách sạn với tầm nhìn cảng biển Hong Kong'),(57,'London Palace','442071234567','londonpalace@hotel.uk',52,'Khách sạn cổ điển tại trung tâm London'),(58,'Capitol Suites','12025550123','capitolsuites@hotel.us',53,'Khách sạn sang trọng tại Washington, D.C.'),(59,'Toronto Skyline','14162345678','torontoskyline@hotel.ca',54,'Khách sạn với tầm nhìn đẹp tại Toronto'),(60,'Sydney Opera Stay','61234567890','operastay@hotel.au',55,'Khách sạn gần nhà hát Sydney Opera House');
/*!40000 ALTER TABLE `hotels` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `payment`
--

LOCK TABLES `payment` WRITE;
/*!40000 ALTER TABLE `payment` DISABLE KEYS */;
INSERT INTO `payment` VALUES (7,21,'2024-12-11 10:00:00',2000000.00,'Completed','Cash','2024-12-06 10:49:40','2024-12-06 10:49:40'),(8,22,'2024-12-16 09:00:00',1500000.00,'Pending','Cash','2024-12-06 10:49:40','2024-12-06 10:49:40'),(9,26,'2024-12-23 15:00:00',1500000.00,'Completed','Cash','2024-12-10 13:10:20','2024-12-10 13:10:20'),(10,27,'2024-12-20 16:00:00',2500000.00,'Completed','Cash','2024-12-10 13:10:20','2024-12-10 13:10:20'),(11,28,'2024-12-27 12:00:00',2000000.00,'Pending','Cash','2024-12-10 13:10:20','2024-12-10 13:10:20'),(12,21,'2025-01-01 10:00:00',3000000.00,'Completed','Cash','2024-12-10 13:10:20','2024-12-10 13:10:20'),(13,21,'2024-12-16 15:00:00',1000000.00,'Completed','Cash','2024-12-10 13:33:43','2024-12-10 13:33:43'),(14,37,'2024-12-21 16:00:00',3000000.00,'Completed','Cash','2024-12-10 13:33:43','2024-12-10 13:33:43'),(15,22,'2024-12-26 12:00:00',5000000.00,'Cancelled','Cash','2024-12-10 13:33:43','2024-12-10 13:33:43'),(16,26,'2024-12-31 10:00:00',4000000.00,'Pending','Cash','2024-12-10 13:33:43','2024-12-10 13:33:43'),(17,41,'2024-12-21 15:00:00',1500000.00,'Completed','Cash','2024-12-10 13:41:07','2024-12-10 13:41:07'),(18,42,'2024-12-24 16:00:00',2500000.00,'Cancelled','Cash','2024-12-10 13:41:07','2024-12-10 13:41:07'),(19,43,'2024-12-26 12:00:00',3500000.00,'Completed','Cash','2024-12-10 13:41:07','2024-12-10 13:41:07'),(20,44,'2024-12-30 10:00:00',4000000.00,'Pending','Cash','2024-12-10 13:41:07','2024-12-10 13:41:07'),(21,45,'2024-12-22 10:00:00',2500000.00,'Completed','Cash','2024-12-19 16:11:09','2024-12-19 16:11:09'),(22,46,'2024-12-23 12:00:00',3000000.00,'Pending','Cash','2024-12-19 16:11:09','2024-12-19 16:11:09'),(23,47,'2024-12-29 14:00:00',4500000.00,'Completed','Cash','2024-12-19 16:11:09','2024-12-19 16:11:09'),(24,48,'2024-12-30 16:00:00',4000000.00,'Cancelled','Cash','2024-12-19 16:11:09','2024-12-19 16:11:09'),(25,53,'2024-12-20 14:30:00',2000000.00,'Completed','Cash','2024-12-19 16:18:05','2024-12-19 16:18:05'),(26,54,'2024-12-25 15:30:00',3000000.00,'Pending','Cash','2024-12-19 16:18:05','2024-12-19 16:18:05'),(27,55,'2024-12-18 13:30:00',5000000.00,'Completed','Cash','2024-12-19 16:18:05','2024-12-19 16:18:05'),(28,56,'2024-12-30 16:30:00',6000000.00,'Completed','Cash','2024-12-19 16:18:05','2024-12-19 16:18:05'),(29,57,'2024-12-20 14:30:00',1500000.00,'Completed','Cash','2024-12-19 16:23:07','2024-12-19 16:23:07'),(30,58,'2024-12-25 15:30:00',2500000.00,'Completed','Cash','2024-12-19 16:23:07','2024-12-19 16:23:07'),(31,59,'2024-12-18 13:30:00',5000000.00,'Pending','Cash','2024-12-19 16:23:07','2024-12-19 16:23:07'),(32,60,'2024-12-30 16:30:00',6000000.00,'Completed','Cash','2024-12-19 16:23:07','2024-12-19 16:23:07');
/*!40000 ALTER TABLE `payment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `rooms`
--

LOCK TABLES `rooms` WRITE;
/*!40000 ALTER TABLE `rooms` DISABLE KEYS */;
INSERT INTO `rooms` VALUES (44,23,101,'Single',1,'https://images.pexels.com/photos/29668197/pexels-photo-29668197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1','Available'),(45,23,102,'Double',2,'https://acihome.vn/uploads/15/mau-thiet-ke-noi-that-phong-2-giuong-don-ben-trong-khach-san-3-4-5-sao-2.JPG','Booked'),(46,24,201,'Suite',4,'https://ezcloud.vn/wp-content/uploads/2018/05/phong-suite-la-gi.webp','Available'),(47,24,202,'Family',5,'https://vuongquocnoithat.vn/images/2020/12/26/nhung-luu-y-chung-khi-treo-anh-gia-dinh-o-phong-khach.jpg','Maintenance'),(48,25,301,'Luxury',2,'https://sbsvilla.vn/wp-content/uploads/Phong-khach-biet-thu-Luxury-03-1.jpg','Available'),(49,24,101,'Single',1,'https://images.pexels.com/photos/29696164/pexels-photo-29696164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1','Available'),(50,24,102,'Double',2,'https://kientrucnamcuong.com/upload/image/images/thiet-ke-phong-khach-san-11.jpg','Booked'),(51,25,201,'Family',4,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsKNUXZP0IaIuMqidE09F9vQjq_mGWQu49Wg&s','Available'),(52,25,202,'Suite',2,'https://aeros.vn/upload/images/aeros-phong-suite-la-gi-3.webp','Available'),(53,26,301,'Luxury',2,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ3LHozzHo8sb0Npop0siDWmaLvh0mIV46Lg&s','Booked'),(54,27,401,'Single',1,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1MABibwRg1-QTQ2mq1Z36129YIkfEWaDXJw&s','Maintenance'),(55,23,103,'Single',2,'https://khachsanhoangoanh.com/public/userfiles/products/phong-don-vip-5.jpg','Available'),(56,24,203,'Luxury',4,'https://noithatmienbac.vn/wp-content/uploads/2023/12/phong-vip-nha-hang.jpg','Booked'),(57,25,302,'Suite',3,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE24InNpuWPmVrDhdzw0sSusoYrEPWOtF4Kw&s','Available'),(58,26,402,'Family',6,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7lT9EYbFuc1qby6mFVcTj3p56gWuGZA4_zw&s','Available'),(59,26,403,'Luxury',2,'https://acihome.vn/uploads/15/mau-thiet-ke-noi-that-buong-vip-khach-san-co-1-ngu-1-khach-tinh-te-sang-trong-2.JPG','Maintenance'),(60,30,402,'Single',1,'https://benhvienphuongdong.vn/public/uploads/thu-vien-anh/khong-gian-benh-vien/phong-noi-tru/phong-noi-tru-1.jpg','Available'),(61,23,502,'Double',2,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1MABibwRg1-QTQ2mq1Z36129YIkfEWaDXJw&s','Booked'),(62,27,601,'Family',5,'https://villaflc.vn/wp-content/uploads/2020/01/family-suite.jpg','Available'),(63,29,602,'Suite',3,'https://www.cet.edu.vn/wp-content/uploads/2018/01/phong-executive-stuido-suite-la-gi.jpg','Available'),(64,23,701,'Luxury',2,'https://vanangroup.com.vn/wp-content/uploads/2024/05/Trang-thiet-bi-tien-nghi.jpg','Booked'),(65,32,801,'Double',2,'https://media-cdn.tripadvisor.com/media/photo-s/0c/81/60/95/phong-conneting-47m2.jpg','Available'),(66,24,802,'Double',4,'https://vanangroup.com.vn/wp-content/uploads/2024/05/Thiet-ke-noi-that-phong-ngu-doi-2.jpg','Maintenance'),(67,24,901,'Single',1,'https://huyhoanhotel.com/wp-content/uploads/2017/05/phong-1-giuong-don.jpg','Available'),(68,31,902,'Suite',3,'https://media-cdn.tripadvisor.com/media/photo-s/1a/1b/60/5e/phong-suite-v-i-khong.jpg','Booked'),(69,31,1001,'Luxury',4,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsiNYKQDQO1heDeZYRVjK3OpSrwkApKdaNcQ&s','Available'),(70,37,1002,'Family',5,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbp6ks7N1XVtLLwFGD-8mDYy6CW773YTtNXA&s','Booked'),(71,24,1101,'Double',2,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ0hPDmy8Gb4uL6aYTqDPIwqUokfxnMd2QUQ&s','Maintenance'),(72,32,1201,'Single',4,'https://acihome.vn/uploads/15/mau-thiet-ke-noi-that-phong-2-giuong-don-ben-trong-khach-san-3-4-5-sao-4.jpg','Available'),(73,33,1202,'Single',1,'https://benhvienphuongdong.vn/public/uploads/thu-vien-anh/khong-gian-benh-vien/phong-noi-tru/phong-noi-tru-5.jpg','Booked'),(88,39,1301,'Double',2,'https://vanangroup.com.vn/wp-content/uploads/2024/05/Phong-ngu-hai-giuong-don-noi-that-khach-san-4-sao-3.jpg','Available'),(89,39,1302,'Suite',4,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4oflAW0Jph_vjyiapu2x5-Adw-2xHzCDTDQ&s','Booked'),(90,40,1401,'Single',1,'https://noithatchauanh.com/uploaded/phong-don-nha-nghi.png','Maintenance'),(91,40,1402,'Luxury',5,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGPy15MdK9LVHPGrDPJp3_sO0W5X4_o7jbPQ&s','Available'),(92,41,1501,'Family',6,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRby1am_D-ax0od8aGORJRgb1NvkO-M23moIg&s','Booked'),(93,42,1602,'Double',2,'https://mixhotel.vn/uploads/images/61f4efd1d6a5eb23e51e639c/phong-doi__2_.webp','Available'),(94,42,101,'Single',1,'https://benhvienphuongdong.vn/public/uploads/thu-vien-anh/khong-gian-benh-vien/phong-noi-tru/phong-noi-tru-2.jpg','Available'),(95,42,102,'Double',2,'https://rosevalleydalat.com/wp-content/uploads/2019/05/Standard-double-1.jpg','Booked'),(96,43,201,'Suite',4,'https://vanangroup.com.vn/wp-content/uploads/2024/03/Dac-diem-phong-suite.jpg','Available'),(97,43,202,'Family',6,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuI9LzVXBkdqbW8G0YZ4bshFiofwU9QbV5Cg&s','Maintenance'),(98,45,401,'Luxury',5,'https://housedesign.vn/wp-content/uploads/2020/08/phong-cach-thiet-ke-noi-that-luxury-768x576.jpg','Available'),(99,45,402,'Single',1,'https://www.lanha.vn/wp-content/uploads/2023/07/phong-ngu-dep-cho-nu-1-1.jpg.webp','Booked'),(100,46,501,'Double',2,'https://hanahhotel.com/Uploads/files/53.jpg','Available'),(101,46,502,'Suite',4,'https://dyf.vn/wp-content/uploads/2021/10/phong-suite-la-gi-tieu-chuan-thiet-ke-thi-cong-phong-suite-khach-san_617269182a160.jpeg','Booked'),(102,47,601,'Family',6,'https://poliva.vn/wp-content/uploads/2019/08/Family-suite-la-gi-1.jpg','Available'),(103,47,602,'Luxury',5,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiQKWkdoG8J-5ICHls4IdVO-ogDQB3A34A0g&s','Maintenance'),(104,48,701,'Single',1,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW-lSqnU3mn1X61PcB5qfEvKSvVfDPbDb0ww&s','Available'),(105,48,702,'Double',2,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWGUZUM33d4YysB_fD2bi5N6x2AnZvDNwa4Q&s','Booked'),(106,49,801,'Suite',4,'https://dyf.vn/wp-content/uploads/2021/10/phong-suite-la-gi-tieu-chuan-thiet-ke-thi-cong-phong-suite-khach-san_617269191df02.jpeg','Available'),(107,50,802,'Family',6,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuVHmotpujYF4JzieWtpb5hBP2hUVGQmvrGw&s','Booked'),(108,51,901,'Luxury',5,'https://kdesign.vn/wp-content/uploads/2022/07/thiet-ke-phong-ngu-luxury-2.jpg','Maintenance'),(109,51,902,'Single',1,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz_Ux3jM7avUGsPxdHNxgBAyS8w_wgCbI-mg&s','Available'),(110,52,1001,'Single',1,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG9zaE9czF7Ie-zcmY9WpCGP_ATz9zv3xuoQ&s','Available'),(111,51,1002,'Double',2,'https://khachsancatba.vn/ckfinder/userfiles/images/z2401519055477_15efd0e0a2389e21acc9e5acb34619f1.jpg','Booked'),(112,53,1101,'Family',6,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS21iCEWneZmnFwz8Zhyi-MKn73siZwUQy24A&s','Available'),(113,54,1201,'Suite',4,'https://khachsandep.vn/storage/files/0%200%20%20bi%20quyet%20thiet%20ke%20homestay%20dep/0%20tieu%20chuan%20thiet%20ke%20phong%20suite/anh-bia-tieu-chuan-thiet-ke-phong-suite.jpg','Booked'),(114,55,1301,'Luxury',5,'https://sbsvilla.vn/wp-content/uploads/Phong-khach-biet-thu-Luxury-02.jpg','Available'),(115,56,1401,'Double',3,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYKjiiCwnZ6R1F0JLLIbYxXUIiAOgiAzU5qQ&s','Booked'),(116,57,1501,'Single',1,'https://dyf.vn/wp-content/uploads/2021/10/phong-don-la-gi-tieu-chuan-cach-phan-loai-va-goi-ten_6172694d71254.jpeg','Maintenance'),(117,58,1601,'Suite',4,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlYBam9wOnYcSU0tEcjAy4G7YtWUbojw8Nmg&s','Available'),(118,59,1701,'Double',2,'https://noithatkienduy.com/wp-content/uploads/2023/09/phong-ngu-doi-cho-be-trai-va-be-gai-15.jpg','Booked'),(119,60,1801,'Family',6,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1oQ6OUJrQUbDHQVzIx6oArq7LLwwjobnIAA&s','Maintenance');
/*!40000 ALTER TABLE `rooms` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `services`
--

LOCK TABLES `services` WRITE;
/*!40000 ALTER TABLE `services` DISABLE KEYS */;
INSERT INTO `services` VALUES (8,23,'Spa',500000.00,NULL),(9,23,'Đón từ sân bay',200000.00,NULL),(10,24,'Buffet sáng',150000.00,NULL),(11,25,'Tour leo núi',300000.00,NULL),(12,23,'Dịch vụ spa',300000.00,NULL),(13,24,'Thuê xe máy',150000.00,NULL),(14,25,'Phòng karaoke',500000.00,NULL),(15,26,'Tour hướng dẫn viên',200000.00,NULL),(16,26,'Dịch vụ xe đưa đón',500000.00,NULL),(17,25,'Hồ bơi',100000.00,NULL),(18,28,'Phòng gym',200000.00,NULL),(19,34,'Tour tham quan Hội An',300000.00,NULL),(20,35,'Dịch vụ giặt ủi',200000.00,NULL),(21,36,'Dịch vụ spa',400000.00,NULL),(22,37,'Tham quan du lịch',500000.00,NULL),(23,38,'Phòng họp hội nghị',700000.00,NULL),(24,39,'Dịch vụ ăn sáng',300000.00,NULL),(25,40,'Dịch vụ hồ bơi',500000.00,NULL),(26,41,'Tour du lịch địa phương',600000.00,NULL),(27,42,'Thuyền tham quan sông',800000.00,NULL),(28,42,'Giặt ủi',200000.00,NULL),(29,42,'Đưa đón sân bay',500000.00,NULL),(30,45,'Spa',1000000.00,NULL),(31,45,'Tour tham quan',1500000.00,NULL),(32,48,'Đưa đón sân bay',600000.00,NULL),(33,49,'Phòng Gym',800000.00,NULL),(34,50,'Ăn sáng tại phòng',300000.00,NULL),(35,50,'Thuê xe đạp',250000.00,NULL),(36,52,'Giặt là',150000.00,NULL),(37,53,'Tour du lịch',1000000.00,NULL),(38,54,'Phòng Gym',200000.00,NULL),(39,55,'Thuê xe hơi',2500000.00,NULL),(40,56,'Spa & Massage',3000000.00,NULL),(41,57,'Dịch vụ phòng',100000.00,NULL),(42,58,'Đưa đón sân bay',500000.00,NULL),(43,59,'Phòng họp',1000000.00,NULL),(44,60,'Bể bơi vô cực',2000000.00,NULL);
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

-- Dump completed on 2024-12-19 23:37:23
