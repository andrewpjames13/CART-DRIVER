/*jshint esversion: 6 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { bindActionCreators } from 'redux';

class MenuList extends Component {
  componentWillMount() {
    this.props.fetchData();
  }

  renderList() {
    return this.props.menuItems.map((item) => {
      return (
        <li key={item.title} >
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

export default connect(mapStateToProps, actions)(MenuList);
