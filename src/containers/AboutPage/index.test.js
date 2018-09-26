import React from 'react';
import ReactDOM from 'react-dom';
import AboutPage from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AboutPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});
