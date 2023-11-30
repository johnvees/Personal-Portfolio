import React, { Component } from 'react';
import Footer from '../../parts/id/Footer';
import Header from '../../parts/id/Header';
import Hero from '../../parts/id/Landing/Hero';
import About from '../../parts/id/Landing/About';
import Service from '../../parts/id/Landing/Service';
import Project from '../../parts/id/Landing/Project';
import Collaborate from '../../parts/id/Landing/Collaborate';

export default class LandingPage extends Component {
  render() {
    return (
      <div>
        <Header {...this.props}></Header>
        <Hero></Hero>
        <About></About>
        <Service></Service>
        <Project></Project>
        <Collaborate></Collaborate>
        <Footer {...this.props}></Footer>
      </div>
    );
  }
}
