import React, { Component } from 'react';
import BodyClassName from 'react-body-classname';

// import Slogan from './Slogan';
import Slider from './Slider';
import ScrollToTopOnMount from './Scroll_to_top_on_mount';

import '../style/About.css';

class About extends Component {
  render() {
    return (
      <div>
        <ScrollToTopOnMount />
        <BodyClassName className="about-background ">
          <Slider />
        </BodyClassName>
      </div>
    );
  }
}

export default About;
