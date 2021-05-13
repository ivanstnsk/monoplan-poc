import * as React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';

import { store, persistor } from '../store';
import { Login, Signup, User } from '../screens';

import { useApp } from './hooks';
import { useStyles } from './styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#43a047',
    },
    secondary: {
      main: '#388e3c'
    }
  }
});

const renderRoutes = (authState: AuthState, classes: any) => {
  // if (authState === 'UNDEFINED') {
  //   return null;
  // }

  console.log(authState)

  return (
    <SwitchTransition>
      <CSSTransition
        key={authState}
        addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}
        classNames={{
          enter: classes.fadeEnder,
          enterActive: classes.fadeEnderActive,
          exit: classes.exitEnder,
          exitActive: classes.exitEnderActive,
        }}
      >
        <div>
          {authState === 'UNDEFINED' && (
            <div>LOADING</div>
          )}
          {authState === 'AUTH' && (
            <div>AUTH</div>
          )}
          {authState === 'NOT-AUTH' && (
            <div>LOGIN</div>
          )}
        </div>
      </CSSTransition>
    </SwitchTransition>
  )

  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/" component={User} />
    </Switch>
  );
}

const AppInner: React.FC = () => {
  const classes = useStyles();
  const { isLoading, authState } = useApp();

  return (
    <>
      <SwitchTransition>
        <CSSTransition
          key={authState}
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
