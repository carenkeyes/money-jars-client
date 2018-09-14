import React from 'react';
import WarningScreen from './warning-screen';

export default function NotFound(){
    return(
        <WarningScreen 
            title='Not Found'
            message="The page you are looking seems to have gone missing..."
            className='money-escape'
        />
    )
}