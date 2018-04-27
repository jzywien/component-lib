import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import IconButton from '../src/IconButton';
import SimpleExpansionPanel from '../src/SimpleExpansionPanel';
import TextField from 'react-md/lib/TextFields/TextField';
import { withInfo } from '@storybook/addon-info';
import './index.scss';


storiesOf('IconButton', module)
  .add('default', withInfo(`
  description or documentation about my component, supports markdown

  ~~~js
  <IconButton icon='star' label='Test'/>
  ~~~

  `)(() => (
    <IconButton icon='star' label='Test' onClick={(event) => {alert('Button Was Clicked!')}}/>
  )));

storiesOf('SimpleExpansionPanel', module)
  .add('default', withInfo(`
  description or documentation about my component, supports markdown

  `)(() => (
    <SimpleExpansionPanel icon="star" title="Sample Title" count="3" classes={{
    }}>
      Content!
    </SimpleExpansionPanel>
  )))
  .add('themed panel', withInfo(`
  description or documentation about my component, supports markdown

  `)(() => (
    <div>
    <SimpleExpansionPanel icon="subject" title="Call Reasons" count="2" headerClassName="green-header" contentClassName="green-content">
      <TextField label="Call Reason" placeholder="Choose Call Reason" />
    </SimpleExpansionPanel>
    <SimpleExpansionPanel icon="note_add" title="Call Notes" count="5" headerClassName="blue-header" contentClassName="blue-content">
      <textarea style={{width: '100%', minHeight: '250px'}}></textarea>
      <IconButton icon='add_circle' label='Save Note'/>

    </SimpleExpansionPanel>
    </div>

  )));