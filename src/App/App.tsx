import * as React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';

import { store, persistor } from '../store';
import { Login, Signup, User } from '../screens';

import { useApp, useGlobalNotifications } from './hooks';
import { useStyles } from './styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#3aa15c',
    },
    secondary: {
      main: '#285078'
    }
  }
});

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const AppInner: React.FC = () => {
  const classes = useStyles();
  const { isLoading, authState } = useApp();
  const ToastHelper = useGlobalNotifications();

  return (
    <>
      <SwitchTransition>
        <CSSTransition
          key={authState}
          // addEndListener={() => { }}
          addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}
          classNames={{
            enter: classes.fadeEnter,
            enterActive: classes.fadeEnterActive,
            exit: classes.fadeExit,
            exitActive: classes.fadeExitActive,
          }}
        >
          <Switch>
            {authState === 'NOT-AUTH' && (
              <>
                <Route path="/login" component={Login} />
                <Route path="/signup" component={Signup} />
              </>
            )}
            {authState === 'AUTH' && (
              <Route path="/" component={User} />
            )}
          </Switch>
        </CSSTransition>
      </SwitchTransition>
      <Backdrop className={classes.backdrop} open={isLoading}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <Snackbar open={ToastHelper.isVisible} onClose={ToastHelper.onHide}>
        <Alert onClose={ToastHelper.onHide} severity={ToastHelper.color}>
          {ToastHelper.message}
        </Alert>
      </Snackbar>
    </>
  );
}

export const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeProvider theme={theme}>
          <Router basename="/monoplan-poc">
            <AppInner />
          </Router>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
