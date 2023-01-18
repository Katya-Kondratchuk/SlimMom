import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { Box, Typography } from '@mui/material';

import BgImgAuthTabl1x from 'assets/images/auth/auth-bg-tabl-1x.png';
import BgImgAuthTabl2x from 'assets/images/auth/auth-bg-tabl-2x.png';
import BgImgAuthDesk1x from 'assets/images/auth/auth-bg-desk-1x.png';
import BgImgAuthDesk2x from 'assets/images/auth/auth-bg-desk-2x.png';

export const LinkyStyled = styled(Link)({
  display: 'block',
  textAlign: 'center',
  boxSizing: 'border-box',
  paddingTop: '13px',
  paddingBottom: '13px',
  border: '1px solid #FC842D',
  borderRadius: 30,
  width: 182,
  height: '44px',
  fontWeight: 700,
  fontSize: '14px',
  lineHeight: 1.2,
  textTransform: 'none',
  color: 'white',
  textDecoration: 'none',
  letterSpacing: '0.04em',
  '&:hover': {
    backgroundColor: '#de9847',
    boxShadow: '0 0 0 0.2rem #edb322',
    color: 'white',
  },
});

export const ButtonStyled = styled(Button)({
  border: '1px solid #FC842D',
  borderRadius: 30,
  width: 182,
  fontWeight: 700,
  fontSize: '14px',
  lineHeight: 1.2,
  textTransform: 'none',
  paddingTop: '13px',
  paddingBottom: '13px',

  '&:hover': {
    backgroundColor: '#de9847',
    boxShadow: '0 0 0 0.2rem #edb322',
  },
});

const Title = styled(Typography)({
  color: '#FC842D',
  fontWeight: 700,
  fontSize: '14px',
  lineHeight: 1.2,
  textTransform: 'uppercase',
  letterSpacing: '0.04em',
  textAlign: 'center',
  marginBottom: '55px',
});

export const TitleStyled = styled(Title)`
  @media screen and (min-width: 768px) {
    text-align: start;
  }
`;

export const AuthWrapper = styled(Box)`
  padding-top: 40px;

  @media screen and (min-width: 768px) {
    padding-top: 160px;
  }
`;

export const BgWrapper = styled(Box)`
  @media screen and (min-width: 768px) {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 70px;
    left: 0;
    z-index: -1;
    background-image: url(${BgImgAuthTabl1x});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: right bottom;
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${BgImgAuthTabl2x});
    }
  }

  @media screen and (min-width: 1200px) {
    top: 0;
    left: 100px;
    background-image: url(${BgImgAuthDesk1x});
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${BgImgAuthDesk2x});
    }
  }
`;