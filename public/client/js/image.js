let index = 0;
const images = [
  '/images/hotel1.jpg',
  '/images/hotel2.jpg',
  '/images/hotel3.jpg',
  '/images/hotel4.webp',
  '/images/hotel5.webp',
  '/images/hotel6.webp'
];
const totalImages = images.length;

// Hàm thay đổi ảnh nền
function changeBackgroundImage() {
  const img = new Image();
  img.src = images[index];
  img.onload = () => {
    document.body.style.backgroundImage = `url('${img.src}')`;
    index = (index + 1) % totalImages; // Chuyển sang ảnh tiếp theo
  };
  img.onerror = () => {
    console.error(`Không thể tải ảnh: ${images[index]}`);
  };
}

// Cài đặt khoảng thời gian thay đổi ảnh nền
setInterval(changeBackgroundImage, 3000);

// Gọi hàm lần đầu để hiển thị ảnh đầu tiên
changeBackgroundImage();