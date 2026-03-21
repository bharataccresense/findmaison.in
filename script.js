const slides = document.querySelectorAll(".slide");
const bars = document.querySelectorAll(".progress");

let current = 0;

function showSlide(index) {

  slides.forEach((video, i) => {
    video.classList.remove("active");
    video.pause();
    video.currentTime = 0;

    bars[i].classList.remove("active");
  });

  const activeVideo = slides[index];

  activeVideo.classList.add("active");
  activeVideo.play();

  bars[index].classList.add("active");

  // Sync progress bar duration with video
  const duration = activeVideo.duration || 4;

  bars[index].style.setProperty("--duration", duration + "s");

  activeVideo.onended = () => {
    nextSlide();
  };
}

function nextSlide() {
  current++;
  if (current >= slides.length) current = 0;
  showSlide(current);
}

// Start first video after load
window.onload = () => {
  showSlide(current);
};