import React from 'react';
import {shallow} from 'enzyme';
import {RegistrationPage} from './registration-page';

const props = {
    error: 'error',
    match: {url: 'url'}
}

describe('Registration Page', () => {
    it('Should render without crashing', () => {
        shallow(<RegistrationPage {...props} />)
    })
})