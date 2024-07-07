import React from 'react';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';

const theme = createTheme({
  palette: {
    background: {
      default: '#f4f6f8',
    },
  },
  typography: {
    h4: {
      fontWeight: 600,
    },
  },
});

const CustomThemeProvider = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default CustomThemeProvider;
