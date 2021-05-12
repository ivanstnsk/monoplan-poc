import { Action } from 'redux';

export enum GlobalActions {
  SetLoading = 'Global/SetLoading',
  SetAuth = 'Global/SetAuth',
}

export type GlobalActionScheme = Action<GlobalActions> & {
  type: GlobalActions;
  payload: {
    isLoading: boolean
  } | {
    authState: AuthState
  };
}

export const setLoading = (isLoading: boolean): GlobalActionScheme => {
  return {
    type: GlobalActions.SetLoading,
    payload: {
      isLoading
    },
  };
};

export const setAuth = (authState: AuthState): GlobalActionScheme => {
  return {
    type: GlobalActions.SetAuth,
    payload: {
      authState,
    },
  };
};
