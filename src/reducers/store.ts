import { createStore, applyMiddleware, compose } from "redux";
import { routerMiddleware as createRouterMiddleware } from "react-router-redux";
import createHistory from "history/createBrowserHistory";
import thunk from 'redux-thunk';

import { rootReducer, RootState } from "./index";

export const history = createHistory({ forceRefresh:true });
export const routerMiddleware = createRouterMiddleware(history);

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

export function configureStore(initialState?: RootState) {
  // configure middlewares
  const middlewares = [routerMiddleware, thunk];
  // compose enhancers
  const enhancer = compose(applyMiddleware(...middlewares));
  // create store
  // @ts-ignore
  return createStore(rootReducer, initialState!, enhancer);
}
