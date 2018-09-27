import React from 'react';
import {shallow} from 'enzyme';
import WithdrawFromGoal from './withdraw-from-goal';

describe('<WithdrawFromGoal />', () =>{
  it('Should render without crashing', () => {
    shallow(<WithdrawFromGoal />)
  })
})