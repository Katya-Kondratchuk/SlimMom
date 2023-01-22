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
    margin-left: 20px;
    margin-top: 44px;
    padding: 0;
    width: 650px;
    position: relative;
    overflow: auto;
    max-height: 271px;
    @media screen and (max-width: 767px) {
      margin-top: 12px;
      width: 292px;
      max-height: 220px;
    }
  }
`;

export const MessageStyled = styled.h2`
  text-align: center;
  font-size: 36px;
  font-weight: 700;
  font-family: 'Verdana';
  color: #070730a7;
  margin-left: 60px;
  margin-right: 60px;
  margin-top: 55px;
  width: 550px;
  @media screen and (max-width: 767px) {
    font-weight: 700;
    font-size: 24px;
    line-height: 1.1;
    width: 270px;
    margin: 0 auto;
    margin-top: 35px;
    margin-bottom: 15px;
  }
`;
