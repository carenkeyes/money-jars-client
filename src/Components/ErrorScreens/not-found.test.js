import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';
import NotFound from './not-found';

Enzyme.configure({adapter: new Adapter()});

describe('<NotFound />', () =>{
  it('Should render without crashing', () => {
    shallow(<NotFound />)
  })
})