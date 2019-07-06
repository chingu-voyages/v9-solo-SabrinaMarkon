import React, { Component } from 'react';

export default class Featured extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
			<div id="section3" className="container_inner">
				<section id="services-area" className="services-section">
					<div className="container">
						<div className="row">
							<div className="col-sm-12 text-center inner our-service">
								<div className="service">
									<h1>Our Services</h1>
									<p>Nunc diam leo, fringilla vulputate elit lobortis, consectetur vestibulum quam. Sed id <br />
										felis ligula. In euismod libero at magna dapibus, in rutrum velit lacinia. <br />
										Etiam a mi quis arcu varius condimentum.</p>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section id="testimornial-area">
					<div className="container">
						<div className="row text-center">
							<div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 col-xxs-12">
								<div className="testimonial-content">
									<img src="./images/4-1.jpg" alt="" />
									<h2>Column One</h2>
									<p>Ut ac odio scelerisque ante ornare commodo. Sed faucibus dui libero, in tincidunt purus pretium quis. Fusce posuere egestas enim eu viverra.</p>
									<br />
								</div>
							</div>
							<div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 col-xxs-12">
								<div className="testimonial-content">
									<img src="./images/4-2.jpg" alt="" />
									<h2>Column Two</h2>
									<p>Ut ac odio scelerisque ante ornare commodo. Sed faucibus dui libero, in tincidunt purus pretium quis.</p>
									<a href="#" className="content-link">read it</a>
									<br />
									<p id="redd"></p>
								</div>
							</div>
							<div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 col-xxs-12">
								<div className="testimonial-content">
									<img src="./images/4-3.jpg" alt="" />
									<h2>Column Three</h2>
									<p>Ut ac odio scelerisque ante ornare commodo. Sed faucibus dui libero, in tincidunt purus pretium quis. Fusce posuere egestas enim eu viverra.</p>
									<br />
								</div>
							</div>
							<div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 col-xxs-12">
								<div className="testimonial-content">
									<img src="./images/4-4.jpg" alt="" />
									<h2>Column Four</h2>
									<p>Ut ac odio scelerisque ante ornare commodo. Sed faucibus dui libero, in tincidunt purus pretium quis.</p>
									<a href="#" className="content-link">details</a>
									<br />
									<p id="dets"></p>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-lg-12">
								<div className="tm-box">
									<img src="./images/4-5.jpg" alt="" className="img-responsive" />
									<div className="tm-box-description">
										<h2>One Big Column</h2>
										<p className="tm-box-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tempor eros eget eros maximus, 
										ut cursus sem euismod. Donec iaculis tristique odio at consectetur. Nullam dignissim varius suscipit. Sed in leo sit
										 amet velit finibus pretium. Vivamus dictum nisi ac fermentum interdum. Vestibulum vel mauris at erat mattis accumsan
										  et ac lorem. Cras non venenatis orci, sed tincidunt massa. Duis nisl lectus, auctor eu sodales at, dignissim eu orci. 
											Sed vitae venenatis magna, in blandit metus. Praesent volutpat cursus rhoncus. Aenean arcu diam, suscipit ac neque in, 
											sollicitudin convallis orci.</p>
										<p className="tm-box-p">Fusce eu porta massa, sed tincidunt turpis. Cum sociis natoque penatibus et magnis dis parturient
										 montes, nascetur ridiculus mus. Vivamus a urna tellus. Integer pharetra vitae nisi et lacinia. Morbi sagittis justo a 
										 velit placerat ullamcorper quis quis velit. Sed convallis at risus ullamcorper auctor. Praesent quis velit neque. Quisque 
										 semper porta nisi vitae suscipit. Duis lectus magna, ornare ac scelerisque quis, maximus eget nisi.</p>
										<a href="#" className="content-link">Read More</a>    
									</div>                        
								</div>                    
							</div>
						</div>
					</div>
				</section>
			</div>
    )
	}
}