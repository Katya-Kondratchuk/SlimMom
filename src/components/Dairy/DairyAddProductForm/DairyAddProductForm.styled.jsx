import { Fab, TextField } from '@mui/material';

import styled from 'styled-components';

export const FabStyled = styled(Fab)`
  &.MuiFab-root {
    background-color: #fc842d;
    color: #fff;
    margin-left: 30px;
    box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

    @media screen and (max-width: 767px) {
      margin: 0 auto;
      margin-top: 60px;
      width: 48px;
      height: 48px;
    }

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

    @media screen and (max-width: 767px) {
      width: 280px;
      margin: 0;
      margin-top: 61px;
    }

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
    @media screen and (max-width: 767px) {
      bottom: 77px;
    }
  }

  div.wrapper {
    display: block;
    @media screen and (max-width: 767px) {
      display: none;
    }
  }

  .MuiInputLabel-root {
    color: #9b9faa;
    font-weight: 700;
    @media screen and (max-width: 767px) {
      font-size: 14px;
    }
  }
`;
