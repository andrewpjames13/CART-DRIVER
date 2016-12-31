/*jshint esversion: 6 */
import React, { Component } from 'react';
import MenuList from '../containers/menu_list';
import Photos from '../containers/photos';

class ScrollContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      containerWidth: 90,
      lastLocation: null
    };
  }

  componentDidMount() {
      window.addEventListener('scroll', this.handleScroll.bind(this));
      // this.setState({offsetTop: document.querySelector('.scroll-container').offsetTop});
  }

  componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll.bind(this));
  }

  handleScroll(event) {
    const innerHeight = window.innerHeight-100;
    let currentLocation = event.srcElement.body.scrollTop;

    if (currentLocation === 0) {
      this.setState({
        containerWidth: 90,
        lastLocation: 1
      });
    } else if (this.state.lastLocation < currentLocation) {
      if (currentLocation >= innerHeight) {
        this.setState({
          containerWidth: 100,
          lastLocation: 99
        });
      } else {
        this.setState({
          containerWidth: this.state.containerWidth + 0.2,
          lastLocation: currentLocation
        });
      }
    } else if (this.state.lastLocation > currentLocation) {
      this.setState({
        containerWidth: this.state.containerWidth - 0.2,
        lastLocation: currentLocation
      });
    }
  }

  render() {
    return (
      <div className="scroll-container" style={{'width': this.state.containerWidth + '%'}} >
        <MenuList />
        <Photos />
      </div>
    );
  }
};

export default ScrollContainer;
