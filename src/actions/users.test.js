import * as actions from './index.actions';
import apiMiddleware from '../api-middleware';
import asyncMiddleware from 'redux-thunk';
import configureStore from 'redux-mock-store';

const middlewares = [
    asyncMiddleware,
    apiMiddleware,
];

const mockStore = configureStore(middlewares);

describe('User actions', () => {
    it('should retrieve the user info', async() => {
        const token = 'Bearer: mockToken'
        const response = {}
        const store = mockStore({});
        localStorage.setItem('userToken', token)
        fetch.mockResponseOnce(JSON.stringify(response));
        await store.dispatch(actions.fetchUserBasicInfo())
        const storedActions = store.getActions()
        expect(storedActions[0]).toEqual({type: 'FETCH_USER_BASIC_INFO_REQUEST_TRIGGERED'})
        expect(storedActions[1]).toEqual({type: 'FETCH_USER_BASIC_INFO_REQUEST_SUCCESS', response})
    })

    it('should log in an existing user', async() => {
        const store = mockStore({})
        const response = {}
        fetch.mockResponseOnce(JSON.stringify(response));
        await store.dispatch(actions.fetchUserLogin('username', 'password'))
        const storedActions = store.getActions()
        expect(storedActions[0]).toEqual({type: 'FETCH_USER_LOGIN_REQUEST_TRIGGERED'})
        expect(storedActions[1]).toEqual({type: 'FETCH_USER_LOGIN_REQUEST_SUCCESS', response})
    })

    it('should register a new user', async() => {
        const store = mockStore({})
        const user = {
            username: 'username',
            email: 'email@test',
            password: 'testpassword',
            usertype: 'parent',
        }
        const response = {user}
        fetch.mockResponseOnce(JSON.stringify(response));
        await store.dispatch(actions.registerUser(user))
        const storedActions = store.getActions()
        console.log(storedActions)
        expect(storedActions[0]).toEqual({type: 'FETCH_USER_SIGNUP_REQUEST_TRIGGERED'})
    })

    it('should update user profile', async() => {
        const store = mockStore({})
        const response = {}
        fetch.mockResponseOnce(JSON.stringify(response));
        await store.dispatch(actions.updateUserProfile('userId', 'data'))
        const storedActions = store.getActions()
        expect(storedActions[0]).toEqual({type: 'UPDATE_USER_PROFILE_TRIGGERED'})
        expect(storedActions[1]).toEqual({type: 'UPDATE_USER_PROFILE_SUCCESS', response})
    })

    it('should update user balance', async() => {
        const store = mockStore({})
        const response = {}
        fetch.mockResponseOnce(JSON.stringify(response));
        await store.dispatch(actions.updateUserBalance('userId', 'data'))
        const storedActions = store.getActions()
        expect(storedActions[0]).toEqual({type: 'UPDATE_USER_BALANCE_TRIGGERED'})
        expect(storedActions[1]).toEqual({type: 'UPDATE_USER_BALANCE_SUCCESS', response})
    })

    it('should update child balance', async() => {
        const store = mockStore({})
        const response = {}
        fetch.mockResponseOnce(JSON.stringify(response));
        await store.dispatch(actions.updateChildBalance('userId', 'data'))
        const storedActions = store.getActions()
        expect(storedActions[0]).toEqual({type: 'UPDATE_CHILD_BALANCE_TRIGGERED'})
        expect(storedActions[1]).toEqual({type: 'UPDATE_CHILD_BALANCE_SUCCESS', response})
    })

    it('Should return the logout action', () => {
        const action = actions.logoutUserRequest();
        expect(action.type).toEqual(actions.LOGOUT_USER_REQUEST_SUCCESS);
    })
})
