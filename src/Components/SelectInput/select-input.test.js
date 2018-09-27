import React from 'react';
import {shallow} from 'enzyme';
import SelectInput from './select-input';

const input = {
  name: 'name',
  value: 'value',
  onBlur: 'onBlue',
  onChange: 'onChange',
  onFocus: 'onFocus',
}

const options = []

describe('<SelectInput />', () =>{
  it('Should render without crashing', () => {
    shallow(<SelectInput input={input} options={options}/>)
  })
})