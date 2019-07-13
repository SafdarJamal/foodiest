import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      false ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: ROUTES.SIGNIN,
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

export default PrivateRoute;
