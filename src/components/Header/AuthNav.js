import { Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

const AuthNav = () => {
  return (
    <>
      <Typography variant="h6" component="div" sx={{ mr: 4 }}>
        <NavLink style={{ textDecoration: 'none' }} to="/login">
          Login
        </NavLink>
      </Typography>
      <Typography variant="h6" component="div">
        <NavLink style={{ textDecoration: 'none' }} to="/registration">
          Registration
        </NavLink>
      </Typography>
    </>
  );
};

export default AuthNav;
