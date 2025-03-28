// Menambahkan interaksi tombol next/prev atau kontrol otomatis
let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');

function showNextItem() {
  items[currentIndex].style.opacity = '0';
  currentIndex = (currentIndex + 1) % items.length;
  items[currentIndex].style.opacity = '1';
}

setInterval(showNextItem, 1000);
