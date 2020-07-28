import * as React from 'react';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from '../store';
import { Login, User } from '../screens';

import { LoginRoute, PrivateRoute } from './components';

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

const AppInner: React.FC = () => {
  return (
    <Switch>
      <LoginRoute path="/login">
        <Login />
      </LoginRoute>
      <PrivateRoute path="/">
        <User />
      </PrivateRoute>
    </Switch>
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
