import React from 'react';
import Goal from '../Goal/goal'

export default function Child(){
    const goal1 = {
        showDetail: true,
        goalAmount: 10,
        savedAmount: 3,
        leftAmount: 7,
    }

    const goal2 = {
            showDetail: false,
            goalAmount: 15,
            savedAmount: 13,
            leftAmount: 2,
    }

    return (
        <div>
            <Goal
                showDetail={goal1.showDetail}
                goalAmount={goal1.goalAmount}
                savedAmount={goal1.savedAmount}
                leftAmount={goal1.leftAmount}
            />
            <Goal
                showDetail={goal2.showDetail}
                goalAmount={goal2.goalAmount}
                savedAmount={goal2.savedAmount}
                leftAmount={goal2.leftAmount}
            />
        </div>
    )
}