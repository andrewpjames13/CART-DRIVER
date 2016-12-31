/*jshint esversion: 6 */
import React, { Component } from 'react';

class Photos extends Component {
  render() {
    return (
      <div className="photo-section">
        <div className="photo-section--background" style={{'backgroundImage': 'url(images/cart-driver-patio.jpg)'}}></div>
        <div className="photo-section--content">
          <h3>
            Photos
          </h3>
          <hr></hr>
          <div className="tile">
            <img src="images/cart-driver-patio.jpg"/>
          </div>
        </div>
      </div>
    );
  }
}

export default Photos;
