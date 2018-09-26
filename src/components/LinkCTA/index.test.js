import React from 'react';
import ReactDOM from 'react-dom';
import LinkCTA from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LinkCTA />, div);
  ReactDOM.unmountComponentAtNode(div);
});
