import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import isEmpty from 'lodash.isempty';

import * as PlanningActions from '../../../../../../store/planning/actions';
import { RootState } from '../../../../../../store/store.types';
import { PlanningState, PlanningMonth } from '../../../../../../store/planning/planning.types';

type Hook = {
  year?: number;
  months: Record<number, PlanningMonth>;
  empty: boolean;
  invalid: boolean;
  handleCreateMonth: (year: number, month: number) => void;
  handleRemoveMonth: (year: number, month: number) => void;
}

export const useStore = (year: string | undefined): Hook => {
  const dispatch = useDispatch();

  const yearKey = year ? parseInt(year) : NaN;
  const planning = useSelector<RootState, PlanningState>(state => state.planning);
  const planningYear = planning.plans[yearKey];

  const handleCreateMonth = React.useCallback((year: number, month: number) => {
    dispatch(PlanningActions.createMonth(year, month));
  }, [dispatch]);

  const handleRemoveMonth = React.useCallback((year: number, month: number) => {
    dispatch(PlanningActions.removeMonth(year, month));
  }, [dispatch]);

  if (!planningYear) {
    return {
      empty: true,
      invalid: true,
      months: {},
      handleCreateMonth,
      handleRemoveMonth,
    }
  }

  return {
    year: yearKey,
    months: planningYear.months,
    empty: isEmpty(planningYear.months),
    invalid: false,
    handleCreateMonth,
    handleRemoveMonth,
  }
}