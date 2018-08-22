import * as types from '../actions/index';

import initialState from './initialState.reducer';

export default function sessionReducer(state = initialState.session, action){
    switch(action.type){
        case types.FETCH_USER_LOGIN_REQUEST_SUCCESS:
            return !!sessionStorage.jwt
        default:
            return state;
    }
}