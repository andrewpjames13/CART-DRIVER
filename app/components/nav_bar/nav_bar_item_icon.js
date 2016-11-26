/*jshint esversion: 6 */
import React, { Component } from 'react';

class NavBarItemIcon extends Component {

  handleClick(event) {
    event.preventDefault();
    this.props.onClick(this.props.section.name);
  }

  render() {
    const section = this.props.section;
    const classNames = require('classnames');
    let el = null;
    let listClasses = classNames({
      'tiny-20': true,
      'nav-item': true,
      'active': this.props.activeSection === section.name,
    });

    if (section.name === 'call' ) {
      el = (
        <a href={"#"+section.name} className={listClasses} onClick={this.handleClick.bind(this)}>
          <div className="call-me">
            <img src="images/callCircle.png"></img>
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
        <a href={"#"+section.name} className={listClasses} onClick={this.handleClick.bind(this)} >
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
