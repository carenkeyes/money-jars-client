import React from 'react';
import {shallow} from 'enzyme';
import MoveFromGoal from './move-from-goal';

describe('<MoveFromGoal />', () =>{
  it('Should render without crashing', () => {
    shallow(<MoveFromGoal />)
  })
})