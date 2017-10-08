import React, { Component } from 'react';

//import json data
// import SliderData from '../data/slider.json';

//import components
import PhoneAnimation from '../assets/img/3.gif';
import SliderList from './Slider_list';
import SliderDots from './Slider_dots';

//import stylesheet
import '../style/Slider.css';

class Slider extends Component {

  render() {
    return (
        <div className="slider container d-flex flex-column">
          <img className="phoneAnimation ml-auto mr-auto mt-3" src={PhoneAnimation} alt=""/>
          <SliderList />
          <SliderDots dot="active" />
        </div>
    );
  }
}

export default Slider;
