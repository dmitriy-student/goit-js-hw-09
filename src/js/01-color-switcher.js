const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const bodyEl = document.body;
const delay = 1000;
let timerId = null;


startBtn.addEventListener('click', onStartBtn);
stopBtn.addEventListener('click', onStopBtn);

function onStartBtn() {
    startBtn.disabled = true;
    timerId = setInterval(() => {
        bodyEl.style.backgroundColor = getRandomHexColor();
    }, delay);
}

function onStopBtn() {
    startBtn.disabled = false;
    clearInterval(timerId);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
