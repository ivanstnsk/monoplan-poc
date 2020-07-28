import { AuthState } from './auth/auth.types';
import { UserState } from './user/user.types';
import { StatementState } from './statement/statement.types';
import { PlanningState } from './planning/planning.types';

export type RootState = {
  auth: AuthState;
  user: UserState,
  statement: StatementState,
  planning: PlanningState;
};