import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import PaperUI from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(5, 3)
  }
}));

const Paper = props => {
  const classes = useStyles();
  const { children, class0 } = props;

  return (
    <div>
      <PaperUI elevation={2} className={classes[class0]}>
        {children}
      </PaperUI>
    </div>
  );
};

Paper.propTypes = {
  children: PropTypes.node.isRequired,
  class0: PropTypes.string
};

Paper.defaultProps = {
  class0: ''
};

export default Paper;
