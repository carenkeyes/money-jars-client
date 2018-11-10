import * as actionTypes from '../actions/index.actions';

const initialState = {
    total: null,
    goals: null,
    toBudget: null,
}

export default function budget(state=initialState, action){
    switch(action.type){
        case actionTypes.CREATE_GOAL_REQUEST_SUCCESS: {
            return {
                ...state,
                goals: [...state.goals, action.response.goal]
            }
        }
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
        case actionTypes.UPDATE_GOAL_SUCCESS: {
            return{
                ...state,
                goals: action.response.goals
            }
        }
        case actionTypes.UPDATE_TO_BUDGET: {
            console.log(action)
            return{
                ...state,
                toBudget: action.toBudget
            }
        }
        case actionTypes.UPDATE_USER_BALANCE_SUCCESS: {
            return {
              ...state,
              total: action.response.updatedUser.balance,
            }
        }
        case actionTypes.FETCH_YNAB_CATEGORY_BALANCE_SUCCESS:{
            console.log(action.response)
            return{
                ...state,
                total: action.response.balance
            }
        }
        case actionTypes.EDIT_GOAL_SUCCESS:{
            console.log(action.response)
            console.log(action.response._id)
            const newGoals = state.goals.map(goal => 
                goal._id === action.response._id? action.response : goal)
            console.log(newGoals)
            return{
                ...state,
                goals: newGoals
            }
        }
        default: {
            return state;
        }
    }
}
