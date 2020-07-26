import { Reducer } from 'redux';

import { UserState } from './user.types';
import { UserActionScheme, UserActions } from './actions';

type UserReducer = Reducer<UserState, UserActionScheme>;

const initState: UserState = {
  name: '',
  month: 0,
};

export const userReducer: UserReducer = (
  state = initState,
  { type, payload },
) => {
  switch (type) {
    case UserActions.SetName:
      return {
        ...state,
        name: payload as string,
      }
    case UserActions.SetMonth:
      return {
        ...state,
        month: payload as number,
      }
    default:
      return state;
  }
};