import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import TextField from 'react-md/lib/TextFields/TextField';
import SimpleExpansionPanel from '../src/SimpleExpansionPanel';
import IconButton from '../src/IconButton';
import { ThemeProvider } from 'styled-components';


storiesOf('SimpleExpansionPanel', module)
  .add('default', withInfo(`
  description or documentation about my component, supports markdown

  `)(() => (
    <SimpleExpansionPanel icon="star" title="Sample Title" count="3" classes={{
    }}>
      Content!
    </SimpleExpansionPanel>
  )))
  .add('hidden count', withInfo(`
  description or documentation about my component, supports markdown

  `)(() => (
    <SimpleExpansionPanel icon="star" title="Sample Title" showCount={false} classes={{
    }}>
      Content!
    </SimpleExpansionPanel>
  )))
  .add('themed panel', withInfo(`
  description or documentation about my component, supports markdown

  `)(() => {
    const blueTheme = {
      icon: {
        color: 'white'
      },
      expansion: {
        header: {
          collapserColor: 'white',
          backgroundColor: 'rgb(45,85,137)',
          textColor: 'white'
        },
        content: {
          backgroundColor: 'rgb(195,207,226)'
        }
      }
    };
    return (
      <ThemeProvider theme={blueTheme}>
        <SimpleExpansionPanel icon="note_add" title="Call Notes" count="5">
          <textarea style={{width: '100%', minHeight: '250px'}}></textarea>
          <IconButton icon='add_circle' label='Save Note'/>
        </SimpleExpansionPanel>
      </ThemeProvider>
    );
  }));