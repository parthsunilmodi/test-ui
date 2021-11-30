import { Dispatch } from 'redux';

export const Type = {
  LOGIN_DATA: 'LOGIN_DATA',
  SET_LOADING: "SET_LOADING"
};

export const loginAction =
  (payload: any) =>
    async (dispatch: Dispatch): Promise<any> => {
      dispatch({ type: Type.LOGIN_DATA, payload: payload });
    };
