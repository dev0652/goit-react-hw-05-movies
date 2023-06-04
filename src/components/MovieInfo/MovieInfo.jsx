import {
  Image,
  MovieDetailsWrapper,
  Score,
  SecondaryText,
  Year,
} from './MovieInfo.styled';

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
    release_date = null,
  } = data;

  const year = release_date ? `(${release_date.slice(0, 4)})` : null;

  const score = Math.round(vote_average * 10);

  return (
    <MovieDetailsWrapper bgLink={`${imageBaseURL}w1280${backdrop_path}`}>
      <div>
        {poster_path && (
          <Image
            src={`${imageBaseURL}w342${poster_path}`}
            srcSet={`${imageBaseURL}w342${poster_path} 1x, ${imageBaseURL}w500${poster_path} 2x`}
            alt={`Poster of ${title}`}
            // width="250"
          />
        )}
      </div>
      <div>
        <h2>
          {title} <Year>{year}</Year>{' '}
        </h2>
        <p>
          User score: <Score value={score}>{score}</Score>%
        </p>

        <h3>Overview</h3>
        <SecondaryText>{overview}</SecondaryText>

        <h3>Genres</h3>
        <SecondaryText>
          {genres.map(genre => genre.name).join(', ')}
        </SecondaryText>
      </div>
    </MovieDetailsWrapper>
  );
}
