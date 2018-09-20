import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';
import Allowance from './allowance';

Enzyme.configure({adapter: new Adapter()});

describe('<Allowance />', () => {
    it('Should render without crashing', () => {
        shallow(<Allowance />)
    })

})