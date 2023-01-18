import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';

export const LinkyStyled = styled(Link)({
  display: 'inline-block',
  textAlign: 'center',
  boxSizing: 'border-box',
  paddingTop: '13px',
  paddingBottom: '13px',
  border: '1px solid #FC842D',
  borderRadius: 30,
  width: 182,
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
  marginBottom: '20px',
  marginTop: '60px',
  '&:hover': {
    backgroundColor: '#de9847',
    boxShadow: '0 0 0 0.2rem #edb322',
  },
});

export const TitleStyled = styled(Typography)({
  color: '#FC842D',
  fontWeight: 700,
  fontSize: '14px',
  lineHeight: 1.2,
  textTransform: 'uppercase',
  letterSpacing: '0.04em',
  textAlign: 'center',
  marginTop: '40px',
  marginBottom: '55px',
});
