import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';
import ServerError from './server-error';

Enzyme.configure({adapter: new Adapter()});

describe('<ServerError />', () =>{
  it('Should render without crashing', () => {
    shallow(<ServerError />)
  })
})