import React from 'react';
import Button from '../Button/button';
import './goal-details.css';

export default function GoalDetails(props){
    return(
        <div className="goalDetails">
            <div className="goalInfo">
                <p>Your goal is ${props.goalAmount}</p>
                <p>You saved ${props.savedAmount}</p>
                <p>You still need ${props.leftAmount} to reach your goal!</p>
            </div>
            <div className="actions">
                <Button label="Add" />
                <Button label="Move" />
                <Button label="Withdraw" />
            </div>
        </div>  
    )
}