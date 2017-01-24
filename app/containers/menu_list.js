/*jshint esversion: 6 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { bindActionCreators } from 'redux';
import HeadLine from '../components/head_line';

class MenuList extends Component {
  renderDescriptionList(array) {
    return array.map((item) => {
      return (
        <li key={item} >
          { item }
        </li>
      );
    });
  }

  renderMenuItemsList(array) {
    return array.map((item) => {
      return (
        <div key={item.name} className="menu-item tiny-100">
          <div className="tiny-80">
            <h4 className="bold">{item.name}</h4>
            <ul>
              { this.renderDescriptionList(item.items) }
            </ul>
          </div>
          <div className="tiny-20">
            <h2 className="item-price">{ item.price }</h2>
          </div>
        </div>
      );
    });
  }

  renderMenus() {
    return this.props.menuItems.sections.map((section) => {
      return (
        <div key={section.title} className="menu-section">
          <HeadLine title={section.title} />
          <p className="section-description">{ section.sectionDescription }</p>
          { this.renderMenuItemsList(section.menuItems) }
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
