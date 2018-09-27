import React from 'react';
import {shallow} from 'enzyme';
import DeleteGoal from './delete-goal';

describe('<DeleteGoal />', () =>{
  it('Should render without crashing', () => {
    shallow(<DeleteGoal />)
  })
})