import React from 'react';
import {shallow} from 'enzyme';
import NotFound from './not-found';

describe('<NotFound />', () =>{
  it('Should render without crashing', () => {
    shallow(<NotFound />)
  })
})