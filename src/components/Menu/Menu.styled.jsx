import { Menu } from '@mui/material';
import styled from 'styled-components';

export const MenuStyled = styled(Menu)`
  .MuiPaper-root {
    /* max-height: 100%;
    min-height: 90%;
    min-width: 100vw; */
    /* top: 60px;
    left: 0;
    margin-top: 80px;
    margin-left: 16px; */
    background-color: #264061;
    box-shadow: none;
    background-color: inherit;
    top: 10%;
    left: 25%;
  }
  div.MuiPaper-root,
  .MuiPaper-elevation,
  .MuiPaper-rounded,
  .MuiPaper-elevation1,
  .MuiPaper-root,
  .MuiMenu-paper,
  .MuiPaper-elevation,
  .MuiPaper-rounded,
  .MuiPaper-elevation8,
  .MuiPopover-paper {
    top: 10%;
    left: 25%;
    @media screen and (min-width: 1280px) {
      top: 10%;
      left: 25%;
    }
  }

  .MuiList-root {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  /* .MuiPopover-paper {
    margin: 0;
    top: 0;
    margin-left: 0;
    margin-top: 65px;
  } */
  .MuiMenuItem-root {
    color: white;
  }
`;
