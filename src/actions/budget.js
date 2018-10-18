import config from '../config'

export const CREATE_GOAL_REQUEST_TRIGGERED = 'CREATE_GOAL_REQUEST_TRIGGERED'
export const CREATE_GOAL_REQUEST_SUCCESS = 'CREATE_GOAL_REQUEST_SUCCESS'
export const CREATE_GOAL_REQUEST_FAILURE = 'CREATE_GOAL_REQUEST_FAILURE'

export function createGoal(goal, userId){
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

export const updateToBudget = (toBudget) => (
    {
    type: UPDATE_TO_BUDGET,
    toBudget
})
