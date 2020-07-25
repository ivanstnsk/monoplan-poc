import * as React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

// import { useStore } from './useStore';
import { MoneyChart } from './components';
import { useStyles } from './styles';

export const Dashboard: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.paper}>
      <MoneyChart />
    </div>
  );
}