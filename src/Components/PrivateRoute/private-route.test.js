import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';
import PrivateRoute from './private-route';

Enzyme.configure({adapter: new Adapter()});

describe('<PrivateRoute />', () =>{
  it('Should render without crashing', () => {
    shallow(<PrivateRoute />)
  })
})