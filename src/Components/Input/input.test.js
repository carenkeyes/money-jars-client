import React from 'react';
import {shallow} from 'enzyme';
import Input from './input';

const props = {
  meta: {},
  input: {
    name: 'name'
  },
  label: 'label',
  type: 'text',
  step: 1,
  max: 10,
}

describe('<Input />', () =>{
  it('Should render without crashing', () => {
    shallow(<Input {...props}/>)
  })
})