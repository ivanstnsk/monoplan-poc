import { Reducer } from 'redux';

import { CategoriesState } from '../categories/categories.types';

import { PlanningState } from './planning.types';
import { PlanningActionScheme, PlanningActions } from './actions';
import { createEmptyPlanningYear } from './utils';

type PlanningReducer = Reducer<PlanningState, PlanningActionScheme>;

const initState: PlanningState = {
  plans: []
};

export const planningReducer: PlanningReducer = (
  state = initState,
  { type, payload },
) => {
  switch (type) {
    case PlanningActions.CreatePlanningYear:
      const { year, categoriesState } = payload as {
        year: number;
        categoriesState: CategoriesState;
      };
      const y = state.plans.filter((planningYear) => planningYear.year === year);

      if (y.length > 0) {
        return state;
      }

      return {
        ...state,
        plans: [
          ...state.plans,
          createEmptyPlanningYear(year, categoriesState),
        ]
      }
    default:
      return state;
  }
};