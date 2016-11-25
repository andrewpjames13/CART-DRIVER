/*jshint esversion: 6 */
import React, { Component } from 'react';

class NavBarItem extends Component {

  render() {
    const section = this.props.section;
    var el = null;

    if (section.name === 'home' || section.name === 'menu' || section.name ==='photos' || section.name === 'nav-menu') {
      el = (
        <a href={"#"+section.name} className="tiny-20 nav-item">
          <div className="svg-container">
            <svg version="1.1" className={section.name+"-icon"} x="0px" y="0px" viewBox="0 0 24 24">
              <path d={section.svgPath}/>
            </svg>
          </div>
        </a>
      );
    } else if (section.name === 'call') {
      el = (
        <a href={"#"+section.name} className="tiny-20 nav-item">
          <div className="call-me"></div>
        </a>
      );
    } else {
      el = (
        <a href={"#"+section.name} className="tiny-33 nav-item border-top">
          {section.name}
        </a>
      );
    }

    return el
  }
}

export default NavBarItem;
