import { MenuItem } from '@mui/material';
import { NavLinkMenu } from './AuthNav.styled';

const UserNav = ({ handleClose, changeStyle }) => {
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
        <NavLinkMenu
          style={{
            textDecoration: 'none',
          }}
          to="/diary"
          onClick={handleClose}
        >
          Diary
        </NavLinkMenu>
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
        <NavLinkMenu
          style={{
            textDecoration: 'none',
          }}
          to="/calculator"
          onClick={handleClose}
        >
          Calculator
        </NavLinkMenu>
      </MenuItem>
    </>
  );
};

export default UserNav;
