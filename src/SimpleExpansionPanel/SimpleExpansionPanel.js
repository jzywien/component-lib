import React from 'react';
import PropTypes from 'prop-types';
import ExpansionPanel from 'react-md/lib/ExpansionPanels/ExpansionPanel';
import './SimpleExpansionPanel.scss';

function SimpleExpansionPanel(props) {
  const { classes, children, icon, title, count, showCount, headerClassName, contentClassName } = props;

  return (
    <ExpansionPanel className='SimpleExpansionPanel' headerClassName={headerClassName} contentClassName={'expansion-content ' + contentClassName} label={
        <div style={{display: 'flex', alignItems: 'center'}
        }>
          <i class="md-icon material-icons" style={{marginRight: '5px'}}>{icon}</i>
          {title}
          {showCount &&
            <span style={{fontSize: '.75em', borderRadius: '50%', background: 'rgba(255,255,255,0.5)', width: '1.5em', height: '1.5em', marginLeft: '1em', textAlign: 'center'}}>{count}</span>
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
  showCount: PropTypes.bool
};

SimpleExpansionPanel.defaultProps = {
  icon: 'star',
  count: 0,
  showCount: true
}

export default SimpleExpansionPanel;