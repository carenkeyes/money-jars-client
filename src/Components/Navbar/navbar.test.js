import React from 'react';
import {shallow} from 'enzyme';
import {Navbar} from './navbar';

describe('Navbar', () => {
    it('Should render without crashing', () => {
        shallow(<Navbar />)
    })
})