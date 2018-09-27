import React from 'react';
import {shallow} from 'enzyme';
import Allowance from './allowance';

describe('<Allowance />', () => {
    it('Should render without crashing', () => {
        shallow(<Allowance />)
    })
    it('Should have addFunds initially set to true', () => {
        const wrapper = shallow(<Allowance />);
        expect(wrapper.state('addFunds')).toEqual(true);
    })
})