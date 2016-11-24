/*jshint esversion: 6 */
import $ from 'jquery';
import React, { Component } from 'react';

export default class NavBar extends Component {
  render() {
    return(
      <div className="nav-bar">
        <a href="#" className="tiny-20 nav-item" onClick={this.onNavBarItemClick}>Home</a>
        <a href="#" className="tiny-20 nav-item" onClick={this.onNavBarItemClick}>Food</a>
        <a href="#" className="tiny-20 nav-item" onClick={this.onNavBarItemClick}>
          <div className="call-me">call</div>
        </a>
        <a href="#" className="tiny-20 nav-item" onClick={this.onNavBarItemClick}>Photos</a>
        <a href="#" className="tiny-20 nav-item" onClick={this.onNavBarMenuClick}>Menu</a>
        <a href="#" className="tiny-33 nav-item" onClick={this.onNavBarItemClick}>Press</a>
        <a href="#" className="tiny-33 nav-item" onClick={this.onNavBarItemClick}>About</a>
        <a href="#" className="tiny-33 nav-item" onClick={this.onNavBarItemClick}>Contact</a>
      </div>
    );
  }

  onNavBarItemClick(event) {
    event.preventDefault();
    // scroll to section
  }

  onNavBarMenuClick(event) {
    event.preventDefault();
    var navBar = $('.nav-bar')
    if (navBar.hasClass('open')) {
      navBar.removeClass('open')
    } else {
      navBar.addClass('open');
    }
  }
}
