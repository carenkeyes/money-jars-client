import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';
import ChildWrapper from './child-wrapper';
import childWrapper from './child-wrapper';

Enzyme.configure({adapter: new Adapter()});

describe('<ChildWrapper />', () => {
    it('Should render without crashing', () => {
        shallow(<childWrapper />)
    })

})