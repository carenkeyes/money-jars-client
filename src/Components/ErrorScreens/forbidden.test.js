import React from 'react';
import {shallow} from 'enzyme';
import Forbidden from './forbidden';

describe('<Forbidden/>', () =>{
  it('Should render without crashing', () => {
    shallow(<Forbidden />)
  })
})