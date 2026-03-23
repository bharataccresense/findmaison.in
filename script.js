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


// AOS.init({
//   duration: 1000,
//   once: false,
//   mirror: true,
//   offset:150
// });

// function showSection(id) {
//     let sections = document.querySelectorAll('.section');

//     sections.forEach(sec => {
//       sec.classList.remove('active');
//     });

//     document.getElementById(id).classList.add('active');
//   }



function abs()
{
    window.location.href="#about"
}

var op= document.getElementById('open');
var cl= document.getElementById('cls');
var show= document.getElementById('disp');


function up()
{
    
  show.style.display="flex";
  cl.style.display="block";
  op.style.display="none";
  

}

function down()
{

  show.style.display="none";
  cl.style.display="none";
  op.style.display="block";
  
  
}

// const men = document.getElementById("disp");
const links = show.querySelectorAll("a");

links.forEach(link => {
  link.addEventListener("click", () => {
    show.style.display = "none";
    cl.style.display="none";
    op.style.display="block";
  });
});