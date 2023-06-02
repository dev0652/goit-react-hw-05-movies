import { Routes, Route } from 'react-router-dom';

import Home from '../../pages/Home';
import Movies from '../../pages/Movies';
import MovieDetails from '../../pages/MovieDetails';
import NotFound from '../../pages/NotFound';

import Cast from '../Cast/Cast';
import Reviews from '../Reviews/Reviews';
import SharedLayout from 'components/SharedLayout/SharedLayout';

// ##############################

export const App = () => {
  return (
    <>
      <Routes>
        {/* Tier 1 */}
        <Route path="/" element={<SharedLayout />}>
          {/* Tier 2 */}
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            {/* Tier 3 */}
            <Route path="cast" element={<Cast />} />

            <Route path="cast" element={<Reviews />} />
            <Route path="*" element={<NotFound />} />
            {/* End of tier 3 */}
          </Route>
          {/* End of tier 2 */}
        </Route>
        {/* End of tier 1 */}
      </Routes>
    </>
  );
};
