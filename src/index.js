import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './containers/App';
import HowItWorks from './components/HowItWorks';
import Signup from './components/Signup';
import Login from './components/Login';
import PostJob from './components/PostJob';
import NotFound from './components/NotFound';

const routing = (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/howitworks" component={HowItWorks} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/postjob" component={PostJob} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)

ReactDOM.render(routing, document.getElementById('root'));
