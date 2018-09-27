import React from 'react';
import ReactDOM from 'react-dom';
import Container from './index';
import wrapTheme from '../../utils/wrapTheme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const ThemedContainer = wrapTheme(<Container />);
  ReactDOM.render(<ThemedContainer />, div);
  ReactDOM.unmountComponentAtNode(div);
});
