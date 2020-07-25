import { useSelector } from 'react-redux';

import { RootState } from '../store/store.types';
import { AuthState } from '../store/auth/auth.types';

type Hook = boolean;

export const useAuth = (): Hook => {
  const { token } = useSelector<RootState, AuthState>(state => state.auth);

  return !!token;
}