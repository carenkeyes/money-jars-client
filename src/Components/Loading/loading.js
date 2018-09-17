import React from 'react';
import './loading.css';

export default function Loading(props){
    if(props.loading){
        return(
            <div className='loading-screen'>
                <div className='loading-message'>
                    <div className='loading-image' />
                    <p>We're counting our pennies... </p>
                </div>
            </div>
        )
    }
    return null;
}