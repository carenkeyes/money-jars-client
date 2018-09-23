import React from 'react';
import {shallow,} from 'enzyme';
import {AddToGoal} from './add-to-goal';

describe('<AddToGoal', () => {
    it('Should render without crashing', () => {
        shallow(<AddToGoal />)
    })
})