import * as actions from './index.actions';
import apiMiddleware from '../api-middleware';
import asyncMiddleware from 'redux-thunk';
import configureStore from 'redux-mock-store';

const middlewares = [
    asyncMiddleware,
    apiMiddleware,
];

const mockStore = configureStore(middlewares);

const goal = {
    title: 'title',
    amount: 5000,
    category: 'saving'
}

describe('updateToBudget', () => {
    it('Should return the action', () => {
        const toBudget = 1000;
        const action = actions.updateToBudget(toBudget);
        expect(action.type).toEqual(actions.UPDATE_TO_BUDGET);
        expect(action.toBudget).toEqual(toBudget);
    })
})

describe('Create goal', () => {
    it('should call the create goal action', async() => {
        const response = {}
        const store = mockStore({});
        fetch.mockResponseOnce(JSON.stringify(response));
        await store.dispatch(actions.createGoal(goal, 'userId'))
        const storedActions = store.getActions()
        expect(storedActions[0]).toEqual({type: 'CREATE_GOAL_REQUEST_TRIGGERED'})
        expect(storedActions[1]).toEqual({type: 'CREATE_GOAL_REQUEST_SUCCESS', response})
    })
})

describe('Delete goal', () => {
    it('should delete a goal', async() => {
        const response = {};
        const store = mockStore({});
        fetch.mockResponseOnce(JSON.stringify(response));
        await store.dispatch(actions.deleteGoal('goal', 'userId'))
        const storedActions = store.getActions()
        expect(storedActions[0]).toEqual({type: 'DELETE_GOAL_TRIGGERED'})
        expect(storedActions[1]).toEqual({type: 'DELETE_GOAL_SUCCESS', response})
    })
})

describe('Update Goal', () => {
    it('should update the goal amount', async() => {
        const response = {};
        const store = mockStore({});
        fetch.mockResponseOnce(JSON.stringify(response));
        await store.dispatch(actions.updateGoal('goal', 'userId'))
        const storedActions = store.getActions()
        expect(storedActions[0]).toEqual({type: 'UPDATE_GOAL_TRIGGERED'})
        expect(storedActions[1]).toEqual({type: 'UPDATE_GOAL_SUCCESS', response})
    })
})

describe('createGoal', () => {
    it('Should call the action', () => {
        const goal = {};
        global.fetch = jest.fn().mockImplementation(() => {
            Promise.resolve({
                ok: true,
                json(){
                    return goal;
                }
            })
        });
        const dispatch = jest.fn();
        dispatch(actions.createGoal())
        expect(fetch).toHaveBeenCalled; 
        expect(dispatch).toHaveBeenCalled;
    })
})