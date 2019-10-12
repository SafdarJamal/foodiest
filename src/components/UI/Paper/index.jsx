import React from 'react';
import PropTypes from 'prop-types';
import PaperUI from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(5, 3)
  }
}));

const Paper = props => {
  const { children, className } = props;
  const classes = useStyles();

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
