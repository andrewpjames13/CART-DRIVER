/*jshint esversion: 6 */
import React, { Component } from 'react';

import NavBar from './nav_bar/nav_bar';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state= {
      sections: [
        {
          name: 'home',
          active: true,
          svgPath: 'M24,12.1l-1.4,1.5L12,3.7L1.4,13.6L0,12.1L12,1C12,1,24,12.1,24,12.1z M20,13.9L18,24H6L4,13.9l8-7.4C12,6.5,20,13.9,20,13.9z M13,20c0-0.6-0.4-1-1-1s-1,0.4-1,1s0.4,1,1,1S13,20.6,13,20z M14,15c0-1.1-0.9-2-2-2s-2,0.9-2,2s0.9,2,2,2S14,16.1,14,15z'
        }, {
          name: 'menu',
          active: false,
          svgPath: 'M18,5l-2-3H8L6,5H0v17h24V5H18z M22,12h-4.1c0.6,3.8-2.3,7-5.9,7c-3.6,0-6.5-3.2-5.9-7H2V7h5.1l2-3h5.9l2,3H22V12z M12,9c-2.2,0-4,1.7-4,3.9c0,2.2,1.8,4.1,4,4.1s4-1.8,4-4.1C16,10.7,14.2,9,12,9z M11.6,12.6c-0.6,0.5-1.5,0.5-1.9,0c-0.4-0.5-0.2-1.3,0.4-1.8c0.6-0.5,1.5-0.5,1.9,0C12.4,11.2,12.2,12.1,11.6,12.6z'
        }, {
          name: 'call',
          active: false,
          svgPath: 'M18,5l-2-3H8L6,5H0v17h24V5H18z M22,12h-4.1c0.6,3.8-2.3,7-5.9,7c-3.6,0-6.5-3.2-5.9-7H2V7h5.1l2-3h5.9l2,3H22V12z M12,9c-2.2,0-4,1.7-4,3.9c0,2.2,1.8,4.1,4,4.1s4-1.8,4-4.1C16,10.7,14.2,9,12,9z M11.6,12.6c-0.6,0.5-1.5,0.5-1.9,0c-0.4-0.5-0.2-1.3,0.4-1.8c0.6-0.5,1.5-0.5,1.9,0C12.4,11.2,12.2,12.1,11.6,12.6z'
        }, {
          name: 'photos',
          active: false,
          svgPath: 'M18,5l-2-3H8L6,5H0v17h24V5H18z M22,12h-4.1c0.6,3.8-2.3,7-5.9,7c-3.6,0-6.5-3.2-5.9-7H2V7h5.1l2-3h5.9l2,3H22V12z M12,9c-2.2,0-4,1.7-4,3.9c0,2.2,1.8,4.1,4,4.1s4-1.8,4-4.1C16,10.7,14.2,9,12,9z M11.6,12.6c-0.6,0.5-1.5,0.5-1.9,0c-0.4-0.5-0.2-1.3,0.4-1.8c0.6-0.5,1.5-0.5,1.9,0C12.4,11.2,12.2,12.1,11.6,12.6z',
        }, {
          name: 'nav-menu',
          active: false,
          svgPath: 'M18,5l-2-3H8L6,5H0v17h24V5H18z M22,12h-4.1c0.6,3.8-2.3,7-5.9,7c-3.6,0-6.5-3.2-5.9-7H2V7h5.1l2-3h5.9l2,3H22V12z M12,9c-2.2,0-4,1.7-4,3.9c0,2.2,1.8,4.1,4,4.1s4-1.8,4-4.1C16,10.7,14.2,9,12,9z M11.6,12.6c-0.6,0.5-1.5,0.5-1.9,0c-0.4-0.5-0.2-1.3,0.4-1.8c0.6-0.5,1.5-0.5,1.9,0C12.4,11.2,12.2,12.1,11.6,12.6z'
        }, {
          name: 'press',
          active: false
        }, {
          name:'about',
          active: false
        }, {
          name: 'contact',
          active: false
        }
      ]
    };
  }

  render() {
    return (
      <NavBar sections={this.state.sections} activeSection={this.state.activeSection}/>
    );
  }
}
