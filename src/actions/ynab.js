import config from '../config'

export const FETCH_YNAB_BUDGETS_REQUEST_TRIGGERED = 'FETCH_YNAB_BUDGETS_REQUEST_TRIGGERED';
export const FETCH_YNAB_BUDGETS_REQUEST_SUCCESS = 'FETCH_YNAB_BUDGETS_REQUEST_SUCCESS';
export const FETCH_YNAB_BUDGETS_REQUEST_FAILURE = 'FETCH_YNAB_BUDGETS_REQUEST-FAILURE';

export function fetchYnabBudgets(userId){
    console.log('fetch ynab budgets')
    const promise = fetch(`${config.API_BASE_URL}/ynab/budgets/${userId}`, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
    });
    return {
        onRequest: FETCH_YNAB_BUDGETS_REQUEST_TRIGGERED,
        onSuccess: FETCH_YNAB_BUDGETS_REQUEST_SUCCESS,
        onFailure: FETCH_YNAB_BUDGETS_REQUEST_FAILURE,
        promise,
    };
}