import * as actionTypes from '../actions/index.actions';

const initialState = {
  _id: null,
  username: null,
  usertype: null,
  budget_id: null,
  setupComplete: null,
  children: null,
  account: null,
}

export default function user(state=initialState, action) {
  switch (action.type) {
    //Fetch user info
    case actionTypes.FETCH_USER_BASIC_INFO_REQUEST_SUCCESS: {
      console.log(action.response)
      return {
        ...state,
        _id: action.response.user._id,
        username: action.response.user.username,
        usertype: action.response.user.usertype,
        budget_id: action.response.user.budget_id,
        setupComplete: action.response.user.setupComplete,
        children: action.response.user.children,
        account: action.response.user.account,
      }
    }
    case actionTypes.FETCH_USER_LOGIN_REQUEST_SUCCESS: {
      return {
        ...state,
        _id: action.response.userInfo._id,
        username: action.response.userInfo.username,
        usertype: action.response.userInfo.usertype,
        budget_id: action.response.userInfo.budget_id,
        setupComplete: action.response.userInfo.setupComplete,
        children: action.response.userInfo.children,
        account: action.response.userInfo.account,
      }
    }
    //should make a child reducer
    case actionTypes.ADD_CHILD_TO_PARENT_SUCCESS: {
      return {
        ...state,
      }
    }
    case actionTypes.UPDATE_USER_PROFILE_SUCCESS: {
      return {
        ...state,
        budget_id: action.response.updatedUser.budget_id,
        setupComplete: action.response.updatedUser.setupComplete,
        children: action.response.updatedUser.children, 
      }
    }
    case actionTypes.LOGOUT_USER_REQUEST_SUCCESS: {
      return {
        ...state,
        ...initialState
      }
    }
    default: {
      return state;
    }
  }
}