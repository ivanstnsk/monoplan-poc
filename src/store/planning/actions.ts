import { Action } from 'redux';

export enum PlanningActions {
  CreatePlanningYear = 'Planning/CreatePlanningYear',
}

export type PlanningActionScheme = Action<PlanningActions> & {
  type: PlanningActions;
  payload: string | number;
}

export const createPlanningYear = (year: number): PlanningActionScheme => {
  return {
    type: PlanningActions.CreatePlanningYear,
    payload: year,
  };
};
