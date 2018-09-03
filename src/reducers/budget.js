import * as actionTypes from '../actions/index.actions';

const initialState = {
    total: 25,
    goals: [
        {
            id: '1',
            title: "Bicycle",
            amount: 80,
            saved: 10,
            category: "saving",
            imageurl: 'https://i5.walmartimages.com/asr/c4061a3b-3151-4a9c-b168-5a5449e35d10_1.cb67f779006e94571d75d44a0ddd62aa.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF'

        },
    ]
}

export default function reduce(state=initialState, action){
    switch(action.type){
        default: {
            return state;
        }
    }
}

/*export function reduce(state=initialState, action){
    if(action.type === actions.CREATE_GOAL_REQUEST_SUCCESS){
        return Object.assign({}, state, {
            goals: [
                ...state.goals, {
                    title: action.goal.title,
                    amount: action.goal.amount,
                    saved: 0,
                    category: action.goal.category,
                    imageurl: action.goal.imageurl,
                }
            ]
        });
    }
    else if(action.type === actions.UPDATE_GOAL){
        console.log(action);
        console.log(action.data.id);
        let goals = state.goals.map((goal) => {
            if(goal.id !== action.data.id){
                console.log(goal);
                return goal;
            }
            return Object.assign({}, goal, {
                saved: goal.saved+action.data.amount
            })
        });
        return Object.assign({}, state, {goals});
    }
    return state;
}*/

