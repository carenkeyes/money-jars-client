import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallow, mount} from 'enzyme';
import {AddToGoal} from './add-to-goal';
import { isRegExp } from 'util';
import { updateGoal } from '../../actions/budget';

Enzyme.configure({adapter: new Adapter()});

describe('<AddToGoal', () => {
    it('Should render without crashing', () => {
        shallow(<AddToGoal />)
    })
    it('Should dispatch updateGoal when submitted', () => {
        const dispatch = jest.fn();
        const value = '2'
        const goalId = 'goal'
        const userId = 'user'
        const wrapper = shallow(
            <AddToGoal 
                goalId={goalId}
                userId={userId}
                dispatch={dispatch}
            />
        )
        const instance = wrapper.instance()
        instance.onSubmit(value)
        expect(dispatch).toHaveBeenCalledWith(updateGoal(goalId, userId, amount))
    });
})