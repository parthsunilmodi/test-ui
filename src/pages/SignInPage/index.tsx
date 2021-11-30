import React, { useState } from 'react';
import { message } from 'antd';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { loginAction } from 'actions/AuthActions';
import { getAuthLoading } from 'selectors/AuthSelectors';
import {Loader} from 'trackitt'
import { sdk } from 'App';
import { SignInPage as LoginPage } from 'trackitt';

const SignInPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const loading = useSelector(getAuthLoading);
  const [apiLoading, setLoading] = useState(false);

  const onSignIn = async (data: any) => {
    try {
      setLoading(true);
      await dispatch(loginAction(data));
      if (!data.status) {
        message.error(data.message || 'No user exist for given email');
      } else {
        localStorage.setItem('authToken', data?.loginData?.accessToken);
        localStorage.setItem('idToken', data?.loginData?.idToken);
        localStorage.setItem('refreshToken', data?.loginData?.refreshToken);
        localStorage.setItem(
          'authDetails',
          JSON.stringify({ email: data?.userDetails?.email, id: data?.userDetails?._id }),
        );
        history.push('/');
      }
    } catch (e) {
      message.error('Email or password is invalid');
    } finally {
      setLoading(false);
    }
  };

  if(loading || apiLoading) {
    return (
      <Loader />
    )
  }

  return (
      <LoginPage onSignInSuccess={onSignIn} sdk={sdk} />
  );
};

export default SignInPage;
