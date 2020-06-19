import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(1),
  },
  title: {},
}));

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography>Hello React!</Typography>
    </div>
  );
};

export default App;
