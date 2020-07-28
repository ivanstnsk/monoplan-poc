import * as React from 'react';
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from '../store';
import { Login, User } from '../screens';

import { LoginRoute, PrivateRoute } from './components';

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
        <Router basename="/monoplan-poc">
          <AppInner />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
