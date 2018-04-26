import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Icon from 'material-ui/Icon';
import Button from 'material-ui/Button';

const styles = theme => ({
  root: {
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
});

function IconButton(props) {
  const { classes, icon, label, onClick } = props;
  return (
    <Button className={classes.button}
      variant="raised"
      color="primary"
      onClick={onClick}>
    <Icon className={classes.leftIcon}>{icon}</Icon>
      {label}
  </Button>

  );
}

IconButton.propTypes = {
  classes: PropTypes.object.isRequired,
  icon: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};

IconButton.defaultProps = {
  icon: 'star',
}

export default withStyles(styles)(IconButton);