import * as actions from '../actions/index.actions';
import appStateReducer from './appState.reducer';

describe('appStateReducer', () => {
    const initialState = {
        isFetchingUserInfo: false,
        hasUserInfo: false,
        serverErrorMessage: null,
    }

    it('Should set the initial state when nothing is passed in', () => {
        const state = appStateReducer(undefined, {type: '_UNKNOWN'});
        expect(state).toEqual({
            isFetchingUserInfo: false,
            hasUserInfo: false,
            serverErrorMessage: null,
        })
    })
    it('Should return the current state on an unknown action', () => {
        let currentState = {};
        const state = appStateReducer(currentState, {type: '_UNKNOWN'});
        expect(state).toBe(currentState)
    })

    describe('fetch user basic info triggered', () => {
        const expectedState = {
            isFetchingUserInfo: true,
            hasUserInfo: false,
            serverErrorMessage: null,
        }
        const reducedState = appStateReducer(initialState, 
            {type: actions.FETCH_USER_BASIC_INFO_REQUEST_TRIGGERED})
        expect(reducedState).toEqual(expectedState)
    })

    describe('fetch user basic info success', () => {
        const expectedState = {
            isFetchingUserInfo: false,
            hasUserInfo: true,
            serverErrorMessage: null,
        }
        const reducedState = appStateReducer(initialState, 
            {type: actions.FETCH_USER_BASIC_INFO_REQUEST_SUCCESS})
        expect(reducedState).toEqual(expectedState)
    })

    describe('fetch user basic info failure', () => {
        const expectedState = {
            isFetchingUserInfo: false,
            hasUserInfo: false,
            serverErrorMessage: null,
        }
        const reducedState = appStateReducer(initialState, 
            {type: actions.FETCH_USER_BASIC_INFO_REQUEST_FAILURE})
        expect(reducedState).toEqual(expectedState)
    })

    describe('fetch user login request triggered', () => {
        const expectedState = {
            isFetchingUserInfo: true,
            hasUserInfo: false,
            serverErrorMessage: null,
        }
        const reducedState = appStateReducer(initialState, 
            {type: actions.FETCH_USER_LOGIN_REQUEST_TRIGGERED})
        expect(reducedState).toEqual(expectedState)
    })

    describe('fetch user login request success', () => {
        const expectedState = {
            isFetchingUserInfo: false,
            hasUserInfo: true,
            serverErrorMessage: null,
        }
        const reducedState = appStateReducer(initialState, 
            {type: actions.FETCH_USER_LOGIN_REQUEST_SUCCESS})
        expect(reducedState).toEqual(expectedState)
    })

    describe('fetch user login request failure', () => {
        const expectedState = {
            isFetchingUserInfo: false,
            hasUserInfo: false,
            serverErrorMessage: null,
        }
        const reducedState = appStateReducer(initialState, 
            {type: actions.FETCH_USER_LOGIN_REQUEST_FAILURE})
        expect(reducedState).toEqual(expectedState)
    })

    describe('show alert message', () => {
        const errorMessage = {
            generalMessage: 'error'
        }
        const expectState = {
            isFetchingUserInfo: false,
            hasUserInfo: false,
            serverErrorMessage: {message: 'error', hasError: true}
        }
        const reducedState = appStateReducer(initialState,
        {type: actions.SHOW_ALERT_MESSAGE, response: errorMessage})
        expect(reducedState).toEqual(expectState)
    })

    describe('reset alert message', () => {
        const expectedState = {
            isFetchingUserInfo: false,
            hasUserInfo: false,
            serverErrorMessage: null,
        }
        const reducedState = appStateReducer(initialState, 
            {type: actions.RESET_ALERT_MESSAGE})
        expect(reducedState).toEqual(expectedState)
    })
})