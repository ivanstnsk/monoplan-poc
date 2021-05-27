import * as Redux from 'react-redux';
import { Color } from '@material-ui/lab/Alert';
import { RootState } from '../../store/store.types'
import { GlobalState } from '../../store/global/types'
import * as GlobalActions from '../../store/global/actions';
import React from 'react';

interface UseGlobalNotifications {
  isVisible: boolean;
  message: string;
  color: Color;
  onHide: () => void;
}

export const useGlobalNotifications = (): UseGlobalNotifications => {
  const dispatch = Redux.useDispatch();
  const timer: any = React.useRef();
  const [isVisible, setIsVisible] = React.useState(false);
  const [message, setMessage] = React.useState('');
  const [color, setColor] = React.useState<Color>('info');

  const { error } = Redux.useSelector<RootState, GlobalState>(state => state.global);

  const onHide = React.useCallback(() => {
    if (timer.current) {
      clearTimeout(timer.current);
    }
    setIsVisible(false);
  }, [setIsVisible, timer]);

  React.useEffect(() => {
    if (error) {
      setIsVisible(true);
      setMessage(error);
      setColor('error');
      dispatch(GlobalActions.clearError());

      if (timer.current) {
        clearTimeout(timer.current);
      }
      timer.current = setTimeout(() => {
        setIsVisible(false);
      }, 2000);
    }
  }, [error]);

  return {
    isVisible,
    message,
    color,
    onHide,
  }
}