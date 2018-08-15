import React from 'react';
import Button from '../Button/button';

export default function EditGoal(props){
    
    return(
        <div className="actions">
            <Button label="Add" />
            <Button label="Move" />
            <Button label="Withdraw" />
        </div>
    )
}