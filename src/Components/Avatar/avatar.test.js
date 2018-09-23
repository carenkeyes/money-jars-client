import React from 'react';
import {shallow} from 'enzyme';
import Avatar from './avatar';

describe('<Avatar />', () => {
    it('Should render without crashing', () => {
        shallow(<Avatar />)
    })

})