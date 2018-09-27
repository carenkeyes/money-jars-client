import React from 'react';
import {shallow} from 'enzyme';
import AddGoal from './addgoal';

describe('<AddGoal />', () => {
    it('Should render without crashing', () => {
        shallow(<AddGoal />)
    })
})