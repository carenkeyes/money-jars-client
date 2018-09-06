import React from 'react'
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import Parent from '../Parent/parent'
import Header from '../Header/header'
import {fetchYnabBudgets} from '../../actions/index.actions'
import {push} from 'connected-react-router';

export class YnabHandler extends React.Component{
    constructor(){
        super()
        this.getQueryString = this.getQueryString.bind(this)
    }

    componentDidMount(){
        this.getQueryString()
    }

    getQueryString(){
        console.log(this.props.user)
        console.log(this.props.appState)
        console.log('query string called')
        let query = window.location.search
        console.log(query)
        this.props.dispatch(fetchYnabBudgets(query))
            .then(() => this.props.dispatch(push('/parent/setup')))
    }
   
    render(){
        return null
    }
}

const mapStateToProps = state => ({
    loggedIn: state.user._id !==null,
    user: state.user,
    ynab: state.ynab,
    children: state.children,
    appState: state.appState,
})

export default withRouter(connect(mapStateToProps)(YnabHandler));