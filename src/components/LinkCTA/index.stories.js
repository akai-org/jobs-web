import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { StoryInfo } from '../../../.storybook/utils'
import LinkCTA from './index';

const clickStandardLinkAction = action('clickStandardLinkAction');
const clickPrimaryLinkAction = action('clickPrimaryLinkAction');

storiesOf('LinkCTA', module)
  .addWithJSX(
    'standard LinkCTA 1', 
    StoryInfo(`
      this story has access to context 

      ~~~js
        <LinkCTA>
          Standard Link 1
        </LinkCTA>
      ~~~
      `, 
      false,  // true - show inline, false - show button
      true,   // show/hide header
      true    // show/hide component source
    )(() => <LinkCTA onClick={clickStandardLinkAction}>Standard Link 1</LinkCTA>)
  )
  .addWithJSX(
    'standard LinkCTA 2', 
    StoryInfo(`
      this story has access to context

      ~~~js
        <LinkCTA>
          Standard Link 2
        </LinkCTA>
      ~~~
      `, 
      true,   // true - show inline, false - show button
      true,   // show/hide header
      true    // show/hide component source
    )(() => <LinkCTA onClick={clickStandardLinkAction}>Standard Link 2</LinkCTA>)
  )
  .addWithJSX('standard LinkCTA 3', () => getStoryStandardButton())
  .addWithJSX('primary LinkCTA', () => getStoryPrimaryButton());

const getStoryStandardButton = StoryInfo(`
  this story has not access to context, why?

  when context is undefined we don't see header

  ~~~js
    <LinkCTA>
      Standard Link 3
    </LinkCTA>
  ~~~
  `, 
  true,   // true - show inline, false - show button
  true,   // show/hide header
  true    // show/hide component source
)(() => <LinkCTA onClick={clickStandardLinkAction}>Standard Link 3</LinkCTA>);

const getStoryPrimaryButton = () => <LinkCTA primary onClick={clickPrimaryLinkAction}>Primary Link</LinkCTA>;