let index = 0;
const slides = document.querySelectorAll('.slide');

function showSlide() {
  slides.forEach(s => s.classList.remove('active'));
  slides[index].classList.add('active');
  index = (index + 1) % slides.length;
}

setInterval(showSlide, 3000);
