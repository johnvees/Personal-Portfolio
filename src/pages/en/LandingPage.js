import React, { Component } from 'react';
import Header from '../../parts/en/Header';
import Hero from '../../parts/en/Landing/Hero';
import About from '../../parts/en/Landing/About';
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
      </div>
    );
  }
}
