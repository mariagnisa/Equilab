import React, { Component } from 'react';
// import SwipeableViews from 'react-swipeable-views';
// import {  autoPlay } from 'react-swipeable-views-utils';

// const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

class SliderDots extends Component {
  constructor(props) {
    super(props);
  }

  ifHidden() {
  }

  render() {
    return (
      <div className="dots d-flex">
        <div className="dot" ref={(div) => { this.sliderDotsDiv = div}}></div>
        <div className="dot" ref={(div) => { this.sliderDotsDiv = div}}></div>
        <div className="dot" ref={(div) => { this.sliderDotsDiv = div}}></div>
        <div className="dot" ref={(div) => { this.sliderDotsDiv = div}}></div>
      </div>
    );
  }
}

//
// const SliderDots = (props) => (
//   <div className="dots d-flex">
//     <div className="dot aria-hidden"></div>
//     <div className="dot"></div>
//     <div className="dot"></div>
//     <div className="dot"></div>
//   </div>
// );

export default SliderDots;
