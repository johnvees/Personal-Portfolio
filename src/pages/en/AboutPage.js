import React, { Component } from 'react';
import Header from '../../parts/en/Header';
import Hero from '../../parts/en/About/Hero';
import Content from '../../parts/en/About/Content';
import Footer from '../../parts/en/Footer';

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
