import React from 'react';
import {shallow} from 'enzyme';
import {ParentComplete} from './parent-complete';

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
        username: 'username',
        children: [],
        budget_id: 'manual'
    }
}

describe('Parent complete component', () => {
    it('Should render and fetch user info', () => {
        const dispatch = jest.fn()
        shallow(<ParentComplete {...props} />);
    })
})