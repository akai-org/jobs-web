import React from 'react';
import theme from '../styles/theme';
import { ThemeProvider } from 'styled-components';

export default function(tree) {
  return () => (
    <ThemeProvider theme={theme} >
      {tree}
    </ThemeProvider>
  );
}
