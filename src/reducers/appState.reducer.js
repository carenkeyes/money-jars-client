import * as actionTypes from '../actions/index.actions';


const initialState = {
  isFetchingUserInfo: false,
  hasUserInfo: false,
  serverErrorMessage: null,
}


export default function appState(state = initialState, action) {
  switch (action.type) {
    //Fetch user info
    case actionTypes.FETCH_USER_BASIC_INFO_REQUEST_TRIGGERED: {
      return {
        ...state,
        isFetchingUserInfo: true,
      };
    }
    case actionTypes.FETCH_USER_BASIC_INFO_REQUEST_SUCCESS: {
      return {
        ...state,
        hasUserInfo: true,
        isFetchingUserInfo: initialState.isFetchingUserInfo
      };
    }
    case actionTypes.FETCH_USER_BASIC_INFO_REQUEST_FAILURE: {
      return {
        ...state,
        isFetchingUserInfo: initialState.isFetchingUserInfo
      };
    }
    case actionTypes.FETCH_USER_LOGIN_REQUEST_TRIGGERED: {
      return {
        ...state,
        isFetchingUserInfo: true,
      };  
    }
    case actionTypes.FETCH_USER_LOGIN_REQUEST_SUCCESS: {
      return {
        ...state,
        hasUserInfo: true,
        isFetchingUserInfo: initialState.isFetchingUserInfo
      };
    }
    case actionTypes.FETCH_USER_LOGIN_REQUEST_FAILURE: {
      return {
        ...state,
        isFetchingUserInfo: initialState.isFetchingUserInfo
      };
    }
    case actionTypes.SHOW_ALERT_MESSAGE: {
      return {
        ...state,
        serverErrorMessage: action.response
      }
    }
    default: {return state;}
  }
}