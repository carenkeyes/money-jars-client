import React from 'react';
import Request from '../Request/request'
import Section from '../Section/section'

export default function Parent(){
    return (
        <div>
            <Request />
            <Section />
            <Section />
        </div>
    )
}