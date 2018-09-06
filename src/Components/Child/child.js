import React from 'react';
import Header from '../Header/header';
import AddGoal from '../AddGoal/addgoal';
import {updateToBudget} from '../../actions/index.actions';
import './child.css';
import { connect } from 'react-redux';

export class Child extends React.Component{

    componentDidMount(){
        this.props.dispatch(updateToBudget(this.props.toBudget))
    }

    render(){
        
        return (
            <div className='child-page'>;
                <Header 
                    title={this.props.title}
                    className='header-child'
                    message={this.props.message}
                    but1Label={this.props.but1Label}
                    but1OnClick={this.props.but1OnClick}
                    but1Class='home-button blue'
                    rightImage='header-image counting-money'
                />
                <AddGoal 
                    form='new-goal'
                    addNew={this.props.addNew}
                    userId={this.props.userId}
                    closeForm={this.props.but1OnClick}
                />
                <div>
                    {this.props.form}
                </div>
                <div>
                    {this.props.goals}
                </div>
            </div>
        )

    }
}

const mapStatetoProps = state => ({
    budget: state.budget,
})

export default connect(mapStatetoProps)(Child)
