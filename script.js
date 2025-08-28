let timer;
let minutes = 25;
let seconds = 0;
let isRunning = false;

function updateDisplay() {
  const timerDisplay = document.getElementById('timer');
  let m = minutes < 10 ? '0' + minutes : minutes;
  let s = seconds < 10 ? '0' + seconds : seconds;
  timerDisplay.textContent = `${m}:${s}`;
}

function startTimer() {
  if (isRunning) return;
  isRunning = true;
  timer = setInterval(() => {
    if (seconds === 0) {
      if (minutes === 0) {
        clearInterval(timer);
        alert("Pomodoro session complete!");
        return;
      }
      minutes--;
      seconds = 59;
    } else {
      seconds--;
    }
    updateDisplay();
  }, 1000);
}

function pauseTimer() {
  isRunning = false;
  clearInterval(timer);
}

function resetTimer() {
  pauseTimer();
  minutes = 25;
  seconds = 0;
  updateDisplay();
}

function changeSong() {
  const player = document.getElementById("lofiPlayer");
  const selected = document.getElementById("songSelector").value;
  player.src = `songs/song${selected}.mp3`;
  player.play();
}

updateDisplay();
