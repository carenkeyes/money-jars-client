import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';
import WithdrawFromGoal from './withdraw-from-goal';

Enzyme.configure({adapter: new Adapter()});

describe('<WithdrawFromGoal />', () =>{
  it('Should render without crashing', () => {
    shallow(<WithdrawFromGoal />)
  })
})