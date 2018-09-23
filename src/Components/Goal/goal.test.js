import React from 'react';
import {shallow} from 'enzyme';
import {Goal} from './goal';

const props = {
    user: {},
    budget: {
        goals: []
    }
}

describe('Goal component', () => {
    it('Should render without crashing', () => {
        shallow(<Goal {...props} />)
    })
})