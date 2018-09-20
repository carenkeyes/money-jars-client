import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';
import Privacy from './privacy';

Enzyme.configure({adapter: new Adapter()});

describe('<Privacy />', () =>{
  it('Should render without crashing', () => {
    shallow(<Privacy />)
  })
})