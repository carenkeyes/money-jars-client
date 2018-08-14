import React from 'react';

import Header from '../Header/header';
import Parent from '../Parent/parent';
import Child from '../Child/child';

export default function Dashboard(){
    return(
        <div className='dashboard'>
            <Header />
            <Parent />
            <Child />
        </div>
    )
}