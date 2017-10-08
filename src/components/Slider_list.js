import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

import SliderData from '../data/slider.json';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const containerStyles = {
  slide: {
    background: 'green',
  }
};


const SliderList = () => (
  <AutoPlaySwipeableViews>
    <div><h5>{SliderData[0].title}</h5> <p>{SliderData[0].content}</p></div>
    <div><h5>{SliderData[1].title}</h5> <p>{SliderData[1].content}</p></div>
    <div><h5>{SliderData[2].title}</h5> <p>{SliderData[2].content}</p></div>
    <div><h5>{SliderData[3].title}</h5> <p>{SliderData[3].content}</p></div>
  </AutoPlaySwipeableViews>
);

export default SliderList;
