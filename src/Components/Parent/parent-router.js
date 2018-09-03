import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import Parent from '../Parent/parent';
import {fetchUserBasicInfo} from '../../actions/index.actions';

export class ParentRouter extends React.Component {

    componentDidMount(){
        this.props.dispatch(fetchUserBasicInfo())
        console.log('What is going on?')
    }

    render(){
        if(!this.props.loggedIn){
            return(
                <Redirect to='/register/login' />
            )
        }
        if(this.props.user.children.length === 0){
            console.log(this.props.user.children.length)
            return(
                <Redirect to='/setup' />
            )
        }
            return(
                <Parent />
            )
    }
}

const mapStateToProps = state => ({
    loggedIn: state.user.data !==null,
    user: state.user.data,
})

export default connect(mapStateToProps)(ParentRouter);