import React from 'react';
import {shallow} from 'enzyme';
import PrivateRoute from './private-route';

describe('<PrivateRoute />', () =>{
  it('Should render without crashing', () => {
    shallow(<PrivateRoute />)
  })
})