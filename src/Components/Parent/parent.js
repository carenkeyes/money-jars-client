import React from 'react';
import {connect} from 'react-redux';
import {fetchUserBasicInfo, updateUserProfile} from '../../actions/index.actions';
import Header from '../Header/header';
import ManualBudget from '../ManualBudget/manual-budget';

export class Parent extends React.Component {
    constructor(){
        super()
        fetchUserBasicInfo()
    }

    /*componentDidMount(){
        this.props.dispatch(fetchUserBasicInfo())
        console.log('component did mount')
    }*/

    render(){

        let message=<p>See your kids accounts!</p>
        let greeting=`Welcome ${this.props.user.username}!`
        
        if(this.props.user.children.length === 1){
            message = <p>In future updates, you will see an overview of {this.props.user.children[0].username}'s
                 account below </p>
        }else if(this.props.user.children.length > 1){
            message = <p>In future updates, you will see an overview of your children's accounts below</p>
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