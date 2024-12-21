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

function changeBackgroundImage() {
  const img = new Image();
  img.src = images[index];
  img.onload = () => {
    document.body.style.backgroundImage = `url('${img.src}')`;
    index = (index + 1) % totalImages; 
  };
  img.onerror = () => {
    console.error(`Không thể tải ảnh: ${images[index]}`);
  };
}

setInterval(changeBackgroundImage, 3000);

changeBackgroundImage();