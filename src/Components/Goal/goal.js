import React from 'react';
//import {BrowserRouter as Router, Route, withRouter} from 'react-router-dom';
//import {connect} from 'react-redux';
import Button from '../Button/button';
import Avatar from '../Avatar/avatar';
import ProgressBar from '../ProgressBar/progress-bar';
import GoalDetails from '../GoalDetails/goal-details';
import './goal.css';

export default class Goal extends React.Component{
    constructor(){
        super()
        this.state = {
            options: false
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        console.log('edit state ran');
        this.setState({
            options: !this.state.options
        })
    }

    render(){
        let togo = this.props.amount-this.props.saved;
        return(
            <section className='goal-section'>
                <div>
                    <h3 className='goal-title'>{this.props.category}: {this.props.title}</h3>
                </div>
                <div className = 'goalContent'>
                    <div className='goalImage'>
                        <Avatar 
                            image={this.props.imageurl}
                            className={this.props.imageurl ? 'avatarImage' : `${this.props.category}-pig piggy-bank` }
                        />
                    </div>
                    <div className='goal-info'>
                        <div className='goal-total'>
                            <p className='goal-text'> I need: <span className='money-value'> ${this.props.amount} </span> </p>
                            <Button 
                            label={this.state.options ? 'Close': 'Options'}
                            onClick={this.handleClick}
                            className='blue click'
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
                        <p className='goal-text'>I have: <span className='money-value'> ${this.props.saved} </span> </p> 
                        <p className='goal-text'><span className='money-value'> ${togo} </span> left to save! </p>
                        </div>
                    </div>
                    
                </div>
                <GoalDetails options={this.state.options} />          
            </section>
        )
    }
}


/*export class Goal extends React.Component{
    constructor(){
        super()
        this.state = {
            detail: false,
            label: 'Details'
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        console.log('edit state ran');
        if(this.state.detail){
            this.setState({
                detail: false,
                label: 'Details'
            })
        }
        else if(!this.state.detail){
            this.setState({
                detail: true,
                label: 'Close'
        })}
    }

    render(){
        let togo = this.props.amount-this.props.saved;
        if(this.state.detail){
            return(
                    <section>
                        <div>
                            <h3>{this.props.title}</h3>
                        </div>
                        <div className = 'goalContent'>
                            <div className='goalImage'>
                                <Avatar />
                                <Button 
                                    label={this.state.label}
                                    onClick={this.handleClick}/>
                            </div>
                            <div className='goalProgress'>
                                <ProgressBar />
                            </div>
                        </div> 

                        <Route exact path={`${this.props.match.url}/edit/`} 
                            component={Avatar} /> 
        
                    </section>
            )
        }
        return(
            <section>
                <div>
                    <h3>{this.props.title}</h3>
                </div>
                <div className = 'goalContent'>
                    <div className='goalImage'>
                        <Avatar />
                        <Button 
                            label={this.state.label}
                            onClick={this.handleClick}/>
                    </div>
                    <div className='goalProgress'>
                        <ProgressBar />
                    </div>
                </div>          
            </section>
        )
    }
}

const mapStateToProps = (state) =>{
    return {}
}

export default withRouter(connect(mapStateToProps)(Goal))*/