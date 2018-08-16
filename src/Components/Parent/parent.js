import React from 'react';
import {connect} from 'react-redux';
//import requiresLogin from '../RequiresLogin/requires-login';
//import Request from '../Request/request'
//import Section from '../Section/section'
//import { fetchProtectedData } from '../../actions/protected-data';
import Header from '../Header/header';

export class Parent extends React.Component {
    /*componentDidMount(){
        this.props.dispatch(fetchProtectedData());
    }*/

    render(){

        let greeting=`Welcome ${this.props.user}!`

        return(
            <div>
                <Header title={greeting} />
                <section></section>
                <section></section>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    user: state.auth.currentUser
});

export default connect(mapStateToProps)(Parent);