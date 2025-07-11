document.addEventListener('DOMContentLoaded', function() {
  const galleryContainer = document.querySelector('.gallery-container');
  // Danh sách ảnh
  const images = [
    'img/1.jpg', 'img/2.jpg', 'img/3.jpg', 'img/4.jpg', 'img/5.jpg',
    'img/6.jpg', 'img/7.jpg', 'img/8.jpg', 'img/9.jpg', 'img/10.jpg',
    'img/11.jpg', 'img/12.jpg', 'img/13.jpg', 'img/14.jpg', 'img/15.jpg',
    'img/16.jpg', 'img/17.jpg', 'img/18.jpg', 'img/19.jpg',
  ];

  images.forEach(src => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = 'Khoảnh khắc';
    img.className = 'gallery-img';
    galleryContainer.appendChild(img);
  });
});
