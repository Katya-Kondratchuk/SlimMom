import { List } from '@mui/material';

import styled from 'styled-components';

export const ListStyled = styled(List)`
  &.MuiList-root {
    margin-top: 40px;
    width: 650px;
    position: relative;
    overflow: auto;
    max-height: 270px;
  }
`;

export const MessageStyled = styled.h2`
  text-align: center;
  font-size: 36px;
  font-weight: 700;
  color: #070730a7;
  margin-left: 40px;
  margin-top: 55px;
  width: 550px;
`;
