import { Action } from 'redux';

import { CategoriesState } from '../categories/categories.types';

export enum PlanningActions {
  CreatePlanningYear = 'Planning/CreatePlanningYear',
}

export type PlanningActionScheme = Action<PlanningActions> & {
  type: PlanningActions;
  payload: {
    year: string | number;
    categoriesState: CategoriesState;
  };
}

export const createPlanningYear = (year: number, categoriesState: CategoriesState): PlanningActionScheme => {
  return {
    type: PlanningActions.CreatePlanningYear,
    payload: {
      year,
      categoriesState,
    },
  };
};
