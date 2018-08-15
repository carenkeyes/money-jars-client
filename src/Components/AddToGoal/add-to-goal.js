import React from 'react';
import SimpleForm from '../SimpleForm/simple-form';

export default function AddToGoal(props){
    return(
        <SimpleForm className='add-funds'
            displayForm={true} 
            name='add-funds'
            label='Add funds'
            type='number'
            submit='Add'
        />
    )
}