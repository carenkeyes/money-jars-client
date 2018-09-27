import React from 'react';
import {shallow} from 'enzyme';
import {Dashboard} from './dashboard';

const mockFetchUserBasicInfo = (data) => ({
    type: 'FETCH_USER_BASIC_INFO',
    data,
})

jest.mock('../../actions/index.actions', () => Object.assign({},
    require.requireActual('../../actions/index.actions'), {
        fetchUserBasicInfo: jest.fn().mockImplementation(() => {
                return mockFetchUserBasicInfo;
        })
    }
))

const props = {
    user: {
        usertype: 'parent',
        setupComplete: false,
    }
}

describe('dashbaord', () => {
    it('Should render and fetch user info', () => {
        const dispatch = jest.fn()
        shallow(<Dashboard dispatch={dispatch} {...props}/>)
        expect(dispatch).toHaveBeenCalledWith(mockFetchUserBasicInfo);
    })
})