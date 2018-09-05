
import React from 'react';
import Header from '../Header/header';
import AddGoal from '../AddGoal/addgoal';
import './child.css';

export default class Child extends React.Component{

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
                    max={this.props.max}
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
