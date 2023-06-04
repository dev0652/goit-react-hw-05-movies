import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import axios from 'axios';
import 'api';
import { imageBaseURL } from 'api';

// ############################################################

export default function Cast() {
  const { movieId } = useParams();

  const [credits, setCredits] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let cancel;

    // GET 'https://api.themoviedb.org/3/movie/603692/credits?language=en-US'

    async function getCredits() {
      try {
        setError(null);
        setIsLoading(true);

        const response = await axios.get(`/movie/${movieId}/credits`, {
          cancelToken: new axios.CancelToken(c => (cancel = c)),
        });

        setCredits(response.data);
      } catch ({ message }) {
        if (message !== 'canceled') {
          setError(message);
        }
      } finally {
        setIsLoading(false);
      }
    }

    getCredits();

    return () => cancel();
  }, [movieId]);

  if (!credits) return;

  return (
    <>
      {isLoading && <div>Loading...</div>}

      {error && <div>{error}</div>}

      {credits && !isLoading && (
        <div>
          <h2>Cast</h2>
          <ul>
            {credits.cast.map(({ id, name, character, profile_path }) => (
              <li key={id}>
                <div>
                  <img
                    src={`${imageBaseURL}w185${profile_path}`}
                    // srcSet={`${imageBaseURL}w185${profile_path} 1x, ${imageBaseURL}w185${profile_path} 2x`}
                    alt={name}
                  />
                  <p>{name}</p>
                  <p>{character}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
