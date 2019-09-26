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
  const { children, className } = props;

  return (
    <PaperUI elevation={2} className={classes[className]}>
      {children}
    </PaperUI>
  );
};

Paper.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

Paper.defaultProps = {
  className: ''
};

export default Paper;
