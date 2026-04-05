document.querySelectorAll('a[href^="#"]').forEach(anchor => {

anchor.addEventListener("click", function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({
behavior:"smooth"
});

});

});


const video = document.getElementById("myVideo");
const playPauseBtn = document.getElementById("playPauseBtn");
const progressBar = document.getElementById("progressBar");
const volumeControl = document.getElementById("volumeControl");
const fullscreenBtn = document.getElementById("fullscreenBtn");

// Play/Pause toggle 
playPauseBtn.addEventListener("click", () => {
    if (video.paused) {
        video.play();
        playPauseBtn.textContent = "Pause";
    } else {
      video.pause();
      playPauseBtn.textContent = "Play";
    } 
});

// Update progress bar as video plays 
video.addEventListener("timeupdate", () => {
    progressBar.max = video.duration; 
    progressBar.value = video.currentTime;
});

// Seek video when progress bar changes 
progressBar.addEventListener("input", () => {
    video.currentTime = progressBar.value; 
});

// Volume control 
volumeControl.addEventListener("input", () => {
    video.volume = volumeControl.value;
});

// Fullscreen toggle 
fullscreenBtn.addEventListener("click", () => {
    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if (video.webitRequestFullscreen) { // Safari
      video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) { // IE/Edge
      video.msRequestFullscreen();
    }
});