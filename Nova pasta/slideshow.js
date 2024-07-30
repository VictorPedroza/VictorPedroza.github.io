// script.js
const slidebarImage = document.getElementById('slidebar-image');
const imagePaths = ['./img/Calleri.jpg', './img/Rogero.jpg', './img/Torcida.jpg', './img/Torcida1.jpg'];
let currentImageIndex = 0;

slidebarImage.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % imagePaths.length;
    slidebarImage.src = imagePaths[currentImageIndex];
});
