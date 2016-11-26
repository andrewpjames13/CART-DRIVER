/*jshint esversion: 6 */
import React, { Component } from 'react';
var classNames = require('classnames');

class NavBarItemIcon extends Component {

  render() {
    const section = this.props.section;
    var classNames = require('classnames');
    var el = null;
    var listClasses = classNames({
      'tiny-20': true,
      'nav-item': true,
      'active': section.active,
    });

    if (section.name === 'call' ) {
      el = (
        <a href={"#"+section.name} className={listClasses}>
          <div className="call-me">
            <div className="svg-container">
              <svg version="1.1" className={section.name+"-icon"} x="0px" y="0px" viewBox="0 0 24 24">
                <path d={section.svgPath}/>
              </svg>
            </div>
          </div>
        </a>
      );
    } else {
      el = (
        <a href={"#"+section.name} className={listClasses}>
          <div className="svg-container">
            <svg version="1.1" className={section.name+"-icon"} x="0px" y="0px" viewBox="0 0 24 24">
              <path d={section.svgPath}/>
            </svg>
          </div>
        </a>
      );
    }
    return el
  }
}

export default NavBarItemIcon;
