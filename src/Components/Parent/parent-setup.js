import React from 'react';
import {connect} from 'react-redux';
import Request from '../Request/request';
import {Redirect} from 'react-router-dom';
import Parent from '../Parent/parent';
import {fetchUserBasicInfo, updateUserProfile, fetchYnabBudgets} from '../../actions/index.actions';


export class ParentSetup extends React.Component {
    constructor(){
        super()
        this.state = {
            register: false,
            setupComplete: false,
        }
        this.budgetManually = this.budgetManually.bind(this);
    }

    /*componentDidMount(){
        this.props.dispatch(fetchUserBasicInfo())
    }*/

    addChild = () => {
        this.setState({
            register: true,
        })
    }

    finishSetUp = () => {
        const data = {setupComplete: true}
        this.props.dispatch(updateUserProfile(this.props.user._id, data))
        this.setState({
            setupComplete: true,
        })
    }

    budgetManually(){
        const data = {budget_id: 'manual'}
        console.log(this)
        this.props.dispatch(updateUserProfile(this.props.user._id, data))
        this.setState({
            declined: true,
        })
    }

    render(){
        console.log(this.props.user.budget_id)
        console.log(this.props.user.budget_id===undefined)

        if(!this.props.loggedIn){
            return(
                <Redirect to={'/register/login'} />
            )
        }

        if(this.state.register){
            return <Redirect to={'/register-child'} />
        }

        if(this.state.setupComplete){
            return <Redirect to={'/parent'} />
        }

        let message='temp message';
        let greeting=`Welcome ${this.props.user.username}!`
        let label1;
        let label2;

        if(this.props.user.budget_id===undefined){
            message = 
                <Request 
                    user_id = {this.props.user._id}
                    account = {this.props.user.account}
                    ynabData = {this.props.ynab}
                    budget_id = {this.props.user.budget_id}
                    budgetManually={this.budgetManually}
                />
        }

        else if(this.props.user.budget_id && this.props.user.children.length === 0){
            greeting='Great job!'
            message=<p>Now you can create child accounts</p>
            label1='Add Child'
            label2='Finish Setup'
        }

        else if(this.props.user.budget_id && this.props.user.children.length > 0){
            greeting='Looking good!'
            message = <p> Would you like to add more children or finish setup?</p>
            label1='Add Child'
            label2='Finish Setup'
        }
        
        return (
            <Parent 
                greeting={greeting}
                message={message}
                but1Label={label1}
                but1OnClick={this.addChild}
                but2Label={label2}
                but2OnClick={this.finishSetUp}
            />
        )
    }
}

const mapStateToProps = state => ({
    loggedIn: state.user._id !==null,
    user: state.user,
    ynab: state.ynab,
    children: state.children,
})

export default connect(mapStateToProps)(ParentSetup)