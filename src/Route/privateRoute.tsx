import React, { useState } from 'react';
import { Route, useLocation, useHistory } from 'react-router-dom';
import { AuthWrapper, Loader } from "trackitt";
import { sdk } from 'App';
import { RouteWrapper } from './styles';

// @ts-ignore
const PrivateRoute = ({ component: Component, ...rest }) => {
  const history = useHistory();
  const location = useLocation();
  const [loading, toggleLoading] = useState<boolean>(true);

  const toggleLoadingState = () => {
    toggleLoading(false);
  };

  return (
    <RouteWrapper>
      <AuthWrapper
        sdk={sdk}
        history={history}
        onUserVerified={toggleLoadingState}
        location={location}
      >
          {
            loading ? <Loader /> : <Route {...rest} render={props => <Component {...props} />} />
          }
      </AuthWrapper>
    </RouteWrapper>
  )
};

export default PrivateRoute;
