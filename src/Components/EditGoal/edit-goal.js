import React from 'react';
import {Link} from 'react-router-dom';

export default function EditGoal(props){

    return(
        <div className="actions">
            <Link to={`${props.match.url}/add`}>
                <button type="button">Add</button>
            </Link>
            <Link to={`${props.match.url}/move`}>
                <button type="button">Move</button>
            </Link>            
            <Link to={`${props.match.url}/withdraw`}>
                <button type="button">Withdraw</button>
            </Link>
        </div>
    )
}