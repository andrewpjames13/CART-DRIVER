/*jshint esversion: 6 */
import React, { Component } from 'react';
import NavBarItemIcon from './nav_bar_item_icon';

class NavBarItem extends Component {
  handleClick() {
    this.props.onClick(this.props.section.name);
  }

  render() {
    const section = this.props.section;
    var el = null;

    if (section.name === 'home' || section.name === 'menu' || section.name ==='photos' || section.name === 'nav-menu' || section.name === 'call') {
      el = (
        <NavBarItemIcon section={section} onClick={this.handleClick.bind(this)} activeSection={this.props.activeSection} />
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