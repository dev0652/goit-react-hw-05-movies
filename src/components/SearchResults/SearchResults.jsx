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
  return (
    <>
      {data.length === 0 && <div>Sorry, your query returned no matches</div>}

      {data && (
        <List>
          {data.map(
            ({ id, title, poster_path = null, release_date = null }) => {
              const year = release_date
                ? `(${release_date.slice(0, 4)})`
                : null;

              return (
                <ListItem key={id}>
                  <StyledLink
                    to={`/movies/${id}`}
                    state={{ from: `/movies?query=${query}` }}
                  >
                    <div>
                      <Image
                        src={
                          poster_path
                            ? `${imageBaseURL}w185${poster_path}`
                            : 'https://fakeimg.pl/160x240?text=No+image&font=noto'
                        }
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
            }
          )}
        </List>
      )}
    </>
  );
}
