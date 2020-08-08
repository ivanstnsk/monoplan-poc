import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import isEmpty from 'lodash.isempty';

import { RootState } from '../../../../store/store.types';
import { PlanningState, PlanningYear } from '../../../../store/planning/planning.types';
// import { CategoriesState } from '../../../../store/categories/categories.types';
import * as PlanningActions from '../../../../store/planning/actions';

type Hook = {
  plans: Record<number, PlanningYear>;
  empty: boolean;
  handleCreateYear: (year: number) => void;
  handleRemoveYear: (year: number) => void;
}

export const useStore = (): Hook => {
  const dispatch = useDispatch();
  const planning = useSelector<RootState, PlanningState>(state => state.planning);
  // const categories = useSelector<RootState, CategoriesState>(state => state.categories);

  const handleCreateYear = React.useCallback((year: number) => {
    dispatch(PlanningActions.createYear(year));
  }, [dispatch]);

  const handleRemoveYear = React.useCallback((year: number) => {
    dispatch(PlanningActions.removeYear(year));
  }, [dispatch]);

  return {
    plans: planning.plans,
    empty: isEmpty(planning.plans),
    handleCreateYear,
    handleRemoveYear,
  }
}