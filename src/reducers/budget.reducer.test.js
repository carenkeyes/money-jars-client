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

    describe('delete goal success', () => {
        const initialState = {
            total: total,
            goals: goal1,
            toBudget: toBudget,
        }
        const expectedState = {
            total: total,
            goals: null,
            toBudget: toBudget,
        }
        const reducedState = budgetReducer(initialState, {type: actions.DELETE_GOAL_SUCCESS, response: {data: null}})
        expect(reducedState).toEqual(expectedState)
    })

    describe('fetch user login request success', () => {
        const initialState = {
            total: null,
            goals: null,
            toBudget: null,
        }
        const userInfo = {
            balance: total,
            goals: {goal1}
        }
        const expectedState = {
            total: total,
            goals: {goal1},
            toBudget: null,
        }
        const reducedState = budgetReducer(initialState, 
            {type: actions.FETCH_USER_LOGIN_REQUEST_SUCCESS, response: {userInfo: userInfo}})
        expect(reducedState).toEqual(expectedState)
    })

    describe('fetch user basic info success', () => {
        const initialState = {
            total: null,
            goals: null,
            toBudget: null,
        }
        const user = {
            balance: total,
            goals: {goal1}
        }
        const expectedState = {
            total: total,
            goals: {goal1},
            toBudget: null,
        }
        const reducedState = budgetReducer(initialState, 
            {type: actions.FETCH_USER_BASIC_INFO_REQUEST_SUCCESS, response: {user: user}})
        expect(reducedState).toEqual(expectedState)
    })

    describe('fetch update goals success', () => {
        const initialState = {
            total: total,
            goals: goal1,
            toBudget: null,
        }
        const goals = [
            {goal1},
            {goal2}
        ]
        const expectedState = {
            total: total,
            goals: [{goal1}, {goal2}],
            toBudget: null,
        }
        const reducedState = budgetReducer(initialState, 
            {type: actions.UPDATE_GOAL_SUCCESS, response: {goals: goals}})
        expect(reducedState).toEqual(expectedState)
    })

    describe('Update toBudget', () => {
        let state = {};
        state = budgetReducer(state, updateToBudget(toBudget));
        expect(state).toEqual({
            toBudget: toBudget
        })
    })

    describe('update user balance success', () => {
        const initialState = {
            total: null,
        }
        const expectedState = {
            total: 5000,
        }
        const reducedState = budgetReducer(initialState, 
            {type: actions.UPDATE_USER_BALANCE_SUCCESS, response: {user: {balance: 5000}}})
        expect(reducedState).toEqual(expectedState)
    })

    describe('fetch YNAB balance success', () => {
        const initialState = {
            total: null,
        }
        const expectedState = {
            total: 5000,
        }
        const reducedState = budgetReducer(initialState, 
            {type: actions.FETCH_YNAB_CATEGORY_BALANCE_SUCCESS, response: 5000})
        expect(reducedState).toEqual(expectedState)
    })

})
