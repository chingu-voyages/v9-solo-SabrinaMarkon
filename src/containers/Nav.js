import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Nav() {

  return (
      <nav className="nav">
          <ul>
            <li key="0" className="nav__item">
              <NavLink className="nav__link" exact activeClassName="active" to="/">Home</NavLink>
            </li>
            <li key="1" className="nav__item">
              <NavLink className="nav__link" exact activeClassName="active" to="/howitworks">How It Works</NavLink>
            </li>
            <li key="2" className="nav__item">
              <NavLink className="nav__link" exact activeClassName="active" to="/signup">Signup</NavLink>
            </li>
            <li key="3" className="nav__item">
              <NavLink className="nav__link" exact activeClassName="active" to="/login">Login</NavLink>
            </li>
            <li key="4" className="nav__item">
              <NavLink className="nav__link" activeClassName="active" to="/postjob">Post a Job!</NavLink>
            </li>
          </ul>
      </nav>
  )
}