import React from 'react';
import {shallow} from 'enzyme';
import GiveAllowance from './give-allowance';

describe('<GiveAllowance />', () =>{
  it('Should render without crashing', () => {
    shallow(<GiveAllowance />)
  })
})