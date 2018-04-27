import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-md';

import './IconButton.scss';


function IconButton(props) {
  const { classes, icon, label, onClick } = props;
  return (
    <Button className='IconButton' onClick={onClick} raised primary iconClassName={'material-icons'} iconChildren={icon}>
      {label}
    </Button>
  );
}

IconButton.propTypes = {
  classes: PropTypes.object.isRequired,
  icon: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

IconButton.defaultProps = {
  icon: 'star',
}

export default IconButton;
