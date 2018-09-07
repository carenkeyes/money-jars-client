import config from '../config'
import GoalDetails from '../Components/GoalDetails/goal-details';
import { ADD_CHILD_TO_PARENT_TRIGGERED } from './users';

export const CREATE_GOAL_REQUEST_TRIGGERED = 'CREATE_GOAL_REQUEST_TRIGGERED'
export const CREATE_GOAL_REQUEST_SUCCESS = 'CREATE_GOAL_REQUEST_SUCCESS'
export const CREATE_GOAL_REQUEST_FAILURE = 'CREATE_GOAL_REQUEST_FAILURE'

export function createGoal(goal, userId){
    console.log('create goal')
    const promise = fetch(`${config.API_BASE_URL}/goal/`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            goal: goal,
            userId: userId
        })
    });
    return{
        onRequest: CREATE_GOAL_REQUEST_TRIGGERED,
        onSuccess: CREATE_GOAL_REQUEST_SUCCESS,
        onFailure: CREATE_GOAL_REQUEST_FAILURE,
        promise,
    }
}

/*export const FETCH_GOAL_INFO_TRIGGERED = 'FETCH_GOAL_INFO_TRIGGERED'
export const FETCH_GOAL_INFO_SUCCESS = 'FETCH_GOAL_INFO_SUCCESS'
export const FETCH_GOAL_INFO_FAILURE = 'FETCH_GOAL_INFO_FAILURE'

export function fetchGoalInfo() {
    console.log('fetch child info')
    const sessionKey = localStorage.getItem(config.TOKEN_CONTENT_KEY)
    const token = sessionKey.split(' ')[1]
    const promise = fetch(`${config.USER_DATA}`, {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `JWT ${token}`
        }
    });
    return {
        onRequest: FETCH_GOAL_INFO_TRIGGERED,
        onSuccess: FETCH_GOAL_INFO_SUCCESS,
        onFailure: FETCH_GOAL_INFO_FAILURE,
        promise,
    };
}*/

export const DELETE_GOAL_TRIGGERED = 'DELETE_GOAL_TRIGGERED'
export const DELETE_GOAL_SUCCESS = 'DELETE_GOAL_SUCCESS'
export const DELETE_GOAL_FAILURE = 'DELETE_GOAL_FAILURE'

export function deleteGoal(dataId, userId){
    const promise = fetch(`${config.API_BASE_URL}/goal/${dataId}?userid=${userId}`,{
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        }
    });
    return {
        onRequest: DELETE_GOAL_TRIGGERED,
        onSuccess: DELETE_GOAL_SUCCESS,
        onFailure: DELETE_GOAL_FAILURE,
        promise,
    }
}

export const UPDATE_GOAL_TRIGGERED = 'UPDATE_GOAL_TRIGGERED'
export const UPDATE_GOAL_SUCCESS = 'UPDATE_GOAL_SUCCESS'
export const UPDATE_GOAL_FAILURE = 'UPDATE_GOAL_FAILURE'

export function updateGoal(goalId, userId, amount){
    const promise = fetch(`${config.API_BASE_URL}/goal/${goalId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            userId: userId,
            change: amount,
        })
    })
    return{
        onRequest: UPDATE_GOAL_TRIGGERED,
        onSuccess: UPDATE_GOAL_SUCCESS,
        onFailure: UPDATE_GOAL_FAILURE,
        promise,
    }
}

export const UPDATE_TO_BUDGET = 'UPDATE_TO_BUDGET'

export const updateToBudget = (toBudget) => ({
    type: UPDATE_TO_BUDGET,
    toBudget
})
