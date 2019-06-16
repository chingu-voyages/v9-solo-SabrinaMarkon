import React from 'react';
import ReactDOM from 'react-dom';
import { Route, NavLink, BrowserRouter as Router, Switch } from 'react-router-dom';
import App from './containers/App';
import HowItWorks from './components/HowItWorks';
import Signup from './components/Signup';
import Login from './components/Login';
import PostJob from './components/PostJob';
// Switch component helps us to render the components only when path matches otherwise it fallbacks to the not found component.
const NotFound = () => <h1>Not Found</h1>

import './css/styles.scss';

const routing = (
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/howitworks" component={HowItWorks} />
      <Route path="/signup" component={Signup} />
      <Route path="/login" component={Login} />
      <Route path="/postjob" component={PostJob} />
      <Route component={NotFound} />
    </Switch>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'))
