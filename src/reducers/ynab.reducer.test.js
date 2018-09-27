import * as actions from '../actions/index.actions';
import ynabReducer from './ynab.reducer';

describe('ynabReducer', () => {
    const initialState = {
        loading: false,
        error: false,
        data: null,
        balance: null,
        toBudget: null,
    }

    it('Should set the initial state when nothing is passed in', () => {
        const state = ynabReducer(undefined, {type: '_UNKNOWN'});
        expect(state).toEqual(initialState);
    })

    it('Should return the current state on an unknown action', () => {
        const currentState = {};
        const state = ynabReducer(currentState, {type: '_UNKNOWN'});
        expect(state).toEqual(currentState)
    })

    describe('fetch ynab budgets success', () => {
        const budgets = {}
        const expectedState = {
            loading: false,
            error: false,
            data: {},
            balance: null,
            toBudget: null,
        }
        const reducedState = ynabReducer(initialState, 
            {type: actions.FETCH_YNAB_BUDGETS_REQUEST_SUCCESS, response: budgets})
        expect(reducedState).toEqual(expectedState)
    })

    describe('fetch ynab budgets failure', () => {
        const expectedState = {
            loading: false,
            error: true,
            data: null,
            balance: null,
            toBudget: null,
        }
        const reducedState = ynabReducer(initialState,
            {type: actions.FETCH_YNAB_BUDGETS_REQUEST_FAILURE})
        expect(reducedState).toEqual(expectedState);
    })

    describe('fetch ynab budgets request triggered', () => {
        const expectedState = {
            loading: true,
            error: false,
            data: null,
            balance: null,
            toBudget: null,
        }
        const reducedState = ynabReducer(initialState, 
            {type: actions.FETCH_YNAB_BUDGETS_REQUEST_TRIGGERED})
        expect(reducedState).toEqual(expectedState);
    })

    describe('fetch ynab categories success', () => {
        const categories = {}
        const expectedState = {
            loading: false,
            error: false,
            data: {},
            balance: null,
            toBudget: null,
        }
        const reducedState = ynabReducer(initialState, {
            type: actions.FETCH_YNAB_CATEGORIES_REQUEST_SUCCESS,
            response: categories
        })
        expect(reducedState).toEqual(expectedState);
    })
})