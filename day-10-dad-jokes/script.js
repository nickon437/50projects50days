
const jokeEl = document.querySelector('#joke');
const newJokeBtn = document.querySelector('#new-joke-btn');

const generateJoke = async () => {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  }

  const res = await fetch('https://icanhazdadjoke.com', config);
  const data = await res.json();

  jokeEl.innerHTML = data.joke
}

newJokeBtn.addEventListener('click', generateJoke);

generateJoke();