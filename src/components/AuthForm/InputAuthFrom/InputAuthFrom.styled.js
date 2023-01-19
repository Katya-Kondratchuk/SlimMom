import { styled, TextField } from '@mui/material';

export const InputStyled = styled(TextField)`
  width: 280px;
  @media screen and (min-width: 768px) {
    width: 240px;
  }
`;
