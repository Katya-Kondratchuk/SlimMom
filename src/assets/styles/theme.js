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
    h6: {
      fontFamily: 'Verdana',
      fontWeight: 700,
      fontSize: 26,
      color: '#0C121A',
      lineHeight: 1.4,
    },
  },
});
