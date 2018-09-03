import React from 'react';
import {connect} from 'react-redux';
import Request from '../Request/request'
import {Redirect} from 'react-router-dom'
import {fetchUserBasicInfo} from '../../actions/index.actions';
import Header from '../Header/header';

export class Parent extends React.Component {
    constructor(){
        super()
        this.state = {
            register: false,
            setupComplete: false,
        }
    }

    componentDidMount(){
        this.props.dispatch(fetchUserBasicInfo())
    }

    handleClick = () => {
        console.log('reroute to child');
        this.setState({
            register: true,
        })
    }

    finishSetUp = () => {
        console.log('finish setup')
        this.setState({
            setupComplete: true
        })
    }

    render(){

        if(!this.props.loggedIn){
            return(
            <Redirect to={'/register/login'} />
            )
        }

        if(this.state.register){
            return <Redirect to='/register-child' /> 
        }

        let message=<p>See your kids accounts!</p>
        let greeting=`Welcome ${this.props.user.username}!`
        let label1;
        let label2;

        if(!this.props.user.budget_id){
            message = <Request />
        }

        if(this.state.setupComplete && this.props.user.children.length === 1){
            message = <p>See an overview of{this.props.user.children[0].username}'s
                 account below </p>
        }else if(this.state.setupComplete && this.props.user.children.length > 1){
            message = <p>See an overview of your children's accounts below</p>
        }
        else if(this.props.user.children.length === 0){
            greeting = 'Great job!'
            message = <p> Now you can set up accounts for your children </p>
            label2 = 'Add Child'
        }
        else if(!this.state.setupComplete && this.props.user.children.length === 1){
            message = <p> You can monitor {this.props.user.children[0].username}'s account
                activity and withdrawal requests here </p>
                label1 ='Add Child'
                label2 ='Finish setup'
        }
        else if(!this.state.setupComplete && this.props.user.children.length > 1){
            message = <p> You can monitor your children's account activity
                and withdrawal requests here </p>
                label1 = 'Add Child'
                label2 = 'Finish setup'
        }
        
        /*if(!this.props.loggedIn){
            return <Redirect to='/register/login' />
        }*/

        return(
            <div>
                <Header 
                    title={this.props.greeting}
                    message={this.props.message} 
                    className='header-parent'
                    leftImage='header-image money-tree'
                    but1Label={this.props.but1Label}
                    but1Class='home-button yellow'
                    but1OnClick={this.props.but1OnClick}
                    but2Label={this.props.but2Label}
                    but2Class='home-button orange'
                    but2OnClick={this.props.but2OnClick}
                />
                    
                <section>

                </section>
                <section>

                </section>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    loggedIn: state.user.data !== null,
    user: state.user.data
});

export default connect(mapStateToProps)(Parent);