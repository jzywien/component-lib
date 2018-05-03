import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import IconButton from '../src/IconButton';

storiesOf('IconButton', module)
  .add('default', withInfo(`
  description or documentation about my component, supports markdown

  ~~~js
  <IconButton icon='star' label='Test'/>
  ~~~

  `)(() => (
    <IconButton icon='star' label='Test' onClick={(event) => {alert('Button Was Clicked!')}}/>
  )))
  .add('hide icon', withInfo(`
  description or documentation about my component, supports markdown

  ~~~js
  <IconButton icon='star' label='Test' showIcon={false}/>
  ~~~

  `)(() => (
    <IconButton label='Test' onClick={(event) => {alert('Button Was Clicked!')}}/>
  )));
