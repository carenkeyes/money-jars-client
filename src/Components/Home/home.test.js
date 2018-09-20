import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';
import Home from './home';

Enzyme.configure({adapter: new Adapter()});

describe('<Home />', () =>{
  it('Should render without crashing', () => {
    shallow(<Home />)
  })
})