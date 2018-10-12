import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './index';
import wrapTheme from '../../utils/wrapTheme';
import wrapRouter from '../../utils/wrapRouter';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const ThemedLayout = wrapTheme(<Layout />);
  const RoutedLayout = wrapRouter(<ThemedLayout />);
  ReactDOM.render(<RoutedLayout />, div);
  ReactDOM.unmountComponentAtNode(div);
});
