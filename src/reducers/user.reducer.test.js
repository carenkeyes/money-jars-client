import * as actions from '../actions/index.actions';
import userReducer from './user.reducer';
import budget from './budget.reducer';

describe('userReducer', () => {
    const initialState = {
        _id: null,
        username: null,
        usertype: null,
        budget_id: null,
        setupComplete: null,
        children: null,
        account: null,
    }

    const newUser = {
        _id: 'id',
        username: 'username',
        usertype: 'parent',
        budget_id: 'budgetId', 
        setupComplete: true,
        children: [],
        account: 'account',
    }

    it('Should set the initial state when nothing is passed in', () => {
            const state = userReducer(undefined, {type: '_UNKNOWN'})
            expect(state).toEqual(initialState)
        })

    it('Should return the current state on an unknown action', () => {
        const currentState = {};
        const state = userReducer(currentState, {type: '_UNKNOWN'});
        expect(state).toEqual(currentState)
    })

    describe('fetch user basic info success', () => {
        const expectedState = {
            _id: 'id',
            username: 'username',
            usertype: 'parent',
            
            budget_id: 'budgetId', 
            setupComplete: true,
            children: [],
            account: 'account',
        }
        const reducedState = userReducer(initialState, 
            {type: actions.FETCH_USER_BASIC_INFO_REQUEST_SUCCESS, response: {user: newUser}})
        expect(reducedState).toEqual(expectedState)
    })

    describe('fetch user login success', () => {
        const expectedState = {
            _id: 'id',
            username: 'username',
            usertype: 'parent',
            budget_id: 'budgetId', 
            setupComplete: true,
            children: [],
            account: 'account',
        }
        const reducedState = userReducer(initialState, 
            {type: actions.FETCH_USER_LOGIN_REQUEST_SUCCESS, response: {userInfo: newUser}})
        expect(reducedState).toEqual(expectedState)
    })

    describe('fetch user basic info success', () => {
        const expectedState = {
            _id: null,
            username: null,
            usertype: null,
            budget_id: 'budgetId', 
            setupComplete: true,
            children: [],
            account: 'account',
        }
        const updateUser = {
            budget_id: 'budgetId', 
            setupComplete: true,
            children: [],
            account: 'account',
        }
        const reducedState = userReducer(initialState, 
            {type: actions.UPDATE_USER_PROFILE_SUCCESS, response: {updatedUser: updateUser}})
        expect(reducedState).toEqual(expectedState)
    })

    describe('log out success', () => {
        const currentState = {
            _id: 'id',
            username: 'username',
            usertype: 'parent',
            budget_id: 'budgetId', 
            setupComplete: true,
            children: [],
            account: 'account', 
        }
        const reducedState = userReducer(currentState, {type: actions.LOGOUT_USER_REQUEST_SUCCESS});
        expect(reducedState).toEqual(initialState)
    })
})