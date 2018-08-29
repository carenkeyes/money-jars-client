import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';
import budgetReducer from './budget';
import userReducer from './user.reducer';


const rootReducer = combineReducers({
  appState: appStateReducer,
  user: userReducer,
  routing: routerReducer,
  form: reduxFormReducer,
  budget: budgetReducer,
});

export default rootReducer;