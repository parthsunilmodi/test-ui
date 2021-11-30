import React, { Suspense, useState, useEffect } from 'react';
import Trackitt from 'trackittapps/dist/main';
import { Header, Loader, Helmet, SupportComponent } from 'trackitt';
import { history } from 'reducers/store';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from './Route/privateRoute';
import { Divider } from 'antd';
import './App.css';

const NoMatchPage = React.lazy(() => import('pages/NoMatchPage'));
const SignInPage = React.lazy(() => import('pages/SignInPage'));
const NoInternetPage = React.lazy(() => import('pages/NoInternet'));

const token = localStorage.getItem('authToken') || '';
const appId = localStorage.getItem('appId') || '';
const refreshToken = localStorage.getItem('refreshToken') || '';

export const sdk = new Trackitt('', { authToken: token, refreshToken, baseUrl: process.env.REACT_APP_DEVELOPMENT_API_URL, awsUrl: process.env.REACT_APP_AWS_API_URL });

const App: React.FC = () => {
  const [title, setTitle] = useState('TRACKiTT | ');

  useEffect(() => {
    ;(async () => {
      const res: any = await sdk.auth.getAppDetails(appId);
      setTitle(`TRACKiTT | ${res?.data?.displayName}` || title)
    })()
  }, [appId]);

  const goBack = () => {
    history.goBack();
  };

  const onHomeClick = () => {
    history?.push('/');
  };

  return (
    <Router>
      <Helmet title={title} description="Description" />
      <Header onBack={goBack} consolePageUrl={process.env.REACT_APP_CORE_UI_URL} onHomeClick={onHomeClick} showHomeButton />
      <Divider className="divider" />
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route path="/login" exact component={SignInPage} />
          <Route path="/no-internet" exact component={NoInternetPage} />
          <PrivateRoute path="/" exact component={<div>First Page</div>} />
          <PrivateRoute path="*" exact component={NoMatchPage}  />
        </Switch>
      </Suspense>
    </Router>
  )
};

export default App
