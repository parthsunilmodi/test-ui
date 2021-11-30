import React from 'react';
import { useHistory } from 'react-router-dom';
import { NoInternet } from 'trackitt';

const NoInternetPage = () => {
  const history = useHistory();
  return (
    <NoInternet onBack={() => history.push('/')} />
  )
};

export default NoInternetPage;
