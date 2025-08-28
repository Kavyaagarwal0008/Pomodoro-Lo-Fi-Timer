<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Pomodoro Lo-Fi Timer</title>
    <style>
      body {
  font-family: 'Segoe UI', sans-serif;
  background-color: #121212;
  color: #f82121;
  text-align: center;
  padding: 40px;
}

.container {
  max-width: 400px;
  margin: auto;
  background-color: #1e1e1e;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 0 20px #444;
  align-self: center;
}

.timer {
  font-size: 60px;
  margin: 20px 0;
}

.buttons button {
  padding: 10px 20px;
  margin: 10px;
  font-size: 16px;
  border: none;
  border-radius: 6px;
  background-color: rgb(54, 109, 212);
  color: rgb(237, 237, 237);
  cursor: pointer;
}

.buttons button:hover {
  background-color: #d44545;
}

select {
  padding: 12px;
  margin-top: 18px;
  border-radius: 6px;
  font-size: 16px;
  color: #ffffff;
  background-color: rgb(54, 109, 212);
}

/* body{
  font-family: 'Segoe UI',sans-serif;
  background-color: #121212;
  color: #f82121;
  text-align: center;
  padding: 40px;
}

.container{
  max-width: 400px;
  margin: auto;
  background-color: #1e1e1e;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 0 20px #444;
  align-self: center;
}
.timer{
  font-size: 60px;
  margin: 20px 0;
}
.buttons button{
  padding: 10px;
  margin: 10px;
  font-size: 16px;
  border: none;
  border-radius: 6px;
  background-color: rgb(54,109,212);
} */
    </style>
</head>

<body>
    <h1><b>By Kavya Agarwal</b></h1>
    <div class="container">
        <h1>Pomodoro Timer ⏳</h1>
        <div class="timer" id="timer">25:00</div>
        <div class="buttons">
            <button onclick="startTimer()">Start</button>
            <button onclick="pauseTimer()">Pause</button>
            <button onclick="resetTimer()">Reset</button>
        </div>
        <h2>🎧 Lo-Fi Playlist</h2>
        <select id="songSelector" onchange="changeSong()">
            <option value="1">Lo-Fi Beat 1</option>
            <option value="2">Lo-Fi Beat 2</option>
            <option value="3">Lo-Fi Beat 3</option>
            <option value="4">Lo-Fi Beat 4</option>
            <option value="5">Lo-Fi Beat 5</option>
            <option value="6">Lo-Fi Beat 6</option>
        </select>
        <audio id="lofiPlayer" controls loop>
            <source src="songs/song1.mp3" type="audio/mpeg">
            <source src="songs/song1.mp3" type="audio/mpeg">
            <source src="songs/song1.mp3" type="audio/mpeg">
            <source src="songs/song1.mp3" type="audio/mpeg">
            <source src="songs/song1.mp3" type="audio/mpeg">
            <source src="songs/song6.mp3" type="audio/mpeg">
        </audio>
    </div>
  <script>
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

  </script>
</body>

</html>
