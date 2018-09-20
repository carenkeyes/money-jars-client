import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';
import Request from './request';

Enzyme.configure({adapter: new Adapter()});

describe('<Request />', () =>{
  it('Should render without crashing', () => {
    shallow(<Request />)
  })
})