import { List } from '@mui/material';

import styled from 'styled-components';

export const ListStyled = styled(List)`
  ::-webkit-scrollbar {
    width: 6px;
    background: #f0f1f3;
  }
  ::-webkit-scrollbar-track {
    border-radius: 6px;
  }
  ::-webkit-scrollbar-thumb {
    background: #264061;
    border-radius: 6px;
  }

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
  font-family: 'Verdana';
  color: #070730a7;
  margin-left: 40px;
  margin-top: 55px;
  width: 550px;
`;
