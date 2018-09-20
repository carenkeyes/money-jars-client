import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';
import LoginForm from './login-form';

Enzyme.configure({adapter: new Adapter()});

describe('<LoginForm />', () =>{
  it('Should render without crashing', () => {
    shallow(<LoginForm />)
  })
})