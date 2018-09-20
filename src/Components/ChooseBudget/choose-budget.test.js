import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';
import ChooseBudget from './choose-budget';

Enzyme.configure({adapter: new Adapter()});

describe('<Choosebudget />', () => {
    it('Should render without crashing', () => {
        shallow(<ChooseBudget />)
    })

})