import { Typography } from '@mui/material';
import { NavLinkStyled } from './AuthNav.styled';

const AuthNav = () => {
  return (
    <>
      <Typography variant="h6" component="div" sx={{ mr: 2 }}>
        <NavLinkStyled to="/login">LOG IN</NavLinkStyled>
      </Typography>
      <Typography variant="h6" component="div">
        <NavLinkStyled to="/registration">REGISTRATION</NavLinkStyled>
      </Typography>
    </>
  );
};

export default AuthNav;
