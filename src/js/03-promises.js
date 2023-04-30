import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('form');
form.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();

  let delay = event.target[0].valueAsNumber;
  const step = event.target[1].valueAsNumber;
  const amount = event.target[2].valueAsNumber;

  for (let i = 1; i <= amount; i++) {
    createPromise(i, delay);
    delay += step;
  }
  
  event.currentTarget.reset();
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });

  promise.then(({ position, delay }) => {Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);}).catch(({ position, delay }) => {Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);});
}

