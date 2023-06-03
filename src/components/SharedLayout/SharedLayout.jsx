import { Outlet } from 'react-router-dom';

import { Header } from './SharedLayout.styled';
import { StyledNavLink } from './SharedLayout.styled';

// ##############################

export default function SharedLayout() {
  return (
    <div>
      <Header>
        <nav>
          <StyledNavLink to="/" end>
            Home
          </StyledNavLink>
          <StyledNavLink to="/movies">Movies</StyledNavLink>
        </nav>
      </Header>

      <main>
        <Outlet />
      </main>
    </div>
  );
}
