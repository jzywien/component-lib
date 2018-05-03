import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ExpansionPanel from 'react-md/lib/ExpansionPanels/ExpansionPanel';
import styled, { css } from 'styled-components';

const StyledExpansionPanel = styled(ExpansionPanel)`
  .md-panel-header {
    background-color: ${props => props.theme.expansion.header.backgroundColor};
    color: rgb(126,126,126);
    .md-text {
      color: ${props => props.theme.expansion.header.textColor};
      font-weight: bold;
    }
    .md-icon {
      color: ${props => props.theme.icon.color};
    }
    .md-collapser {
      color: ${props => props.theme.expansion.header.collapserColor};
    }
  }
  .md-panel-content {
    padding: 2em;
    background-color: ${props => props.theme.expansion.content.backgroundColor}
  }

  .count {
    font-size: .75em;
    border-radius: 50%;
    background-color: ${props => props.theme.expansion.header.textColor};
    color: ${props => props.theme.expansion.header.backgroundColor};
    width: 1.5em;
    height: 1.5em;
    margin-left: 1em;
    text-align: center;
  }
`;
StyledExpansionPanel.defaultProps = {
  theme: {
    icon: {
      color: 'rgb(137,144,189)'
    },
    expansion: {
      header: {
        collapserColor: '#333',
        backgroundColor: 'rgb(246,246,246)',
        textColor: 'rgb(100,100,100)'
      },
      content: {
        backgroundColor: 'white'
      }
    }
  }
};

export default StyledExpansionPanel;