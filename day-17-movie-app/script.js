const API_KEY = '3fd2be6f0c70a2a598f084ddfb75487c';
const API_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&page=1`;
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query="`;

const main = document.querySelector('#main');
const form = document.querySelector('#form');
const search = document.querySelector('#search');

const getClassByRate = (vote) => {
  if (vote >= 8) {
    return 'green';
  } else if (vote >= 5) {
    return 'orange';
  } else {
    return 'red';
  }
};
const showMovies = (movies) => {
  main.innerHTML = '';

  for (const movie of movies) {
    const { title, poster_path, vote_average, overview } = movie;

    const movieEl = `
      <div class="movie">
        <img
          src="${IMG_PATH + poster_path}"
          alt=""
        />
        <div class="movie-info">
          <h3>${title}</h3>
          <span class="${getClassByRate(vote_average)}">${vote_average}</span>
        </div>
        <div class="overview">
          <h3>Overview</h3>
          ${overview}
        </div>
      </div>
    `;

    main.innerHTML += movieEl;
  }
};

const getMovies = async (url) => {
  const res = await fetch(url);
  const data = await res.json();

  showMovies(data.results);
};

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const searchTerm = search.value;

  if (searchTerm?.length != 0) {
    getMovies(SEARCH_API + searchTerm);

    search.value = '';
  }
});

getMovies(API_URL);
