import * as actionTypes from '../actions/index.actions';

const initialState = {
  id: null
}

export default function user(state=initialState, action) {
  switch (action.type) {
    //Fetch user info
    case actionTypes.FETCH_USER_BASIC_INFO_REQUEST_SUCCESS: {
      return {
        ...state,
        id: action.response.id,
      };
    }
    default: {
      return state;
    }
  }
}