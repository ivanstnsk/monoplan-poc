import * as React from 'react';

// import { useStore } from './useStore';
import { useStyles } from './styles';

export const Planning: React.FC = () => {
  const classes = useStyles();
  // const Store = useStore();

  return (
    <div className={classes.paper}>
      planning
    </div>
  );
}