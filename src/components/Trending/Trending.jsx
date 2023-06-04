import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';

import axios from 'axios';
import 'api';
import { imageBaseURL } from 'api';

import {
  Image,
  List,
  ListItem,
  Meta,
  ReleaseDate,
  StyledLink,
  Title,
} from './Trending.styled';

// ###### Home ####################################

export default function Trending() {
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

      {movies && (
        <List>
          {movies.map(
            ({ id, title, poster_path = null, release_date = null }) => (
              <ListItem key={id}>
                <StyledLink to={`/movies/${id}`}>
                  <div>
                    <Image
                      src={`${imageBaseURL}w185${poster_path}`}
                      // srcSet={`${imageBaseURL}w185${profile_path} 1x, ${imageBaseURL}w185${profile_path} 2x`}
                      alt={title}
                    />

                    <Meta>
                      <Title>{title}</Title>
                      {release_date && (
                        <ReleaseDate>{release_date}</ReleaseDate>
                      )}
                    </Meta>
                  </div>
                </StyledLink>
              </ListItem>
            )
          )}
        </List>
      )}
    </>
  );
}
