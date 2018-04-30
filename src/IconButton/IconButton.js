import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-md';
import styled from 'styled-components';

class ButtonComponent extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    icon: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    showIcon: PropTypes.bool
  }
  
  static defaultProps = {
    icon: 'star',
    showIcon: true
  }

  render() {
    const { className, classes, icon, label, onClick, showIcon } = this.props;
    return (
      <Button className={`IconButton ${className}`} onClick={onClick} raised primary iconClassName={'material-icons'} iconChildren={showIcon && icon}>
        {label}
      </Button>
    );
  }
}
const IconButton = styled(ButtonComponent)`
  color: red;
  .md-icon-text {
    font-weight: bold;
    &:last-child {
      padding-left: 4px;
    }
    text-align: center;
  }
`;
export default IconButton;
