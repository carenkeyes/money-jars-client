import {push} from 'react-router-redux';
import * as actionTypes from './actions/index';

import config from './config'

const parseJSON = response => response.json();

const checkStatus = (dispatch, response) => {
    if(response.statuse >= 200 && response.status <300 ){
        return response;
    }
    if(response.status === 401){
        dispatch({type: actionTypes.UNAUTHORIZED_REDIRECT});
        dispatch(push(config.UNAUTHORIZED_ENDPOINT));
    }else if (response.status === 403){
       dispatch({type: actionTypes.FORBIDDEN_REDIRECT});
       dispatch(push(config.FORBIDDEN_ENDPOINT));
    }else if (response.status === 404){
        dispatch({type: actionTypes.NOT_FOUND_REDIRECT});
        dispatch(push(config.NOT_FOUND_ENDPOINT))
    }else if (response.status >= 400 && response.status <500){
        response.json().then((data) => {
            dispatch({type: actionTypes.SHOW_ALERT_MESSAGE, response: data});
        });
    }else if (response.status >= 500 && response.status < 600){
        dispatch({type: actionTypes.SERVER_ERROR_REDIRECT});
        dispatch(push(config.SERVER_ERROR_ENDPOINT));
    }

    return response.json().then((data) => {
        const error = new Error(response.statusText, data);
        throw error;
    });
};

export default function apiMiddleware({dispatch, getState}){
    return next => (action) => {
        const {
            promise, onRequest, onSuccess, onFailure, ...rest
        } = action;
        if(!promise){
            return next(action);
        }

        if(typeof onRequest === 'function'){
            onRequest(dispatch, getState, ...rest);
        }else{
            dispatch({type: onRequest, ...rest});
        }


    return promise 
        .catch((error) => {
            dispatch({type: actionTypes.NOT_FOUND_REDIRECT});
            dispatch(push(config.NOT_FOUND_ENDPOINT));
            throw new Error('Network failure', error.message);
        })
        .then(checkStatus.bind(null, dispatch))
        .then(parseJSON)
        .then((response) => {
            try{
                if(typeof onSuccess === 'function'){
                    onSuccess(response, onSuccess, getState, ...rest);
                }else{
                    dispatch({type: onSuccess, response, ...rest});
                }
            }catch (err){
                err.message = `Action success error: ${err.message}`;
                err.type = 'ActionError';
                throw err;
            }
        })
        .catch((error) => {
            if(error.type !=='ActionError' || error.type === 'Unauthorized'){
                if(typeof onFailure === 'function'){
                    onFailure(error.response, dispatch, getState, ...rest);
                }else {
                    dispatch({type: onFailure, error: error.response, ...rest});
                }
            }else{
                throw error;
            }
        });
    }
}