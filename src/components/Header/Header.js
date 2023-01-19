import { useSelector } from 'react-redux';
import { selectAuthIsLoggedIn } from 'redux/auth/authSelectors';
import AuthNav from './AuthNav';
import UserMenu from './UserMenu';
import UserNav from './UserNav';
import { ReactComponent as Logo } from '../../assets/image/header/logo-svg.svg';
import { ReactComponent as LogoText } from '../../assets/image/header/Group 18.svg';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Box,
  Divider,
  IconButton,
  Stack,
  Toolbar,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import ModalMenu from 'components/Menu/Menu';

const Header = () => {
  const isLoggedIn = useSelector(selectAuthIsLoggedIn);
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };

  // console.log(open);
  // console.log(anchorEl);

  return (
    <>
      <AppBar
        position="static"
        sx={{
          minWidth: '100%',
          backgroundColor: 'transparent',
          boxShadow: { lg: 'none' },
          paddingTop: { lg: '131px' },
        }}
      >
        <Toolbar
          sx={{
            justifyContent: {
              xs: 'space-between',
              lg: isLoggedIn ? 'space-between' : 'start',
            },
          }}
        >
          <Stack
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            spacing={2}
            sx={{
              width: { md: '100%', lg: 'auto' },
              justifyContent: { md: 'space-between', lg: 'flex-start' },
            }}
          >
            <Link
              to="/"
              style={{
                marginRight: 'auto',
              }}
            >
              <Stack direction={'row'} alignItems="center" spacing={2}>
                <Logo />
                <Box
                  sx={{
                    display: { xs: isLoggedIn ? 'flex' : 'none', md: 'flex' },
                  }}
                >
                  <LogoText />
                </Box>
              </Stack>
            </Link>
            {!isLoggedIn && (
              <Box sx={{ display: { xs: 'none', lg: 'flex' } }}>
                <Divider
                  orientation="vertical"
                  variant="middle"
                  flexItem
                  sx={{ mr: '20px' }}
                />
                <AuthNav />
              </Box>
            )}

            {isLoggedIn && (
              <Box sx={{ display: { xs: 'none', lg: 'flex' } }}>
                <Divider
                  orientation="vertical"
                  variant="middle"
                  flexItem
                  sx={{ mr: '20px' }}
                />
                <UserNav />
              </Box>
            )}
            {!isLoggedIn && (
              <Box sx={{ display: { xs: 'flex', lg: 'none' } }}>
                <AuthNav />
              </Box>
            )}
          </Stack>
          <Stack direction={'row'} spacing={3}>
            {isLoggedIn && (
              <UserMenu styles={{ xs: 'none', md: 'flex', lg: 'none' }} />
            )}
            {isLoggedIn && (
              <>
                <IconButton
                  size="large"
                  color="blue"
                  aria-label="menu"
                  sx={{ m: 0, p: 0, display: { sm: 'flex', lg: 'none' } }}
                  id="basic-button"
                  aria-controls={open ? 'basic-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  onClick={handleClick}
                >
                  <MenuIcon />
                </IconButton>
                {open && (
                  <ModalMenu
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    open={open}
                  >
                    <UserNav handleClose={handleClose}></UserNav>
                  </ModalMenu>
                )}
              </>
            )}
          </Stack>
        </Toolbar>
      </AppBar>
      {isLoggedIn && <UserMenu styles={{ md: 'none' }} />}
    </>
  );
};

export default Header;
