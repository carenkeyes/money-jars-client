import React from 'react';
import Button from '../Button/button';

export default function ModifyForm(props){
    if(props.displayForm){
        return(
            <form>
                <label for={props.input}>{props.label}</label>
                <input type={props.type} id={props.input} />
                <Button label="Add"/>
                <Button label="Cancel"/>
            </form>
        )
    }
    return null;
}