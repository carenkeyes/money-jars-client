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
    case actionTypes.FETCH_CHILD_INFO_SUCCESS: {
      return {
        ...state,
        data: {
            _id: action.response.user._id,
            username: action.response.username,
            usertype: action.response.usertype
        }
      }
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
    case actionTypes.UPDATE_USER_PROFILE_SUCCESS: {
      return {
        ...state,
        data: action.response.updatedUser  
      }
    }
    case actionTypes.LOGOUT_USER: {
      return {
        ...state,
        data: null
      }
    }
    case actionTypes.CREATE_GOAL_REQUEST_SUCCESS: {
      return {
        ... state,
      data: {
        goals: [...user.data.goals, action.response.goal]
      }  
      }
    }
    default: {
      return state;
    }
  }
}