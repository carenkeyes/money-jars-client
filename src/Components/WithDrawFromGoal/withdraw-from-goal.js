import React from 'react';
import SimpleForm from '../SimpleForm/simple-form';

export default function WithdrawFromGoal(props){
    return(
        <SimpleForm className='move-funds'
            displayForm={true} 
            name='move-funds'
            label='Move funds'
            type='number'
            submit='Move'
        />
    )
}