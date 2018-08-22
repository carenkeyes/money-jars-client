import * as actionTypes from '../actions';

const initialState = {
    isLoggedIn: false,
    id: null,
    username: null,
    email: null,
};

export default function user(state = initialState, action){
    switch(action.type){
        case actionTypes.FETCH_USER_BASIC_INFO_REQUEST_SUCCESS: {
            return{
                ...state,
                id: action.response._id,
                username: action.response.username,
                email: action.response.email,
                isLoggedIn: true,
            };
        }
        default: {
            return state;
        }
    }
}