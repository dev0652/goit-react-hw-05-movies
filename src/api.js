import axios from 'axios';

// const REACT_APP_API_KEY = 'd06304d9e64e03eb8f54c91af082a1f3';

const AUTH_TOKEN =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMDYzMDRkOWU2NGUwM2ViOGY1NGM5MWFmMDgyYTFmMyIsInN1YiI6IjY0NzhlNTE5Y2Y0YjhiMDE0MThkZWI5YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rtCRi_Yj7uZNfshhCG6H9Eyo6JMNm4bccFC0_mOpATI';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

// ########################################

// export async function getTrendingMovies() {
//   const response = await axios.get('/trending/movie/day');
//   return response.data;
// }
