import { MenuStyled } from './Menu.styled';

export default function Menu({ anchorEl, handleClose, open, children }) {
  return (
    <MenuStyled
      id="basic-menu"
      anchorEl={anchorEl}
      open={open}
      onBlur={handleClose}
      onClick={handleClose}
      onClose={handleClose}
      MenuListProps={{
        'aria-labelledby': 'basic-button',
      }}
    >
      {children}
    </MenuStyled>
  );
}
