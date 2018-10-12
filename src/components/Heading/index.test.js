import React from 'react';
import ReactDOM from 'react-dom';
import Heading from './index';
import wrapTheme from '../../utils/wrapTheme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const ThemedHeading = wrapTheme(<Heading />);
  ReactDOM.render(<ThemedHeading />, div);
  ReactDOM.unmountComponentAtNode(div);
});
