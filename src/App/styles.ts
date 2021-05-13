import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
  fadeEnter: {
    opacity: 0,
  },
  fadeExit: {
    opacity: 1,
  },
  fadeEnterActive: {
    opacity: 1,
    transition: 'opacity 500ms',
  },
  fadeExitActive: {
    opacity: 0,
    transition: 'opacity 500ms',
  },
}));
