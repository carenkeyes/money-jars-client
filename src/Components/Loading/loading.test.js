import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';
import Loading from './loading';

Enzyme.configure({adapter: new Adapter()});

describe('<Loading />', () =>{
  it('Should render without crashing', () => {
    shallow(<Loading />)
  })
})