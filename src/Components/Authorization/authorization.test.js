import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';
import {Authorization} from './authorization';

Enzyme.configure({adapter: new Adapter()});

describe('<Authorization />', () => {
    it('Should render without crashing', () => {
        shallow(<Authorization />)
    })

})