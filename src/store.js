import { createStore, applyMiddleware} from 'redux';
import { connectRouter, routerMiddleware } from 'connect-react-router';
import thunk from 'redux-thunk';
import apiMiddleware from './api-middleware';
import createHistory from 'history/createBrowserHistory';
import rootReducer from '../../reducers/root.reducer';
import {composeWithDevTools} from 'redux-devtools-extension';


export const history = createHistory();

const initialState = {};
const middleware = [
  thunk,
  apiMiddleware,
  routerMiddleware(history),
];

const enhancers = composeWithDevTools(
    applyMiddleware(...middleware),

)

const store = createStore(
  connectRouter(history)(rootReducer),
  initialState,
  enhancers,
);

export default store;