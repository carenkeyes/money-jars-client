import React from 'react';
import Button from '../Button/button';
import SimpleForm from '../SimpleForm/simple-form';
import './goal-details.css';

export default function GoalDetails(props){
    if (props.showDetail){
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
                <SimpleForm className='add-funds'
                    displayForm={true} 
                    name='add-funds'
                    label='Add funds'
                    type='number'
                    submit='Add'
                />
                <SimpleForm className='move-funds'
                    displayForm={true} 
                    name='move-funds'
                    label='Move funds'
                    type='number'
                    submit='Move'
                />
                <SimpleForm className='withdraw-funds'
                    displayForm={true} 
                    name='withdraw-funds'
                    label='Withdraw funds'
                    type='number'
                    submit='Withdraw'
                />
            </div>  
        )
    }
    return null;
}