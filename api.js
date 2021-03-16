import axios from "axios";

const TMDB_KEY = "d3a1306c4f4b98101b6f29ff3bd068f3";

const makeRequest = (path, params) =>
  axios.get(`https://api.themoviedb.org/3${path}`, {
    params: {
      // ... 뜻은 object의 contents를 get의미이다. 그래서 아래와 같이 page2를 얻는다.
      //makeRequest("/movies", {page:2})
      ...params,
      apik_key: TMDB_KEY,
    },
  });

export const movieApi = {
  nowPlaying: () => makeRequest(),
  popular: () => makeRequest(),
  upcoming: () => makeRequest(),
  search: (word) => makeRequest(),
  movie: (id) => makeRequest(),
  discover: () => makeRequest(),
};

export const tvApi = {
  today: () => makeRequest(),
  thisWeek: () => makeRequest(),
  topRated: () => makeRequest(),
  popular: () => makeRequest(),
  search: (word) => makeRequest(),
  show: (id) => makeRequest(),
};
