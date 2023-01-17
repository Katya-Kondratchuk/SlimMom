import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectAuthIsLoggedIn } from 'redux/auth/authSelectors';
import AuthNav from './AuthNav';
import UserMenu from './UserMenu';
import UserNav from './UserNav';

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
