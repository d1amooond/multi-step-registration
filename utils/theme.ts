'use client';

import { createTheme } from '@mui/material/styles';

export const COLORS = {
  PRIMARY: '#3f51b5',
  PRIMARY_LIGHT: '#757de8',
  PRIMARY_DARK: '#002984',
  SECONDARY: '#f50057',
  SECONDARY_LIGHT: '#ff4081',
  SECONDARY_DARK: '#c51162',
  GRAY: '#f5f5f5',
  WHITE: '#fff',
  BLACK: '#000',
};

export const theme = createTheme({
  palette: {
    primary: {
      main: COLORS.PRIMARY,
      light: COLORS.PRIMARY_LIGHT,
      dark: COLORS.PRIMARY_DARK,
    },
    secondary: {
      main: COLORS.SECONDARY,
      light: COLORS.SECONDARY_LIGHT,
      dark: COLORS.SECONDARY_DARK,
    },
    background: {
      default: COLORS.GRAY,
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h5: {
      fontWeight: 600,
    },
    button: {
      textTransform: 'none',
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: '0px 3px 15px rgba(0, 0, 0, 0.1)',
        },
      },
    },
  },
});
