import React from 'react';
import './avatar.css';


export default function Avatar(props){
    return(
        <div className='avatarImage'>
            <img src={props.image} alt=''/>
        </div>
    )
}
