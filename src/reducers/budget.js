import * as actions from '../actions/budget';

const initialState = {
    total: 200,
    goals: [
        {
            title: "Bicycle",
            amount: 80,
            saved: 10,
            category: "saving",
            showDetails: true,
            showForm: false,
        },
        {
            title: "Christmas",
            amount: 50,
            saved: 2,
            category: "giving",
            showDetails: false,
            showForm: false,
        },
        {
            title: "Dad's birthday",
            amount: 10,
            saved: 9,
            category: "giving",
            showDetails: true,
            showForm: false
        }
    ]
}

export default function reduce(state=initialState, action){
    if(action.type === actions.ADD_GOAL){
        return Object.assign({}, state, {
            goals: [
                ...state.goals, {
                    title: action.title.title,
                    amount: action.title.amount,
                    category: action.title.category
                }
            ]
        });
    }
    return state;
}