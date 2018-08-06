import React from 'react';
import Button from '../Button/button';

export default function Message(props){
    return(
        <div>
            <p>{props.name} wants to withdraw ${props.amount} from his {props.category} goal.</p>
            <Button label="Approve" />
            <Button label="Clear" />
        </div>
    )
}