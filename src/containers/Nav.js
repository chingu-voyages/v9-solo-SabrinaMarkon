import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Nav() {

  return (
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>                        
            </button>
          </div> 
            <div className="single-page-nav sticky-wrapper" id="tmNavbar">
              <ul className="nav navbar-nav">
                <li key="nav-0" className="nav__item">
                  <NavLink className="nav__link" exact activeClassName="active" to="/">Home</NavLink>
                </li>
                <li key="nav-1" className="nav__item">
                  <NavLink className="nav__link" exact activeClassName="active" to="/howitworks">How It Works</NavLink>
                </li>
                <li key="nav-2" className="nav__item">
                  <NavLink className="nav__link" exact activeClassName="active" to="/signup">Signup</NavLink>
                </li>
                <li key="nav-3" className="nav__item">
                  <NavLink className="nav__link" exact activeClassName="active" to="/login">Login</NavLink>
                </li>
                <li key="nav-4" className="nav__item">
                  <NavLink className="nav__link" activeClassName="active" to="/postjob">Post a Job!</NavLink>
                </li>
                <li key="nav-5" className="nav__item">
                  <a href="#section4">Contact</a>
                </li>
              </ul>
            </div>
          </div>
      </nav>
  )
}