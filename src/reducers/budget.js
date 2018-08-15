import * as actions from '../actions/budget';

const initialState = {
    total: 200,
    goals: [
        {
            title: "Bicycle",
            amount: 80,
            saved: 10,
            category: "saving",
            imageurl: 'https://i5.walmartimages.com/asr/c4061a3b-3151-4a9c-b168-5a5449e35d10_1.cb67f779006e94571d75d44a0ddd62aa.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF'

        },
        {
            title: "Christmas",
            amount: 50,
            saved: 2,
            category: "giving",
            imageurl: 'https://photos.smugmug.com/Web-images/n-dfnXHf/i-8BPTkJv/0/22ac2d0b/S/i-8BPTkJv-S.png'
        },
        {
            title: "Dad's birthday",
            amount: 10,
            saved: 9,
            category: "giving",
            imageurl: 'https://photos.smugmug.com/Web-images/n-dfnXHf/i-8BPTkJv/0/22ac2d0b/S/i-8BPTkJv-S.png'
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

