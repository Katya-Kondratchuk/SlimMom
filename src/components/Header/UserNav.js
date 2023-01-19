import { MenuItem } from '@mui/material';
import { NavLinkStyled } from './AuthNav.styled';

const UserNav = ({ handleClose }) => {
  return (
    <>
      <MenuItem
        sx={{
          mr: 4,
          fontWeight: 700,
          fontSize: '14px',
          lineHeight: 1.2,
          letterSpacing: '0.04em',
          textTransform: 'uppercase',
        }}
      >
        <NavLinkStyled
          style={{ textDecoration: 'none' }}
          to="/diary"
          onClick={handleClose}
        >
          Diary
        </NavLinkStyled>
      </MenuItem>
      <MenuItem
        sx={{
          mr: 4,
          fontWeight: 700,
          fontSize: '14px',
          lineHeight: 1.2,
          letterSpacing: '0.04em',
          textTransform: 'uppercase',
        }}
      >
        <NavLinkStyled
          style={{ textDecoration: 'none' }}
          to="/calculator"
          onClick={handleClose}
        >
          Calculator
        </NavLinkStyled>
      </MenuItem>
    </>
    // </Box>
  );
};

export default UserNav;
