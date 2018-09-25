import React from 'react';
import {shallow} from 'enzyme'
import Alert from './alert'

describe('Alert', () => {
    it('should render without crashing', () => {
        shallow(<Alert />)
    })
})