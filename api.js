import axios from "axios";

const TMDB_KEY = "d3a1306c4f4b98101b6f29ff3bd068f3";

const makeRequest = (path, params) =>
  axios.get(`https://api.themoviedb.org/3${path}`, {
    params: {
      ...params,
      apik_key: TMDB_KEY,
    },
  });

export const movieApi = {
  nowPlaying: () => makeRequest("/movie/now_playing"),
  popular: () => makeRequest("/movie/popular"),
  upcoming: () => makeRequest("/movie/upcoming", { region: "kr" }),
  search: (query) => makeRequest("/search/movie", { query }),
  movie: (id) => makeRequest(`/movie/${id}`),
  discover: () => makeRequest("/discover/movie"),
};

export const tvApi = {
  today: () => makeRequest("/tv/airing_today"),
  thisWeek: () => makeRequest("/tv/on_the_air"),
  topRated: () => makeRequest("/tv/top_rated"),
  popular: () => makeRequest("/tv/popular"),
  search: (query) => makeRequest("/search/tv", { query }),
  show: (id) => makeRequest(`/tv/${id}`),
};

// ... 뜻은 object의 contents를 get의미이다. 그래서 아래와 같이 page2를 얻는다.
//makeRequest("/movies", {page:2})
