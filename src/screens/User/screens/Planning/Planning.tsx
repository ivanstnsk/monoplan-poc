import * as React from 'react';
import { Route, useHistory } from "react-router-dom";
import Button from '@material-ui/core/Button';

import { PlanningYear } from '../../../../store/planning/planning.types';

import { Year, Month } from './screens';
import { useStore } from './useStore';
import { useStyles } from './styles';

const renderYearButtons = (planningYear: PlanningYear, onClick: () => void) => {
  const { year } = planningYear;
  return (
    <Button
      key={`year-${year}`}
      type="button"
      variant="contained"
      color="primary"
      onClick={onClick}
    >
      {year}
    </Button>
  );
}

export const Planning: React.FC = () => {
  const classes = useStyles();
  const history = useHistory();
  const Store = useStore();

  const handleCreatePlanningYearClick = React.useCallback(() => {
    Store.handleCreatePlanningYear(new Date().getFullYear());
  }, [Store]);

  const getPlanningYearClickHandler = React.useCallback((year: number) => () => {
    history.push(`/planning/year-${year}`);
  }, []);

  return (
    <>
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
          <div>{Store.plans.map(planningYear => {
            const handler = getPlanningYearClickHandler(planningYear.year);
            return renderYearButtons(planningYear, handler);
          })}</div>
        )}
      </div>
      <Route exact path="/planning/year-:year">
        <Year />
      </Route>
      <Route exact path="/planning/year-:year/month-:month">
        <Month />
      </Route>
    </>
  );
}