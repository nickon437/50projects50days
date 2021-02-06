const hourHand = document.querySelector('#hour-hand');
const minuteHand = document.querySelector('#minute-hand');
const secondHand = document.querySelector('#second-hand');
const timeEl = document.querySelector('.time');
const dateEl = document.querySelector('.date');
const toggle = document.querySelector('.toggle');

const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const TRANSLATE_POS = 'translate(-50%, -100%)';

const smoothenSpin = (hourAngle, minuteAngle, secondAngle) => {
  if (secondAngle === 0) {
    secondHand.style.transition = "none";
    secondHand.style.transform = `${TRANSLATE_POS} rotate(0deg)`;
    
    if (minuteAngle === 0) {
      minuteHand.style.transition = "none";
      minuteHand.style.transform = `${TRANSLATE_POS} rotate(0deg)`;
      
      if (hourAngle === 0) {
        hourHand.style.transition = "none";
        hourHand.style.transform = `${TRANSLATE_POS} rotate(0deg)`;
      }
    }
  }
}

const updateClock = () => {
  secondHand.style.transition = "all 0.5s ease-in";
  minuteHand.style.transition = "all 0.5s ease-in";
  hourHand.style.transition = "all 0.5s ease-in";

  const dateTime = new Date();
  const second =  dateTime.getSeconds();
  const minute = dateTime.getMinutes();
  const hour = dateTime.getHours();
  const clockHour = hour % 12;
  
  secondAngle = second * 360 / 60;
  minuteAngle = minute * 360 / 60
  hourAngle = clockHour * 360 / 12;
  
  secondHand.style.transform = `${TRANSLATE_POS} rotate(${secondAngle === 0 ? 360 : secondAngle}deg)`;
  minuteHand.style.transform = `${TRANSLATE_POS} rotate(${minuteAngle === 0 ? 360 : minuteAngle}deg)`;
  hourHand.style.transform = `${TRANSLATE_POS} rotate(${hourAngle === 0 ? 360 : hourAngle}deg)`;
  
  timeEl.innerText = `${hour}:${minute}`;
  dateEl.innerText = `${daysOfWeek[dateTime.getDay()]}, ${months[dateTime.getMonth()]} ${dateTime.getDate()}`

  smoothenSpin(hourAngle, minuteAngle, secondAngle);
}

setInterval(updateClock, 1000);

toggle.addEventListener('click', () => {
  const html = document.querySelector('html');
  html.classList.toggle('dark');
})