import React from 'react';
import {connect} from 'react-redux';
import Button from '../Button/button';
import Avatar from '../Avatar/avatar';
import ProgressBar from '../ProgressBar/progress-bar';
import GoalDetails from '../GoalDetails/goal-details';
import Editable from '../Editable/editable';
import {editGoal} from '../../actions/budget';
import './goal.css';

export class Goal extends React.Component{
    constructor(){
        super()
        this.state = {
            options: false,
            title: {editing: false},
            price: {editing: false}
        }
    }

    handleClick = () => {
        this.setState({
            options: !this.state.options
        })
    }

    setEditingTitle = e => {
        e.preventDefault();
        this.setState({
            title: {editing: true},
        })
    }

    setEditingPrice = e => {
        console.log('set price')
        e.preventDefault()
        this.setState({
            price: {editing: true}
        })
    }

    editTitle = (id, value) => {
        console.log(id)
        console.log(value)
        const edits = {title: value}
        this.setState({
            title: {editing: false},
        })
        return this.props.dispatch(editGoal(id, edits))
    }

    editPrice = (id, value) => {
        let amount=parseFloat(value, 10)*1000
        console.log(amount)
        const edits = {goal_amount: amount}
        this.setState({
            price: {editing: false},
        })
        return this.props.dispatch(editGoal(id, edits))
    }

    escEdit = e => {
        console.log('escape edit')
        e.preventDefault()
        this.setState({
            title: {editing: false},
            price: {editing: false}
        })
    }

    render(){
        console.log(this.props.max)

        const goalOptions = []
        let goals = this.props.budget.goals
        for(let goal of goals){
            goalOptions.push({
                label: goal.title,
                value: goal._id
            })
        }

        //putting price, togo amount, etc. in currency format
        //let max = (this.props.toBudget/1000).toFixed([2])

        let price = this.props.amount/1000
        price = price.toFixed([2])

        let saved = this.props.saved/1000
        saved = saved.toFixed([2])

        let togo = this.props.amount-this.props.saved;
        togo = (togo/1000).toFixed([2])

        return(
            <section className='goal-section'>
                <div>
                    <h2 className='goal-title'>
                        <Editable 
                            editing={this.state.title.editing}
                            value={this.props.title}
                            props={this.props}
                            onClick={this.setEditingTitle}
                            onBlur={this.escEdit}
                            type="text"
                            className="title-edit-input"
                            onEdit={this.editTitle.bind(null, this.props._id)}
                        />
                        : <span className={`${this.props.category}-title`}>{this.props.category}</span>
                    </h2>
                </div>
                <div className = {`goalContent content-${this.props.category}`}>
                    <div className='goalImage'>
                        <Avatar 
                            image={this.props.imgUrl}
                            className={this.props.imgUrl ? 'avatarImage' : `${this.props.category}-pig piggy-bank` }
                        />
                    </div>
                    <div className='goal-info'>
                        <div className='goal-total'>
                            <p className='goal-text'> I need: 
                                <span className='money-value'> $ 
                                    <Editable
                                        editing={this.state.price.editing}
                                        value={price}
                                        props={this.props}
                                        onClick={this.setEditingPrice}
                                        onBlur={this.escEdit}
                                        type="number"
                                        className="price-edit-input"
                                        onEdit={this.editPrice.bind(null, this.props._id)}
                                    />
                                </span></p>
                            <Button 
                            label={this.state.options ? 'Close': 'Options'}
                            onClick={this.handleClick}
                            className={`${this.props.category}-button click`}
                        />                            
                        </div>
                        <div className='goal-progress-bar'>
                            <ProgressBar 
                                goalAmount={this.props.amount}
                                savedAmount={this.props.saved}
                                className={this.props.category}
                            />
                        </div>
                        <div className='goal-progress'>
                        <p className='goal-text'>I have: <span className='money-value'> ${saved} </span> </p> 
                        <p className='goal-text'><span className='money-value'> ${togo} </span> left to save! </p>
                        </div>
                    </div>
                    
                </div>
                <GoalDetails 
                    options={this.state.options}
                    goalId={this.props._id}
                    category={this.props.category}
                    userId={this.props.userId}
                    goalOptions={goalOptions}
                    closeOptions={this.handleClick}
                    saved={this.props.saved}
                    max={this.props.max}
                     />          
            </section>
        )
    }
}
const mapStatetoProps = state => ({
    user: state.user,
    budget: state.budget,
});

export default connect(mapStatetoProps)(Goal)
