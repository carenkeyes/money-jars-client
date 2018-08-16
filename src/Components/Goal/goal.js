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
                                <Avatar 
                                    image={this.props.imageurl} 
                                />
                                <Button 
                                    label={this.state.label}
                                    onClick={this.handleClick}/>
                            </div>
                            <div className='goalProgress'>
                                <ProgressBar 
                                    goalAmount={this.props.amount}
                                    savedAmount={this.props.saved}    
                                />
                            </div>
                        </div> 
                        <GoalDetails
                            goalAmount={this.props.amount}
                            savedAmount={this.props.saved}
                            leftAmount={togo}
                            id={this.props.id}
                        />       
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
                        <Avatar 
                            image={this.props.imageurl}
                        />
                        <Button 
                            label={this.state.label}
                            onClick={this.handleClick}/>
                    </div>
                    <div className='goalProgress'>
                        <ProgressBar 
                            goalAmount={this.props.amount}
                            savedAmount={this.props.saved} 
                        />
                    </div>
                </div>          
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