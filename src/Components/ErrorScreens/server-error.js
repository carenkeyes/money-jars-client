import React from 'react';
import WarningScreen from './warning-screen';

export default function ServerError(){
    return(
        <WarningScreen
            title="This is embarassing..."
            message="Something went wrong on our end. We're working on it"
            className="broken-atm"
        />
    )
}