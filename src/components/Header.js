import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <div id="section1">
			<header id="header-area" className="intro-section">
				<div className="container">
					<div className="row">
						<div className="col-sm-12 text-center">
							<div className="header-content">
								<h1>Hire-A-Team</h1>
								<h4>...Build Your Dream!</h4>
								<div className="center-block text-center">
									<NavLink className="btn btn-success btn-lg margin-trbl" to="/signup">Post a Job!</NavLink>
									<NavLink className="btn btn-success btn-lg margin-trbl" to="/postjob">Create a Team!</NavLink>
        				</div>
							</div>
						</div>
					</div>
				</div>
			</header>
		</div>
  )
}