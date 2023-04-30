const images = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg'];
let currentIndex = 0;
const slideshowImage = document.querySelector('.slideshow-image');

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  slideshowImage.style.backgroundImage = `url('${images[currentIndex]}')`;
}

setInterval(nextImage, 5000);
