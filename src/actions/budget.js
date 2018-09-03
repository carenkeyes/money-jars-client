import config from '../config'

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

export const FETCH_CHILD_INFO_TRIGGERED = 'FETCH_CHILD_INFO_TRIGGERED'
export const FETCH_CHILD_INFO_SUCCESS = 'FETCH_CHILD_INFO_SUCCESS'
export const FETCH_CHILD_INFO_FAILURE = 'FETCH_CHILD_INFO_FAILURE'

export function fetchChildInfo() {
    console.log('fetch child info')
    const sessionKey = sessionStorage.getItem(config.TOKEN_CONTENT_KEY)
    const token = sessionKey.split(' ')[1]
    const promise = fetch(`${config.USER_DATA}`, {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `JWT ${token}`
        }
    });
    return {
        onRequest: FETCH_CHILD_INFO_TRIGGERED,
        onSuccess: FETCH_CHILD_INFO_SUCCESS,
        onFailure: FETCH_CHILD_INFO_FAILURE,
        promise,
    };
}



export const ADD_GOAL = 'ADD_GOAL';
export const addGoal= (goal) => ({
    type: ADD_GOAL,
    goal
})

export const UPDATE_GOAL = 'UPDATE_GOAL';
export const updateGoal = (data) => ({
    type: UPDATE_GOAL,
    data
})
