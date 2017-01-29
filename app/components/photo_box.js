/*jshint esversion: 6 */
import React, { PureComponent } from 'react';

class PhotoBox extends PureComponent {
  render() {
    return(
      <div className="tile">
        <img src={this.props.photoSrc} />
      </div>
    );
  }
}

export default PhotoBox;
