import { Link } from 'react-router-dom';

export default function SearchResults({ data, query }) {
  return (
    <ul>
      {data.map(({ id, title, release_date = null }) => {
        const year = release_date ? `(${release_date.slice(0, 4)})` : null;

        return (
          <li key={id}>
            <Link
              to={`/movies/${id}`}
              state={{ from: `/movies?query=${query}` }}
            >
              {title} {year}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
