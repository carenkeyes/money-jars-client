import React from 'react';
import {shallow} from 'enzyme';
import {ManualBudget} from './manual-budget';

const props = {
    user: {
        children: []
    }
}

describe('Manual Budget component', () => {
    it('Should render without crasing', () => {
        shallow(<ManualBudget {...props} />)
    })
})