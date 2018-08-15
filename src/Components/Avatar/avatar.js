import React from 'react';
import './avatar.css';


export default function Avatar(props){
    console.log(props.image);
    return(
        <div className='avatarImage'>
            <img src={props.image} />
        </div>
    )
}
