/*jshint esversion: 6 */
import React, { Component } from 'react';

const HomeScreen = (props) => {
  return (
    <div className="home-container" style={{'backgroundImage': 'url(images/cart-driver-oven-pizza.jpg)'}}>
      <div className="tiny-100 home-content">
        <h1 className="bold home-title">CART-DRIVER</h1>
        <h6>CLOSES IN</h6>
        <h1 className="bold clock-numbers">5</h1>
        <h3 className="clock-letters">HR</h3>
        <h1 className="bold clock-numbers">32</h1>
        <h3 className="clock-letters">MIN</h3>
        <h1 className="bold clock-numbers">45</h1>
        <h3 className="clock-letters">SEC</h3>
        <h6 className="bold green">OPEN 12PM - 12AM SEVEN DAYS A WEEK</h6>
      </div>
    </div>
  );
};

export default HomeScreen;
