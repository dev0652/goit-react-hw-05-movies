import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import axios from 'axios';
import 'api';
import { ReviewAuthor, ReviewText } from './Reviews.styled';

// ############################################################

export default function Reviews() {
  const { movieId } = useParams();

  const [reviews, setReviews] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let cancel;

    // GET 'https://api.themoviedb.org/3/movie/603692/reviews?language=en-US&page=1'

    async function getReviews() {
      try {
        setError(null);
        setIsLoading(true);

        const response = await axios.get(`/movie/${movieId}/reviews`, {
          cancelToken: new axios.CancelToken(c => (cancel = c)),
        });

        setReviews(response.data.results);
      } catch ({ message }) {
        if (message !== 'canceled') {
          setError(message);
        }
      } finally {
        setIsLoading(false);
      }
    }

    getReviews();

    return () => cancel();
  }, [movieId]);

  if (!reviews) return;

  return (
    <>
      <h2>Reviews</h2>
      {reviews.length === 0 && !isLoading && (
        <div>There are no reviews for this movie yet. </div>
      )}

      {isLoading && <div>Loading...</div>}

      {error && <div>{error}</div>}

      {reviews && !isLoading && (
        <div>
          <ul>
            {reviews.map(({ id, author, content }) => (
              <li key={id}>
                <div>
                  <ReviewAuthor>Author: {author}</ReviewAuthor>
                  <ReviewText>{content}</ReviewText>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
