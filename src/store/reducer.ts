import { combineReducers } from 'redux';

import { RootState } from './store.types';

import { authReducer } from './auth/reducer';
import { userReducer } from './user/reducer';
import { statementReducer } from './statement/reducer';

export const reducer = combineReducers<RootState>({
  auth: authReducer,
  user: userReducer,
  statement: statementReducer,
});