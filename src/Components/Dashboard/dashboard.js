import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchUserBasicInfo} from '../../actions/index.actions';
import './dashboard.css'

//import Header from '../Header/header';
import Parent from '../Parent/parent';
import Child from '../Child/child';
import { stat } from 'fs';

export class Dashboard extends React.Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        this.props.dispatch(fetchUserBasicInfo())
    }

    render(){
        console.log(this.props.usertype)    
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
    user: state.user
});

export default connect(mapStatetoProps)(Dashboard)
