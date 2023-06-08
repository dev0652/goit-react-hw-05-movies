import MovieListitem from 'components/MovieListitem/MovieListitem';
import { List } from './MovieList.styled';

export default function MovieList({ data, query, isDateAYear }) {
  return (
    <List>
      {data.map(element => (
        <MovieListitem
          key={element.id}
          movieData={element}
          isDateAYear={isDateAYear}
          query={query}
        />
      ))}
    </List>
  );
}
