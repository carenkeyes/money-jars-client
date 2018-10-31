import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import Header from '../Header/header';
import Avatar from '../Avatar/avatar';
import Button from '../Button/button';
import {fetchUserLogin} from '../../actions/index.actions';
import './home.css';


export class Home extends React.Component{
    constructor(){
        super()
        this.state = {
            register: false,
        }
    }

    handleClick = () => {
        this.setState({
            register: true,
        })
    }

    demoLogIn = () => {
        this.props.dispatch(fetchUserLogin('demo child', 'password'))
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    render(){
        let message = 
            <div className='home-message'>
                <p>You budget online.</p>
                <p>Why shouldn't your kids?</p>
            </div>

        if(this.state.register){
            return <Redirect to='/register/signup' />
        }
        return (
            <div>
                {this.renderRedirect}
                <Header 
                    title='Money Jars' 
                    className='header-home'
                    leftImage='header-image home-left-image'
                    rightImage='header-image home-right-image'
                    but1Label='Sign Up Now'
                    but1Type='button'
                    but1Class='home-button pink'
                    but1OnClick={this.handleClick}
                    message={message}
                />
                <section className='home-section'>
                    <div className='home-content'>
                        <p className='content-text'>
                            As a firm believer in telling my money what to do and a devout 
                            <a href='https://www.youneedabudget.com/' target='_blank' rel="noopener noreferrer">  YNAB  </a> enthusiast (they
                            aren't even paying me to say that), I've struggled to find the best method to teach my kids to manage
                            their money using the same principles. 
                        </p>
                    </div>
                </section>
                <section className='home-section' >
                    <div className='home-content'>
                        <Avatar className='money-jars section-image' />
                        <div className='content-paragraph'>
                            <p className='content-text'> 
                                We started by using jars, but found them bulky and awkard. A jar for each savings goals might mean
                                10-15 of them stacked up on a shelf somewhere. We tried to envelopes but found that
                                the large amount of change required was both a deterant for me as a parent and 
                                also likely to destroy the envelopes.
                            </p>
                        </div>
                    </div>
                </section>
                <section className='home-section'>
                    <div className='home-content'>
                        <Avatar className='money-envelopes section-image' />
                        <div className='content-paragraph'>
                            <p className='content-text'>
                                When YNAB announced a public API, it seemed like the perfect opportunity.
                                With Money Jars, you can now maintain one category for each child in your budget. Money
                                Jars syncs automatically when you child logs in, displaying their unbudgeted dollars
                                and allowing them to create and add to goals.
                            </p>
                        </div>
                    </div>
                </section>
                <section className='home-section'>
                    <div className='home-content'>
                        <div className='content-paragraph'>
                            <p className='content-text'>
                                Want to see how it works? Login as a child and get a feel for what your kids can do
                            </p>
                        </div>
                        <Button 
                            label='Demo login'
                            onClick={this.demoLogIn}
                            className='demo-login pink click'
                        />
                    </div>
                </section>
                <section className='home-section'>
                    <div className='home-content'>
                        <div className='content-paragraph'>
                            <p className='content-text'>
                                Not a YNAB user? We've still got your covered. Simply select "budget manually" once
                                you have created an account and you will be able to add funds to your child's account
                                whenever you like.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        );
}
}

const mapStatetoProps = state => ({

});

export default connect(mapStatetoProps)(Home)