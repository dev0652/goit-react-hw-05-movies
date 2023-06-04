import { useState, useEffect } from 'react';
import { useParams, useLocation, Link, Outlet } from 'react-router-dom';

import axios from 'axios';
import 'api';

import MovieInfo from 'components/MovieInfo/MovieInfo';

// ############################################################

export default function MovieDetails() {
  const { movieId } = useParams();

  const location = useLocation();
  const backLink = location.state?.from ?? '/movies';

  const [movieData, setMovieData] = useState(null);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let cancel;

    async function getMovieData() {
      try {
        setError('');
        setIsLoading(true);

        const response = await axios.get('/movie/' + movieId, {
          cancelToken: new axios.CancelToken(c => (cancel = c)),
        });

        setMovieData(response.data);
      } catch ({ message }) {
        if (message !== 'canceled') {
          setError(message);
        }
      } finally {
        setIsLoading(false);
      }
    }

    getMovieData();

    return () => cancel();
  }, [movieId]);

  if (!movieData) return;

  return (
    <>
      <Link to={backLink}>Go back</Link>
      <br />
      <br />
      {isLoading && <div>Loading...</div>}

      {error && <div>{error}</div>}

      {movieData && !isLoading && (
        <>
          <MovieInfo data={movieData} />

          <hr />
          <p>Additional information</p>
          <ul>
            <li>
              <Link to="cast" state={{ from: backLink }}>
                Cast
              </Link>
            </li>
            <li>
              <Link to="reviews" state={{ from: backLink }}>
                Reviews
              </Link>
            </li>
          </ul>

          <hr />
          <Outlet />
        </>
      )}
    </>
  );
}
