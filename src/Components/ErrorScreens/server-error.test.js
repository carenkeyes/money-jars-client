import React from 'react';
import {shallow} from 'enzyme';
import ServerError from './server-error';

describe('<ServerError />', () =>{
  it('Should render without crashing', () => {
    shallow(<ServerError />)
  })
})