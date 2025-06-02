import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#0aa146',
      paper: '#c2a39a',
    },
    primary: {
      main: '#8b5e48',
    },
    text: {
      primary: '#4d3b30',
      secondary: '#6f5547',
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#0a3007',
      paper: '#001600',
    },
    primary: {
      main: '#0f4d23',
    },
    text: {
      primary: '#c2e1c8',
      secondary: '#8bb598',
    },
  },
});

