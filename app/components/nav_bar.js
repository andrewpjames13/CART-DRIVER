/*jshint esversion: 6 */
import React, { Component } from 'react';
import NavBarItem from './nav_bar_item';

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = { activeSection: 'home' };
  }

  handleClick(section) {
    this.setState({ activeSection: section });
  }

  render() {
    const navBarItems = this.props.sections.map((section) => {
      return <NavBarItem key={section.name} section={section} onClick={this.handleClick.bind(this)} activeSection={this.state.activeSection}/>
    });

    return (
      <div className="nav-bar">
        {navBarItems}
      </div>
    );
  }
};

export default NavBar;
