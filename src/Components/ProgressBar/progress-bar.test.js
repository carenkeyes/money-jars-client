import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';
import ProgressBar, {Filler} from './progress-bar';

Enzyme.configure({adapter: new Adapter()});

describe('<ProgressBar />', () =>{
  it('Should render without crashing', () => {
    shallow(<ProgressBar />)
  })
})

/*describe('<Filler />', () => {
  it('Should render wtihout crashing', () => {
    shallow(<Filler />)
  })
})*/