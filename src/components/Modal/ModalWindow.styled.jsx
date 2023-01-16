import { Box } from '@mui/material';
import styled from 'styled-components';

export const BoxStyled = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400;
  background-color: white;
  box-shadow: 24;
  padding: 64px 154px;
`;