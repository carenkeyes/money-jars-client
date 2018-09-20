import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';
import GoalDetails from './goal-details';

Enzyme.configure({adapter: new Adapter()});

describe('<GoalDetails />', () =>{
  it('Should render without crashing', () => {
    shallow(<GoalDetails />)
  })
})