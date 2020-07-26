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

  const getUserInfo = async () => {
    const userName = await UserApi.getUserInfo();
    if (userName) {
      dispatch(UserActions.setName(userName));
    }
  }

  const getStatementCurrentMonth = async () => {
    const items = await StatementApi.getForMonth();
    dispatch(StatementActions.setStatement(items));
  }

  React.useEffect(() => {
    getUserInfo();
    getStatementCurrentMonth();
  }, []);

  return {
    userName: user.name,
    onRemoveToken,
  }
}