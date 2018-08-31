import * as actionTypes from '../actions/index.actions';

const initialState = {
  data: null,
}

export default function user(state=initialState, action) {
  switch (action.type) {
    //Fetch user info
    case actionTypes.FETCH_USER_BASIC_INFO_REQUEST_SUCCESS: {
      return {
        ...state,
        data: action.response.user
      };
    }
    case actionTypes.FETCH_USER_LOGIN_REQUEST_SUCCESS: {
      return {
        ...state,
        data: action.response.userInfo
      }
    }
    case actionTypes.ADD_CHILD_TO_PARENT_SUCCESS: {
      return {
        ...state,
      }
    }
    default: {
      return state;
    }
  }
}