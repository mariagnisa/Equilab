import React, { Component } from 'react';

const SliderDots = (props) => {
  return (
    <div className="dots d-flex">
      <div className={"dot" + (props.index === 0 ? 'small' : '')}></div>
      <div className={"dot" + (props.index === 1 ? 'small' : '')}></div>
      <div className={"dot" + (props.index === 2 ? 'small' : '')}></div>
      <div className={"dot" + (props.index === 3 ? 'small' : '')}></div>
    </div>
  );
}


export default SliderDots;
