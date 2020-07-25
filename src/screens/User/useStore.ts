import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as UserApi from '../../api/user';
import * as StatementApi from '../../api/statement';
import { RootState } from '../../store/store.types';
import { UserState } from '../../store/user/user.types';
import * as AuthActions from '../../store/auth/actions';
import * as UserActions from '../../store/user/actions';

type Hook = {
  userName: string;
  statement: any[];
  onRemoveToken: () => void;
}

export const useStore = (): Hook => {
  const [statement, setStatement] = React.useState<any[]>([]);
  const dispatch = useDispatch();
  const user = useSelector<RootState, UserState>(state => state.user);

  const onRemoveToken = () => {
    localStorage.removeItem('token');
    dispatch(AuthActions.removeToken());
  }

  const getUserInfo = async () => {
    const userName = 'user name' // await UserApi.getUserInfo();
    if (userName) {
      dispatch(UserActions.setName(userName));
    }
  }

  const getStatementCurrentMonth = async () => {
    const data = await StatementApi.getForMonth();
    setStatement(data);
  }

  React.useEffect(() => {
    getUserInfo();
    getStatementCurrentMonth();
  }, []);

  return {
    userName: user.name,
    statement,
    onRemoveToken,
  }
}