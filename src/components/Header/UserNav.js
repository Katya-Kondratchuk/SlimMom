import { MenuItem } from '@mui/material';
import { NavLinkStyled } from './AuthNav.styled';

const UserNav = ({ handleClose }) => {
  return (
    <>
      <MenuItem
        onClick={handleClose}
        sx={{
          mr: 4,
          fontWeight: 700,
          fontSize: '14px',
          lineHeight: 1.2,
          letterSpacing: '0.04em',
          textTransform: 'uppercase',
        }}
      >
        <NavLinkStyled style={{ textDecoration: 'none' }} to="/diary">
          Diary
        </NavLinkStyled>
      </MenuItem>
      <MenuItem
        onClick={handleClose}
        sx={{
          mr: 4,
          fontWeight: 700,
          fontSize: '14px',
          lineHeight: 1.2,
          letterSpacing: '0.04em',
          textTransform: 'uppercase',
        }}
      >
        <NavLinkStyled style={{ textDecoration: 'none' }} to="/calculator">
          Calculator
        </NavLinkStyled>
      </MenuItem>
    </>
    // </Box>
  );
};

export default UserNav;
