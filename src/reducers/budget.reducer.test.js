import * as actions from '../actions/index.actions';
import budgetReducer from './budget.reducer';
import budget from './budget.reducer';
import { createGoal, updateToBudget } from '../actions/index.actions';

describe('budgetReducer', () => {
    const total = 15000;
    const goal1 ={ goal: {
        title: 'goal1',
        amount: 30000,
        category: 'saving'
    }}
    const goal2 = {
        title: 'goal2',
        amount: 50000,
        category: 'giving'
    }
    const change = 1000
    const toBudget = 10000;

    it('Should set the initial state when nothing is passed in', () => {
        const state = budget(undefined, {type: '_UNKNOWN'});
        expect(state).toEqual({
            total: null,
            goals: null,
            toBudget: null,
        })
    })

    it('Should return the current state on an unknown action', () => {
        let currentState = {};
        const state = budgetReducer(currentState, {type: '_UNKNOWN'});
        expect(state).toBe(currentState)
    })

    describe('create goal success', () => {
        const initialState = {
            goals: [{
                title: 'initialgoal',
                amount: 20000,
                cateogry: 'spending',
            }]
        }
        const newGoal = {...goal1}
        const expectedState = {
            goals: [
                {
                    title: 'initialgoal',
                    amount: 20000,
                    cateogry: 'spending',
                },
                {
                    title: newGoal.goal.title,
                    amount: newGoal.goal.amount,
                    category: newGoal.goal.category,
            }]
        }
        const reducedState = budgetReducer(initialState, {type: actions.CREATE_GOAL_REQUEST_SUCCESS, response: newGoal})
        expect(reducedState).toEqual(expectedState)
    })

    describe('Update toBudget', () => {
        let state = {};
        state = budgetReducer(state, updateToBudget(toBudget));
        expect(state).toEqual({
            toBudget: toBudget
        })
    })
})
