import { handleActions, Action } from "redux-actions";

import * as AuthActions from "actions/AuthActions";

export type State = {
  readonly authDetails: any;
  readonly userDetail: any;
  readonly loading: boolean;
};

const authDetails = JSON.parse(localStorage.getItem('authDetails') || '{}');

const initialState: State = {
  loading: false,
  userDetail: {},
  authDetails
};

export const authReducer = handleActions<State, any>(
  {
    [AuthActions.Type.LOGIN_DATA]: (state: State, action: Action<any>) => {
      return {
        ...state,
        token: action.payload?.loginData?.accessToken,
        authDetails: {
          id: action.payload?.userDetails?._id,
          email: action.payload?.userDetails?.email,
          user: action.payload,
        },
        userDetail: {
          id: action.payload?.userDetails?._id,
          userName: action.payload?.loginData?.username,
          email: action.payload?.userDetails?.email,
        },
      };
    },
    [AuthActions.Type.SET_LOADING]: (state: State, action: Action<any>) => {
      return {
        ...state,
        loading: action.payload,
      }
    },
  },
  initialState
);
