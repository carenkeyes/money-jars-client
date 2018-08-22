import * as actionTypes from '../actions';

const initialState = {
    isFetchingUserBasicInfo: false,
};

export default function appState(state = initialState, action){
    switch (action.type){
        case actionTypes.FETCH_USER_BASIC_INFO_REQUEST_TRIGGERED: {
            return {
                ...state,
                isFetchingUserBasicInfo: true,
            };
        }
        case actionTypes.FETCH_USER_BASIC_INFO_REQUEST_SUCCESS:
        case actionTypes.FETCH_USER_BASIC_INFO_REQUEST_FAILURE: {
            return {
                ...state,
                isFetchingUserBasicInfo: initialState.isFetchingUserBasicInfo,
            };
        }
        default: {
            return state;
        }
    }
}