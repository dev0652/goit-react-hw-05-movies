import React from 'react';
import { imagePath, imagePath2x, backdropPath2x } from 'imagePaths';
import { MovieDetailsWrapper } from './MovieInfo.styled';

// https://image.tmdb.org/t/p/w600/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg

export default function MovieInfo({ data }) {
  const { title, poster_path, overview, genres, vote_average, backdrop_path } =
    data;

  return (
    <MovieDetailsWrapper bgLink={`${backdropPath2x + backdrop_path}`}>
      <div>
        <img
          src={imagePath + poster_path}
          srcSet={`${imagePath + poster_path} 1x, ${
            imagePath2x + poster_path
          } 2x`}
          alt={`Poster of ${title}`}
        ></img>
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
