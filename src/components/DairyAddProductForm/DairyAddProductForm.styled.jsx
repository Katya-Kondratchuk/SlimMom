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
export const FormStyled = styled.form`
  align-items: center;
  display: flex;
  position: relative;

  ::after {
    left: 0;
    bottom: -345px;
    content: '';
    position: absolute;
    right: 0;
    width: 100%;
    z-index: 1;
    height: 50px;
    background: linear-gradient(
      180deg,
      rgb(255 255 255 / 23%) 0%,
      #ffffff 42.19%
    );
  }
`;
