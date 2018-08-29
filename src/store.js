import {createStore, applyMiddleware, compose} from 'redux';
import {connectRouter, routerMiddleware} from 'connected-react-router';
//import {routerMiddleware} from 'react-router-redux';
import thunk from 'redux-thunk';
import apiMiddleware from './middleware';
//import createBrowserHistory from 'history/createBrowserHistory';
import rootReducer from './reducers/index.reducer';
import {composeWithDevTools} from 'redux-devtools-extension'

//export const history = createBrowserHistory();

const initialState = {};
//const enhancers = [];
const middleware = [
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
    rootReducer,
    initialState,
    enhancers,
);

/*const authToken = loadAuthToken();
if (authToken){
    const token = authToken;
    store.dispatch(setAuthToken(token));
    store.dispatch(refreshAuthToken());
}*/

export default store;