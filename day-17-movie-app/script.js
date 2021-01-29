const API_KEY = '3fd2be6f0c70a2a598f084ddfb75487c';
const API_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&page=1`;
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query="`;

const form = document.querySelector('#form');
const search = document.querySelector('#search');

const getMovies = async (url) => {
  const res = await fetch(url);
  const data = await res.json();

  console.log('data', data);
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  

  const searchTerm = search.value;

  if (searchTerm?.length != 0) {
    getMovies(SEARCH_API + searchTerm);

    search.value = '';
  }
})

getMovies(API_URL);