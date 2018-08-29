import {combineReducers} from 'redux';
//import {routerReducer} from 'connected-react-router';
//import {routerReducer} from 'react-router-redux';
import {reducer as formReducer} from 'redux-form';
import appState from './appState.reducer';
import user from './user.reducer';
import budgetReducer from './budget.reducer';

const rootReducer = combineReducers({
    appState: appState,
    user: user,
    budget: budgetReducer,
    //routing: routerReducer,
    form: formReducer,
});

export default rootReducer;