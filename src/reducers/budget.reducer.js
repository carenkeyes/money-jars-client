import * as actionTypes from '../actions/index.actions';

const initialState = {
    total: null,
    goals: null,
}

export default function budget(state=initialState, action){
    switch(action.type){
        case actionTypes.CREATE_GOAL_REQUEST_SUCCESS: {
            return {
                ...state,
                goals: [...state.goals, action.response.goal]
            }
        }
        /*case actionTypes.FETCH_GOAL_INFO_SUCCESS:{
            console.log('goal info success reducer')
            return {
                ...state,
                goals: action.response.user.goals
            }
        }*/
        case actionTypes.DELETE_GOAL_SUCCESS: {
            return {
                ...state,
                goals: action.response.data
            }
        }
        case actionTypes.FETCH_USER_LOGIN_REQUEST_SUCCESS: {
            return {
                ...state,
                total: action.response.userInfo.balance,
                goals: action.response.userInfo.goals,
            }
        }
        case actionTypes.FETCH_USER_BASIC_INFO_REQUEST_SUCCESS: {
            return {
                ...state,
                total: action.response.user.balance,
                goals: action.response.user.goals
            }
        }
        default: {
            return state;
        }
    }
}




/*export default function reduce(state=initialState, action){
    if(action.type === actions.ADD_GOAL){
        return Object.assign({}, state, {
            goals: [
                ...state.goals, {
                    title: action.goal.title,
                    amount: action.goal.amount,
                    saved: 0,
                    category: action.goal.category,
                    imageurl: action.goal.imageurl,
                }
            ]
        });
    }
    else if(action.type === actions.UPDATE_GOAL){
        console.log(action);
        console.log(action.data.id);
        let goals = state.goals.map((goal) => {
            if(goal.id !== action.data.id){
                console.log(goal);
                return goal;
            }
            return Object.assign({}, goal, {
                saved: goal.saved+action.data.amount
            })
        });
        return Object.assign({}, state, {goals});
    }
    return state;
}*/