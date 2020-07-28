import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';

import { RootState } from './store.types';

import { authReducer } from './auth/reducer';
import { userReducer } from './user/reducer';
import { statementReducer } from './statement/reducer';

const authPersistConfig = {
  key: 'auth',
  storage: storage,
};

export const reducer = combineReducers<RootState>({
  auth: persistReducer(authPersistConfig, authReducer) as any,
  user: userReducer,
  statement: statementReducer,
});