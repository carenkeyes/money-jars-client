import * as actionTypes from '../actions/index.actions';

const initialState = {
    data: null,
}

export default function children(state=initialState, action){
    switch(action.type){
        default: {
            return state;
        }
    }
}