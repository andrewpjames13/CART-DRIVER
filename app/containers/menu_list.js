/*jshint esversion: 6 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMenuItems } from '../actions/index';
import { bindActionCreators } from 'redux';

class MenuList extends Component {
  renderList() {
    return this.props.menuItems.map((item) => {
      return (
        <li
          key={item.title}
          onClick={() => this.props.getMenuItems(item)}>
          {item.title}
        </li>
      );
    });
  }

  render() {
    return (
      <ul>
        {this.renderList()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    menuItems: state.menuItems
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({getMenuItems: getMenuItems}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuList);
