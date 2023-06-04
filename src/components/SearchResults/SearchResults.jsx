import { Link } from 'react-router-dom';

export default function SearchResults({ data }) {
  return (
    <ul>
      {data.map(({ id, title, release_date }) => (
        <li key={id}>
          <Link to={`/movies/${id}`}>
            {title} ({release_date.slice(0, 4)})
          </Link>
        </li>
      ))}
    </ul>
  );
}
