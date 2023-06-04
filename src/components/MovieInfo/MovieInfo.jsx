import { MovieDetailsWrapper } from './MovieInfo.styled';

import { imageBaseURL } from 'api';

// ############################################################

export default function MovieInfo({ data }) {
  const {
    title,
    poster_path = null,
    overview,
    genres,
    vote_average,
    backdrop_path,
  } = data;

  return (
    <MovieDetailsWrapper bgLink={`${imageBaseURL}w1280${backdrop_path}`}>
      <div>
        {poster_path && (
          <img
            src={`${imageBaseURL}w342${poster_path}`}
            srcSet={`${imageBaseURL}w342${poster_path} 1x, ${imageBaseURL}w500${poster_path} 2x`}
            alt={`Poster of ${title}`}
          />
        )}
      </div>
      <div>
        <h2>{title}</h2>
        <p>User score: {Math.round(vote_average * 10)}%</p>

        <h3>Overview</h3>
        <p>{overview}</p>

        <h3>Genres</h3>
        <p>{genres.map(genre => genre.name).join(', ')}</p>
      </div>
    </MovieDetailsWrapper>
  );
}
