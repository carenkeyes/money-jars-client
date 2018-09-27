import React from 'react';
import {shallow} from 'enzyme';
import Privacy from './privacy';

describe('<Privacy />', () =>{
  it('Should render without crashing', () => {
    shallow(<Privacy />)
  })
})