import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';
import {AddChildWrapper} from './add-child-wrapper';

Enzyme.configure({adapter: new Adapter()});

describe('<AddChildWrapper />', () => {
    it('Should render without crashing', () => {
        shallow(<AddChildWrapper />)
    })

})