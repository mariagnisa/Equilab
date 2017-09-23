import React, { Component } from 'react';
import Slogan from './Slogan';
import Slider from './Slider';
//import Routes from './Routes';

import '../style/Start.css';

class Start extends Component {
  render() {
    return (
      <div className="container d-flex">
        <div className="col-6">
          <Slogan />
        </div>
        <div className="col-6">
          <Slider />
        </div>
      </div>
    );
  }
}

export default Start;
