import React from 'react';
import {connect} from 'react-redux';
import {fetchUserBasicInfo, updateUserProfile} from '../../actions/index.actions';
import Header from '../Header/header';
import ManualBudget from '../ManualBudget/manual-budget';

export class Parent extends React.Component {

    render(){

        let message=<p>See your kids accounts!</p>
        let greeting=`Welcome ${this.props.user.username}!`
        let pluralChild;
        if(this.props.user.children.length > 0){
            pluralChild = this.props.user.children.length >1 ? "your children's accounts" : `${this.props.user.children[0].username}'s account`}
        
        if(this.props.user.budget_id === 'manual'){
            message = <p> You can add money to {pluralChild} below </p>
        }else{
            message = <p>In future updates, you will see an overview of {pluralChild} below</p>
        }


        return(
            <div>
                <Header 
                    title={this.props.greeting || greeting}
                    message={this.props.message || message}
                    className='header-parent'
                    leftImage='header-image money-tree'
                    but1Label={this.props.but1Label}
                    but1Class='home-button yellow'
                    but1OnClick={this.props.but1OnClick}
                    but2Label={this.props.but2Label}
                    but2Class='home-button orange'
                    but2OnClick={this.props.but2OnClick}
                />
                <ManualBudget />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    loggedIn: state.user._id !== null,
    user: state.user,
});

export default connect(mapStateToProps)(Parent);