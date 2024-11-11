const progressBar = document.getElementById('progressBar');
const timer = document.getElementById('timer');
const percentageIndicator = document.getElementById('percentage');

const startDate = new Date('2021-03-25T00:00:00');
const endDate = new Date('2025-03-25T00:00:00');
const totalTime = (endDate - startDate) / 1000;
let currentTime = 0;
let animationProgress = 0;

updateCountdown();

function updateProgressBar() {
    const now = new Date();
    currentTime = (now - startDate) / 1000;
    const percentage = (currentTime / totalTime) * 100;
  
    if (animationProgress < percentage) {
      animationProgress += 0.5;
      progressBar.style.width = `${animationProgress}%`;
      percentageIndicator.textContent = `${Math.floor(animationProgress)}%`;
      requestAnimationFrame(updateProgressBar);
    } else {
      progressBar.style.width = `${percentage}%`;
      percentageIndicator.textContent = `${Math.floor(percentage)}%`;
      setInterval(updateCountdown, 1000);
    }
  }

function updateCountdown() {
    const now = new Date();
    currentTime = (now - startDate) / 1000;
    const remainingTime = totalTime - currentTime;
    const years = Math.floor(remainingTime / 31536000);
    const days = Math.floor((remainingTime % 31536000) / 86400);
    const hours = Math.floor((remainingTime % 86400) / 3600);
    const minutes = Math.floor((remainingTime % 3600) / 60);
    const seconds = Math.floor(remainingTime % 60);
    timer.textContent = `${years}y ${days}d ${hours}h ${minutes}m ${seconds}s`;
  }

updateProgressBar();


console.log("shoot bob a dm if you see this! :D");