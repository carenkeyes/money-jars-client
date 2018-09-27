import React from 'react';
import {shallow} from 'enzyme';
import RegistrationChild from './registration-child';

describe('Registration Child', () => {
    it('Should render without crashing', () => {
        shallow(<RegistrationChild />)
    })
})