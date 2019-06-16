import React from 'react';
import { Route, NavLink, BrowserRouter as Router, Switch } from 'react-router-dom';
import App from '../containers/App';
import HowItWorks from '../components/HowItWorks';
import Signup from '../components/Signup';
import Login from '../components/Login';
import PostJob from '../components/PostJob';

export default function Nav() {

  return (
    <Router>
      <nav>
          <ul>
            <li>
              <NavLink exact activeClassName="active" to="/">Home</NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/howitworks">How It Works</NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/signup">Signup</NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/login">Login</NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/postjob">Post a Job</NavLink>
            </li>
          </ul>

      </nav>
    </Router>
  )
}