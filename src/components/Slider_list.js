import React, { Component } from 'react';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const SliderList = (props) => (
  <div>
    <AutoPlaySwipeableViews
      springConfig={{duration: '0.7s', easeFunction: 'ease', delay: '0s'}}
      index={props.index}
      onChangeIndex={props.onChangeIndex}
    >
      <div className="firstSlide">
        <h5>{props.slides[0].title}</h5>
        <p>{props.slides[0].content}</p>
      </div>
      <div className="secondSlide">
        <h5>{props.slides[1].title}</h5>
        <p>{props.slides[1].content}</p>
      </div>
      <div className="thirdSlide">
        <h5>{props.slides[2].title}</h5>
        <p>{props.slides[2].content}</p>
      </div>
      <div className="fourthSlide">
        <h5>{props.slides[3].title}</h5>
        <p>{props.slides[3].content}</p>
      </div>
    </AutoPlaySwipeableViews>
  </div>
);

export default SliderList;
