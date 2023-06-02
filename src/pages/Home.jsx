import { useState, useEffect } from 'react';
// import axios from 'axios';
import { getTrendingMovies } from 'api';

// ###### Home ####################################

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    // if (!query) return;

    async function renderTrending() {
      try {
        // setIsLoading(true);
        // toast.remove();

        const response = await getTrendingMovies();

        setMovies(response.data.results);
        //
      } catch ({ message }) {
        // toast.error(message);
        setError(message);
        //
      }
    }

    renderTrending();
  });

  //  getTrendingMovies();

  return (
    <>
      <div>Trending movies</div>

      {error && <div>{error}</div>}

      {movies && (
        <ul>
          {movies.map(({ id, title }) => (
            <li key={id}>{title}</li>
          ))}
        </ul>
      )}
    </>
  );
}
