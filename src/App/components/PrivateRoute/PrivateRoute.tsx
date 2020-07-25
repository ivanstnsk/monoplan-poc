import * as React from 'react';
import {
  Route,
  Redirect,
} from "react-router-dom";

import { useAuth } from '../../../hooks';

export const PrivateRoute: React.FC<any> = ({
  children,
  ...rest
}) => {
  const isAuthorized = useAuth();

  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthorized ? (
          children
        ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
      }
    />
  );
}
