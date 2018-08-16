import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import './dashboard.css'

//import Header from '../Header/header';
import Parent from '../Parent/parent';
import Child from '../Child/child';

export function Dashboard(){
    return(
        <Router>
            <div className='dashboard'>
                <h2>Dashboard</h2>
                <Route exact path={`/dashboard/child`} component={Child} />
                <Route exact path={`/dashboard/parent`} component={Parent} />
            </div>
        </Router>
    )
}

const mapStatetoProps = state => ({
    loggedIn: state.auth.currentUser !==null
});

export default connect(mapStatetoProps)(Dashboard)
