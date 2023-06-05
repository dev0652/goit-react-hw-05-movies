import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import axios from 'axios';
import 'api';
import { imageBaseURL } from 'api';
import {
  ActorName,
  As,
  Image,
  ImageWrapper,
  List,
  ListItem,
  Meta,
} from './Cast.styled';

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
      <h2>Cast</h2>
      {credits.length === 0 && !isLoading && (
        <div>Sorry, we have no cast information for this movie. </div>
      )}
      {isLoading && <div>Loading...</div>}

      {error && <div>{error}</div>}

      {credits && !isLoading && (
        <div>
          <List>
            {credits.cast.map(
              ({ id, name, character, profile_path = null }) => (
                <ListItem key={id}>
                  <ImageWrapper>
                    <Image
                      src={
                        profile_path
                          ? `${imageBaseURL}w185${profile_path}`
                          : 'https://fakeimg.pl/120x180?text=No+photo&font=noto'
                      }
                      // srcSet={`${imageBaseURL}w185${profile_path} 1x, ${imageBaseURL}w185${profile_path} 2x`}
                      alt={name}
                    />
                    <Meta>
                      <ActorName>{name}</ActorName>
                      <As>{character}</As>
                    </Meta>
                  </ImageWrapper>
                </ListItem>
              )
            )}
          </List>
        </div>
      )}
    </>
  );
}
