// import { Link } from 'react-router-dom';
import {
  Image,
  List,
  ListItem,
  Meta,
  StyledLink,
  Title,
  Year,
} from './SearchResults.styled';
import { imageBaseURL } from 'api';

export default function SearchResults({ data, query }) {
  if (query === '') return <div>Empty query</div>;

  return (
    <List>
      {data.map(({ id, title, poster_path = null, release_date = null }) => {
        const year = release_date ? `(${release_date.slice(0, 4)})` : null;

        return (
          <ListItem key={id}>
            <StyledLink
              to={`/movies/${id}`}
              state={{ from: `/movies?query=${query}` }}
            >
              <div>
                <Image
                  src={`${imageBaseURL}w185${poster_path}`}
                  // srcSet={`${imageBaseURL}w185${profile_path} 1x, ${imageBaseURL}w185${profile_path} 2x`}
                  alt={title}
                />

                <Meta>
                  <Title>{title}</Title>
                  {release_date && <Year>{year}</Year>}
                </Meta>
              </div>
            </StyledLink>
          </ListItem>
        );
      })}
    </List>
  );
}
