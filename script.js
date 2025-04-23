
function toggleMenu() {
  const menu = document.getElementById('menu');
  menu.classList.toggle('active');
}
const slide = document.getElementById('carousel-slide');
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');
const images = slide.querySelectorAll('img');

let index = 0;

function showSlide(i) {
  if (i >= images.length) index = 0;
  if (i < 0) index = images.length - 1;
  slide.style.transform = translateX(${-index * 100}%);
}

nextBtn.addEventListener('click', () => {
  index++;
  showSlide(index);
});

prevBtn.addEventListener('click', () => {
  index--;
  showSlide(index);
});

setInterval(() => {
  index++;
  showSlide(index);
}, 5000);
