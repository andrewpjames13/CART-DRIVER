/*jshint esversion: 6 */
import $ from 'jquery';
import React, { Component } from 'react';

export default class NavBar extends Component {
  render() {
    return(
      <div className="nav-bar">
        <a href="#home" className="tiny-20 nav-item active">
          <div className="svg-container">
            <svg version="1.1" className="home-icon" x="0px" y="0px" viewBox="0 0 24 24">
              <path d="M24,12.1l-1.4,1.5L12,3.7L1.4,13.6L0,12.1L12,1C12,1,24,12.1,24,12.1z M20,13.9L18,24H6L4,13.9l8-7.4
              	C12,6.5,20,13.9,20,13.9z M13,20c0-0.6-0.4-1-1-1s-1,0.4-1,1s0.4,1,1,1S13,20.6,13,20z M14,15c0-1.1-0.9-2-2-2s-2,0.9-2,2s0.9,2,2,2
              S14,16.1,14,15z"/>
            </svg>
          </div>
        </a>
        <a href="#food" className="tiny-20 nav-item" onClick={this.onNavBarItemClick}>Food</a>
        <a href="#" className="tiny-20 nav-item" onClick={this.onNavBarItemClick}>
          <div className="call-me"></div>
        </a>
        <a href="#photos" className="tiny-20 nav-item" onClick={this.onNavBarItemClick}>Photos</a>
        <a href="#menu" className="tiny-20 nav-item" onClick={this.onNavBarMenuClick}>Menu</a>
        <div className="tiny-100 border-top">
          <a href="#press" className="tiny-33 nav-item" onClick={this.onNavBarItemClick}>PRESS</a>
          <a href="#about" className="tiny-33 nav-item border-left-right" onClick={this.onNavBarItemClick}>ABOUT</a>
          <a href="#contct" className="tiny-33 nav-item" onClick={this.onNavBarItemClick}>CONTACT</a>
        </div>
      </div>
    );
  }

  onNavBarItemClick(event) {
    console.log(event);
    event.preventDefault();
    $('.nav-item, .svg-container, .svg-container svg').removeClass('active');
    $(event.target).addClass('active');
    // $('html,body').animate({
    //   scrollTop: $( $(this).attr('href') ).offset().top
    // }, 800);
    // return false;
  };
  

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
