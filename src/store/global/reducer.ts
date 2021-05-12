import { Reducer } from 'redux';

import { GlobalState } from './types';
import { GlobalActionScheme, GlobalActions } from './actions';

type GlobalReducer = Reducer<GlobalState, GlobalActionScheme>;

const initState: GlobalState = {
  isLoading: false,
  authState: 'UNDEFINED',
};

export const globalReducer: GlobalReducer = (
  state = initState,
  { type, payload },
) => {
  switch (type) {
    case GlobalActions.SetLoading:
      const { isLoading } = payload as { isLoading: boolean };
      return {
        ...state,
        isLoading,
      }
    case GlobalActions.SetAuth:
      const { authState } = payload as { authState: AuthState };
      return {
        ...state,
        authState,
      }
    default:
      return state;
  }
};