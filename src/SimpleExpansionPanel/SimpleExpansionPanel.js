import React from 'react';
import PropTypes from 'prop-types';
import ExpansionPanel from 'react-md/lib/ExpansionPanels/ExpansionPanel';
import './SimpleExpansionPanel.scss';

function SimpleExpansionPanel(props) {
  const { classes, children, icon, title, count, showCount, headerClassName, contentClassName, lightTheme } = props;

  const classNames = `SimpleExpansionPanel ${lightTheme ? 'SimpleExpansionPanel-light' : ''}`
  return (
    <ExpansionPanel className={classNames} headerClassName={headerClassName} contentClassName={'expansion-content ' + contentClassName} label={
        <div style={{display: 'flex', alignItems: 'center'}
        }>
          <i class="md-icon material-icons" style={{marginRight: '5px'}}>{icon}</i>
          {title}
          {showCount &&
            <span className="count">{count}</span>
          }
        </div>
      }  defaultExpanded footer={null}>
      {children}
    </ExpansionPanel>
  );
}

SimpleExpansionPanel.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  headerClassName: PropTypes.string,
  contentClassName: PropTypes.string,
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  showCount: PropTypes.bool,
  lightTheme: PropTypes.bool
};

SimpleExpansionPanel.defaultProps = {
  icon: 'star',
  count: 0,
  showCount: true,
  lightTheme: false
}

export default SimpleExpansionPanel;