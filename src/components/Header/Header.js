import { useSelector } from 'react-redux';
import { selectAuthIsLoggedIn } from 'redux/auth/authSelectors';
import AuthNav from './AuthNav';
import UserMenu from './UserMenu';
import UserNav from './UserNav';
import { ReactComponent as Logo } from '../../assets/image/header/logo-svg.svg';
import { Link } from 'react-router-dom';
import { AppBar, IconButton, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  const isLoggedIn = useSelector(selectAuthIsLoggedIn);
  return (
    <>
      <AppBar
        position="static"
        sx={{
          minWidth: '100%',
          backgroundColor: 'transparent',
          boxShadow: { lg: 'none' },
        }}
      >
        <Toolbar>
          <Link to="/">
            <Logo />
          </Link>
          {isLoggedIn && <UserMenu styles={{ md: 'flex', sm: 'none' }} />}
          {!isLoggedIn && <AuthNav />}
          {isLoggedIn && <UserNav />}

          {isLoggedIn && (
            <IconButton
              size="large"
              // edge="end"
              color="blue"
              aria-label="menu"
              sx={{ mr: 2, display: { sm: 'flex', lg: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>
      {isLoggedIn && <UserMenu styles={{ md: 'none' }} />}
    </>
  );
};

export default Header;
