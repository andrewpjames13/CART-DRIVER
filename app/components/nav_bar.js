/*jshint esversion: 6 */
import $ from 'jquery';
import React, { Component } from 'react';

export default class NavBar extends Component {
  render() {
    return(
      <div className="nav-bar">
        <a href="#home" className="tiny-20 nav-item active" onClick={this.onNavBarItemClick}>Home</a>
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
    event.preventDefault();
    $('.nav-item').removeClass('active');
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
