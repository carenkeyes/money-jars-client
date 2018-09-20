import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';
import WarningScreen from './warning-screen';

Enzyme.configure({adapter: new Adapter()});

describe('<WarningScreen />', () =>{
  it('Should render without crashing', () => {
    shallow(<WarningScreen/>)
  })
})