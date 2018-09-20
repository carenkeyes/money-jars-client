import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';
import Button from './button';

Enzyme.configure({adapter: new Adapter()});

describe('<Button />', () => {
    it('Should render without crashing', () => {
        shallow(<Button />)
    })

})