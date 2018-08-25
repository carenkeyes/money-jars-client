import * as actions from '../actions/budget';

const initialState = {
    total: 25,
    goals: [
        {
            id: '1',
            title: "Bicycle",
            amount: 80,
            saved: 10,
            category: "Saving",
            imageurl: 'https://i5.walmartimages.com/asr/c4061a3b-3151-4a9c-b168-5a5449e35d10_1.cb67f779006e94571d75d44a0ddd62aa.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF'

        },
        {
            id: '2',
            title: "Christmas",
            amount: 50,
            saved: 2,
            category: "Saving",
        },
        {
            id: '3',
            title: "Dad's birthday",
            amount: 10,
            saved: 9,
            category: "Giving",
        }
    ]
}

export default function reduce(state=initialState, action){
    if(action.type === actions.ADD_GOAL){
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
}

