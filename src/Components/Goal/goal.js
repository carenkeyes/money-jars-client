import React from 'react';
import Button from '../Button/button';
import Avatar from '../Avatar/avatar';
import ProgressBar from '../ProgressBar/progress-bar';
import GoalDetails from '../GoalDetails/goal-details';
import ModifyForm from '../ModifyForm/modify-form';
import './goal.css';

export default function Goal(props){
    return(
        <section>
            <div>
                <h3>{props.goalName}</h3>
            </div>
            <div className = 'goalContent'>
                <div className='goalImage'>
                    <Avatar />
                    <Button label='Details'/>
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
            <ModifyForm
                displayForm={true} 
                input='add-funds'
                label='How much would you like to add?'
                type='number'
            />
        </section>
    )
}