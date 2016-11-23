/*jshint esversion: 6 */
import React, { Component } from 'react';

export default class NavBar extends Component {
  render() {
    return <div className="nav-bar" onClick={this.onNavBarClick}></div>;
  }

  onNavBarClick(event) {
    console.log(event);
  }
}
