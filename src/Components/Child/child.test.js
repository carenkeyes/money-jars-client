import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';
import {Child} from './child';

Enzyme.configure({adapter: new Adapter()});

describe('<Child />', () => {
    it('Should render without crashing', () => {
        shallow(<Child/>)
    })

})