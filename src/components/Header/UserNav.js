import { Box, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

const UserNav = () => {
  return (
    <Box sx={{ display: { xs: 'none', lg: 'flex' } }}>
      <Typography variant="h6" component="div" sx={{ mr: 4 }}>
        <NavLink to="/diary">Diary</NavLink>
      </Typography>
      <Typography variant="h6" component="div" sx={{ mr: 4 }}>
        <NavLink to="/calculator">Calculator</NavLink>
      </Typography>
    </Box>
  );
};

export default UserNav;
