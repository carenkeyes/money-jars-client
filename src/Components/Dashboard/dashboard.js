import React from 'react';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';
import { fetchProtectedData } from '../../actions/protected-data';
import './dashboard.css'

//import Header from '../Header/header';
import Parent from '../Parent/parent';
import Child from '../Child/child';

export class Dashboard extends React.Component{
    componentDidMount(){
        this.props.dispatch(fetchProtectedData());
    }

    render(){
        return(
                <div className='dashboard'>
                    <Route exact path={`/dashboard/child`} component={Child} />
                    <Route exact path={`/dashboard/parent`} component={Parent} />
                </div>
        )
    }
}

const mapStatetoProps = state => ({
    loggedIn: state.auth.currentUser !==null
});

const mapStateToProps = state => ({
    user: state.auth.currentUser
});

export default connect(mapStatetoProps)(Dashboard)
