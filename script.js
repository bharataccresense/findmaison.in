const slides = document.querySelectorAll(".slide");
const bars = document.querySelectorAll(".progress");

let current = 0;
const duration = 4000;

function showSlide(index) {
  slides.forEach(s => s.classList.remove("active"));
  bars.forEach(b => {
    b.classList.remove("active");
    b.querySelector("::before");
  });

  slides[index].classList.add("active");
  bars[index].classList.add("active");
}

function nextSlide() {
  current++;
  if (current >= slides.length) current = 0;
  showSlide(current);
}

showSlide(current);
setInterval(nextSlide, duration);