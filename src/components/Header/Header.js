import { lazy } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectAuthIsLoggedIn } from 'redux/auth/authSelectors';
import UserMenu from './UserMenu';

const AuthNav = lazy(() => import('./AuthNav'));
const UserNav = lazy(() => import('./UserNav'));

const Header = () => {
  const isLoggedIn = useSelector(selectAuthIsLoggedIn);
  return (
    <div>
      <nav>
        <Link to="/">Logo</Link>
        {!isLoggedIn && <AuthNav />}
        {isLoggedIn && <UserNav />}
      </nav>

      {isLoggedIn && <UserMenu />}
    </div>
  );
};

export default Header;
