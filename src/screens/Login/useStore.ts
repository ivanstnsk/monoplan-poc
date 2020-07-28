import { useDispatch } from 'react-redux';

import { setToken } from '../../store/auth/actions';

type Hook = {
  onSetToken: (token: string) => void;
}

export const useStore = (): Hook => {
  const dispatch = useDispatch();

  const onSetToken = (token: string) => {
    if (token && token.length > 0) {
      dispatch(setToken(token));
    }
  }

  return {
    onSetToken,
  }
}