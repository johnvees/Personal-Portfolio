import React, { Component } from 'react';
import Header from '../../parts/id/Header';
import Hero from '../../parts/id/About/Hero';
import Content from '../../parts/en/About/Content';
import Footer from '../../parts/id/Footer';

export default class AboutPage extends Component {
  render() {
    return (
      <div>
        <Header {...this.props}></Header>
        <Hero></Hero>
        <Content></Content>
        <Footer {...this.props}></Footer>
      </div>
    );
  }
}
