import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const dateEl = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('button[data-start]');


const timerDays = document.querySelector('span[data-days]');
const timerHours = document.querySelector('span[data-hours]');
const timerMinutes = document.querySelector('span[data-minutes]');
const timerSeconds = document.querySelector('span[data-seconds]');

const delay = 1000;
let timerId = null;
let setDate;
let timeToEnd;


flatpickr(dateEl,{ 
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        clearInterval(timerId);
        const today = new Date();
        setDate = selectedDates[0].getTime();
        if (selectedDates[0] < today) {
            Notify.failure(`❌ Please choose a date in the future`);
            startBtn.disabled = true;
        } else {
            startBtn.disabled = false;
        }
    }
});

startBtn.disabled = true;

startBtn.addEventListener('click', onStartBtn)

function onStartBtn() {
    timerId = setInterval(() => {
      const currentDate = new Date();
      timeToEnd = setDate - currentDate.getTime();
      const { days, hours, minutes, seconds } = convertMs(timeToEnd);
  
      startBtn.disabled = true;
  
      if (timeToEnd <= 0) {
        Notify.success('Success!');
        clearInterval(timerId);
        return;
      }

      timerDays.textContent = String(days).padStart(2, "0");
      timerHours.textContent = String(hours).padStart(2, "0");
      timerMinutes.textContent = String(minutes).padStart(2, "0");
      timerSeconds.textContent = String(seconds).padStart(2, "0");
      }, delay);
  }

function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  }
