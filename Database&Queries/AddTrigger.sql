DELIMITER //
-- Trigger log_hotel_delete:
-- Ghi lại thông tin về các khách sạn bị xóa vào bảng `deletion_logs`, bao gồm loại thực thể (hotel), ID của khách sạn, thời điểm xóa, và lý do xóa.
CREATE TRIGGER log_hotel_delete 
AFTER DELETE ON hotels
FOR EACH ROW
BEGIN
    INSERT INTO deletion_logs (entity, entity_id, deleted_at, reason)
    VALUES ('hotel', OLD.hotel_id, NOW(), 'Hotel deleted');
END//

DELIMITER ;

DELIMITER //
-- Trigger log_booking_delete:
-- Ghi lại thông tin về các booking bị xóa vào bảng `deletion_logs`, bao gồm loại thực thể (booking), ID của booking, thời điểm xóa, và lý do xóa.
CREATE TRIGGER log_booking_delete
AFTER DELETE ON bookings
FOR EACH ROW
BEGIN
    INSERT INTO deletion_logs (entity, entity_id, deleted_at, reason)
    VALUES ('booking', OLD.booking_id, NOW(), 'Booking cancelled');
END//

DELIMITER ;

DELIMITER //
-- Trigger prevent_hotel_delete:
-- Ngăn việc xóa khách sạn nếu có phòng trong khách sạn đang ở trạng thái "Booked".
CREATE TRIGGER prevent_hotel_delete
BEFORE DELETE ON hotels
FOR EACH ROW
BEGIN
    IF (SELECT COUNT(*) FROM rooms WHERE hotel_id = OLD.hotel_id AND status = 'Booked') > 0 THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Cannot delete hotel with booked rooms.';
    END IF;
END//

DELIMITER ;

DELIMITER //
-- Trigger prevent_booking_delete:
-- Ngăn việc xóa booking nếu có khoản thanh toán liên quan đến booking đã hoàn thành.
CREATE TRIGGER prevent_booking_delete
BEFORE DELETE ON bookings
FOR EACH ROW
BEGIN
    IF (SELECT COUNT(*) FROM payment WHERE booking_id = OLD.booking_id AND status = 'Completed') > 0 THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Cannot delete booking with completed payments.';
    END IF;
END//

DELIMITER ;

DELIMITER //
-- Trigger update_room_status_after_booking_delete:
-- Cập nhật trạng thái của phòng thành "Available" khi booking bị xóa.
CREATE TRIGGER update_room_status_after_booking_delete
AFTER DELETE ON bookings
FOR EACH ROW
BEGIN
    UPDATE rooms
    SET status = 'Available'
    WHERE room_id = OLD.room_id;
END//

DELIMITER ;

DELIMITER //
-- Trigger update_payment_status_after_booking_delete:
-- Đánh dấu trạng thái của các khoản thanh toán liên quan đến booking bị xóa thành "Cancelled".
CREATE TRIGGER update_payment_status_after_booking_delete
AFTER DELETE ON bookings
FOR EACH ROW
BEGIN
    UPDATE payment
    SET status = 'Cancelled'
    WHERE booking_id = OLD.booking_id;
END//

DELIMITER ;

DELIMITER //
-- Trigger check_booking_dates:
-- Kiểm tra ngày check-in và check-out khi thêm mới booking, đảm bảo ngày check-in phải sớm hơn ngày check-out.
CREATE TRIGGER check_booking_dates
BEFORE INSERT ON bookings
FOR EACH ROW
BEGIN
    IF NEW.check_in_date >= NEW.check_out_date THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Check-in date must be earlier than check-out date.';
    END IF;
END//

DELIMITER ;

DELIMITER //
-- Trigger check_room_capacity:
-- Kiểm tra sức chứa của phòng khi thêm mới booking, đảm bảo số lượng khách không vượt quá sức chứa của phòng.
CREATE TRIGGER check_room_capacity
BEFORE INSERT ON bookings
FOR EACH ROW
BEGIN
    IF (SELECT capacity FROM rooms WHERE room_id = NEW.room_id) < (SELECT COUNT(*) FROM bookings WHERE room_id = NEW.room_id) THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Room capacity exceeded.';
    END IF;
END//

DELIMITER ;

DELIMITER //
-- Trigger update_hotel_timestamp:
-- Cập nhật thời gian sửa đổi (`updated_at`) của khách sạn mỗi khi có thay đổi trong bảng `hotels`.
CREATE TRIGGER update_hotel_timestamp
BEFORE UPDATE ON hotels
FOR EACH ROW
BEGIN
    SET NEW.updated_at = NOW();
END//

DELIMITER ;

DELIMITER //
-- Trigger update_room_timestamp:
-- Cập nhật thời gian sửa đổi (`updated_at`) của phòng mỗi khi có thay đổi trong bảng `rooms`.
CREATE TRIGGER update_room_timestamp
BEFORE UPDATE ON rooms
FOR EACH ROW
BEGIN
    SET NEW.updated_at = NOW();
END//

DELIMITER ;
