import { Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

const AuthNav = () => {
  return (
    <>
      <Typography variant="h6" component="div" sx={{ mr: 4 }}>
        <NavLink
          style={{
            textDecoration: 'none',
            fontWeight: 700,
            fontSize: 14,
            lineHeight: 1.2,
            textSlign: 'right',
            color: '#9B9FAA',
          }}
          to="/login"
        >
          LOG IN
        </NavLink>
      </Typography>
      <Typography variant="h6" component="div">
        <NavLink
          style={{
            textDecoration: 'none',
            fontWeight: 700,
            fontSize: 14,
            lineHeight: 1.2,
            textSlign: 'right',
          }}
          to="/registration"
        >
          REGISTRATION
        </NavLink>
      </Typography>
    </>
  );
};

export default AuthNav;
