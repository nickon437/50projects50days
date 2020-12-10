const container = document.querySelector('.container');
const loadText = document.querySelector('.load-text');

let loadAmount = 0;

const load = () => {
  loadAmount++;

  loadText.innerText = `${loadAmount}%`;

  reversedLoadAmount = 1 - (loadAmount/100);
  loadText.style.opacity = reversedLoadAmount;
  container.style.filter = `blur(${reversedLoadAmount * 10}px)`;
  
  if (loadAmount >= 100) {
    clearInterval(loadInterval);
  }
}

const loadInterval = setInterval(load, 30);
