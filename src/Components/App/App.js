import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch, withRouter} from 'react-router-dom';
import Navbar from '../Navbar/navbar';
import Footer from '../Footer/footer';
import Home from '../Home/home';
import RegistrationPage from '../RegistrationPage/registration-page';
import Dashboard from '../Dashboard/dashboard';
import Child from '../Child/child';
import Parent from '../Parent/parent';
import Privacy from '../Privacy/privacy';
//import {refreshAuthToken} from '../../actions/auth';
import { connect } from 'react-redux';
import registrationChild from '../RegistrationChild/registration-child';

export class App extends React.Component {
  /*componentDidUpdate(prevProps){
    if(!prevProps.logginIn && this.props.logginIn){
      this.startPeriodicRefresh();
    }else if (prevProps.logginIn && !this.props.logginIn){
      this.stopPeriodicRefresh();
    }
  }

  componentWillUnmount(){
    this.stopPeriodicRefresh();
  }

  startPeriodicRefresh(){
    this.refreshInterval = setInterval(
      () => this.props.dispatch(refreshAuthToken()),
      60*60*1000
    );
  }

  stopPeriodicRefresh(){
    if(!this.refreshInterval){
      return;
    }

    clearInterval(this.refreshInterval);
  }*/

  render() {
    return (
        <div className="app">
          <Navbar />       
          <main role="main">
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/register' component={RegistrationPage} />
              <Route path='/dashboard' component={Dashboard} />
              <Route path='/child' component={Child} />
              <Route path='/parent' component={Parent} />
              <Route path='/register-child' component={registrationChild} />
              <Route exact path="/privacy" component={Privacy} />
            </Switch>
          </main>          
          <Footer />
        </div>
    );
  }
}

const mapStateToProps = state => ({

});

export default withRouter(connect(mapStateToProps)(App));


