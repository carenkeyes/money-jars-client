export const ADD_GOAL = 'ADD_GOAL';
export const addGoal= (title, amount, category) => ({
    type: ADD_GOAL,
    title,
    amount,
    category
})
