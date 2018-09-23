import React from 'react';
import {shallow} from 'enzyme';
import {ChildWrapper} from './child-wrapper';

const mockFetchYnabBalance= (data) => ({
    type: 'FETCH_YNAB_BALANCE',
    data,
})

jest.mock('../../actions/index.actions', () => Object.assign({},
    require.requireActual('../../actions/index.actions'), {
        fetchYnabCategoryBalance: jest.fn().mockImplementation(() => {
                return mockFetchYnabBalance;
        })
    }
))

const props = {
    user: {
        budget_id: 'manual',
    }, 
    ynab: {

    }, 
    budget: {
        goals: []
    }
}

describe('<ChildWrapper />', () => {
    it('Should render without crashing', () => {
        shallow(<ChildWrapper {...props} user={{budget_id: 'manual'}}/>)
    })
    it('Should fetch YNAB category balance when not set to manual', () => {
        const dispatch = jest.fn();
        shallow(<ChildWrapper {...props} user={{budget_id: 'ynab'}} dispatch={dispatch} />)
        expect(dispatch).toHaveBeenCalledWith(mockFetchYnabBalance)
    })
    it('Should have addNew initial set to false', () => {
        const wrapper = shallow(<ChildWrapper {...props} user={{budget_id: 'manual'}} />);
        expect(wrapper.state('addNew')).toEqual(false)
    })
})