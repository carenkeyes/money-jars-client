import {createStore, applyMiddleware, compose} from 'redux';
import {connectRouter, routerMiddleware} from 'connected-react-router';
import thunk from 'redux-thunk';
import apiMiddleware from './middleware';
import createHistory from 'history/createBrowserHistory';
import mainReducer from './reducers/index.reducer';
import {composeWithDevTools} from 'redux-devtools-extension'

export const history = createHistory();

const initialState = {};
//const enhancers = [];
const middleware = [
    routerMiddleware(history),
    thunk,
    apiMiddleware,
];

//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

/*const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers,
)*/

const enhancers = composeWithDevTools(
    applyMiddleware(...middleware)
)

//console.log(mainReducer);

const store = createStore(
    connectRouter(history)(mainReducer),
    initialState,
    enhancers,
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