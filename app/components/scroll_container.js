/*jshint esversion: 6 */
import React, { Component } from 'react';
import MenuList from '../containers/menu_list';
import Photos from '../containers/photos';
import About from '../containers/about';
import Contact from '../containers/contact';

class ScrollContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      containerWidth: 90
    };
  }

  componentDidMount() {
    let scroll = new Event('scroll');
    window.addEventListener('scroll', this.handleScroll.bind(this), false);
    window.dispatchEvent(scroll);

    window.addEventListener('resize', this.handleResize.bind(this), false);
  }

  componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll.bind(this));
  }

  handleScroll(event) {
    const innerHeight = window.innerHeight-100;
    let currentLocation = window.pageYOffset || document.documentElement.scrollTop;

    if (currentLocation === 0) {
      this.setState({
        containerWidth: 90
      });
    } else if (currentLocation >= innerHeight) {
      this.setState({
        containerWidth: 100
      });
    } else {
      let percent = (90 + (currentLocation / innerHeight) * 10);
      this.setState({
        containerWidth: percent
      });
    }
  }

  handleResize(event) {
    this.handleScroll();
  }

  render() {
    return (
      <div className="scroll-container" style={{'width': this.state.containerWidth + '%'}} >
        <MenuList />
        <Photos />
        <About />
        <Contact />
      </div>
    );
  }
};

export default ScrollContainer;
