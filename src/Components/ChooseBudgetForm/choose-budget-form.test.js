import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';
import ChooseBudgetForm from './choose-budget-form';

Enzyme.configure({adapter: new Adapter()});

describe('<ChooseBudgetForm />', () => {
    it('Should render without crashing', () => {
        shallow(<ChooseBudgetForm/>)
    })

})