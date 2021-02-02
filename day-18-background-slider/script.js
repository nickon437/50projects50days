const body = document.body;
const slides = document.querySelectorAll('.slide');
const leftBtn = document.querySelector('#left-arrow');
const rightBtn = document.querySelector('#right-arrow');

let currentIndex = 0;

const setSlide = (index) => {
  slides[currentIndex].classList.add('active');
  body.style.backgroundImage = slides[index].style.backgroundImage;
};

setSlide(currentIndex);

leftBtn.addEventListener('click', () => {
  slides[currentIndex].classList.remove('active');
  if (currentIndex === 0) {
    currentIndex = slides.length - 1;
  } else {
    currentIndex--;
  }

  setSlide(currentIndex);
});

rightBtn.addEventListener('click', () => {
  slides[currentIndex].classList.remove('active');
  if (currentIndex === slides.length - 1) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }

  setSlide(currentIndex);
});
