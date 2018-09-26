import React from 'react';
import ReactDOM from 'react-dom';
import ContactPage from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ContactPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});
