import { lazy } from 'react';

const AuthNav = lazy(() => import('./AuthNav'));
const UserNav = lazy(() => import('./UserNav'));

const Header = () => {
  return (
    <div>
      <nav>
        <AuthNav />
        <UserNav />
      </nav>
    </div>
  );
};

export default Header;
