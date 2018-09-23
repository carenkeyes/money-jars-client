import React from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchUserBasicInfo} from '../../actions/index.actions';
import './dashboard.css'


export class Dashboard extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            loggedIn: this.props.loggedIn,
        }
        this.fetchUserInfo = this.fetchUserInfo.bind(this)
    }

    fetchUserInfo(){
        this.props.dispatch(fetchUserBasicInfo())
    }

    render(){

        if(!this.props.hasUserInfo){
            this.fetchUserInfo()
        }

        if(this.props.user.usertype === 'parent' && this.props.user.setupComplete){
            console.log('parent')
            return (
                <Redirect to={`/parent/`} />
            )
        }else if(this.props.user.usertype ==='child'){
            console.log('child')
            return (
                <Redirect to={`/child`} />
            )
        }else{
            return(
                <Redirect to={'/setup'} />
            )
        }
    }
}

const mapStatetoProps = state => ({
    hasUserInfo: state.user._id !== null,
    user: state.user
});

export default connect(mapStatetoProps)(Dashboard);
