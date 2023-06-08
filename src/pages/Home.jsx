import { useState, useEffect } from 'react';

import axios from 'axios';
import 'api';

import MovieList from 'components/MovieList/MovieList';

// ###### Home ####################################

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    let cancel;

    async function getTrendingMovies() {
      try {
        setError('');

        const response = await axios.get('/trending/movie/day', {
          cancelToken: new axios.CancelToken(c => (cancel = c)),
        });
        setMovies(response.data.results);
      } catch ({ message }) {
        if (message !== 'canceled') {
          setError(message);
        }
      }
    }

    getTrendingMovies();

    return () => cancel();
  }, []);

  return (
    <>
      <h1>Trending today</h1>

      {error && <div>{error}</div>}

      {movies.length > 0 && <MovieList data={movies} />}
    </>
  );
}
