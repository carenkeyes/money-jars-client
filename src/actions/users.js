//import {SubmissionError} from 'redux-form';
import config from '../config';
//import {normalizeResponseErrors} from './utils';
import {push} from 'connected-react-router';


export const FETCH_USER_BASIC_INFO_REQUEST_TRIGGERED = 'FETCH_USER_BASIC_INFO_REQUEST_TRIGGERED';
export const FETCH_USER_BASIC_INFO_REQUEST_SUCCESS = 'FETCH_USER_BASIC_INFO_REQUEST_SUCCESS';
export const FETCH_USER_BASIC_INFO_REQUEST_FAILURE = 'FETCH_USER_BASIC_INFO_REQUEST_FAILURE';

export function fetchUserBasicInfo() {
    console.log('fetch user basic info')
    const sessionKey = sessionStorage.getItem(config.TOKEN_CONTENT_KEY)
    const token = sessionKey.split(' ')[1]
    const promise = fetch(`${config.USER_DATA}`, {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `JWT ${token}`
        }
    });
    return {
        onRequest: FETCH_USER_BASIC_INFO_REQUEST_TRIGGERED,
        onSuccess: FETCH_USER_BASIC_INFO_REQUEST_SUCCESS,
        onFailure: FETCH_USER_BASIC_INFO_REQUEST_FAILURE,
        promise,
    };
}

export const FETCH_USER_LOGIN_REQUEST_TRIGGERED = 'FETCH_USER_LOGIN_REQUEST_TRIGGERED';
export const FETCH_USER_LOGIN_REQUEST_SUCCESS = 'FETCH_USER_LOGIN_REQUEST_SUCCESS';
export const FETCH_USER_LOGIN_REQUEST_FAILURE = 'FETCH_USER_LOGIN_REQUEST_FAILURE';

const handleLoginResponse = (response, dispatch) => {
  sessionStorage.setItem(config.TOKEN_CONTENT_KEY, response.token);
  dispatch({
      type: FETCH_USER_LOGIN_REQUEST_SUCCESS,
      response,
  });
  dispatch(push('/dashboard'));
};


export const FETCH_USER_SIGNUP_REQUEST_TRIGGERED = 'FETCH_USER_SIGNUP_REQUEST_TRIGGERED';
export const FETCH_USER_SIGNUP_REQUEST_SUCCESS = 'FETCH_USER_SIGNUP_REQUEST_SUCCESS';
export const FETCH_USER_SIGNUP_REQUEST_FAILURE = 'FETCH_USER_SIGNUP_REQUEST_FAILURE';
export const CREATE_USER_REQUEST_SUCCESS = 'CREATE_USER_REQUEST_SUCCESS';

export function registerUser(user) {
    const promise = fetch(`${config.USER_CREATE}`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          username: user.username,
          email: user.email,
          password: user.password,
          type: user.type,
          category_id: user.category_id,
          budget_id: user.budget_id,
        }),
    });
    return {
        onRequest: FETCH_USER_SIGNUP_REQUEST_TRIGGERED,
        onSuccess: handleCreateUserResponse,
        onFailure: FETCH_USER_SIGNUP_REQUEST_FAILURE,
        promise,
    };
  }

export const ADD_CHILD_TO_PARENT_TRIGGERED = 'ADD_CHILD_TO_PARENT_TRIGGERED';
export const ADD_CHILD_TO_PARENT_SUCCESS = 'ADD_CHILD_TO_PARENT_SUCCESS';
export const ADD_CHILD_TO_PARENT_FAILURE = 'ADD_CHILD_TO_PARENT_FAILURE';

const handleCreateUserResponse = (response, dispatch, getState) => {
    console.log(`usertype: ${response.usertype}`)
    const usertype = response.usertype;
    const username = response.username;
    if(usertype === 'parent'){
        dispatch({
            type: CREATE_USER_REQUEST_SUCCESS,
            response,
        });
        //dispatch(push('/dashboard'));
    }
    else if (usertype === 'child'){
        console.log(username)
        const userId = getState().user.data._id
        addChildToParent(username, userId)
        dispatch(push('/parent'));
    }
};

function addChildToParent(childname, userId){
    const promise = fetch(`${config.API_BASE_URL}/user/child/${userId}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          username: childname,
        }),
    });
    return {
        onRequest: ADD_CHILD_TO_PARENT_TRIGGERED,
        onSuccess: fetchUserBasicInfo,
        onFailure: ADD_CHILD_TO_PARENT_FAILURE,
        promise,
    };
  }
  

export function fetchUserLogin(username, password) {
    console.log('fetch user login');
  const promise = fetch(`${config.USER_ENDPOINT}`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        username,
        password,
      }),
  });
  return {
      onRequest: FETCH_USER_LOGIN_REQUEST_TRIGGERED,
      onSuccess: handleLoginResponse,
      onFailure: FETCH_USER_LOGIN_REQUEST_FAILURE,
      promise,
  };
}

export const UPDATE_USER_PROFILE_TRIGGERED = 'UPDATE_USER_PROFILE_TRIGGERED'
export const UPDATE_USER_PROFILE_SUCCESS = 'UPDATE_USER_PROFILE_SUCCESS'
export const UPDATE_USER_PROFILE_FAILURE = 'UPDATE_USER_PROFILE_FAILURE'

export function updateUserProfile(userId, data){
    console.log(`userId: ${userId}`)
    console.log(`data: ${data.budget_id}`)
    const promise = fetch(`${config.API_BASE_URL}/user/${userId}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({data}) 
    });
    return {
        onRequest: UPDATE_USER_PROFILE_TRIGGERED,
        onSuccess: UPDATE_USER_PROFILE_SUCCESS,
        onFailure: UPDATE_USER_PROFILE_FAILURE,
        promise,
    }
}