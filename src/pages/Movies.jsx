// import MovieDetails from 'components/MovieDetails/MovieDetails';
import { Link, Outlet } from 'react-router-dom';

export default function Movies() {
  return (
    <>
      <Link to="/">Go back</Link>
      {/* <MovieDetails/> */}

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
