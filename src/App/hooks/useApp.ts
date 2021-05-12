import * as Redux from 'react-redux';
import { useHistory } from 'react-router-dom';
import { RootState } from '../../store/store.types'
import { GlobalState } from '../../store/global/types'
import * as GlobalActions from '../../store/global/actions';
import * as UserActions from '../../store/user/actions';
import { userAPI } from '../../api';
import React from 'react';

interface UseApp {
  isLoading: boolean;
  authState: AuthState;
}

export const useApp = (): UseApp => {
  const dispatch = Redux.useDispatch();
  const history = useHistory();

  const { isLoading, authState } = Redux.useSelector<RootState, GlobalState>(state => state.global);

  const checkAuth = React.useCallback(async () => {
    dispatch(GlobalActions.setLoading(true));

    try {
      const res = await userAPI.getProfile();

      const authState: AuthState = res.status === 200 ? 'AUTH' : 'NOT-AUTH';

      dispatch(GlobalActions.setAuth(authState));

      if (res.status === 200) {
        const { username } = res.data.user;

        dispatch(UserActions.setUsername(username));
      }
    } catch (error) {
      console.log(error);
      dispatch(GlobalActions.setAuth('NOT-AUTH'));
    } finally {
      dispatch(GlobalActions.setLoading(false));
    }
  }, [dispatch]);

  React.useEffect(() => {
    checkAuth();
  }, []);

  React.useEffect(() => {
    if (authState === 'AUTH') {
      history.push('/');
    } else if (authState === 'NOT-AUTH') {
      history.push('/login');
    }
  }, [authState]);

  return {
    isLoading,
    authState,
  }
}