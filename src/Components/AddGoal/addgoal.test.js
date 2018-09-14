import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';
import AddGoal from './addgoal';

Enzyme.configure({adapter: new Adapter()});

describe('<AddGoal', () => {
    it('Should render without crashing', () => {
        shallow(<AddGoal />)
    })

})