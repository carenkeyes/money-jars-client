import React from 'react';
import WarningScreen from './warning-screen';

export default function Forbidden(){
    return (
        <WarningScreen 
            title='Unavailable'
            message='You do not have permission to view this page.'
        />
    )
}