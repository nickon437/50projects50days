const progress = document.querySelector('.progress');
const prev = document.querySelector('#prev');
const next = document.querySelector('#next');
const circles = document.querySelectorAll('.circle');

let curActiveIndex = 0;

const updateProgressBar = () => {
  progress.style.width = `${(curActiveIndex / (circles.length - 1)) * 100}%`;
  
  for (const [index, circle] of circles.entries()) {
    if (index <= curActiveIndex) {
      circle.classList.add('active');
    } else {
      circle.classList.remove('active');
    }
  }
}

prev.addEventListener('click', () => {
  curActiveIndex--;
  
  if (curActiveIndex <= 0) {
    curActiveIndex = 0;
    prev.disabled = true;
  } else {
    next.disabled = false;
  }
  
  updateProgressBar();
});

next.addEventListener('click', () => {
  curActiveIndex++;

  if (curActiveIndex >= circles.length - 1) {
    curActiveIndex = circles.length - 1;
    next.disabled = true;
  } else {
    prev.disabled = false;
  }
  
  updateProgressBar();
});

