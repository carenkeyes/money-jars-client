import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import {routerMiddleware} from 'react-router-redux';
import thunk from 'redux-thunk';
import middleware from './middleware';
import createHistory from 'history/createBrowserHistory';
import config from './config';
import mainReducer from './reducers/index.reducer';

export const history = createHistory();

const initialState = {};
const enhancers = [];
const Middleware = [
    thunk,
    middleware,
    routerMiddleware(history),
];

const {devToolsExtension} = window;
enhancers.push(devToolsExtension);

const composedEnhancers = compose(
    applyMiddleware(...Middleware),
    ...enhancers,
)

const store = createStore(
    combineReducers({
        mainReducer,
        initialState,
        composedEnhancers,
    })
)
/*const store = createStore(
    combineReducers({
        form: formReducer,
        auth: authReducer,
        protectedData: protectedDataReducer,
        budget: budgetReducer,
    }),
    composeWithDevTools(),
    applyMiddleware(thunk),
);

const authToken = loadAuthToken();
if (authToken){
    const token = authToken;
    store.dispatch(setAuthToken(token));
    store.dispatch(refreshAuthToken());
}*/

export default store;