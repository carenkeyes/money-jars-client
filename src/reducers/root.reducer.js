import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import {CREATE_GOAL_REQUEST_SUCCESS} from '../actions/index.actions';
//import { routerReducer } from 'connected-react-router';
import budgetReducer from './budget.reducer';
import childrenReducer from './children.reducer';
import userReducer from './user.reducer';
import ynabReducer from './ynab.reducer';
import appState from './appState.reducer';


const rootReducer = combineReducers({
  appState: appState,
  user: userReducer,
  children: childrenReducer,
  budget: budgetReducer,
  ynab: ynabReducer,
  form: reduxFormReducer.plugin({
    'new-goal' : (state, action) => {
      switch(action.type){
        case CREATE_GOAL_REQUEST_SUCCESS:
          return undefined;
        default:
          return state;
      }
    }
  })
});

export default rootReducer;