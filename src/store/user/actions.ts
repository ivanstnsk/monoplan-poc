import { Action } from 'redux';

export enum UserActions {
  SetName = 'User/SetName',
}

export type UserActionScheme = Action<UserActions> & {
  type: UserActions;
  payload: string;
}

export const setName = (name: string): UserActionScheme => {
  return {
    type: UserActions.SetName,
    payload: name,
  };
};
