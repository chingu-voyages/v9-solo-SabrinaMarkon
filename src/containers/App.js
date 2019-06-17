import React, { Component, ErrorBoundary } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HowItWorks from '../components/HowItWorks';
import Signup from '../components/Signup';
import Login from '../components/Login';
import PostJob from '../components/PostJob';
import NotFound from '../components/NotFound';

import Nav from '../containers/Nav';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default class App extends Component {

  render() {
    return (
        <BrowserRouter>
          <div className="container">
            <Nav />
            <Header />
            <Switch>
              <Route exact path="/" />
              <Route exact path="/howitworks" component={HowItWorks} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/postjob" component={PostJob} />
              <Route component={NotFound} />
            </Switch>
            <Footer />
          </div>
        </BrowserRouter>
    )
  }
}




