import { Menu } from '@mui/material';

export default function ModalMenu({ anchorEl, onClose, open, children }) {
  return (
    <Menu
      id="basic-menu"
      anchorEl={anchorEl}
      open={open}
      onClick={onClose}
      onClose={onClose}
      MenuListProps={{
        'aria-labelledby': 'basic-button',
      }}
      sx={{
        maxHeight: '100%',
        minHeight: '90%',
        minWidth: '100vw',
        top: '60px',
        left: 0,
        marginTop: '80px',
        marginLeft: '16px',
        backgroundColor: '#264061',
      }}
    >
      {children}
    </Menu>
  );
}
