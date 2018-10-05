import React from 'react';
import ReactDOM from 'react-dom';
import ContactPage from './index';
import wrapTheme from '../../utils/wrapTheme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const ThemedContactPage = wrapTheme(<ContactPage />);
  ReactDOM.render(<ThemedContactPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});
