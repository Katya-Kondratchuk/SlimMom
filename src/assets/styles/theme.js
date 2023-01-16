import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#212121',
      white: '#FFFFFF',
      grey: '#9B9FAA',
    },
    accent: '#FC842D',
    secondary: {
      main: '#264061',
    },
  },
  typography: {
    fontFamily: ['Verdana'].join(','),
    h2: {
      fontFamily: 'Verdana',
      fontWeight: 700,
      fontSize: 26,
      color: '#0C121A',
      lineHeight: 1.4,
      textAlign: 'center',
      display: 'block',
      marginBottom: 20,
    },
    h3: {
      fontFamily: 'Verdana',
      fontStyle: 'normal',
      fontWeight: 700,
      fontSize: 48,
      lineHeight: 1.2,
      textAlign: 'center',
      color: '#264061',
      marginBottom: 44,
    },
    subtitle1: {},
    h4: {
      fontFamily: 'Verdana',
      fontStyle: 'normal',
      fontWeight: 700,
      fontSize: 14,
      lineHeight: 1.2,
      // letter-spacing: 0.04em;
      color: '#212121',
      marginBottom: 20,
    },
  },
});
