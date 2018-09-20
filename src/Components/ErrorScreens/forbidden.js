import React from 'react';
import WarningScreen from './warning-screen';

export default function Forbidden(){
    return (
        <WarningScreen 
            title='Unavailable'
            message='Just trust us on this one'
            className='danger'
        />
    )
}