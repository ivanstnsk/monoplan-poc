import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as UserApi from '../../api/user';
import * as StatementApi from '../../api/statement';
import { RootState } from '../../store/store.types';
import { UserState } from '../../store/user/user.types';
import * as AuthActions from '../../store/auth/actions';
import * as UserActions from '../../store/user/actions';
import * as StatementActions from '../../store/statement/actions';

type Hook = {
  userName: string;
  onRemoveToken: () => void;
}

export const useStore = (): Hook => {
  const dispatch = useDispatch();
  const user = useSelector<RootState, UserState>(state => state.user);

  const onRemoveToken = () => {
    localStorage.removeItem('token');
    dispatch(AuthActions.removeToken());
  }

  const getUserInfo = React.useCallback(async () => {
    const userName = await UserApi.getUserInfo();
    if (userName) {
      dispatch(UserActions.setName(userName));
    }
  }, [dispatch]);

  const getStatementCurrentMonth = React.useCallback(async (month: number) => {
    const items = await StatementApi.getForMonth(month);
    dispatch(StatementActions.setStatement(items));
  }, [dispatch]);

  const getCurrentMonth = React.useCallback(() => {
    const month = new Date().getMonth();
    dispatch(UserActions.setMonth(month));
  }, [dispatch]);

  React.useEffect(() => {
    getUserInfo();
    getCurrentMonth();
  }, [getUserInfo, getCurrentMonth]);

  React.useEffect(() => {
    getStatementCurrentMonth(user.month);
  }, [getStatementCurrentMonth, user.month]);

  return {
    userName: user.name,
    onRemoveToken,
  }
}