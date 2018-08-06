import React from 'react';
import Button from '../Button/button';
import Avatar from '../Avatar/avatar';
import ProgressBar from '../ProgressBar/progress-bar';
import GoalDetails from '../GoalDetails/goal-details';
import './goal.css';

export default function Goal(props){
    return(
        <section>
            <div>
                <h3>Goal Name</h3>
            </div>
            <div className = "goalContent">
                <div className='goalImage'>
                    <Avatar />
                    <Button label="Details"/>
                </div>
                <div className='goalProgress'>
                    <ProgressBar />
                </div>
            </div> 
            <GoalDetails
                showDetail={props.showDetail}
                goalAmount={props.goalAmount}
                savedAmount={props.savedAmount}
                leftAmount={props.leftAmount}
            />
        </section>
    )
}