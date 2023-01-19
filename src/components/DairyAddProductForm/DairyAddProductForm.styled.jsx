import { Fab, TextField } from '@mui/material';

import styled from 'styled-components';

export const FabStyled = styled(Fab)`
  &.MuiFab-root {
    background-color: #fc842d;
    color: #fff;
    margin-left: 30px;

    &:hover {
      background-color: #fc2d2d;
    }
  }
`;

export const FieldStyled = styled(TextField)`
  &.MuiTextField-root {
    margin: 0 24px;
    width: 240px;

    /* .MuiInputBase-root.Mui-focused {
      background-color: #1acebf26;
    } */
  }
`;
