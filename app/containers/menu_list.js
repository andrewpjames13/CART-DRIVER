/*jshint esversion: 6 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { bindActionCreators } from 'redux';

class MenuList extends Component {
  renderDescriptionList(array) {
      return array.map((item) => {
        return (
          <li>
            { item }
          </li>
        );
      });
  }

  renderMenuItemsList(array) {
    return array.map((item) => {
      return (
        <li key={item.name} >
          {item.name}
          <ul>
            { this.renderDescriptionList(item.items) }
          </ul>
        </li>
      );
    });
  }

  renderMenus() {
    return this.props.menuItems.sections.map((section) => {
      return (
        <div>
          <h1 key={section.title} >
            {section.title}
          </h1>
          <ul>
            { this.renderMenuItemsList(section.menuItems) }
          </ul>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        { this.renderMenus() }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    menuItems: state.menuItems
  };
}

export default connect(mapStateToProps, actions)(MenuList);
