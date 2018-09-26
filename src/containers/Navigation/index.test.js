import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Navigation />, div);
  ReactDOM.unmountComponentAtNode(div);
});
