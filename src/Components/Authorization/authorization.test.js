import React from 'react';
import {shallow} from 'enzyme';
import {Authorization} from './authorization';
import TestUtils from 'react-dom/test-utils';

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

describe('<Authorization />', () => {
    //create child component to mock rendering without calling componentDidMount
    it('Should render without crashing', () => {
        let AuthorizationTest = class extends Authorization {
            componentDidMount(){
            }
        };
        TestUtils.renderIntoDocument(<AuthorizationTest />);
        shallow(<AuthorizationTest />)
    })
    //this works, but the mock call doesn't return anything so it can't call then
    //need to find a way to return mock data
    /*const mockedDispatch = jest.fn();
    it('Should dispatch fetchUserBasicInfo when component mounts', () => {
       shallow(<Authorization dispatch={mockedDispatch}/>);
       expect(dispatch).toHaveBeenCalledWith(mockFetchUserBasicInfo);
    })*/
})