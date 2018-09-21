import React from 'react';
import {shallow} from 'enzyme';
import {AddChildWrapper} from './add-child-wrapper';
import { fetchYnabCategories } from '../../actions/ynab';

describe('<AddChildWrapper />', () => {
    const user = {
        budget_id: 'budget_id',
        user_id: 'user_id'
    }
    it('Should render without crashing', () => {
        shallow(<AddChildWrapper 
            user={user}
        />)
    })
    it('ComponentDidMount', () => {
        const dispatch = jest.fn();
        wrapper = shallow(<AddChildWrapper user={user} />)
        wrapper.instance().componentDidMount()
        expect(dispatch).toHaveBeenCalledWith(fetchYnabCategories)
    })
})