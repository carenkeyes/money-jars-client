import React from 'react';
import {shallow} from 'enzyme';
import Button from './button';

describe('<Button />', () => {
    it('Should render without crashing', () => {
        shallow(<Button />)
    })

})