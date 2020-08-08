import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { RootState } from '../../../../store/store.types';
import { PlanningState, PlanningYear } from '../../../../store/planning/planning.types';
import { CategoriesState } from '../../../../store/categories/categories.types';
import * as PlanningActions from '../../../../store/planning/actions';

type Hook = {
  plans: Record<number, PlanningYear>;
  handleCreateYear: (year: number) => void;
  handleCreateMonth: (year: number, month: number) => void;
}

export const useStore = (): Hook => {
  const dispatch = useDispatch();
  const planning = useSelector<RootState, PlanningState>(state => state.planning);
  const categories = useSelector<RootState, CategoriesState>(state => state.categories);

  const handleCreateYear = React.useCallback((year: number) => {
    dispatch(PlanningActions.createYear(year));
  }, [dispatch]);

  const handleCreateMonth = React.useCallback((year: number, month: number) => {
    dispatch(PlanningActions.createMonth(year, month));
  }, [dispatch]);

  return {
    plans: planning.plans,
    handleCreateYear,
    handleCreateMonth,
  }
}