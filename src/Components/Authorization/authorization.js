import React from 'react'
import {connect} from 'react-redux';
import Parent from '../Parent/parent'
import Header from '../Header/header'
import {fetchYnabBudgets, fetchUserBasicInfo} from '../../actions/index.actions'
import {push} from 'connected-react-router';

export class Authorization extends React.Component{
    constructor(){
        super()
        this.state = {}
        this.getQueryString = this.getQueryString.bind(this)
    }

    componentDidMount(){
        console.log(this.props.loggedIn)
        this.props.dispatch(fetchUserBasicInfo())
            .then(() => this.getQueryString())
    }

    getQueryString(){
        console.log(this.props.user)
        console.log('query string called')
        let query = window.location.search
        console.log(query)
        this.props.dispatch(fetchYnabBudgets(query))
            .then(() => this.props.dispatch(push('/setup')))
    }
   
    render(){
        return null
    }
}

const mapStateToProps = state => ({
    loggedIn: state.user._id !== null,
    user: state.user,
    children: state.children,
});

export default connect(mapStateToProps)(Authorization);