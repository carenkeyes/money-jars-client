import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchUserBasicInfo} from '../../actions/index.actions';
import './dashboard.css'


export class Dashboard extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            loggedIn: this.props.loggedIn,
        }
    }
    componentDidMount(){
        this.props.dispatch(fetchUserBasicInfo())
    }

    render(){

        if(!this.state.loggedIn){
            return(
            <Redirect to={'/register/login'} />
            )
        }

        if(this.props.user.usertype === 'parent'){
            console.log('parent')
            return (
                <Redirect to={`/parent/`} />
            )
        }else if(this.props.user.usertype ==='child'){
            console.log('child')
            return (
                <Redirect to={`/child`} />
            )
        }
        return null;
    }
}

const mapStatetoProps = state => ({
    loggedIn: state.user.data !== null,
    user: state.user.data
});

export default connect(mapStatetoProps)(Dashboard)
