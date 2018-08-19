import React from 'react';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';
import './dashboard.css'

//import Header from '../Header/header';
import Parent from '../Parent/parent';
import Child from '../Child/child';

export function Dashboard(){
    return(
            <div className='dashboard'>
                <Route exact path={`/dashboard/child`} component={Child} />
                <Route exact path={`/dashboard/parent`} component={Parent} />
            </div>
    )
}

const mapStatetoProps = state => ({
    loggedIn: state.auth.currentUser !==null
});

export default connect(mapStatetoProps)(Dashboard)
