import {
  Image,
  ListItem,
  Meta,
  ReleaseDate,
  StyledLink,
  Title,
  Year,
} from './MovieListitem.styled';

import { imageBaseURL } from 'api';

// ###################################################

export default function MovieListitem({
  movieData: { id, title, poster_path = null, release_date = null },
  query = null,
  isDateAYear = false,
}) {
  const getYear = date => (date ? `(${release_date.slice(0, 4)})` : null);
  const year = isDateAYear ? getYear(release_date) : null;
  const from = query ? { from: `/movies?query=${query}` } : '/';

  return (
    <ListItem>
      <StyledLink to={`/movies/${id}`} state={from}>
        <div>
          <Image
            src={
              poster_path
                ? `${imageBaseURL}w185${poster_path}`
                : 'https://fakeimg.pl/175x260?text=No+image&font=noto'
            }
            // srcSet={`${imageBaseURL}w185${profile_path} 1x, ${imageBaseURL}w185${profile_path} 2x`}
            alt={title}
          />

          <Meta>
            <Title>{title}</Title>
            {year ? (
              <Year>{year}</Year>
            ) : (
              <ReleaseDate>{release_date}</ReleaseDate>
            )}
          </Meta>
        </div>
      </StyledLink>
    </ListItem>
  );
}
