import React from 'react';
import {shallow} from 'enzyme';
import GoalDetails from './goal-details';

describe('<GoalDetails />', () =>{
  it('Should render without crashing', () => {
    shallow(<GoalDetails />)
  })
})