import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';
import MoveFromGoal from './move-from-goal';

Enzyme.configure({adapter: new Adapter()});

describe('<MoveFromGoal />', () =>{
  it('Should render without crashing', () => {
    shallow(<MoveFromGoal />)
  })
})