-- 1_Thống kê doanh thu từng loại phòng
SELECT 
    r.room_type, 
    SUM(b.total_amount) AS total_revenue 
FROM 
    rooms r 
JOIN 
    bookings b 
ON 
    r.room_id = b.room_id 
GROUP BY 
    r.room_type 
ORDER BY 
    total_revenue DESC;

-- 2_Thống kê doanh thu theo tháng
SELECT 
    MONTH(payment_date) AS month, 
    YEAR(payment_date) AS year, 
    SUM(payment_amount) AS monthly_revenue 
FROM 
    payment 
WHERE 
    status = 'Completed' 
GROUP BY 
    YEAR(payment_date), MONTH(payment_date) 
ORDER BY 
    year, month;

-- 3_Tháng cao điểm đặt phòng (Tháng phổ biến nhất)
SELECT 
    MONTH(b.check_in_date) AS peak_month, 
    COUNT(*) AS bookings_count 
FROM 
    bookings b 
JOIN 
    rooms r 
ON 
    b.room_id = r.room_id 
WHERE 
    r.room_type = 'Single' 
GROUP BY 
    peak_month 
ORDER BY 
    bookings_count DESC 
LIMIT 1;

-- 4_Tổng số đặt phòng và doanh thu theo khách sạn
SELECT 
    h.name AS hotel_name, 
    COUNT(b.booking_id) AS total_bookings, 
    SUM(b.total_amount) AS total_revenue 
FROM 
    bookings b 
JOIN 
    hotels h 
ON 
    b.hotel_id = h.hotel_id 
WHERE 
    h.hotel_id = '1' -- Thay '1' bằng ID khách sạn cần thống kê
GROUP BY 
    h.name;

-- 5_Tỷ lệ phòng trống so với tổng số phòng theo khách sạn
SELECT 
    h.name AS hotel_name, 
    COUNT(CASE WHEN r.status = 'Available' THEN 1 END) AS available_rooms, 
    COUNT(*) AS total_rooms, 
    ROUND((COUNT(CASE WHEN r.status = 'Available' THEN 1 END) / COUNT(*)) * 100, 2) AS vacancy_rate 
FROM 
    rooms r 
JOIN 
    hotels h 
ON 
    r.hotel_id = h.hotel_id 
WHERE 
    h.hotel_id = '1' -- Thay '1' bằng ID khách sạn cần thống kê
GROUP BY 
    h.name;
