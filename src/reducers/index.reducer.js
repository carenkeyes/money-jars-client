import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import {reducer as reduxFormReducer} from 'redux-form';
import appState from './appState.reducer';
import user from './user.reducer';

const mainReducer = combineReducers({
    appState,
    user,
    routing: routerReducer,
    form: reduxFormReducer,
});

export default mainReducer;