import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from '../RequiresLogin/requires-login';
//import Request from '../Request/request'
//import Section from '../Section/section'
import { fetchProtectedData } from '../../actions/protected-data';
import Header from '../Header/header';

export class Parent extends React.Component {
    componentDidMount(){
        this.props.dispatch(fetchProtectedData());
    }

    render(){
        return(
            <div>
                <Header title={this.props.username} />
                <section></section>
                <section></section>
            </div>
        )
    }
}

const mapStateToProps = state => {
    const {currentUser} = state.auth;
    console.log(currentUser);
    return {
        username: state.auth.currentUser.username,
        };
};

export default requiresLogin()(connect(mapStateToProps)(Parent));