import React from 'react';
import {connect} from 'react-redux';
import Request from '../Request/request'
import {Redirect} from 'react-router-dom'
import {fetchUserBasicInfo, updateUserProfile} from '../../actions/index.actions';
import Header from '../Header/header';

export class Parent extends React.Component {

    componentDidMount(){
        this.props.dispatch(fetchUserBasicInfo())
        console.log('component did mount')
    }

    render(){

        let message=<p>See your kids accounts!</p>
        let greeting=`Welcome ${this.props.user.username}!`

        if(this.props.user.children.length === 1){
            message = <p>See an overview of {this.props.user.children[0].username}'s
                 account below </p>
        }else if(this.props.user.children.length > 1){
            message = <p>See an overview of your children's accounts below</p>
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
                    
                <section>

                </section>
                <section>

                </section>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    loggedIn: state.user._id !== null,
    user: state.user,
    children: state.children,
});

export default connect(mapStateToProps)(Parent);