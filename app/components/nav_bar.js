/*jshint esversion: 6 */
import React, { Component } from 'react';
import NavBarItem from './nav_bar_item';

const NavBar = (props) => {
  const navBarItems = props.sections.map((section) => {
    return <NavBarItem key={section.name} section={section} />
  });

  return (
    <div className="nav-bar">
      {navBarItems}
    </div>
  );
};

export default NavBar;
