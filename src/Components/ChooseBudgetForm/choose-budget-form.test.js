import React from 'react';
import {shallow} from 'enzyme';
import ChooseBudgetForm from './choose-budget-form';

describe('<ChooseBudgetForm />', () => {
    it('Should render without crashing', () => {
        shallow(<ChooseBudgetForm/>)
    })

})