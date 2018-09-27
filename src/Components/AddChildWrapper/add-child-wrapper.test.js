import React from 'react';
import {shallow, mount} from 'enzyme';
import {AddChildWrapper} from './add-child-wrapper';

describe('<AddChildWrapper />', () => {
    const user = {
        budget_id: 'manual',
        user_id: 'user_id'
    }
    it('Should render without crashing', () => {
        shallow(<AddChildWrapper 
            user={user}
        />)
    })
})