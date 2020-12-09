const searchContainer = document.querySelector('.search-container');
const searchBtn = document.querySelector('.search-btn');
const searchInput = document.querySelector('.search-input');

searchBtn.addEventListener('click', () => {
  searchContainer.classList.add('active');
  searchInput.focus();
});