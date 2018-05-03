import React, { Component } from 'react';
import PropTypes from 'prop-types';
import StyledExpansionPanel from './StyledExpansionPanel';
import styled, { css } from 'styled-components';

class SimpleExpansionPanel extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    classes: PropTypes.object.isRequired,
    className: PropTypes.string,
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
  };
  static defaultProps = {
    icon: 'star',
  }

  render() {
    const { className, classes, children, icon, title, count, showCount, headerClassName, contentClassName, lightTheme } = this.props;

    const classNames = `SimpleExpansionPanel ${className}`;
    return (
      <StyledExpansionPanel className={classNames} label={
          <div style={{display: 'flex', alignItems: 'center'}
          }>
            <i class="md-icon material-icons" style={{marginRight: '5px'}}>{icon}</i>
            {title}
            {!!count &&
              <span className="count">{count}</span>
            }
          </div>
        }  defaultExpanded footer={null}>
        {children}
      </StyledExpansionPanel>
    );
  }
}

export default SimpleExpansionPanel;
