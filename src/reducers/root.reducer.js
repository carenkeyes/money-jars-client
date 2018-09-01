import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
//import { routerReducer } from 'connected-react-router';
import budgetReducer from './budget';
import userReducer from './user.reducer';
import ynabReducer from './ynab.reducer';
import appState from './appState.reducer';


const rootReducer = combineReducers({
  appState: appState,
  user: userReducer,
  //routing: routerReducer,
  form: reduxFormReducer,
  budget: budgetReducer,
  ynab: ynabReducer,
});

export default rootReducer;