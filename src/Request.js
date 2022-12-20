const key = '3e334130125efacb595206190c3594ac';
const requests = {
  requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
  requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
  requestUpComing: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
  requestTrending: `
https://api.themoviedb.org/3/trending/movie/day?api_key=${key}`,
  requestSearch: (input) => `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=${input}&page=1&include_adult=false`

}

export default requests