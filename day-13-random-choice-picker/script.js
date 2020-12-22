const tagsContainer = document.querySelector('.tags-container');
const textarea = document.querySelector('textarea');

textarea.focus();

const createTags = () => {
  const text = textarea.value;

  const tagsContent = text
    .split(',')
    .filter((word) => word.trim() !== '')
    .map((word) => word.trim());

  tagsContainer.innerHTML = '';
  for (const word of tagsContent) {
    tagsContainer.innerHTML += `<span class="tag">${word}</span>`;
  }
};

const getRandomTag = () => {
  const tags = document.querySelectorAll('.tag');
  return tags[Math.floor(Math.random() * tags.length)];
};

const randomSelect = () => {
  const times = 30;
  const interval = setInterval(() => {
    const randomTag = getRandomTag();
    randomTag.classList.toggle('highlighted');

    setTimeout(() => {
      randomTag.classList.toggle('highlighted');
    }, 100);
  }, 100);

  setTimeout(() => {
    clearInterval(interval);
    setTimeout(() => {
      const randomTag = getRandomTag();
      randomTag.classList.toggle('highlighted');
      textarea.disabled = false;
    }, 100);
  }, times * 100);
};

textarea.addEventListener('keyup', (e) => {
  createTags();

  if (e.key === 'Enter') {
    textarea.disabled = true;
    textarea.value = '';

    randomSelect();
  }
});
