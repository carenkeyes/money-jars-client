import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';
import GiveAllowance from './give-allowance';

Enzyme.configure({adapter: new Adapter()});

describe('<GiveAllowance />', () =>{
  it('Should render without crashing', () => {
    shallow(<GiveAllowance />)
  })
})