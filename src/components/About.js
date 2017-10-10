import React, { Component } from 'react';
import BodyClassName from 'react-body-classname';

import Slider from './Slider';
import ScrollToTopOnMount from './Scroll_to_top_on_mount';
import backgroundHomeImage from '../assets/img/background_mobile_home.png';
import backgroundAboutImage from '../assets/img/background_mobile_information.png';

import '../style/About.css';


class About extends Component {

  componentDidMount() {
    document.body.style.background = 'url(' + backgroundAboutImage + ')';
  }

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
