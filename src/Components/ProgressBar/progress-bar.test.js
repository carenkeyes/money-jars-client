import React from 'react';
import {shallow} from 'enzyme';
import ProgressBar from './progress-bar';

describe('<ProgressBar />', () =>{
  it('Should render without crashing', () => {
    shallow(<ProgressBar />)
  })
})
