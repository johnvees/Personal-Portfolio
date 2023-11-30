import React, { Component } from 'react';
import Footer from '../../parts/id/Footer';
import Header from '../../parts/id/Header';
import Hero from '../../parts/id/Landing/Hero';
import About from '../../parts/id/Landing/About';
import Service from '../../parts/en/Landing/Service';
import Project from '../../parts/en/Landing/Project';
import Collaborate from '../../parts/en/Landing/Collaborate';

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
