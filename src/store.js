import {createStore, applyMiddleware, compose} from 'redux';
import {connectRouter, routerMiddleware} from 'connected-react-router';
import thunk from 'redux-thunk';
import apiMiddleware from './middleware';
import createBrowserHistory from 'history/createBrowserHistory';
import mainReducer from './reducers/index.reducer';

export const history = createBrowserHistory();

const initialState = {};
const enhancers = [];
const Middleware = [
    routerMiddleware(history),
    thunk,
    apiMiddleware,
];

const {devToolsExtension} = window;
enhancers.push(devToolsExtension);

const composedEnhancers = compose(
    applyMiddleware(...Middleware),
    ...enhancers,
)

//console.log(mainReducer);

const store = createStore(
    connectRouter(history)(mainReducer),
    initialState,
    composedEnhancers,
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