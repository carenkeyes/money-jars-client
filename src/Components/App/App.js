import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from '../Navbar/navbar';
import Header from '../Header/header';
import Footer from '../Footer/footer';
import Home from '../Home/home';
import ChildAccount from '../ChildAccount/child-account';
import Parent from '../Parent/parent';
import Privacy from '../Privacy/privacy';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Navbar />
          <Header />          
          <main role="main">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/parent" component={Parent} />
              <Route exact path="/child" component={ChildAccount} />
              <Route exact path="/privacy" component={Privacy} />
            </Switch>
          </main>          
          <Footer />
        </div>
      </Router>
    );
  }
}


