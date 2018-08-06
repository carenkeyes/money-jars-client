import React from 'react';
import Message from '../Message/message';


export default function Header(){
    return (
        <div>
            <h1>Header</h1>
            <Message
                parent={true}
                name="Johnny"
                amount="30"
                goal="bicycle"
            />
        </div>
    )
}