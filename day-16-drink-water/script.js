const cups = document.querySelectorAll('.small-cup');
const remained = document.querySelector('#remained');
const remainedAmount = document.querySelector('#remained-amount');
const filledPercentage = document.querySelector('#filled-percentage');

const updateLargeCup = (index) => {
  const filled = `${((index + 1) / cups.length) * 100}%`;
  filledPercentage.style.visibility = filled === '0%' ? 'hidden' : 'visible';
  filledPercentage.style.height = filled;
  filledPercentage.innerText = filled;

  const remainedCal = 2000 - (index + 1) * 250;
  remained.style.visibility = remainedCal === 0 ? 'hidden' : 'visible';
  remained.style.height = `${remainedCal / 2000}%`;
  remainedAmount.innerText = `${remainedCal / 1000}L`;
};

const updateSmallCups = (index) => {
  if (
    cups[index].classList.contains('full') &&
    !cups[index + 1]?.classList.contains('full')
  ) {
    index--;
  }

  cups.forEach((cup, index2) => {
    if (index2 <= index) {
      cup.classList.add('full');
    } else {
      cup.classList.remove('full');
    }
  });

  updateLargeCup(index);
};

cups.forEach((cup, index) => {
  cup.addEventListener('click', () => {
    updateSmallCups(index);
  });
});

updateSmallCups(0);
