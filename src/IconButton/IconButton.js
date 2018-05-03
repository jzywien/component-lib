import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-md';
import styled from 'styled-components';
import './IconButton.scss';

class IconButton extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    icon: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func,
  }

  render() {
    const { className, classes, icon, label, onClick } = this.props;
    return (
      <Button className={`IconButton ${className}`} onClick={onClick} raised primary iconClassName={'material-icons'} iconChildren={!!icon && icon}>
        {label}
      </Button>
    );
  }
}

export default IconButton;
