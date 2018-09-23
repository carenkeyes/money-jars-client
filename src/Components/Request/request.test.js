import React from 'react';
import {shallow} from 'enzyme';
import Request from './request';

describe('<Request />', () =>{
  const data = {data: []}
  it('Should render without crashing', () => {
    shallow(<Request ynabData={data}/>)
  })
})