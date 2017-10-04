import React, { Component } from 'react';

//import json data
import SliderData from '../data/slider.json';

//import components
import phoneAnimation from '../assets/img/phone_slids.gif';

//import stylesheet
import '../style/Slider.css';

class Slider extends Component {
  constructor(props) {
  super(props);
  const slides = SliderData.map((slides) => {
     return slides;
  });
  //Set state to json data
  this.state = { slides };
}

  render() {
    return (
      // <div className="container d-flex">
        <div className="slider">
          <img className="phoneAnimation" src={phoneAnimation} alt=""/>
          <h5>{SliderData[0].title}</h5>
          <p>{SliderData[0].content}</p>
        </div>
      // </div>
    );
  }
}

export default Slider;
