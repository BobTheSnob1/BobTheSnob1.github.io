const progressBar = document.getElementById('progressBar');
const timer = document.getElementById('timer');

const startDate = new Date('2021-03-25T00:00:00');
const endDate = new Date('2025-03-25T00:00:00');
const totalTime = (endDate - startDate) / 1000;
let currentTime = 0;

async function generateText(prompt) {
    const response = await fetch('YOUR_VERCEL_FUNCTION_URL', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt: prompt }),
    });
  
    if (response.ok) {
      const text = await response.text();
      return text.trim();
    } else {
      throw new Error('Error generating text');
    }
  }
  
  generateText('Hello, my name is')
    .then(console.log)
    .catch(console.error);
  
  infoText.innerHTML = generateText("One interesting fact about hats is:");

function updateProgressBar() {
  const now = new Date();
  currentTime = (now - startDate) / 1000;
  const percentage = (currentTime / totalTime) * 100;
  progressBar.style.width = `${percentage}%`;

  const remainingTime = totalTime - currentTime;
  const days = Math.floor(remainingTime / 86400);
  const hours = Math.floor((remainingTime % 86400) / 3600);
  const minutes = Math.floor((remainingTime % 3600) / 60);
  const seconds = Math.floor(remainingTime % 60);
  timer.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;

  if (currentTime < totalTime) {
    setTimeout(updateProgressBar, 1000);
  }
}

updateProgressBar();
