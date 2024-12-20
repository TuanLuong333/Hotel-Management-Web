DELIMITER //
CREATE TRIGGER update_address_id_after_delete
AFTER DELETE ON `addresses`
FOR EACH ROW
BEGIN
  UPDATE `hotels` SET `address_id` = `address_id` - 1 WHERE `address_id` > OLD.address_id;
  UPDATE `rooms` SET `hotel_id` = `hotel_id` - 1 WHERE `hotel_id` > OLD.address_id;
  UPDATE `employees` SET `hotel_id` = `hotel_id` - 1 WHERE `hotel_id` > OLD.address_id;
END //
DELIMITER ;

DELIMITER //
CREATE TRIGGER update_hotel_id_after_delete
AFTER DELETE ON `hotels`
FOR EACH ROW
BEGIN
  UPDATE `rooms` SET `hotel_id` = `hotel_id` - 1 WHERE `hotel_id` > OLD.hotel_id;
  UPDATE `bookings` SET `hotel_id` = `hotel_id` - 1 WHERE `hotel_id` > OLD.hotel_id;
  UPDATE `employees` SET `hotel_id` = `hotel_id` - 1 WHERE `hotel_id` > OLD.hotel_id;
  UPDATE `services` SET `hotel_id` = `hotel_id` - 1 WHERE `hotel_id` > OLD.hotel_id;
END //
DELIMITER ;

DELIMITER //
CREATE TRIGGER update_room_id_after_delete
AFTER DELETE ON `rooms`
FOR EACH ROW
BEGIN
  UPDATE `bookings` SET `room_id` = `room_id` - 1 WHERE `room_id` > OLD.room_id;
  UPDATE `services` SET `booking_id` = `booking_id` - 1 WHERE `booking_id` > OLD.room_id;
END //
DELIMITER ;

DELIMITER //
CREATE TRIGGER update_booking_id_after_delete
AFTER DELETE ON `bookings`
FOR EACH ROW
BEGIN
  UPDATE `payment` SET `booking_id` = `booking_id` - 1 WHERE `booking_id` > OLD.booking_id;
  UPDATE `services` SET `booking_id` = `booking_id` - 1 WHERE `booking_id` > OLD.booking_id;
END //
DELIMITER ;

DELIMITER //
CREATE TRIGGER update_employee_id_after_delete
AFTER DELETE ON `employees`
FOR EACH ROW
BEGIN
  UPDATE `employees` SET `hotel_id` = `hotel_id` - 1 WHERE `hotel_id` > OLD.hotel_id;
END //
DELIMITER ;