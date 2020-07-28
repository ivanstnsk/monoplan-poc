import * as React from 'react';
import Button from '@material-ui/core/Button';

import { useStore } from './useStore';
import { useStyles } from './styles';

export const Planning: React.FC = () => {
  const classes = useStyles();
  const Store = useStore();

  const handleCreatePlanningYearClick = React.useCallback(() => {
    Store.handleCreatePlanningYear(new Date().getFullYear());
  }, [Store]);

  return (
    <div className={classes.paper}>
      {Store.plans.length === 0 && (
        <>
          <div>You don't have any plans!</div>
          <Button
            type="button"
            variant="contained"
            color="primary"
            // className={classes.button}
            onClick={handleCreatePlanningYearClick}
          >
            Create
          </Button>
        </>
      )}
      {Store.plans.length > 0 && (
        <div>{JSON.stringify(Store.plans)}</div>
      )}
    </div>
  );
}