const boxes = document.querySelectorAll('.box');

const loadBoxes = () => {
  for (const box of boxes) {
    const bottomTrigger = window.innerHeight * 0.75;
    const topPos = box.getBoundingClientRect().top;
    if (topPos < bottomTrigger) {
      box.classList.add('show');
    } else {
      box.classList.remove('show');
    }
  }
};

loadBoxes();

window.onscroll = () => {
  loadBoxes();
};
