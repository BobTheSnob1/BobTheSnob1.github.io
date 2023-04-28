const progressBar = document.getElementById('progressBar');
const timer = document.getElementById('timer');

const totalTime = 60; // Total time in seconds
let currentTime = 0;

function updateProgressBar() {
  currentTime += 1;
  const percentage = (currentTime / totalTime) * 100;
  progressBar.style.width = `${percentage}%`;

  const minutes = Math.floor(currentTime / 60);
  const seconds = currentTime % 60;
  timer.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;

  if (currentTime < totalTime) {
    setTimeout(updateProgressBar, 1000);
  }
}

updateProgressBar();
