import { Action } from 'redux';

export enum PlanningActions {
  CreateYear = 'Planning/CreateYear',
  RemoveYear = 'Planning/RemoveYear',
  CreateMonth = 'Planning/CreateMonth',
  RemoveMonth = 'Planning/RemoveMonth',
}

export type PlanningActionScheme = Action<PlanningActions> & {
  type: PlanningActions;
  payload: number | { year: number, month: number };
}

export const createYear = (year: number): PlanningActionScheme => {
  return {
    type: PlanningActions.CreateYear,
    payload: year,
  };
};

export const removeYear = (year: number): PlanningActionScheme => {
  return {
    type: PlanningActions.RemoveYear,
    payload: year,
  };
};

export const createMonth = (year: number, month: number): PlanningActionScheme => {
  return {
    type: PlanningActions.CreateMonth,
    payload: {
      year,
      month,
    },
  };
};

export const removeMonth = (year: number, month: number): PlanningActionScheme => {
  return {
    type: PlanningActions.RemoveMonth,
    payload: {
      year,
      month,
    },
  };
};
