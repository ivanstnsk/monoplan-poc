import { Action } from 'redux';

export enum UserActions {
  SetName = 'User/SetName',
  SetMonth = 'User/SetMonth',
}

export type UserActionScheme = Action<UserActions> & {
  type: UserActions;
  payload: string | number;
}

export const setName = (name: string): UserActionScheme => {
  return {
    type: UserActions.SetName,
    payload: name,
  };
};

export const setMonth = (month: number): UserActionScheme => {
  return {
    type: UserActions.SetMonth,
    payload: month,
  };
};
