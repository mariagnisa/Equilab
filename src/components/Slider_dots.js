import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const SliderDots = (props) => (
  <div className="dots d-flex">
    <div className="dot aria-hidden"></div>
    <div className="dot"></div>
    <div className="dot"></div>
    <div className="dot"></div>
  </div>
);

export default SliderDots;
