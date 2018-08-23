import config from '../config';
import {push} from 'connected-react-router';

export const FETCH_USER_BASIC_INFO_REQUEST_TRIGGERED = 'FETCH_USER_BASIC_INFO_REQUEST_TRIGGERED';
export const FETCH_USER_BASIC_INFO_REQUEST_SUCCESS = 'FETCH_USER_BASIC_INFO_REQUEST_SUCCESS';
export const FETCH_USER_BASIC_INFO_REQUEST_FAILURE = 'FETCH_USER_BASIC_INFO_REQUEST_FAILURE';

export function fetchUserBasicInfo(){
    const promise = fetch(`${config.API_BASE_URL}`, {
        headers: {
            'Content-Type': 'application/json',
            Authorization: sessionStorage.getItem(config.TOKEN_CONTENT_KEY)
        }
    });
    return{
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
}

export const FETCH_USER_SIGNUP_REQUEST_TRIGGERED = 'FETCH_USER_SIGNUP_REQUEST_TRIGGERED';
export const FETCH_USER_SIGNUP_REQUEST_SUCCESS = 'FETCH_USER_SIGNUP_REQUEST_SUCCESS';
export const FETCH_USER_SIGNUP_REQUEST_FAILURE = 'FETCH_USER_SIGNUP_REQUEST_FAILURE';
export const CREATE_USER_REQUEST_SUCCESS = 'CREATE_USER_REQUEST_SUCCESS';

export function createUser(username, email, password, usertype){
    const promise = fetch(`${config.USER_CREATE}`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            username,
            email,
            password,
            usertype
        }),
    });
    return {
        onRequest: FETCH_USER_SIGNUP_REQUEST_TRIGGERED,
        onSuccess: handleCreateUserReponse,
        onFailure: FETCH_USER_LOGIN_REQUEST_FAILURE,
        promise,
    };
}

const handleCreateUserReponse = (response, dispatch) => {
    sessionStorage.setItem(config.TOKEN_CONTENT_KEY, response.token);
    dispatch({
        type: CREATE_USER_REQUEST_SUCCESS,
        response,
    })
    dispatch(push('/dashboard'));
};

export function fetchUserLogin(username, password){
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



/*import {SubmissionError} from 'redux-form';

import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';
import { authError, authRequest } from './auth';

export const registerUser = user => dispatch => {
    return fetch(`${API_BASE_URL}/user`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .catch(err => {
        const {reason, message, location} = err;
        if (reason === 'ValidationError'){
            return Promise.reject(
                new SubmissionError({
                    [location]: message 
                })
            );
        }
    });
};

export const addChild = child => (dispatch, getState) => {
    dispatch(authRequest());
    const userId = getState().protectedData._id;
    return fetch(`${API_BASE_URL}/user/child/${userId}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(child)
    })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .catch(err => {
        dispatch(authError(err))
        return Promise.reject(
            new SubmissionError()
        )
    })
}*/