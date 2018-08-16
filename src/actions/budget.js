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
