import { useSelector } from 'react-redux';

import { RootState } from '../store/store.types';
import { GlobalState } from '../store/global/types';

type Hook = AuthState;

export const useAuth = (): Hook => {
  const { authState } = useSelector<RootState, GlobalState>(state => state.global);

  return authState;
}