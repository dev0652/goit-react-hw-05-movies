import { Suspense } from 'react';
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

      <Suspense fallback={<div>Loading...</div>}>
        <main>
          <Outlet />
        </main>
      </Suspense>
    </div>
  );
}
