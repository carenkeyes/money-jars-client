import * as actions from './index.actions';
import apiMiddleware from '../api-middleware';
import asyncMiddleware from 'redux-thunk';
import configureStore from 'redux-mock-store';
import config from '../config';

const middlewares = [
    asyncMiddleware,
    apiMiddleware,
];

const mockStore = configureStore(middlewares);

describe('Fetch User Info', () => {
    it('should retrieve the user info', async() => {
        const token = 'mockToken'
        const response = {}
        const store = mockStore({});
        localStorage.setItem('token', token)
        fetch.mockResponseOnce(JSON.stringify(response));
        await store.dispatch(actions.fetchUserBasicInfo())
        const storedActions = store.getActions()
        expect(storedActions[0]).toEqual({type: 'FETCH_USER_BASIC_INFO_REQUEST_TRIGGERED'})
        expect(storedActions[1]).toEqual({type: 'FETCH_USER_BASIC_INFO_REQUEST_SUCCESS', response})
    })
})