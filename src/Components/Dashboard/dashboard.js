import React from 'react';
import {Route, Redirect, withRouter} from 'react-router-dom';
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

        if(this.props.user.usertype === 'parent'&& this.props.user.children.length === 0){
            console.log('parent')
            return (
                <Redirect to={`/parent/setup`} />
            )
        }else if (this.props.user.usertype){
            return(
                <Redirect to={'/parent/complete'} />
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
    loggedIn: state.user._id !== null,
    user: state.user
});

export default withRouter(connect(mapStatetoProps)(Dashboard));
