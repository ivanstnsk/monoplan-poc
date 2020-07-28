import { Reducer } from 'redux';

import { PlanningState, PlanningYear, Plan } from './planning.types';
import { PlanningActionScheme, PlanningActions } from './actions';
import { createEmptyPlanningYear } from './utils';

type PlanningReducer = Reducer<PlanningState, PlanningActionScheme>;

const initPlan: Plan = {
  prognosis: {
    income: 0,
    expenses: 0,
  },
  actual: {
    income: 0,
    expenses: 0,
  }
}

const initState: PlanningState = {
  plans: []
};

export const planningReducer: PlanningReducer = (
  state = initState,
  { type, payload },
) => {
  switch (type) {
    case PlanningActions.CreatePlanningYear:
      const year = payload as number;
      const y = state.plans.filter((planningYear) => planningYear.year === year);

      if (y.length > 0) {
        return state;
      }

      return {
        ...state,
        plans: [
          ...state.plans,
          createEmptyPlanningYear(year),
        ]
      }
    default:
      return state;
  }
};