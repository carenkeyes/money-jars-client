import React from 'react';
import {shallow} from 'enzyme';
import WarningScreen from './warning-screen';

describe('<WarningScreen />', () =>{
  it('Should render without crashing', () => {
    shallow(<WarningScreen/>)
  })
})