import React, { Component } from 'react';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

import SliderData from '../data/slider.json';
import SliderDots from './Slider_dots';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const SliderList = (props) => (
  <div>
    <AutoPlaySwipeableViews
      springConfig={{duration: '0.7s', easeFunction: 'ease', delay: '0s'}}
      index={props.index}
      onChangeIndex={props.onChangeIndex}
    >
      <div className="firstSlide">
        <h5>{SliderData[0].title}</h5>
        <p>{SliderData[0].content}</p>
      </div>
      <div className="secondSlide">
        <h5>{SliderData[1].title}</h5>
        <p>{SliderData[1].content}</p>
      </div>
      <div className="thirdSlide">
        <h5>{SliderData[2].title}</h5>
        <p>{SliderData[2].content}</p>
      </div>
      <div className="fourthSlide">
        <h5>{SliderData[3].title}</h5>
        <p>{SliderData[3].content}</p>
      </div>
    </AutoPlaySwipeableViews>
  </div>
);

export default SliderList;
