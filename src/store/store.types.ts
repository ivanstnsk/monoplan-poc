import { AuthState } from './auth/auth.types';
import { UserState } from './user/user.types';

export type RootState = {
  auth: AuthState;
  user: UserState,
};