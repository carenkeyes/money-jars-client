import { createStore, applyMiddleware} from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import apiMiddleware from './api-middleware';
import createHistory from 'history/createBrowserHistory';
import rootReducer from './reducers/root.reducer';
import {composeWithDevTools} from 'redux-devtools-extension';


export const history = createHistory();
const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

/*const initialState = {};
const middleware = [
  persistReducer(persistConfig),
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

export const persistor = persistStore(store)

export default {store};*/

export default (initialState = {}, history) => {
  const middlewares = [
    thunk,
    apiMiddleware,
    routerMiddleware(history),
  ];

  const enhancers = composeWithDevTools(
    applyMiddleware(...middlewares)
  )

  const store = createStore(
    connectRouter(history)(persistedReducer),
    initialState,
    enhancers,
  );

  const persistor = persistStore(store);

  return {store, persistor}
}