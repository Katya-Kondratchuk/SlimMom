import { Menu } from '@mui/material';
import styled from 'styled-components';

export const MenuStyled = styled(Menu)`
  .MuiMenu-paper {
    max-height: 100%;
    min-height: 90%;
    min-width: 100vw;
    top: 60px;
    left: 0;
    margin-top: 80px;
    margin-left: 16px;
    background-color: #264061;
  }

  .MuiMenuItem-root {
    color: white;
  }
`;
