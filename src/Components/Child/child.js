import React from 'react';
import {connect} from 'react-redux';
import Goal from '../Goal/goal';
import Header from '../Header/header';
import AddGoal from '../AddGoal/addgoal';

export class Child extends React.Component{

    render(){
        console.log(this.props.goals);

        let goals = this.props.goals.map(goal =>
            <Goal key={goal.title} {...goal} />
        )

        return (
            <div className="child-page">;
                <Header />
                <AddGoal form='new-goal'/>
                <div>
                    {goals}
                </div>
            </div>
        )
    }
}
    
    const mapStatetoProps = state => ({
        goals: state.budget.goals
    });
    
    export default connect(mapStatetoProps)(Child)