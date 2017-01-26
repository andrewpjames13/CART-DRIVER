/*jshint esversion: 6 */
import React, { Component } from 'react';
import HeadLine from '../components/head_line';

class Press extends Component {
  render() {
    return (
      <div className="press-section">
        <HeadLine title="Press"/>
        <div className="press-scroll">
          <a className="press-item">
            <div className="press-content">
              <h4>HeadLine</h4>
              <p className="bold">Description</p>
            </div>
          </a>
          <a className="press-item">
            <div className="press-content">
              <h4>HeadLine</h4>
              <p className="bold">Description</p>
            </div>
          </a>
        </div>
      </div>
    );
  }
}

export default Press;
