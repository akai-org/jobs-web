import React from 'react';
import theme from '../styles/theme';
import { BrowserRouter as Router, Route } from 'react-router-dom';

export default function(tree) {
  return () => (
    <Router theme={theme} >
      {tree}
    </Router>
  );
}
