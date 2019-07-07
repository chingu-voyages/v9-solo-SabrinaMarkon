import React, { Component, ErrorBoundary } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Nav from '../containers/Nav';
import Header from '../components/Header';
import MainPageContent from '../containers/MainPageContent';
import Footer from '../components/Footer';

export default class App extends Component {

  render() {
    return (
        <>
          <Nav />
          <Header />
          <MainPageContent />
          <Footer />
        </>
    )
  }
}




