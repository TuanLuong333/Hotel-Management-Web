--So phong con trong

SELECT room.room_id, room.room_number
FROM room
LEFT JOIN booking ON room.room_id = booking.room_id
  AND booking.check_in <= '2024-11-22' 
  AND booking.check_out >= '2024-11-22'
WHERE booking.booking_id IS NULL;


--So khach da dat phong

SELECT user_id, COUNT(booking_id) AS number_of_bookings
FROM booking
GROUP BY user_id;

--Phong duoc tra trong ngay cu the

SELECT COUNT(booking_id) AS number_of_rooms_checked_out
FROM booking
WHERE check_out = '2024-11-22' 
  AND status = 'checked-out';

--Phong duoc dat trong ngay cu the

SELECT COUNT(DISTINCT booking_id) AS number_of_rooms_paid
FROM payment
WHERE payment_date = '2024-11-22' AND status = 'completed';
