import { Reducer } from 'redux';

import { PlanningState, PlanningYear, PlanningMonth } from './planning.types';
import { PlanningActionScheme, PlanningActions } from './actions';

type PlanningReducer = Reducer<PlanningState, PlanningActionScheme>;

const initState: PlanningState = {
  plans: {}
};

export const planningReducer: PlanningReducer = (
  state = initState,
  { type, payload },
) => {
  switch (type) {
    case PlanningActions.CreateYear: {
      const year = payload as number

      if (state.plans[year]) {
        return state;
      }

      const newYear: PlanningYear = {
        year,
        months: {}
      };

      return {
        ...state,
        plans: {
          ...state.plans,
          [year]: newYear,
        }
      }
    }
    case PlanningActions.CreateMonth: {
      const { year, month } = payload as { year: number, month: number };

      if (!state.plans[year]) {
        return state;
      }
      if (month < 0 || month > 11) {
        return state;
      }

      const newMonth: PlanningMonth = {
        month,
        income: [],
        expenses: [],
      };

      return {
        ...state,
        plans: {
          ...state.plans,
          [year]: {
            year,
            months: {
              ...state.plans[year].months,
              [month]: newMonth,
            }
          }
        }
      }
    }
    case PlanningActions.RemoveMonth: {
      const { year, month } = payload as { year: number, month: number };

      if (!state.plans[year]) {
        return state;
      }
      if (month < 0 || month > 11) {
        return state;
      }

      const months = state.plans[year].months;
      delete months[month];

      return {
        ...state,
        plans: {
          ...state.plans,
          [year]: {
            year,
            months,
          }
        }
      }
    }
    default:
      return state;
  }
};