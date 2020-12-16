const container = document.querySelector('#container');

const sounds = ['jaguar', 'wind', 'bird'];

const stopSounds = () => {
  for (const sound of sounds) {
    document.querySelector(`#${sound}`).pause();
  }
}

for (let sound of sounds) {
  const soundButton = document.createElement('button');
  soundButton.innerText = sound;
  container.appendChild(soundButton);

  soundButton.addEventListener('click', () => {
    stopSounds();
    document.querySelector(`#${sound}`).play();
  })
}

