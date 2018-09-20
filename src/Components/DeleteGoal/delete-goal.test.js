import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';
import DeleteGoal from './delete-goal';

Enzyme.configure({adapter: new Adapter()});

describe('<DeleteGoal />', () =>{
  it('Should render without crashing', () => {
    shallow(<DeleteGoal />)
  })
})