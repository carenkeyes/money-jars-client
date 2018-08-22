import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import { fetchProtectedData } from '../../actions/protected-data';
import './dashboard.css'

//import Header from '../Header/header';
import Parent from '../Parent/parent';
import Child from '../Child/child';

export class Dashboard extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            usertype: 'child'
        }
    }
    componentDidMount(){
        this.props.dispatch(fetchProtectedData())
        .then(console.log(this.props.usertype))
        .then(this.setState = {usertype: this.props.usertype})
    }

    render(){
        console.log(this.props.usertype)    

        if(this.state.usertype === 'parent'){
            console.log('parent')
            return (
                <Redirect to={`/parent/`} />
            )
        }else if(this.state.usertype ==='child'){
            console.log('child')
            return (
                <Redirect to={`/child`} />
            )
        }
    }
}

const mapStatetoProps = state => ({
    loggedIn: state.auth.currentUser !==null
});

const mapStateToProps = state => ({
    user: state.auth.currentUser,
    usertype: state.protectedData.usertype
});

export default connect(mapStatetoProps)(Dashboard)
