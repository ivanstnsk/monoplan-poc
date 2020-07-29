import * as React from 'react';
import Button from '@material-ui/core/Button';
import { useHistory, useParams } from 'react-router-dom';

// import { PlanningMonth } from '../../../../../../store/planning/planning.types';
import { getMonthNameByIndex } from '../../../../../../utils';

import { useStore } from './useStore';
import { useStyles } from './styles';

type RouteParams = {
  year?: string;
}

const renderMonthButtons = (month: string, onClick: () => void) => {
  return (
    <Button
      key={`month-${month}`}
      type="button"
      variant="contained"
      color="primary"
      onClick={onClick}
    >
      {getMonthNameByIndex(month)}
    </Button>
  );
}

export const Year: React.FC = () => {
  const classes = useStyles();
  const history = useHistory();
  const params = useParams<RouteParams>();
  const Store = useStore(params.year);

  const getMonthClickHandler = React.useCallback((month: string) => () => {
    history.push(`/planning/year-${params.year}/month-${month}`);
  }, []);

  return (
    <div className={classes.paper}>
      {Store.plan && Object.keys(Store.plan.months).map(month => {
        const handler = getMonthClickHandler(month);
        return renderMonthButtons(month, handler);
      })}
    </div>
  );
}