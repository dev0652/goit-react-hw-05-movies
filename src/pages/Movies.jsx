// import MovieDetails from 'components/MovieDetails/MovieDetails';
import SearchForm from 'components/SearchForm/SearchForm';
import { Link, Outlet } from 'react-router-dom';

export default function Movies() {
  return (
    <>
      <SearchForm />

      {/* <MovieDetails/> */}
      <Link to="/">Go back</Link>
      <hr />
      <p>Additional information</p>

      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>

      <hr />
      <Outlet />
    </>
  );
}
