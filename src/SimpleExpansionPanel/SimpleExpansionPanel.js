import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import ExpansionPanel, {
  ExpansionPanelSummary,
  ExpansionPanelDetails,
} from 'material-ui/ExpansionPanel';
import Icon from 'material-ui/Icon';
import Typography from 'material-ui/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from 'material-ui/Grid';

const styles = theme => ({
  root: {
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
    color: theme.palette.primary.contrastText
  },
  icon: {
    paddingRight: theme.spacing.unit,
    color: theme.palette.primary.light
  },
  summary: {
    alignItems: 'center',
    display: 'flex'
  },
  expandIcon: {
    color: theme.palette.primary.contrastText
  },
  content: {
    paddingTop: '20px',
    color: '#555',
    backgroundColor: theme.palette.primary.light
  },
  header: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText
  }
});

function SimpleExpansionPanel(props) {
  const { classes, children, icon, title } = props;
  return (
      <ExpansionPanel classes={{
            root: classes.root,
            expanded: classes.panelHeader,
        }} defaultExpanded={true}>
        <ExpansionPanelSummary classes={{
            root: classes.header,
            expanded: classes.header,
            expandIcon: classes.expandIcon
          }}
          style={{minHeight: '0px'}}
          expandIcon={<ExpandMoreIcon />}>
          <div className={classes.summary} >
            <Icon className={classes.icon}>{icon}</Icon>
            <Typography className={classes.heading}>{title}</Typography>
          </div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.content}>
          <Grid container spacing={24}>
          {children}
          </Grid>
        </ExpansionPanelDetails>
      </ExpansionPanel>
  );
}

SimpleExpansionPanel.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

SimpleExpansionPanel.defaultProps = {
  icon: 'star',
}

export default withStyles(styles)(SimpleExpansionPanel);