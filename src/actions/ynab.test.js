import * as actions from './index.actions';
import apiMiddleware from '../api-middleware';
import asyncMiddleware from 'redux-thunk';
import configureStore from 'redux-mock-store';
import { FETCH_YNAB_CATEGORY_BALANCE_SUCCESS } from './ynab';

const middlewares = [
    asyncMiddleware,
    apiMiddleware,
];

const userId = 'userId'

const mockStore = configureStore(middlewares);

describe('fetch YNAB budgets', () => {
    it('should retrieve a list of budgets from ynab', async() => {
        const response = {}
        const store = mockStore({});
        fetch.mockResponseOnce(JSON.stringify(response));
        await store.dispatch(actions.fetchYnabBudgets('query'))
        const storedActions = store.getActions()
        expect(storedActions[0]).toEqual({type: 'FETCH_YNAB_BUDGETS_REQUEST_TRIGGERED'})
        expect(storedActions[1]).toEqual({type: 'FETCH_YNAB_BUDGETS_REQUEST_SUCCESS', response})
    })
})

describe('fetch YNAB categories', () => {
    it('should retrieve a list of categories from ynab', async() => {
        const response = {}
        const store = mockStore({});
        fetch.mockResponseOnce(JSON.stringify(response));
        await store.dispatch(actions.fetchYnabCategories('userId', 'budgetId'))
        const storedActions = store.getActions()
        expect(storedActions[0]).toEqual({type: 'FETCH_YNAB_CATEGORIES_REQUEST_TRIGGERED'})
        expect(storedActions[1]).toEqual({type: 'FETCH_YNAB_CATEGORIES_REQUEST_SUCCESS', response})
    })
})

/*const handleCategoryBalance = (response, dispatch) =>{
    dispatch({
        type: FETCH_YNAB_CATEGORY_BALANCE_SUCCESS,
        response,
    })
}

function fetchYnabCategoryBalance(userId){
    const response = {}
    return dispatch => {
        dispatch({type: "FETCH_YNAB_CATEGORY_BALANCE_TRIGGERED"});
        return handleCategoryBalance(response, dispatch)
            .then(() => {
                dispatch({type: "FETCH_YNAB_CATEGORY_BALANCE_SUCCESS"});
            })
            .then(error => {
                dispatch({type: "FETCH_YNAB_CATEGORY_BALANCE_FAILURE", payload: error});
            });
    }
}*/

describe('fetch YNAB category balance', () => {
    it('should retrieve the balance for a specific ynab category', async() => {
        const response = {}
        const store = mockStore({});
        fetch.mockResponseOnce(JSON.stringify(response));
        await store.dispatch(actions.fetchYnabCategoryBalance('userId'))
        const storedActions = store.getActions()
        expect(storedActions[0]).toEqual({type: 'FETCH_YNAB_CATEGORY_BALANCE_TRIGGERED'})
        expect(storedActions[1]).toEqual({type: 'FETCH_YNAB_CATEGORY_BALANCE_SUCCESS', response})
    })
})