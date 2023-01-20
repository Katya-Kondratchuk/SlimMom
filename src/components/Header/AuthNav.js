import { Typography } from '@mui/material';
import { NavLinkAuth } from './AuthNav.styled';

const AuthNav = () => {
  return (
    <>
      <Typography variant="h6" component="div" sx={{ mr: 2 }}>
        <NavLinkAuth to="/login">LOG IN</NavLinkAuth>
      </Typography>
      <Typography variant="h6" component="div">
        <NavLinkAuth to="/registration">REGISTRATION</NavLinkAuth>
      </Typography>
    </>
  );
};

export default AuthNav;
