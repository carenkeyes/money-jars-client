import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallow, mount} from 'enzyme';
import AddGoal from './addgoal';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

function mountWithStore(node, store = createStore(() => ({})), options) {
    return mount(<Provider store={store}>{node}</Provider>, options)
  }

describe('<AddGoal />', () => {
    it('Should render without crashing', () => {
        shallow(<AddGoal />)
    })
    /*it('should dispatch createGoal when form is submitted', () => {
        const name = 'New Bike'
        const amount = '75'
        const category = 'saving'
        const userId = 'mockId'
        const goal = {
            title: name,
            amount: 75000,
            category: category
        }
        const props = {
            addNew: true,
            form: 'add-goal-form',
            initialValues: {
                amount: '75',
                name: 'New Bike',
                category: 'saving',
        }}
        const dispatch = jest.fn();
        const handleSubmit = jest.fn();
        const createGoal = jest.fn();
        const wrapper = mountWithStore(<AddGoal 
            dispatch={dispatch} 
            handleSubmit={handleSubmit} 
            createGoal={createGoal}
            {...props} />);
        const form = wrapper.find('.add-goal-form')
        form.simulate('submit');
        expect(dispatch).toHaveBeenCalledWith(goal, userId)
    })*/
})