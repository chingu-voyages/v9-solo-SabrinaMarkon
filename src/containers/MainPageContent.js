import React, { Component } from 'react';

import Benefits from '../components/Benefits';
import Featured from '../components/Featured';
import Contact from '../components/Contact';

export default class MainPageContent extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className="container_inner">
        <Benefits />
        <Featured />
        <Contact />
      </div>
    )
  }
}