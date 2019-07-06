import React from 'react';

export default function Footer() {

  return (
    <footer id="footer footer-area">s
      <div className="container">
        <div className="row text-center">
          <div className="col-sm-12">
            <div className="footer-content">
              <h1>TEST</h1>
              <p>I like cats</p>
            </div>                
          </div>
        </div>
      </div>
      <hr />
      <div className="container">
        <div className="row">
          <div className="col-sm-12 text-center">             
            <p className="copy footer__madewithlove">Made with <i id="madewithlove-heart" className="fa fa-heart" aria-hidden="true"></i>  4 U by Sabrina</p>
          </div>
        </div>
      </div>
    </footer>
  )
}