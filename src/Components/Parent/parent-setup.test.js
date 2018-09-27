import React from 'react';
import {shallow} from 'enzyme';
import {ParentSetup} from './parent-setup';

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
        _id: 'userId',
    },
    ynab: {
        data: {git }
    }
}

describe('Parent setup component', () => {
    const dispatch = jest.fn()
    it('Should render and fetch user info', () => {
        shallow(<ParentSetup {...props} dispatch={dispatch}/>)
        expect(dispatch).toHaveBeenCalledWith(mockFetchUserBasicInfo);
    })
    it('Should initial have register set to false', () => {
        const wrapper = shallow(<ParentSetup {...props} dispatch={dispatch}/>)
        expect(wrapper.state('setupComplete')).toEqual(false);
    })
    it('Should initial have register set to false', () => {
        const wrapper = shallow(<ParentSetup {...props} dispatch={dispatch}/>)
        expect(wrapper.state('setupComplete')).toEqual(false);
    })
    it('Should set have register to true on addChild', () => {
        const wrapper = shallow(<ParentSetup {...props} dispatch={dispatch}/>)   
        const instance = wrapper.instance();
        instance.addChild();
        expect(wrapper.state('register')).toEqual(true);
    })
})