import React, { Component } from 'react';

export default class Benefits extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div id="section2">
      <section id="feature-area" className="about-section">
        <div className="container">
          <div className="row text-center inner">
            <div className="col-sm-4">
              <div className="feature-content">
                <img src="./images/1-1.jpg" alt="" />
                <h2 className="feature-content-title green-text">Bootstrap v3.3.6</h2>
                <p className="feature-content-description">Morbi sagittis justo a velit placerat ullamcorper quis quis velit. 
                Sed convallis at risus ullamcorper auctor. Praesent quis velit neque. Quisque semper porta nisi vitae suscipit. 
                Duis lectus magna, ornare ac scelerisque.
                </p>
                <a href="" className="feature-content-link green-btn">button green</a>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="feature-content">
                <img src="./images/1-2.jpg" alt="" />
                <h2 className="feature-content-title blue-text">Responsive Design</h2>
                <p className="feature-content-description">Conquer Template is provided by templatemo for free of charge. 
                You can use this template for any kind of website. No credit link is required. All images by 
                <a href="http://unsplash.com" target="_parent">Unsplash</a>. Thank you for visiting our website. Please come again!</p>                    
                <a href="" className="feature-content-link blue-btn">See Details</a>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="feature-content">
                <img src="./images/1-3.jpg" alt="" />
                <h2 className="feature-content-title red-text">Parallax Layout</h2>
                <p className="feature-content-description">Morbi sagittis justo a velit placerat ullamcorper quis quis velit. 
                Sed convallis at risus ullamcorper auctor. Praesent quis velit neque. Quisque semper porta nisi vitae suscipit. 
                Duis lectus magna, ornare ac scelerisque.
                </p>
                <a href="" className="feature-content-link red-btn">Button Red</a>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <section id="blog-area">
        <div className="container">
          <div className="row text-center inner">
            <div className="col-sm-6">
              <div className="blog-content">
                <img src="./images/2-1.jpg" alt="" />
                <h2>Two Column Left Side</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tempor eros eget eros maximus, ut cursus sem euismod. 
                  Donec iaculis tristique odio at consectetur. Nullam dignissim varius suscipit. Sed in leo sit amet velit finibus pretium.<br /><br />
                  Vestibulum vel mauris at erat mattis accumsan et ac lorem. Cras non venenatis orci, sed tincidunt massa. Duis nisl lectus, 
                  auctor eu sodales at, dignissim eu orci. Sed vitae venenatis magna, in blandit metus.</p>
                  <br />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="blog-content">
                  <img src="./images/2-2.jpg" alt="" />
                  <h2>Two Column Right Side</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tempor eros eget eros maximus, 
                    ut cursus sem euismod. Donec iaculis tristique odio at consectetur. Nullam dignissim varius 
                    suscipit. Sed in leo sit amet velit finibus pretium.<br /><br />								
                    Vestibulum vel mauris at erat mattis accumsan et ac lorem. Cras non venenatis orci, sed tincidunt massa. 
                    Duis nisl lectus, auctor eu sodales at, dignissim eu orci. Sed vitae venenatis magna, in blandit metus.</p>
                    <span><a href="">read more</a></span><br />
                    <p id="blofr"></p>
                  </div>
                </div>
              </div>
          </div>
        </section>
      </div>
    )
  }
}