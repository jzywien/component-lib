import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import IconButton from '../src/IconButton';
import SimpleExpansionPanel from '../src/SimpleExpansionPanel';
import { withStyles, MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import { withInfo } from '@storybook/addon-info';

const styles = theme => ({
  panel: {
    width: '50%'
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
});

const greenTheme = createMuiTheme({
  palette: {
    primary: {
      light: 'rgb(212,222,204)',
      main: 'rgb(103,125,79)',
      contrastText: '#fff'
    }
  }
});

storiesOf('IconButton', module)
  .add('default', withInfo(`
  description or documentation about my component, supports markdown

  ~~~js
  <IconButton icon='star' label='Test'/>
  ~~~

  `)(() => (
    <IconButton icon='star' label='Test'/>
  )));

storiesOf('SimpleExpansionPanel', module)
  .add('default', () => (
    <SimpleExpansionPanel icon="star" title="Sample Title" count="3" classes={{
    }}>
      Content!
    </SimpleExpansionPanel>
  ))
  .add('themed panel', () => (
    <MuiThemeProvider theme={greenTheme}>
      <SimpleExpansionPanel icon="star" title="Sample Title" count="5" classes={{
      }}>
        Content!
      </SimpleExpansionPanel>
    </MuiThemeProvider>

  ));