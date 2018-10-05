import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from './index';
import wrapTheme from '../../utils/wrapTheme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const ThemedHomePage = wrapTheme(<HomePage />);
  ReactDOM.render(<ThemedHomePage />, div);
  ReactDOM.unmountComponentAtNode(div);
});
