import React from 'react';
import {shallow} from 'enzyme';
import {Child} from './child';

const mockUpdateToBudget = {
    type: 'MOCK_UPDATE_TO_BUDGET'
}

jest.mock('../../actions/index.actions', () => Object.assign({},
    require.requireActual('../../actions/index.actions'), {
        updateToBudget: jest.fn().mockImplementation(() => {
            return mockUpdateToBudget
        })
    }
))

describe('<Child />', () => {
    it('Should render and call updateToBudget on mount', () => {
        const mockedDispatch = jest.fn();
        shallow(<Child dispatch={mockedDispatch} />);
        expect(mockedDispatch).toHaveBeenCalledWith(mockUpdateToBudget);
    })

})