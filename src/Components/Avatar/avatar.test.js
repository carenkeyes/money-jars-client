import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';
import Avatar from './avatar';

Enzyme.configure({adapter: new Adapter()});

describe('<Avatar />', () => {
    it('Should render without crashing', () => {
        shallow(<Avatar />)
    })

})