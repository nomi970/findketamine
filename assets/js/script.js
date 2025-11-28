// navlist toggle
const hamburger = document.querySelector(".hamburger");
const navlist = document.querySelector(".navlist");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navlist.classList.toggle("active");
});

// Optional: close nav when a link is clicked
// document.querySelectorAll(".navlist").forEach(link =>
//   link.addEventListener("click", () => {
//     hamburger.classList.remove("active");
//     navlist.classList.remove("active");
//   })
// );


// Show button only when scrolled down
const scrollBtn = document.querySelector(".scroll-to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollBtn.classList.add("show");
  } else {
    scrollBtn.classList.remove("show");
  }
});

// Smooth scroll with easing (slows down near top)
scrollBtn.addEventListener("click", () => {
  const start = window.scrollY;
  const duration = 1500; // ms
  let startTime = null;

  function animateScroll(currentTime) {
    if (!startTime) startTime = currentTime;
    const timeElapsed = currentTime - startTime;

    // Easing function (easeOutCubic: fast start, slow end)
    const progress = Math.min(timeElapsed / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 5);

    window.scrollTo(0, start * (1 - ease));

    if (timeElapsed < duration) {
      requestAnimationFrame(animateScroll);
    }
  }

  requestAnimationFrame(animateScroll);
});

// progress top bar
document.addEventListener("DOMContentLoaded", () => {
  const section = document.querySelector(".progress-section");

  if (!section) return;

  function updateProgress() {
    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    let progress = (scrollTop / docHeight) * 100;

    section.style.setProperty("--scroll-progress", progress + "%");
  }

  window.addEventListener("scroll", updateProgress, { passive: true });
  window.addEventListener("resize", updateProgress);
  updateProgress(); // run once on load
});


// video player
const video = document.getElementById("myVideo");
const playPauseBtn = document.getElementById("playPause");
const playIcon = document.getElementById("playIcon");
const pauseIcon = document.getElementById("pauseIcon");
const progressBar = document.getElementById("rangeprogressBar");

// Toggle play/pause
playPauseBtn.addEventListener("click", () => {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
});

// Update icons
video.addEventListener("play", () => {
  playIcon.style.display = "none";
  pauseIcon.style.display = "block";
});

video.addEventListener("pause", () => {
  playIcon.style.display = "block";
  pauseIcon.style.display = "none";
});

// Update progress bar + fill
video.addEventListener("timeupdate", () => {
  const progress = (video.currentTime / video.duration) * 100;
  progressBar.value = progress;
  updateProgressFill(progress);
});

// Seek on input
progressBar.addEventListener("input", () => {
  const seekTime = (progressBar.value / 100) * video.duration;
  video.currentTime = seekTime;
  updateProgressFill(progressBar.value);
});

// Function to update the gradient fill
function updateProgressFill(value) {
  progressBar.style.background = `linear-gradient(to right, #FBFAFA ${value}%, #BCBDB5 ${value}%)`;
}



// validation before sending

// document.getElementById("contactForm").addEventListener("submit", function(event) {
//     let firstName = document.querySelector("input[name='first_name']").value.trim();
//     let lastName  = document.querySelector("input[name='last_name']").value.trim();
//     let email     = document.querySelector("input[name='email']").value.trim();
//     let message   = document.querySelector("textarea[name='message']").value.trim();

//     // Simple regex for email validation
//     let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//     if (!firstName || !lastName || !email || !message) {
//         alert("All fields are required!");
//         event.preventDefault();
//         return;
//     }

//     if (!emailPattern.test(email)) {
//         alert("Please enter a valid email address!");
//         event.preventDefault();
//         return;
//     }
// });

