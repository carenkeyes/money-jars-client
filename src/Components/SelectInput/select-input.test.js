import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';
import SelectInput from './select-input';

Enzyme.configure({adapter: new Adapter()});

describe('<SelectInput />', () =>{
  it('Should render without crashing', () => {
    shallow(<SelectInput />)
  })
})