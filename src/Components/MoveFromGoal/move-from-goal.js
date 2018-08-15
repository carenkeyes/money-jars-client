import React from 'react';
import SimpleForm from '../SimpleForm/simple-form';

export default function MoveFromGoal(props){
    return(
        <SimpleForm className='withdraw-funds'
            displayForm={true} 
            name='withdraw-funds'
            label='Withdraw funds'
            type='number'
            submit='Withdraw'
        />
    )
}