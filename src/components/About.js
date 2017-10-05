import React, { Component } from 'react';
import BodyClassName from 'react-body-classname';

// import Slogan from './Slogan';
import Slider from './Slider';

import '../style/About.css';

class About extends Component {
  render() {
    return (
      <BodyClassName className="body-about">
        {/* <div className="about d-flex flex-column flex-md-row"> */}
        <div className="about d-flex">
          <div className="col-12">
            <Slider />
          </div>
        </div>
      </BodyClassName>
    );
  }
}

export default About;
