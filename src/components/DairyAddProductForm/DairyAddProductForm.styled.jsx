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
    background-color: transparent;

    .MuiInputBase-root {
      background-color: white;

      ::before {
        border-color: #e0e0e0;
      }
    }
  }
`;
