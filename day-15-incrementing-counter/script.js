const counters = document.querySelectorAll('.counter');

for (const counter of counters) {
  let value = 0;
  const target = Number(counter.getAttribute('data-target'));

  const increaseCounter = () => {
    const increment = target / 200;

    if (value < target) {
      value += increment;
      counter.innerText = Math.ceil(value);
      setTimeout(increaseCounter, 1);
    } else {
      counter.innerText = target;
    }
  };

  increaseCounter();
}
