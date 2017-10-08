import React, { Component } from 'react';
import BodyClassName from 'react-body-classname';

// import Slogan from './Slogan';
import Slider from './Slider';

import '../style/About.css';

class About extends Component {
  render() {
    const dot = document.querySelector('.aria-hidden');
    console.log(this);


    return (
      <BodyClassName className="about-background ">
        <Slider />
      </BodyClassName>
    );
  }
}

export default About;
