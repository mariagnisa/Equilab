import React, { Component } from 'react';
import BodyClassName from 'react-body-classname';

import Slogan from './Slogan';
import Slider from './Slider';

import '../style/Start.css';

class Start extends Component {
  render() {
    return (
      <BodyClassName className="body-start">
        <div className="start d-flex flex-column flex-md-row">
          <div className="col-md-8">
            <Slogan />
          </div>
          <div className="col-md-4">
            <Slider />
          </div>
        </div>
      </BodyClassName>
    );
  }
}

export default Start;
