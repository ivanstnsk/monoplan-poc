import * as React from 'react';
import { useHistory, useParams } from 'react-router-dom';

// import { useStore } from './useStore';
import { useStyles } from './styles';

type RouteParams = {
  month?: string;
}

export const Month: React.FC = () => {
  const classes = useStyles();
  const params = useParams<RouteParams>();
  // const Store = useStore();

  return (
    <div className={classes.paper}>
      Month {JSON.stringify(params)}
    </div>
  );
}