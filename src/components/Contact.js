import React, { Component } from 'react';

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div id="section4" className="container_inner">
      <section id="contact-area" className="contact-section">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 text-center inner">
              <div className="contact-content">
                <h1>contact form</h1>
                <div className="row">                            
                  <div className="col-sm-12">
                    <p>Nunc diam leo, fringilla vulputate elit lobortis, consectetur vestibulum quam. Sed id <br />
                      felis ligula. In euismod libero at magna dapibus, in rutrum velit lacinia. <br />
                      Etiam a mi quis arcu varius condimentum.</p>
                    </div>                            
                  </div>

                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <form action="#" method="post" className="contact-form">
                  <div className="col-sm-6 contact-form-left">
                    <div className="form-group">
                      <input name="name" type="text" className="form-control" id="name" placeholder="Name" />
                        <input type="email" name="email" className="form-control" id="mail" placeholder="Email" />
                      <input name="subject" type="text" className="form-control" id="subject" placeholder="Subject" />
                    </div>
                  </div>
                  <div className="col-sm-6 contact-form-right">
                    <div className="form-group">
                      <textarea name="message" rows="6" className="form-control" id="comment" placeholder="Your message here..."></textarea>
                      <button type="submit" className="btn btn-default">Send</button>
                    </div>
                  </div>                        
                </form>    
              </div>                
            </div>
          </div>
        </section>
    </div>  
    )
  }
}