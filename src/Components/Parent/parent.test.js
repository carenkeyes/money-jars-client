import React from 'react';
import {shallow} from 'enzyme';
import {Parent} from './parent';

const props = {
    user: {
        children: [],
        username: 'username',
    },
    but1Label: 'label',
    but1OnClick: 'click',
    but2Label: 'label',
    but2OnClick: 'click'
}

describe('Parent', () => {
    it('Should render without crashing', () => {
        shallow(<Parent {...props} />)
    })
})