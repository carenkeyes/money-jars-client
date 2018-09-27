import React from 'react';
import {shallow} from 'enzyme';
import ChooseBudget from './choose-budget';

describe('<Choosebudget />', () => {
    it('Should render without crashing', () => {
        shallow(<ChooseBudget />)
    })

})