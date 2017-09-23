import React, { Component } from 'react';
import phoneAnimation from '../assets/img/phone_slids.gif';
//import Routes from './Routes';

import '../style/Start.css';

class Start extends Component {
  render() {
    const headline = 'Details';
    const para = 'Afterwards you can analyze your training by looking at your performance, energy consumption, gait distrubution, intensity jumps, intensity,stride, beat, pace, distance, speed,surface hardness, nr of jumps, etc....';

    return (
      <div className="container">
        <h3>{ headline }</h3>
        <p>{ para }</p>
        <img src={phoneAnimation} alt=""/>
      </div>
    );
  }
}

export default Start;
