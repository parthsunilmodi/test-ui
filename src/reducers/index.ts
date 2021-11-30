import { combineReducers } from 'redux';
import { routerReducer as router, RouterState } from 'react-router-redux';

import {
  authReducer,
  State as AuthState
} from './authReducer';


export interface RootState {
  router: RouterState;
  authReducer: AuthState;
}
export const rootReducer = combineReducers<RootState>({
  router,
  authReducer: authReducer as any,
});
