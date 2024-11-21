-- MySQL dump 10.13  Distrib 8.0.40, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: hotelmanagement
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
-- Dumping data for table `booking`
--

LOCK TABLES `booking` WRITE;
/*!40000 ALTER TABLE `booking` DISABLE KEYS */;
INSERT INTO `booking` VALUES (1,1,1,'2024-11-25','2024-11-27','confirmed',200.00),(2,2,2,'2024-11-24','2024-11-26','pending',300.00),(3,1,3,'2024-12-01','2024-12-05','confirmed',1200.00),(4,3,4,'2024-11-30','2024-12-02','confirmed',240.00),(5,4,5,'2024-12-01','2024-12-03','pending',800.00),(6,5,6,'2024-12-05','2024-12-08','cancelled',540.00),(7,6,10,'2024-12-15','2024-12-18','confirmed',1050.00),(8,7,11,'2024-12-10','2024-12-12','pending',1000.00),(9,8,12,'2024-12-20','2024-12-25','confirmed',7500.00),(10,6,13,'2024-12-05','2024-12-06','cancelled',120.00),(11,6,10,'2024-12-15','2024-12-18','confirmed',1050.00),(12,7,11,'2024-12-10','2024-12-12','pending',1000.00),(13,8,12,'2024-12-20','2024-12-25','confirmed',7500.00),(14,6,13,'2024-12-05','2024-12-06','cancelled',120.00),(15,6,10,'2024-12-15','2024-12-18','confirmed',1050.00),(16,7,11,'2024-12-10','2024-12-12','pending',1000.00),(17,8,12,'2024-12-20','2024-12-25','confirmed',7500.00),(18,6,13,'2024-12-05','2024-12-06','cancelled',120.00),(19,6,10,'2024-12-15','2024-12-18','confirmed',1050.00),(20,7,11,'2024-12-10','2024-12-12','pending',1000.00),(21,8,12,'2024-12-20','2024-12-25','confirmed',7500.00),(22,6,13,'2024-12-05','2024-12-06','cancelled',120.00),(23,6,10,'2024-12-15','2024-12-18','confirmed',1050.00),(24,7,11,'2024-12-10','2024-12-12','pending',1000.00),(25,8,12,'2024-12-20','2024-12-25','confirmed',7500.00),(26,6,13,'2024-12-05','2024-12-06','cancelled',120.00),(27,6,10,'2024-12-15','2024-12-18','confirmed',1050.00),(28,7,11,'2024-12-10','2024-12-12','pending',1000.00),(29,8,12,'2024-12-20','2024-12-25','confirmed',7500.00),(30,6,13,'2024-12-05','2024-12-06','cancelled',120.00);
/*!40000 ALTER TABLE `booking` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `bookingservice`
--

LOCK TABLES `bookingservice` WRITE;
/*!40000 ALTER TABLE `bookingservice` DISABLE KEYS */;
INSERT INTO `bookingservice` VALUES (1,1,1,1,50.00),(2,1,2,2,40.00),(3,2,3,1,100.00),(4,3,4,1,25.00),(5,4,5,1,200.00),(6,4,6,2,300.00),(7,5,3,1,100.00),(8,6,7,1,300.00),(9,7,8,2,200.00),(10,8,9,1,100.00),(11,6,10,1,500.00),(12,9,6,2,100.00);
/*!40000 ALTER TABLE `bookingservice` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `hotel`
--

LOCK TABLES `hotel` WRITE;
/*!40000 ALTER TABLE `hotel` DISABLE KEYS */;
INSERT INTO `hotel` VALUES (1,'Sunrise Hotel','123 Beach Road, Miami',4.50,'Luxury hotel near the beach'),(2,'Mountain View Hotel','456 Hilltop Ave, Denver',4.20,'Hotel with a breathtaking mountain view'),(3,'City Center Inn','789 Downtown Blvd, New York',3.80,'Affordable hotel in the heart of the city'),(4,'Lakeview Resort','22 Lake Road, Chicago',4.70,'Luxury resort with stunning lake views'),(5,'Downtown Suites','100 Main Street, Los Angeles',4.00,'Affordable suites in the city center'),(6,'Grand Palace','202 Imperial Lane, London',4.80,'A luxurious palace with royal services'),(7,'Ocean Breeze','55 Shoreline Ave, Malibu',4.30,'Relaxing seaside hotel with modern amenities'),(8,'Skyline Tower','800 Tower St, Tokyo',4.60,'Hotel with breathtaking city views and sky lounges'),(9,'Grand Palace','202 Imperial Lane, London',4.80,'A luxurious palace with royal services'),(10,'Ocean Breeze','55 Shoreline Ave, Malibu',4.30,'Relaxing seaside hotel with modern amenities'),(11,'Skyline Tower','800 Tower St, Tokyo',4.60,'Hotel with breathtaking city views and sky lounges'),(12,'Grand Palace','202 Imperial Lane, London',4.80,'A luxurious palace with royal services'),(13,'Ocean Breeze','55 Shoreline Ave, Malibu',4.30,'Relaxing seaside hotel with modern amenities'),(14,'Skyline Tower','800 Tower St, Tokyo',4.60,'Hotel with breathtaking city views and sky lounges'),(15,'Grand Palace','202 Imperial Lane, London',4.80,'A luxurious palace with royal services'),(16,'Ocean Breeze','55 Shoreline Ave, Malibu',4.30,'Relaxing seaside hotel with modern amenities'),(17,'Skyline Tower','800 Tower St, Tokyo',4.60,'Hotel with breathtaking city views and sky lounges'),(18,'Grand Palace','202 Imperial Lane, London',4.80,'A luxurious palace with royal services'),(19,'Ocean Breeze','55 Shoreline Ave, Malibu',4.30,'Relaxing seaside hotel with modern amenities'),(20,'Skyline Tower','800 Tower St, Tokyo',4.60,'Hotel with breathtaking city views and sky lounges'),(21,'Grand Palace','202 Imperial Lane, London',4.80,'A luxurious palace with royal services'),(22,'Ocean Breeze','55 Shoreline Ave, Malibu',4.30,'Relaxing seaside hotel with modern amenities'),(23,'Skyline Tower','800 Tower St, Tokyo',4.60,'Hotel with breathtaking city views and sky lounges'),(24,'Grand Palace','202 Imperial Lane, London',4.80,'A luxurious palace with royal services'),(25,'Ocean Breeze','55 Shoreline Ave, Malibu',4.30,'Relaxing seaside hotel with modern amenities'),(26,'Skyline Tower','800 Tower St, Tokyo',4.60,'Hotel with breathtaking city views and sky lounges'),(27,'Grand Palace','202 Imperial Lane, London',4.80,'A luxurious palace with royal services'),(28,'Ocean Breeze','55 Shoreline Ave, Malibu',4.30,'Relaxing seaside hotel with modern amenities'),(29,'Skyline Tower','800 Tower St, Tokyo',4.60,'Hotel with breathtaking city views and sky lounges');
/*!40000 ALTER TABLE `hotel` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `payment`
--

LOCK TABLES `payment` WRITE;
/*!40000 ALTER TABLE `payment` DISABLE KEYS */;
INSERT INTO `payment` VALUES (1,1,200.00,'2024-11-23 10:00:00','paid','credit_card'),(2,2,300.00,'2024-11-22 15:30:00','pending','paypal'),(3,3,240.00,'2024-11-28 11:00:00','paid','cash'),(4,4,800.00,'2024-11-29 13:15:00','pending','credit_card'),(5,5,540.00,'2024-12-01 09:45:00','failed','paypal'),(24,6,1050.00,'2024-12-13 10:30:00','paid','credit_card'),(25,7,1000.00,'2024-12-09 16:00:00','pending','paypal'),(26,8,7500.00,'2024-12-18 09:00:00','paid','bank_transfer'),(27,9,120.00,'2024-12-04 15:45:00','failed','cash');
/*!40000 ALTER TABLE `payment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `room`
--

LOCK TABLES `room` WRITE;
/*!40000 ALTER TABLE `room` DISABLE KEYS */;
INSERT INTO `room` VALUES (1,1,'101','Single',100.00,'available',1,'Cozy single room with sea view'),(2,1,'102','Double',150.00,'occupied',2,'Spacious room for couples'),(3,2,'201','Suite',300.00,'available',4,'Luxury suite with mountain view'),(4,3,'301','Single',80.00,'maintenance',1,'Simple and affordable single room'),(5,4,'101','Single',120.00,'available',1,'Modern single room with lake view'),(6,4,'102','Suite',400.00,'occupied',4,'Luxury suite with lakefront balcony'),(7,5,'201','Double',180.00,'available',2,'Comfortable double room in downtown'),(8,5,'202','Single',90.00,'occupied',1,'Basic single room with city view'),(9,6,'A301','Deluxe',350.00,'available',3,'Spacious room with royal decor'),(10,7,'B102','Suite',500.00,'occupied',4,'Ocean-facing suite with premium services'),(11,8,'T901','Penthouse',1500.00,'available',6,'Top-floor penthouse with skyline views and private pool'),(12,6,'A302','Single',120.00,'available',1,'Cozy room with a royal touch'),(13,7,'B103','Double',200.00,'maintenance',2,'Modern room with oceanfront view'),(14,6,'A301','Deluxe',350.00,'available',3,'Spacious room with royal decor'),(15,7,'B102','Suite',500.00,'occupied',4,'Ocean-facing suite with premium services'),(16,8,'T901','Penthouse',1500.00,'available',6,'Top-floor penthouse with skyline views and private pool'),(17,6,'A302','Single',120.00,'available',1,'Cozy room with a royal touch'),(18,7,'B103','Double',200.00,'maintenance',2,'Modern room with oceanfront view'),(19,6,'A301','Deluxe',350.00,'available',3,'Spacious room with royal decor'),(20,7,'B102','Suite',500.00,'occupied',4,'Ocean-facing suite with premium services'),(21,8,'T901','Penthouse',1500.00,'available',6,'Top-floor penthouse with skyline views and private pool'),(22,6,'A302','Single',120.00,'available',1,'Cozy room with a royal touch'),(23,7,'B103','Double',200.00,'maintenance',2,'Modern room with oceanfront view'),(24,6,'A301','Deluxe',350.00,'available',3,'Spacious room with royal decor'),(25,7,'B102','Suite',500.00,'occupied',4,'Ocean-facing suite with premium services'),(26,8,'T901','Penthouse',1500.00,'available',6,'Top-floor penthouse with skyline views and private pool'),(27,6,'A302','Single',120.00,'available',1,'Cozy room with a royal touch'),(28,7,'B103','Double',200.00,'maintenance',2,'Modern room with oceanfront view'),(29,6,'A301','Deluxe',350.00,'available',3,'Spacious room with royal decor'),(30,7,'B102','Suite',500.00,'occupied',4,'Ocean-facing suite with premium services'),(31,8,'T901','Penthouse',1500.00,'available',6,'Top-floor penthouse with skyline views and private pool'),(32,6,'A302','Single',120.00,'available',1,'Cozy room with a royal touch'),(33,7,'B103','Double',200.00,'maintenance',2,'Modern room with oceanfront view'),(34,6,'A301','Deluxe',350.00,'available',3,'Spacious room with royal decor'),(35,7,'B102','Suite',500.00,'occupied',4,'Ocean-facing suite with premium services'),(36,8,'T901','Penthouse',1500.00,'available',6,'Top-floor penthouse with skyline views and private pool'),(37,6,'A302','Single',120.00,'available',1,'Cozy room with a royal touch'),(38,7,'B103','Double',200.00,'maintenance',2,'Modern room with oceanfront view'),(39,6,'A301','Deluxe',350.00,'available',3,'Spacious room with royal decor'),(40,7,'B102','Suite',500.00,'occupied',4,'Ocean-facing suite with premium services'),(41,8,'T901','Penthouse',1500.00,'available',6,'Top-floor penthouse with skyline views and private pool'),(42,6,'A302','Single',120.00,'available',1,'Cozy room with a royal touch'),(43,7,'B103','Double',200.00,'maintenance',2,'Modern room with oceanfront view'),(44,6,'A301','Deluxe',350.00,'available',3,'Spacious room with royal decor'),(45,7,'B102','Suite',500.00,'occupied',4,'Ocean-facing suite with premium services'),(46,8,'T901','Penthouse',1500.00,'available',6,'Top-floor penthouse with skyline views and private pool'),(47,6,'A302','Single',120.00,'available',1,'Cozy room with a royal touch'),(48,7,'B103','Double',200.00,'maintenance',2,'Modern room with oceanfront view');
/*!40000 ALTER TABLE `room` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `service`
--

LOCK TABLES `service` WRITE;
/*!40000 ALTER TABLE `service` DISABLE KEYS */;
INSERT INTO `service` VALUES (1,'Room Cleaning',50.00),(2,'Breakfast',20.00),(3,'Airport Pickup',100.00),(4,'Lunch',25.00),(5,'Spa',200.00),(6,'City Tour',150.00),(7,'Dinner',50.00),(8,'Private Pool Access',300.00),(9,'Yoga Class',100.00),(10,'Personal Butler',500.00);
/*!40000 ALTER TABLE `service` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'john_doe','john.doe@example.com','password123','customer','123456789'),(2,'jane_smith','jane.smith@example.com','securepassword','customer','987654321'),(3,'admin_user','admin@example.com','adminpass','admin',NULL),(4,'alice_wonder','alice.wonder@example.com','alicepass','customer','123123123'),(5,'bob_builder','bob.builder@example.com','securebob','customer','321321321'),(6,'king_arthur','arthur.king@example.com','royal123','customer','555111222'),(7,'ocean_walker','walker.ocean@example.com','seawalker','customer','555333444'),(8,'sky_gazer','sky.gazer@example.com','gazer2024','customer','555777888'),(9,'luxury_admin','admin.luxury@example.com','adminlux','admin',NULL),(18,'king_arthur','arthur.king@example.com','royal123','customer','555111222'),(19,'ocean_walker','walker.ocean@example.com','seawalker','customer','555333444'),(20,'sky_gazer','sky.gazer@example.com','gazer2024','customer','555777888'),(21,'luxury_admin','admin.luxury@example.com','adminlux','admin',NULL),(22,'king_arthur','arthur.king@example.com','royal123','customer','555111222'),(23,'ocean_walker','walker.ocean@example.com','seawalker','customer','555333444'),(24,'sky_gazer','sky.gazer@example.com','gazer2024','customer','555777888'),(25,'luxury_admin','admin.luxury@example.com','adminlux','admin',NULL),(26,'king_arthur','arthur.king@example.com','royal123','customer','555111222'),(27,'ocean_walker','walker.ocean@example.com','seawalker','customer','555333444'),(28,'sky_gazer','sky.gazer@example.com','gazer2024','customer','555777888'),(29,'luxury_admin','admin.luxury@example.com','adminlux','admin',NULL),(30,'king_arthur','arthur.king@example.com','royal123','customer','555111222'),(31,'ocean_walker','walker.ocean@example.com','seawalker','customer','555333444'),(32,'sky_gazer','sky.gazer@example.com','gazer2024','customer','555777888'),(33,'luxury_admin','admin.luxury@example.com','adminlux','admin',NULL),(34,'king_arthur','arthur.king@example.com','royal123','customer','555111222'),(35,'ocean_walker','walker.ocean@example.com','seawalker','customer','555333444'),(36,'sky_gazer','sky.gazer@example.com','gazer2024','customer','555777888'),(37,'luxury_admin','admin.luxury@example.com','adminlux','admin',NULL);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-11-22  1:29:14
