import React, { Component } from 'react';
// import BodyClassName from 'react-body-classname';

import Slogan from './Slogan';
import About from './About';
// import Slider from './Slider';

import '../style/Start.css';

class Start extends Component {
  render() {
    return (
      <div className="start-background d-flex flex-column flex-md-row">
        <div className="col-12">
          <Slogan />
        </div>
      </div>
    );
  }
}

export default Start;
