import React from 'react';
import {shallow} from 'enzyme';
import RegistrationForm from './registration-form';

describe('Registration Form', () => {
    it('Should render without crashing', () => {
        shallow(<RegistrationForm />)
    })
})